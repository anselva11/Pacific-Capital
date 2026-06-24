"use client";

import React from "react";
import Image from "next/image";
import { Users, ShieldAlert, DollarSign, Activity, Settings, UserCheck, BarChart2, AlertTriangle } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="flex h-screen w-full bg-background text-sm">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-panel-border bg-panel flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-4 border-b border-panel-border gap-3">
          <Image src="/logo.png" alt="Pacific Capital" width={36} height={36} className="rounded" />
          <span className="font-bold text-lg text-primary">Admin</span>
        </div>
        <nav className="flex-1 py-4 flex flex-col gap-2">
          <NavItem icon={<Activity size={20} />} label="System Overview" active />
          <NavItem icon={<Users size={20} />} label="User Management" />
          <NavItem icon={<UserCheck size={20} />} label="KYC Approvals" />
          <NavItem icon={<DollarSign size={20} />} label="Revenue" />
          <NavItem icon={<BarChart2 size={20} />} label="Market Data" />
          <NavItem icon={<ShieldAlert size={20} />} label="Security / Logs" />
          <NavItem icon={<Settings size={20} />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-background">
        <header className="h-16 border-b border-panel-border flex items-center justify-between px-8 bg-panel">
          <h1 className="text-xl font-semibold">System Overview</h1>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono bg-success/20 text-success px-2 py-1 rounded">All Systems Operational</span>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">A</div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <MetricCard title="Total Users" value="1.24M" change="+12K this week" />
            <MetricCard title="24h Trading Volume" value="$4.2B" change="+8.4%" />
            <MetricCard title="Pending KYCs" value="432" change="-12 from yesterday" alert />
            <MetricCard title="Daily Revenue" value="$342,500" change="+2.1%" />
          </div>

          {/* Revenue Chart Placeholder */}
          <div className="glass-panel p-6">
            <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
            <div className="h-48 rounded-lg bg-background flex items-end justify-center gap-2 p-4 overflow-hidden">
              {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m, i) => {
                const h = Math.round(20 + Math.abs(Math.sin(i * 0.8) * 60 + Math.cos(i * 0.5) * 20));
                return (
                  <div key={m} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-gradient-to-t from-primary to-primary/40 rounded-t hover:from-primary hover:to-primary/60 transition-colors cursor-pointer"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[10px] text-gray-500">{m}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* KYC Approvals Section */}
          <div className="glass-panel overflow-hidden">
            <div className="px-6 py-4 border-b border-panel-border bg-panel flex justify-between items-center">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <UserCheck size={18} className="text-primary" /> Recent KYC Requests
              </h2>
              <button className="text-primary text-sm hover:underline">View All</button>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-panel/50 text-gray-400">
                <tr>
                  <th className="px-6 py-3 font-medium">User ID</th>
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">Country</th>
                  <th className="px-6 py-3 font-medium">Document</th>
                  <th className="px-6 py-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-panel-border">
                {[
                  { id: "USR-001", name: "John Doe", country: "USA", doc: "Passport" },
                  { id: "USR-002", name: "Alice Smith", country: "UK", doc: "ID Card" },
                  { id: "USR-003", name: "Bob Johnson", country: "Canada", doc: "Driver License" },
                  { id: "USR-004", name: "Maria Garcia", country: "Spain", doc: "Passport" },
                ].map((user) => (
                  <tr key={user.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-gray-300">{user.id}</td>
                    <td className="px-6 py-4 font-medium">{user.name}</td>
                    <td className="px-6 py-4">{user.country}</td>
                    <td className="px-6 py-4">{user.doc}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-success hover:text-success/80 font-medium mr-4">Approve</button>
                      <button className="text-danger hover:text-danger/80 font-medium">Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Security Alerts */}
          <div className="glass-panel overflow-hidden">
            <div className="px-6 py-4 border-b border-panel-border bg-panel flex items-center gap-2">
              <AlertTriangle size={18} className="text-warning" />
              <h2 className="text-lg font-semibold">Security Alerts</h2>
            </div>
            <div className="divide-y divide-panel-border">
              {[
                { msg: "Unusual login attempt from IP 192.168.1.1 (Russia)", time: "5 min ago", severity: "high" },
                { msg: "Rate limit exceeded for API key pk_live_xxx...xxx", time: "12 min ago", severity: "medium" },
                { msg: "Failed withdrawal attempt for user USR-005", time: "1h ago", severity: "low" },
              ].map((alert, i) => (
                <div key={i} className="px-6 py-4 hover:bg-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${
                      alert.severity === "high" ? "bg-danger" : alert.severity === "medium" ? "bg-warning" : "bg-gray-500"
                    }`} />
                    <span>{alert.msg}</span>
                  </div>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{alert.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-6 py-3 cursor-pointer transition-colors border-l-2 ${active ? "border-primary text-primary bg-primary/5" : "border-transparent text-gray-400 hover:text-white hover:bg-white/5"}`}>
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
}

function MetricCard({ title, value, change, alert = false }: { title: string, value: string, change: string, alert?: boolean }) {
  return (
    <div className="glass-panel p-6 border border-panel-border">
      <h3 className="text-gray-400 text-sm font-medium mb-2">{title}</h3>
      <div className="text-3xl font-bold font-mono mb-2">{value}</div>
      <div className={`text-xs ${alert ? "text-warning" : "text-success"}`}>{change}</div>
    </div>
  );
}
