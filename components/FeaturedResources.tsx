"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { resources, categories } from "@/lib/data";

// Pick one resource from each of a few key categories for the feature grid
const featured = [
  resources.find((r) => r.id === "city-rescue-mission")!,
  resources.find((r) => r.id === "homeless-alliance")!,
  resources.find((r) => r.id === "regional-food-bank")!,
  resources.find((r) => r.id === "st-vincent-de-paul")!,
];

export default function FeaturedResources() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-4xl font-black tracking-tight mb-2 uppercase">Featured Resources</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Providing essential services to our community</p>
        </div>
        <Link
          href="/resources"
          className="text-primary font-black hover:underline flex items-center gap-2 group underline-offset-4"
        >
          VIEW ALL DIRECTORY <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((res, index) => (
          <motion.div
            key={res.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={`/resources/${res.id}`}
              className="group block bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-300"
            >
              <div className="h-56 overflow-hidden relative">
                {res.image_url ? (
                  <img
                    alt={res.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    src={res.image_url}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-primary/30">
                      {categories.find((c) => c.id === res.category_id)?.icon || "place"}
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 dark:bg-slate-800/95 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {res.tags[0]}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-black text-xl mb-1 group-hover:text-primary transition-colors">{res.name}</h3>
                <p className="text-primary/70 text-xs font-bold uppercase tracking-wider mb-4">{res.category_name}</p>
                <div className="pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-primary">location_on</span>
                    <span className="truncate">{res.address.split(",")[0]}</span>
                  </p>
                  <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
