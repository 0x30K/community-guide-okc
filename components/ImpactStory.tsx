"use client";

import { motion } from "framer-motion";

export default function ImpactStory() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <div className="bg-primary rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

        <div className="flex-1 p-12 lg:p-24 flex flex-col justify-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/60 font-black uppercase tracking-[0.4em] mb-6 text-sm"
          >
            Impact Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter"
          >
            Join the <br />movement.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-xl mb-12 max-w-xl leading-relaxed italic border-l-4 border-white/20 pl-8"
          >
            "Volunteering through CCSR gave me a chance to give back to the city I love. Seeing the relief on someone&apos;s face when they find the help they need is priceless."
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="bg-white text-primary font-black py-5 px-10 rounded-2xl hover:bg-slate-50 transition-all hover:scale-105 shadow-xl">
              Become a Volunteer
            </button>
            <button className="bg-primary/20 border-2 border-white/30 text-white font-black py-5 px-10 rounded-2xl hover:bg-primary/40 transition-all">
              Read Success Stories
            </button>
          </motion.div>
        </div>
        <div className="flex-1 h-[400px] md:h-auto overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0.8 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            alt="Volunteer smiling" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU3SavFEUAI0G9gVr01dvQceWPsmr4dMfDjiCEqlel4NfwvYhcvgxD4_8ET3eIlC34d7Q7jBSryttRqQyZc2Ps4sJpMS6wSpHdfCzjQ5QUaa-6L3iRXGhD83vIe32NG4GYhAdB-yG8DiCz27X7lh6-LWonMH1YuoYDAXwLexAWhro4Z2AdoARqRiWT2XHVb4YY2WNkNBF4JoTE-PDD3r3NTA4u-JdQKDLJr19KvWuEI-vIrqW0SZ4AlPhBKzKb72h69EIavfa6kMs"
          />
        </div>
      </div>
    </section>
  );
}
