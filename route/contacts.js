// Create the router object
const route = require('express').Router();
const validate = require('../validate/contacts');

// Require Contacts controller
const contactsController = require('../controller/contacts');

// Handles any http GET requests
route.get('/', contactsController.getContacts);
route.get('/:id', contactsController.getOne);

// Handles any http POST requests
route.post('/', 
    validate.firstName, 
    validate.lastName,
    validate.email,
    validate.favoriteColor,
    validate.birthday,
    validate.validation, 
    contactsController.createContact
);

// Handles any http PUT requests
route.put('/:id', 
    validate.firstName, 
    validate.lastName,
    validate.email,
    validate.favoriteColor,
    validate.birthday,
    validate.validation, 
    contactsController.updateContact
);

// Handles any http DELETE requests
route.delete('/:id', contactsController.deleteContact);

// Export routes object
module.exports = route;