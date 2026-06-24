"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { TrendingUp, TrendingDown, DollarSign, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function PortfolioPage() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-8">Portfolio</h1>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SummaryCard title="Total Equity" value="$124,500.00" change="+$2,340.50 (1.9%)" up />
            <SummaryCard title="Available Cash" value="$45,200.00" change="" />
            <SummaryCard title="Unrealized P&L" value="+$1,408.85" change="+1.14%" up />
            <SummaryCard title="Daily Profit" value="+$832.40" change="+0.67%" up />
          </div>

          {/* Portfolio Growth Chart Placeholder */}
          <div className="glass-panel p-6 mb-8">
            <h2 className="font-semibold text-lg mb-4">Portfolio Growth</h2>
            <div className="h-64 rounded-lg bg-background flex items-end justify-center gap-1 p-4 overflow-hidden">
              {Array.from({ length: 30 }, (_, i) => {
                const h = Math.round(30 + Math.abs(Math.sin(i * 0.5) * 70 + Math.cos(i * 0.3) * 20));
                return (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t hover:from-primary hover:to-primary/40 transition-colors cursor-pointer"
                    style={{ height: `${h}%` }}
                  />
                );
              })}
            </div>
          </div>

          {/* Asset Allocation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="glass-panel p-6">
              <h2 className="font-semibold text-lg mb-4">Asset Allocation</h2>
              <div className="space-y-4">
                <AllocationBar label="Crypto" pct={45} color="bg-yellow-400" value="$56,025.00" />
                <AllocationBar label="US Stocks" pct={35} color="bg-primary" value="$43,575.00" />
                <AllocationBar label="Forex" pct={12} color="bg-purple-400" value="$14,940.00" />
                <AllocationBar label="Cash" pct={8} color="bg-gray-400" value="$9,960.00" />
              </div>
            </div>

            <div className="glass-panel p-6">
              <h2 className="font-semibold text-lg mb-4">Recent Trades</h2>
              <div className="space-y-3">
                {[
                  { symbol: "BTC/USDT", side: "BUY", qty: "0.25", price: "$64,100", time: "2 min ago" },
                  { symbol: "AAPL", side: "SELL", qty: "50", price: "$189.43", time: "15 min ago" },
                  { symbol: "ETH/USDT", side: "BUY", qty: "2.0", price: "$3,420", time: "1h ago" },
                  { symbol: "TSLA", side: "BUY", qty: "25", price: "$174.80", time: "3h ago" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-panel-border/50 last:border-0">
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${t.side === "BUY" ? "bg-success/20 text-success" : "bg-danger/20 text-danger"}`}>
                        {t.side}
                      </span>
                      <span className="font-semibold">{t.symbol}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-mono">{t.qty} @ {t.price}</div>
                      <div className="text-xs text-gray-500">{t.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Holdings Table */}
          <div className="glass-panel overflow-hidden">
            <div className="px-6 py-4 border-b border-panel-border">
              <h2 className="font-semibold text-lg">Holdings</h2>
            </div>
            <table className="w-full text-left">
              <thead className="bg-panel/50 text-gray-400 text-xs">
                <tr>
                  <th className="px-6 py-3 font-medium">Asset</th>
                  <th className="px-6 py-3 font-medium text-right">Quantity</th>
                  <th className="px-6 py-3 font-medium text-right">Avg. Price</th>
                  <th className="px-6 py-3 font-medium text-right">Market Price</th>
                  <th className="px-6 py-3 font-medium text-right">Value</th>
                  <th className="px-6 py-3 font-medium text-right">P&L</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-panel-border text-sm">
                {[
                  { asset: "BTC", qty: "0.75", avg: "$61,200", mkt: "$64,230.50", val: "$48,173", pnl: "+$2,273", up: true },
                  { asset: "ETH", qty: "5.00", avg: "$3,320", mkt: "$3,450.12", val: "$17,251", pnl: "+$651", up: true },
                  { asset: "AAPL", qty: "100", avg: "$192.50", mkt: "$189.43", val: "$18,943", pnl: "-$307", up: false },
                  { asset: "TSLA", qty: "50", avg: "$170.00", mkt: "$175.22", val: "$8,761", pnl: "+$261", up: true },
                ].map((h) => (
                  <tr key={h.asset} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold">{h.asset}</td>
                    <td className="px-6 py-4 text-right font-mono">{h.qty}</td>
                    <td className="px-6 py-4 text-right font-mono text-gray-400">{h.avg}</td>
                    <td className="px-6 py-4 text-right font-mono">{h.mkt}</td>
                    <td className="px-6 py-4 text-right font-mono font-medium">{h.val}</td>
                    <td className={`px-6 py-4 text-right font-mono font-medium ${h.up ? "text-success" : "text-danger"}`}>{h.pnl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

function SummaryCard({ title, value, change, up }: { title: string; value: string; change: string; up?: boolean }) {
  return (
    <div className="glass-panel p-5">
      <div className="text-gray-400 text-xs font-medium mb-2">{title}</div>
      <div className="text-2xl font-bold font-mono mb-1">{value}</div>
      {change && (
        <div className={`text-xs font-medium flex items-center gap-1 ${up ? "text-success" : "text-danger"}`}>
          {up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </div>
      )}
    </div>
  );
}

function AllocationBar({ label, pct, color, value }: { label: string; pct: number; color: string; value: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="text-gray-400">{value} ({pct}%)</span>
      </div>
      <div className="w-full h-2 bg-background rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
