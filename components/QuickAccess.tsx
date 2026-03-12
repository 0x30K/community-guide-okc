"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  {
    title: "Free Community Meals",
    desc: "Updated daily schedules",
    icon: "volunteer_activism",
    primary: true,
    href: "/resources?category=food",
  },
  {
    title: "Emergency Shelter Beds",
    desc: "Real-time availability",
    icon: "bed",
    primary: false,
    href: "/resources?category=shelter",
  },
  {
    title: "Crisis & Mental Health",
    desc: "Support groups & hotlines",
    icon: "healing",
    primary: false,
    href: "/resources?category=crisis",
  },
];

export default function QuickAccess() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/40 py-24 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-black mb-12 text-center uppercase tracking-[0.3em] text-slate-400">Quick Access Hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-6 p-10 rounded-3xl transition-all hover:shadow-2xl hover:translate-y-[-4px] group text-left w-full ${
                  item.primary
                    ? "bg-primary text-white shadow-xl shadow-primary/20"
                    : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                }`}
              >
                <div className={`p-4 rounded-2xl ${
                  item.primary ? "bg-white/10" : "bg-primary/5 text-primary"
                }`}>
                  <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                </div>
                <div>
                  <span className="block font-black text-2xl mb-1 tracking-tight">{item.title}</span>
                  <span className={item.primary ? "text-white/70 text-sm font-medium" : "text-slate-500 dark:text-slate-400 text-sm font-medium"}>
                    {item.desc}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
