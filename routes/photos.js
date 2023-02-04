// Create the Photos router object
const route = require('express').Router();

// Require Photos controller
const photosController = require('../controllers/photos');

// Handles any http GET requests
route.get('/', photosController.getPhotos);
route.get('/:id', photosController.getPhoto);

// Handles any http POST requests
route.post('/', photosController.postPhoto);

// Export route object
module.exports = route;