import Link from "next/link";
import { ArrowLeft, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] -z-10" />
      
      <div className="glass-panel p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded bg-primary flex items-center justify-center text-white font-bold text-xl mb-4">
            P
          </div>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-gray-400 text-sm mt-2">Log in to your Blackridge Capital account</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="email" 
                className="w-full bg-background border border-panel-border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <label className="block text-sm font-medium text-gray-400">Password</label>
              <Link href="#" className="text-sm text-primary hover:underline">Forgot password?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input 
                type="password" 
                className="w-full bg-background border border-panel-border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary"
                placeholder="••••••••"
              />
            </div>
          </div>
          <button type="button" className="btn-primary w-full py-3 mt-4">Log In</button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          Don't have an account? <Link href="/register" className="text-primary hover:underline font-medium">Create one</Link>
        </div>
        
        <div className="mt-6 text-center">
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-white text-sm">
            <ArrowLeft size={14} className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
