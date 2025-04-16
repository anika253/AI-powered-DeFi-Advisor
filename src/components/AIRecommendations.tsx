import React from 'react';
import { AIRecommendation } from '../types';
import { Brain, TrendingUp, TrendingDown } from 'lucide-react';

interface Props {
  recommendations: AIRecommendation[];
}

const AIRecommendations: React.FC<Props> = ({ recommendations }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-6 h-6 text-blue-400" />
        <h2 className="text-xl font-bold">AI Recommendations</h2>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {rec.type === 'BUY' ? (
                  <TrendingUp className="w-5 h-5 text-green-400" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-400" />
                )}
                <span className={rec.type === 'BUY' ? 'text-green-400' : 'text-red-400'}>
                  {rec.type} {rec.asset}
                </span>
              </div>
              <div className="text-sm text-gray-400">
                Confidence: {rec.confidence}%
              </div>
            </div>
            <p className="text-sm text-gray-300">{rec.reason}</p>
            <div className="mt-2 text-sm text-gray-400">{rec.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIRecommendations;