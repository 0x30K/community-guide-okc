"use client";

import { Suspense, useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories, resources, searchResources, getResourcesByCategory } from "@/lib/data";

function ResourcesContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Read URL params on mount
  useEffect(() => {
    const q = searchParams.get("q");
    const cat = searchParams.get("category");
    if (q) setSearchQuery(q);
    if (cat && categories.some((c) => c.slug === cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filteredResources = useMemo(() => {
    let results = activeCategory === "all"
      ? resources
      : getResourcesByCategory(activeCategory);

    if (searchQuery.trim()) {
      const searched = searchResources(searchQuery);
      if (activeCategory !== "all") {
        results = searched.filter((r) => r.category_id === activeCategory);
      } else {
        results = searched;
      }
    }

    return results;
  }, [searchQuery, activeCategory]);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50 dark:bg-background-dark min-h-screen">
        {/* Header */}
        <section className="bg-primary py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-4xl md:text-6xl font-black tracking-tight mb-4"
            >
              Resource Directory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mb-8"
            >
              Browse {resources.length} verified community resources across Oklahoma City
            </motion.p>

            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2 max-w-2xl"
            >
              <div className="flex-1 flex items-center px-4 gap-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <span className="material-symbols-outlined text-slate-400">search</span>
                <input
                  className="bg-transparent border-none focus:ring-0 w-full h-14 text-slate-900 dark:text-white text-base placeholder:text-slate-400"
                  placeholder="Search by name, category, or service..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">close</span>
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-[73px] z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 overflow-x-auto no-scrollbar">
            <div className="flex gap-3 min-w-max">
              <button
                onClick={() => setActiveCategory("all")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === "all"
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                <span className="material-symbols-outlined text-lg">grid_view</span>
                All ({resources.length})
              </button>
              {categories.map((cat) => {
                const count = getResourcesByCategory(cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                      activeCategory === cat.id
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{cat.icon}</span>
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          {/* Result count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              {filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"} found
              {searchQuery && <span> for &ldquo;{searchQuery}&rdquo;</span>}
              {activeCategory !== "all" && (
                <span> in {categories.find((c) => c.id === activeCategory)?.name}</span>
              )}
            </p>
          </div>

          {filteredResources.length === 0 ? (
            <div className="text-center py-24">
              <span className="material-symbols-outlined text-7xl text-slate-300 dark:text-slate-600 mb-4 block">search_off</span>
              <h3 className="text-2xl font-black text-slate-400 dark:text-slate-500 mb-2">No resources found</h3>
              <p className="text-slate-400 dark:text-slate-500">Try adjusting your search or category filter</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
                >
                  <Link
                    href={`/resources/${resource.id}`}
                    className="group block bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 h-full"
                  >
                    {/* Image or gradient placeholder */}
                    <div className="h-44 overflow-hidden relative text-white">
                      {resource.image_url ? (
                        <img
                          alt={resource.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          src={resource.image_url}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
                          <span className="material-symbols-outlined text-6xl text-primary/30">
                            {categories.find((c) => c.id === resource.category_id)?.icon || "place"}
                          </span>
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/95 dark:bg-slate-800/95 text-primary px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm">
                          {resource.category_name}
                        </span>
                      </div>

                      {/* Save Button (Guest users will be prompted) */}
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          // In the future, this will check auth
                          window.location.href = '/login?message=Sign in to save resources';
                        }}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/20 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all group/save"
                      >
                        <span className="material-symbols-outlined text-[18px] text-white">bookmark</span>
                      </button>
                    </div>

                    <div className="p-6">
                      <h3 className="font-black text-lg mb-2 group-hover:text-primary transition-colors leading-snug">
                        {resource.name}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                        {resource.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-primary/5 text-primary text-[11px] font-bold px-2.5 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Address & Phone */}
                      <div className="pt-4 border-t border-slate-50 dark:border-slate-800 space-y-2">
                        <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-primary">location_on</span>
                          <span className="truncate">{resource.address}</span>
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2">
                          <span className="material-symbols-outlined text-base text-primary">phone</span>
                          {resource.phone}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function ResourcesPage() {
  return (
    <Suspense fallback={
      <>
        <Navbar />
        <main className="flex-1 bg-slate-50 dark:bg-background-dark min-h-screen flex items-center justify-center">
          <div className="text-center">
            <span className="material-symbols-outlined text-5xl text-primary animate-spin block mb-4">progress_activity</span>
            <p className="text-slate-500 font-medium">Loading resources...</p>
          </div>
        </main>
        <Footer />
      </>
    }>
      <ResourcesContent />
    </Suspense>
  );
}
