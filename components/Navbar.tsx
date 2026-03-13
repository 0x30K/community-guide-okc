"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/ccsr-logo-circle.png" alt="CCSR Logo" className="h-10 w-10 rounded-full object-cover transition-transform group-hover:scale-110" />
            <h2 className="text-primary dark:text-slate-100 text-xl font-black leading-tight tracking-tight">Community Guide</h2>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/resources" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-semibold transition-colors">
            Resources
          </Link>
          <Link href="/impact" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-semibold transition-colors">
            Impact
          </Link>
          <Link href="/about" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white text-sm font-semibold transition-colors">
            About
          </Link>
        </nav>

        <div className="flex gap-3 items-center">
          {user ? (
            <Link 
              href="/profile" 
              className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-xl border border-slate-100 dark:border-slate-700 hover:bg-slate-100 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-sm font-bold">person</span>
              </div>
              <span className="text-sm font-black hidden sm:inline-block truncate max-w-[120px]">
                {user.user_metadata.full_name?.split(' ')[0] || 'Profile'}
              </span>
            </Link>
          ) : (
            <>
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="hidden sm:flex items-center justify-center rounded-lg h-10 px-5 text-slate-700 dark:text-slate-200 text-sm font-bold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-sans"
              >
                Sign In
              </button>
            <Link 
                href="/contact"
                className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all font-sans"
              >
                Get Listed
              </Link>
            </>
          )}
        </div>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </header>
  );
}
