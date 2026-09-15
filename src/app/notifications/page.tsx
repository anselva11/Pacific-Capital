"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import {
  Bell, CheckCircle, TrendingUp, TrendingDown, AlertTriangle,
  ShieldCheck, DollarSign, ArrowDownRight, ArrowUpRight, Info,
  Check, Trash2, Filter, Settings
} from "lucide-react";

type NotifType = "trade" | "alert" | "system" | "deposit" | "security";

interface Notification {
  id: string;
  type: NotifType;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  { id: "1", type: "trade", title: "Order Filled — BTC/USDT", message: "Your limit buy order for 0.25 BTC at $64,100.00 has been fully filled.", time: "2 min ago", read: false },
  { id: "2", type: "alert", title: "Price Alert — NVDA", message: "NVDA has crossed above $890.00. Your price alert has been triggered.", time: "8 min ago", read: false },
  { id: "3", type: "deposit", title: "Deposit Confirmed", message: "Your deposit of 5,000.00 USDT (TRC20) has been credited to your account.", time: "25 min ago", read: false },
  { id: "4", type: "security", title: "New Device Login", message: "A new login was detected from Chrome on macOS in Jakarta, Indonesia.", time: "1h ago", read: false },
  { id: "5", type: "trade", title: "Stop-Loss Triggered — AAPL", message: "Your stop-loss order for 50 AAPL shares at $188.00 has been executed.", time: "2h ago", read: true },
  { id: "6", type: "system", title: "Scheduled Maintenance", message: "Blackridge Capital will undergo scheduled maintenance on Jun 28 from 02:00–04:00 UTC.", time: "3h ago", read: true },
  { id: "7", type: "alert", title: "Volume Spike — SOL/USDT", message: "SOL/USDT trading volume has spiked +340% in the last hour.", time: "4h ago", read: true },
  { id: "8", type: "trade", title: "Order Filled — ETH/USDT", message: "Your market buy order for 2.0 ETH at $3,420.50 has been filled.", time: "5h ago", read: true },
  { id: "9", type: "deposit", title: "Wire Transfer Received", message: "Your USD wire transfer of $10,000.00 has been credited to your account.", time: "1 day ago", read: true },
  { id: "10", type: "security", title: "2FA Enabled", message: "Two-factor authentication has been successfully enabled on your account.", time: "2 days ago", read: true },
  { id: "11", type: "system", title: "New Feature: AI Assistant", message: "Try our new AI Trading Assistant for real-time market analysis and portfolio suggestions.", time: "3 days ago", read: true },
  { id: "12", type: "alert", title: "Price Alert — BTC/USDT", message: "BTC/USDT has crossed above $63,000.00. Your price alert has been triggered.", time: "4 days ago", read: true },
];

const typeConfig: Record<NotifType, { icon: React.ReactNode; color: string; bg: string }> = {
  trade: { icon: <TrendingUp size={18} />, color: "text-success", bg: "bg-success/15" },
  alert: { icon: <AlertTriangle size={18} />, color: "text-yellow-400", bg: "bg-yellow-400/15" },
  system: { icon: <Info size={18} />, color: "text-primary", bg: "bg-primary/15" },
  deposit: { icon: <DollarSign size={18} />, color: "text-emerald-400", bg: "bg-emerald-400/15" },
  security: { icon: <ShieldCheck size={18} />, color: "text-purple-400", bg: "bg-purple-400/15" },
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeFilter, setActiveFilter] = useState<"all" | NotifType>("all");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotif = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const filtered = activeFilter === "all" ? notifications : notifications.filter((n) => n.type === activeFilter);

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bell size={28} className="text-primary" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-danger rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                    {unreadCount}
                  </span>
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold">Notifications</h1>
                <p className="text-gray-500 text-sm">{unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={markAllRead}
                className="btn-secondary text-xs px-4 py-2 flex items-center gap-2"
              >
                <Check size={14} /> Mark all read
              </button>
              <button className="btn-secondary text-xs px-4 py-2 flex items-center gap-2">
                <Settings size={14} /> Preferences
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
            <Filter size={16} className="text-gray-500 flex-shrink-0" />
            {(["all", "trade", "alert", "deposit", "security", "system"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize whitespace-nowrap transition-colors ${
                  activeFilter === f
                    ? "bg-primary text-white"
                    : "bg-panel border border-panel-border text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {f === "all" ? `All (${notifications.length})` : f}
              </button>
            ))}
          </div>

          {/* Notification List */}
          <div className="glass-panel overflow-hidden divide-y divide-panel-border">
            {filtered.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <Bell size={48} className="mx-auto mb-4 opacity-20" />
                <p className="font-medium">No notifications</p>
                <p className="text-xs mt-1">You&apos;re all caught up!</p>
              </div>
            ) : (
              filtered.map((notif) => {
                const config = typeConfig[notif.type];
                return (
                  <div
                    key={notif.id}
                    className={`flex items-start gap-4 px-6 py-5 transition-colors group cursor-pointer ${
                      notif.read ? "hover:bg-white/5" : "bg-primary/[0.03] hover:bg-primary/[0.06]"
                    }`}
                    onClick={() => markRead(notif.id)}
                  >
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-xl ${config.bg} ${config.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      {config.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {!notif.read && <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />}
                        <h3 className={`font-semibold truncate ${notif.read ? "text-gray-300" : "text-white"}`}>
                          {notif.title}
                        </h3>
                      </div>
                      <p className={`text-sm leading-relaxed ${notif.read ? "text-gray-500" : "text-gray-400"}`}>
                        {notif.message}
                      </p>
                      <span className="text-xs text-gray-600 mt-2 block">{notif.time}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1">
                      {!notif.read && (
                        <button
                          onClick={(e) => { e.stopPropagation(); markRead(notif.id); }}
                          className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-success transition-colors"
                          title="Mark as read"
                        >
                          <CheckCircle size={16} />
                        </button>
                      )}
                      <button
                        onClick={(e) => { e.stopPropagation(); deleteNotif(notif.id); }}
                        className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-danger transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
