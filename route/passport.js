// Create the router object
const route = require('express').Router();
const passport = require('passport');

// Handles and GET HTTP requests
route.get('/', passport.authenticate('github', { scope: [ 'user:email' ]}));
route.get('/callback', passport.authenticate('github', { 
        successRedirect: '/',
        failureRedirect: '/login' }));

module.exports = route;