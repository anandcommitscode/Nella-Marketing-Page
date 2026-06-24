"use client";

import React from 'react';
import Link from 'next/link';
import CtaSection from '../../components/CtaSection';
import PhaseAwareCta from '../../components/PhaseAwareCta';
import SurgicalMobileMockup from '../../components/SurgicalMobileMockup';

export default function WhyNellaClient() {
  return (
    <div className="w-full relative overflow-hidden bg-white">
      <div className="px-4 md:px-8 pt-0 md:pt-0 relative z-20">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-visible relative group">
          {/* Breadcrumbs inside the hero */}
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 relative z-10">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60">
              <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
              <span className="font-normal text-[#1F1410]/30">›</span>
              <span className="text-espresso font-semibold">Why Nella</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-4 pb-0 md:pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-start lg:pt-12">
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">every woman has her people</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] leading-tight tracking-tight text-espresso">
                Why Nella.
              </h1>
              <div className="space-y-4">
                <p className="text-[15px] sm:text-[16px] text-espresso/80 max-w-[420px] font-sans leading-relaxed">
                  every woman has her people. her hair girl who knows when it's time for a cut. her brow girl who remembers that she likes them thick. her aesthetics nurse who knows exactly the look she is going for.
                </p>
                <p className="text-[15px] sm:text-[16px] text-espresso max-w-[420px] font-sans font-medium leading-relaxed">
                  each one holds a piece of the picture. none of them holds the whole thing. nella is the one who does.
                </p>
              </div>
              <div className="pt-4 flex justify-start">
                <PhaseAwareCta
                  preLaunchText="join the waitlist"
                  postLaunchText="get nella on the App Store"
                  className="w-[180px] py-4 text-[#1F1410] rounded-full font-semibold text-[14px] transition-all cursor-pointer text-center flex justify-center items-center hover:opacity-90 shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #DEC68B 0%, #C4A067 50%, #B8924A 100%)'
                  }}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative flex justify-center items-end z-10 -mb-24 md:-mb-36">
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] md:max-w-[440px] z-10">
                <SurgicalMobileMockup initialScreen="why-nella" autoPlay lockedTab />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left max-w-7xl mx-auto px-6 pt-36 md:pt-56 space-y-20 pb-24 relative z-0">
        {/* Sections 2 & 3: The Problem & The Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Section 2: The Problem */}
          <div className="p-8 rounded-[32px] bg-[#FAF7F2] border border-[#E8E5DC] space-y-4 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <span className="text-[11px] text-[#8F6F3E] font-medium tracking-wide">the problem</span>
            <h2 className="font-display font-[600] text-[24px] md:text-[28px] text-espresso leading-tight">
              Your beauty drawer is chaos.
            </h2>
            <p className="text-[14px] text-grey font-sans leading-relaxed">
              your clinic visits are unconnected. your phone notes are full of units, dates, and names you can't remember. you spend money at different places, but no single record holds the investment.
            </p>
          </div>

          {/* Section 3: The Solution */}
          <div className="p-8 rounded-[32px] bg-white border border-[#E8E5DC] space-y-4 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="group-hover:translate-x-1 transition-transform duration-300 space-y-4">
              <span className="text-[11px] text-[#8F6F3E] font-medium tracking-wide">the solution</span>
              <h2 className="font-display font-[600] text-[24px] md:text-[28px] text-espresso leading-tight">
                nella holds the whole picture.
              </h2>
              <p className="text-[14px] text-grey font-sans leading-relaxed">
                one system. every treatment. every product. every cycle. the digital skin lab that actually holds the details together, keeping your skin barrier safe and your records secure.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: What this means in practice */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <div className="text-center space-y-3 max-w-xl mx-auto pb-4">
            <h2 className="font-display font-[600] text-[32px] sm:text-[40px] text-espresso tracking-tight">What she actually does.</h2>
            <p className="text-[13px] text-grey font-sans tracking-widest font-semibold">four things, done properly.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { tag: 'tracking.', title: 'Know your history.', desc: 'every treatment, every clinic, every cost, in one place that remembers.' },
              { tag: 'routines.', title: 'Science, sorted.', desc: 'your AM and PM, in the right order, with the conflicts already sorted.' },
              { tag: 'aftercare.', title: 'Recover properly.', desc: 'what to do, what to pause, what to put back on. day by day.' },
              { tag: 'insights.', title: 'See the truth.', desc: 'a daily score, a monthly wrap, and the patterns you could not see before.' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white border border-[#E8E5DC] rounded-3xl space-y-3 shadow-sm hover:shadow-md transition-all duration-300 group relative">
                <span className="font-display font-bold text-[16px] text-[#8F6F3E] italic block">{item.tag}</span>
                <h4 className="font-sans font-semibold text-[18px] text-espresso leading-tight">{item.title}</h4>
                <p className="text-[13px] text-grey font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <a href="/what-it-does" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#8F6F3E] hover:underline">
              see how each one works →
            </a>
          </div>
        </div>

        {/* Section 5: Who it is for */}
        <div className="max-w-3xl mx-auto space-y-6 pt-4">
          <h2 className="font-display font-[600] text-[32px] md:text-[40px] text-[#1F1410] leading-tight tracking-tight">
            nella is for you.
          </h2>
          <div className="space-y-6 text-[14.5px] text-grey font-sans leading-relaxed">
            <p>
              if you have ever sat in a consultation and been asked when your last treatment was, and had to guess. if you've ever stood in front of your product shelf and tried to remember which order it all goes on. if you've ever come home from an appointment and not been sure what to do next.
            </p>
            <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl relative overflow-hidden shadow-sm group hover:shadow-md transition-shadow duration-300 my-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="font-display font-[600] text-[20px] md:text-[24px] leading-tight text-espresso cursor-default">
                If you value evidence over vibes, nella is for you.
              </h3>
            </div>
            <a href="/made-for-her" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#8F6F3E] hover:underline">
              see who nella is made for →
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="w-full bg-[#FAF7F2] pt-8 rounded-3xl mt-16 overflow-hidden">
          <CtaSection
            title="Let nella hold the full picture."
            subtitle="free to use. £4.99 a month for pro. cancel anytime."
            backgroundClass="bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
