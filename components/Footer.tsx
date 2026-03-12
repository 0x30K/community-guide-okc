"use client";

import Link from "next/link";

export default function Footer() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "CCSR OKC | Community Resource Guide",
          text: "Find essential services and community resources in Oklahoma City.",
          url: window.location.origin,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.origin);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/ccsr-logo-circle.png" alt="CCSR Logo" className="h-10 w-10 rounded-full object-cover" />
              <h2 className="text-primary dark:text-slate-100 text-xl font-black leading-tight tracking-tight">Community Guide</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              The CCSR Community Guide is funded and maintained by Concerned Clergy for Spiritual Renewal Oklahoma.
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Resource Directory</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
              <li><Link href="/volunteer" className="hover:text-primary transition-colors">Volunteer Portal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><Link href="/support" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link href="/faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://ccsrok.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600 dark:text-slate-400"
                title="Visit ccsrok.org"
              >
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a 
                href="mailto:info@ccsrok.org" 
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600 dark:text-slate-400"
                title="Email Us"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <button 
                onClick={handleShare}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600 dark:text-slate-400 cursor-pointer"
                title="Share this site"
              >
                <span className="material-symbols-outlined text-lg">share</span>
              </button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Sign up for resource updates</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs">© {new Date().getFullYear()} Community Resource Guide OKC. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-slate-400">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-primary">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
