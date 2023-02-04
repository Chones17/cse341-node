// Add Express and CORS to the project and set the port
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

// Use CORS, JSON, UrlEncoded, and route for application
app
    .use(cors({origin: '*'}))
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .use('/', require('./route'));

// Listens to port and logs event to the console
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});