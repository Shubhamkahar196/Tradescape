import { trades } from "@/data/trades";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TradeTable = () => {
  return (
    <Card>

      <CardHeader>

        <CardTitle>
          Trade History
        </CardTitle>

      </CardHeader>

      <CardContent>

        <Table>

          <TableHeader>

            <TableRow>

              <TableHead>Asset</TableHead>

              <TableHead>Direction</TableHead>

              <TableHead>P&L</TableHead>

              <TableHead>Status</TableHead>

            </TableRow>

          </TableHeader>

          <TableBody>

            {trades.map((trade) => (

              <TableRow key={trade.id}>

                <TableCell className="font-medium">
                  {trade.asset}
                </TableCell>

                <TableCell>

                  <Badge
                    variant={
                      trade.type === "Long"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {trade.type}
                  </Badge>

                </TableCell>

                <TableCell
                  className={
                    trade.pnl >= 0
                      ? "text-green-600 font-semibold"
                      : "text-red-600 font-semibold"
                  }
                >
                  {trade.pnl >= 0 ? "+" : ""}
                  ${trade.pnl.toLocaleString()}
                </TableCell>

                <TableCell>

                  <Badge
                    variant={
                      trade.pnl >= 0
                        ? "default"
                        : "destructive"
                    }
                  >
                    {trade.pnl >= 0
                      ? "Profit"
                      : "Loss"}
                  </Badge>

                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </CardContent>

    </Card>
  );
};

export default TradeTable;