'use client';

import React from 'react';
import Link from 'next/link';
import CtaSection from '../../../components/CtaSection';

export default function StoryClient() {
  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-hidden relative group">
          {/* Desktop Image - Absolute to fill right column border to border */}
          <div className="absolute right-0 top-0 bottom-0 w-[56%] hidden lg:block z-0">
            <img
              src="/aboutstorynella.webp"
              alt="The story behind nella"
              className="w-full h-full object-contain object-center"
            />
          </div>

          {/* Breadcrumbs inside the hero */}
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 relative z-10">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60">
              <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
              <span className="font-normal text-[#1F1410]/30">&gt;</span>
              <Link href="/about" className="hover:text-espresso transition-colors">About</Link>
              <span className="font-normal text-[#1F1410]/30">&gt;</span>
              <span className="text-espresso font-semibold">Story</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-6 pb-12 md:pt-8 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center lg:min-h-[360px]">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-center">
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">nella digital skin lab</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                the story behind nella.
              </h1>
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden w-full relative z-10">
              <img
                src="/aboutstorynella.webp"
                alt="The story behind nella"
                className="w-full h-auto max-h-[450px] object-cover object-center rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </div>

      <article className="text-left max-w-7xl mx-auto px-6 pt-12 md:pt-16 space-y-8 md:space-y-12">
        <div className="space-y-8 text-[14.5px] text-grey font-sans leading-relaxed max-w-3xl mx-auto pb-12">
          <p>
            it started with a treatment. i'd just had it done. something new, something i'd researched, something i was happy to invest in. i got home, and i didn't know what to do next.
          </p>

          <p>
            the aftercare instructions were in my memory, sort of. the product i'd been told to pause was noted, sort of. nothing was in the wrong place. but nothing was in the right place either.
          </p>

          <blockquote className="font-semibold text-espresso text-[20px] py-4 border-l-4 border-[#8F6F3E] pl-6 italic font-display my-8">
            "surely there is a better way to do this?"
          </blockquote>

          <p>
            i'd spent years investing in my own beauty and self-care. over time, i started paying attention to what my friends got done, asking more questions at appointments, seeking advice from reddit forums. the same thing kept coming back: women are deeply, genuinely passionate about this stuff. their treatments, their routines, the products that worked, the ones that didn't. they have hair girls, brow girls and aesthetics nurses they've been seeing for years. they spend hundreds of pounds a month, sometimes thousands. and they hold all of it in their heads.
          </p>

          <p>
            the beauty industry runs on loyalty. a woman doesn't switch her hairdresser on a whim. she finds the people she trusts and she stays. every woman has her people, and each one holds a piece of the picture.
          </p>

          <p className="font-medium text-espresso">
            but none of them held the whole thing. the only person who did was the woman herself. and she was keeping it in a notes app.
          </p>

          <p>
            i wanted a system that was as serious about beauty as i was. not a medical app that felt clinical and cold. not a social app that wanted to sell me the next viral serum. a quiet, beautiful tool that remembered the details so i didn't have to.
          </p>

          <p>
            i spoke to aestheticians, dermatologists, and software engineers. we mapped the <span className="text-[#8F6F3E] font-medium">cycle logic</span> for fifty different treatments. we built a <span className="text-[#8F6F3E] font-medium">conflict engine</span> for hundreds of active ingredients. we stripped out the ads, the community feeds, and the noise.
          </p>

          <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-[#1F1410]/80 font-sans leading-relaxed shadow-sm relative overflow-hidden mt-12">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
            <h4 className="font-semibold text-espresso mb-1 text-[15px] font-sans">we built nella.</h4>
            <p className="mb-2">the single place that holds your entire beauty life.</p>
            <p className="italic text-espresso font-medium text-[13.5px]">we think you're going to love her.</p>
          </div>
        </div>
      </article>

      <CtaSection
        title="Ready to try her?"
        subtitle=""
        backgroundClass="bg-transparent"
      />
    </div>
  );
}

