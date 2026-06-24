"use client";

import React from "react";
import Link from "next/link";
import { Search, Bell, User } from "lucide-react";

export default function TopNav() {
  return (
    <header className="h-16 border-b border-panel-border bg-panel flex items-center justify-between px-4 flex-shrink-0">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-full max-w-sm hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search Symbol (e.g. AAPL, BTC)..."
            className="w-full bg-background border border-panel-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex flex-col items-end">
          <span className="text-xs text-gray-400">Available Balance</span>
          <span className="font-mono font-bold text-white">$124,500.00</span>
        </div>
        <Link href="/notifications" className="text-gray-400 hover:text-white relative transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-danger rounded-full flex items-center justify-center text-[9px] font-bold text-white">4</span>
        </Link>
        <Link href="/settings" className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center hover:bg-primary/30 transition-colors">
          <User size={16} />
        </Link>
      </div>
    </header>
  );
}
