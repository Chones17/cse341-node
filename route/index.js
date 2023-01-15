// Create the router object
const route = require('express').Router();

// Handles any http GET requests
route.get('/', require('../controller'));
route.use('/contacts', require('./contacts'));

// Export routes object
module.exports = route;