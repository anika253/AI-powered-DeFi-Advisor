import axios from "axios";
import dotenv from "dotenv";
import { executeSafeTransaction } from "../services/safeService.js";

dotenv.config();

const VENICE_API_KEY = process.env.VENICE_API_KEY;
const AI_API_URL = "https://api.venice.ai/trade-recommendations";

async function getTradeRecommendation(req, res) {
    try {
        const { userId } = req.params;
        const response = await axios.get(`${AI_API_URL}/${userId}`, {
            headers: { Authorization: `Bearer ${VENICE_API_KEY}` },
        });

        const trade = response.data;
        if (trade.recommendation === "BUY") {
            await executeSafeTransaction(trade.asset, trade.amount);
        }

        res.json(trade);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { getTradeRecommendation };
