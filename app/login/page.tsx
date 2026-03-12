"use client";

import { useState } from "react";
import Link from "next/link";
import { login } from "../auth/actions";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const result = await login(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50 dark:bg-background-dark min-h-screen flex items-center justify-center px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md"
        >
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 p-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">login</span>
              </div>
              <h1 className="text-3xl font-black tracking-tight mb-2">Welcome Back</h1>
              <p className="text-slate-500 dark:text-slate-400">Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-xl text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-400">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                  <input 
                    name="email"
                    type="email" 
                    required 
                    placeholder="you@example.com"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl h-14 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-black uppercase tracking-wider text-slate-400">Password</label>
                  <Link href="#" className="text-xs font-bold text-primary hover:underline">Forgot password?</Link>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                  <input 
                    name="password"
                    type="password" 
                    required 
                    placeholder="••••••••"
                    className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl h-14 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary text-white h-14 rounded-xl font-black tracking-tight hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                ) : (
                  <>
                    <span>SIGN IN</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-10 pt-10 border-t border-slate-50 dark:border-slate-800 text-center">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Don't have an account?{" "}
                <Link href="/register" className="text-primary font-black hover:underline uppercase tracking-tighter">Sign up now</Link>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
