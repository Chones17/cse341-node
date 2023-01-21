// Create the router object
const route = require('express').Router();

// Require Contacts controller
const contactsController = require('../controller/contacts');

// Handles any http GET requests
route.get('/', contactsController.getContacts);
route.get('/:id', contactsController.getOne);

// Handles any http POST requests
route.post('/', contactsController.createContact);

// Handles any http PUT requests
route.put('/:id', contactsController.updateContact);

// Handles any http DELETE requests
route.delete('/:id', contactsController.deleteContact);

// Export routes object
module.exports = route;