"use client";

import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1F1410] border-t border-[#3A2418] py-16 text-[#FAF7F2] lowercase mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">

        {/* Left Column - Logo & Bio */}
        <div className="md:col-span-6 space-y-5 text-left">
          <Link href="/" className="flex items-center gap-1 select-none">
            <span className="font-display italic text-[24px] font-[600] tracking-tight text-[#FAF7F2] font-serif">nella</span>
          </Link>
          <p className="text-[12.5px] text-[#FAF7F2]/70 leading-relaxed max-w-sm font-sans">
            honest skincare tracking and offline skin journaling. crafted with total biometric privacy.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="p-2.5 rounded-full border border-[#3A2418] hover:border-[#8F6F3E] hover:bg-[#8F6F3E]/10 transition-all text-[#FAF7F2]">
              <Instagram size={14} className="stroke-[2.5]" />
            </a>
            <a href="#" className="p-2.5 rounded-full border border-[#3A2418] hover:border-[#8F6F3E] hover:bg-[#8F6F3E]/10 transition-all text-[#FAF7F2]">
              <Twitter size={14} className="stroke-[2.5]" />
            </a>
            <a href="#" className="p-2.5 rounded-full border border-[#3A2418] hover:border-[#8F6F3E] hover:bg-[#8F6F3E]/10 transition-all text-[#FAF7F2]">
              <Linkedin size={14} className="stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2 text-left space-y-4">
          <h5 className="font-sans text-[11px] font-[700] tracking-widest text-[#DEC68B] uppercase pr-2">product</h5>
          <ul className="text-[13px] text-[#FAF7F2]/80 space-y-2.5 font-sans">
            <li><Link href="/what-it-does/routines" className="hover:text-white transition-colors">skincare routines</Link></li>
            <li><Link href="/what-it-does/tracking" className="hover:text-white transition-colors">treatment tracking</Link></li>
            <li><Link href="/what-it-does/aftercare" className="hover:text-white transition-colors">clinician aftercare</Link></li>
            <li><Link href="/about/privacy-principles" className="hover:text-white transition-colors">biometric privacy</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-2 text-left space-y-4">
          <h5 className="font-sans text-[11px] font-[700] tracking-widest text-[#DEC68B] uppercase pr-2">company</h5>
          <ul className="text-[13px] text-[#FAF7F2]/80 space-y-2.5 font-sans">
            <li><Link href="/why-nella" className="hover:text-white transition-colors">manifesto logic</Link></li>
            <li><Link href="/made-for-her" className="hover:text-white transition-colors">who she's for</Link></li>
            <li><Link href="/intelligence" className="hover:text-white transition-colors">the intelligence</Link></li>
            <li><Link href="/stories" className="hover:text-white transition-colors">stories from the lab</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition-colors">transparent pricing</Link></li>
            <li><Link href="/waitlist" className="hover:text-white transition-colors">join the waitlist</Link></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div className="md:col-span-2 text-left space-y-4">
          <h5 className="font-sans text-[11px] font-[700] tracking-widest text-[#DEC68B] uppercase pr-2">legal notes</h5>
          <ul className="text-[13px] text-[#FAF7F2]/80 space-y-2.5 font-sans">
            <li><Link href="/terms" className="hover:text-white transition-colors">terms of use</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">privacy policy</Link></li>
          </ul>
        </div>

      </div>

      {/* Outer bottom label credits */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#3A2418] flex flex-col sm:flex-row justify-between items-center text-[12px] font-sans text-[#FAF7F2]/60 gap-4">
        <span className="sm:flex-1 text-center sm:text-left">&copy; {new Date().getFullYear()} mynella ltd. all rights reserved.</span>
        <span className="sm:flex-1 text-center hidden md:block">crafted in absolute compliance with our community guidelines.</span>
        <div className="sm:flex-1 text-center sm:text-right">
          <Link href="/cookie-settings" className="hover:text-white transition-colors">cookie settings</Link>
        </div>
      </div>
    </footer>
  );
}
