"use client";

import React, { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const initialData = [
  { symbol: "BTC/USDT", price: "64,230.50", change: "+2.4%" },
  { symbol: "ETH/USDT", price: "3,450.12", change: "+1.8%" },
  { symbol: "AAPL", price: "189.43", change: "-0.5%" },
  { symbol: "TSLA", price: "175.22", change: "+4.2%" },
  { symbol: "NVDA", price: "890.10", change: "+5.1%" },
  { symbol: "EUR/USD", price: "1.0845", change: "-0.1%" },
  { symbol: "GOLD", price: "2,340.50", change: "+0.8%" },
];

export default function TickerTape() {
  // In a real app, this would connect to the WebSocket for live updates
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => {
          const isUp = Math.random() > 0.5;
          const changeVal = (Math.random() * 0.5).toFixed(2);
          const priceNum = parseFloat(item.price.replace(/,/g, ""));
          const newPrice = isUp ? priceNum * 1.001 : priceNum * 0.999;
          
          return {
            ...item,
            price: newPrice.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 }),
            change: `${isUp ? "+" : "-"}${changeVal}%`,
          };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-panel border-b border-panel-border overflow-hidden whitespace-nowrap py-2 flex items-center h-12">
      <div className="animate-ticker flex items-center space-x-8 px-4 w-max">
        {[...data, ...data].map((item, index) => {
          const isPositive = item.change.startsWith("+");
          return (
            <div key={`${item.symbol}-${index}`} className="flex items-center space-x-2">
              <span className="font-semibold text-sm text-gray-300">{item.symbol}</span>
              <span className="font-mono text-sm">{item.price}</span>
              <span className={`flex items-center text-xs font-medium ${isPositive ? "text-success" : "text-danger"}`}>
                {isPositive ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
                {item.change}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
