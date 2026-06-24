"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Filter, TrendingUp, TrendingDown, Search, SlidersHorizontal, Zap, ArrowUpDown } from "lucide-react";

const stockResults = [
  { symbol: "NVDA", name: "NVIDIA Corp.", price: "890.10", change: "+5.1%", vol: "120.4M", rsi: 72, mcap: "$2.19T", sector: "Technology" },
  { symbol: "TSLA", name: "Tesla Inc.", price: "175.22", change: "+4.2%", vol: "89.1M", rsi: 68, mcap: "$556B", sector: "Automotive" },
  { symbol: "META", name: "Meta Platforms", price: "485.30", change: "+1.2%", vol: "18.7M", rsi: 58, mcap: "$1.24T", sector: "Technology" },
  { symbol: "AAPL", name: "Apple Inc.", price: "189.43", change: "-0.5%", vol: "52.3M", rsi: 45, mcap: "$2.94T", sector: "Technology" },
  { symbol: "MSFT", name: "Microsoft Corp.", price: "415.60", change: "+0.8%", vol: "22.5M", rsi: 55, mcap: "$3.09T", sector: "Technology" },
  { symbol: "AMZN", name: "Amazon.com", price: "178.50", change: "-0.3%", vol: "41.2M", rsi: 48, mcap: "$1.86T", sector: "Consumer" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: "174.20", change: "+1.5%", vol: "28.3M", rsi: 52, mcap: "$2.15T", sector: "Technology" },
];

const cryptoGainers = [
  { symbol: "SOL/USDT", name: "Solana", price: "142.80", change: "+6.1%", vol: "$3.8B" },
  { symbol: "DOGE/USDT", name: "Dogecoin", price: "0.1245", change: "+8.3%", vol: "$1.2B" },
  { symbol: "AVAX/USDT", name: "Avalanche", price: "35.20", change: "+4.5%", vol: "$890M" },
  { symbol: "LINK/USDT", name: "Chainlink", price: "14.80", change: "+3.8%", vol: "$720M" },
];

const cryptoLosers = [
  { symbol: "XRP/USDT", name: "Ripple", price: "0.5124", change: "-3.2%", vol: "$1.5B" },
  { symbol: "DOT/USDT", name: "Polkadot", price: "6.85", change: "-2.1%", vol: "$450M" },
  { symbol: "ADA/USDT", name: "Cardano", price: "0.4520", change: "-1.8%", vol: "$380M" },
  { symbol: "SHIB/USDT", name: "Shiba Inu", price: "0.00001820", change: "-4.5%", vol: "$620M" },
];

export default function ScannerPage() {
  const [activeTab, setActiveTab] = useState("stocks");

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <SlidersHorizontal size={28} className="text-primary" /> Market Scanner
            </h1>
            <div className="flex bg-panel rounded-lg p-1">
              {["stocks", "crypto"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md font-medium capitalize transition-colors ${
                    activeTab === tab ? "bg-primary text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "stocks" && (
            <>
              {/* Filters */}
              <div className="glass-panel p-5 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter size={16} className="text-primary" />
                  <span className="font-semibold">Filters</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  <FilterSelect label="Market Cap" options={["Any", "> $1T", "> $100B", "> $10B", "> $1B"]} />
                  <FilterSelect label="Price" options={["Any", "> $500", "> $100", "> $50", "< $10"]} />
                  <FilterSelect label="Volume" options={["Any", "> 100M", "> 50M", "> 10M"]} />
                  <FilterSelect label="RSI" options={["Any", "Overbought (>70)", "Neutral", "Oversold (<30)"]} />
                  <FilterSelect label="Sector" options={["Any", "Technology", "Healthcare", "Finance", "Consumer"]} />
                  <FilterSelect label="Country" options={["Any", "USA", "UK", "EU", "Asia"]} />
                </div>
              </div>

              {/* Stock Results */}
              <div className="glass-panel overflow-hidden">
                <div className="px-6 py-4 border-b border-panel-border flex items-center justify-between">
                  <span className="font-semibold">{stockResults.length} results found</span>
                  <button className="text-primary text-xs hover:underline flex items-center gap-1">
                    <ArrowUpDown size={12} /> Sort by Change %
                  </button>
                </div>
                <table className="w-full text-left">
                  <thead className="bg-panel/50 text-gray-400 text-xs">
                    <tr>
                      <th className="px-6 py-3 font-medium">Symbol</th>
                      <th className="px-6 py-3 font-medium text-right">Price</th>
                      <th className="px-6 py-3 font-medium text-right">Change</th>
                      <th className="px-6 py-3 font-medium text-right">Volume</th>
                      <th className="px-6 py-3 font-medium text-center">RSI</th>
                      <th className="px-6 py-3 font-medium text-right">Market Cap</th>
                      <th className="px-6 py-3 font-medium">Sector</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-panel-border">
                    {stockResults.map((s) => {
                      const isUp = s.change.startsWith("+");
                      return (
                        <tr key={s.symbol} className="hover:bg-white/5 transition-colors cursor-pointer">
                          <td className="px-6 py-4">
                            <div className="font-bold">{s.symbol}</div>
                            <div className="text-xs text-gray-500">{s.name}</div>
                          </td>
                          <td className="px-6 py-4 text-right font-mono font-medium">${s.price}</td>
                          <td className={`px-6 py-4 text-right font-medium ${isUp ? "text-success" : "text-danger"}`}>
                            <span className="flex items-center justify-end gap-1">
                              {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                              {s.change}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right font-mono text-gray-400">{s.vol}</td>
                          <td className="px-6 py-4 text-center">
                            <span className={`px-2 py-0.5 rounded text-xs font-mono font-medium ${
                              s.rsi > 70 ? "bg-danger/20 text-danger" : s.rsi < 30 ? "bg-success/20 text-success" : "bg-gray-700 text-gray-300"
                            }`}>
                              {s.rsi}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right font-mono text-gray-400">{s.mcap}</td>
                          <td className="px-6 py-4 text-gray-400">{s.sector}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {activeTab === "crypto" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Top Gainers */}
              <div className="glass-panel overflow-hidden">
                <div className="px-6 py-4 border-b border-panel-border flex items-center gap-2">
                  <TrendingUp size={18} className="text-success" />
                  <h2 className="font-semibold text-lg">Top Gainers</h2>
                </div>
                <div className="divide-y divide-panel-border">
                  {cryptoGainers.map((c) => (
                    <div key={c.symbol} className="px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
                      <div>
                        <div className="font-bold">{c.symbol}</div>
                        <div className="text-xs text-gray-500">{c.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-medium">${c.price}</div>
                        <div className="text-success text-xs font-medium">{c.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Losers */}
              <div className="glass-panel overflow-hidden">
                <div className="px-6 py-4 border-b border-panel-border flex items-center gap-2">
                  <TrendingDown size={18} className="text-danger" />
                  <h2 className="font-semibold text-lg">Top Losers</h2>
                </div>
                <div className="divide-y divide-panel-border">
                  {cryptoLosers.map((c) => (
                    <div key={c.symbol} className="px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer">
                      <div>
                        <div className="font-bold">{c.symbol}</div>
                        <div className="text-xs text-gray-500">{c.name}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-mono font-medium">${c.price}</div>
                        <div className="text-danger text-xs font-medium">{c.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Volume Spikes */}
              <div className="glass-panel overflow-hidden lg:col-span-2">
                <div className="px-6 py-4 border-b border-panel-border flex items-center gap-2">
                  <Zap size={18} className="text-yellow-400" />
                  <h2 className="font-semibold text-lg">Volume Spikes (Last 1H)</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-panel-border">
                  {[
                    { symbol: "PEPE/USDT", spike: "+340%", price: "$0.00001245" },
                    { symbol: "WIF/USDT", spike: "+180%", price: "$2.45" },
                    { symbol: "BONK/USDT", spike: "+95%", price: "$0.00002810" },
                    { symbol: "FLOKI/USDT", spike: "+72%", price: "$0.000185" },
                  ].map((v) => (
                    <div key={v.symbol} className="p-6 text-center hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="font-bold mb-1">{v.symbol}</div>
                      <div className="text-yellow-400 text-xl font-bold mb-1">Vol {v.spike}</div>
                      <div className="font-mono text-xs text-gray-400">{v.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function FilterSelect({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-xs text-gray-400 mb-1 block">{label}</label>
      <select className="w-full bg-background border border-panel-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
