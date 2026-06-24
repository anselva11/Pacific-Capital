"use client";

import React, { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import ChartWidget from "@/components/ChartWidget";

export default function TradeDashboard() {
  const [orderType, setOrderType] = useState("LIMIT");
  const [orderSide, setOrderSide] = useState("BUY");

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />

        {/* Trading Interface */}
        <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Chart & Bottom Panel */}
          <div className="flex-1 flex flex-col min-w-0 border-r border-panel-border">
            {/* Chart Area */}
            <div className="flex-1 bg-background relative">
              <ChartWidget />
            </div>

            {/* Bottom Panel (Positions/Orders) */}
            <div className="h-64 border-t border-panel-border bg-panel flex flex-col">
              <div className="flex items-center gap-6 px-4 border-b border-panel-border">
                <button className="px-4 py-3 font-medium text-primary border-b-2 border-primary">Open Positions (3)</button>
                <button className="px-4 py-3 font-medium text-gray-400 hover:text-white">Active Orders (1)</button>
                <button className="px-4 py-3 font-medium text-gray-400 hover:text-white">Order History</button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <table className="w-full text-left text-xs">
                  <thead className="text-gray-400">
                    <tr>
                      <th className="pb-3 font-medium">Symbol</th>
                      <th className="pb-3 font-medium">Size</th>
                      <th className="pb-3 font-medium">Entry Price</th>
                      <th className="pb-3 font-medium">Mark Price</th>
                      <th className="pb-3 font-medium text-right">PNL</th>
                      <th className="pb-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-panel-border/50 hover:bg-white/5">
                      <td className="py-3 font-semibold">BTC/USDT</td>
                      <td className="py-3">0.5</td>
                      <td className="py-3 font-mono">62,100.00</td>
                      <td className="py-3 font-mono">64,230.50</td>
                      <td className="py-3 text-right text-success font-mono">+$1,065.25</td>
                      <td className="py-3 text-right"><button className="text-primary hover:underline">Close</button></td>
                    </tr>
                    <tr className="border-b border-panel-border/50 hover:bg-white/5">
                      <td className="py-3 font-semibold">ETH/USDT</td>
                      <td className="py-3">5.0</td>
                      <td className="py-3 font-mono">3,320.00</td>
                      <td className="py-3 font-mono">3,450.12</td>
                      <td className="py-3 text-right text-success font-mono">+$650.60</td>
                      <td className="py-3 text-right"><button className="text-primary hover:underline">Close</button></td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="py-3 font-semibold">AAPL</td>
                      <td className="py-3">100</td>
                      <td className="py-3 font-mono">192.50</td>
                      <td className="py-3 font-mono">189.43</td>
                      <td className="py-3 text-right text-danger font-mono">-$307.00</td>
                      <td className="py-3 text-right"><button className="text-primary hover:underline">Close</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Panel: Order Book & Order Management */}
          <div className="w-full lg:w-80 flex flex-col flex-shrink-0 bg-panel overflow-y-auto">
            {/* Order Book Snippet */}
            <div className="h-1/3 border-b border-panel-border p-4 flex flex-col text-xs">
              <h3 className="font-semibold mb-2">Order Book</h3>
              <div className="flex justify-between text-gray-400 mb-2">
                <span>Price (USDT)</span>
                <span>Amount (BTC)</span>
              </div>
              <div className="flex-1 overflow-hidden space-y-1">
                {[
                  { price: 64235, amount: "1.2450", width: "45%" },
                  { price: 64234, amount: "0.8520", width: "30%" },
                  { price: 64232, amount: "2.1040", width: "80%" }
                ].map(item => (
                  <div key={item.price} className="flex justify-between text-danger font-mono relative">
                    <div className="absolute top-0 right-0 h-full bg-danger/10" style={{width: item.width}}></div>
                    <span className="relative z-10">{item.price.toFixed(2)}</span>
                    <span className="relative z-10 text-gray-300">{item.amount}</span>
                  </div>
                ))}
                <div className="my-2 text-center text-lg font-bold text-success">64,230.50</div>
                {[
                  { price: 64228, amount: "0.4520", width: "15%" },
                  { price: 64225, amount: "1.6310", width: "65%" },
                  { price: 64221, amount: "0.9120", width: "35%" }
                ].map(item => (
                  <div key={item.price} className="flex justify-between text-success font-mono relative">
                    <div className="absolute top-0 right-0 h-full bg-success/10" style={{width: item.width}}></div>
                    <span className="relative z-10">{item.price.toFixed(2)}</span>
                    <span className="relative z-10 text-gray-300">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Management System */}
            <div className="p-4 flex-1">
              <div className="flex bg-background rounded-lg p-1 mb-4">
                {["BUY", "SELL"].map((side) => (
                  <button
                    key={side}
                    onClick={() => setOrderSide(side)}
                    className={`flex-1 py-2 text-center rounded-md font-bold transition-colors ${
                      orderSide === side
                        ? (side === "BUY" ? "bg-success text-white" : "bg-danger text-white")
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {side}
                  </button>
                ))}
              </div>

              <div className="flex gap-4 text-xs font-medium text-gray-400 mb-4 border-b border-panel-border pb-2">
                {["LIMIT", "MARKET", "STOP"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`${orderType === type ? "text-primary border-b border-primary" : "hover:text-white"}`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {orderType !== "MARKET" && (
                  <div>
                    <label className="text-xs text-gray-400 mb-1 block">Price (USDT)</label>
                    <input type="number" className="w-full bg-background border border-panel-border rounded-lg px-3 py-2 text-right focus:outline-none focus:border-primary font-mono" placeholder="0.00" />
                  </div>
                )}

                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Amount (BTC)</label>
                  <input type="number" className="w-full bg-background border border-panel-border rounded-lg px-3 py-2 text-right focus:outline-none focus:border-primary font-mono" placeholder="0.00" />
                  <div className="flex justify-between mt-2 px-1">
                    {[25, 50, 75, 100].map(pct => (
                      <span key={pct} className="text-[10px] text-gray-500 hover:text-primary cursor-pointer">{pct}%</span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-panel-border flex justify-between text-sm">
                  <span className="text-gray-400">Total</span>
                  <span className="font-mono font-bold">0.00 USDT</span>
                </div>

                <button className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transition-transform active:scale-95 ${orderSide === "BUY" ? "bg-success hover:bg-success/90 shadow-success/20" : "bg-danger hover:bg-danger/90 shadow-danger/20"}`}>
                  {orderSide} BTC
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
