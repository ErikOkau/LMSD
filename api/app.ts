import express from 'express';
import passport from 'passport';
import session from 'express-session';
import passportSteam from 'passport-steam';
import "dotenv/config";
import { PrismaClient } from '@prisma/client';

const SteamAPI = process.env.Steam_API_Key

const SteamStrategy = passportSteam.Strategy;
const prisma = new PrismaClient()
const app = express();

const port = 7069;

// Required to get data from user for sessions
passport.serializeUser((user, done) => {
	done(null, user);
});

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

			

			return done(null, profile);
		});
	}
));

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


// Routes
app.get('/api/auth/steam', passport.authenticate('steam', {failureRedirect: '/'}), function (req, res) {
	res.redirect('/')
});

app.get('/api/auth/steam/return', passport.authenticate('steam', {failureRedirect: '/'}), function (req, res) {
	res.redirect('/')
});



export default {
	path: '/api',
	handler: app
}