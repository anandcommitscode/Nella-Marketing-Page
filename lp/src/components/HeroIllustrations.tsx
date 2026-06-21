"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Check, Shield, Lock, Newspaper, Sparkles, HelpCircle, FileText, Download, Calendar, Coins } from 'lucide-react';

// 1. Stories Main Page Illustration: The Skincare Science Drawer
export function StoriesHeroIllustration() {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto flex items-center justify-center p-6 group">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DEC68B_1px,transparent_1px),linear-gradient(to_bottom,#DEC68B_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10 pointer-events-none"></div>

      {/* Floating Sparkles */}
      <motion.div 
        animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-12 text-[#C4A067]"
      >
        <Sparkles size={18} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-10 right-14 text-[#8F6F3E]"
      >
        <Sparkles size={16} />
      </motion.div>

      {/* Glassmorphic Cabinet Shelf */}
      <div className="relative w-full h-[230px] mt-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-lg flex flex-col justify-end p-4">
        {/* Shelf Base line */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#DEC68B] via-[#C4A067] to-[#8F6F3E] rounded-b-2xl"></div>

        {/* Skincare Bottles */}
        <div className="flex justify-around items-end w-full h-full pb-4">
          {/* Retinol Bottle */}
          <motion.div 
            whileHover={{ y: -8 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
            className="flex flex-col items-center relative cursor-pointer z-20"
          >
            <div className="w-12 h-24 bg-[#8F6F3E] rounded-t-lg rounded-b-md relative shadow-md flex flex-col justify-between p-2 border border-[#3A2418]/20">
              <div className="w-8 h-2.5 bg-[#DEC68B] mx-auto rounded-sm"></div>
              <div className="w-full bg-[#E8D5CE]/20 h-7 rounded flex items-center justify-center">
                <span className="text-[8px] text-[#FAF7F2] font-semibold tracking-wider font-sans">RET</span>
              </div>
              <div className="h-2 w-full bg-[#DEC68B]/40 rounded-xs"></div>
            </div>
            <span className="text-[10px] text-[#3A2418] font-bold mt-2">retinol</span>
          </motion.div>

          {/* Vitamin C Bottle */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="flex flex-col items-center relative z-20"
          >
            <div className="w-11 h-21 bg-[#C4A067] rounded-t-lg rounded-b-md relative shadow-md flex flex-col justify-between p-2 border border-[#3A2418]/20">
              <div className="w-7 h-2.5 bg-[#E8D5CE] mx-auto rounded-sm"></div>
              <div className="w-full bg-[#E8D5CE]/30 h-6 rounded flex items-center justify-center">
                <span className="text-[8px] text-[#FAF7F2] font-semibold tracking-wider font-sans">VIT C</span>
              </div>
              <div className="h-2 w-full bg-[#E8D5CE]/50 rounded-xs"></div>
            </div>
            <span className="text-[10px] text-[#3A2418] font-bold mt-2">vitamin c</span>
          </motion.div>

          {/* BHA Bottle */}
          <motion.div 
            whileHover={{ y: -8 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip(!showTooltip)}
            className="flex flex-col items-center relative cursor-pointer z-20"
          >
            <div className="w-10 h-18 bg-[#3A2418] rounded-t-lg rounded-b-md relative shadow-md flex flex-col justify-between p-1.5 border border-[#FAF7F2]/10">
              <div className="w-6 h-2 bg-[#C4A067] mx-auto rounded-sm"></div>
              <div className="w-full bg-[#E8D5CE]/10 h-5 rounded flex items-center justify-center">
                <span className="text-[8px] text-[#FAF7F2] font-semibold tracking-wider font-sans">BHA</span>
              </div>
              <div className="h-1.5 w-full bg-[#C4A067]/30 rounded-xs"></div>
            </div>
            <span className="text-[10px] text-[#3A2418] font-bold mt-2">bha</span>
          </motion.div>
        </div>

        {/* Animated Conflict Engine Visualization (Paths & Conflict Warning) */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <svg className="w-full h-full" viewBox="0 0 450 230">
            {/* Dashed conflict line between Retinol and BHA */}
            <motion.path 
              d="M 100,105 Q 225,40 350,105" 
              fill="none" 
              stroke="#DEC68B" 
              strokeWidth="2.5" 
              strokeDasharray="6,4"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -20 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
            {/* Warning pulse icon in the middle */}
            <foreignObject x="209" y="35" width="40" height="40" className="pointer-events-auto cursor-pointer">
              <motion.div 
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => setShowTooltip(!showTooltip)}
                animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-8 h-8 rounded-full bg-[#3A2418] border-2 border-[#C4A067] flex items-center justify-center shadow-lg hover:border-amber-400 transition-colors"
              >
                <span className="text-[10px] text-[#C4A067] font-bold">!</span>
              </motion.div>
            </foreignObject>
          </svg>
        </div>
      </div>

      {/* Interactive Tooltip Card */}
      <div
        className={`absolute bottom-6 left-6 right-6 bg-[#3A2418]/95 backdrop-blur-md border border-[#C4A067]/40 rounded-2xl p-4 shadow-2xl z-30 pointer-events-none transition-all duration-300 ${
          showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex items-start gap-2.5">
          <div className="w-5 h-5 rounded-full bg-[#C4A067]/20 border border-[#C4A067] flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[10px] text-[#DEC68B] font-bold">!</span>
          </div>
          <div>
            <h4 className="font-display font-semibold text-[12px] text-[#FAF7F2] tracking-wide">
              Ingredient Conflict Detected
            </h4>
            <p className="text-[10px] text-[#E8D5CE] mt-1 leading-relaxed font-sans">
              Retinol & BHA (salicylic acid) should not be used together in the same routine to avoid skin barrier irritation. Nella automatically schedules conflicting ingredients to safe, alternating days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Article One Illustration: Notes App vs. Structured Intelligence (Left: Chaotic notes, Right: Clean routine check)
export function NotesAppFailingIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto flex items-center justify-center p-4">
      {/* Chaotic Notes Sheet (Left/Behind) */}
      <motion.div 
        initial={{ rotate: -8, x: -30, y: 15 }}
        animate={{ rotate: [-8, -6, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-6 w-[220px] bg-[#FAF8F0] border-2 border-[#EAE6D8] rounded-2xl p-5 shadow-md z-0 text-left font-mono text-[9.5px] text-[#5C5340] select-none"
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#EAE6D8] mb-2.5">
          <span className="font-sans font-bold text-[10px] text-[#3A2418]">Notes - Skincare</span>
          <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
        </div>
        <p className="line-through text-red-500/60 mb-1.5">Botox: 20 units? (clinic X)</p>
        <p className="mb-1.5 text-orange-600/80">Retinol schedule: Mon & Wed only??</p>
        <p className="line-through text-red-500/60 mb-1.5">Vitamin C morning routine</p>
        <p className="text-gray-400">Wait... is salicylic acid ok after facial?</p>
        <p className="text-[13px] font-bold text-red-500/80 mt-4 rotate-6 text-center border border-dashed border-red-400/40 p-1">CONFLICT??</p>
      </motion.div>

      {/* Structured Nella Widget (Right/Front) */}
      <motion.div 
        initial={{ rotate: 3, x: 40, y: -5 }}
        whileHover={{ scale: 1.03 }}
        className="relative z-10 w-[240px] bg-white border border-[#E8E5DC] rounded-[24px] p-6 shadow-xl text-left"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6.5 h-6.5 rounded-full bg-[#FAF7F2] border border-[#DEC68B]/60 flex items-center justify-center">
            <span className="text-[11px] font-semibold text-[#8F6F3E]">n</span>
          </div>
          <span className="text-[10.5px] font-bold text-[#3A2418] uppercase tracking-wider">nella intelligent check</span>
        </div>

        {/* Active Recovery Window */}
        <div className="bg-[#FAF7F2] border border-[#E8E5DC] rounded-xl p-3.5 mb-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-[#8F6F3E] uppercase">MICRONEEDLING RECOVERY</span>
            <span className="text-[9px] text-[#FAF7F2] bg-[#8F6F3E] px-1.5 py-0.5 rounded-full">Day 3/7</span>
          </div>
          <div className="w-full bg-[#E8E5DC] h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#C4A067] h-full w-[42%]"></div>
          </div>
        </div>

        {/* Structured Routine Checklist */}
        <div className="space-y-2.5 text-[10.5px]">
          <div className="flex gap-2 items-center text-grey">
            <div className="w-4 h-4 rounded bg-[#FAF7F2] border border-[#E8E5DC] flex items-center justify-center shrink-0">
              <Check size={11} className="text-[#8F6F3E] stroke-[3.5]" />
            </div>
            <span>Double Cleanse</span>
          </div>
          
          <div className="flex gap-2 items-center text-grey opacity-50 relative line-through">
            <div className="w-4 h-4 rounded bg-[#FAF7F2] border border-dashed border-[#E8E5DC] flex items-center justify-center shrink-0">
              <span className="text-[8px] text-[#8F6F3E]">𐄂</span>
            </div>
            <span>Retinol Serum</span>
            <span className="absolute right-0 text-[8.5px] text-[#8F6F3E] font-bold uppercase tracking-wider bg-[#E8D5CE] px-1.5 rounded">Paused</span>
          </div>

          <div className="flex gap-2 items-center text-grey">
            <div className="w-4 h-4 rounded bg-[#FAF7F2] border border-[#E8E5DC] flex items-center justify-center shrink-0">
              <Check size={11} className="text-[#8F6F3E] stroke-[3.5]" />
            </div>
            <span>Hyaluronic Acid & Peptide</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// 3. Article Two Illustration: Subscription Model / Zero Ads / Direct Support
export function SubscriptionDecisionIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto flex items-center justify-center p-6">
      {/* Brass Token / Coin Animation */}
      <motion.div 
        animate={{ y: [-50, 24, 24, -50], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-gradient-to-br from-[#DEC68B] via-[#C4A067] to-[#8F6F3E] border-2 border-[#FAF7F2] shadow-md flex items-center justify-center z-10"
      >
        <span className="text-[13px] font-bold text-[#FAF7F2]">£</span>
      </motion.div>

      {/* Subscription Card Container */}
      <motion.div 
        whileHover={{ y: -4 }}
        className="relative z-20 w-[260px] bg-white border-2 border-[#8F6F3E] rounded-[28px] p-6 shadow-xl text-left"
      >
        <div className="flex justify-between items-center mb-4">
          <span className="text-[9.5px] font-bold text-[#8F6F3E] uppercase tracking-widest">nella subscription card</span>
          <Shield size={18} className="text-[#8F6F3E]" />
        </div>

        {/* Slot cutout graphic */}
        <div className="w-full h-3.5 bg-[#3A2418] rounded-full mb-6 shadow-inner border border-[#8F6F3E]/20 relative overflow-hidden">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-10 bg-black/60 blur-xs"></div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-end border-b border-[#FAF7F2] pb-2.5">
            <div>
              <p className="text-[10px] text-grey">Direct Support</p>
              <h4 className="font-display font-semibold text-[17px] text-espresso">£4.99/mo</h4>
            </div>
            <span className="text-[9.5px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">ACTIVE</span>
          </div>

          <div className="space-y-2 text-[10px] text-grey font-sans">
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4 rounded-full bg-[#E8D5CE]/30 flex items-center justify-center text-[#8F6F3E]">✓</div>
              <span>100% Ad-Free Application</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4 rounded-full bg-[#E8D5CE]/30 flex items-center justify-center text-[#8F6F3E]">✓</div>
              <span>No Skincare Brand Affiliations</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-4 h-4 rounded-full bg-[#E8D5CE]/30 flex items-center justify-center text-[#8F6F3E]">✓</div>
              <span>Privacy Encrypted at Rest</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// 4. Article Three Illustration: Ten-Step Routine Myth vs. Simplification
export function TenStepMythIllustration() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto flex items-center justify-center p-4">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="w-full bg-[#FAF7F2] border border-[#E8E5DC] rounded-[32px] p-8 shadow-xl text-left relative"
      >
        {/* Header: Title and Dot */}
        <div className="flex justify-between items-center pb-4 border-b border-[#E8E5DC] mb-6">
          <span className="text-[13px] font-bold text-[#8F6F3E] uppercase tracking-wider font-display">3-step essentials</span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#C4A067]"></span>
        </div>

        {/* Step List */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E8E5DC] flex items-center justify-center text-[15px] font-bold text-[#8F6F3E]">1</div>
            <div>
              <p className="text-[15px] font-semibold text-espresso">Cleanse</p>
              <p className="text-[12.5px] text-grey leading-tight">Gentle wash</p>
            </div>
          </div>

          <div className="flex items-center gap-4 relative">
            <div className="w-10 h-10 rounded-full bg-[#E8D5CE]/30 border-2 border-[#8F6F3E] flex items-center justify-center text-[15px] font-bold text-[#8F6F3E]">2</div>
            <div>
              <p className="text-[15px] font-semibold text-espresso">Treat</p>
              <p className="text-[12.5px] text-[#8F6F3E] leading-tight">Active concentrate</p>
            </div>
            {/* Glowing pulse ring around active treatment step */}
            <span className="absolute -left-1 w-12 h-12 rounded-full border border-[#8F6F3E] animate-ping opacity-20"></span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white border border-[#E8E5DC] flex items-center justify-center text-[15px] font-bold text-[#8F6F3E]">3</div>
            <div>
              <p className="text-[15px] font-semibold text-espresso">Protect</p>
              <p className="text-[12.5px] text-grey leading-tight">Barrier cream & SPF</p>
            </div>
          </div>
        </div>

        {/* Skin Barrier Health Rating */}
        <div className="mt-8 pt-4 border-t border-[#E8E5DC] flex justify-between items-center text-[13px]">
          <span className="text-grey font-sans">Barrier Health</span>
          <span className="font-bold text-[#8F6F3E] tracking-wider uppercase bg-white border border-[#E8E5DC] px-3.5 py-1.5 rounded-full text-[10.5px]">CALM & STRONG</span>
        </div>
      </motion.div>
    </div>
  );
}

// 5. About Story Illustration: The Winding Golden Thread Timeline
export function GoldenThreadIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto flex items-center justify-center p-6">
      {/* Decorative timeline paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 450 330">
        {/* Winding Golden Thread Path */}
        <motion.path 
          d="M 60,250 Q 110,90 225,180 T 390,70" 
          fill="none" 
          stroke="#C4A067" 
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        {/* Dash overlay mapping cycle logic path */}
        <motion.path 
          d="M 60,250 Q 110,90 225,180 T 390,70" 
          fill="none" 
          stroke="#FAF7F2" 
          strokeWidth="1.5" 
          strokeDasharray="4,4"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -20 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </svg>

      {/* Floating milestones */}
      {/* 1. The Notes App Start */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute left-6 bottom-10 w-[120px] bg-white border border-[#E8E5DC] rounded-xl p-2.5 shadow-md text-left"
      >
        <span className="text-[8px] uppercase font-bold text-amber-600 block">Start</span>
        <h5 className="text-[10.5px] font-bold text-espresso leading-tight">notes app chaos</h5>
        <div className="w-full bg-[#E8D5CE] h-1.5 rounded mt-2"></div>
      </motion.div>

      {/* 2. Mapping recovery timelines */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute left-[150px] top-12 w-[130px] bg-white border border-[#E8E5DC] rounded-xl p-3 shadow-md text-left"
      >
        <span className="text-[8px] uppercase font-bold text-[#8F6F3E] block">Phase 2</span>
        <h5 className="text-[10.5px] font-bold text-espresso leading-tight">mapping 50+ treatments</h5>
        <div className="flex gap-1.5 mt-2">
          <div className="w-3 h-3 rounded-full bg-[#DEC68B]"></div>
          <div className="w-3 h-3 rounded-full bg-[#C4A067]"></div>
          <div className="w-3 h-3 rounded-full bg-[#8F6F3E]"></div>
        </div>
      </motion.div>

      {/* 3. Nella App Launch */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute right-8 top-16 w-[140px] bg-[#3A2418] border border-[#8F6F3E] rounded-xl p-3.5 shadow-lg text-left text-[#FAF7F2]"
      >
        <span className="text-[8px] uppercase font-bold text-[#C4A067] block">Built</span>
        <h5 className="text-[10.5px] font-bold leading-tight">nella digital skin lab</h5>
        <div className="flex items-center gap-1 mt-2 text-[9px] text-[#FAF7F2]/80">
          <Check size={9} className="text-[#C4A067] stroke-[3]" />
          <span>Routine solved.</span>
        </div>
      </motion.div>
    </div>
  );
}

// 6. Privacy Principles Illustration: Multi-layered Secure Vault
export function PrivacyPrinciplesIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto flex items-center justify-center p-6">
      {/* Floating security rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="w-[220px] h-[220px] rounded-full border border-dashed border-[#8F6F3E]/20 flex items-center justify-center"
        >
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-[170px] h-[170px] rounded-full border border-dashed border-[#C4A067]/40 flex items-center justify-center"
          ></motion.div>
        </motion.div>
      </div>

      {/* Secure Vault Core Card */}
      <motion.div 
        whileHover={{ scale: 1.03 }}
        className="relative z-10 w-[220px] bg-white border border-[#E8E5DC] rounded-[28px] p-6 shadow-2xl text-center flex flex-col items-center"
      >
        {/* Shield Icon Badge */}
        <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#DEC68B] flex items-center justify-center text-[#8F6F3E] mb-3 relative">
          <Shield size={24} className="stroke-[2]" />
          {/* Heartbeat pulse warning */}
          <span className="absolute inset-0 rounded-full border border-[#DEC68B] animate-ping opacity-30"></span>
        </div>

        <h4 className="font-display font-semibold text-[16px] text-espresso mb-1">Privacy Engine</h4>
        <p className="text-[9.5px] text-[#8F6F3E] font-mono tracking-widest uppercase mb-4">row-level security</p>

        {/* Interactive locks indicators */}
        <div className="w-full space-y-2.5">
          <div className="flex items-center justify-between bg-[#FAF7F2] border border-[#E8E5DC] rounded-xl px-3.5 py-2 text-[10px]">
            <span className="text-grey">treatment logs</span>
            <Lock size={11} className="text-[#8F6F3E]" />
          </div>
          <div className="flex items-center justify-between bg-[#FAF7F2] border border-[#E8E5DC] rounded-xl px-3.5 py-2 text-[10px]">
            <span className="text-grey">personal routine</span>
            <Lock size={11} className="text-[#8F6F3E]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// 7. Press Room Illustration: The Media Stack & Press Kit
export function PressRoomIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto flex items-center justify-center p-6">
      {/* Behind/Underlying newspaper stack */}
      <motion.div 
        initial={{ rotate: -5, x: -20, y: 15 }}
        animate={{ rotate: [-5, -3, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 w-[200px] bg-white border border-[#E8E5DC] rounded-2xl p-5 shadow-md text-left z-0"
      >
        <Newspaper size={18} className="text-[#C4A067] mb-2.5" />
        <div className="h-2.5 w-3/4 bg-[#3A2418]/10 rounded mb-1.5"></div>
        <div className="h-2 w-full bg-[#3A2418]/5 rounded mb-1.5"></div>
        <div className="h-2 w-5/6 bg-[#3A2418]/5 rounded"></div>
      </motion.div>

      {/* Front/Featured Press Kit Card */}
      <motion.div 
        whileHover={{ scale: 1.04, y: -4 }}
        className="relative z-10 w-[220px] bg-white border-2 border-[#8F6F3E] rounded-[24px] p-6 shadow-xl text-left"
      >
        <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#DEC68B] flex items-center justify-center text-[#8F6F3E] mb-3.5">
          <FileText size={18} />
        </div>
        
        <h4 className="font-display font-semibold text-[15px] text-espresso mb-1">Nella Media kit</h4>
        <p className="text-[10px] text-grey leading-relaxed mb-4.5">download assets, screenshots, and brand assets.</p>
        
        <button className="w-full py-2.5 bg-[#3A2418] hover:bg-black text-[#FAF7F2] text-[10px] font-bold rounded-lg flex items-center justify-center gap-1.5 transition-colors">
          <Download size={11} />
          <span>download press kit</span>
        </button>
      </motion.div>
    </div>
  );
}

// 8. Pricing Page Illustration: Core vs Pro Tier Comparison
export function PricingHeroIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto flex items-center justify-center p-6">
      {/* Core Tier Card (Behind/Left) */}
      <motion.div 
        initial={{ rotate: -6, x: -35, y: 15 }}
        animate={{ rotate: [-6, -4, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-6 w-[200px] bg-white border border-[#E8E5DC] rounded-2xl p-4.5 shadow-md z-0 text-left"
      >
        <span className="text-[8.5px] font-bold text-grey uppercase tracking-wider block mb-1.5">nella Core</span>
        <h5 className="font-display font-semibold text-[14px] text-espresso mb-3.5">Free Forever</h5>
        
        <div className="space-y-2 text-[9.5px] text-grey">
          <div className="flex gap-1.5 items-center">
            <span className="text-[#8F6F3E]">✓</span>
            <span>Treatment Logging</span>
          </div>
          <div className="flex gap-1.5 items-center">
            <span className="text-[#8F6F3E]">✓</span>
            <span>AM/PM Routine builder</span>
          </div>
          <div className="flex gap-1.5 items-center opacity-30">
            <span>✗</span>
            <span>7-day aftercare guide</span>
          </div>
        </div>
      </motion.div>

      {/* Pro Tier Card (Front/Right) */}
      <motion.div 
        initial={{ rotate: 4, x: 30, y: -5 }}
        whileHover={{ scale: 1.03 }}
        className="relative z-10 w-[230px] bg-[#3A2418] border-2 border-[#DEC68B] rounded-[24px] p-5.5 shadow-xl text-left text-white"
      >
        <div className="flex justify-between items-center mb-2.5">
          <span className="text-[8.5px] font-bold text-[#DEC68B] uppercase tracking-wider">nella Pro</span>
          <span className="text-[9.5px] font-bold text-[#FAF7F2] bg-[#8F6F3E] px-2.5 py-0.5 rounded-full">RECOMMENDED</span>
        </div>
        
        <h5 className="font-display font-semibold text-[17px] text-[#FAF7F2] mb-1">£4.99/mo</h5>
        <p className="text-[9px] text-[#E8D5CE] mb-4.5">Complete intelligence & analytics</p>

        {/* Glow Score Mini Ring */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 mb-3.5">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <motion.path 
                initial={{ strokeDasharray: "0, 100" }}
                animate={{ strokeDasharray: "88, 100" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="text-[#DEC68B]" 
                strokeWidth="3.5" 
                strokeDasharray="88, 100" 
                strokeLinecap="round" 
                stroke="currentColor" 
                fill="none" 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
              />
            </svg>
            <span className="absolute text-[8.5px] font-bold text-[#DEC68B]">88</span>
          </div>
          <div>
            <p className="text-[9.5px] font-semibold text-[#FAF7F2] leading-none">Glow Score Breakdown</p>
            <p className="text-[8.5px] text-[#E8D5CE]/70 mt-1">Optimal barrier health</p>
          </div>
        </div>

        {/* Pro features list */}
        <div className="space-y-2 text-[9.5px] text-[#FAF7F2]/90">
          <div className="flex gap-1.5 items-center">
            <span className="text-[#DEC68B]">✓</span>
            <span>7-day active aftercare guides</span>
          </div>
          <div className="flex gap-1.5 items-center">
            <span className="text-[#DEC68B]">✓</span>
            <span>Advanced conflict scheduling</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// 9. About Main Page Illustration: The Connected Beauty System
export function AboutHeroIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto flex items-center justify-center p-6">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DEC68B_1px,transparent_1px),linear-gradient(to_bottom,#DEC68B_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 pointer-events-none"></div>

      {/* Connected Lines to floating nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 450 330">
        <line x1="225" y1="165" x2="90" y2="80" stroke="#C4A067" strokeWidth="1.5" strokeDasharray="4,4" />
        <line x1="225" y1="165" x2="360" y2="80" stroke="#C4A067" strokeWidth="1.5" strokeDasharray="4,4" />
        <line x1="225" y1="165" x2="80" y2="245" stroke="#C4A067" strokeWidth="1.5" strokeDasharray="4,4" />
        <line x1="225" y1="165" x2="370" y2="245" stroke="#C4A067" strokeWidth="1.5" strokeDasharray="4,4" />
      </svg>

      {/* Central phone/device mockup */}
      <motion.div 
        whileHover={{ scale: 1.03 }}
        className="relative z-10 w-[155px] h-[230px] bg-[#3A2418] border-2 border-[#8F6F3E]/60 rounded-[28px] p-2 flex flex-col justify-between shadow-2xl"
      >
        {/* Notch */}
        <div className="w-18 h-3.5 bg-black/40 mx-auto rounded-full mb-1.5 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#8F6F3E]"></div>
        </div>

        {/* Mock dashboard screen */}
        <div className="flex-1 bg-[#FAF7F2] rounded-2xl p-3 flex flex-col justify-between border border-[#E8E5DC] text-left">
          <div className="flex justify-between items-center border-b border-[#E8E5DC] pb-1.5">
            <span className="text-[10px] font-bold text-[#8F6F3E]">nella.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4A067] animate-pulse"></span>
          </div>

          <div className="my-auto py-2">
            <span className="text-[11px] font-bold text-espresso block leading-tight">your entire beauty life</span>
            <span className="text-[8px] text-grey block mt-1">held in one single place</span>
          </div>

          <div className="w-full bg-[#E8D5CE] py-0.5 rounded flex items-center justify-center">
            <span className="text-[7.5px] text-[#3A2418] font-bold tracking-wider">100% SECURE</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Node 1: Skincare Jar (Actives) */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-12 w-13 h-13 bg-[#FAF7F2] rounded-full border border-[#E8D5CE] shadow-lg flex items-center justify-center"
      >
        <svg className="w-5.5 h-5.5 text-[#8F6F3E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18h12a2 2 0 0 0 2-2V8H4v8a2 2 0 0 0 2 2z" />
          <path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
        </svg>
      </motion.div>

      {/* Floating Node 2: Calendar (Treatments) */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-14 right-14 w-13 h-13 bg-[#FAF7F2] rounded-full border border-[#E8D5CE] shadow-lg flex items-center justify-center text-[#8F6F3E]"
      >
        <Calendar size={20} className="stroke-[2.2]" />
      </motion.div>

      {/* Floating Node 3: Encrypted Lock (Privacy) */}
      <motion.div 
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-14 left-10 w-13 h-13 bg-[#FAF7F2] rounded-full border border-[#E8D5CE] shadow-lg flex items-center justify-center text-[#8F6F3E]"
      >
        <Lock size={18} className="stroke-[2.2]" />
      </motion.div>

      {/* Floating Node 4: Coins (Insights) */}
      <motion.div 
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-12 right-12 w-13 h-13 bg-[#FAF7F2] rounded-full border border-[#E8D5CE] shadow-lg flex items-center justify-center text-[#8F6F3E]"
      >
        <Coins size={20} className="stroke-[2.2]" />
      </motion.div>
    </div>
  );
}

// 10. Waitlist Page Illustration: VIP Ticket & August 2026 Reservation
export function WaitlistHeroIllustration() {
  return (
    <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto flex items-center justify-center p-6">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DEC68B_1px,transparent_1px),linear-gradient(to_bottom,#DEC68B_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10 pointer-events-none"></div>

      {/* Floating Sparkles */}
      <motion.div 
        animate={{ y: [0, -6, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-16 text-[#C4A067]"
      >
        <Sparkles size={18} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 6, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-12 right-20 text-[#8F6F3E]"
      >
        <Sparkles size={16} />
      </motion.div>

      {/* Behind Card: August 2026 Launch Calendar */}
      <motion.div 
        initial={{ rotate: -8, x: -40, y: 15 }}
        animate={{ rotate: [-8, -6, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 w-[190px] bg-white border border-[#E8E5DC] rounded-2xl p-5 shadow-md z-0 text-left"
      >
        <div className="flex justify-between items-center border-b border-[#E8E5DC] pb-2 mb-2">
          <span className="text-[10.5px] font-bold text-espresso font-display">AUGUST 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C4A067]"></span>
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-[7.5px] text-grey">
          <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          <span className="opacity-20">28</span><span className="opacity-20">29</span><span className="opacity-20">30</span><span className="opacity-20">31</span>
          <span className="font-bold text-espresso">1</span><span>2</span><span>3</span>
          <span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
          <span>11</span><span>12</span><span>13</span><span>14</span><span className="bg-[#C4A067] text-white rounded font-bold">15</span><span>16</span><span>17</span>
          <span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span>
        </div>
        <p className="text-[8px] text-[#8F6F3E] font-medium mt-3.5 text-center">nella official launch</p>
      </motion.div>

      {/* Front Card: Premium Membership Ticket */}
      <motion.div 
        initial={{ rotate: 6, x: 30, y: -10 }}
        whileHover={{ scale: 1.04, y: -15 }}
        className="relative z-10 w-[220px] bg-[#3A2418] border-2 border-[#DEC68B] rounded-[24px] p-5.5 shadow-2xl text-left text-white"
      >
        {/* Ticket Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[7.5px] font-bold text-[#DEC68B] uppercase tracking-wider block">Closed Beta Pass</span>
            <h5 className="font-display font-semibold text-[14px] text-[#FAF7F2] leading-tight">nella Member</h5>
          </div>
          <div className="w-6.5 h-6.5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#DEC68B]">
            <Check size={13} strokeWidth={2.5} />
          </div>
        </div>

        {/* Ticket Dotted Divider */}
        <div className="border-t border-dashed border-white/20 my-3 relative">
          <div className="absolute -left-6 -top-1.5 w-3 h-3 bg-[#FAF7F2] rounded-full"></div>
          <div className="absolute -right-6 -top-1.5 w-3 h-3 bg-[#FAF7F2] rounded-full"></div>
        </div>

        {/* Ticket Details */}
        <div className="space-y-2 mt-2">
          <div className="flex justify-between text-[8.5px]">
            <span className="text-[#E8D5CE]">RESERVATION NO.</span>
            <span className="font-mono font-bold text-[#DEC68B]">#2,482</span>
          </div>
          <div className="flex justify-between text-[8.5px]">
            <span className="text-[#E8D5CE]">STATUS</span>
            <span className="font-bold text-emerald-400 flex items-center gap-0.5">
              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping"></span>
              <span>CONFIRMED</span>
            </span>
          </div>
        </div>

        {/* Progress slots bar */}
        <div className="mt-4 pt-2.5 border-t border-white/10">
          <div className="flex justify-between text-[7.5px] text-[#E8D5CE] mb-1">
            <span>BETA CAPACITY</span>
            <span>78%</span>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="w-[78%] h-full bg-[#DEC68B]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}