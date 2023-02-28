// Require Express-Validator
const { param, body, validationResult } = require('express-validator');

// Define Validation Chain API
const id = param('id', 'Invalid MongoID').isMongoId();
const githubId = body('githubId', 'Invalid GitHub ID').isString();
const userName = body('userName', 'Invalid Username').isString();

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
module.exports = { id, githubId, userName, results };