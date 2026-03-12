"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getResourceById, getResourcesByCategory, categories } from "@/lib/data";
import { notFound } from "next/navigation";

export default function ResourceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const resource = getResourceById(id);

  if (!resource) {
    notFound();
  }

  const category = categories.find((c) => c.id === resource.category_id);
  const related = getResourcesByCategory(resource.category_id)
    .filter((r) => r.id !== resource.id)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50 dark:bg-background-dark min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6">
          <div className="max-w-7xl mx-auto py-4 flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-400 hover:text-primary transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/resources" className="text-slate-400 hover:text-primary transition-colors">Resources</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600 dark:text-slate-300 font-semibold truncate">{resource.name}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="h-72 md:h-96 relative overflow-hidden">
          {resource.image_url ? (
            <img
              alt={resource.name}
              className="w-full h-full object-cover"
              src={resource.image_url}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-[120px] text-primary/20">
                {category?.icon || "place"}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
            <div className="max-w-7xl mx-auto">
              <span className="bg-primary text-white px-4 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest mb-4 inline-block">
                {resource.category_name}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                {resource.name}
              </h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {resource.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 mb-8">
                <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">info</span>
                  About This Resource
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  {resource.description}
                </p>
              </div>

              {/* Hours */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  Hours of Operation
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  {resource.hours}
                </p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Contact Card */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800 mb-6 sticky top-[140px]">
                <h3 className="text-lg font-black mb-6">Contact Information</h3>

                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Address</p>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">{resource.address}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">phone</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Phone</p>
                      <a href={`tel:${resource.phone}`} className="text-primary font-bold hover:underline">
                        {resource.phone}
                      </a>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">language</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Website</p>
                      <a
                        href={resource.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-bold hover:underline break-all"
                      >
                        Visit Website →
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <a
                    href={`tel:${resource.phone}`}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-black hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                  >
                    <span className="material-symbols-outlined">call</span>
                    Call Now
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resource.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white py-4 rounded-xl font-black hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                  >
                    <span className="material-symbols-outlined">directions</span>
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related Resources */}
          {related.length > 0 && (
            <section className="mt-20">
              <h2 className="text-3xl font-black tracking-tight mb-8">
                More in {resource.category_name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/resources/${rel.id}`}
                    className="group block bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300"
                  >
                    <div className="h-36 overflow-hidden relative">
                      {rel.image_url ? (
                        <img alt={rel.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={rel.image_url} />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 flex items-center justify-center">
                          <span className="material-symbols-outlined text-5xl text-primary/30">{category?.icon || "place"}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-black text-lg mb-1 group-hover:text-primary transition-colors">{rel.name}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {rel.address}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
