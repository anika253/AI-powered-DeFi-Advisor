const express = require('express');
const { executeTrade } = require('../controllers/tradeController');
const router = express.Router();

router.post('/execute', executeTrade);

module.exports = router;
