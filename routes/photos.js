// Require the Photos router, Validation middleware, and Photos controller
const route = require('express').Router();
const validate = require('../middlewares/validate-photos');
const photosController = require('../controllers/photos');
const { authenticated } = require('../middlewares/passport');

// Handles any http GET requests
route.get('/', authenticated, photosController.getPhotos);
route.get('/:id', authenticated, validate.id, photosController.getPhoto);

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
    photosController.postPhoto
);

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
    photosController.putPhoto
);

// Handles any http DELETE requests
route.delete('/:id', authenticated, validate.id, validate.results, photosController.deletePhoto);

// Export route object
module.exports = route;