import React from "react";
import Link from "next/link";
import Image from "next/image";
import TickerTape from "@/components/TickerTape";
import { ArrowRight, BarChart2, Globe, Shield, Zap, TrendingUp, Cpu, Users, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <TickerTape />

      {/* Header / Navbar */}
      <header className="w-full py-3 px-4 md:py-4 md:px-12 flex items-center justify-between border-b border-panel-border/30 sticky top-0 bg-background/60 backdrop-blur-xl z-50">
        <Link href="/" className="flex items-center gap-2 md:gap-3 text-xl md:text-2xl font-bold tracking-tighter flex-shrink-0">
          <Image src="/logo.png" alt="Pacific Capital" width={36} height={36} className="rounded w-8 h-8 md:w-10 md:h-10 shadow-[0_0_15px_rgba(79,70,229,0.5)]" />
          <span className="hidden sm:block tracking-tight">Pacific<span className="text-primary font-black">Capital</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/markets" className="hover:text-white transition-colors">Markets</Link>
          <Link href="/trade" className="hover:text-white transition-colors">Trade</Link>
          <Link href="/copy-trading" className="hover:text-white transition-colors">Social</Link>
          <Link href="/features" className="hover:text-white transition-colors">Features</Link>
        </nav>
        <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
          <Link href="/login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Log In</Link>
          <Link href="/register" className="btn-primary text-xs md:text-sm px-4 py-2">Open Account</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 pt-24 pb-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now Live: AI Trading Assistant
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
            Invest in the <br className="hidden md:block" />
            <span className="text-gradient">Future of Wealth</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Pacific Capital is the premier platform for the modern investor. Trade stocks, crypto, and forex with zero commissions and institutional-grade tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link href="/register" className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center text-lg px-8 py-3">
              Start Trading <ArrowRight size={18} />
            </Link>
            <Link href="/app" className="btn-secondary w-full sm:w-auto justify-center text-lg px-8 py-3">
              Download App
            </Link>
          </div>
        </div>
        
        {/* Mock UI Graphic */}
        <div className="flex-1 w-full max-w-lg md:max-w-none relative z-10">
          <div className="relative w-full aspect-square md:aspect-[4/3]">
            {/* Glowing orbs behind UI */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/30 blur-[100px] rounded-full mix-blend-screen"></div>
            <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-accent/20 blur-[80px] rounded-full mix-blend-screen"></div>
            
            {/* Main Glass Mockup */}
            <div className="absolute inset-0 glass-panel p-6 flex flex-col justify-between overflow-hidden border-t border-l border-white/10 group transform hover:-translate-y-2 transition-transform duration-500">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-1">Portfolio Balance</div>
                  <div className="text-4xl font-bold font-mono text-white tracking-tight">$124,500.00</div>
                  <div className="text-sm text-success flex items-center gap-1 font-medium mt-1">
                    <TrendingUp size={14} /> +$4,250.00 (3.4%)
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent p-[2px]">
                  <div className="w-full h-full bg-panel rounded-full flex items-center justify-center">
                    <BarChart2 className="text-white" size={20} />
                  </div>
                </div>
              </div>
              
              {/* Fake Chart */}
              <div className="flex-1 w-full flex items-end gap-1.5 opacity-80">
                {[40, 30, 50, 40, 60, 55, 75, 65, 85, 80, 100].map((h, i) => (
                  <div key={i} className="w-full bg-gradient-to-t from-primary/80 to-accent/80 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-6 top-1/4 glass-panel p-4 flex items-center gap-4 animate-[float_4s_ease-in-out_infinite]">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Image src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=029" alt="BTC" width={24} height={24} />
              </div>
              <div>
                <div className="font-bold">BTC/USDT</div>
                <div className="text-success text-sm font-medium">+2.4%</div>
              </div>
            </div>
            
            <div className="absolute -right-6 bottom-1/4 glass-panel p-4 flex items-center gap-4 animate-[float_5s_ease-in-out_infinite_reverse]">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="invert" alt="AAPL" width={20} height={20} />
              </div>
              <div>
                <div className="font-bold">AAPL</div>
                <div className="font-mono text-sm text-gray-300">$189.43</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Market Overview Bento Grid */}
      <section className="px-6 md:px-12 py-24 bg-panel/30 border-y border-panel-border/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Real-Time Pulse</h2>
            <p className="text-gray-400">Track thousands of assets instantly with our low-latency infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Crypto Markets */}
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Zap size={20} className="text-accent" /> Crypto Markets
              </h3>
              <div className="space-y-4">
                {[
                  { pair: "BTC/USDT", price: "64,230.50", change: "+2.4%", up: true },
                  { pair: "ETH/USDT", price: "3,450.12", change: "+1.8%", up: true },
                  { pair: "SOL/USDT", price: "142.80", change: "+6.1%", up: true },
                  { pair: "BNB/USDT", price: "585.40", change: "+0.9%", up: true },
                ].map((item) => (
                  <div key={item.pair} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-panel-border">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xs">
                        {item.pair.split('/')[0].substring(0, 2)}
                      </div>
                      <span className="font-bold text-lg">{item.pair}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-lg">${item.price}</div>
                      <div className={`text-sm font-medium ${item.up ? "text-success" : "text-danger"}`}>{item.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stock Markets */}
            <div className="glass-panel p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Globe size={20} className="text-primary" /> Global Equities
              </h3>
              <div className="space-y-4">
                {[
                  { symbol: "AAPL", price: "189.43", change: "-0.5%", up: false },
                  { symbol: "TSLA", price: "175.22", change: "+4.2%", up: true },
                  { symbol: "NVDA", price: "890.10", change: "+5.1%", up: true },
                  { symbol: "MSFT", price: "415.60", change: "+0.8%", up: true },
                ].map((item) => (
                  <div key={item.symbol} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-panel-border">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-xs">
                        {item.symbol.substring(0, 1)}
                      </div>
                      <span className="font-bold text-lg">{item.symbol}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-lg">${item.price}</div>
                      <div className={`text-sm font-medium ${item.up ? "text-success" : "text-danger"}`}>{item.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Built for Performance</h2>
          <p className="text-gray-400">Institutional-grade tools designed for retail investors.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Feature */}
          <div className="glass-panel p-8 md:col-span-2 group overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
            <Cpu className="text-primary mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-3 tracking-tight">AI-Powered Insights</h3>
            <p className="text-gray-400 max-w-md">Our proprietary AI analyzes millions of data points across news, social sentiment, and technical indicators to provide actionable trading signals in real-time.</p>
          </div>
          
          <div className="glass-panel p-8 group overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-success/10 rounded-full blur-2xl group-hover:bg-success/20 transition-colors"></div>
            <Shield className="text-success mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 tracking-tight">Bank-Grade Security</h3>
            <p className="text-gray-400 text-sm">Assets are stored in cold wallets with AES-256 encryption and biometric 2FA.</p>
          </div>

          <div className="glass-panel p-8 group overflow-hidden relative">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors"></div>
            <Smartphone className="text-accent mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3 tracking-tight">Mobile First</h3>
            <p className="text-gray-400 text-sm">Trade anywhere, anytime with our award-winning mobile application.</p>
          </div>

          <div className="glass-panel p-8 md:col-span-2 group overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors"></div>
            <Users className="text-purple-400 mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-3 tracking-tight">Social Copy Trading</h3>
            <p className="text-gray-400 max-w-md">Follow top-performing traders on the leaderboard. Automatically copy their trades in real-time and mirror their success with a single click.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-panel-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Ready to revolutionize <br className="hidden md:block"/> your portfolio?</h2>
          <p className="text-xl text-gray-400 mb-10">Join over 2 million investors who trust Pacific Capital.</p>
          <Link href="/register" className="btn-primary text-lg px-10 py-4 shadow-[0_0_40px_rgba(79,70,229,0.4)]">
            Open Free Account
          </Link>
          <p className="text-sm text-gray-500 mt-6">Takes less than 3 minutes. No credit card required.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-panel border-t border-panel-border/50 py-12 px-6 md:px-12 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-white font-bold tracking-tight mb-6">
              <Image src="/logo.png" alt="Pacific Capital" width={24} height={24} className="rounded" />
              PacificCapital
            </div>
            <p className="mb-4">The next generation of investing infrastructure.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="/markets" className="hover:text-primary transition-colors">Stocks & ETFs</Link></li>
              <li><Link href="/markets" className="hover:text-primary transition-colors">Crypto</Link></li>
              <li><Link href="/markets" className="hover:text-primary transition-colors">Forex</Link></li>
              <li><Link href="/copy-trading" className="hover:text-primary transition-colors">Copy Trading</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Security</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">API Documentation</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Fees</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-panel-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Pacific Capital Brokerage Group. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Legal</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
