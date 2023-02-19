// Create the router object
const route = require('express').Router();
const passport = require('../middlewares/passport');

// Handles and GET HTTP requests
route.get('/', passport.authenticate('github'));
route.get('/callback', 
    passport.authenticate(
        'github', { 
            successRedirect: '/', 
            failureRedirect: '/login' 
        }
    )
);

module.exports = route;