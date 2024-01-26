const path = require('path');

const express = require('express');

const controProduct = require('../controller/product');
const rootDir = require('../util/path');

const router = express.Router();




router.get('/add-product',controProduct.getAddProduct);

router.post('/add-product',controProduct.postAddProduct);

exports.routes = router;

