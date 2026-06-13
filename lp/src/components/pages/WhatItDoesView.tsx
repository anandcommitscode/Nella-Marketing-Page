import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, AlertCircle, Sparkles, HelpCircle, Activity } from 'lucide-react';

interface WhatItDoesViewProps {
  onNavigate: (path: string) => void;
  initialSubTab?: 'tracking' | 'routines' | 'aftercare' | 'insights' | null;
}

export default function WhatItDoesView({ onNavigate, initialSubTab = null }: WhatItDoesViewProps) {
  const [activeTab, setActiveTab] = useState<'hub' | 'tracking' | 'routines' | 'aftercare' | 'insights'>(initialSubTab || 'hub');

  const selectTab = (tab: 'hub' | 'tracking' | 'routines' | 'aftercare' | 'insights') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="lowercase text-left max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Back to Hub Button */}
      {activeTab !== 'hub' && (
        <button 
          onClick={() => selectTab('hub')}
          className="text-[12.5px] font-semibold text-grey hover:text-espresso flex items-center gap-1 cursor-pointer"
        >
          &larr; back to all features
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
            {/* Hero */}
            <div className="space-y-6 pt-4">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                <span className="font-display italic text-[13px] text-[#8F6F3E]">function & form</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none">
                four things, done properly.
              </h1>
              <p className="text-[14px] sm:text-[15px] text-grey max-w-2xl font-sans leading-relaxed">
                tracking, routines, aftercare, insights. each one designed for a woman who is actually using it. no complex telemetry, no bloated dashboards.
              </p>
            </div>

            {/* How it works 4-step */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] border border-[#E8E5DC] space-y-6">
              <h3 className="font-display font-semibold text-[18px] text-espresso uppercase tracking-wider">the four-step flow.</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                {[
                  { n: '1', t: 'start', d: 'tell nella about your treatments and your routine. it takes about five minutes.' },
                  { n: '2', t: 'log', d: 'every treatment, every product, every day. one tap each.' },
                  { n: '3', t: 'see', d: 'your dashboard fills out. your score calibrates over fourteen days.' },
                  { n: '4', t: 'know', d: 'patterns emerge. aftercare runs itself. the picture is finally whole.' }
                ].map((step, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[20px] font-mono font-bold text-[#8F6F3E] block">{step.n}.</span>
                    <h5 className="font-semibold text-[13.5px] text-espresso">{step.t}</h5>
                    <p className="text-[11px] text-grey font-sans leading-relaxed">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefit cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {[
                {
                  id: 'tracking' as const,
                  title: 'tracking.',
                  desc: 'every treatment, every clinic, every cost. injectables, facials, hair, nails, brows, lashes, body. one place that remembers. smart reminders that fit your cycle.'
                },
                {
                  id: 'routines' as const,
                  title: 'routines.',
                  desc: 'your AM and PM in the right order, with the conflicts sorted. retinol and vitamin C, AHA and BHA. nella knows which products fight, which pause when, and which to keep going.'
                },
                {
                  id: 'aftercare' as const,
                  title: 'aftercare.',
                  desc: 'log microneedling and your retinol pauses for seven days. log a peel and the rules update. day-by-day guidance for priority treatments. you don\'t have to remember a thing.'
                },
                {
                  id: 'insights' as const,
                  title: 'insights.',
                  desc: 'insights. a daily score that tells you the truth. a monthly wrap that you can keep or share. spending patterns that finally add up. the bits a notes app cannot do.'
                }
              ].map((card) => (
                <div 
                  key={card.id}
                  onClick={() => selectTab(card.id)}
                  className="p-6 bg-white border border-[#E8E5DC] rounded-3xl hover:shadow-md hover:border-[#8F6F3E]/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between space-y-4 text-left"
                >
                  <div className="space-y-2">
                    <span className="font-display font-semibold text-[18px] text-espresso italic block">{card.title}</span>
                    <p className="text-[12px] text-grey font-sans leading-relaxed">{card.desc}</p>
                  </div>
                  <span className="text-[11.5px] font-semibold text-[#8F6F3E] inline-flex items-center gap-1 hover:underline">
                    read more &rarr;
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* SUBTAB 1: TRACKING */}
        {activeTab === 'tracking' && (
          <motion.div
            key="tracking"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                <span className="font-display italic text-[11px] text-[#8F6F3E]">tracking deep dive</span>
              </div>
              <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight">
                every appointment, every clinic, every cost.
              </h1>
              <p className="text-[14px] text-grey font-sans">
                the record you&rsquo;ve been meaning to keep, finally in one place. log a treatment in seconds and never lose track again.
              </p>
            </div>

            <div className="space-y-4 text-[13.5px] text-grey font-sans leading-relaxed">
              <h3 className="font-display font-semibold text-[17px] text-espresso">what are we tracking?</h3>
              <p>
                every treatment you get, from your nails, hair and brows, to your botox filler and facials, logged in seconds and held in one place. clinic, cost, rating, notes, photos if you want them. injectables, facials, hair, nails, brows, lashes, body, plus a custom entry for whatever you just tried.
              </p>
              <p className="font-medium text-espresso">
                once it&rsquo;s in nella, you have it forever. your beauty record is finally yours, and finally complete.
              </p>
            </div>

            {/* Three features */}
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-[18px] text-espresso">the features behind it.</h3>
              <div className="space-y-4 max-w-2xl">
                <div className="p-5 bg-white border border-[#E8E5DC] rounded-2xl flex gap-4 items-start">
                  <span className="text-[18px] mt-0.5">📝</span>
                  <div>
                    <h4 className="font-semibold text-[14px] text-espresso">treatment logging</h4>
                    <p className="text-[12px] text-grey font-sans mt-1">log every kind of treatment in seconds: injectables, facials, hair, nails, brows, lashes, body, plus a custom entry for anything else. clinic, cost, rating, notes, photos if you want them.</p>
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#E8E5DC] rounded-2xl flex gap-4 items-start">
                  <span className="text-[18px] mt-0.5">🔔</span>
                  <div>
                    <h4 className="font-semibold text-[14px] text-espresso">smart reminders</h4>
                    <p className="text-[12px] text-grey font-sans mt-1">every treatment has its own cycle. nails every three weeks. brows every six. botox every twelve to sixteen. nella knows the cycle for every type and sends a heads-up seven days before you&rsquo;re due, again on the day, and again if you slip past.</p>
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#E8E5DC] rounded-2xl flex gap-4 items-start">
                  <span className="text-[18px] mt-0.5">💰</span>
                  <div>
                    <h4 className="font-semibold text-[14px] text-espresso">spending totals</h4>
                    <p className="text-[12px] text-grey font-sans mt-1">how much you spent this month, this quarter, this year. by category in Core. by treatment and by clinic in Pro. the number is yours the moment you log a treatment. no setup, no calculation, no spreadsheet.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why nella */}
            <div className="p-6 bg-[#F5EDE0]/30 border border-[#E8E5DC] rounded-2xl text-[13px] text-grey font-sans leading-relaxed">
              <h4 className="font-semibold text-espresso mb-1">why nella</h4>
              a notes app can hold the words. a calendar can hold the date. neither of them knows that your last botox was on the fifth of february, you rated it eight out of ten, you paid £250, you said you&rsquo;d go back, and you&rsquo;re due in week three of march. nella does.
            </div>
          </motion.div>
        )}

        {/* SUBTAB 2: ROUTINES */}
        {activeTab === 'routines' && (
          <motion.div
            key="routines"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                <span className="font-display italic text-[11px] text-[#8F6F3E]">routines deep dive</span>
              </div>
              <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight">
                your AM and PM, in the right order, every time.
              </h1>
              <p className="text-[14px] text-grey font-sans">
                five products, six products, seven. retinol three nights a week. vitamin C in the morning. nella holds the order, the schedule, and the conflicts.
              </p>
            </div>

            <div className="space-y-4 text-[13.5px] text-grey font-sans leading-relaxed">
              <h3 className="font-display font-semibold text-[17px] text-espresso">what your routine looks like in nella.</h3>
              <p>
                every product in your routine, in the order they actually go on. cleanser, toner, actives, hydration, SPF. or the PM version, with the actives shifted and the retinol slotted into the right nights.
              </p>
              <p className="font-medium text-espresso">
                if two products fight, nella tells you. if a product needs to pause because of a treatment, nella pauses it. if you&rsquo;ve skipped your PM three nights running, nella notices.
              </p>
            </div>

            {/* Three features */}
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-[18px] text-espresso">the features behind it.</h3>
              <div className="space-y-4 max-w-2xl">
                <div className="p-5 bg-white border border-[#E8E5DC] rounded-2xl flex gap-4 items-start">
                  <span className="text-[18px] mt-0.5">🛠️</span>
                  <div>
                    <h4 className="font-semibold text-[14px] text-espresso">routine builder</h4>
                    <p className="text-[12px] text-grey font-sans mt-1">AM and PM, automatic ordering, weekly frequency scheduling for the actives. retinol on mondays and thursdays. AHA on wednesdays. niacinamide every day. you tell nella what you use. nella works out when.</p>
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#E8E5DC] rounded-2xl flex gap-4 items-start">
                  <span className="text-[18px] mt-0.5">⚠️</span>
                  <div>
                    <h4 className="font-semibold text-[14px] text-espresso">conflict detection</h4>
                    <p className="text-[12px] text-grey font-sans mt-1">every active in your routine cross-checked against every other. retinol with AHA. vitamin C with niacinamide. if two are fighting, nella tells you. if the answer is more nuanced, nella tells you that too.</p>
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#E8E5DC] rounded-2xl flex gap-4 items-start">
                  <span className="text-[18px] mt-0.5">📊</span>
                  <div>
                    <h4 className="font-semibold text-[14px] text-espresso">step completion tracking</h4>
                    <p className="text-[12px] text-grey font-sans mt-1">one tap to mark a step done. nella holds the streak, feeds the glow score, and tells you on a wednesday morning that your PM consistency is at 82% percent this fortnight.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why routines matter */}
            <div className="p-6 bg-[#F5EDE0]/30 border border-[#E8E5DC] rounded-2xl text-[13px] text-grey font-sans leading-relaxed">
              <h4 className="font-semibold text-espresso mb-1">why this matters</h4>
              a routine that lives on a post-it is a routine you forget. a routine that lives in your head is a routine you guess at. nella is the only place where your products, your schedule, your treatments, and your skin actually sit together. that&rsquo;s what makes it work.
            </div>
          </motion.div>
        )}

        {/* SUBTAB 3: AFTERCARE */}
        {activeTab === 'aftercare' && (
          <motion.div
            key="aftercare"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                <span className="font-display italic text-[11px] text-[#8F6F3E]">aftercare deep dive</span>
              </div>
              <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight">
                what to do, what to pause, what to put back on.
              </h1>
              <p className="text-[14px] text-grey font-sans">
                log a treatment and your aftercare runs itself. products paused, products brought back to life, and your aftercare guidance day by day.
              </p>
            </div>

            <div className="space-y-4 text-[13.5px] text-grey font-sans leading-relaxed">
              <h3 className="font-display font-semibold text-[17px] text-espresso">what happens when you log a treatment.</h3>
              <p>
                you log microneedling on a tuesday afternoon. by wednesday morning, your retinol is paused for seven days, your vitamin C for three, and your routine checklist for tonight shows you exactly what&rsquo;s safe to use. at twenty-four hours, nella checks in to ask how your skin feels.
              </p>
              <p className="font-medium text-espresso">
                if you&rsquo;re on Pro, the full seven-day recovery plan sits in your dashboard. day by day. what to expect, what to do, when each product returns. aftercare that runs itself.
              </p>
            </div>

            {/* Three features */}
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-[18px] text-espresso">the features behind it.</h3>
              <div className="space-y-4 max-w-2xl">
                <div className="p-5 bg-white border border-[#E8E5DC] rounded-2xl flex gap-4 items-start">
                  <span className="text-[18px] mt-0.5">⏸️</span>
                  <div>
                    <h4 className="font-semibold text-[14px] text-espresso">automatic product pause logic</h4>
                    <p className="text-[12px] text-grey font-sans mt-1">log a treatment and the right actives pause for the right number of days. retinol for seven post-microneedling. vitamin C for three. AHA for five post-peel. nella knows the rules and runs them.</p>
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#E8E5DC] rounded-2xl flex gap-4 items-start">
                  <span className="text-[18px] mt-0.5">🗓️</span>
                  <div>
                    <h4 className="font-semibold text-[14px] text-espresso">day-by-day narratives</h4>
                    <p className="text-[12px] text-grey font-sans mt-1">log microneedling on tuesday and from wednesday morning you get a day-by-day plan. day one: gentle cleanser only. day two: check-in. day three: hydration, no actives. day seven: retinol returns tomorrow.</p>
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#E8E5DC] rounded-2xl flex gap-4 items-start">
                  <span className="text-[18px] mt-0.5">💬</span>
                  <div>
                    <h4 className="font-semibold text-[14px] text-espresso">post-treatment check-ins</h4>
                    <p className="text-[12px] text-grey font-sans mt-1">twenty-four hours after every priority treatment, nella asks how your skin feels. one tap to answer. the response feeds your skin trend and your glow score.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why aftercare matters */}
            <div className="p-6 bg-[#F5EDE0]/30 border border-[#E8E5DC] rounded-2xl text-[13px] text-grey font-sans leading-relaxed">
              <h4 className="font-semibold text-espresso mb-1">why this matters</h4>
              you spent £180 on microneedling. the recovery is what determines whether you get the result. and the recovery is exactly the bit you forget when you&rsquo;re tired on a wednesday evening and reaching for the retinol out of habit. nella does the remembering. you get the result.
            </div>
          </motion.div>
        )}

        {/* SUBTAB 4: INSIGHTS */}
        {activeTab === 'insights' && (
          <motion.div
            key="insights"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
                <span className="font-display italic text-[11px] text-[#8F6F3E]">insights deep dive</span>
              </div>
              <h1 className="font-display font-[600] text-[28px] sm:text-[38px] leading-tight text-espresso tracking-tight">
                the patterns you could not see before.
              </h1>
              <p className="text-[14px] text-grey font-sans">
                a daily score, a weekly card, a monthly wrap. the bits a notes app can&rsquo;t show you.
              </p>
            </div>

            <div className="space-y-4 text-[13.5px] text-grey font-sans leading-relaxed">
              <h3 className="font-display font-semibold text-[17px] text-espresso">what insights actually means.</h3>
              <p>
                every treatment you log, every product you use, every check-in you make. nella holds all of it. then she shows you the patterns. how your skin trend has moved this fortnight. what you spent on injectables this quarter versus last. which treatments are due, which are overdue, and which you keep saying you&rsquo;ll book.
              </p>
              <p className="font-medium text-espresso">
                the score moves daily. the wrap arrives monthly. the spend insights update the moment you log a cost.
              </p>
            </div>

            {/* Three features */}
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-[18px] text-espresso">the features behind it.</h3>
              <div className="space-y-4 max-w-2xl">
                <div className="p-5 bg-white border border-[#E8E5DC] rounded-2xl flex gap-4 items-start">
                  <span className="text-[18px] mt-0.5">🌟</span>
                  <div>
                    <h4 className="font-semibold text-[14px] text-espresso">glow score</h4>
                    <p className="text-[12px] text-grey font-sans mt-1">a number from 0 to 100, updated daily after a fourteen-day calibration. it moves with your treatments, your routine, your check-ins, and how your skin is trending. in Pro, you see the breakdown and recommendations. in Core, you see the score and statement.</p>
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#E8E5DC] rounded-2xl flex gap-4 items-start">
                  <span className="text-[18px] mt-0.5">📅</span>
                  <div>
                    <h4 className="font-semibold text-[14px] text-espresso">monthly wrap</h4>
                    <p className="text-[12px] text-grey font-sans mt-1">on the first of every month, a card lands in your dashboard. your score, your statement, your stats. designed to share if you want to. designed for your eyes only if you don&rsquo;t.</p>
                  </div>
                </div>

                <div className="p-5 bg-white border border-[#E8E5DC] rounded-2xl flex gap-4 items-start">
                  <span className="text-[18px] mt-0.5">📊</span>
                  <div>
                    <h4 className="font-semibold text-[14px] text-espresso">spending, broken down</h4>
                    <p className="text-[12px] text-grey font-sans mt-1">how much you spent, on what, where. month, quarter, year. trend comparisons across all three. by category in Core. by treatment and by clinic in Pro.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why insights matter */}
            <div className="p-6 bg-[#F5EDE0]/30 border border-[#E8E5DC] rounded-2xl text-[13px] text-grey font-sans leading-relaxed">
              <h4 className="font-semibold text-espresso mb-1">why this matters</h4>
              beauty is one of the only categories women spend hundreds of pounds on every month without ever seeing the running total. nella shows you the total, the patterns, and the score. so you can stop guessing whether your routine is doing anything, whether your treatments are worth it, and whether you&rsquo;re on top of your beauty life.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL CTA */}
      <section className="p-8 pb-10 bg-[#1F1410] text-[#FAF7F2] rounded-3xl text-center space-y-6 !mt-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#8F6F3E]/5 pointer-events-none"></div>
        <h2 className="font-display font-[600] text-[26px] sm:text-[32px] text-[#FAF7F2] tracking-tight">
          take control of your vanity.
        </h2>
        <p className="text-[13px] text-white/80 max-w-lg mx-auto font-sans leading-relaxed">
          stop throwing money at vague skincare routines. track, refine, and see what works.
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
