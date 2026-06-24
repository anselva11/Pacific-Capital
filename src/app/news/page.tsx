"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { FileText, TrendingUp, Calendar, BarChart2, Clock, ExternalLink } from "lucide-react";

const breakingNews = [
  { title: "Federal Reserve holds rates steady, signals September cut", time: "12 min ago", tag: "Macro" },
  { title: "Bitcoin surges past $64K as ETF inflows hit record high", time: "25 min ago", tag: "Crypto" },
  { title: "NVIDIA beats earnings expectations by 18%, stock rallies", time: "1h ago", tag: "Earnings" },
  { title: "EU approves landmark AI regulation framework", time: "2h ago", tag: "Regulation" },
  { title: "Solana DeFi TVL crosses $5B milestone", time: "3h ago", tag: "Crypto" },
];

const marketAnalysis = [
  { title: "Why the S&P 500 could reach 6,000 by year-end", author: "David Chen", read: "5 min read" },
  { title: "BTC halving effect: historical patterns suggest Q3 breakout", author: "Sarah Liu", read: "8 min read" },
  { title: "Tesla delivery numbers: what analysts are expecting", author: "Michael Park", read: "4 min read" },
];

const earningsCalendar = [
  { company: "Apple Inc.", symbol: "AAPL", date: "Jul 25", est: "$1.35 EPS" },
  { company: "Microsoft Corp.", symbol: "MSFT", date: "Jul 23", est: "$2.94 EPS" },
  { company: "Amazon.com", symbol: "AMZN", date: "Aug 1", est: "$1.03 EPS" },
  { company: "Meta Platforms", symbol: "META", date: "Jul 31", est: "$4.72 EPS" },
];

export default function NewsPage() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <FileText size={28} className="text-primary" /> News Center
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Breaking News */}
            <div className="lg:col-span-2 glass-panel overflow-hidden">
              <div className="px-6 py-4 border-b border-panel-border flex items-center justify-between">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <TrendingUp size={18} className="text-danger" /> Breaking News
                </h2>
                <span className="flex h-2 w-2 rounded-full bg-danger animate-pulse"></span>
              </div>
              <div className="divide-y divide-panel-border">
                {breakingNews.map((news, i) => (
                  <div key={i} className="px-6 py-4 hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded mr-2 ${
                          news.tag === "Crypto" ? "bg-yellow-400/20 text-yellow-400" :
                          news.tag === "Earnings" ? "bg-success/20 text-success" :
                          news.tag === "Macro" ? "bg-primary/20 text-primary" :
                          "bg-purple-500/20 text-purple-400"
                        }`}>
                          {news.tag}
                        </span>
                        <h3 className="font-medium mt-2 group-hover:text-primary transition-colors">{news.title}</h3>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs whitespace-nowrap">
                        <Clock size={12} />
                        {news.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Earnings Calendar */}
              <div className="glass-panel overflow-hidden">
                <div className="px-6 py-4 border-b border-panel-border">
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    <Calendar size={18} className="text-warning" /> Earnings Calendar
                  </h2>
                </div>
                <div className="divide-y divide-panel-border">
                  {earningsCalendar.map((e, i) => (
                    <div key={i} className="px-6 py-3 hover:bg-white/5 transition-colors">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold">{e.symbol}</div>
                          <div className="text-xs text-gray-500">{e.company}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-400">{e.date}</div>
                          <div className="text-xs font-mono text-primary">{e.est}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Analysis */}
              <div className="glass-panel overflow-hidden">
                <div className="px-6 py-4 border-b border-panel-border">
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    <BarChart2 size={18} className="text-primary" /> Expert Insights
                  </h2>
                </div>
                <div className="divide-y divide-panel-border">
                  {marketAnalysis.map((a, i) => (
                    <div key={i} className="px-6 py-4 hover:bg-white/5 transition-colors cursor-pointer group">
                      <h3 className="font-medium text-sm group-hover:text-primary transition-colors mb-1">{a.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{a.author}</span>
                        <span>•</span>
                        <span>{a.read}</span>
                        <ExternalLink size={10} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
