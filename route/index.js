// Create the router object
const route = require('express').Router();

// Handles any http GET requests
route.get('/', require('../controller'));

// Handles routes for project
route.use('/contacts', require('./contacts'));
route.use('/api-docs', require('./swagger'));

// Export routes object
module.exports = route;