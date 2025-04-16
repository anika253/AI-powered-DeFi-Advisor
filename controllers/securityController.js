const { secureTrade } = require('../services/litService');

exports.secureTrade = async (req, res) => {
    try {
        const { asset, amount, action } = req.body;
        const result = await secureTrade(asset, amount, action);
        res.json({ status: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
