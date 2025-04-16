import React from 'react';
import { RiskMetrics } from '../types';
import { Shield, AlertTriangle, TrendingUp } from 'lucide-react';

interface Props {
  metrics: RiskMetrics;
}

const RiskAnalysis: React.FC<Props> = ({ metrics }) => {
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="w-6 h-6 text-blue-400" />
        <h2 className="text-xl font-bold">Risk Analysis</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <span className="text-sm text-gray-300">Volatility</span>
          </div>
          <div className="text-lg font-bold">{metrics.volatility}%</div>
        </div>

        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-gray-300">Sharpe Ratio</span>
          </div>
          <div className="text-lg font-bold">{metrics.sharpeRatio}</div>
        </div>

        <div className="bg-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm text-gray-300">Risk Level</span>
          </div>
          <div className={`text-lg font-bold ${getRiskColor(metrics.riskLevel)}`}>
            {metrics.riskLevel}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysis;