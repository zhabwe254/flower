const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.use('/', customerController);

module.exports = router;
