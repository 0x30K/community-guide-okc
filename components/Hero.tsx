"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/resources?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/resources");
    }
  };

  return (
    <section className="relative h-[600px] flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          alt="Oklahoma City Skyline" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtum52IUGAJw7BOFBx7hdfu_XDTocgCTOa2dOoZxMB05-wL6j4QpkaPfRnniS3GtPe5ysf-DRsaGhxJVCHtUTLuEHuHRnR6DVHrPZsdtql-M-PJeqXW0-1rALOhmHSnrxk_43tIGB5Kg1qQ4qelGqGxs5InBZ3a-w5X8IU9esVvmAkem_6LGx7MhcF4Dq01Kx-mMbwZlj_zpZdC_GHhhQKSMniVdLhl1RPJt7ciJBMV04FbDLkUVu4V3F3gEfXvvJjJf8JoPQqQAw"
        />
      </div>
      
      <div className="relative z-20 text-center max-w-4xl w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-5xl md:text-8xl font-black mb-6 tracking-tight drop-shadow-lg leading-none"
        >
          FIND HELP IN <br className="hidden md:block" />
          <span className="text-white/90">OKLAHOMA CITY</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/90 text-xl md:text-2xl mb-12 font-medium max-w-2xl mx-auto"
        >
          Your direct connection to essential services, community resources, and immediate support systems.
        </motion.p>
        
        <motion.form 
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 max-w-3xl mx-auto border border-white/20 backdrop-blur-sm"
        >
          <div className="flex-1 flex items-center px-4 gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
            <span className="material-symbols-outlined text-slate-400">search</span>
            <input 
              className="bg-transparent border-none focus:ring-0 w-full h-14 text-slate-900 dark:text-white text-base placeholder:text-slate-400" 
              placeholder="Food, shelter, or any resource..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="md:w-64 flex items-center px-4 gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
            <span className="material-symbols-outlined text-slate-400">location_on</span>
            <input 
              className="bg-transparent border-none focus:ring-0 w-full h-14 text-slate-900 dark:text-white text-base" 
              type="text" 
              defaultValue="Oklahoma City, OK"
              readOnly
            />
          </div>
          <button 
            type="submit"
            className="bg-primary text-white px-10 py-4 rounded-xl font-black hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
          >
            <span>SEARCH</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
