import React from 'react';
import { Portfolio } from '../types';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface Props {
  portfolio: Portfolio;
}

const PortfolioOverview: React.FC<Props> = ({ portfolio }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-bold mb-4">Portfolio Overview</h2>
      
      <div className="mb-6">
        <div className="text-3xl font-bold">${portfolio.totalValue.toLocaleString()}</div>
        <div className="flex items-center gap-2 text-sm">
          {portfolio.performance.daily >= 0 ? (
            <>
              <ArrowUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400">+{portfolio.performance.daily}%</span>
            </>
          ) : (
            <>
              <ArrowDown className="w-4 h-4 text-red-400" />
              <span className="text-red-400">{portfolio.performance.daily}%</span>
            </>
          )}
          <span className="text-gray-400">24h</span>
        </div>
      </div>

      <div className="space-y-4">
        {portfolio.assets.map((asset) => (
          <div key={asset.id} className="flex items-center justify-between">
            <div>
              <div className="font-medium">{asset.name}</div>
              <div className="text-sm text-gray-400">{asset.symbol}</div>
            </div>
            <div className="text-right">
              <div>${asset.value.toLocaleString()}</div>
              <div className="text-sm text-gray-400">{asset.allocation}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioOverview;