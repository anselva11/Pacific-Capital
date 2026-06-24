import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, ShieldCheck, Globe, Zap, Smartphone } from "lucide-react";
import TickerTape from "@/components/TickerTape";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <TickerTape />

      {/* Header / Navbar */}
      <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between border-b border-panel-border/50 sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold tracking-tighter">
          <Image src="/logo.png" alt="Pacific Capital" width={40} height={40} className="rounded" />
          Pacific<span className="text-primary">Capital</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link href="/markets" className="hover:text-white transition-colors">Markets</Link>
          <Link href="/trade" className="hover:text-white transition-colors">Trade</Link>
          <Link href="/features" className="hover:text-white transition-colors">Features</Link>
          <Link href="/learn" className="hover:text-white transition-colors">Learn</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Log In</Link>
          <Link href="/register" className="btn-primary text-sm px-4 py-2">Open Account</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-panel border border-panel-border text-sm mb-8">
          <span className="flex h-2 w-2 rounded-full bg-success"></span>
          <span className="text-gray-300">Market Status: <span className="text-white font-medium">Open</span></span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mb-6">
          The Professional <br />
          <span className="text-gradient">Trading Platform</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
          Trade Stocks, Crypto, Forex, and Commodities with enterprise-grade security, ultra-low latency, and advanced charting tools.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/trade" className="btn-primary text-lg px-8 py-4 flex items-center gap-2">
            Start Trading <ArrowRight size={20} />
          </Link>
          <Link href="/app" className="btn-secondary text-lg px-8 py-4 flex items-center gap-2">
            <Smartphone size={20} /> Download App
          </Link>
        </div>
      </section>

      {/* Market Overview Section */}
      <section className="px-6 md:px-12 py-16 bg-panel/30 border-t border-panel-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Live Market Overview</h2>
            <Link href="/markets" className="text-primary hover:underline text-sm font-medium">View All Markets</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Crypto Markets */}
            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Zap size={20} className="text-yellow-400" /> Crypto
              </h3>
              <div className="space-y-4">
                {[
                  { pair: "BTC/USDT", price: "64,230.50", change: "+2.4%", up: true },
                  { pair: "ETH/USDT", price: "3,450.12", change: "+1.8%", up: true },
                  { pair: "SOL/USDT", price: "142.80", change: "+6.1%", up: true },
                  { pair: "BNB/USDT", price: "585.40", change: "+0.9%", up: true },
                ].map((item) => (
                  <div key={item.pair} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-panel-border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-panel-border flex items-center justify-center font-bold text-xs">
                        {item.pair.split('/')[0].substring(0, 2)}
                      </div>
                      <span className="font-semibold">{item.pair}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-medium">${item.price}</div>
                      <div className={`text-sm font-medium ${item.up ? "text-success" : "text-danger"}`}>{item.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stock Markets */}
            <div className="glass-panel p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Globe size={20} className="text-blue-400" /> Stocks
              </h3>
              <div className="space-y-4">
                {[
                  { symbol: "AAPL", price: "189.43", change: "-0.5%", up: false },
                  { symbol: "TSLA", price: "175.22", change: "+4.2%", up: true },
                  { symbol: "NVDA", price: "890.10", change: "+5.1%", up: true },
                  { symbol: "MSFT", price: "415.60", change: "+0.8%", up: true },
                ].map((item) => (
                  <div key={item.symbol} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-panel-border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-md bg-panel-border flex items-center justify-center font-bold text-xs">
                        {item.symbol.substring(0, 1)}
                      </div>
                      <span className="font-semibold">{item.symbol}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-medium">${item.price}</div>
                      <div className={`text-sm font-medium ${item.up ? "text-success" : "text-danger"}`}>{item.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-panel-border bg-panel/20 hover:bg-panel/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-6">
              <BarChart3 size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced Trading Terminal</h3>
            <p className="text-gray-400">Professional charts, 100+ technical indicators, drawing tools, and real-time OHLCV streaming.</p>
          </div>
          <div className="p-6 rounded-xl border border-panel-border bg-panel/20 hover:bg-panel/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-success/20 text-success flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
            <p className="text-gray-400">SOC2 compliant, military-grade SSL encryption, cold storage for crypto assets, and strict KYC/AML.</p>
          </div>
          <div className="p-6 rounded-xl border border-panel-border bg-panel/20 hover:bg-panel/40 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Ultra-Low Latency</h3>
            <p className="text-gray-400">Direct market access (DMA) and institutional-grade order matching engine for high-frequency trading.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-panel-border bg-panel/30 px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 text-xl font-bold mb-4">
              <Image src="/logo.png" alt="Pacific Capital" width={32} height={32} className="rounded" />
              Pacific Capital
            </div>
            <p className="text-gray-400 text-sm max-w-xs">Connecting opportunities, delivering value. A globally licensed brokerage for professional traders.</p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="font-semibold mb-3 text-sm">Platform</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <Link href="/trade" className="hover:text-white">Trading</Link>
                <Link href="/markets" className="hover:text-white">Markets</Link>
                <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-sm">Company</h4>
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <Link href="/features" className="hover:text-white">Features</Link>
                <Link href="/learn" className="hover:text-white">Learn</Link>
                <Link href="/app" className="hover:text-white">Download App</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-panel-border text-center text-xs text-gray-500">
          © 2024 Pacific Capital — Pacific Brokerage Group. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
