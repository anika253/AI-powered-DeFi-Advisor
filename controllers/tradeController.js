const { executeTrade } = require('../services/safeService');

exports.executeTrade = async (req, res) => {
    try {
        const { asset, amount, action } = req.body;
        const transactionHash = await executeTrade(asset, amount, action);
        res.json({ transactionHash });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
