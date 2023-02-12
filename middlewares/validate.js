
const { body, validationResult } = require('express-validator');

const title = body('title', 'Invalid Title').isString();
const photographer = body('photographer', 'Invalid Photographer').isString();
const description = body('description', 'Invalid Description').isString();
const location = body('location', 'Invalid Location').isString();
const publishDate = body('publishDate', 'Invalid Date').isString();
const fileName = body('fileName', 'Invalid File Name').isString();
const filePath = body('filePath', 'Invalid File Path').isString();

const validation = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(412).json({ errors: errors.array() });
    }
}

module.exports = { 
    title, 
    photographer, 
    description, 
    location, 
    publishDate, 
    fileName, 
    filePath, 
    validation 
};