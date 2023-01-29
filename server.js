// Create the Express object and set port
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

// Use Cors, JSON, UrlEncoded, and route for application
app
    .use(cors({origin: '*'}))
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .use('/', require('./route'));

// Listens to port and logs event to the console
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});