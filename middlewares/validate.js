// Require Express-Validator
const { param, body, validationResult } = require('express-validator');

// Define Validation Chain API
const id = param('id', 'Invalid MongoID').isMongoId();
const title = body('title', 'Invalid Title').isString();
const photographer = body('photographer', 'Invalid Photographer').isString();
const description = body('description', 'Invalid Description').isString();
const location = body('location', 'Invalid Location').isString();
const publishDate = body('publishDate', 'Invalid Date').isDate({format: "MM/DD/YYYY"});
const fileName = body('fileName', 'Invalid File Name').isString();
const filePath = body('filePath', 'Invalid File Path').isString();

// GET Photo route validation
const results = (req, res, next) => {

    // Return GET validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
    } else {
        next();
    }
}

// Export validation function
module.exports = { 
    id,
    title,
    photographer,
    description,
    location,
    publishDate,
    fileName,
    filePath,
    results
};