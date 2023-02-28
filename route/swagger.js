// Create the router object
const route = require('express').Router();

// Add Swagger UI
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

// Use Swagger in application
route.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Export routes object
module.exports = route;