import swaggerAutogen from 'swagger-autogen'

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'localhost:8080',
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['src/routes/index.ts']

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, endpointsFiles, doc)
