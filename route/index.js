// Create the router object
const route = require('express').Router();

// Handles routes for project
route.use('/photos', require('./photo'));
route.use('/users', require('./user'));
route.use('/api-docs', require('./swagger'));
route.use('/auth/github', require('./passport'));

// Handles GET requests
route.get('/', (req, res) => res.send('Welcome to Photo API'));
route.get('/login', (req, res) => res.send('Call ../auth/github to authenticate'));
route.get('/logout', (req, res) => { req.logout(() => { res.redirect('/') })});

// Export routes object
module.exports = route;