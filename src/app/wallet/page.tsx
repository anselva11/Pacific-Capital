"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Wallet, ArrowUpRight, ArrowDownRight, Clock, CreditCard, Bitcoin, DollarSign, Copy } from "lucide-react";

const transactions = [
  { type: "Deposit", asset: "USDT", amount: "+5,000.00", status: "Completed", time: "2024-06-20 14:32", hash: "0x3f2...a1d8" },
  { type: "Withdrawal", asset: "BTC", amount: "-0.15", status: "Completed", time: "2024-06-19 09:15", hash: "0x7c1...e4f2" },
  { type: "Deposit", asset: "USD", amount: "+10,000.00", status: "Completed", time: "2024-06-18 11:00", hash: "Wire Transfer" },
  { type: "Withdrawal", asset: "ETH", amount: "-2.00", status: "Pending", time: "2024-06-17 16:45", hash: "0xb29...3a17" },
  { type: "Deposit", asset: "USDT", amount: "+2,500.00", status: "Completed", time: "2024-06-15 08:20", hash: "0x5d8...c9e1" },
];

export default function WalletPage() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Wallet size={28} className="text-primary" /> Wallet
          </h1>

          {/* Balances */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <BalanceCard icon={<DollarSign size={24} />} currency="USD" balance="45,200.00" color="bg-success/20 text-success" />
            <BalanceCard icon={<Bitcoin size={24} />} currency="BTC" balance="0.7500" color="bg-yellow-400/20 text-yellow-400" />
            <BalanceCard icon={<CreditCard size={24} />} currency="USDT" balance="12,340.00" color="bg-primary/20 text-primary" />
            <BalanceCard icon={<CreditCard size={24} />} currency="ETH" balance="5.0000" color="bg-purple-400/20 text-purple-400" />
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <button className="btn-primary flex items-center gap-2 px-6 py-3">
              <ArrowDownRight size={18} /> Deposit
            </button>
            <button className="btn-secondary flex items-center gap-2 px-6 py-3">
              <ArrowUpRight size={18} /> Withdraw
            </button>
          </div>

          {/* Deposit Address */}
          <div className="glass-panel p-6 mb-8">
            <h2 className="font-semibold text-lg mb-4">Deposit Address (USDT - TRC20)</h2>
            <div className="flex items-center gap-3 bg-background rounded-lg p-4 border border-panel-border">
              <code className="flex-1 font-mono text-sm text-gray-300 break-all">TN3W4H6rK2ce4vX9YnFQHwKENnHjoxb3m9</code>
              <button className="text-primary hover:text-primary/80 p-2 rounded-lg hover:bg-white/5">
                <Copy size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">⚠️ Only send USDT on TRC20 network to this address. Minimum deposit: 10 USDT.</p>
          </div>

          {/* Transaction History */}
          <div className="glass-panel overflow-hidden">
            <div className="px-6 py-4 border-b border-panel-border flex items-center gap-2">
              <Clock size={18} className="text-gray-400" />
              <h2 className="font-semibold text-lg">Transaction History</h2>
            </div>
            <table className="w-full text-left">
              <thead className="bg-panel/50 text-gray-400 text-xs">
                <tr>
                  <th className="px-6 py-3 font-medium">Type</th>
                  <th className="px-6 py-3 font-medium">Asset</th>
                  <th className="px-6 py-3 font-medium text-right">Amount</th>
                  <th className="px-6 py-3 font-medium text-center">Status</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">TX Hash</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-panel-border">
                {transactions.map((tx, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <span className={`flex items-center gap-1 font-medium ${tx.type === "Deposit" ? "text-success" : "text-danger"}`}>
                        {tx.type === "Deposit" ? <ArrowDownRight size={14} /> : <ArrowUpRight size={14} />}
                        {tx.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold">{tx.asset}</td>
                    <td className={`px-6 py-4 text-right font-mono font-medium ${tx.amount.startsWith("+") ? "text-success" : "text-danger"}`}>
                      {tx.amount}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        tx.status === "Completed" ? "bg-success/20 text-success" : "bg-yellow-400/20 text-yellow-400"
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-xs">{tx.time}</td>
                    <td className="px-6 py-4 font-mono text-xs text-gray-500">{tx.hash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

function BalanceCard({ icon, currency, balance, color }: { icon: React.ReactNode; currency: string; balance: string; color: string }) {
  return (
    <div className="glass-panel p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>{icon}</div>
        <span className="font-semibold text-lg">{currency}</span>
      </div>
      <div className="font-mono font-bold text-2xl">{balance}</div>
    </div>
  );
}
