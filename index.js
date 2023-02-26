// Add Express and CORS to the project and set the port
require('dotenv').config();
const GitHubStrategy = require('passport-github2').Strategy;
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const Auth = require('./models/auth');
const connectDB = require('./models/db')
const port = process.env.PORT || 3000;

connectDB();

// Create Date object to track listening
let date = new Date();

// Passport configuration
passport
    .use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: '/auth/github/callback'
    },
    async (accessToken, refreshToken, profile, done) => {

    }));

// Serialize and deserialize user session
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
    Auth.findById(id, (error, user) => done(error, user))
});

// Use CORS, JSON, UrlEncoded, and route for application
app
    .use(cors({origin: '*'}))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use('/', require('./routes'));

// Listens to port and logs event to the console
app.listen(port, () => {
    console.log(`App listening on port ${port}: ${date}`);
});