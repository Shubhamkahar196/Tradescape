import { trades } from "@/data/trades"
import {
  getLargestLosingTrade,
  getLargestWinningTrade,
  getLosingTrades,
  getTotalPnL,
  getWinningTrades,
  getWinRate,
} from "@/utils/calculator"
import StatsCard from "./StatsCards"
import { ArrowDown, ArrowUp, DollarSign, Target, TrendingDown, Trophy } from "lucide-react"

const TradingPerformance = () => {
  const totalPnl = getTotalPnL(trades)
  const winningTrades = getWinningTrades(trades)
  const losingTrades = getLosingTrades(trades)
  const winRate = getWinRate(trades)
  const largestWinningTrade = getLargestWinningTrade(trades)
  const largestLosingTrade = getLargestLosingTrade(trades)

  const isProfitable = totalPnl >= 0

  return (
    <div className="w-full rounded-xl border bg-card p-4 sm:p-6 shadow-sm">
     
      <h2 className="mb-4 text-lg font-bold tracking-tight text-foreground sm:mb-6 sm:text-xl">
        Trading Performance
      </h2>

  
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        
       
        <StatsCard
          title="Total PnL"
          value={`${isProfitable ? "+" : ""}$${totalPnl.toLocaleString()}`}
          icon={DollarSign}
          description="Net profit / loss"
          iconClassName={
            isProfitable
              ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
              : "bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400"
          }
        />

        <StatsCard
          title="Winning Trades"
          value={winningTrades}
          icon={Trophy}
          description="Profitable trades count"
          iconClassName="bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400"
        />

       
        <StatsCard
          title="Losing Trades"
          value={losingTrades}
          icon={TrendingDown}
          description="Loss-making trades count"
          iconClassName="bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400"
        />

        
        <StatsCard
          title="Win Rate"
          value={`${winRate}%`}
          icon={Target}
          description="Winning percentage"
          iconClassName="bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
        />

        
        <StatsCard
          title="Largest Winning Trade"
          value={`+$${largestWinningTrade.toLocaleString()}`}
          icon={ArrowUp}
          description="Highest profit trade"
          iconClassName="bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
        />

     
        <StatsCard
          title="Largest Losing Trade"
          value={`-$${Math.abs(largestLosingTrade).toLocaleString()}`}
          icon={ArrowDown}
          description="Biggest single loss"
          iconClassName="bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400"
        />

      </div>
    </div>
  )
}

export default TradingPerformance