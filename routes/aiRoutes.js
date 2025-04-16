const express = require('express');
const { getRecommendations } = require('../controllers/aiController');
const router = express.Router();

router.post('/recommend', getRecommendations);

module.exports = router;
