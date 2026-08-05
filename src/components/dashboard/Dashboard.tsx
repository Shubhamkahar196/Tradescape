import Navbar from "./Navbar"
import AccountOverview from "./AccountOverview"
import TradingPerformance from "./TradingPerformance"
import RiskIndicator from "./RiskIndicator"

import TradeTable from "./TradeTable"
import EquityCurve from "./EquityCurve"

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className="mx-auto max-w-7xl space-y-8 p-6">
        <AccountOverview/>
        <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <TradingPerformance />
                </div>
                <RiskIndicator/>
        </div>
        <EquityCurve/>
        <TradeTable/>
    </div>
    </>
  )
}

export default Dashboard