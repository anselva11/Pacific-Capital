"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Gift, Users, DollarSign, Link2, Copy, ChevronRight, ArrowUpRight } from "lucide-react";

export default function ReferralPage() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Gift size={28} className="text-primary" /> Referral Program
          </h1>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="glass-panel p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center"><Users size={20} className="text-primary" /></div>
                <span className="text-gray-400 text-sm">Total Referrals</span>
              </div>
              <div className="text-3xl font-bold font-mono">24</div>
            </div>
            <div className="glass-panel p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-success/20 flex items-center justify-center"><DollarSign size={20} className="text-success" /></div>
                <span className="text-gray-400 text-sm">Total Earnings</span>
              </div>
              <div className="text-3xl font-bold font-mono text-success">$1,842.00</div>
            </div>
            <div className="glass-panel p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/20 flex items-center justify-center"><ArrowUpRight size={20} className="text-yellow-400" /></div>
                <span className="text-gray-400 text-sm">Commission Rate</span>
              </div>
              <div className="text-3xl font-bold font-mono">20%</div>
            </div>
          </div>

          {/* Referral Link */}
          <div className="glass-panel p-6 mb-8">
            <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
              <Link2 size={18} className="text-primary" /> Your Referral Link
            </h2>
            <p className="text-gray-400 text-sm mb-4">Share this link and earn 20% of your referrals&apos; trading fees for life.</p>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-background border border-panel-border rounded-lg px-4 py-3 font-mono text-sm text-gray-300 truncate">
                https://pacific-capital.com/ref/JOHNDOE2024
              </div>
              <button className="btn-primary flex items-center gap-2 px-5 py-3 whitespace-nowrap">
                <Copy size={16} /> Copy Link
              </button>
            </div>
          </div>

          {/* How it works */}
          <div className="glass-panel p-6 mb-8">
            <h2 className="font-semibold text-lg mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Share Your Link", desc: "Send your unique referral link to friends, family, or your community." },
                { step: "2", title: "They Sign Up & Trade", desc: "When they create an account and start trading, you're automatically linked." },
                { step: "3", title: "Earn Commissions", desc: "Earn 20% of their trading fees forever. Commissions are paid out weekly." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold flex-shrink-0">{s.step}</div>
                  <div>
                    <h3 className="font-semibold mb-1">{s.title}</h3>
                    <p className="text-gray-400 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Referral History */}
          <div className="glass-panel overflow-hidden">
            <div className="px-6 py-4 border-b border-panel-border">
              <h2 className="font-semibold text-lg">Referral History</h2>
            </div>
            <table className="w-full text-left">
              <thead className="bg-panel/50 text-gray-400 text-xs">
                <tr>
                  <th className="px-6 py-3 font-medium">User</th>
                  <th className="px-6 py-3 font-medium">Joined</th>
                  <th className="px-6 py-3 font-medium text-right">Trading Volume</th>
                  <th className="px-6 py-3 font-medium text-right">Your Earnings</th>
                  <th className="px-6 py-3 font-medium text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-panel-border">
                {[
                  { user: "alice@****.com", joined: "Jun 10, 2024", vol: "$45,200", earn: "$180.80", status: "Active" },
                  { user: "bob@****.com", joined: "Jun 5, 2024", vol: "$128,500", earn: "$514.00", status: "Active" },
                  { user: "carol@****.com", joined: "May 28, 2024", vol: "$12,300", earn: "$49.20", status: "Active" },
                  { user: "dave@****.com", joined: "May 20, 2024", vol: "$0", earn: "$0", status: "Pending KYC" },
                ].map((r, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-sm">{r.user}</td>
                    <td className="px-6 py-4 text-gray-400">{r.joined}</td>
                    <td className="px-6 py-4 text-right font-mono">{r.vol}</td>
                    <td className="px-6 py-4 text-right font-mono text-success font-medium">{r.earn}</td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        r.status === "Active" ? "bg-success/20 text-success" : "bg-yellow-400/20 text-yellow-400"
                      }`}>{r.status}</span>
                    </td>
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
