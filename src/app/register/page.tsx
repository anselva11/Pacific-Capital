import Link from "next/link";
import { ArrowLeft, User, Mail, Lock, ShieldCheck } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-success/10 rounded-full blur-[120px] -z-10" />
      
      <div className="glass-panel p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 rounded bg-primary flex items-center justify-center text-white font-bold text-xl mb-4">
            P
          </div>
          <h1 className="text-2xl font-bold">Open an Account</h1>
          <p className="text-gray-400 text-sm mt-2 text-center">Join Blackridge Capital and start trading with enterprise-grade tools.</p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input type="text" className="w-full bg-background border border-panel-border rounded-lg pl-10 pr-3 py-3 text-sm focus:outline-none focus:border-primary" placeholder="First" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
              <input type="text" className="w-full bg-background border border-panel-border rounded-lg px-3 py-3 text-sm focus:outline-none focus:border-primary" placeholder="Last" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input type="email" className="w-full bg-background border border-panel-border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input type="password" className="w-full bg-background border border-panel-border rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary" placeholder="••••••••" />
            </div>
          </div>
          
          <div className="flex items-start gap-2 mt-4 text-xs text-gray-400">
            <ShieldCheck className="text-success flex-shrink-0 mt-0.5" size={16} />
            <p>By creating an account, you agree to our Terms of Service and Privacy Policy. Identity verification (KYC) will be required before trading.</p>
          </div>

          <button type="button" className="btn-primary w-full py-3 mt-2">Create Account</button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          Already have an account? <Link href="/login" className="text-primary hover:underline font-medium">Log in</Link>
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
