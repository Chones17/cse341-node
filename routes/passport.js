const route = require('express').Router();
// Redirect the user to the OAuth 2.0 provider for authentication.  When
// complete, the provider will redirect the user back to the application at
//     /auth/provider/callback
route.get('/auth/provider', passport.authenticate('provider'));

// The OAuth 2.0 provider has redirected the user back to the application.
// Finish the authentication process by attempting to obtain an access
// token.  If authorization was granted, the user will be logged in.
// Otherwise, authentication has failed.
route.get(
    '/auth/provider/callback', 
    passport.authenticate('provider', { successRedirect: '/', failureRedirect: '/login' })
);

module.exports = route;