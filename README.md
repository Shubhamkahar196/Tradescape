#  Tradescape - Trader Risk Dashboard

A responsive **Trader Risk Dashboard** built with **React, TypeScript, Tailwind CSS, shadcn/ui, and Recharts**.

The dashboard helps traders quickly understand their trading performance and determine whether they are close to violating their account risk rules.

---

##  Live Demo

**Live URL:** https://tradescape-pi.vercel.app/

---

## 📂 GitHub Repository

https://github.com/Shubhamkahar196/Tradescape.git

---

#  Preview

> Add screenshots here after deployment.

---

#  Product Thinking

The dashboard was designed around one primary question:

> **"Am I currently in danger of violating my account rules?"**

Instead of only displaying account statistics, the dashboard highlights risk exposure using **clear indicators, progress bars, and a risk status badge**, allowing traders to instantly understand whether they are operating safely within their account limits.

The focus of the dashboard is not just to present trading data but to help users quickly assess risk and make informed trading decisions.

---

#  Features

##  Account Overview

- Starting Balance
- Current Balance
- Maximum Drawdown
- Daily Loss Limit

---

##  Trading Performance

- Total Profit & Loss
- Winning Trades
- Losing Trades
- Win Rate
- Largest Winning Trade
- Largest Losing Trade

> All values are **derived from the provided trade data** and **are not hardcoded**.

---

##  Risk Indicator

Displays the following account risk metrics:

- Current Drawdown
- Remaining Drawdown
- Current Day Loss
- Remaining Daily Loss Limit

Risk levels are displayed using:

- 🟢 Safe
- 🟡 Approaching Limit
- 🔴 At Risk

Progress bars provide a quick visual representation of how close the trader is to reaching their risk limits.

---

##  Trade History

Displays all trades with:

- Asset
- Direction
- Profit & Loss
- Trade Status

---

##  Additional Feature (Product Decision)

### Equity Curve

I added an **Equity Curve** to visualize how the trader's account balance changes after every trade.

### Why?

While numerical metrics provide detailed information, traders often understand trends much faster through visualizations.

The Equity Curve helps users:

- Visualize account growth over time
- Understand how each trade impacts account balance
- Identify trading trends
- Evaluate overall trading consistency

I chose this feature because it improves the dashboard's usability while providing meaningful product value.

---

# Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Recharts
- Lucide React

---

#  Folder Structure

```text
src
│
├── components
│   ├── dashboard
│   │   ├── AccountOverview.tsx
│   │   ├── TradingPerformance.tsx
│   │   ├── RiskIndicator.tsx
│   │   ├── EquityCurve.tsx
│   │   ├── TradeTable.tsx
│   │   └── StatCard.tsx
│   │
│   └── ui
│
├── data
│   └── trades.ts
│
├── utils
│   └── calculator.ts
│
├── types
│   └── trade.ts
│
└── App.tsx
```

---

#  Business Logic

To keep the application modular and maintainable, all calculations are centralized inside:

```text
src/utils/calculator.ts
```

The dashboard derives all values dynamically from the trade data instead of hardcoding them.

Implemented calculations include:

- Total P&L
- Current Balance
- Winning Trades
- Losing Trades
- Win Rate
- Largest Winning Trade
- Largest Losing Trade
- Current Drawdown
- Remaining Drawdown
- Current Day Loss
- Remaining Daily Loss
- Risk Status

---

#  Installation

Clone the repository

```bash
git clone https://github.com/Shubhamkahar196/Tradescape.git
```

Move into the project

```bash
cd tradescape
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build the project

```bash
npm run build
```

---

#  Product Questions

## 1. What is drawdown in trading?

Drawdown is the decline in a trading account's value from its highest point to a lower point. It represents the amount of capital lost before the account recovers and is one of the most important metrics for measuring trading risk.

---

## 2. Why would a trader care about remaining drawdown rather than just current P&L?

Current P&L only tells the trader whether they are currently profitable or losing money.

Remaining drawdown tells the trader how much additional loss they can take before violating their account rules.

A trader may still be profitable overall while being dangerously close to breaching the maximum drawdown limit. Monitoring the remaining drawdown helps traders manage risk more effectively.

---

## 3. If you had another day to work on this dashboard, what would you improve?

I would add:

- Trade filtering (Asset / Direction)
- Performance by Asset
- Historical Trading Data
- Light Mode
- Export to CSV/PDF
- Unit Tests for calculation utilities
- Live API Integration
- Real-time Trading Updates

---

#  Edge Cases Handled

- Empty trade list
- No winning trades
- No losing trades
- Zero drawdown
- Prevent negative remaining limits
- Responsive layout for desktop, tablet, and mobile devices

---

#  Design Decisions

- Built reusable UI components for better scalability.
- Separated business logic from presentation.
- Derived all statistics dynamically from trade data.
- Used responsive layouts for different screen sizes.
- Focused on readability, maintainability, and clean architecture.

---

#  License

This project was developed as part of the **Tradescape Full Stack Developer Assignment**.