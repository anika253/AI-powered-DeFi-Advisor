export interface Portfolio {
  totalValue: number;
  assets: Asset[];
  performance: Performance;
  riskScore: number;
}

export interface Asset {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  value: number;
  allocation: number;
  change24h: number;
}

export interface Performance {
  daily: number;
  weekly: number;
  monthly: number;
  yearly: number;
}

export interface AIRecommendation {
  type: 'BUY' | 'SELL';
  asset: string;
  amount: number;
  reason: string;
  confidence: number;
  timestamp: string;
}

export interface RiskMetrics {
  volatility: number;
  sharpeRatio: number;
  maxDrawdown: number;
  riskLevel: 'Low' | 'Medium' | 'High';
}