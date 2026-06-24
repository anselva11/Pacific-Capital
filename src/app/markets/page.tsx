"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { TrendingUp, TrendingDown, Activity, Zap, Globe } from "lucide-react";

const stockData = [
  { symbol: "AAPL", name: "Apple Inc.", price: "189.43", change: "-0.5%", vol: "52.3M", mcap: "$2.94T" },
  { symbol: "TSLA", name: "Tesla Inc.", price: "175.22", change: "+4.2%", vol: "89.1M", mcap: "$556B" },
  { symbol: "NVDA", name: "NVIDIA Corp.", price: "890.10", change: "+5.1%", vol: "120.4M", mcap: "$2.19T" },
  { symbol: "META", name: "Meta Platforms", price: "485.30", change: "+1.2%", vol: "18.7M", mcap: "$1.24T" },
  { symbol: "AMZN", name: "Amazon.com", price: "178.50", change: "-0.3%", vol: "41.2M", mcap: "$1.86T" },
  { symbol: "MSFT", name: "Microsoft Corp.", price: "415.60", change: "+0.8%", vol: "22.5M", mcap: "$3.09T" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: "174.20", change: "+1.5%", vol: "28.3M", mcap: "$2.15T" },
];

const cryptoData = [
  { symbol: "BTC/USDT", name: "Bitcoin", price: "64,230.50", change: "+2.4%", vol: "$28.5B", mcap: "$1.26T" },
  { symbol: "ETH/USDT", name: "Ethereum", price: "3,450.12", change: "+1.8%", vol: "$14.2B", mcap: "$415B" },
  { symbol: "SOL/USDT", name: "Solana", price: "142.80", change: "+6.1%", vol: "$3.8B", mcap: "$64B" },
  { symbol: "XRP/USDT", name: "Ripple", price: "0.5124", change: "-1.2%", vol: "$1.5B", mcap: "$28B" },
  { symbol: "BNB/USDT", name: "BNB", price: "585.40", change: "+0.9%", vol: "$1.1B", mcap: "$85B" },
];

export default function MarketsPage() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-8">Markets</h1>

          {/* Market Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="glass-panel p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-success/20 flex items-center justify-center"><Activity size={24} className="text-success" /></div>
              <div>
                <div className="text-gray-400 text-xs">S&P 500</div>
                <div className="font-mono font-bold text-lg">5,321.40</div>
                <div className="text-success text-xs font-medium">+0.42%</div>
              </div>
            </div>
            <div className="glass-panel p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-yellow-400/20 flex items-center justify-center"><Zap size={24} className="text-yellow-400" /></div>
              <div>
                <div className="text-gray-400 text-xs">Crypto Total</div>
                <div className="font-mono font-bold text-lg">$2.45T</div>
                <div className="text-success text-xs font-medium">+2.1%</div>
              </div>
            </div>
            <div className="glass-panel p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center"><Globe size={24} className="text-primary" /></div>
              <div>
                <div className="text-gray-400 text-xs">EUR/USD</div>
                <div className="font-mono font-bold text-lg">1.0845</div>
                <div className="text-danger text-xs font-medium">-0.12%</div>
              </div>
            </div>
          </div>

          {/* Crypto Markets */}
          <div className="glass-panel overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-panel-border flex items-center gap-2">
              <Zap size={18} className="text-yellow-400" />
              <h2 className="font-semibold text-lg">Cryptocurrency</h2>
            </div>
            <MarketTable data={cryptoData} />
          </div>

          {/* Stock Markets */}
          <div className="glass-panel overflow-hidden">
            <div className="px-6 py-4 border-b border-panel-border flex items-center gap-2">
              <Globe size={18} className="text-blue-400" />
              <h2 className="font-semibold text-lg">US Stocks</h2>
            </div>
            <MarketTable data={stockData} />
          </div>
        </main>
      </div>
    </div>
  );
}

function MarketTable({ data }: { data: { symbol: string; name: string; price: string; change: string; vol: string; mcap: string }[] }) {
  return (
    <table className="w-full text-left">
      <thead className="bg-panel/50 text-gray-400 text-xs">
        <tr>
          <th className="px-6 py-3 font-medium">Symbol</th>
          <th className="px-6 py-3 font-medium text-right">Price</th>
          <th className="px-6 py-3 font-medium text-right">24h Change</th>
          <th className="px-6 py-3 font-medium text-right">Volume</th>
          <th className="px-6 py-3 font-medium text-right">Market Cap</th>
          <th className="px-6 py-3 font-medium text-center">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-panel-border">
        {data.map((m) => {
          const isUp = m.change.startsWith("+");
          return (
            <tr key={m.symbol} className="hover:bg-white/5 transition-colors">
              <td className="px-6 py-4">
                <div className="font-bold">{m.symbol}</div>
                <div className="text-xs text-gray-500">{m.name}</div>
              </td>
              <td className="px-6 py-4 text-right font-mono font-medium">${m.price}</td>
              <td className={`px-6 py-4 text-right font-medium ${isUp ? "text-success" : "text-danger"}`}>
                <span className="flex items-center justify-end gap-1">
                  {isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {m.change}
                </span>
              </td>
              <td className="px-6 py-4 text-right text-gray-400 font-mono">{m.vol}</td>
              <td className="px-6 py-4 text-right text-gray-400 font-mono">{m.mcap}</td>
              <td className="px-6 py-4 text-center">
                <button className="text-primary hover:underline font-medium text-xs">Trade</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
