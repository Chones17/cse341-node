// Require the Photos router, Validation middleware, and Photos controller
const route = require('express').Router();
const validate = require('../middleware/photo');
const controller = require('../controller/photo');
const { authenticated }  = require('../middleware/passport');

// Handles any http GET requests
route.get('/', authenticated, controller.getPhotos);
route.get('/:id', authenticated, validate.id, validate.results, controller.getPhoto);

// Handles any http POST requests
route.post('/', authenticated,
    validate.title, 
    validate.photographer, 
    validate.description, 
    validate.location, 
    validate.publishDate, 
    validate.fileName, 
    validate.filePath,
    validate.results, 
    controller.postPhoto);

// Handles any http PUT requests
route.put('/:id', authenticated,
    validate.id, 
    validate.title, 
    validate.photographer, 
    validate.description,
    validate.location, 
    validate.publishDate, 
    validate.fileName, 
    validate.filePath,
    validate.results, 
    controller.putPhoto);

// Handles any http DELETE requests
route.delete('/:id', authenticated, validate.id, validate.results, controller.deletePhoto);

// Export route object
module.exports = route;