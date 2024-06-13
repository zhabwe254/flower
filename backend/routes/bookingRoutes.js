const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.use('/', bookingController);

module.exports = router;
