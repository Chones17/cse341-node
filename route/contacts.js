// Create the router object
const route = require('express').Router();

// Require Contacts controller
const contactsController = require('../controller/contacts');

// Handles any http GET requests
route.get('/', contactsController.getContacts);
route.get('/:id', contactsController.getOne);

// Export routes object
module.exports = route;