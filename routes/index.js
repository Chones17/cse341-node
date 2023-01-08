// Create the router object
const routes = require('express').Router();

// Handles any http GET requests
routes.get('/', require('../controllers'));

// Export routes object
module.exports = routes;