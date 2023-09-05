const productsRoute = require('./products/index');
const commonRoute = require('./common/index');

const router = (app) => {
  app.use('/products', productsRoute);
  app.use('/', commonRoute);
};

module.exports = router;
