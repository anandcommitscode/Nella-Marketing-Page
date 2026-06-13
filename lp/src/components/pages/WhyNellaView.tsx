import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Shield, Heart } from 'lucide-react';

interface WhyNellaViewProps {
  onNavigate: (path: string) => void;
}

export default function WhyNellaView({ onNavigate }: WhyNellaViewProps) {
  return (
    <div className="lowercase text-left max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* SECTION 1: OPENING CLAIM */}
      <section className="space-y-6 pt-8">
        <div className="inline-flex items-center gap-1.5">
          <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          <span className="font-display italic text-[13px] text-[#8F6F3E]">the beauty companion</span>
        </div>

        <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] tracking-tight text-espresso text-balance">
          every woman has her people.
        </h1>

        <div className="space-y-4 text-[14px] sm:text-[15px] text-grey leading-relaxed font-sans max-w-2xl">
          <p>
            her hair girl who knows when it&rsquo;s time for a cut when she goes for a colour. her brow girl who remembers that she likes them thick, not thin. her aesthetics nurse who knows exactly the look she is going for. her facialist, her nail tech, the friend who told her about the serum that actually worked.
          </p>
          <p className="font-medium text-espresso italic">
            each one holds a piece of the picture. none of them holds the whole thing.
          </p>
          <p className="border-l-2 border-[#8F6F3E] pl-4 text-serif text-[17px] font-display italic text-espresso">
            nella is the one who does.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE PROBLEM */}
      <section className="p-8 rounded-3xl bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] border border-[#E8E5DC] space-y-4">
        <h2 className="font-display font-semibold text-[22px] sm:text-[26px] text-espresso tracking-tight">
          the system you have right now is a notes app and a memory.
        </h2>
        <div className="space-y-4 text-[13.5px] text-grey leading-relaxed font-sans">
          <p>
            you spent £220 at one clinic, £90 at another, and you can&rsquo;t remember which one did the thing that actually worked. your retinol probably should have come back into your routine by now. your nails were due last week. your botox is somewhere between fine and slipping.
          </p>
          <p className="font-medium text-espresso">
            this is not a personal failing. it&rsquo;s the result of having no single place that holds any of your investment.
          </p>
        </div>
      </section>

      {/* SECTION 3: THE VISION */}
      <section className="space-y-6">
        <h2 className="font-display font-semibold text-[26px] text-espresso tracking-tight">
          nella is the one who holds the whole picture.
        </h2>
        <div className="space-y-4 text-[14.5px] text-grey leading-relaxed font-sans max-w-2xl">
          <p>
            she sits across every treatment, every clinic, every product, every cost. she knows when your last appointment was, what you paid, what you thought of it, and when the next one is due. she knows what is on your shelf, what you used this morning, and what to pause when you book microneedling on tuesday.
          </p>
          <p>
            the more you give her, the better she gets. after a month, she knows your patterns. after six months, she knows things about your beauty life you did not know yourself.
          </p>
          <p className="font-medium text-espresso italic">
            she is not a clinic platform. she is not a calendar. she is not a notes app. she is the one place that holds the whole picture.
          </p>
        </div>
      </section>

      {/* SECTION 4: WHAT THIS MEANS IN PRACTICE */}
      <section className="space-y-6">
        <h2 className="font-display font-semibold text-[24px] text-espresso tracking-tight">
          what it actually does.
        </h2>
        <p className="text-[13px] text-grey font-sans uppercase tracking-widest font-semibold">
          four things, done properly.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
          {[
            { tag: 'tracking.', desc: 'every treatment, every clinic, every cost, in one place that remembers.' },
            { tag: 'routines.', desc: 'your AM and PM, in the right order, with the conflicts already sorted.' },
            { tag: 'aftercare.', desc: 'what to do, what to pause, what to put back on. day by day.' },
            { tag: 'insights.', desc: 'a daily score, a monthly wrap, and the patterns you could not see before.' }
          ].map((item, idx) => (
            <div key={idx} className="p-5 border border-[#E8E5DC] rounded-2xl bg-white space-y-1.5 shadow-2xs">
              <span className="font-display font-bold text-[14.5px] text-[#8F6F3E] italic block">{item.tag}</span>
              <p className="text-[12.5px] text-grey font-sans leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <button 
            onClick={() => onNavigate('what-it-does')}
            className="text-[12.5px] font-semibold text-[#8F6F3E] hover:underline flex items-center gap-1 cursor-pointer"
          >
            see how each one works <ArrowRight size={12} />
          </button>
        </div>
      </section>

      {/* SECTION 5: WHO IT IS FOR */}
      <section className="space-y-6 pt-12">
        <h2 className="font-display font-semibold text-[24px] text-espresso tracking-tight">
          nella is for you.
        </h2>
        <div className="space-y-4 text-[14px] sm:text-[14.5px] text-grey leading-relaxed font-sans max-w-2xl">
          <p>
            if you have ever sat in a consultation and been asked when your last treatment was, and had to guess. if you&rsquo;ve ever stood in front of your product shelf and tried to remember which order it all goes on. if you&rsquo;ve ever come home from an appointment and not been sure what to do next.
          </p>
          <p className="font-medium text-espresso italic">
            if you value evidence over vibes, nella is for you.
          </p>
        </div>

        <div className="pt-2">
          <button 
            onClick={() => onNavigate('made-for-her')}
            className="text-[12.5px] font-semibold text-[#8F6F3E] hover:underline flex items-center gap-1 cursor-pointer"
          >
            see who nella is made for <ArrowRight size={12} />
          </button>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="p-8 pb-10 bg-[#1F1410] text-[#FAF7F2] rounded-3xl text-center space-y-6 !mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#8F6F3E]/5 pointer-events-none"></div>
        <h2 className="font-display font-[600] text-[26px] sm:text-[32px] text-[#FAF7F2] tracking-tight">
          let nella hold the full picture.
        </h2>
        <p className="text-[13px] text-white/80 max-w-lg mx-auto font-sans leading-relaxed">
          join the women who have stopped relying on screenshot albums and a notes app.
        </p>
        <button
          onClick={() => onNavigate('waitlist')}
          className="px-6 py-3.5 bg-white text-[#1F1410] rounded-full font-semibold text-[13px] hover:bg-gray-100 transition-colors shadow-md lowercase cursor-pointer"
        >
          join the waitlist
        </button>
        <p className="text-[10px] text-white/50 font-sans tracking-wide">
          free to use. £4.99 a month for Pro. cancel anytime.
        </p>
      </section>
    </div>
  );
}
