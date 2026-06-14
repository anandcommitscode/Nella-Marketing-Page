"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function WaitlistClient() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [hasJoined, setHasJoined] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setHasJoined(true);
      localStorage.setItem('nella_waitlist_email', email);
    }, 850);
  };

  return (
    <div className="text-left max-w-xl mx-auto px-6 pt-8 md:pt-16 space-y-8 md:space-y-12">
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center gap-1.5 justify-center">
          <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          <span className="font-display italic text-[13px] text-[#8F6F3E]">early reservation</span>
          <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
        </div>

        <h1 className="font-display font-[600] text-[36px] tracking-tight text-espresso leading-none">
          Join the waitlist.
        </h1>

        <p className="text-[14px] text-grey font-sans max-w-md mx-auto leading-relaxed">
          nella launches in August 2026. reserve your slot today to unlock founding member benefits and early beta access.
        </p>
      </div>

      <div className="bg-white border border-[#E8E5DC] rounded-3xl p-8 shadow-2xs">
        {!hasJoined ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="name-input" className="text-[12px] font-semibold text-espresso block font-sans">
                FIRST NAME
              </label>
              <input
                id="name-input"
                type="text"
                placeholder="your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#D3D1C7]/70 text-[13px] placeholder-grey/50 bg-[#FAF7F2]/30 focus:outline-none focus:ring-1 focus:ring-[#8F6F3E]/40 focus:border-[#8F6F3E]/40 font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email-input" className="text-[12px] font-semibold text-espresso block font-sans">
                EMAIL ADDRESS
              </label>
              <input
                id="email-input"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#D3D1C7]/70 text-[13px] placeholder-grey/50 bg-[#FAF7F2]/30 focus:outline-none focus:ring-1 focus:ring-[#8F6F3E]/40 focus:border-[#8F6F3E]/40 font-sans"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full relative overflow-hidden group py-3.5 rounded-xl text-[#FAF7F2] text-[13px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm uppercase tracking-wider block cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #3A2418 0%, #2C1810 50%, #1F1410 100%)'
                }}
              >
                {loading ? (
                  <span>adding you...</span>
                ) : (
                  <>
                    <span>reserve my spot</span>
                    <ArrowRight size={13} className="text-[#FAF7F2] transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-grey text-center font-sans mt-2">
              we will only email you about nella development and alpha release details. no spam.
            </p>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-4 py-4"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="font-sans font-[600] text-[20px] text-espresso">
              You&rsquo;re on the list!
            </h3>
            <p className="text-[12.5px] text-grey font-sans max-w-sm mx-auto leading-relaxed">
              thanks for joining, <span className="text-espresso font-medium">{fullName || 'friend'}</span>. we have reserved your early spot with email <span className="text-espresso font-medium">{email}</span>. you are #2,482 in line. we will be in touch!
            </p>
            <div className="pt-4">
              <Link
                href="/"
                className="text-[12px] font-semibold text-[#8F6F3E] hover:underline cursor-pointer"
              >
                return to the home page
              </Link>
            </div>
          </motion.div>
        )}
      </div>

      <div className="text-center">
        <Link
          href="/about/privacy-principles"
          className="text-[11.5px] text-grey hover:text-espresso font-sans underline cursor-pointer"
        >
          how we keep your information private
        </Link>
      </div>
    </div>
  );
}
