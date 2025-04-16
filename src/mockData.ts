import { Portfolio, AIRecommendation, RiskMetrics } from './types';

export const mockPortfolio: Portfolio = {
  totalValue: 125750.42,
  assets: [
    {
      id: '1',
      name: 'Ethereum',
      symbol: 'ETH',
      amount: 12.5,
      value: 45000,
      allocation: 35.8,
      change24h: 2.5
    },
    {
      id: '2',
      name: 'Bitcoin',
      symbol: 'BTC',
      amount: 1.2,
      value: 52000,
      allocation: 41.4,
      change24h: -1.2
    },
    {
      id: '3',
      name: 'USDC',
      symbol: 'USDC',
      amount: 28750.42,
      value: 28750.42,
      allocation: 22.8,
      change24h: 0
    }
  ],
  performance: {
    daily: 1.2,
    weekly: 5.8,
    monthly: 12.4,
    yearly: 45.2
  },
  riskScore: 65
};

export const mockRecommendations: AIRecommendation[] = [
  {
    type: 'BUY',
    asset: 'ETH',
    amount: 2.5,
    reason: 'Strong bullish momentum detected with increasing institutional inflows',
    confidence: 85,
    timestamp: '2024-03-10 14:30:00'
  },
  {
    type: 'SELL',
    asset: 'BTC',
    amount: 0.5,
    reason: 'Portfolio rebalancing needed to maintain optimal risk levels',
    confidence: 72,
    timestamp: '2024-03-10 14:15:00'
  }
];

export const mockRiskMetrics: RiskMetrics = {
  volatility: 12.5,
  sharpeRatio: 1.8,
  maxDrawdown: 15.2,
  riskLevel: 'Medium'
};