// Require the Photos router, Validation middleware, and Photos controller
const route = require('express').Router();
const validate = require('../middleware/user');
const controller = require('../controller/user');
const { authenticated } = require('../middleware/passport');

// Handles any http GET requests
route.get('/', authenticated, controller.getUsers);
route.get('/:id', authenticated, validate.id, validate.results, controller.getUser);

// Handles any http POST requests
route.post('/',
    authenticated,
    validate.githubId, 
    validate.userName,
    validate.results,
    controller.postUser);

// Handles any http PUT requests
route.put('/:id',
    authenticated,
    validate.id,
    validate.githubId, 
    validate.userName,
    validate.results,
    controller.putUser);

// Handles any http DELETE requests
route.delete('/:id', authenticated, validate.id, validate.results, controller.deleteUser);

// Export route object
module.exports = route;