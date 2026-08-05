import type { Trade } from "@/types/trade";

export const STARTING_BALANCE = 100000;
export const MAX_DRAWDOWN = 10000;
export const DAILY_LOSS_LIMIT = 5000;

export const trades: Trade[] = [
  {
    id: 1,
    asset: "BTC",
    type: "Long",
    pnl: 1200,
  },
  {
    id: 2,
    asset: "ETH",
    type: "Short",
    pnl: -450,
  },
  {
    id: 3,
    asset: "BTC",
    type: "Short",
    pnl: 800,
  },
  {
    id: 4,
    asset: "SOL",
    type: "Long",
    pnl: -300,
  },
  {
    id: 5,
    asset: "ETH",
    type: "Long",
    pnl: 2000,
  },
];