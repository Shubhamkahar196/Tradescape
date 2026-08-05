import { STARTING_BALANCE, MAX_DRAWDOWN, DAILY_LOSS_LIMIT, trades } from "@/data/trades";
import { ShieldAlert, TrendingUp, TriangleAlert, Wallet } from 'lucide-react';
import { getCurrentBalance, getTotalPnL } from "@/utils/calculator";
import StatsCard from "./StatsCards";

const AccountOverview = () => {
  const currentBalance = getCurrentBalance(STARTING_BALANCE, trades);
  const totalPnl = getTotalPnL(trades);
  
  const isProfitable = totalPnl >= 0;

  return (
    <div className="w-full rounded-xl border bg-card p-4 sm:p-6 shadow-sm">
      
      
      <div className="mb-4 sm:mb-6 flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
          Account Overview
        </h2>
      </div>

     
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        
        <StatsCard
          title="Starting Balance"
          value={`$${STARTING_BALANCE.toLocaleString()}`}
          icon={Wallet}
          description="Initial account balance"
          iconClassName="bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
        />

        <StatsCard
          title="Current Balance"
          value={`$${currentBalance.toLocaleString()}`}
          icon={TrendingUp}
          description={`PnL: ${isProfitable ? "+" : ""}$${totalPnl.toLocaleString()}`}
          iconClassName={
            isProfitable
              ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
              : "bg-rose-100 text-rose-600 dark:bg-rose-950 dark:text-rose-400"
          }
        />

        <StatsCard
          title="Max Drawdown"
          value={`$${MAX_DRAWDOWN.toLocaleString()}`}
          icon={ShieldAlert}
          description="Maximum allowed loss"
          iconClassName="bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400"
        />

        <StatsCard
          title="Daily Loss Limit"
          value={`$${DAILY_LOSS_LIMIT.toLocaleString()}`}
          icon={TriangleAlert}
          description="Maximum daily loss threshold"
          iconClassName="bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400"
        />

      </div>
    </div>
  );
};

export default AccountOverview;