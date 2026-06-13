"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CtaSection from '../../components/CtaSection';

export default function WhyNellaClient() {
  const [isCleared, setIsCleared] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <motion.div
      animate={{
        backgroundColor: isCleared ? "#FFFFFF" : "#F5EDE0",
        color: "#1F1410"
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="w-full relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!isCleared ? (
          <motion.div
            key="chaos"
            exit={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center pt-16 pb-32 px-6 relative z-10"
          >
            {/* Ambient noise background */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none mix-blend-multiply"></div>

            <div className="max-w-2xl text-center space-y-3 mb-6 md:mb-8 relative z-20">
              <div className="inline-flex items-center gap-1.5 justify-center mb-3">
                <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                <span className="font-display italic text-[12px] text-[#8F6F3E]">the problem</span>
                <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
              </div>
              <h1 className="font-display font-[600] text-[36px] md:text-[48px] leading-tight tracking-tight text-espresso">
                The end of the beauty drawer.
              </h1>
              <p className="text-[16px] md:text-[18px] font-sans text-grey max-w-md mx-auto">
                it starts with a shelf you can barely close. the treatments you vaguely remember paying for.
              </p>
            </div>

            {/* Interactive Shelf */}
            <div className="relative w-full max-w-4xl h-[180px] md:h-[200px] flex flex-col items-center justify-end mb-8 md:mb-10 z-20">

              {/* Status Text Box */}
              <div className="absolute top-0 w-full text-center h-12 flex items-center justify-center px-4">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeTooltip || "default"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`font-sans text-[15px] md:text-[18px] ${activeTooltip ? 'text-[#8F6F3E] font-medium' : 'text-grey italic'}`}
                  >
                    {activeTooltip || "Hover or tap on an item to inspect the damage."}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* The Shelf Line and Bottles */}
              <div className="w-full flex items-end justify-center gap-2 sm:gap-6 md:gap-10 border-b border-[#1F1410]/20 pb-1 px-2 relative z-10">
                <Bottle1 onHover={() => setActiveTooltip("expiring in 2 months. 40% left. cost £80.")} onLeave={() => setActiveTooltip(null)} />
                <Bottle2 onHover={() => setActiveTooltip("saw it on TikTok. ruined your barrier last tuesday.")} onLeave={() => setActiveTooltip(null)} />
                <Bottle3 onHover={() => setActiveTooltip("wait, when did I buy this?")} onLeave={() => setActiveTooltip(null)} />
                <Bottle4 onHover={() => setActiveTooltip("used once. burned. never again.")} onLeave={() => setActiveTooltip(null)} />
                <Bottle5 onHover={() => setActiveTooltip("the clinic said you needed this. did you?")} onLeave={() => setActiveTooltip(null)} />
              </div>
            </div>

            {/* Clear CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCleared(true)}
              className="relative z-20 px-8 py-3.5 rounded-full bg-[#1F1410] text-[#FAF7F2] font-sans font-medium text-[15px] tracking-wide shadow-md hover:shadow-lg transition-shadow"
            >
              Clear the Noise
            </motion.button>

          </motion.div>
        ) : (
          <motion.div
            key="clarity"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="w-full flex flex-col"
          >
            <div className="min-h-screen flex flex-col items-center px-6 pt-16 pb-32">
              <div className="max-w-2xl mx-auto w-full space-y-10">

                {/* Transition Statement */}
                <div className="space-y-4 text-left pb-8">
                  <h2 className="font-display font-[600] text-[32px] md:text-[40px] text-[#1F1410] leading-tight tracking-tight">
                    The beauty industry thrives on you losing the thread.
                  </h2>
                  <p className="text-[20px] md:text-[24px] font-display italic text-[#8F6F3E]">
                    nella is the thread.
                  </p>
                </div>

                {/* Rest of Manifesto */}
                <div className="space-y-8 text-left">
                  <p className="text-[16px] md:text-[18px] font-sans leading-relaxed text-[#1F1410]/70">
                    it is not a marketplace. it is not an algorithm trying to sell you a moisturizer you do not need. it is not social media.
                  </p>

                  <div className="p-8 bg-white border border-[#E8E5DC] rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                      <p className="text-[16px] md:text-[18px] font-sans font-semibold mb-3 text-[#1F1410] group-hover:text-[#8F6F3E] transition-colors">
                        it is a closed, quiet system for the things you put on and in your body.
                      </p>
                      <p className="text-[15px] md:text-[16px] font-sans leading-relaxed text-[#1F1410]/70">
                        it remembers the date you had botox. it knows your retinol conflicts with your new peel. it tracks the £450 you spent on lasers so you can decide if it was actually worth it.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 pt-4 group cursor-default">
                    <p className="text-[16px] md:text-[18px] font-sans leading-relaxed font-medium text-[#1F1410]">
                      we built this because the mental load of modern beauty is exhausting.
                    </p>
                    <p className="text-[16px] md:text-[18px] font-sans leading-relaxed text-[#1F1410]/70">
                      because the women who take their skin seriously deserve a tool that takes them seriously.
                    </p>
                    <div className="relative pl-6 pt-4 mt-2">
                      <div className="absolute left-0 top-6 bottom-0 w-1 bg-[#E8E5DC] group-hover:bg-gradient-to-b group-hover:from-[#DEC68B] group-hover:to-[#8F6F3E] transition-colors duration-500 rounded-full"></div>
                      <h3 className="font-display font-[600] text-[28px] md:text-[36px] leading-tight text-[#1F1410] group-hover:translate-x-2 transition-transform duration-500">
                        because your beauty is yours.<br />
                        <span className="text-[#8F6F3E]">and it's time you owned the data.</span>
                      </h3>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA Section */}
            <div className="w-full bg-[#FAF7F2]">
              <CtaSection
                title="Your beauty, one clean thread."
                subtitle="free to use. £4.99 a month for pro."
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// -------------------------------------------------------------
// Interactive Bottle Components
// -------------------------------------------------------------

function Bottle1({ onHover, onLeave }: any) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      onMouseEnter={onHover} onMouseLeave={onLeave} onTouchStart={onHover}
      className="w-10 sm:w-14 h-28 sm:h-32 rounded-t-full rounded-b-md bg-white/5 border border-white/20 backdrop-blur-md cursor-pointer relative shadow-xl transition-colors hover:bg-white/10"
    >
      {/* Liquid inside */}
      <div className="absolute bottom-0 w-full h-[40%] bg-[#C4A067]/30 rounded-b-md"></div>
    </motion.div>
  )
}

function Bottle2({ onHover, onLeave }: any) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      onMouseEnter={onHover} onMouseLeave={onLeave} onTouchStart={onHover}
      className="w-16 sm:w-20 h-14 sm:h-16 rounded-3xl bg-[#8C5249]/30 border border-[#8C5249]/50 backdrop-blur-md cursor-pointer relative flex items-center justify-center shadow-xl transition-colors hover:bg-[#8C5249]/50"
    >
      <div className="w-[80%] h-1 bg-white/20 rounded-full"></div>
    </motion.div>
  )
}

function Bottle3({ onHover, onLeave }: any) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      onMouseEnter={onHover} onMouseLeave={onLeave} onTouchStart={onHover}
      className="w-10 sm:w-12 h-20 sm:h-24 rounded-lg bg-[#3A2418] border border-[#8F6F3E]/40 cursor-pointer relative shadow-xl transition-colors hover:border-[#8F6F3E]/80"
    >
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1F1410] border border-[#8F6F3E]/50 rounded-t-sm"></div>
      <div className="absolute top-4 w-full h-[60%] border-t flex items-center justify-center">
        <div className="w-4 h-[2px] bg-white/20"></div>
      </div>
    </motion.div>
  )
}

function Bottle4({ onHover, onLeave }: any) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      onMouseEnter={onHover} onMouseLeave={onLeave} onTouchStart={onHover}
      className="w-8 sm:w-10 h-16 sm:h-20 rounded-b-xl rounded-t-sm bg-orange-900/20 border border-orange-500/30 cursor-pointer relative shadow-xl flex flex-col items-center transition-colors hover:bg-orange-900/40"
    >
      <div className="absolute -top-4 w-3 h-5 rounded-t-full bg-white/20"></div>
      <div className="absolute bottom-2 w-[80%] h-8 bg-white/5 rounded-md border border-white/10"></div>
    </motion.div>
  )
}

function Bottle5({ onHover, onLeave }: any) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      onMouseEnter={onHover} onMouseLeave={onLeave} onTouchStart={onHover}
      className="w-14 sm:w-16 h-24 sm:h-28 rounded-sm bg-zinc-800/80 border border-zinc-500/50 cursor-pointer relative shadow-xl flex items-center justify-center transition-colors hover:bg-zinc-700/80"
    >
      <div className="w-1/2 h-1/2 border border-white/10 rounded-sm"></div>
    </motion.div>
  )
}
