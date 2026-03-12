"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SupportPage() {
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
        {/* Support Hero */}
        <section className="bg-slate-900 pt-24 pb-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#308230_1px,transparent_1px)] [background-size:32px_32px]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-primary/20 backdrop-blur-md text-primary-light text-xs font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6"
            >
              Help Desk
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]"
            >
              How can we <br /><span className="text-primary italic">support</span> you?
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
            >
              Need technical help, interested in sponsorship, or spotted an error? Our team is dedicated to keeping this guide running smoothly for everyone.
            </motion.p>
          </div>
        </section>

        {/* Support Content Section */}
        <section className="max-w-7xl mx-auto px-6 -mt-16 pb-24 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div 
                    key="support-form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 p-8 md:p-12"
                  >
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name */}
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">Your Name</label>
                          <input 
                            required 
                            type="text" 
                            placeholder="Full Name"
                            className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl h-14 px-5 focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                          />
                        </div>
                        {/* Support Category */}
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">Inquiry Type</label>
                          <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl h-14 px-5 focus:ring-2 focus:ring-primary/20 transition-all appearance-none font-medium">
                            <option value="technical">Technical Issue / Bug</option>
                            <option value="advertising">Advertising & Sponsorship</option>
                            <option value="editing">Resource Data Correction</option>
                            <option value="partnership">Community Partnership</option>
                            <option value="other">General Question</option>
                          </select>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">Email Address</label>
                        <input 
                          required 
                          type="email" 
                          placeholder="email@example.com"
                          className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl h-14 px-5 focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">How can we help?</label>
                        <textarea 
                          required 
                          placeholder="Please provide as much detail as possible..."
                          className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-5 min-h-[180px] focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                        ></textarea>
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
                            <span>SEND MESSAGE</span>
                            <span className="material-symbols-outlined">send</span>
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="support-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 p-12 text-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8">
                      <span className="material-symbols-outlined text-5xl font-black">mark_email_read</span>
                    </div>
                    <h2 className="text-3xl font-black mb-4">Support Ticket Sent!</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-medium max-w-sm mx-auto mb-10 leading-relaxed">
                      We've received your request. Our technical team usually responds within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-primary font-black uppercase tracking-widest text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-2 space-y-10 pt-24 order-1 lg:order-2">
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-widest text-primary">Contact Info</h3>
                <h2 className="text-3xl font-black tracking-tight leading-tight">Direct Support Channels</h2>
              </div>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">alternate_email</span>
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-widest mb-1">Direct Email</h4>
                    <p className="text-primary font-bold text-lg">it@ccsr-ok.org</p>
                    <p className="text-slate-500 text-sm mt-1">For critical technical failures and security reports.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">campaign</span>
                  </div>
                  <div>
                    <h4 className="font-black text-sm uppercase tracking-widest mb-1">Advertising</h4>
                    <p className="text-slate-900 dark:text-white font-bold text-lg">admissions@ccsr-ok.org</p>
                    <p className="text-slate-500 text-sm mt-1">Partner with us to featured your community projects.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
                <h4 className="font-black text-sm uppercase tracking-widest mb-4">Quick FAQ</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-sm mb-1">How long does listing review take?</p>
                    <p className="text-slate-500 text-sm">Typically 2-3 business days for our vetting team to verify information.</p>
                  </div>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="font-bold text-sm mb-1">Is there a cost for advertising?</p>
                    <p className="text-slate-500 text-sm">Banner placement and featured listings are available for a small donation to the guide.</p>
                  </div>
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
