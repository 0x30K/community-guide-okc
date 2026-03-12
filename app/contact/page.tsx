"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/lib/data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white dark:bg-background-dark min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary pt-24 pb-32 px-6 relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6"
            >
              Partner With Us
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]"
            >
              Get Your Organization <br />On the <span className="text-white/80 italic">Map</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Join a unified directory of hope and support. Whether you operate a church food pantry, a local non-profit, or a community program, we're here to help people find you.
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-7xl mx-auto px-6 -mt-16 pb-24 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left: The Form */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-slate-100 dark:border-slate-800 p-8 md:p-12"
                  >
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Org Name */}
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">Organization Name</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="e.g. First Pentecostal Church"
                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl h-14 px-5 focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                        {/* Category */}
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">Primary Focus/Category</label>
                          <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl h-14 px-5 focus:ring-2 focus:ring-primary/20 transition-all appearance-none">
                            {categories.map(c => (
                              <option key={c.id} value={c.id}>{c.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">Tell us about your organization</label>
                        <textarea 
                          required 
                          placeholder="What services do you provide? Who is your target audience?"
                          className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-5 min-h-[140px] focus:ring-2 focus:ring-primary/20 transition-all"
                        ></textarea>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Name */}
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">Primary Contact Person</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Full Name"
                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl h-14 px-5 focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                        {/* Email */}
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">Contact Email</label>
                          <input 
                            required 
                            type="email" 
                            placeholder="email@example.com"
                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl h-14 px-5 focus:ring-2 focus:ring-primary/20 transition-all"
                          />
                        </div>
                      </div>

                      <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                          <span className="font-black text-primary uppercase text-[10px] tracking-widest block mb-2">Note</span>
                          By submitting this form, you are requesting to be listed in the CCSR OKC Community Guide. Our team will verify the information before it goes live.
                        </p>
                      </div>

                      <button 
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white h-16 rounded-2xl font-black text-lg tracking-tight hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50"
                      >
                        {loading ? (
                          <span className="material-symbols-outlined animate-spin">progress_activity</span>
                        ) : (
                          <>
                            <span>SUBMIT REQUEST</span>
                            <span className="material-symbols-outlined">send</span>
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 p-12 text-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8">
                      <span className="material-symbols-outlined text-5xl font-black">check_circle</span>
                    </div>
                    <h2 className="text-3xl font-black mb-4">Request Received!</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-sm mx-auto mb-10 leading-relaxed">
                      Thank you for your interest in joining the guide. Our team will review your application and reach out to you within 2-3 business days.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-black uppercase tracking-widest text-sm hover:underline"
                    >
                      Submit Another Organization
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: Why List? */}
            <div className="lg:col-span-2 space-y-10 pt-32 order-1 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-primary">Why Join?</h3>
                <h2 className="text-3xl font-black tracking-tight leading-tight">Strengthening OKC through connection.</h2>
              </div>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">diversity_3</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 uppercase tracking-tight">Expand Your Reach</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">We help thousands of neighbors find resources every month. Being listed ensures you're visible when it matters most.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">verified</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 uppercase tracking-tight">Verified Credibility</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Our vetted guide builds trust. People come here because they know the links and phone numbers work.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">bolt</span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-1 uppercase tracking-tight">100% Free</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">This is a community service funded by local support. There are never any fees to be listed or accessed.</p>
                  </div>
                </div>
              </div>

              {/* Steps Card */}
              <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-black text-sm uppercase tracking-widest mb-6">How it works</h4>
                <div className="space-y-6">
                  {[
                    { step: "01", text: "Submit your basic info through the form" },
                    { step: "02", text: "Our team reviews your services for verification" },
                    { step: "03", text: "Your listing goes live in the public directory" }
                  ].map((s) => (
                    <div key={s.step} className="flex items-center gap-4">
                      <span className="text-2xl font-black text-primary/30 leading-none">{s.step}</span>
                      <p className="font-bold text-slate-600 dark:text-slate-300">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
