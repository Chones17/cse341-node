const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'REST API',
    description: 'L04 Personal Assignment API',
  },
  host: 'https://travisstirling-04-personal.onrender.com/',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./route/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);