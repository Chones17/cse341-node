// Create the router object
const route = require('express').Router();

// Handles routes for project
route.use('/photos', require('./photo'));
route.use('/users', require('./user'));
route.use('/api-docs', require('./swagger'));
route.use('/auth/github', require('./passport'));

// Export routes object
module.exports = route;