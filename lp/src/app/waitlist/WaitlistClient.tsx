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
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-4 pb-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60">
            <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
            <span className="font-normal text-[#1F1410]/30">›</span>
            <span className="text-espresso font-semibold">Waitlist</span>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 pt-0 md:pt-0">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-hidden relative group">
          {/* Desktop Image - Absolute to fill right column border to border */}
          <div className="absolute right-[2%] top-0 bottom-0 w-[43%] hidden lg:block z-0">
            <img
              src="/joinwaitlist.webp"
              alt="nella waitlist preview"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-12 pb-12 md:pt-16 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[400px]">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-center">
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">early reservation</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                Join the waitlist.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-espresso/80 max-w-[420px] font-sans leading-relaxed">
                nella is currently in closed beta. we launch on iOS in August 2026. reserve your spot below.
              </p>
              <div className="pt-4 flex justify-start">
                <a
                  href="#waitlist-form"
                  className="w-[180px] py-4 text-[#1F1410] rounded-full font-semibold text-[14px] transition-all cursor-pointer text-center flex justify-center items-center hover:opacity-90 shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                  }}
                >
                  Reserve your spot
                </a>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden w-full relative z-10">
              <img
                src="/joinwaitlist.webp"
                alt="nella waitlist preview"
                className="w-full h-auto max-h-[300px] object-cover object-center rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-left max-w-7xl mx-auto px-6 pt-12 md:pt-16 space-y-8 md:space-y-12">

        <div id="waitlist-form" className="max-w-xl mx-auto bg-white border border-[#E8E5DC] rounded-3xl p-8 shadow-2xs">
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
                  className="w-full px-5 py-3 rounded-full border border-[#D3D1C7]/70 text-[13px] placeholder-grey/50 bg-[#FAF7F2]/30 focus:outline-none focus:ring-1 focus:ring-[#8F6F3E]/40 focus:border-[#8F6F3E]/40 font-sans"
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
                  className="w-full px-5 py-3 rounded-full border border-[#D3D1C7]/70 text-[13px] placeholder-grey/50 bg-[#FAF7F2]/30 focus:outline-none focus:ring-1 focus:ring-[#8F6F3E]/40 focus:border-[#8F6F3E]/40 font-sans"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full relative overflow-hidden group py-3.5 rounded-full text-[#1F1410] text-[13px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm block cursor-pointer hover:opacity-90"
                  style={{
                    background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                  }}
                >
                  {loading ? (
                    <span>adding you...</span>
                  ) : (
                    <>
                      <span>reserve my spot</span>
                      <ArrowRight size={13} className="text-[#1F1410] transition-transform group-hover:translate-x-1" />
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
    </div>
  );
}
