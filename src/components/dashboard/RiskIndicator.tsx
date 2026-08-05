import {
  DAILY_LOSS_LIMIT,
  MAX_DRAWDOWN,
  STARTING_BALANCE,
  trades,
} from "@/data/trades";
import {
  getCurrentDayLoss,
  getCurrentDrawdown,
  getRemainingDailyLoss,
  getRemainingDrawdown,
  getRiskStatus,
} from "@/utils/calculator";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const RiskIndicator = () => {
  const currentDrawdown = getCurrentDrawdown(STARTING_BALANCE, trades);
  const remainingDrawdown = getRemainingDrawdown(MAX_DRAWDOWN, currentDrawdown);
  
  const currentDayLoss = getCurrentDayLoss(trades);
  const remainingDailyLoss = getRemainingDailyLoss(DAILY_LOSS_LIMIT, currentDayLoss);

  const risk = getRiskStatus(
    remainingDrawdown,
    MAX_DRAWDOWN,
    remainingDailyLoss,
    DAILY_LOSS_LIMIT
  );

 
  const drawdownProgress = Math.min(
    Math.max((currentDrawdown / MAX_DRAWDOWN) * 100, 0),
    100
  );
  
  const dailyLossProgress = Math.min(
    Math.max((currentDayLoss / DAILY_LOSS_LIMIT) * 100, 0),
    100
  );

  return (
    <Card className="w-full border shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center justify-between text-base sm:text-lg">
          <span>Risk Indicator</span>
          <Badge
            variant={
              risk.status === "Safe"
                ? "default"
                : risk.status === "Approaching Limit"
                ? "secondary"
                : "destructive"
            }
            className="px-2.5 py-0.5 text-xs font-semibold"
          >
            {risk.status}
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5 text-sm sm:space-y-6">
       
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
            <span className="text-muted-foreground">Current Drawdown</span>
            <span className="font-bold text-foreground">
              ${currentDrawdown.toLocaleString()}
            </span>
          </div>

          <Progress value={drawdownProgress} className="h-2 w-full" />

          <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
            <span>Remaining Drawdown</span>
            <span className="font-semibold text-foreground">
              ${remainingDrawdown.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="border-t border-border" />

        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
            <span className="text-muted-foreground">Today's Loss</span>
            <span className="font-bold text-foreground">
              ${currentDayLoss.toLocaleString()}
            </span>
          </div>

          <Progress value={dailyLossProgress} className="h-2 w-full" />

          <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
            <span>Remaining Daily Loss</span>
            <span className="font-semibold text-foreground">
              ${remainingDailyLoss.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskIndicator;