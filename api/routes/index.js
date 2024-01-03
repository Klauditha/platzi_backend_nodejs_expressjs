const express = require('express');
//const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('./swagger.json');
//const swaggerJsdoc = require('swagger-jsdoc');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerApi(app) {
  const router = express.Router();
/*
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    apis: ['./routes*.js'], // files containing annotations as above
  };
*/
  //const openapiSpecification = swaggerJsdoc(options);
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  //router.use('/api-docs', swaggerUi.serve);
  //router.get('/api-docs', swaggerUi.setup(null, options));
  //router.get('/api-docs', swaggerUi.setup(swaggerDocument));
  //router.get('/api-docs', swaggerUi.setup(openapiSpecification));
}

module.exports = routerApi;
