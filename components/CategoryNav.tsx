"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";

const allCategories = [
  { id: "all", name: "All", icon: "grid_view", slug: "" },
  ...categories,
];

export default function CategoryNav() {
  return (
    <section className="bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto flex justify-between px-6 py-6 min-w-[900px]">
        {allCategories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              href={cat.id === "all" ? "/resources" : `/resources?category=${cat.slug}`}
              className={`flex flex-col items-center gap-3 group transition-all ${
                index === 0 ? "text-primary" : "text-slate-500 dark:text-slate-400"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all shadow-sm ${
                index === 0
                  ? "bg-primary text-white"
                  : "bg-slate-50 dark:bg-slate-800 group-hover:bg-primary group-hover:text-white"
              }`}>
                <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">{cat.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
