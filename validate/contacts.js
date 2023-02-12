const { body, validationResult } = require('express-validator');

const firstName = body('firstName').isString();
const lastName = body('lastName').isString();
const email = body('email').isEmail();
const favoriteColor = body('favoriteColor').isString();
const birthday = body('birthday').isDate();

const validation = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
}

module.exports = { firstName, lastName, email, favoriteColor, birthday, validation };