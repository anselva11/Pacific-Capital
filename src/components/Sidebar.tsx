"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  PieChart, Activity, Star, BarChart2, FileText,
  BookOpen, Settings, MessageSquare, Shield, Wallet
} from "lucide-react";

const navItems = [
  { icon: <PieChart size={20} />, label: "Portfolio", href: "/portfolio" },
  { icon: <Activity size={20} />, label: "Markets", href: "/markets" },
  { icon: <Star size={20} />, label: "Watchlist", href: "/watchlist" },
  { icon: <BarChart2 size={20} />, label: "Trading", href: "/trade" },
  { icon: <FileText size={20} />, label: "News", href: "/news" },
  { icon: <BookOpen size={20} />, label: "Education", href: "/education" },
  { icon: <MessageSquare size={20} />, label: "AI Assistant", href: "/ai-assistant" },
  { icon: <Wallet size={20} />, label: "Wallet", href: "/wallet" },
  { icon: <Shield size={20} />, label: "KYC", href: "/kyc" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-16 md:w-64 flex flex-col border-r border-panel-border bg-panel z-10 flex-shrink-0">
      {/* Logo */}
      <Link href="/" className="h-16 flex items-center justify-center md:justify-start md:px-4 border-b border-panel-border gap-3 hover:bg-white/5 transition-colors">
        <Image src="/logo.png" alt="Pacific Capital" width={36} height={36} className="rounded" />
        <span className="ml-1 font-bold text-lg hidden md:block tracking-tight">
          Pacific<span className="text-primary">Capital</span>
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 py-4 flex flex-col gap-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 md:px-6 py-3 transition-colors border-l-2 ${
                isActive
                  ? "border-primary text-primary bg-primary/5"
                  : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.icon}
              <span className="font-medium hidden md:block">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Settings at bottom */}
      <div className="p-2 border-t border-panel-border">
        <Link
          href="/settings"
          className={`flex items-center gap-3 px-4 md:px-6 py-3 transition-colors border-l-2 rounded ${
            pathname === "/settings"
              ? "border-primary text-primary bg-primary/5"
              : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Settings size={20} />
          <span className="font-medium hidden md:block">Settings</span>
        </Link>
      </div>
    </aside>
  );
}
