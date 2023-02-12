// Require the Photos router and Photos middleware
const route = require('express').Router();
const validate = require('../middlewares/photos');

// Handles any http GET requests
route.get('/', validate.getValidations);
route.get('/:id', validate.id, validate.getValidation);

// Handles any http POST requests
route.post('/',
    validate.title,
    validate.photographer,
    validate.description,
    validate.location,
    validate.publishDate,
    validate.fileName,
    validate.filePath,
    validate.postValidation
);

// Handles any http PUT requests
route.put('/:id', 
    validate.id,
    validate.title,
    validate.photographer,
    validate.description,
    validate.location,
    validate.publishDate,
    validate.fileName,
    validate.filePath,
    validate.putValidation
);

// Handles any http DELETE requests
route.delete('/:id', validate.id, validate.deleteValidation);

// Export route object
module.exports = route;