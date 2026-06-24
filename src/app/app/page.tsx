import Link from "next/link";
import { ArrowLeft, Smartphone, Apple, PlaySquare } from "lucide-react";

export default function AppDownloadPage() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/10 rounded-full blur-[150px] -z-10" />

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-panel border border-panel-border text-sm mb-6">
            <span className="text-success font-medium">New Release</span>
            <span className="text-gray-300">Version 2.0 is live!</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Trade Anywhere. <br />
            <span className="text-gradient">Never Miss a Move.</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10">
            Download the Pacific Capital mobile app for iOS and Android. Experience desktop-grade performance in the palm of your hand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center gap-3 bg-white text-black px-6 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold">
              <Apple size={24} /> Download for iOS
            </button>
            <button className="flex items-center gap-3 bg-panel border border-panel-border px-6 py-4 rounded-xl hover:bg-white/5 transition-colors font-semibold">
              <PlaySquare size={24} /> Download for Android
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center relative">
          <div className="w-72 h-[600px] border-8 border-gray-800 rounded-[3rem] bg-panel shadow-2xl overflow-hidden relative flex flex-col">
            {/* Phone Mockup Content */}
            <div className="h-6 w-1/3 bg-gray-800 mx-auto rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 z-10"></div>
            <div className="p-6 pt-12 flex-1 flex flex-col gap-4">
              <div className="flex items-center justify-between mb-4">
                <span className="font-bold">Portfolio</span>
                <span className="text-success">+2.4%</span>
              </div>
              <div className="text-3xl font-mono font-bold mb-6">$124,500.00</div>
              
              {/* Dummy Chart */}
              <div className="h-32 bg-primary/20 rounded-xl mb-6 relative overflow-hidden flex items-end">
                 <div className="w-full h-1/2 bg-gradient-to-t from-primary/50 to-transparent"></div>
                 <svg className="absolute w-full h-full" preserveAspectRatio="none">
                   <path d="M0,80 Q20,60 40,70 T80,50 T120,40 T160,20 T200,30 L200,100 L0,100 Z" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" strokeWidth="2" />
                 </svg>
              </div>

              {/* Dummy List */}
              <div className="space-y-3">
                {[1,2,3].map(i => (
                  <div key={i} className="h-12 bg-white/5 rounded-lg flex items-center justify-between px-3">
                    <div className="flex gap-2 items-center">
                      <div className="w-6 h-6 rounded-full bg-white/10"></div>
                      <div className="w-16 h-2 bg-white/20 rounded"></div>
                    </div>
                    <div className="w-12 h-2 bg-success/50 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
            {/* Bottom Nav Bar */}
            <div className="h-16 bg-panel border-t border-panel-border flex items-center justify-around px-4">
               {[1,2,3,4,5].map(i => <div key={i} className="w-6 h-6 rounded-md bg-white/20"></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
