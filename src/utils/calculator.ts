
import type { Trade } from "@/types/trade"

  export interface RiskResult {
  status: "Safe" | "Approaching Limit" | "At Risk";
  color: string;
}
export const getTotalPnL = (trades: Trade[]): number => {
  return trades.reduce((sum, trade) => sum + trade.pnl, 0)
}

export const getCurrentBalance = (
   startingBalance: number,
  trades: Trade[]
): number => {
  return startingBalance + getTotalPnL(trades);
}

export const getWinningTrades = (trades: Trade[]): number => {
  return trades.filter((trade) => trade.pnl > 0).length
}

export const getLosingTrades = (trades: Trade[]): number => {
  return trades.filter((trade) => trade.pnl < 0).length
}

export const getWinRate = (trades: Trade[]): number => {
  if (trades.length === 0) return 0
  const wins = getWinningTrades(trades)
  return Number(((wins / trades.length) * 100).toFixed(2))
}

export const getLargestWinningTrade = (trades: Trade[]): number => {
  const winningTrades = trades.filter((trade) => trade.pnl > 0)
  if (winningTrades.length === 0) return 0
  return Math.max(...winningTrades.map((trade) => trade.pnl))
}

export const getLargestLosingTrade = (trades: Trade[]): number => {
  const losingTrades = trades.filter((trade) => trade.pnl < 0)
  if (losingTrades.length === 0) return 0
  return Math.min(...losingTrades.map((trade) => trade.pnl))
}

// current drawdown
// drawdown = Starting balance - current balance

export const getCurrentDrawdown = (
  startingBalance: number,
  trades: Trade[]
): number => {
  const currentBalance = getCurrentBalance(
    startingBalance,
    trades
  );

  return Math.max(0, startingBalance - currentBalance);
};

// Remaining drawdown

export const getRemainingDrawdown = (
  maxDrawdown: number,
  currentDrawdown: number
): number => {
  return Math.max(0, maxDrawdown - currentDrawdown);
};

//current daily loss
export const getCurrentDayLoss = (
  trades: Trade[]
): number => {
  return trades
    .filter((trade) => trade.pnl < 0)
    .reduce((sum, trade) => sum + Math.abs(trade.pnl), 0);
};

// Remaining daily loss limit

export const getRemainingDailyLoss = (
  dailyLossLimit: number,
  currentDayLoss: number
): number => {
  return Math.max(0, dailyLossLimit - currentDayLoss);
};

// risk status
export const getRiskStatus = (
  remainingDrawdown: number,
  maxDrawdown: number,
  remainingDailyLoss: number,
  dailyLossLimit: number
): RiskResult => {
  const drawdownPercent =
    (remainingDrawdown / maxDrawdown) * 100;

  const dailyLossPercent =
    (remainingDailyLoss / dailyLossLimit) * 100;

  const lowestRemaining = Math.min(
    drawdownPercent,
    dailyLossPercent
  );

  if (lowestRemaining > 70) {
    return {
      status: "Safe",
      color: "green",
    };
  }

  if (lowestRemaining > 30) {
    return {
      status: "Approaching Limit",
      color: "orange",
    };
  }

  return {
    status: "At Risk",
    color: "red",
  };
};
