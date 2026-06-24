"use client";

import React from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Settings as SettingsIcon, User, Shield, Smartphone, Globe, Bell, Palette, Monitor, Moon, Sun, ChevronRight, LogOut } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <SettingsIcon size={28} className="text-primary" /> Settings
          </h1>

          <div className="max-w-3xl space-y-6">
            {/* Profile Section */}
            <div className="glass-panel p-6">
              <h2 className="font-semibold text-lg mb-6 flex items-center gap-2">
                <User size={18} className="text-primary" /> Profile
              </h2>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Image src="/logo.png" alt="Pacific Capital" width={64} height={64} className="rounded-lg" />
                </div>
                <div>
                  <div className="font-bold text-lg">John Doe</div>
                  <div className="text-gray-400 text-sm">john.doe@example.com</div>
                  <div className="mt-1 text-xs bg-success/20 text-success px-2 py-0.5 rounded inline-block font-medium">Verified</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">First Name</label>
                  <input type="text" defaultValue="John" className="w-full bg-background border border-panel-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full bg-background border border-panel-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Phone</label>
                  <input type="text" defaultValue="+1 (555) 123-4567" className="w-full bg-background border border-panel-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Country</label>
                  <input type="text" defaultValue="United States" className="w-full bg-background border border-panel-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-primary" />
                </div>
              </div>
              <button className="btn-primary mt-4">Save Changes</button>
            </div>

            {/* Security */}
            <div className="glass-panel p-6">
              <h2 className="font-semibold text-lg mb-6 flex items-center gap-2">
                <Shield size={18} className="text-success" /> Security
              </h2>
              <div className="space-y-4">
                <SettingRow icon={<Shield size={18} />} title="Two-Factor Authentication" subtitle="Secure your account with 2FA" action={<ToggleSwitch on />} />
                <SettingRow icon={<Smartphone size={18} />} title="Biometric Login" subtitle="Use Face ID or fingerprint" action={<ToggleSwitch />} />
                <SettingRow icon={<Monitor size={18} />} title="Device Management" subtitle="3 active devices" action={<ChevronRight size={18} className="text-gray-500" />} />
                <SettingRow icon={<Shield size={18} />} title="Change Password" subtitle="Last changed 30 days ago" action={<ChevronRight size={18} className="text-gray-500" />} />
              </div>
            </div>

            {/* Preferences */}
            <div className="glass-panel p-6">
              <h2 className="font-semibold text-lg mb-6 flex items-center gap-2">
                <Palette size={18} className="text-purple-400" /> Preferences
              </h2>
              <div className="space-y-4">
                <SettingRow icon={<Moon size={18} />} title="Theme" subtitle="Dark mode" action={
                  <div className="flex bg-background rounded-lg p-1 gap-1">
                    <button className="p-1.5 rounded bg-white/10"><Moon size={14} /></button>
                    <button className="p-1.5 rounded text-gray-500"><Sun size={14} /></button>
                  </div>
                } />
                <SettingRow icon={<Globe size={18} />} title="Language" subtitle="English" action={<ChevronRight size={18} className="text-gray-500" />} />
                <SettingRow icon={<Globe size={18} />} title="Currency" subtitle="USD" action={<ChevronRight size={18} className="text-gray-500" />} />
                <SettingRow icon={<Bell size={18} />} title="Notifications" subtitle="Price alerts, order fills, news" action={<ChevronRight size={18} className="text-gray-500" />} />
              </div>
            </div>

            {/* Danger Zone */}
            <div className="glass-panel p-6 border-danger/30">
              <button className="flex items-center gap-2 text-danger hover:text-danger/80 font-medium">
                <LogOut size={18} /> Log Out
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function SettingRow({ icon, title, subtitle, action }: { icon: React.ReactNode; title: string; subtitle: string; action: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-panel-border/50 last:border-0 cursor-pointer hover:bg-white/5 -mx-2 px-2 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <div className="text-gray-400">{icon}</div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-xs text-gray-500">{subtitle}</div>
        </div>
      </div>
      {action}
    </div>
  );
}

function ToggleSwitch({ on = false }: { on?: boolean }) {
  return (
    <div className={`w-10 h-6 rounded-full flex items-center px-1 cursor-pointer transition-colors ${on ? "bg-success" : "bg-gray-700"}`}>
      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${on ? "translate-x-4" : ""}`} />
    </div>
  );
}
