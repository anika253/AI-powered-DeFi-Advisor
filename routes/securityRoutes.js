const express = require('express');
const { secureTrade } = require('../controllers/securityController');
const router = express.Router();

router.post('/secure', secureTrade);

module.exports = router;
