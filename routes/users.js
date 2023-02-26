// Require the Photos router, Validation middleware, and Photos controller
const route = require('express').Router();
const validate = require('../middlewares/validate-users');
const usersController = require('../controllers/users');
const { authenticated } = require('../middlewares/passport');

// Handles any http GET requests
route.get('/', usersController.getUsers);
route.get('/:id', authenticated, validate.id, usersController.getUser);

// Handles any http POST requests
route.post('/', authenticated,
    validate.githubId, 
    validate.userName,
    validate.results,
    usersController.postUser
);

// Handles any http PUT requests
route.put('/:id', authenticated,
    validate.id,
    validate.githubId, 
    validate.userName,
    validate.results,
    usersController.putUser
);

// Handles any http DELETE requests
route.delete('/:id', authenticated, validate.id, validate.results, usersController.deleteUser);

// Export route object
module.exports = route;