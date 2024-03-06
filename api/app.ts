import express from 'express';
import passport from 'passport';
import session from 'express-session';
import passportSteam from 'passport-steam';
import "dotenv/config";
import { PrismaClient, Role } from '@prisma/client';

const SteamAPI = process.env.Steam_API_Key

const SteamStrategy = passportSteam.Strategy;
const prisma = new PrismaClient()
const app = express();

const port = 7069;

// Required to get data from user for sessions
passport.serializeUser((user, done) => {
	done(null, user);
});

// Required to get data from user for sessions
passport.deserializeUser((user, done) => {
	done(null, user as Express.User);
});

// Initiate Strategy
passport.use(new SteamStrategy({
	returnURL: 'http://localhost:' + port + '/api/auth/steam/return',
	realm: 'http://localhost:' + port + '/',
	apiKey: SteamAPI as string
}, async function (identifier, profile, done) {
	process.nextTick(async function () {
		console.log("nexTick prosses in server")
		console.log(identifier)


		const { steamid, personaname, profileurl, avatar, avatarmedium, avatarfull, avatarhash, lastlogoff, personastate, primaryclanid, timecreated, personastateflags } = profile._json;

		const userData = {
			steamId: steamid,
			username: personaname,
			profileurl,
			avatar,
			avatarmedium,
			avatarfull,
			avatarhash,
			lastlogoff,
			personastate,
			primaryclanid,
			timecreated,
			personastateflags,
			displayName: personaname,
		};

		// Create or update the user in the database
		const user = await prisma.steamUser.upsert({
			where: { steamId: steamid },
			update: userData,
			create: userData
		});

		return done(null, profile);
	});
}
));


// Middleware
app.use(session({
	secret: 'secret key',
	saveUninitialized: true,
	resave: false,
	cookie: {
		maxAge: 3600000
	}
}));


app.use(passport.initialize());
app.use(passport.session());


// Initiate app
app.listen(port, () => {
	console.log('Listening, port ' + port);
});

app.get('/', (req, res) => {
	// Send user data to database here
	res.send(req.user);
});


// Routes for authentication
app.get('/api/auth/steam', passport.authenticate('steam', { failureRedirect: '/' }), function (req, res) {
	res.redirect('/')
});
app.get('/api/auth/steam/return', passport.authenticate('steam', { failureRedirect: '/' }), function (req, res) {
	res.redirect('/')
});


// Route to get user data if logged in or not
app.get('/api/user', (req, res) => {
	if (req.isAuthenticated()) {
		// User is logged in so send back data
		res.json(req.user);
	} else {
		// Send back empty object if not logged in
		res.json({});
	}
});


// Logout route
app.get('/api/logout', (req, res) => {
	req.logout({}, (err) => {
		if (err) {
			console.log(err);
		} else {
			res.redirect('/');
		}
	});
});


export default {
	path: '/api',
	handler: app
}