export interface Trade {
  id: number;
  asset: string;
  type: "Long" | "Short";
  pnl: number;
}