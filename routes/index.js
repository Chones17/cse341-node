// Create the router object
const route = require('express').Router();

// Handles any http GET requests
route.get('/', require('../controllers'));

// Handles routes for project
route.use('/photos', require('./photos'));
route.use('/users', require('./users'));
route.use('/api-docs', require('./swagger'));
route.use('/auth/github', require('./passport'));

// Export routes object
module.exports = route;