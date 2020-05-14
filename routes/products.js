const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const productsController = require('../controllers/products')

const router = express.Router();

router.get('/', productsController.getFetchAll);

router.post('/add-product', productsController.postAddProduct);

module.exports = {
    router
}