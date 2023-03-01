// Require swagger-autogen dependency
const swaggerAutogen = require('swagger-autogen')();

// Create swagger document
const doc = {
  info: {
    title: 'REST PHOTO API',
    description: 'L07 Personal Assignment API',
  },
  host: 'travisstirling-07-personal.onrender.com',
  schemes: ['https'],
  securityDefinitions: {
    github_oauth: {
      type: 'oauth2',
      authorizationUrl: 'https://travisstirling-07-personal.onrender.com/auth/github',
      flow: 'accessCode',
      scopes: {
        'read:user': 'Read the user'
      }
    }
  },
  security: {
    github_oauth: [
      'read:user'
    ]
  }
};

// Create output file and set endpoint file
const outputFile = './swagger.json';
const endpointsFiles = ['./route/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);