import { DAILY_LOSS_LIMIT, MAX_DRAWDOWN, STARTING_BALANCE, Trade } from "@/data/trades"

export const getTotalPnL=(trades: Trade[]):number=>{
   return trades.reduce((sum,trade)=>sum+trade.pnl,0)
}

export const getCurrentBalance=(STARTING_BALANCE:number,trades:Trade[]):number=>{
return STARTING_BALANCE + getTotalPnL(trades);
}

export const getWinningTrades=(trades:Trade[]):number=>{
    return trades.filter((trade)=> trade.pnl > 0).length;
}

export const getLosingTrades = (trades:Trade[]):number=>{
    return trades.filter(trade=>trade.pnl <0).length;
}

export const getWinRate =(trades:Trade[]):number=>{
    if(trades.length===0) return 0;
    const wins = getWinningTrades(trades);
return Number(((wins/trades.length)*100).toFixed(2));
}

export const getLargestWinningTrade =(trades:Trade[]):number=>{
    const winningTrades = trades.filter((trade)=> trade.pnl > 0);
    if(winningTrades.length===0) return 0;
    return Math.max(...winningTrades.map((trade)=>trade.pnl));
}

export const getLargestLosingTrade =(trades:Trade[]):number =>{
    const losingTrades = trades.filter((trade)=> trade.pnl <0);
    if(losingTrades.length ===0) return 0;
    return Math.min(...losingTrades.map((trade)=>trade.pnl));
}


// current drawdown 
// drawdown = Starting balance - current balance

export const getCurrentDrawdown = (
    STARTING_BALANCE:number,
    trades: Trade[]
): number => {
    const currentBalance = getCurrentBalance(STARTING_BALANCE,trades);
    return Math.max(0,STARTING_BALANCE-currentBalance);
}


// Remaining drawdown

export const getRemainingDrawdown = (
    MAX_DRAWDOWN:number,
    CurrentDrawdown:number
):number =>{
    return Math.max(0,MAX_DRAWDOWN- CurrentDrawdown);
}


//current daily loss
export const getCurrentDayLoss = (trades:Trade[]): number=>{
    return trades.filter((trade)=> trade.pnl < 0).reduce((sum,trade)=> sum + Math.abs(trade.pnl),0);
}

// Remaining daily loss limit

export const getRemaininDailyLoss = (
    DAILY_LOSS_LIMIT: number,
    currentDayLoss: number
): number =>{
    return Math.max(0,DAILY_LOSS_LIMIT- currentDayLoss);
}

// risk status
export const getRiskStatus = (
  remainingDrawdown: number,
  maxDrawdown: number
): "Safe" | "Approaching Limit" | "At Risk" => {
  const percentage = (remainingDrawdown / maxDrawdown) * 100;

  if (percentage > 70) return "Safe";

  if (percentage > 30) return "Approaching Limit";

  return "At Risk";
};