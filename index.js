// Add Express and CORS to the project and set the port
const express = require('express');
const app = express();
const cors = require('cors');
const session = require('cookie-session');
const passport = require('passport');
const port = process.env.PORT || 3000;

// Create Date object to track listening
let date = new Date();

// Use CORS, JSON, UrlEncoded, and route for application
app
    .use(cors({origin: '*'}))
    .use(express.json())
    .use(express.urlencoded({extended: true}))
    .use(cookieSession({name: 'github-auth-session', keys: ['key1', 'key2']}))
    .use(passport.initialize())
    .use(passport.session())
    .use('/', require('./routes'));

// Listens to port and logs event to the console
app.listen(port, () => {
    console.log(`App listening on port ${port}: ${date}`);
});