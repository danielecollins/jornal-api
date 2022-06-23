const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Jornaling API',
    description: 'This is an API used for jornaling'
  },
  host: 'cse341-personal-project.herokuapp.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./app.js');
// });