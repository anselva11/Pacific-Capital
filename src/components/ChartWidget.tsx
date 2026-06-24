"use client";

import React, { useEffect, useRef } from "react";
import { createChart, ColorType, CandlestickSeries } from "lightweight-charts";

export default function ChartWidget() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current?.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "#0B0E14" },
        textColor: "#D1D5DB",
      },
      grid: {
        vertLines: { color: "#1F2937" },
        horzLines: { color: "#1F2937" },
      },
      width: chartContainerRef.current.clientWidth,
      height: 400,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const candlestickSeries = chart.addSeries(CandlestickSeries, {
      upColor: "#10B981",
      downColor: "#EF4444",
      borderVisible: false,
      wickUpColor: "#10B981",
      wickDownColor: "#EF4444",
    });

    // Generate deterministic dummy data (avoid Math.random for SSR hydration)
    const data = [];
    const BASE_TIME = 1717200000; // fixed epoch
    let lastClose = 64000;
    for (let i = 0; i < 1000; i++) {
      const seed = Math.sin(i * 127.1 + 311.7) * 43758.5453;
      const r = seed - Math.floor(seed); // pseudo-random 0-1
      const open = lastClose + (r - 0.5) * 200;
      const high = Math.max(open, lastClose) + r * 100;
      const low = Math.min(open, lastClose) - (1 - r) * 100;
      const close = open + (r - 0.5) * 200;
      data.push({ time: BASE_TIME + i * 3600, open, high, low, close });
      lastClose = close;
    }

    candlestickSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center gap-4 p-3 border-b border-panel-border bg-panel/50">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">BTC/USDT</span>
          <span className="text-success font-mono">64,230.50</span>
        </div>
        <div className="flex gap-2">
          {["1m", "5m", "15m", "1H", "4H", "1D", "1W"].map((tf) => (
            <button key={tf} className="px-2 py-1 text-xs text-gray-400 hover:text-white hover:bg-white/10 rounded">
              {tf}
            </button>
          ))}
        </div>
      </div>
      <div ref={chartContainerRef} className="flex-1 min-h-[400px]" />
    </div>
  );
}
