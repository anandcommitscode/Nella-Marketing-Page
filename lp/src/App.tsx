"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Send, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import HomeView from './components/pages/HomeView';
import WhyNellaView from './components/pages/WhyNellaView';
import MadeForHerView from './components/pages/MadeForHerView';
import WhatItDoesView from './components/pages/WhatItDoesView';
import PricingView from './components/pages/PricingView';
import PrivacyView from './components/pages/PrivacyView';
import WaitlistView from './components/pages/WaitlistView';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('home');

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Keep routing synced to location hash for easy direct linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && [
        'home', 'why-nella', 'made-for-her', 'track', 'refine', 'discover',
        'what-it-does', 'tracking', 'routines', 'aftercare', 'insights',
        'pricing', 'privacy-principles', 'waitlist'
      ].includes(hash)) {
        setCurrentPath(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderView = () => {
    switch (currentPath) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} />;
      case 'why-nella':
        return <WhyNellaView onNavigate={handleNavigate} />;
      
      // Made for her routes
      case 'made-for-her':
        return <MadeForHerView onNavigate={handleNavigate} />;
      case 'track':
        return <MadeForHerView onNavigate={handleNavigate} initialSubTab="track" />;
      case 'refine':
        return <MadeForHerView onNavigate={handleNavigate} initialSubTab="refine" />;
      case 'discover':
        return <MadeForHerView onNavigate={handleNavigate} initialSubTab="discover" />;

      // What it does routes
      case 'what-it-does':
        return <WhatItDoesView onNavigate={handleNavigate} />;
      case 'tracking':
        return <WhatItDoesView onNavigate={handleNavigate} initialSubTab="tracking" />;
      case 'routines':
        return <WhatItDoesView onNavigate={handleNavigate} initialSubTab="routines" />;
      case 'aftercare':
        return <WhatItDoesView onNavigate={handleNavigate} initialSubTab="aftercare" />;
      case 'insights':
        return <WhatItDoesView onNavigate={handleNavigate} initialSubTab="insights" />;

      // Pricing, Privacy and Waitlist
      case 'pricing':
        return <PricingView onNavigate={handleNavigate} />;
      case 'privacy-principles':
        return <PrivacyView onNavigate={handleNavigate} />;
      case 'waitlist':
        return <WaitlistView onNavigate={handleNavigate} />;
      default:
        return <HomeView onNavigate={handleNavigate} />;
    }
  };

  // Convert current path back to nice capitalized header labels or just standard
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-espresso selection:bg-light-gold selection:text-espresso overflow-x-hidden font-sans flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Outer view container with page enter/exit transition animations */}
        <div className="pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPath}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#FAF7F2] border-t border-[#E8E5DC] py-12 text-[#2C1810] lowercase mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4 text-left">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} className="flex items-center gap-1 select-none">
              <span className="font-display italic text-[24px] font-[600] tracking-tight text-espresso font-serif">nella</span>
              <span className="w-1.5 h-1.5 rounded-full bg-deep-rose inline-block"></span>
            </a>
            <p className="text-[12px] text-grey leading-relaxed max-w-xs font-sans">
              honest skincare tracking and offline skin journaling. crafted with total biometric privacy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full border border-light-grey hover:border-espresso transition-colors text-espresso">
                <Instagram size={14} className="stroke-[2.5]" />
              </a>
              <a href="#" className="p-2 rounded-full border border-light-grey hover:border-espresso transition-colors text-espresso">
                <Send size={14} className="stroke-[2.5]" />
              </a>
              <a href="#" className="p-2 rounded-full border border-light-grey hover:border-espresso transition-colors text-espresso">
                <MessageCircle size={14} className="stroke-[2.5]" />
              </a>
            </div>
          </div>

          <div className="text-left space-y-3">
            <h5 className="font-sans text-[11px] font-[700] tracking-widest text-deep-gold uppercase pr-2">product</h5>
            <ul className="text-[12.5px] text-grey/90 space-y-2 font-sans">
              <li><a href="#routines" onClick={(e) => { e.preventDefault(); handleNavigate('routines'); }} className="hover:text-espresso transition-colors">skincare routines</a></li>
              <li><a href="#tracking" onClick={(e) => { e.preventDefault(); handleNavigate('tracking'); }} className="hover:text-espresso transition-colors">treatment tracking</a></li>
              <li><a href="#aftercare" onClick={(e) => { e.preventDefault(); handleNavigate('aftercare'); }} className="hover:text-espresso transition-colors">clinician aftercare</a></li>
              <li><a href="#privacy-principles" onClick={(e) => { e.preventDefault(); handleNavigate('privacy-principles'); }} className="hover:text-espresso transition-colors">biometric privacy</a></li>
            </ul>
          </div>

          <div className="text-left space-y-3">
            <h5 className="font-sans text-[11px] font-[700] tracking-widest text-deep-gold uppercase pr-2">company</h5>
            <ul className="text-[12.5px] text-grey/90 space-y-2 font-sans">
              <li><a href="#why-nella" onClick={(e) => { e.preventDefault(); handleNavigate('why-nella'); }} className="hover:text-espresso transition-colors">manifesto logic</a></li>
              <li><a href="#made-for-her" onClick={(e) => { e.preventDefault(); handleNavigate('made-for-her'); }} className="hover:text-espresso transition-colors">who she's for</a></li>
              <li><a href="#pricing" onClick={(e) => { e.preventDefault(); handleNavigate('pricing'); }} className="hover:text-espresso transition-colors">transparent pricing</a></li>
              <li><a href="#waitlist" onClick={(e) => { e.preventDefault(); handleNavigate('waitlist'); }} className="hover:text-espresso transition-colors">join the waitlist</a></li>
            </ul>
          </div>

          <div className="text-left space-y-3">
            <h5 className="font-sans text-[11px] font-[700] tracking-widest text-deep-gold uppercase pr-2">legal notes</h5>
            <p className="text-[11px] text-grey leading-relaxed font-sans normal-case">
              Medical Disclaimer: nella is for educational and recording purposes only, not a diagnostic platform. Run active chemicals safely under medical supervision.
            </p>
            <div className="flex gap-4 text-[11px] font-semibold text-espresso pt-1 font-sans">
              <a href="#privacy" onClick={(e) => { e.preventDefault(); handleNavigate('privacy-principles'); }} className="hover:underline">terms of use</a>
              <a href="#privacy" onClick={(e) => { e.preventDefault(); handleNavigate('privacy-principles'); }} className="hover:underline">privacy policy</a>
            </div>
          </div>

        </div>

        {/* Outer bottom label credits */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-very-light-grey flex flex-col sm:flex-row justify-between items-center text-[11px] font-sans text-grey/85 gap-4">
          <span>&copy; {new Date().getFullYear()} nella digital skin lab. all rights reserved.</span>
          <span>crafted in absolute compliance with our community guidelines.</span>
        </div>
      </footer>
    </div>
  );
}
