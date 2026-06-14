'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import CtaSection from '../../../components/CtaSection';

export default function StoryClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="space-y-0">
      <div className="text-left max-w-7xl mx-auto px-6 pt-8 md:pt-12 space-y-8 md:space-y-16">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-grey">
          <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="text-grey font-normal">&gt;</span>
          <Link href="/about" className="hover:text-espresso transition-colors">About</Link>
          <span className="text-grey font-normal">&gt;</span>
          <span className="text-espresso">Story</span>
        </div>
        
        <div className="pt-4 space-y-6 text-center">
          <div className="inline-flex items-center gap-1.5 justify-center">
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
            <span className="font-display italic text-[13px] text-[#8F6F3E]">nella digital skin lab</span>
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none"
          >
            The story behind nella.
          </motion.h1>
        </div>

        <div className="max-w-2xl mx-auto relative pb-12" ref={containerRef}>
          {/* Golden Thread Progress Line */}
          <div className="absolute left-[-20px] md:left-[-40px] top-2 bottom-0 w-[2px] bg-[#E8E5DC] rounded-full hidden sm:block">
            <motion.div 
              className="w-full bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] rounded-full origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-10 text-[14.5px] text-grey font-sans leading-relaxed">
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              it started with a treatment. i'd just had it done. something new, something i'd researched, something i was happy to invest in. i got home, and i didn't know what to do next.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              the aftercare instructions were in my memory, sort of. the product i'd been told to pause was noted, sort of. nothing was in the wrong place. but nothing was in the right place either.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="font-semibold text-espresso text-[20px] py-4 border-l-2 border-[#8F6F3E] pl-6 italic"
            >
              surely there is a better way to do this?
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              i'd spent years working investing in my own beauty and self-care. over time, i started paying attention to what my friends got done, asking more questions at appointments, seeking advice from reddit forums. the same thing kept coming back: women are deeply, genuinely passionate about this stuff. their treatments, their routines, the products that worked, the ones that didn't. they have hair girls, brow girls and aesthetics nurses they've been seeing for years. they spend hundreds of pounds a month, sometimes thousands. and they hold all of it in their heads.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              the beauty industry runs on loyalty. a woman doesn't switch her hairdresser on a whim. she finds the people she trusts and she stays. every woman has her people, and each one holds a piece of the picture.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-medium text-espresso"
            >
              but none of them held the whole thing. the only person who did was the woman herself. and she was keeping it in a notes app.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              i wanted a system that was as serious about beauty as i was. not a medical app that felt clinical and cold. not a social app that wanted to sell me the next viral serum. a quiet, beautiful tool that remembered the details so i didn't have to.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              i spoke to aestheticians, dermatologists, and software engineers. we mapped the <span className="text-[#8F6F3E] border-b border-dashed border-[#8F6F3E]/40 hover:border-solid cursor-default transition-all hover:bg-[#8F6F3E]/10 rounded px-1">cycle logic</span> for fifty different treatments. we built a <span className="text-[#8F6F3E] border-b border-dashed border-[#8F6F3E]/40 hover:border-solid cursor-default transition-all hover:bg-[#8F6F3E]/10 rounded px-1">conflict engine</span> for hundreds of active ingredients. we stripped out the ads, the community feeds, and the noise.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-semibold text-espresso text-[24px] pt-8"
            >
              we built nella.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              the single place that holds your entire beauty life.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="italic text-espresso font-medium"
            >
              we think you're going to love her.
            </motion.p>
          </div>
        </div>
      </div>

      <CtaSection
        title="Ready to try her?"
        subtitle=""
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
