import Link from "next/link";
import { ArrowLeft, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
        <div className="flex items-center gap-3 mb-12">
          <Cpu className="text-primary" size={32} />
          <h1 className="text-4xl font-bold">Platform Features</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FeatureCard 
            icon={<Zap size={32} className="text-yellow-400" />}
            title="Ultra-Low Latency Trading Engine"
            desc="Our proprietary C++ matching engine executes trades in under 50 microseconds. Direct Market Access (DMA) available for institutional clients."
          />
          <FeatureCard 
            icon={<ShieldCheck size={32} className="text-success" />}
            title="Bank-Grade Security"
            desc="SOC2 Type II certified. 95% of digital assets stored in geographically distributed multi-sig cold wallets. AES-256 encryption at rest."
          />
          <FeatureCard 
            icon={<Globe size={32} className="text-blue-400" />}
            title="Global Market Access"
            desc="Trade 10,000+ assets across 50 global exchanges from a single account. Stocks, Options, Futures, Forex, and Crypto."
          />
          <FeatureCard 
            icon={<Cpu size={32} className="text-purple-400" />}
            title="AI-Powered Analytics"
            desc="Leverage our built-in AI assistant to scan markets for patterns, receive personalized portfolio suggestions, and backtest strategies."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="glass-panel p-8 border border-panel-border flex flex-col gap-4">
      <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-lg">{desc}</p>
    </div>
  );
}
