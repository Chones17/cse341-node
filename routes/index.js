// Create the router object
const routes = require('express').Router();

// Handles any http GET requests
routes.get('/', (req, res) => {

    // Send Reponse to http GET requests
    res.send('Travis Stirling');
});

// Export routes object
module.exports = routes;