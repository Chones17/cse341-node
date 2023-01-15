// Create the router object
const route = require('express').Router();

// Handles any http GET requests
route.get('/', require('../controller/contacts').getContacts);
route.get('/:id', require('../controller/contacts').getOne);

// Export routes object
module.exports = route;