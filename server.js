// Create the Express object and set port
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// Decode the body from the HTTP request
app.use(bodyParser.json());

// Handles any http requests
app.use('/', require('./route'));

// Listens to port and logs event to the console
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});