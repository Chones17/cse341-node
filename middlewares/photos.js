// Require Validators and Photos controller
const { param, body, validationResult } = require('express-validator');
const photosController = require('../controllers/photos');

// Define Validation Chain API
const id = param('id', 'Invalid MongoID').isMongoId();
const title = body('title', 'Invalid Title').isString();
const photographer = body('photographer', 'Invalid Photographer').isString();
const description = body('description', 'Invalid Description').isString();
const location = body('location', 'Invalid Location').isString();
const publishDate = body('publishDate', 'Invalid Date').isDate({format: "MM/DD/YYYY"});
const fileName = body('fileName', 'Invalid File Name').isString();
const filePath = body('filePath', 'Invalid File Path').isString();

// GET Photos route validation
const getValidations = (req, res) => {

    // Pass GET HTTP request to controller
    photosController.getPhotos(req, res);
}

// GET Photo route validation
const getValidation = (req, res) => {

    // Return GET validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Pass GET HTTP request to controller
    photosController.getPhoto(req, res);
}

// POST Photo route validation
const postValidation = (req, res) => {

    // Return POST validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Pass POST HTTP request to controller
    photosController.postPhoto(req, res);
}

// PUT Photo route validation
const putValidation = (req, res) => {

    // Return PUT validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Pass PUT HTTP request to controller
    photosController.putPhoto(req, res);
}

// DELETE Photo route validation
const deleteValidation = (req, res) => {

    // Return DELETE validation errors
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Pass DELETE HTTP request to controller
    photosController.deletePhoto(req, res);
}

// Export falidation functions
module.exports = { 
    id,
    title, 
    photographer,
    description,
    location,
    publishDate,
    fileName,
    filePath,
    getValidations,
    getValidation,
    postValidation,
    putValidation,
    deleteValidation
};