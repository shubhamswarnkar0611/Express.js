const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const controShop = require('../controller/shop-contro');

const router = express.Router();

router.get('/', controShop.getShop);

module.exports = router;
