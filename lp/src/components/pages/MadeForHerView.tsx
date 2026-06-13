import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Sparkles, LogIn, TrendingUp, Calendar, Inbox } from 'lucide-react';

interface MadeForHerViewProps {
  onNavigate: (path: string) => void;
  initialSubTab?: 'track' | 'refine' | 'discover' | null;
}

export default function MadeForHerView({ onNavigate, initialSubTab = null }: MadeForHerViewProps) {
  const [activeTab, setActiveTab] = useState<'hub' | 'track' | 'refine' | 'discover'>(initialSubTab || 'hub');

  const selectTab = (tab: 'hub' | 'track' | 'refine' | 'discover') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="lowercase text-left max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Header element to switch back to Hub */}
      {activeTab !== 'hub' && (
        <button 
          onClick={() => selectTab('hub')}
          className="text-[12.5px] font-semibold text-grey hover:text-espresso flex items-center gap-1 cursor-pointer"
        >
          &larr; back to all paths
        </button>
      )}

      <AnimatePresence mode="wait">
        {activeTab === 'hub' && (
          <motion.div
            key="hub"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-12"
          >
            {/* Opener */}
            <div className="space-y-6 pt-4">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                <span className="font-display italic text-[13px] text-[#8F6F3E]">tailored tracking</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none">
                made for her.
              </h1>
              <p className="text-[14px] sm:text-[15px] text-grey max-w-2xl font-sans leading-relaxed">
                nella is for the woman who has money in her beauty, attention in her routine, and no system holding any of it together. you might recognise yourself in one of these three. you might recognise yourself in all of them.
              </p>
              <p className="text-[13px] font-medium text-espresso uppercase tracking-wider font-sans">
                either way, this is where to start.
              </p>
            </div>

            {/* Three cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {/* Card 1: Track */}
              <div 
                onClick={() => selectTab('track')}
                className="p-6 bg-white border border-[#E8E5DC] rounded-3xl hover:shadow-md hover:border-[#8F6F3E]/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#F4DDD0] flex items-center justify-center text-[18px]">
                    📅
                  </div>
                  <h3 className="font-display font-semibold text-[17px] text-espresso leading-snug">
                    you&rsquo;ve forgotten when you last booked.
                  </h3>
                  <p className="text-[12px] text-grey font-sans leading-relaxed">
                    your nails are due, your brows are overdue, your botox is somewhere on the calendar but you can&rsquo;t remember. you have a notes app, three group chats and a vague feeling of being behind.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11.5px] font-serif italic text-[#8F6F3E]">nella sorts the lot.</p>
                  <span className="text-[11.5px] font-semibold text-espresso flex items-center gap-1 hover:underline">
                    read more &rarr;
                  </span>
                </div>
              </div>

              {/* Card 2: Refine */}
              <div 
                onClick={() => selectTab('refine')}
                className="p-6 bg-white border border-[#E8E5DC] rounded-3xl hover:shadow-md hover:border-[#8F6F3E]/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#EFD9A8] flex items-center justify-center text-[18px]">
                    🧪
                  </div>
                  <h3 className="font-display font-semibold text-[17px] text-espresso leading-snug">
                    you&rsquo;ve built the routine, but not sure if it is working.
                  </h3>
                  <p className="text-[12px] text-grey font-sans leading-relaxed">
                    five products in the AM, six in the PM. retinol on monday and thursday, vitamin C until you read the thing that said maybe not. you want to know what&rsquo;s doing the work and what&rsquo;s along for the ride.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11.5px] font-serif italic text-[#8F6F3E]">nella tells you which is which.</p>
                  <span className="text-[11.5px] font-semibold text-espresso flex items-center gap-1 hover:underline">
                    read more &rarr;
                  </span>
                </div>
              </div>

              {/* Card 3: Discover */}
              <div 
                onClick={() => selectTab('discover')}
                className="p-6 bg-white border border-[#E8E5DC] rounded-3xl hover:shadow-md hover:border-[#8F6F3E]/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#EBD5C4] flex items-center justify-center text-[18px]">
                    ✨
                  </div>
                  <h3 className="font-display font-semibold text-[17px] text-espresso leading-snug">
                    you&rsquo;ve tried more in the last year than most try in five.
                  </h3>
                  <p className="text-[12px] text-grey font-sans leading-relaxed">
                    skin boosters last spring, polynucleotides in september, the new thing your aesthetician mentioned last week. you go in informed and you come out with results.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[11.5px] font-serif italic text-[#8F6F3E]">nella holds the record.</p>
                  <span className="text-[11.5px] font-semibold text-espresso flex items-center gap-1 hover:underline">
                    read more &rarr;
                  </span>
                </div>
              </div>
            </div>

            {/* Closing Line */}
            <div className="p-8 border border-[#E8E5DC] bg-[#FAF7F2] rounded-3xl space-y-3">
              <h3 className="font-display font-[600] text-[20px] text-espresso">
                nella adapts to you.
              </h3>
              <p className="text-[13.5px] text-grey font-sans leading-relaxed">
                to whatever shape your beauty life is in this month. the score, the reminders, the routine, the aftercare. they all change based on what you actually do.
              </p>
            </div>
          </motion.div>
        )}

        {/* SUBTAB 1: THE TRACKER */}
        {activeTab === 'track' && (
          <motion.div
            key="track"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                <span className="font-display italic text-[11px] text-[#8F6F3E]">the tracker pathway</span>
              </div>
              <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight">
                for the woman who has forgotten when she last booked.
              </h1>
              <p className="text-[14px] text-grey font-sans">
                your nails, your brows, your botox, your hair. nella keeps the diary you should have been keeping.
              </p>
            </div>

            {/* The situation */}
            <div className="p-6 bg-amber-50/20 border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed">
              <h3 className="font-semibold text-espresso mb-1">sound like you?</h3>
              you spent £250 on beauty last month... you think. your nail tech has texted twice. your highlights were march or april, you can&rsquo;t quite remember. your botox is due. or overdue. you&rsquo;ve meant to write it all down. you haven&rsquo;t.
            </div>

            {/* What nella does */}
            <div className="space-y-6">
              <h2 className="font-display font-semibold text-[22px] text-espresso">what nella does about it.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-[14px] text-espresso">every treatment in one place.</h4>
                  <p className="text-[12px] text-grey font-sans leading-relaxed">injectables, facials, hair, nails, brows, lashes, body. log it once, see it forever.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[14px] text-espresso">reminders that actually fit you.</h4>
                  <p className="text-[12px] text-grey font-sans leading-relaxed">every treatment has its own cycle. nella knows your nails are due in three weeks and sends a heads-up.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[14px] text-espresso">spending that adds up.</h4>
                  <p className="text-[12px] text-grey font-sans leading-relaxed">how much you spent this month, this quarter, this year. clearly categorised in your dashboard.</p>
                </div>
              </div>
            </div>

            {/* A small story */}
            <div className="border-t border-[#E8E5DC] pt-8 space-y-3">
              <h4 className="font-display font-semibold text-[18px] text-espresso">what it looks like in real life.</h4>
              <p className="text-[13px] text-grey font-sans leading-relaxed">
                rachel gets her nails done every three weeks, her brows every six, her botox quarterly, and her hair when she remembers. before nella, that was four calendars and one ongoing feeling of being behind.
              </p>
              <p className="text-[13px] text-espresso font-sans font-medium">
                now it&rsquo;s one dashboard, one reminder system, and a running spend total she actually looks at. her brows haven&rsquo;t been overdue since february.
              </p>
            </div>

            <div className="pt-4 flex gap-4">
              <button 
                onClick={() => onNavigate('tracking')}
                className="text-[12px] font-semibold text-[#8F6F3E] hover:underline cursor-pointer"
              >
                see tracking features &rarr;
              </button>
            </div>
          </motion.div>
        )}

        {/* SUBTAB 2: THE REFINER */}
        {activeTab === 'refine' && (
          <motion.div
            key="refine"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                <span className="font-display italic text-[11px] text-[#8F6F3E]">the refiner pathway</span>
              </div>
              <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight">
                for the woman who built the routine and wants to know if it works.
              </h1>
              <p className="text-[14px] text-grey font-sans">
                AM, PM, actives, conflicts, consistency. nella tells you whether the work is paying off.
              </p>
            </div>

            {/* The situation */}
            <div className="p-6 bg-yellow-50/20 border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed">
              <h3 className="font-semibold text-espresso mb-1">sound like you?</h3>
              you&rsquo;ve spent six months building a routine. five products in the AM, six in the PM. retinol three nights a week. last week you read that one of your actives might be cancelling out another, and you&rsquo;ve been confused since.
            </div>

            {/* What nella does */}
            <div className="space-y-6">
              <h2 className="font-display font-semibold text-[22px] text-espresso">what nella does about it.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-[14px] text-espresso">a routine that orders itself.</h4>
                  <p className="text-[12px] text-grey font-sans leading-relaxed">cleanser, toner, actives, hydration, SPF. nella knows the science-based correct order so you don&rsquo;t guess.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[14px] text-espresso">conflicts already sorted.</h4>
                  <p className="text-[12px] text-grey font-sans leading-relaxed">retinol and vitamin C, AHA and BHA. nella knows which actives fight and automatically pauses conflicts.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[14px] text-espresso">a score based on reality.</h4>
                  <p className="text-[12px] text-grey font-sans leading-relaxed">moves with your consistency, treatments, and skin trends. a number you can trust because it&rsquo;s built from what you do.</p>
                </div>
              </div>
            </div>

            {/* A small story */}
            <div className="border-t border-[#E8E5DC] pt-8 space-y-3">
              <h4 className="font-display font-semibold text-[18px] text-espresso">what it looks like in real life.</h4>
              <p className="text-[13px] text-grey font-sans leading-relaxed">
                priya has six products in her PM routine. retinol on mondays and thursdays, an AHA on wednesdays, vitamin C every morning. before nella, that was a recurring fear that something was cancelling something else out.
              </p>
              <p className="text-[13px] text-espresso font-sans font-medium">
                three weeks in, the AHA is paused on retinol nights. her routine is shorter, her glow score is moving up, and her skin trend, finally, is moving in the right direction.
              </p>
            </div>

            <div className="pt-4 flex gap-4">
              <button 
                onClick={() => onNavigate('routines')}
                className="text-[12px] font-semibold text-[#8F6F3E] hover:underline cursor-pointer"
              >
                see routine features &rarr;
              </button>
            </div>
          </motion.div>
        )}

        {/* SUBTAB 3: THE EXPLORER */}
        {activeTab === 'discover' && (
          <motion.div
            key="discover"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                <span className="font-display italic text-[11px] text-[#8F6F3E]">the explorer pathway</span>
              </div>
              <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight">
                for the woman investing in more than most try in five years.
              </h1>
              <p className="text-[14px] text-grey font-sans">
                skin boosters in march, polynucleotides in september, microneedling in between. you have invested. nella holds the record.
              </p>
            </div>

            {/* The situation */}
            <div className="p-6 bg-orange-50/20 border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed">
              <h3 className="font-semibold text-espresso mb-1">sound like you?</h3>
              you do your research before you book. you go to the right people. and the only thing standing between the money you&rsquo;ve spent and the result you came for is whether you would do it again and the history of it all.
            </div>

            {/* What nella does */}
            <div className="space-y-6">
              <h2 className="font-display font-semibold text-[22px] text-espresso">what nella does about it.</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-[14px] text-espresso">a record that holds everything.</h4>
                  <p className="text-[12px] text-grey font-sans leading-relaxed">clinic, cost, rating, notes, photos, your honest opinion. know what worked, not just what you tried.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[14px] text-espresso">aftercare that runs itself.</h4>
                  <p className="text-[12px] text-grey font-sans leading-relaxed">log microneedling and nella starts the plan. automatic chemical pauses update tonight&rsquo;s list instantly.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-[14px] text-espresso">assess clinic and cost trends.</h4>
                  <p className="text-[12px] text-grey font-sans leading-relaxed">compare what is actually worth the money. see spending patterns clearly organized.</p>
                </div>
              </div>
            </div>

            {/* A small story */}
            <div className="border-t border-[#E8E5DC] pt-8 space-y-3">
              <h4 className="font-display font-semibold text-[18px] text-espresso">what it looks like in real life.</h4>
              <p className="text-[13px] text-grey font-sans leading-relaxed">
                hannah has tried more treatments in the last year than most women try in five. she does her research and goes to the best clinics, but she wanted a record that lived up to her standard of care.
              </p>
              <p className="text-[13px] text-espresso font-sans font-medium">
                now her logged treatments tell her exactly which clinic delivered. her aftercare runs itself the day she books anything new, and the friends who ask where she got her profhilo get a precise answer.
              </p>
            </div>

            <div className="pt-4 flex gap-4">
              <button 
                onClick={() => onNavigate('aftercare')}
                className="text-[12px] font-semibold text-[#8F6F3E] hover:underline cursor-pointer"
              >
                see aftercare features &rarr;
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL CTA */}
      <section className="p-8 pb-10 bg-[#1F1410] text-[#FAF7F2] rounded-3xl text-center space-y-6 !mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#8F6F3E]/5 pointer-events-none"></div>
        <h2 className="font-display font-[600] text-[26px] sm:text-[32px] text-[#FAF7F2] tracking-tight">
          stop trying to remember it all.
        </h2>
        <p className="text-[13px] text-white/80 max-w-lg mx-auto font-sans leading-relaxed">
          let nella hold the details so you can focus on the results.
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
