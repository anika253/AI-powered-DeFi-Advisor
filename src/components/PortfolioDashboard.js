import React, { useState } from 'react';
import axios from 'axios';

const PortfolioDashboard = () => {
    const [recommendation, setRecommendation] = useState(null);

    const fetchRecommendation = async () => {
        const response = await axios.post('/ai/recommend', { portfolio: [...] });
        setRecommendation(response.data.recommendation);
    };

    return (
        <div>
            <button onClick={fetchRecommendation}>Get AI Advice</button>
            {recommendation && <pre>{JSON.stringify(recommendation, null, 2)}</pre>}
        </div>
    );
};

export default PortfolioDashboard;
