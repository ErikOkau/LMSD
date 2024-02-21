import express from 'express';
import passport from 'passport';
import session from 'express-session';
import passportSteam from 'passport-steam';

const SteamStrategy = passportSteam.Strategy;
const app = express();

const port = 7069;

// Required to get data from user for sessions
passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

// Initiate Strategy
passport.use(new SteamStrategy({
	returnURL: 'http://localhost:' + port + '/api/auth/steam/return',
	realm: 'http://localhost:' + port + '/',
	apiKey: '00C67ACCD4AC21E7664C4BE8FE8F350D'
	}, function (identifier, profile, done) {
		process.nextTick(function () {
			profile.identifier = identifier;
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
	// SEND USER DATA TO YOUR DATA BASE HERE
	res.send(req.user);
	console.log(req.user)
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