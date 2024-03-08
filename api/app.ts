import express from 'express';
import passport from 'passport';
import session from 'express-session';
import passportSteam from 'passport-steam';
import "dotenv/config";
import { PrismaClient, Role } from '@prisma/client';
import { Issuer, type Client } from 'openid-client';
import SteamApi, { type IGetNewsForAppParams, type IGetNewsForAppResponse } from '@varandas/steam'

const apiKey = process.env.Steam_API_Key

const SteamApiFixed = (SteamApi as any).default as typeof SteamApi

const steamOpenIDEndpoint = 'https://steamcommunity.com/openid';
const steamApi = new SteamApiFixed(apiKey as string)

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
	apiKey: apiKey as string
}, async function (identifier, profile, done) {
	process.nextTick(async function () {
		console.log("nexTick prosses in server")
		console.log("Identifier: " + identifier)


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

	console.log("Profile: " + profile)
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

	console.log(req.user)
});


// Routes for authentication
app.get('/api/auth/steam', passport.authenticate('steam', { failureRedirect: '/' }), function (req, res) {
	res.redirect('/')

	console.log("/api/auth/steam, req.user: " + req.user)
});
app.get('/api/auth/steam/return', passport.authenticate('steam', { failureRedirect: '/' }), function (req, res) {
	res.redirect('/')

	console.log("/api/auth/steam/return, req.user: " + req.user)
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

	console.log("/api/user, req.user: " + req.user)
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

	console.log('Logged out');
});

app.get('/api/user/:id', async (req, res) => {
	const user = await prisma.steamUser.findUnique({
		where: { steamId: req.params.id },
	});
	res.json(user);

	console.log("/api/user/:id, user: " + user)
});

app.get('/api/steam/level/:id', async (req, res) => {
	const steamId = req.params.id;
	const level = fetch(`http://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${apiKey}&steamid=${steamId}`)
	res.json(level);

	console.log(level)
});

export const userStatsService = steamApi.getUserStatsService()
app.get('/api/steam/achievements/:id', async (req, res) => {
	const steamId = req.params.id;
	const achievements = await userStatsService.getPlayerAchievements({
		steamid: steamId,
		appid: 440,
	})
	res.json(achievements);

	console.log("Achievements: " + achievements)
});




export default {
	path: '/api',
	handler: app
}