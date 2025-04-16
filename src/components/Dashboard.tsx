import React from 'react';
import { BarChart3, PieChart, TrendingUp, Shield, Brain, ArrowUpRight } from 'lucide-react';
import PortfolioOverview from './PortfolioOverview';
import AIRecommendations from './AIRecommendations';
import RiskAnalysis from './RiskAnalysis';
import { mockPortfolio, mockRecommendations, mockRiskMetrics } from '../mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold">DeFi Robo-Adviser</h1>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <ArrowUpRight className="w-4 h-4" />
            Connect Wallet
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PortfolioOverview portfolio={mockPortfolio} />
        <AIRecommendations recommendations={mockRecommendations} />
      </div>

      <div className="mt-6">
        <RiskAnalysis metrics={mockRiskMetrics} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {[
          { icon: BarChart3, label: 'Portfolio Analytics', value: 'Advanced' },
          { icon: PieChart, label: 'Asset Allocation', value: 'Optimized' },
          { icon: TrendingUp, label: 'AI Predictions', value: '24/7 Active' },
          { icon: Shield, label: 'Security Level', value: 'Maximum' },
        ].map((stat, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-xl">
            <stat.icon className="w-6 h-6 text-blue-400 mb-2" />
            <div className="text-sm text-gray-400">{stat.label}</div>
            <div className="text-lg font-semibold">{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;