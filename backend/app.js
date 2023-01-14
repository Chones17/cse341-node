// Create the Express object and set port
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Handles any http requests
app.use('/', require('./route'));
app.use('/', require('./model'));

// Listens to port and logs event to the console
app.listen(port, () => {
    console.log(`App listening on ${port}.`);
});