import Link from "next/link";
import { ArrowLeft, BookOpen, Video, FileText } from "lucide-react";

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-primary" size={32} />
          <h1 className="text-4xl font-bold">Trading Academy</h1>
        </div>
        
        <p className="text-xl text-gray-400 mb-12 max-w-3xl">
          Master the markets with our comprehensive educational resources. From beginner basics to advanced algorithmic trading strategies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <FileText size={24} />, title: "Beginner Guides", desc: "Learn the basics of stocks, crypto, and how to place your first trade." },
            { icon: <Video size={24} />, title: "Video Tutorials", desc: "Watch professional traders explain market analysis and platform features." },
            { icon: <BookOpen size={24} />, title: "Advanced Strategies", desc: "Deep dive into options, margin trading, and technical analysis." }
          ].map((item, i) => (
            <div key={i} className="glass-panel p-6 border border-panel-border hover:border-primary/50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
