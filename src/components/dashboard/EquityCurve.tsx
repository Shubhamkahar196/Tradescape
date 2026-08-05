import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { trades, STARTING_BALANCE } from "@/data/trades";


const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border bg-background p-3 shadow-md">
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        <p className="text-sm font-bold text-foreground">
          Balance: ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const EquityCurve = () => {
  let balance = STARTING_BALANCE;

  const equityData = [
    {
      trade: "Start",
      balance,
    },
  ];

  trades.forEach((trade, index) => {
    balance += trade.pnl;

    equityData.push({
      trade: `#${index + 1} ${trade.asset}`,
      balance,
    });
  });

  return (
    <Card className="w-full border shadow-sm">
      <CardHeader className="pb-2 sm:pb-4">
        <CardTitle className="text-base sm:text-lg">Equity Curve</CardTitle>
      </CardHeader>

      <CardContent className="p-2 sm:p-6">
        {/* Responsive Height Container */}
        <div className="h-65 w-full sm:h-87.5">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={equityData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/40" />

              <XAxis
                dataKey="trade"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                className="text-[10px] text-muted-foreground sm:text-xs"
              />

              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `$${value / 1000}k`}
                className="text-[10px] text-muted-foreground sm:text-xs"
              />

              <Tooltip content={<CustomTooltip />} />

              <Line
                type="monotone"
                dataKey="balance"
                stroke="#2563eb"
                strokeWidth={2.5}
                dot={{
                  r: 3,
                  fill: "#2563eb",
                  strokeWidth: 2,
                }}
                activeDot={{
                  r: 6,
                  strokeWidth: 0,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default EquityCurve;