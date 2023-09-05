const express = require('express');
const productsController = require('../../controller/ProductsController');

const router = express.Router();

router.post('/store', productsController.store);
router.get('/create', productsController.create);
router.get('/:id/edit', productsController.edit);
router.put('/:id', productsController.update);
router.delete('/:id', productsController.destroy);
router.get('/:slug', productsController.detail);
router.get('/', productsController.index);

module.exports = router;
