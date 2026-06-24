"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, Bell, Check, Calendar, ClipboardList, Sparkles,
  Timer, ArrowRight, User, Heart, ChevronRight,
  Plus, Play, Info, Search, Shield, X, HelpCircle, ArrowLeft, ShieldAlert
} from 'lucide-react';

export interface SurgicalMobileMockupProps {
  initialScreen?: 'today' | 'routines' | 'journal' | 'splash' | 'shelf' | 'insights' | 'history' | 'checkin' | 'conflicts' | 'why-nella' | 'what-it-does';
  compact?: boolean;
  autoPlay?: boolean;
  customImage?: string;
  imageClassName?: string;
  lockedTab?: boolean;
  interactive?: boolean;
}

export default function SurgicalMobileMockup({
  initialScreen = 'splash',
  compact = false,
  autoPlay = false,
  customImage,
  imageClassName = "",
  lockedTab = false,
  interactive = false
}: SurgicalMobileMockupProps) {
  // Navigation & Onboarding state
  const [onboardingStep, setOnboardingStep] = useState<
    'splash' | 'login' | 'name-era' | 'goals' | 'treatments' | 'recency' | 'hair' | 'shelf-setup' | 'welcome' | 'dashboard'
  >(() => {
    if (initialScreen && initialScreen !== 'splash') {
      return 'dashboard';
    }
    return 'splash';
  });

  const [activeTab, setActiveTab] = useState<'today' | 'shelf' | 'routine' | 'you'>(() => {
    if (initialScreen === 'routines' || initialScreen === 'conflicts' || initialScreen === 'why-nella') return 'routine';
    if (initialScreen === 'shelf') return 'shelf';
    return 'today';
  });
  const [showInsights, setShowInsights] = useState(() => initialScreen === 'insights');
  const [showHistory, setShowHistory] = useState(() => initialScreen === 'history' || initialScreen === 'what-it-does');
  const [showGlowScore, setShowGlowScore] = useState(() => {
    return initialScreen === 'journal';
  });
  const [showCheckIn, setShowCheckIn] = useState(() => initialScreen === 'checkin');
  const [glowScoreTab, setGlowScoreTab] = useState<'score' | 'weekly' | 'monthly'>('score');
  const [scoreShared, setScoreShared] = useState(false);
  const [showNotifModal, setShowNotifModal] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Form selections state
  const [userName, setUserName] = useState('Nella');
  const [selectedEra, setSelectedEra] = useState('Fully in my era');
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(['Fine lines', 'Redness & sensitivity']);
  const [selectedTreatments, setSelectedTreatments] = useState<string[]>(['Classic facial', 'Lymphatic drainage massage']);
  const [lastHadRecency, setLastHadRecency] = useState<Record<string, string>>({
    'Classic facial': 'last mo',
    'Lymphatic drainage massage': 'last mo'
  });
  const [selectedHair, setSelectedHair] = useState('Straight & sleek');

  // Product shelf management
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState<'All' | 'Moisturisers' | 'Cleansers' | 'Exfoliants'>('All');
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [configuringProduct, setConfiguringProduct] = useState<any | null>(null);

  const [shelfProducts, setShelfProducts] = useState<any[]>([
    { id: '1', name: 'Everglow Sunsafe Spf 50+ Pa+++ Matte Look Sunscreen', brand: 'Everglow', category: 'Sunscreen', size: '30ml', timing: 'AM', verdict: 'Just trying it', status: 'active' },
    { id: '2', name: 'Exfomar', brand: 'Sostenica', category: 'Exfoliant', size: '50ml', timing: 'AM', verdict: 'Just trying it', status: 'active' }
  ]);

  // Routine checkbox checks
  const [routineChecks, setRoutineChecks] = useState<Record<string, boolean>>({
    '1': false,
    '2': false
  });

  // Slider State (Before/After split slider)
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isSliding, setIsSliding] = useState(false);

  // Dynamic states for page-specific animations
  const [totalSpent, setTotalSpent] = useState(0);
  const [averageSpent, setAverageSpent] = useState(0);
  const [insightsCategory, setInsightsCategory] = useState<'all' | 'injectables' | 'skin' | 'hair' | 'nails'>('all');
  const [historyItems, setHistoryItems] = useState<any[]>([
    { label: "Classic facial", date: "yesterday", cost: "£45", category: "skin" },
    { label: "Lymphatic drainage massage", date: "3 days ago", cost: "£80", category: "skin" },
    { label: "Microneedling", date: "15 days ago", cost: "£120", category: "skin" },
    { label: "Teeth whitening", date: "24 days ago", cost: "£90", category: "skin" },
    { label: "Gel manicure", date: "last month", cost: "£45", category: "nails" }
  ]);
  const [showCycleDueWarning, setShowCycleDueWarning] = useState(false);
  const [showConflictWarning, setShowConflictWarning] = useState(true);
  const [conflictResolved, setConflictResolved] = useState(false);

  // Automatically trigger notification modal after 1.5s once in dashboard today tab
  useEffect(() => {
    if (onboardingStep === 'dashboard' && activeTab === 'today' && !hasInteracted && !autoPlay && !compact) {
      const timer = setTimeout(() => {
        setShowNotifModal(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [onboardingStep, activeTab, hasInteracted, autoPlay, compact]);

  // Auto-play sequence for the hero mockup
  useEffect(() => {
    if (!autoPlay) return;

    let isMounted = true;
    const delay = (ms: number) => new Promise(res => {
      const t = setTimeout(res, ms);
      return () => clearTimeout(t);
    });

    const sequence = async () => {
      // If it's a splash (default sequence)
      if (initialScreen === 'splash') {
        while (isMounted) {
          if (!isMounted) return; setOnboardingStep('splash'); await delay(2500);
          if (!isMounted) return; setOnboardingStep('dashboard'); setActiveTab('today'); await delay(3000);
          if (!isMounted) return; setOnboardingStep('dashboard'); setActiveTab('routine'); await delay(3000);
        }
      }

      // If it's today (dashboard)
      if (initialScreen === 'today') {
        while (isMounted) {
          if (!isMounted) return;
          setShowCheckIn(false);
          setShowHistory(false);
          setShowInsights(false);
          await delay(4000);

          if (!isMounted) return;
          setShowCheckIn(true);
          setShowHistory(false);
          setShowInsights(false);
          await delay(4500);

          if (!isMounted) return;
          setShowCheckIn(false);
          setShowHistory(true);
          setShowInsights(false);
          await delay(4500);

          if (!isMounted) return;
          setShowCheckIn(false);
          setShowHistory(false);
          setShowInsights(true);
          await delay(4500);
        }
      }

      // If it's why-nella (Cycles main tabs)
      if (initialScreen === 'why-nella') {
        while (isMounted) {
          if (!isMounted) return;
          setOnboardingStep('dashboard');
          setActiveTab('routine');
          setShowCheckIn(false);
          setShowHistory(false);
          setShowInsights(false);
          await delay(3500);

          if (!isMounted) return;
          setActiveTab('shelf');
          await delay(3500);

          if (!isMounted) return;
          setActiveTab('today');
          await delay(3500);
        }
      }

      // If it's what-it-does (Cycles main features)
      if (initialScreen === 'what-it-does') {
        while (isMounted) {
          if (!isMounted) return;
          setOnboardingStep('dashboard');
          setActiveTab('today');
          setShowCheckIn(false);
          setShowHistory(true);
          setShowInsights(false);
          await delay(3500);

          if (!isMounted) return;
          // Show routines (Skincare routines)
          setShowHistory(false);
          setActiveTab('routine');
          await delay(3500);

          if (!isMounted) return;
          // Show checkin (Aftercare slider)
          setActiveTab('today');
          setShowCheckIn(true);
          await delay(3500);

          if (!isMounted) return;
          // Show insights (Insights charts)
          setShowCheckIn(false);
          setShowInsights(true);
          await delay(3500);

          if (!isMounted) return;
          // Show today dashboard (no overlays)
          setShowInsights(false);
          await delay(3500);
        }
      }

      // If it's routines
      if (initialScreen === 'routines') {
        while (isMounted) {
          if (!isMounted) return;
          setRoutineChecks({ '1': false, '2': false });
          await delay(2500);

          if (!isMounted) return;
          setRoutineChecks({ '1': true, '2': false });
          await delay(2500);

          if (!isMounted) return;
          setRoutineChecks({ '1': true, '2': true });
          await delay(3000);
        }
      }

      // If it's journal (Glow Score tab rotation)
      if (initialScreen === 'journal') {
        while (isMounted) {
          if (!isMounted) return;
          setGlowScoreTab('score');
          await delay(3500);

          if (!isMounted) return;
          setGlowScoreTab('weekly');
          await delay(3500);

          if (!isMounted) return;
          setGlowScoreTab('monthly');
          await delay(3500);
        }
      }

      // If it's shelf (skincare product adding demo)
      if (initialScreen === 'shelf') {
        while (isMounted) {
          if (!isMounted) return;
          // Reset shelf products
          setShelfProducts([
            { id: '1', name: 'Everglow Sunsafe Spf 50+ Pa+++ Matte Look Sunscreen', brand: 'Everglow', category: 'Sunscreen', size: '30ml', timing: 'AM', verdict: 'Just trying it', status: 'active' }
          ]);
          setShowSearchOverlay(false);
          setConfiguringProduct(null);
          await delay(2500);

          if (!isMounted) return;
          // Open search overlay
          setShowSearchOverlay(true);
          setSearchQuery('');
          await delay(1500);

          // Type search query: "exf"
          if (!isMounted) return; setSearchQuery('e'); await delay(200);
          if (!isMounted) return; setSearchQuery('ex'); await delay(200);
          if (!isMounted) return; setSearchQuery('exf'); await delay(1200);

          // Select the product
          if (!isMounted) return;
          setConfiguringProduct({ name: "Exfomar", brand: "Sostenica", category: "Exfoliant" });
          await delay(2000);

          // Add to shelf
          if (!isMounted) return;
          setShelfProducts([
            { id: '1', name: 'Everglow Sunsafe Spf 50+ Pa+++ Matte Look Sunscreen', brand: 'Everglow', category: 'Sunscreen', size: '30ml', timing: 'AM', verdict: 'Just trying it', status: 'active' },
            { id: '2', name: 'Exfomar', brand: 'Sostenica', category: 'Exfoliant', size: '50ml', timing: 'AM', verdict: 'Just trying it', status: 'active' }
          ]);
          setConfiguringProduct(null);
          setShowSearchOverlay(false);
          await delay(4000);
        }
      }

      // If it's insights (spending analysis counting up & filter demo)
      if (initialScreen === 'insights') {
        while (isMounted) {
          if (!isMounted) return;
          setTotalSpent(0);
          setAverageSpent(0);
          setInsightsCategory('all');
          await delay(1200);

          // Count up
          for (let i = 0; i <= 385; i += 35) {
            if (!isMounted) return;
            setTotalSpent(i);
            setAverageSpent(Math.round(i / 15));
            await delay(80);
          }
          await delay(2500);

          // Switch category filters
          if (!isMounted) return;
          setInsightsCategory('injectables');
          await delay(3000);

          if (!isMounted) return;
          setInsightsCategory('skin');
          await delay(3000);
        }
      }

      // If it's history (treatment cycle & logging demo)
      if (initialScreen === 'history') {
        while (isMounted) {
          if (!isMounted) return;
          // Initial list without botox
          setHistoryItems([
            { label: "Classic facial", date: "yesterday", cost: "£45", category: "skin" },
            { label: "Lymphatic drainage massage", date: "3 days ago", cost: "£80", category: "skin" },
            { label: "Microneedling", date: "15 days ago", cost: "£120", category: "skin" },
            { label: "Teeth whitening", date: "24 days ago", cost: "£90", category: "skin" },
            { label: "Gel manicure", date: "last month", cost: "£45", category: "nails" }
          ]);
          setShowCycleDueWarning(false);
          await delay(2000);

          // Show treatment due alert card
          if (!isMounted) return;
          setShowCycleDueWarning(true);
          await delay(3500);

          // Animate logging botox session
          if (!isMounted) return;
          setShowCycleDueWarning(false);
          // Prepend new treatment
          setHistoryItems(prev => [
            { label: "Botox (3 areas)", date: "just logged", cost: "£220", category: "injectables" },
            ...prev
          ]);
          await delay(4500);
        }
      }

      // If it's conflicts (ingredient conflict warning and resolution)
      if (initialScreen === 'conflicts') {
        while (isMounted) {
          if (!isMounted) return;
          // Setup active conflicts AM
          setShelfProducts([
            { id: '1', name: 'Everglow Sunsafe Spf 50+ Pa+++ Matte Look Sunscreen', brand: 'Everglow', category: 'Sunscreen', size: '30ml', timing: 'AM', verdict: 'Just trying it', status: 'active' },
            { id: '2', name: 'Retinol 1% Clinic Strength', brand: 'Exfomar', category: 'Retinol', size: '30ml', timing: 'AM', verdict: 'Just trying it', status: 'active' }
          ]);
          setShowConflictWarning(true);
          setConflictResolved(false);
          await delay(4000);

          // Resolve: move Retinol to PM
          if (!isMounted) return;
          setConflictResolved(true);
          // Wait for resolution animation
          await delay(1200);
          if (!isMounted) return;
          setShowConflictWarning(false);
          // Update product timing to PM
          setShelfProducts([
            { id: '1', name: 'Everglow Sunsafe Spf 50+ Pa+++ Matte Look Sunscreen', brand: 'Everglow', category: 'Sunscreen', size: '30ml', timing: 'AM', verdict: 'Just trying it', status: 'active' },
            { id: '2', name: 'Retinol 1% Clinic Strength', brand: 'Exfomar', category: 'Retinol', size: '30ml', timing: 'PM', verdict: 'Just trying it', status: 'active' }
          ]);
          await delay(4500);
        }
      }
    };

    sequence();

    return () => { isMounted = false; };
  }, [autoPlay, initialScreen]);

  // Before-After auto-slider sweep
  useEffect(() => {
    if (!autoPlay || !showCheckIn || isSliding) return;

    let direction = 1;
    const interval = setInterval(() => {
      setSliderPosition(pos => {
        let next = pos + direction * 0.4;
        if (next >= 85) {
          direction = -1;
          next = 85;
        } else if (next <= 15) {
          direction = 1;
          next = 15;
        }
        return next;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [autoPlay, showCheckIn, isSliding]);

  // Before-After slide logic
  const handleSliderMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) handleSliderMove(e.touches[0].clientX, container);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isSliding) {
      const container = e.currentTarget.getBoundingClientRect();
      handleSliderMove(e.clientX, container);
    }
  };

  const mockAvailableProducts = [
    { name: "Eau De Toilette Pokémon", brand: "Corine De Farme", category: "Fragrance" },
    { name: "Everglow Sunsafe Spf 50+ Pa+++ Matte Look Sunscreen", brand: "Everglow", category: "Sunscreen" },
    { name: "Exfomar", brand: "Sostenica", category: "Exfoliant" },
    { name: "Olaplex Nr 9 Protection Serum", brand: "Olaplex", category: "Serum" },
    { name: "Pastilhas Para A Máquina De Loiça", brand: "Retail", category: "Other" },
    { name: "Bartshampoo Zedernholz & Wacholder", brand: "Brooklyn Soup Company", category: "Cleansers" },
    { name: "Hands & Face Wipes Paw Patrol", brand: "Retail Unie", category: "Cleansers" },
    { name: "Luz Natural", brand: "Sostenica", category: "Other" },
    { name: "Sheet Mask Aloe Vera", brand: "Cien", category: "Moisturisers" },
    { name: "Biodance Collagen Peptide Eye", brand: "Biodance", category: "Moisturisers" }
  ];

  return (
    <div className={`relative mx-auto max-w-[340px] md:max-w-[360px] w-full transition-all duration-300 scale-[0.85] sm:scale-90 md:scale-95 origin-center ${!interactive ? 'pointer-events-none select-none' : ''}`}>

      {/* Phone bezel container */}
      <div
        id="device-frame"
        onClickCapture={() => setHasInteracted(true)}
        className="relative bg-darkest-espresso rounded-[52px] p-[10px] shadow-[0_24px_50px_rgba(20,10,5,0.45),_inset_0_4px_6px_rgba(255,255,255,0.15)] border-4 border-[#3A2418] overflow-hidden"
      >
        {/* Dynamic Island Notch */}
        <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-2xl z-50 flex items-center justify-between px-3">
          <div className="w-2.5 h-2.5 bg-[#1F1410] rounded-full border border-gray-800"></div>
          <div className="w-[45px] h-[4px] bg-gray-900 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-[#001] rounded-full"></div>
        </div>

        {/* Screen Dynamic Container */}
        <div className="relative bg-[#FAF7F2] rounded-[42px] h-[645px] overflow-hidden flex flex-col pt-12 select-none border border-black/5">
          {customImage && (
            <div className="absolute inset-0 w-full h-full z-20 pointer-events-none flex items-start justify-center bg-[#FAF7F2]">
              <img
                src={customImage}
                alt="App Screen"
                className={`w-full h-full object-cover object-top scale-[1.03] ${imageClassName}`}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* SPLASH LAUNCH SCREEN */}
            {onboardingStep === 'splash' && (
              <motion.div
                key="splash"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#FAF7F2] flex flex-col justify-between items-center px-6 py-12 z-20"
              >
                {/* Concentric rings artwork */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                  <div className="w-72 h-72 rounded-full border border-deep-gold/15 flex items-center justify-center">
                    <div className="w-56 h-56 rounded-full border border-deep-gold/10 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full border border-deep-gold/5"></div>
                    </div>
                  </div>
                </div>

                <div />

                {/* center logo & beauty intelligence */}
                <div className="text-center space-y-4 relative z-10">
                  <img
                    src="/nellaBrown.png"
                    alt="nella logo"
                    className="h-16 w-auto object-contain mx-auto mb-2"
                  />

                  <div className="flex items-center justify-center gap-2">
                    <span className="h-[1px] w-6 bg-deep-gold/30"></span>
                    <span className="text-[9px] font-sans font-bold tracking-[0.3em] uppercase text-deep-gold">
                      beauty intelligence
                    </span>
                    <span className="h-[1px] w-6 bg-deep-gold/30"></span>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="w-full text-center space-y-4 relative z-10">
                  <button
                    onClick={() => setOnboardingStep('name-era')}
                    className="w-full py-4 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] font-semibold rounded-full shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-sans text-sm tracking-wide"
                  >
                    <span>get started</span>
                    <ArrowRight size={16} />
                  </button>

                  <button
                    onClick={() => setOnboardingStep('login')}
                    className="text-[12px] font-sans text-espresso/70 hover:text-espresso transition-colors"
                  >
                    already have an account? <span className="font-bold text-espresso decoration-deep-gold/50 underline underline-offset-2">sign in</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* WELCOME BACK SIGN IN SCREEN */}
            {onboardingStep === 'login' && (
              <motion.div
                key="login"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute inset-0 bg-[#FAF7F2] flex flex-col justify-between px-6 pb-6 pt-12 z-20"
              >
                <div>
                  {/* Custom Navigation */}
                  <div className="flex justify-center items-center py-4 relative">
                    <h2 className="font-display italic text-[24px] font-[900] text-espresso">nella</h2>
                  </div>

                  <div className="mt-8 space-y-6">
                    <div className="space-y-1.5 text-left">
                      <div className="flex items-center gap-1.5">
                        <span className="h-[1.5px] w-4 bg-deep-gold"></span>
                        <span className="text-[10px] font-bold text-deep-gold tracking-wider font-sans">let's get to know each other</span>
                      </div>
                      <h2 className="text-[28px] font-display font-medium text-espresso leading-tight">
                        Welcome <span className="italic">back.</span>
                      </h2>
                      <p className="text-[12px] text-grey leading-tight font-sans">
                        Log in to access your progress and routines.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Email input */}
                      <div className="space-y-1 text-left">
                        <label className="text-[9.5px] font-bold text-espresso uppercase tracking-wider block">EMAIL</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 bg-[#FAF7F2] border border-very-light-grey rounded-2xl font-sans text-[13px] text-espresso focus:outline-none focus:border-deep-gold focus:ring-1 focus:ring-deep-gold"
                          defaultValue="nella@beauty.com"
                        />
                      </div>

                      {/* Password input */}
                      <div className="space-y-1 text-left">
                        <label className="text-[9.5px] font-bold text-espresso uppercase tracking-wider block">PASSWORD</label>
                        <div className="relative">
                          <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full px-4 py-3 bg-[#FAF7F2] border border-very-light-grey rounded-2xl font-sans text-[13px] text-espresso focus:outline-none focus:border-deep-gold focus:ring-1 focus:ring-deep-gold"
                            defaultValue="••••••••"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={() => {
                      setUserName('Nella');
                      setOnboardingStep('dashboard');
                    }}
                    className="w-full py-3.5 bg-espresso text-[#FAF7F2] rounded-full text-[13px] font-bold hover:bg-darkest-espresso shadow-lg transition-transform hover:scale-[1.01]"
                  >
                    Log In
                  </button>

                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-very-light-grey"></div>
                    <span className="flex-shrink mx-3 text-[10px] font-sans text-grey bg-[#FAF7F2]">or</span>
                    <div className="flex-grow border-t border-very-light-grey"></div>
                  </div>

                  <button
                    onClick={() => {
                      setUserName('Nella Google');
                      setOnboardingStep('dashboard');
                    }}
                    className="w-full py-3 border border-very-light-grey bg-white hover:bg-cream/10 rounded-full flex items-center justify-center gap-2 font-sans text-[12px] font-semibold shadow-xs"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.578-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.11C18.28 1.845 15.547 1 12.24 1 5.48 1 0 6.48 0 13.24s5.48 12.24 12.24 12.24c7.057 0 11.751-4.965 11.751-11.96 0-.805-.084-1.42-.187-2.235H12.24z" />
                    </svg>
                    <span>CONTINUE WITH GOOGLE</span>
                  </button>

                  <div className="text-center font-sans space-y-1">
                    <p className="text-[12.5px] text-grey">Don't have an account? <span onClick={() => setOnboardingStep('name-era')} className="font-bold text-espresso underline decoration-deep-gold/40 cursor-pointer">Sign Up</span></p>
                    <p className="text-[9px] text-[#888780]/80 px-4 mt-2">By continuing you agree to our <span className="underline">Terms</span> and <span className="underline">Privacy Policy</span>.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 1: name & era selection */}
            {onboardingStep === 'name-era' && (
              <motion.div
                key="name-era"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col justify-between h-full px-5 pb-5 pt-3"
              >
                {/* Onboarding Header */}
                <div className="flex justify-between items-center">
                  <button onClick={() => setOnboardingStep('splash')} className="text-espresso">
                    <ArrowLeft size={16} />
                  </button>
                  <span className="font-display italic text-lg font-black text-espresso">nella</span>
                  <div className="w-4 h-4" />
                </div>

                {/* Progress bar setup */}
                <div className="w-full bg-very-light-grey h-1.5 rounded-full mt-2">
                  <div className="bg-[#DEC68B] h-full rounded-full transition-all duration-300" style={{ width: '15%' }}></div>
                </div>

                <div className="flex-1 overflow-y-auto py-5 space-y-6 text-left" style={{ scrollbarWidth: 'none' }}>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-deep-gold tracking-wider block font-sans">welcome to nella</span>
                    <h2 className="text-[26px] font-display font-medium text-espresso leading-tight">
                      What should we call <span className="italic font-bold">you?</span>
                    </h2>
                    <p className="text-[12.5px] text-grey">We'll use your name to personalise everything you see here.</p>
                  </div>

                  <div className="space-y-4">
                    {/* First Name Input */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="h-[1px] w-3 bg-deep-gold"></span>
                        <span className="text-[9px] font-bold text-deep-gold uppercase tracking-widest font-sans">your first name</span>
                      </div>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-very-light-grey rounded-2xl font-sans text-[13px] text-espresso focus:outline-none focus:border-deep-gold focus:ring-1 focus:ring-deep-gold font-semibold"
                      />
                    </div>

                    {/* Era Selection (How long glowing?) */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5">
                        <span className="h-[1px] w-3 bg-deep-gold"></span>
                        <span className="text-[9px] font-bold text-deep-gold uppercase tracking-widest font-sans">your era</span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-base font-display font-medium text-espresso">How long have you been <span className="italic font-bold">glowing?</span></h3>
                        <p className="text-[11px] text-grey">So we can tailor recommendations to where you are right now.</p>
                      </div>

                      <div className="space-y-2">
                        {[
                          { label: 'Early glow era', range: '18-24' },
                          { label: 'Finding my rhythm', range: '25-32' },
                          { label: 'Fully in my era', range: '30-42' },
                          { label: 'Unbothered and thriving', range: '43+' }
                        ].map((era) => {
                          const isSelected = selectedEra === era.label;
                          return (
                            <button
                              key={era.label}
                              onClick={() => setSelectedEra(era.label)}
                              className={`w-full p-4 rounded-2.5xl border text-left flex justify-between items-center transition-all ${isSelected
                                ? 'bg-warm-ivory border-deep-gold/60 text-espresso shadow-xs'
                                : 'bg-white/40 border-very-light-grey text-espresso/80 hover:bg-[#FAF7F2]/50'
                                }`}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-deep-gold bg-[#8F6F3E] text-white' : 'border-light-grey bg-white'
                                  }`}>
                                  {isSelected && <Check size={10} className="stroke-[3]" />}
                                </div>
                                <span className="text-[12.5px] font-bold font-sans">{era.label}</span>
                              </div>
                              <span className="text-[11.5px] text-grey font-sans">{era.range}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setOnboardingStep('goals')}
                  disabled={!userName.trim()}
                  className="w-full py-4 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] font-semibold rounded-full shadow-xl transition-all flex items-center justify-center gap-2 font-sans text-sm disabled:opacity-40"
                >
                  <span>Continue</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            )}

            {/* STEP 2: skin goals */}
            {onboardingStep === 'goals' && (
              <motion.div
                key="goals"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col justify-between h-full px-5 pb-5 pt-3"
              >
                <div className="flex justify-between items-center">
                  <button onClick={() => setOnboardingStep('name-era')} className="text-espresso">
                    <ArrowLeft size={16} />
                  </button>
                  <span className="font-display italic text-lg font-black text-espresso">nella</span>
                  <div className="w-4 h-4" />
                </div>

                <div className="w-full bg-very-light-grey h-1.5 rounded-full mt-2">
                  <div className="bg-[#DEC68B] h-full rounded-full transition-all duration-300" style={{ width: '32%' }}></div>
                </div>

                <div className="flex-1 overflow-y-auto py-5 space-y-5 text-left" style={{ scrollbarWidth: 'none' }}>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-deep-gold tracking-wider block font-sans">your skin goals</span>
                    <h2 className="text-[26px] font-display font-medium text-espresso leading-tight">
                      What's on your <span className="italic font-bold">mind?</span>
                    </h2>
                    <p className="text-[12.5px] text-grey">Pick your top 2-3 concerns. We'll tailor suggestions around them.</p>
                  </div>

                  {/* Informational bubble */}
                  <div className="bg-warm-ivory border border-deep-gold/15 p-3 rounded-2.5xl flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-deep-gold/10 flex items-center justify-center text-deep-gold shrink-0">
                      <HelpCircle size={14} />
                    </div>
                    <div className="font-sans">
                      <p className="text-[11.5px] font-bold text-espresso leading-none mb-0.5">Less is more. Picking 2-3</p>
                      <p className="text-[10px] text-grey leading-tight">means sharper recommendations.</p>
                    </div>
                    <span className="text-xs font-bold text-deep-gold font-mono ml-auto">
                      {selectedConcerns.length}/3
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      'Fine lines', 'Acne & breakouts', 'Dryness',
                      'Redness & sensitivity', 'Dullness', 'Texture', 'Dark spots'
                    ].map((concern) => {
                      const isSelected = selectedConcerns.includes(concern);
                      return (
                        <button
                          key={concern}
                          onClick={() => {
                            if (isSelected) {
                              setSelectedConcerns(prev => prev.filter(c => c !== concern));
                            } else {
                              if (selectedConcerns.length < 3) {
                                setSelectedConcerns(prev => [...prev, concern]);
                              }
                            }
                          }}
                          className={`px-3.5 py-2 rounded-full border text-[11.5px] font-bold font-sans transition-all active:scale-95 ${isSelected
                            ? 'bg-cream border-deep-gold text-espresso shadow-xs'
                            : 'bg-white/40 border-very-light-grey text-espresso/70'
                            }`}
                        >
                          {concern}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-[10px] font-sans text-grey/80 text-center italic mt-1">tap a selected concern to deselect</p>
                </div>

                <button
                  onClick={() => setOnboardingStep('treatments')}
                  disabled={selectedConcerns.length === 0}
                  className="w-full py-4 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] font-semibold rounded-full shadow-xl transition-all flex items-center justify-center gap-2 font-sans text-sm disabled:opacity-40"
                >
                  <span>That's about right</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            )}

            {/* STEP 3: Treatments */}
            {onboardingStep === 'treatments' && (
              <motion.div
                key="treatments"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col justify-between h-full px-5 pb-5 pt-3"
              >
                <div className="flex justify-between items-center">
                  <button onClick={() => setOnboardingStep('goals')} className="text-espresso">
                    <ArrowLeft size={16} />
                  </button>
                  <span className="font-display italic text-lg font-black text-espresso">nella</span>
                  <div className="w-4 h-4" />
                </div>

                <div className="w-full bg-very-light-grey h-1.5 rounded-full mt-2">
                  <div className="bg-[#DEC68B] h-full rounded-full transition-all duration-300" style={{ width: '48%' }}></div>
                </div>

                <div className="flex-1 overflow-y-auto py-5 space-y-5 text-left" style={{ scrollbarWidth: 'none' }}>
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-deep-gold tracking-wider block font-sans">your beauty rotation</span>
                    <h2 className="text-[26px] font-display font-medium text-espresso leading-tight text-balance">
                      What do you treat yourself <span className="italic font-bold">to?</span>
                    </h2>
                    <p className="text-[12.5px] text-grey">Pick everything you do, even occasionally. We'll track it all.</p>
                  </div>

                  {/* Search treatment */}
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-grey" size={14} />
                    <input
                      type="text"
                      placeholder="search treatments..."
                      className="w-full pl-9 pr-4 py-2 bg-[#F2E9D8]/40 border border-very-light-grey rounded-full font-sans text-[11.5px] text-espresso focus:outline-none"
                    />
                  </div>

                  {/* Grouped lists */}
                  <div className="space-y-4">
                    {[
                      {
                        title: "AESTHETIC TREATMENTS",
                        items: ["Classic facial", "Cryotherapy", "Dermaplaning", "Lymphatic drainage massage", "Oxygen facial"]
                      },
                      {
                        title: "COSMETIC PROCEDURES",
                        items: ["Cryolipolysis (fat freezing)", "EMSculpt"]
                      },
                      {
                        title: "DENTAL AESTHETICS",
                        items: ["Teeth whitening", "Veneers"]
                      },
                      {
                        title: "FACIAL",
                        items: ["HydraFacial"]
                      }
                    ].map((group) => (
                      <div key={group.title} className="space-y-1.5">
                        <span className="text-[8.5px] font-bold text-deep-gold uppercase tracking-widest block font-sans">{group.title}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {group.items.map((item) => {
                            const isSelected = selectedTreatments.includes(item);
                            return (
                              <button
                                key={item}
                                onClick={() => {
                                  if (isSelected) {
                                    setSelectedTreatments(prev => prev.filter(t => t !== item));
                                  } else {
                                    setSelectedTreatments(prev => [...prev, item]);
                                  }
                                }}
                                className={`px-3 py-1.5 rounded-full border text-[11px] font-semibold font-sans transition-all ${isSelected
                                  ? 'bg-cream border-deep-gold text-espresso shadow-2xs'
                                  : 'bg-white/40 border-very-light-grey text-espresso/70'
                                  }`}
                              >
                                {item}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setOnboardingStep('recency')}
                  disabled={selectedTreatments.length === 0}
                  className="w-full py-4 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] font-semibold rounded-full shadow-xl transition-all flex items-center justify-center gap-2 font-sans text-sm disabled:opacity-40"
                >
                  <span>These are my regulars</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            )}

            {/* STEP 4: Recency */}
            {onboardingStep === 'recency' && (
              <motion.div
                key="recency"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col justify-between h-full px-5 pb-5 pt-3"
              >
                <div className="flex justify-between items-center">
                  <button onClick={() => setOnboardingStep('treatments')} className="text-espresso">
                    <ArrowLeft size={16} />
                  </button>
                  <span className="font-display italic text-lg font-black text-espresso">nella</span>
                  <div className="w-4 h-4" />
                </div>

                <div className="w-full bg-very-light-grey h-1.5 rounded-full mt-2">
                  <div className="bg-[#DEC68B] h-full rounded-full transition-all duration-300" style={{ width: '60%' }}></div>
                </div>

                <div className="flex-1 overflow-y-auto py-4 space-y-4 text-left" style={{ scrollbarWidth: 'none' }}>
                  <div className="space-y-1">
                    <h2 className="text-[22px] font-display font-medium text-espresso leading-tight">
                      When did you last have <span className="italic font-bold">these?</span>
                    </h2>
                    <p className="text-[11px] text-grey">Rough is fine — we'll refine as you log. Then set how often you usually go.</p>
                  </div>

                  <div className="space-y-4">
                    {selectedTreatments.map((tr) => (
                      <div key={tr} className="p-3.5 bg-cream/30 border border-very-light-grey rounded-2.5xl space-y-3.5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-cream flex items-center justify-center font-display font-bold text-espresso text-sm">
                            {tr.charAt(0)}
                          </div>
                          <div>
                            <h4 className="text-[12.5px] font-sans font-bold text-espresso leading-tight">{tr}</h4>
                            <p className="text-[10px] text-grey font-sans">about last month ago</p>
                          </div>
                        </div>

                        {/* Slide selector mimicking recency choices */}
                        <div className="space-y-1.5">
                          <span className="text-[8px] font-bold text-grey uppercase tracking-widest block">LAST HAD</span>
                          <div className="flex justify-between text-[8px] text-espresso/60 font-sans font-semibold">
                            {['this wk', '2-3 wks', 'last mo', '2-3 mo', '6+ mo', "can't recall"].map((val) => {
                              const isActive = (lastHadRecency[tr] || 'last mo') === val;
                              return (
                                <span
                                  key={val}
                                  onClick={() => setLastHadRecency(prev => ({ ...prev, [tr]: val }))}
                                  className={`cursor-pointer pb-1 transition-all ${isActive ? 'text-deep-gold font-bold scale-105' : ''}`}
                                >
                                  {val}
                                </span>
                              );
                            })}
                          </div>
                          <div className="h-1 bg-very-light-grey rounded-full relative">
                            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-deep-gold border border-white shadow-xs left-[42%]"></div>
                          </div>
                        </div>

                        {/* Rotation Selector */}
                        <div className="flex items-center justify-between pt-1 font-sans">
                          <span className="text-[10.5px] font-semibold text-espresso">Your rotation for {tr.toLowerCase()}?</span>
                          <select className="bg-cream border-none text-[10px] font-bold py-1 px-2 rounded-xl text-espresso focus:outline-none">
                            <option>every 3 months</option>
                            <option>every 6 months</option>
                            <option>only as needed</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setOnboardingStep('hair')}
                  className="w-full py-4 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] font-semibold rounded-full shadow-xl transition-all flex items-center justify-center gap-2 font-sans text-sm"
                >
                  <span>That's about right &rarr;</span>
                </button>
              </motion.div>
            )}

            {/* STEP 5: Hair Style Profile */}
            {onboardingStep === 'hair' && (
              <motion.div
                key="hair"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col justify-between h-full px-5 pb-5 pt-3"
              >
                <div className="flex justify-between items-center">
                  <button onClick={() => setOnboardingStep('recency')} className="text-espresso">
                    <ArrowLeft size={16} />
                  </button>
                  <span className="font-display italic text-lg font-black text-espresso">nella</span>
                  <div className="w-4 h-4" />
                </div>

                <div className="w-full bg-very-light-grey h-1.5 rounded-full mt-2">
                  <div className="bg-[#DEC68B] h-full rounded-full transition-all duration-300" style={{ width: '72%' }}></div>
                </div>

                <div className="flex-1 overflow-y-auto py-4 space-y-4 text-left font-sans" style={{ scrollbarWidth: 'none' }}>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-deep-gold tracking-wider block font-sans">let's build your avatar...</span>
                    <h2 className="text-[22px] font-display font-medium text-espresso leading-tight">
                      How do you usually wear your <span className="italic font-bold">hair?</span>
                    </h2>
                    <p className="text-[11px] text-grey">Track your highlights, treatments, the whole glow-up.</p>
                  </div>

                  {/* hair grid */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    {[
                      { label: "Classic bun", icon: "👱‍♀️" },
                      { label: "Loose waves", icon: "👩‍🦱" },
                      { label: "Straight & sleek", icon: "👩" },
                      { label: "Natural curls", icon: "👩‍🦰" }
                    ].map((hair) => {
                      const isSelected = selectedHair === hair.label;
                      return (
                        <button
                          key={hair.label}
                          onClick={() => setSelectedHair(hair.label)}
                          className={`p-4 rounded-2.5xl border text-center relative flex flex-col items-center justify-center gap-2 aspect-square transition-all ${isSelected
                            ? 'bg-cream border-deep-gold/60 text-espresso shadow-xs'
                            : 'bg-white/40 border-very-light-grey text-espresso/70'
                            }`}
                        >
                          {isSelected && (
                            <div className="absolute top-2 right-2 w-4.5 h-4.5 bg-deep-gold text-[#FAF7F2] rounded-full flex items-center justify-center text-[9px] font-bold">
                              ✓
                            </div>
                          )}
                          <div className="text-3xl">{hair.icon}</div>
                          <span className="text-[11.5px] font-bold block">{hair.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => setOnboardingStep('shelf-setup')}
                    className="w-full py-3.5 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] font-semibold rounded-full shadow-xl transition-all font-sans text-sm"
                  >
                    That's me &rarr;
                  </button>

                  <button
                    onClick={() => setOnboardingStep('shelf-setup')}
                    className="w-full py-2.5 text-[11px] font-bold text-grey/80 hover:text-espresso text-center transition-all underline underline-offset-2"
                  >
                    I'll pick later
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 6: Shelf list and setup */}
            {onboardingStep === 'shelf-setup' && (
              <motion.div
                key="shelf-setup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col justify-between h-full px-5 pb-5 pt-3"
              >
                <div className="flex justify-between items-center">
                  <button onClick={() => setOnboardingStep('hair')} className="text-espresso">
                    <ArrowLeft size={16} />
                  </button>
                  <span className="font-display italic text-lg font-black text-espresso">nella</span>
                  <div className="w-4 h-4" />
                </div>

                <div className="w-full bg-very-light-grey h-1.5 rounded-full mt-2">
                  <div className="bg-[#DEC68B] h-full rounded-full transition-all duration-300" style={{ width: '85%' }}></div>
                </div>

                <div className="flex-1 overflow-y-auto py-4 space-y-4 text-left font-sans" style={{ scrollbarWidth: 'none' }}>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-deep-gold tracking-wider block font-sans">your current set up</span>
                    <h2 className="text-[22px] font-display font-medium text-espresso leading-tight">
                      What's on your <span className="italic font-bold">shelf?</span>
                    </h2>
                    <p className="text-[11px] text-grey">Search the products in your current AM and PM routines.</p>
                  </div>

                  {/* search clickable overlay starter */}
                  <div
                    onClick={() => setShowSearchOverlay(true)}
                    className="relative cursor-pointer"
                  >
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-grey" size={14} />
                    <div className="w-full pl-9 pr-4 py-2.5 bg-warm-ivory border border-very-light-grey rounded-full font-sans text-[11.5px] text-grey/80">
                      search products...
                    </div>
                  </div>

                  {/* currently added products listed on shelf screen */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[8.5px] font-bold text-grey uppercase tracking-widest block">ON YOUR SHELF · {shelfProducts.length}</span>
                    {shelfProducts.map((p) => (
                      <div key={p.id} className="p-3 bg-white/60 border border-very-light-grey rounded-2xl flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-cream/40 flex items-center justify-center text-sm">🧴</div>
                          <div>
                            <h4 className="text-[11.5px] font-bold text-espresso leading-tight line-clamp-1">{p.name}</h4>
                            <p className="text-[9px] text-grey mt-0.5">{p.brand}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => setShelfProducts(prev => prev.filter(x => x.id !== p.id))}
                          className="text-grey hover:text-deep-rose p-1"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setOnboardingStep('welcome')}
                  className="w-full py-4 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] font-semibold rounded-full shadow-xl transition-all flex items-center justify-center gap-2 font-sans text-sm"
                >
                  <span>That's what I've got</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            )}

            {/* STEP 7: Welcome summary dashboard live */}
            {onboardingStep === 'welcome' && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col justify-between h-full px-6 pb-6 pt-3 text-left"
              >
                <div />

                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[11.5px] font-bold text-deep-gold tracking-wider block font-sans">you're in</span>
                    <h2 className="text-[34px] font-display font-medium text-espresso leading-tight">
                      Welcome, <span className="italic font-bold text-deep-gold">{userName || 'Nella'}.</span>
                    </h2>
                    <p className="text-[13px] text-grey font-sans">Your nella is ready — here's what we've got for you.</p>
                  </div>

                  <div className="space-y-3.5 py-2 font-sans font-semibold text-espresso">
                    {[
                      { text: "15 treatments tracked" },
                      { text: `${selectedConcerns.length} skin concerns noted` },
                      { text: `${shelfProducts.length} products on your shelf` },
                      { text: "Your dashboard is live" }
                    ].map((idx) => (
                      <div key={idx.text} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-[#8F6F3E]/10 text-[#8F6F3E] rounded-full flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span className="text-[12.5px]">{idx.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setOnboardingStep('dashboard')}
                  className="w-full py-4 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] font-semibold rounded-full shadow-xl transition-all flex items-center justify-center gap-2 font-sans text-sm"
                >
                  <span>Go to my dashboard</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            )}

            {/* CORE DASHBOARD SYSTEM AFTER ONBOARDING */}
            {onboardingStep === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col h-full z-10"
              >
                {/* Dashboard Subpages Overlays */}
                <AnimatePresence>
                  {/* spending insights subpage */}
                  {showInsights && (
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", damping: 25 }}
                      className="absolute inset-0 bg-[#FAF7F2] z-40 flex flex-col justify-between px-5 pb-5 pt-12 text-left"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <button onClick={() => setShowInsights(false)} className="text-espresso p-1">
                            <ArrowLeft size={16} />
                          </button>
                          <span className="text-[11px] font-bold text-grey uppercase tracking-wider font-sans">spending insights</span>
                          <div className="w-5 h-5" />
                        </div>

                        <div className="space-y-3">
                          <h2 className="text-[26px] font-display font-medium text-espresso leading-none">Spending insights</h2>

                          <div className="flex gap-1.5 p-1 bg-cream/40 rounded-full w-fit text-[11px] font-bold font-sans">
                            <span className="px-3 py-1 hover:bg-white rounded-full cursor-pointer">1M</span>
                            <span className="px-3 py-1 hover:bg-white rounded-full cursor-pointer">3M</span>
                            <span className="px-3 py-1 bg-white text-espresso rounded-full shadow-2xs">ALL TIME</span>
                          </div>

                          {/* Hero cards spent display */}
                          <div className="p-5 rounded-2.5xl text-white space-y-4" style={{ background: 'linear-gradient(135deg, #3A2418 0%, #1F1410 100%)' }}>
                            <div>
                              <span className="text-[9px] font-bold text-[#EFD9A8]/80 uppercase tracking-widest block">TOTAL SPENT</span>
                              <div className="text-[32px] font-display font-black text-[#FAF7F2] mt-0.5">&pound;{totalSpent}</div>
                              <p className="text-[9.5px] text-[#FAF7F2]/75 font-sans mt-0.5">across 15 treatments</p>
                            </div>

                            <div className="flex justify-between border-t border-white/10 pt-3 text-[10px] uppercase font-sans tracking-wider text-[#FAF7F2]/65">
                              <div>AVG / TREATMENT <div className="font-bold text-white mt-0.5">&pound;{averageSpent}</div></div>
                              <div className="text-right">VS LAST QUARTER <div className="font-bold text-light-gold mt-0.5">CONSISTENT</div></div>
                            </div>
                          </div>

                          {/* list categories */}
                          <div className="flex gap-1 overflow-x-auto text-[10.5px] font-bold font-sans hide-scrollbar">
                            {(['all', 'injectables', 'skin', 'hair', 'nails'] as const).map(cat => {
                              const isSelected = insightsCategory === cat;
                              return (
                                <span
                                  key={cat}
                                  onClick={() => {
                                    if (lockedTab) return;
                                    setInsightsCategory(cat);
                                  }}
                                  className={`px-3 py-1.5 border rounded-full capitalize shrink-0 cursor-pointer transition-all ${isSelected
                                    ? 'bg-[#1F1410] border-transparent text-[#FAF7F2] shadow-2xs'
                                    : 'bg-transparent border-very-light-grey text-grey hover:text-espresso'
                                    }`}
                                >
                                  {cat}
                                </span>
                              );
                            })}
                          </div>

                          {/* Breakdown list items */}
                          <div className="space-y-2 pt-2 overflow-y-auto max-h-[220px]" style={{ scrollbarWidth: 'none' }}>
                            <span className="text-[8.5px] font-bold text-grey uppercase tracking-widest block font-sans">BREAKDOWN BY TREATMENT</span>
                            {[
                              { label: "Polynucleotides", count: "1 session", cost: 250, category: "injectables" },
                              { label: "Laser hair removal", count: "1 session", cost: 150, category: "skin" },
                              { label: "Lymphatic drainage massage", count: "1 session", cost: 80, category: "skin" },
                              { label: "Veneers", count: "1 session", cost: 55, category: "nails" },
                              { label: "Gel manicure", count: "2 sessions", cost: 45, category: "nails" }
                            ]
                              .filter(item => insightsCategory === 'all' || item.category === insightsCategory)
                              .map((item) => {
                                const scaledCost = totalSpent ? Math.round((item.cost / 580) * totalSpent) : 0;
                                const percent = Math.round((item.cost / 580) * 100);
                                return (
                                  <motion.div
                                    layout
                                    key={item.label}
                                    className="p-3 bg-white border border-very-light-grey rounded-2xl flex justify-between items-center font-sans"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="w-8 h-8 rounded-full bg-cream/30 flex items-center justify-center text-[10px]">✨</div>
                                      <div>
                                        <h4 className="text-[11.5px] font-bold text-espresso leading-tight">{item.label}</h4>
                                        <p className="text-[9px] text-grey mt-0.5">{item.count}</p>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-[11.5px] font-bold text-espresso">&pound;{scaledCost}</div>
                                      <div className="text-[9px] text-grey">{percent}%</div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                      <button onClick={() => setShowInsights(false)} className="w-full py-3.5 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] rounded-full font-bold font-sans text-xs">Done</button>
                    </motion.div>
                  )}

                  {/* treatment history subpage */}
                  {showHistory && (
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", damping: 25 }}
                      className="absolute inset-0 bg-[#FAF7F2] z-40 flex flex-col justify-between px-5 pb-5 pt-12 text-left"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <button onClick={() => setShowHistory(false)} className="text-espresso p-1">
                            <ArrowLeft size={16} />
                          </button>
                          <span className="text-[11px] font-bold text-grey uppercase tracking-wider font-sans">logged treatments</span>
                          <div className="w-5 h-5" />
                        </div>

                        <div className="space-y-3 font-sans">
                          <h2 className="text-[26px] font-display font-medium text-espresso leading-none">Treatment History</h2>

                          <AnimatePresence>
                            {showCycleDueWarning && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                className="p-4 bg-deep-rose/10 border border-deep-rose/25 rounded-2.5xl text-left space-y-2"
                              >
                                <div className="flex items-center gap-1.5 text-[#A6695E] font-bold text-xs uppercase tracking-wider">
                                  <Timer size={14} className="animate-pulse" />
                                  <span>TREATMENT DUE REMINDER</span>
                                </div>
                                <p className="text-[12px] text-espresso leading-normal font-semibold">
                                  Botox (3 areas) is due. It has been 12 weeks since your last session on March 15.
                                </p>
                                <button
                                  onClick={() => {
                                    setShowCycleDueWarning(false);
                                    setHistoryItems(prev => [
                                      { label: "Botox (3 areas)", date: "just logged", cost: "£220", category: "injectables" },
                                      ...prev
                                    ]);
                                  }}
                                  className="py-1.5 px-3 bg-espresso hover:bg-darkest-espresso text-[#FAF7F2] font-semibold rounded-full text-[10.5px] transition-all"
                                >
                                  Log Botox Session
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <div className="p-4 bg-cream/30 border border-very-light-grey rounded-2.5xl text-left bg-gradient-to-r from-cream/20 to-cream/50">
                            <div className="text-xs font-bold text-grey uppercase">TRACKER INSIGHT</div>
                            <p className="text-[12px] text-espresso leading-normal mt-1 font-semibold">"15 history entries synchronised successfully from your offline offline-encrypted biometric partition."</p>
                          </div>

                          <div className="space-y-2 pt-2 overflow-y-auto max-h-[300px]" style={{ scrollbarWidth: 'none' }}>
                            <AnimatePresence initial={false}>
                              {historyItems.map((tr, idx) => (
                                <motion.div
                                  layout
                                  initial={{ opacity: 0, y: -15 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, scale: 0.95 }}
                                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                  key={tr.label + '-' + idx}
                                  className="p-3 bg-white border border-very-light-grey rounded-2xl flex justify-between items-center"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center font-bold text-espresso text-xs">{tr.label.charAt(0)}</div>
                                    <div>
                                      <h4 className="text-[11.5px] font-bold text-espresso leading-tight">{tr.label}</h4>
                                      <p className="text-[9px] text-grey">{tr.date}</p>
                                    </div>
                                  </div>
                                  <span className="text-[11.5px] font-bold text-espresso">{tr.cost}</span>
                                </motion.div>
                              ))}
                            </AnimatePresence>
                          </div>
                        </div>
                      </div>
                      <button onClick={() => setShowHistory(false)} className="w-full py-3.5 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] rounded-full font-bold font-sans text-xs">Done</button>
                    </motion.div>
                  )}

                  {/* the glow score subpage */}
                  {showGlowScore && (
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", damping: 25 }}
                      className="absolute inset-0 bg-[#FAF7F2] z-40 flex flex-col justify-between px-5 pb-5 pt-12 text-left"
                    >
                      <div className="space-y-4 flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                        <div className="flex items-center justify-between">
                          {!compact ? (
                            <button onClick={() => setShowGlowScore(false)} className="text-espresso p-1">
                              <ArrowLeft size={16} />
                            </button>
                          ) : (
                            <div className="w-6 h-6" />
                          )}
                          <span className="text-[11px] font-bold text-[#8F6F3E] uppercase tracking-wider font-sans flex items-center gap-1">
                            <Sparkles size={11} className="text-deep-gold fill-deep-gold/20" /> the glow score
                          </span>
                          <div className="w-5 h-5" />
                        </div>

                        {/* Interactive Mode Tabs */}
                        <div className="flex p-0.5 bg-cream/30 border border-very-light-grey rounded-full w-full font-sans text-[11px] font-bold">
                          {(['score', 'weekly', 'monthly'] as const).map((tab) => (
                            <button
                              key={tab}
                              onClick={() => {
                                setGlowScoreTab(tab);
                                setScoreShared(false);
                              }}
                              className={`flex-1 py-1.5 rounded-full transition-all capitalize text-[10px] sm:text-[11px] ${glowScoreTab === tab
                                ? 'bg-espresso text-white shadow-2xs'
                                : 'text-grey hover:text-espresso'
                                }`}
                            >
                              {tab === 'score' ? 'Daily Score' : tab === 'weekly' ? 'Weekly Card' : 'Monthly Wrap'}
                            </button>
                          ))}
                        </div>

                        {/* TAB CONTENT: DAILY SCORE */}
                        {glowScoreTab === 'score' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4 flex-1 flex flex-col justify-center py-2"
                          >
                            <div className="text-center space-y-3 relative py-4">
                              {/* Radial glow background */}
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 bg-deep-gold/10 rounded-full blur-2xl pointer-events-none animate-pulse" />

                              {/* Number Gauge Wheel */}
                              <div className="relative w-36 h-36 mx-auto rounded-full border-4 border-dashed border-[#EFD9A8]/50 flex flex-col items-center justify-center bg-white shadow-md">
                                <span className="text-[10px] font-bold tracking-widest text-[#8F6F3E] uppercase leading-none font-sans">current score</span>
                                <span className="font-display font-black text-5xl text-espresso tracking-tighter mt-1">83</span>
                                <span className="text-[10px] font-bold text-[#8F6F3E] tracking-wider mt-1 flex items-center gap-0.5 font-sans">
                                  ▲ +4 pts <span className="text-grey font-medium">this wk</span>
                                </span>
                              </div>
                            </div>

                            <div className="space-y-2 text-center max-w-xs mx-auto">
                              <p className="text-[13px] md:text-[14px] text-espresso font-sans font-semibold leading-snug">
                                one number, 0 to 100, every day.
                              </p>
                              <p className="text-[11px] text-grey leading-relaxed font-sans">
                                it moves with your treatments, your routine, your check-ins, and your skin. calibrates over your first two weeks, then updates daily.
                              </p>
                            </div>

                            {/* Calibration progress bar snippet */}
                            <div className="p-3 bg-white border border-very-light-grey rounded-2xl space-y-1.5 font-sans">
                              <div className="flex justify-between items-center text-[9px] font-bold text-grey">
                                <span className="uppercase tracking-wider">Calibration State</span>
                                <span className="text-[#8F6F3E]">14 / 14 days complete</span>
                              </div>
                              <div className="w-full bg-[#FAF7F2] h-1.5 rounded-full overflow-hidden">
                                <div className="bg-[#8F6F3E] h-full w-full rounded-full" />
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* TAB CONTENT: WEEKLY CARD */}
                        {glowScoreTab === 'weekly' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4 flex-1 flex flex-col justify-center py-2"
                          >
                            <div className="p-5 rounded-3xl text-[#1F1410] bg-gradient-to-br from-[#EFD9A8]/45 to-[#FAF7F2] border border-[#EFD9A8] space-y-4 shadow-sm relative overflow-hidden">
                              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-deep-gold/10 rounded-full blur-xl pointer-events-none" />

                              <div className="flex justify-between items-start">
                                <div>
                                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#8F6F3E] block font-sans">weekly status card</span>
                                  <h3 className="font-display font-[600] text-lg tracking-tight mt-0.5">the weekly update</h3>
                                </div>
                                <span className="text-[10px] bg-[#3A2418] text-[#FAF7F2] px-2 py-0.5 rounded-full uppercase font-bold tracking-wider font-mono">MON 08 JUN</span>
                              </div>

                              <div className="space-y-2.5 pt-2 text-espresso">
                                <div className="flex justify-between items-center border-b border-[#EFD9A8]/30 pb-2 text-[11px] font-sans">
                                  <span className="text-grey">seven-day consistency</span>
                                  <span className="font-bold">92% (excellent)</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-[#EFD9A8]/30 pb-2 text-[11px] font-sans">
                                  <span className="text-grey">skincare products applied</span>
                                  <span className="font-bold">14 / 14 applications</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-[#EFD9A8]/30 pb-2 text-[11px] font-sans">
                                  <span className="text-grey">treatment influence</span>
                                  <span className="font-bold">IPL Photofacial (+5)</span>
                                </div>
                              </div>

                              <div className="pt-1.5 text-center">
                                <p className="text-[10.5px] italic text-[#8F6F3E] font-medium">"every monday, the weekly card lands. review, adapt, and proceed."</p>
                              </div>
                            </div>

                            <button
                              onClick={() => setScoreShared(true)}
                              className="w-full py-3 bg-espresso hover:bg-[#3A2418] text-[#FAF7F2] text-xs font-bold rounded-full shadow-md font-sans tracking-wide"
                            >
                              {scoreShared ? '✓ shared successfully' : 'share weekly card'}
                            </button>
                          </motion.div>
                        )}

                        {/* TAB CONTENT: MONTHLY WRAP */}
                        {glowScoreTab === 'monthly' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4 flex-1 flex flex-col justify-center py-2"
                          >
                            <div className="p-6 rounded-[32px] text-white space-y-4 relative overflow-hidden shadow-xl" style={{ background: 'linear-gradient(135deg, #3A2418 0%, #1F1410 100%)' }}>
                              {/* Glowing vector aura */}
                              <div className="absolute top-[-20%] right-[-10%] w-48 h-48 rounded-full bg-gradient-to-br from-[#EFD9A8]/40 to-transparent blur-3xl pointer-events-none" />
                              <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-[#FAF7F2]/10 rounded-full blur-2xl pointer-events-none" />

                              <div className="flex justify-between items-center">
                                <span className="text-[9px] font-bold text-[#EFD9A8] tracking-widest block font-sans font-semibold">nella wrap</span>
                                <span className="text-[9px] font-bold tracking-wider font-mono text-[#FAF7F2]/60">may 2026</span>
                              </div>

                              <div className="space-y-3 pt-2 text-center pointer-events-none">
                                <div className="text-[44px]">🌸</div>
                                <h3 className="font-display font-[700] text-2xl tracking-normal text-[#FAF7F2]">the may reflection</h3>
                                <p className="text-[11.5px] text-white/80 max-w-[210px] mx-auto leading-relaxed">
                                  some months you’re glowing. some months you’re just here. both deserve the card.
                                </p>
                              </div>

                              <div className="border-t border-white/10 pt-3 flex justify-between text-[10px] font-sans text-[#FAF7F2]/80">
                                <div>MAY SPENT: <span className="font-bold text-white">£45</span></div>
                                <div>CONSISTENCY: <span className="font-bold text-white">88%</span></div>
                              </div>
                            </div>

                            <button
                              onClick={() => setScoreShared(true)}
                              className="w-full py-3 bg-[#8F6F3E] hover:bg-[#3A2418] text-[#FAF7F2] text-xs font-bold rounded-full shadow-md font-sans tracking-wide"
                            >
                              {scoreShared ? '✓ wrap saved to gallery' : 'share wrap card to story'}
                            </button>
                          </motion.div>
                        )}
                      </div>
                      <button onClick={() => setShowGlowScore(false)} className="w-full py-3.5 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] rounded-full font-bold font-sans text-xs mt-3">Done</button>
                    </motion.div>
                  )}

                  {/* interactive skin checking / before-after split slider */}
                  {showCheckIn && (
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ type: "spring", damping: 25 }}
                      className="absolute inset-0 bg-[#FAF7F2] z-40 flex flex-col justify-between px-5 pb-5 pt-12 text-left"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <button onClick={() => setShowCheckIn(false)} className="text-espresso p-1">
                            <ArrowLeft size={16} />
                          </button>
                          <span className="text-[11px] font-bold text-grey uppercase tracking-wider font-sans">skin diary & checkin</span>
                          <div className="w-5 h-5" />
                        </div>

                        <div className="space-y-3 font-sans">
                          <h2 className="text-[22px] font-display font-medium text-espresso leading-none">how's your skin today?</h2>
                          <p className="text-[11px] text-grey leading-tight mb-2">Monitor active redness, dry areas and evaluate treatment progress over weeks.</p>

                          {/* slider segment */}
                          <div className="space-y-1.5 pt-1">
                            <div className="flex justify-between items-center text-[8.5px] font-[700] tracking-widest text-[#8F6F3E] font-sans uppercase">
                              <span>BEFORE (FEB 10)</span>
                              <span>AFTER (APR 20)</span>
                            </div>

                            <div
                              className="relative h-[170px] w-full rounded-2.5xl overflow-hidden cursor-ew-resize select-none border border-espresso/10"
                              onTouchMove={handleTouchMove}
                              onMouseMove={handleMouseMove}
                              onMouseDown={() => setIsSliding(true)}
                              onMouseUp={() => setIsSliding(false)}
                              onMouseLeave={() => setIsSliding(false)}
                            >
                              <div className="absolute inset-0 bg-[#FAF7F2] pointer-events-none">
                                <div className="w-full h-full bg-[#E8D0C2] flex flex-col items-center justify-center p-4 text-center">
                                  <span className="text-4xl filter grayscale">🧖‍♀️</span>
                                  <p className="text-[11px] text-[#A6695E] font-bold mt-2">Active Redness Area & Irritation</p>
                                  <p className="text-[8px] text-grey uppercase tracking-wider">Historical logs</p>
                                </div>
                              </div>

                              <div
                                className="absolute inset-y-0 left-0 right-0 overflow-hidden bg-[#FAF7F2] border-r border-[#FAF7F2] shadow-[4px_0_10px_rgba(44,24,16,0.15)] pointer-events-none"
                                style={{ width: `${sliderPosition}%` }}
                              >
                                <div className="absolute top-0 left-0 h-full w-[310px] bg-gradient-to-br from-[#FFF] to-[#F5EDE0] flex flex-col items-center justify-center p-4 text-center">
                                  <span className="text-4xl">🧖‍♀️</span>
                                  <p className="text-[11px] text-[#4A7E49] font-bold mt-2">Calm, Fresh & Hydrated Skin</p>
                                  <p className="text-[8px] text-grey uppercase tracking-wider">After Care Cycle</p>
                                </div>
                              </div>

                              <div
                                className="absolute top-0 bottom-0 w-[3px] bg-white pointer-events-none drop-shadow-md z-10"
                                style={{ left: `${sliderPosition}%` }}
                              >
                                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white text-espresso flex items-center justify-center border border-espresso/10 hover:border-deep-gold shadow-lg font-bold text-[10px]">
                                  ↔
                                </div>
                              </div>
                            </div>
                            <p className="text-[9px] text-[#C4A067] italic font-semibold text-center mt-1">drag slider handle left/right to check progress results</p>
                          </div>

                          {/* Symptom choices */}
                          <div className="space-y-1.5 pt-1">
                            <span className="text-[9px] font-bold text-grey uppercase tracking-wider">SELECT LOG SYMPTOMS</span>
                            <div className="grid grid-cols-2 gap-2">
                              {['Redness Area', 'Dry Patches', 'Hydration', 'Pores'].map((smp) => (
                                <button key={smp} className="p-2.5 rounded-full border border-[#FAF7F2] bg-warm-ivory/50 text-left text-[11px] font-semibold text-espresso">
                                  {smp} · <span className="text-[#8F6F3E] text-[10px]">perfect</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button onClick={() => setShowCheckIn(false)} className="w-full py-3.5 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] rounded-full font-bold font-sans text-xs">Verify Check-In</button>
                    </motion.div>
                  )}
                </AnimatePresence>



                {/* Main Tab Area with dynamic components */}
                <div className="flex-1 overflow-y-auto px-4 py-3 custom-scrollbar text-left" style={{ scrollbarWidth: 'none' }}>

                  {activeTab === 'today' && (
                    <div className="space-y-3.5">
                      <div className="flex justify-between items-center text-[10px] font-bold tracking-wider uppercase font-sans">
                        <span className="text-deep-gold">3 things to know today</span>
                        <span className="text-grey font-mono">WED · 10 JUN</span>
                      </div>

                      <h2 className="text-[25px] font-display font-medium text-espresso leading-none">
                        good morning, <span className="italic font-bold">{userName || 'Nella'}.</span>
                      </h2>

                      {/* Featured active card */}
                      <div className="p-4 bg-darkest-espresso border border-[#3A2418] rounded-3xl text-white space-y-3.5 relative overflow-hidden shadow-lg">
                        <div className="flex justify-between items-center text-[9px] uppercase font-bold tracking-widest text-[#EFD9A8]">
                          <span>up next</span>
                          <span className="bg-[#8F6F3E] text-white px-2 py-0.5 rounded-full lowercase">due today</span>
                        </div>
                        <div>
                          <h3 className="font-display font-[500] text-xl tracking-tight text-[#FAF7F2]">IPL photofacial</h3>
                          <p className="text-[10px] text-light-gold font-sans mt-0.5">Boutique Clinic</p>
                        </div>
                        <div className="border-t border-white/10 pt-2 text-[10px] font-sans text-grey flex justify-between items-center">
                          <span>30 days since your last set</span>
                        </div>
                      </div>

                      {/* How is skin check in badge */}
                      <div
                        onClick={() => setShowCheckIn(true)}
                        className="p-3 bg-warm-ivory border border-[#EFD9A8]/40 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-cream/20 transition-all active:scale-95 shadow-2xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">🧖‍♀️</span>
                          <div className="font-sans leading-tight">
                            <h4 className="text-[11.5px] font-bold text-espresso">how's your skin today?</h4>
                            <p className="text-[9.5px] text-grey mt-0.5">tap to check in · 3 seconds</p>
                          </div>
                        </div>
                        <span className="text-deep-gold">&rarr;</span>
                      </div>

                      {/* Daily Routine checklist shortcut */}
                      <div
                        onClick={() => setActiveTab('routine')}
                        className="p-3 bg-[#FAF7F2] border border-very-light-grey rounded-2xl flex justify-between items-center cursor-pointer shadow-3xs"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">☀️</span>
                          <div className="font-sans leading-tight">
                            <h4 className="text-[11.5px] font-bold text-espresso">morning routine</h4>
                            <p className="text-[9.5px] text-grey mt-0.5">
                              {Object.values(routineChecks).filter(Boolean).length === 2 ? 'Completed!' : '2 more to finish · tap to continue'}
                            </p>
                          </div>
                        </div>
                        <span className="text-light-grey">&rarr;</span>
                      </div>

                      {/* QUICK ACTIONS SECTION GRID */}
                      <div className="space-y-2">
                        <span className="text-[8.5px] font-bold text-grey uppercase tracking-widest block">QUICK ACTIONS</span>

                        <div className="grid grid-cols-2 gap-2.5 font-sans">
                          {/* action 1 */}
                          <div onClick={() => setShowGlowScore(true)} className="p-3 bg-white border border-very-light-grey rounded-2xl cursor-pointer hover:bg-cream/5 text-left flex flex-col justify-between h-20 shadow-3xs">
                            <div className="text-[10px] font-bold text-deep-gold tracking-wider uppercase">GLOW STATUS</div>
                            <div>
                              <div className="text-base font-bold text-espresso">83 score</div>
                              <span className="text-[8.5px] text-grey">14d calibration complete</span>
                            </div>
                          </div>

                          {/* action 2 */}
                          <div onClick={() => setShowHistory(true)} className="p-3 bg-white border border-very-light-grey rounded-2xl cursor-pointer hover:bg-cream/5 text-left flex flex-col justify-between h-20 shadow-3xs">
                            <div className="text-[10px] font-bold text-deep-gold tracking-wider uppercase">LOG HISTORY</div>
                            <div>
                              <div className="text-base font-bold text-espresso">history</div>
                              <span className="text-[8.5px] text-grey">15 treatments logged</span>
                            </div>
                          </div>

                          {/* action 3 */}
                          <div onClick={() => setActiveTab('shelf')} className="p-3 bg-white border border-very-light-grey rounded-2xl cursor-pointer hover:bg-cream/5 text-left flex flex-col justify-between h-20 shadow-3xs">
                            <div className="text-[10px] font-bold text-deep-gold tracking-wider uppercase font-sans">THE SHELF</div>
                            <div>
                              <div className="text-base font-bold text-espresso">{shelfProducts.length} active</div>
                              <span className="text-[8.5px] text-grey">view skincare vault</span>
                            </div>
                          </div>

                          {/* action 4 */}
                          <div onClick={() => setShowInsights(true)} className="p-3 bg-white border border-very-light-grey rounded-2xl cursor-pointer hover:bg-cream/5 text-left flex flex-col justify-between h-20 shadow-3xs">
                            <div className="text-[10px] font-bold text-[#7BAF7A] tracking-wider uppercase">SPENDING INSIGHTS</div>
                            <div>
                              <div className="text-base font-extrabold text-espresso">&pound;0</div>
                              <div className="flex gap-0.5 mt-1">
                                <span className="w-1.5 h-1.5 bg-[#7BAF7A]/30 rounded-2xs"></span>
                                <span className="w-1.5 h-2.5 bg-[#7BAF7A]/40 rounded-2xs"></span>
                                <span className="w-1.5 h-3.5 bg-[#4A7E49] rounded-2xs"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SHELF FILTER VIEW */}
                  {activeTab === 'shelf' && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-bold tracking-wider font-sans text-grey uppercase">
                        <span>your products</span>
                        <button
                          onClick={() => {
                            setShowSearchOverlay(true);
                          }}
                          className="text-deep-gold hover:text-espresso shrink-0 flex items-center gap-0.5"
                        >
                          <Plus size={10} /> ADD PRODUCT
                        </button>
                      </div>

                      <div className="space-y-1">
                        <h2 className="text-[25px] font-display font-medium text-espresso leading-none">The shelf.</h2>
                      </div>

                      {/* search shelf */}
                      <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-grey" size={13} />
                        <input
                          type="text"
                          placeholder="search shelf..."
                          className="w-full pl-9 pr-4 py-2 bg-warm-ivory border border-very-light-grey rounded-full font-sans text-[11.5px] text-espresso"
                        />
                      </div>

                      {/* Sub filters */}
                      <div className="flex gap-1.5 text-[11px] font-bold font-sans">
                        <span className="px-3 py-1.5 bg-[#1F1410] text-white rounded-full">All {shelfProducts.length}</span>
                        <span className="px-3 py-1.5 border border-very-light-grey rounded-full text-grey font-medium">Active {shelfProducts.filter(x => x.status === 'active').length}</span>
                        <span className="px-3 py-1.5 border border-very-light-grey rounded-full text-grey font-medium">Paused 0</span>
                        <span className="px-3 py-1.5 border border-very-light-grey rounded-full text-grey font-medium">Archived 0</span>
                      </div>

                      {/* Product display list */}
                      <div className="space-y-2.5 max-h-[300px] overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                        {shelfProducts.map((p) => (
                          <div key={p.id} className="p-3 bg-white border border-very-light-grey rounded-2.5xl flex items-center justify-between font-sans">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-cream/40 flex items-center justify-center text-base">🧴</div>
                              <div>
                                <span className="text-[10px] uppercase font-bold text-deep-gold tracking-widest font-sans">{p.brand}</span>
                                <h4 className="text-[12px] font-bold text-espresso leading-snug line-clamp-2">{p.name}</h4>
                              </div>
                            </div>
                            <span className="text-[8px] font-bold px-2 py-0.5 bg-[#8F6F3E]/10 text-[#8F6F3E] rounded-full uppercase shrink-0">active</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ROUTINE CHECKBOXES VIEW */}
                  {activeTab === 'routine' && (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-bold font-sans text-grey uppercase tracking-wider">
                        <span>your routine</span>
                        <span className="bg-warm-ivory border border-deep-gold/30 text-deep-gold px-2.5 py-0.5 rounded-full">0-day streak</span>
                      </div>

                      <div className="space-y-1">
                        <h2 className="text-[25px] font-display font-medium text-espresso leading-none">Daily routine.</h2>
                      </div>

                      {/* AM-PM Toggle */}
                      <div className="flex p-0.5 bg-cream/30 border border-very-light-grey rounded-full w-full font-sans text-[11.5px] font-bold">
                        <button className="flex-1 py-1.5 bg-white text-espresso rounded-full shadow-2xs">
                          ☀️ AM · {shelfProducts.filter(p => p.timing === 'AM').length}
                        </button>
                        <button className="flex-1 py-1.5 text-grey">
                          🌙 PM · {shelfProducts.filter(p => p.timing === 'PM').length}
                        </button>
                      </div>

                      <div className="text-[10.5px] text-grey text-center font-sans tracking-wide">
                        ⓘ Hold to reorder · Swipe left to remove
                      </div>

                      {/* Active Conflict Warning */}
                      <AnimatePresence>
                        {initialScreen === 'conflicts' && showConflictWarning && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginBottom: 12 }}
                            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                            className="p-3.5 bg-deep-rose/10 border border-deep-rose/20 rounded-2.5xl flex flex-col gap-2 text-left font-sans text-xs text-espresso overflow-hidden"
                          >
                            <div className="flex items-center gap-1.5 text-[#A6695E] font-bold text-[11px] uppercase tracking-wider">
                              <ShieldAlert size={14} className="animate-pulse" />
                              <span>Active Conflict Detected</span>
                            </div>
                            <p className="text-[11px] text-grey leading-relaxed">
                              <strong>Retinol</strong> and <strong>Vitamin C</strong> are scheduled together in AM. We recommend separating them.
                            </p>
                            {conflictResolved ? (
                              <div className="flex items-center gap-2 mt-1 self-start">
                                <div className="w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#8F6F3E] flex items-center justify-center text-[#8F6F3E] shrink-0">
                                  <Check size={10} className="stroke-[3]" />
                                </div>
                                <span className="text-[10.5px] font-bold text-espresso">Retinol moved to PM</span>
                              </div>
                            ) : (
                              <button
                                onClick={() => {
                                  setConflictResolved(true);
                                  setTimeout(() => {
                                    setShowConflictWarning(false);
                                    setShelfProducts(prev => prev.map(p => p.id === '2' ? { ...p, timing: 'PM' } : p));
                                  }, 1200);
                                }}
                                className="py-1.5 px-3 rounded-full text-[10.5px] font-bold transition-all self-start bg-espresso hover:bg-darkest-espresso text-[#FAF7F2]"
                              >
                                Move Retinol to PM
                              </button>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* product task entries checklist */}
                      <div className="space-y-2.5 font-sans">
                        <AnimatePresence initial={false}>
                          {shelfProducts
                            .filter(p => p.timing === 'AM')
                            .map((p) => {
                              const isDone = routineChecks[p.id];
                              return (
                                <motion.div
                                  layout
                                  initial={{ opacity: 0, y: 15 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, x: -15, scale: 0.95 }}
                                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                  key={p.id}
                                  onClick={() => setRoutineChecks(prev => ({ ...prev, [p.id]: !isDone }))}
                                  className={`p-3.5 rounded-2.5xl border flex items-center justify-between cursor-pointer transition-all ${isDone ? 'bg-white border-[#E8E5DC] opacity-75' : 'bg-white border-very-light-grey hover:bg-cream/10'
                                    }`}
                                >
                                  <div className="flex items-center gap-3">
                                    {/* drag dots */}
                                    <div className="text-light-grey text-xs tracking-tighter select-none">::</div>
                                    <div>
                                      <h4 className="text-[12.5px] font-bold text-espresso leading-tight">{p.name}</h4>
                                      <p className="text-[10px] text-grey mt-0.5">{p.brand}</p>
                                    </div>
                                  </div>
                                  <button className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all shrink-0 ${isDone ? 'border-[#8F6F3E] bg-[#FAF7F2] text-[#8F6F3E]' : 'border-light-grey bg-white'}`}>
                                    {isDone && <Check size={11} className="stroke-[3] text-[#8F6F3E]" />}
                                  </button>
                                </motion.div>
                              );
                            })}
                        </AnimatePresence>
                      </div>

                      {/* add step cta */}
                      <button
                        onClick={() => {
                          setShowSearchOverlay(true);
                        }}
                        className="w-full py-3.5 border border-dashed border-light-grey hover:border-espresso text-espresso/70 hover:text-espresso rounded-full flex items-center justify-center gap-1 font-sans text-xs font-bold transition-all"
                      >
                        <Plus size={14} /> Add step
                      </button>
                    </div>
                  )}

                  {/* YOU tab - Profile & Reset options */}
                  {activeTab === 'you' && (
                    <div className="space-y-4">
                      <div className="text-[10px] font-bold text-grey tracking-wider font-sans">your profile</div>

                      <div className="space-y-1">
                        <h2 className="text-[26px] font-display font-medium text-espresso leading-none">{userName || 'Nella'}.</h2>
                        <p className="text-[10.5px] text-grey font-sans font-bold tracking-wider">member since june 2026 · 1 days of glowing</p>
                      </div>

                      {/* At a glance block */}
                      <div className="p-4 bg-cream/20 border border-very-light-grey rounded-2.5xl space-y-2.5">
                        <span className="text-[8.5px] font-bold text-grey uppercase tracking-widest block font-sans">AT A GLANCE</span>
                        <div className="grid grid-cols-3 gap-2 font-sans text-center">
                          <div className="border-r border-very-light-grey">
                            <span className="text-[8px] font-bold text-grey uppercase">TREATMENTS</span>
                            <div className="text-base font-extrabold text-espresso">15</div>
                          </div>
                          <div className="border-r border-very-light-grey">
                            <span className="text-[8px] font-bold text-grey uppercase">PRODUCTS</span>
                            <div className="text-base font-extrabold text-espresso">{shelfProducts.length}</div>
                          </div>
                          <div>
                            <span className="text-[8px] font-bold text-grey uppercase">SPENT</span>
                            <div className="text-base font-extrabold text-espresso">&pound;0</div>
                          </div>
                        </div>
                      </div>

                      {/* structured sections */}
                      <div className="space-y-3 font-sans">
                        {[
                          {
                            title: "MY BEAUTY",
                            items: [
                              { label: "The shelf", val: `${shelfProducts.length} products`, action: () => setActiveTab('shelf') },
                              { label: "Treatment history", val: "15 logged · 0 clinics", action: () => setShowHistory(true) }
                            ]
                          },
                          {
                            title: "PREFERENCES",
                            items: [
                              { label: "Notifications", val: "treatment reminders · daily check-in", action: () => setShowNotifModal(true) }
                            ]
                          },
                          {
                            title: "ACCOUNT",
                            items: [
                              { label: "Privacy & data", val: "what we keep, share, and never share", action: () => { } },
                              { label: "Help & feedback", val: "FAQs · contact us · feature requests", action: () => { } }
                            ]
                          }
                        ].map((sect) => (
                          <div key={sect.title} className="space-y-1.5">
                            <span className="text-[8.5px] font-bold text-deep-gold uppercase tracking-wider block">{sect.title}</span>
                            <div className="space-y-1.5">
                              {sect.items.map((it) => (
                                <div
                                  key={it.label}
                                  onClick={it.action}
                                  className="p-3 bg-white border border-very-light-grey rounded-xl flex justify-between items-center cursor-pointer hover:bg-cream/5"
                                >
                                  <div>
                                    <h4 className="text-[11.5px] font-bold text-espresso leading-tight">{it.label}</h4>
                                    <p className="text-[9px] text-grey leading-tight mt-0.5">{it.val}</p>
                                  </div>
                                  <ChevronRight size={14} className="text-light-grey" />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* RESET INTERACTIVE APP TOUR OR LOGIN AGAIN SPLASH */}
                      <div className="pt-2 font-sans">
                        <button
                          onClick={() => {
                            setOnboardingStep('splash');
                            setUserName('');
                            setShelfProducts([
                              { id: '1', name: 'Everglow Sunsafe Spf 50+ Pa+++ Matte Look Sunscreen', brand: 'Everglow', category: 'Sunscreen', size: '30ml', timing: 'AM', verdict: 'Just trying it', status: 'active' },
                              { id: '2', name: 'Exfomar', brand: 'Sostenica', category: 'Exfoliant', size: '50ml', timing: 'AM', verdict: 'Just trying it', status: 'active' }
                            ]);
                            setRoutineChecks({});
                          }}
                          className="w-full py-3 border border-deep-rose/30 bg-deep-rose/5 text-deep-rose text-xs font-bold rounded-full flex items-center justify-center gap-1 hover:bg-deep-rose/10 active:scale-[0.98] transition-all"
                        >
                          🔄 Reset App & Onboarding
                        </button>
                      </div>
                    </div>
                  )}

                </div>

                {/* Core App Bottom Tab Bar */}
                {!compact && (
                  <div className="bg-[#FAF7F2] border-t border-very-light-grey px-4 pt-1.5 pb-4 flex justify-between items-center z-20 shrink-0 select-none">
                    {[
                      { id: 'today', icon: <Heart size={16} className={`stroke-[2.5] ${activeTab === 'today' ? 'fill-espresso/10' : ''}`} />, label: 'today' },
                      { id: 'shelf', icon: <div className="text-sm">🗄️</div>, label: 'shelf' },
                      { id: 'routine', icon: <ClipboardList size={16} className="stroke-[2.5]" />, label: 'routine' },
                      { id: 'you', icon: <User size={16} className="stroke-[2.5]" />, label: 'you' }
                    ].map((subtab) => {
                      const isSelected = activeTab === subtab.id;
                      return (
                        <button
                          key={subtab.id}
                          onClick={() => {
                            if (lockedTab) return;
                            setActiveTab(subtab.id as any);
                            setShowInsights(false);
                            setShowHistory(false);
                            setShowCheckIn(false);
                          }}
                          className={`flex flex-col items-center gap-1.5 py-1 px-3.5 rounded-xl transition-all duration-200 ${lockedTab ? 'cursor-default pointer-events-none' : 'hover:scale-110 active:scale-95 cursor-pointer'
                            } ${isSelected ? 'text-espresso font-black bg-espresso/[0.04]' : 'text-grey hover:text-espresso'
                            }`}
                        >
                          {subtab.icon}
                          <span className="text-[9px] font-bold uppercase tracking-wider">{subtab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}

              </motion.div>
            )}
          </AnimatePresence>

          {/* Product Search & Add Overlay */}
          <AnimatePresence>
            {showSearchOverlay && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                className="absolute inset-0 bg-[#FAF7F2] z-50 flex flex-col justify-between px-5 pb-5 pt-12"
              >
                <div className="flex-1 flex flex-col space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <button onClick={() => setShowSearchOverlay(false)} className="text-espresso p-1">
                      <ArrowLeft size={16} />
                    </button>
                    <span className="text-[11px] font-bold text-grey uppercase tracking-wider font-sans">Search Products</span>
                    <div className="w-5 h-5" />
                  </div>

                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-grey" size={13} />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="search products (e.g. CeraVe)..."
                      className="w-full pl-9 pr-4 py-2.5 bg-warm-ivory border border-very-light-grey rounded-full font-sans text-[11.5px] text-espresso focus:outline-none"
                    />
                  </div>

                  {/* filters inside search */}
                  <div className="flex gap-1.5 text-[10.5px] font-bold font-sans">
                    {['All', 'Moisturisers', 'Cleansers', 'Exfoliants'].map((cat: any) => (
                      <span
                        key={cat}
                        onClick={() => setSearchCategory(cat)}
                        className={`px-3 py-1.5 border rounded-full cursor-pointer shrink-0 ${searchCategory === cat ? 'bg-[#1F1410] border-transparent text-[#FAF7F2]' : 'bg-transparent border-very-light-grey text-grey font-semibold'}`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-2 max-h-[340px]" style={{ scrollbarWidth: 'none' }}>
                    {mockAvailableProducts
                      .filter(p => !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()))
                      .filter(p => searchCategory === 'All' || p.category === searchCategory)
                      .map((p, idx) => (
                        <div
                          key={idx}
                          onClick={() => setConfiguringProduct(p)}
                          className="p-3 bg-white/60 border border-very-light-grey rounded-2xl flex justify-between items-center cursor-pointer hover:bg-cream/15 font-sans"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-cream/30 flex items-center justify-center text-xs">🧴</div>
                            <div>
                              <h4 className="text-[11.5px] font-bold text-espresso leading-tight">{p.name}</h4>
                              <p className="text-[9px] text-grey mt-0.5">{p.brand}</p>
                            </div>
                          </div>
                          <span className="text-deep-gold font-bold text-sm">+</span>
                        </div>
                      ))}
                  </div>
                </div>

                <button
                  onClick={() => setShowSearchOverlay(false)}
                  className="w-full py-3.5 bg-darkest-espresso hover:bg-espresso text-[#FAF7F2] rounded-full font-bold font-sans text-xs"
                >
                  Done
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Product configuration sub-overlay */}
          <AnimatePresence>
            {configuringProduct && (
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                className="absolute inset-0 bg-[#FAF7F2] z-55 flex flex-col justify-between px-5 pb-5 pt-12 text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <button onClick={() => setConfiguringProduct(null)} className="text-espresso p-1">
                      <ArrowLeft size={16} />
                    </button>
                    <span className="text-[11px] font-bold text-grey uppercase tracking-wider font-sans">add to your shelf</span>
                    <div className="w-5 h-5" />
                  </div>

                  <div className="text-center py-2 relative">
                    <span className="text-[10px] font-bold text-deep-gold uppercase tracking-wider block font-sans">{configuringProduct.brand}</span>
                    <h3 className="text-lg font-display font-bold text-espresso tracking-tight mt-0.5 leading-snug">{configuringProduct.name}</h3>
                    <p className="text-[10px] text-grey uppercase tracking-wider block mt-1 font-sans">{configuringProduct.category} · 30ml</p>

                    <div className="w-20 h-20 bg-cream/30 rounded-full flex items-center justify-center text-3xl mx-auto my-4 shadow-sm border border-cream">
                      🧴
                    </div>
                  </div>

                  {/* Options AM/PM */}
                  <div className="space-y-3 font-sans">
                    <div className="space-y-1">
                      <span className="text-[8.5px] font-bold text-grey uppercase tracking-widest block">ROUTINE</span>
                      <h4 className="text-[12.5px] font-bold text-espresso">When do you use it?</h4>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-[11px] font-bold">
                      <button className="py-2.5 rounded-full border border-deep-gold/40 bg-cream font-bold text-espresso text-center">☀ AM</button>
                      <button className="py-2.5 rounded-full border border-very-light-grey text-grey text-center">🌙 PM</button>
                      <button className="py-2.5 rounded-full border border-very-light-grey text-grey text-center">∞ Both</button>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[8.5px] font-bold text-grey uppercase tracking-widest block">VERDICT</span>
                      <h4 className="text-[12.5px] font-bold text-espresso">How's it working for you?</h4>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-bold">
                      <button className="py-2.5 rounded-full border border-very-light-grey text-grey text-center">✨ Holy grail</button>
                      <button className="py-2.5 rounded-full border border-deep-gold/40 bg-cream font-bold text-espresso text-center">🔄 Just trying it</button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const newProduct = {
                      id: String(shelfProducts.length + 1),
                      name: configuringProduct.name,
                      brand: configuringProduct.brand,
                      category: configuringProduct.category,
                      size: '30ml',
                      timing: 'AM',
                      verdict: 'Just trying it',
                      status: 'active'
                    };
                    setShelfProducts(prev => [...prev, newProduct]);
                    setConfiguringProduct(null);
                    setShowSearchOverlay(false);
                  }}
                  className="w-full py-4 bg-espresso hover:bg-darkest-espresso text-white rounded-full font-bold font-sans text-xs flex items-center justify-center gap-1 shadow-lg"
                >
                  Add to my shelf &rarr;
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-espresso/15 blur-md rounded-full pointer-events-none z-0"></div>
    </div>
  );
}
