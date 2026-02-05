"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, Loader2, ShieldCheck, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials. Access denied.");
      } else {
        router.push("/admin");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-accent relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-highlight/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 relative z-10"
      >
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden relative group">
          {/* Subtle Glow */}
          <div className="absolute -top-24 -right-24 size-48 bg-primary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <div className="text-center space-y-4 mb-10">
            <div className="inline-flex items-center justify-center size-16 rounded-2xl bg-primary shadow-xl shadow-primary/20 mb-4">
              <ShieldCheck className="size-8 text-white" />
            </div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter italic">
              Quantum <span className="text-primary italic">Secure.</span>
            </h1>
            <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em]">
              Administrative Authorization Portal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-1">
                Corporate Identification
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/30" />
                <Input
                  type="email"
                  placeholder="admin?example@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 pl-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:bg-white/10 focus:ring-primary/50 transition-all border-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-1">
                Security Protocol
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/30" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-14 pl-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:bg-white/10 focus:ring-primary/50 transition-all border-2"
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3"
              >
                <AlertCircle className="size-4 text-red-500 shrink-0" />
                <p className="text-xs font-bold text-red-400">{error}</p>
              </motion.div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-16 rounded-xl bg-primary hover:bg-white hover:text-primary text-white font-black uppercase tracking-widest text-xs transition-all duration-500 shadow-xl shadow-primary/20"
            >
              {loading ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                "Initialize Session"
              )}
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-[9px] font-bold text-white/20 uppercase tracking-widest">
              Secured by Doha Popular Integrated Infrastructure
            </p>
          </div>
        </div>

        {/* Floating Credit */}
        <p className="text-center mt-8 text-[10px] font-bold text-white/30 uppercase tracking-[0.3em]">
          Doha Popular Management System v1.0
        </p>
      </motion.div>
    </div>
  );
}
