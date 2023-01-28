// Create the Express object and set port
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// Add Swagger UI
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Use Swagger in application
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Decode the body from the HTTP request
app.use(bodyParser.json());

// Handles any http requests
app.use('/', require('./route'));

// Listens to port and logs event to the console
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});