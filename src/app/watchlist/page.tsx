"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Star, Trash2, Bell, TrendingUp, TrendingDown, GripVertical } from "lucide-react";

const initialWatchlist = [
  { symbol: "BTC/USDT", name: "Bitcoin", price: "64,230.50", change: "+2.4%", alert: true },
  { symbol: "ETH/USDT", name: "Ethereum", price: "3,450.12", change: "+1.8%", alert: false },
  { symbol: "AAPL", name: "Apple Inc.", price: "189.43", change: "-0.5%", alert: true },
  { symbol: "TSLA", name: "Tesla Inc.", price: "175.22", change: "+4.2%", alert: false },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: "890.10", change: "+5.1%", alert: false },
  { symbol: "SOL/USDT", name: "Solana", price: "142.80", change: "+6.1%", alert: true },
  { symbol: "MSFT", name: "Microsoft", price: "415.60", change: "+0.8%", alert: false },
  { symbol: "GOOGL", name: "Alphabet", price: "174.20", change: "+1.5%", alert: false },
];

export default function WatchlistPage() {
  const [items, setItems] = useState(initialWatchlist);

  const removeItem = (symbol: string) => {
    setItems((prev) => prev.filter((i) => i.symbol !== symbol));
  };

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Star size={28} className="text-yellow-400" /> Watchlist
            </h1>
            <button className="btn-primary text-sm px-4 py-2">+ Add Symbol</button>
          </div>

          <div className="glass-panel overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-panel/50 text-gray-400 text-xs">
                <tr>
                  <th className="px-4 py-3 w-8"></th>
                  <th className="px-4 py-3 font-medium">Symbol</th>
                  <th className="px-4 py-3 font-medium text-right">Price</th>
                  <th className="px-4 py-3 font-medium text-right">Change</th>
                  <th className="px-4 py-3 font-medium text-center">Sparkline</th>
                  <th className="px-4 py-3 font-medium text-center">Alert</th>
                  <th className="px-4 py-3 font-medium text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-panel-border">
                {items.map((item) => {
                  const isUp = item.change.startsWith("+");
                  return (
                    <tr key={item.symbol} className="hover:bg-white/5 transition-colors group">
                      <td className="px-4 py-4">
                        <GripVertical size={16} className="text-gray-600 cursor-grab group-hover:text-gray-400" />
                      </td>
                      <td className="px-4 py-4">
                        <div className="font-bold">{item.symbol}</div>
                        <div className="text-xs text-gray-500">{item.name}</div>
                      </td>
                      <td className="px-4 py-4 text-right font-mono font-medium">${item.price}</td>
                      <td className={`px-4 py-4 text-right font-medium ${isUp ? "text-success" : "text-danger"}`}>
                        <span className="flex items-center justify-end gap-1">
                          {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                          {item.change}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        {/* Mini Sparkline */}
                        <div className="flex items-end gap-[2px] h-6 justify-center">
                          {Array.from({ length: 20 }, (_, i) => {
                            const h = Math.round(20 + Math.abs(Math.sin(i * 0.8 + item.symbol.length) * 80));
                            return (
                              <div
                                key={i}
                                className={`w-[3px] rounded-t ${isUp ? "bg-success/60" : "bg-danger/60"}`}
                                style={{ height: `${h}%` }}
                              />
                            );
                          })}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button className={`p-1 rounded ${item.alert ? "text-yellow-400" : "text-gray-600 hover:text-yellow-400"}`}>
                          <Bell size={16} fill={item.alert ? "currentColor" : "none"} />
                        </button>
                      </td>
                      <td className="px-4 py-4 text-center">
                        <button
                          onClick={() => removeItem(item.symbol)}
                          className="text-gray-600 hover:text-danger transition-colors p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
