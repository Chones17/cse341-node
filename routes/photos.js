// Create the Photos router object
const route = require('express').Router();
const validate = require('../middlewares/validate');

// Require Photos controller
const photosController = require('../controllers/photos');

// Handles any http GET requests
route.get('/', photosController.getPhotos);
route.get('/:id', photosController.getPhoto);

// Handles any http POST requests
route.post('/', 
    validate.title, 
    validate.photographer,
    validate.description,
    validate.location,
    validate.publishDate,
    validate.fileName,
    validate.filePath,
    validate.validation, 
    photosController.postPhoto
);

// Handles any http PUT requests
route.put('/:id', 
    validate.title, 
    validate.photographer,
    validate.description,
    validate.location,
    validate.publishDate,
    validate.fileName,
    validate.filePath,
    validate.validation, 
    photosController.putPhoto
);

// Handles any http DELETE requests
route.delete('/:id', photosController.deletePhoto);

// Export route object
module.exports = route;