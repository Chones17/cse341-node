// Add Express and CORS to the project and set the port
require('dotenv').config();
const GitHubStrategy = require('passport-github2').Strategy;
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./model/User');
const connect = require('./config/connect');
const port = process.env.PORT || 3000;

// Connect to database
connect();

// Create Date object to track listening
let date = new Date();

// Passport configuration
passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: '/auth/github/callback'
},
async (accessToken, refreshToken, profile, done) => {
    User.findOrCreate({githubId: profile.id}, (error, user) => {
        return done(error, user);
    });
}));

// Serialize and deserialize user session
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
    User.findById(id, (error, user) => done(error, user));
});

// Use CORS, JSON, UrlEncoded, and route for application
app.use(cors({origin: '*'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', require('./route'));

// Listens to port and logs event to the console
mongoose.connection.once('open', () => {
    app.listen(port, () => console.log(`App listening on port ${port}: ${date}`));
});