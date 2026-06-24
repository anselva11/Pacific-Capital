"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Users, Copy, TrendingUp, Star, Award, ShieldCheck, ArrowUpRight } from "lucide-react";

const topTraders = [
  { name: "CryptoWhale", avatar: "CW", roi: "+142.5%", pnl: "$284,500", followers: "12.4K", winRate: "78%", badge: "Elite" },
  { name: "AlphaTrader", avatar: "AT", roi: "+98.2%", pnl: "$196,400", followers: "8.7K", winRate: "72%", badge: "Pro" },
  { name: "StockMaster", avatar: "SM", roi: "+76.8%", pnl: "$153,600", followers: "6.2K", winRate: "68%", badge: "Pro" },
  { name: "ForexKing", avatar: "FK", roi: "+65.3%", pnl: "$130,600", followers: "4.8K", winRate: "65%", badge: "Verified" },
  { name: "DeFiHunter", avatar: "DH", roi: "+58.1%", pnl: "$116,200", followers: "3.5K", winRate: "63%", badge: "Verified" },
];

const myCopies = [
  { leader: "CryptoWhale", allocated: "$5,000", pnl: "+$1,240", status: "Active", since: "45 days" },
  { leader: "AlphaTrader", allocated: "$3,000", pnl: "+$520", status: "Active", since: "20 days" },
];

export default function CopyTradingPage() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Copy size={28} className="text-primary" /> Copy Trading
          </h1>

          {/* My Active Copies */}
          <div className="glass-panel overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-panel-border">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <Users size={18} className="text-primary" /> My Active Copies
              </h2>
            </div>
            {myCopies.length > 0 ? (
              <table className="w-full text-left">
                <thead className="bg-panel/50 text-gray-400 text-xs">
                  <tr>
                    <th className="px-6 py-3 font-medium">Leader</th>
                    <th className="px-6 py-3 font-medium text-right">Allocated</th>
                    <th className="px-6 py-3 font-medium text-right">P&L</th>
                    <th className="px-6 py-3 font-medium text-center">Status</th>
                    <th className="px-6 py-3 font-medium">Duration</th>
                    <th className="px-6 py-3 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-panel-border">
                  {myCopies.map((c) => (
                    <tr key={c.leader} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-semibold">{c.leader}</td>
                      <td className="px-6 py-4 text-right font-mono">{c.allocated}</td>
                      <td className="px-6 py-4 text-right font-mono text-success font-medium">{c.pnl}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="bg-success/20 text-success px-2 py-0.5 rounded text-xs font-medium">{c.status}</span>
                      </td>
                      <td className="px-6 py-4 text-gray-400">{c.since}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-danger hover:underline text-xs font-medium">Stop Copying</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-8 text-center text-gray-500">You are not copying any traders yet.</div>
            )}
          </div>

          {/* Top Traders Leaderboard */}
          <div className="glass-panel overflow-hidden">
            <div className="px-6 py-4 border-b border-panel-border flex items-center justify-between">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <Award size={18} className="text-yellow-400" /> Top Traders Leaderboard
              </h2>
              <div className="flex gap-2">
                {["30D", "90D", "1Y", "All Time"].map((period, i) => (
                  <button key={period} className={`px-3 py-1 rounded text-xs font-medium ${i === 0 ? "bg-primary text-white" : "text-gray-400 hover:text-white hover:bg-white/5"}`}>
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <div className="divide-y divide-panel-border">
              {topTraders.map((trader, idx) => (
                <div key={trader.name} className="px-6 py-5 flex items-center gap-6 hover:bg-white/5 transition-colors">
                  {/* Rank */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    idx === 0 ? "bg-yellow-400/20 text-yellow-400" :
                    idx === 1 ? "bg-gray-300/20 text-gray-300" :
                    idx === 2 ? "bg-amber-600/20 text-amber-600" :
                    "bg-panel text-gray-500"
                  }`}>
                    {idx + 1}
                  </div>

                  {/* Avatar & Name */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                      {trader.avatar}
                    </div>
                    <div>
                      <div className="font-semibold flex items-center gap-2">
                        {trader.name}
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                          trader.badge === "Elite" ? "bg-yellow-400/20 text-yellow-400" :
                          trader.badge === "Pro" ? "bg-primary/20 text-primary" :
                          "bg-success/20 text-success"
                        }`}>
                          {trader.badge}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">{trader.followers} followers</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="hidden md:flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-0.5">ROI</div>
                      <div className="text-success font-mono font-bold">{trader.roi}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-0.5">Total P&L</div>
                      <div className="font-mono font-medium">{trader.pnl}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-0.5">Win Rate</div>
                      <div className="font-mono">{trader.winRate}</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="btn-primary text-xs px-4 py-2 flex items-center gap-1 whitespace-nowrap">
                    <Copy size={14} /> Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
