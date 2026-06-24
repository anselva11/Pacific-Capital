"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import { Shield, Upload, Camera, MapPin, CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function KYCPage() {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Shield size={28} className="text-primary" /> KYC Verification
          </h1>
          <p className="text-gray-400 mb-8">Complete your identity verification to unlock full trading access.</p>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 mb-12">
            <Step step={1} label="Personal Info" status="completed" />
            <Connector active />
            <Step step={2} label="Identity Document" status="current" />
            <Connector />
            <Step step={3} label="Selfie Verification" status="pending" />
            <Connector />
            <Step step={4} label="Address Proof" status="pending" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload ID */}
            <div className="glass-panel p-6">
              <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Upload size={18} className="text-primary" /> Upload Identity Document
              </h2>
              <p className="text-gray-400 text-sm mb-6">Accepted: Passport, National ID, or Driver License</p>

              <div className="border-2 border-dashed border-panel-border rounded-xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Upload size={28} className="text-primary" />
                </div>
                <p className="font-medium mb-1">Drop your file here or click to upload</p>
                <p className="text-xs text-gray-500">PNG, JPG or PDF — Max 10MB</p>
              </div>
            </div>

            {/* Selfie Verification */}
            <div className="glass-panel p-6">
              <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Camera size={18} className="text-primary" /> Selfie Verification
              </h2>
              <p className="text-gray-400 text-sm mb-6">Take a photo holding your ID next to your face.</p>

              <div className="border-2 border-dashed border-panel-border rounded-xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Camera size={28} className="text-primary" />
                </div>
                <p className="font-medium mb-1">Open camera or upload photo</p>
                <p className="text-xs text-gray-500">Ensure your face and ID are clearly visible</p>
              </div>
            </div>

            {/* Address Verification */}
            <div className="glass-panel p-6">
              <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <MapPin size={18} className="text-primary" /> Address Verification
              </h2>
              <p className="text-gray-400 text-sm mb-6">Upload a utility bill or bank statement (within 3 months).</p>

              <div className="border-2 border-dashed border-panel-border rounded-xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin size={28} className="text-primary" />
                </div>
                <p className="font-medium mb-1">Upload address proof</p>
                <p className="text-xs text-gray-500">PNG, JPG or PDF — Max 10MB</p>
              </div>
            </div>

            {/* Verification Status */}
            <div className="glass-panel p-6">
              <h2 className="font-semibold text-lg mb-6">Verification Status</h2>
              <div className="space-y-4">
                <StatusRow label="Email Verified" status="completed" />
                <StatusRow label="Phone Verified" status="completed" />
                <StatusRow label="Identity Document" status="pending" />
                <StatusRow label="Selfie Verification" status="not_started" />
                <StatusRow label="Address Proof" status="not_started" />
              </div>
              <button className="btn-primary w-full mt-6 py-3">Submit for Review</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Step({ step, label, status }: { step: number; label: string; status: "completed" | "current" | "pending" }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
        status === "completed" ? "bg-success text-white" :
        status === "current" ? "bg-primary text-white" :
        "bg-panel border border-panel-border text-gray-500"
      }`}>
        {status === "completed" ? <CheckCircle size={20} /> : step}
      </div>
      <span className={`text-sm font-medium hidden sm:block ${status === "current" ? "text-white" : "text-gray-500"}`}>{label}</span>
    </div>
  );
}

function Connector({ active = false }: { active?: boolean }) {
  return <div className={`flex-1 h-0.5 rounded ${active ? "bg-primary" : "bg-panel-border"}`} />;
}

function StatusRow({ label, status }: { label: string; status: "completed" | "pending" | "not_started" }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-panel-border/50 last:border-0">
      <span className="text-gray-300">{label}</span>
      {status === "completed" && <span className="flex items-center gap-1 text-success text-xs font-medium"><CheckCircle size={14} /> Verified</span>}
      {status === "pending" && <span className="flex items-center gap-1 text-yellow-400 text-xs font-medium"><Clock size={14} /> In Review</span>}
      {status === "not_started" && <span className="flex items-center gap-1 text-gray-500 text-xs font-medium"><AlertCircle size={14} /> Required</span>}
    </div>
  );
}
