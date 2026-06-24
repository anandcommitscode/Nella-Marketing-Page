import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, CalendarCheck, CheckCircle2, TrendingUp, Activity, BarChart2, Check, ArrowUpRight, ArrowRight, X } from 'lucide-react';
import CtaSection from '../../../components/CtaSection';
import PhaseAwareCta from '../../../components/PhaseAwareCta';
import SurgicalMobileMockup from '../../../components/SurgicalMobileMockup';

export const metadata: Metadata = {
  title: 'the skincare glow score explained',
  description: 'one number, 0 to 100, every day. it moves with your treatments, your routine, your check-ins, your skin. calibrates over your first two weeks.',
  keywords: ['skincare glow score', 'skin progress tracking app', 'beauty analytics', 'skin scoring system'],
  alternates: {
    canonical: 'https://mynella.app/intelligence/glow-score'
  }
};

export default function GlowScorePage() {
  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0 relative z-20">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-visible relative group">
          {/* Breadcrumbs inside the hero */}
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 relative z-10">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60">
              <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
              <span className="font-normal text-[#1F1410]/30">›</span>
              <Link href="/intelligence" className="hover:text-espresso transition-colors">Intelligence</Link>
              <span className="font-normal text-[#1F1410]/30">›</span>
              <span className="text-espresso font-semibold">The Glow Score</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-4 pb-0 md:pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-start lg:pt-12">

              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">system logic</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                The glow score.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-espresso/80 max-w-[420px] font-sans leading-relaxed">
                one number, 0 to 100, every day. it moves with your treatments, your routine, your check-ins, your skin. calibrates over your first two weeks.
              </p>
              <div className="pt-4 flex justify-start">
                <PhaseAwareCta
                  preLaunchText="Join the waitlist"
                  postLaunchText="Start your free trial"
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
                <SurgicalMobileMockup initialScreen="journal" autoPlay lockedTab />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left max-w-7xl mx-auto px-6 pt-36 md:pt-56 space-y-8 md:space-y-12 relative z-0">
        <div className="space-y-10 max-w-3xl mx-auto">
          <div className="space-y-6 pt-2">
            <h2 className="font-display font-semibold text-[24px] text-espresso mb-4 text-center">The four things your score responds to.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card 1: Treatments on Track */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-[150px] bg-[#FAF7F2] w-full flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="flex items-center justify-center gap-6 z-10 w-full">
                    {/* Mockup: Cycle Progress Wheel */}
                    <div className="relative w-20 h-20 rounded-full border-[4px] border-[#E8E5DC] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="36" cy="36" r="36" fill="transparent" stroke="#DEC68B" strokeWidth="4" strokeDasharray="226" strokeDashoffset="50" className="transition-all duration-1000 ease-out group-hover:strokeDashoffset-0" />
                      </svg>
                      <span className="font-display font-bold text-[18px] text-espresso">3/4</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-espresso bg-white px-2 py-1 rounded shadow-sm border border-[#E8E5DC] group-hover:translate-x-1 transition-transform duration-300 delay-75">
                        <Check size={10} className="text-[#8F6F3E]" /> Botox Active
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-espresso bg-white px-2 py-1 rounded shadow-sm border border-[#E8E5DC] group-hover:translate-x-1 transition-transform duration-300 delay-150">
                        <X size={10} className="text-red-400" /> Brows Due
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-3 flex-grow">
                  <h4 className="font-sans font-[600] text-[18px] text-espresso">Treatments on track.</h4>
                  <p className="text-[14px] text-grey font-sans leading-relaxed">how many of your treatments are inside their expected cycle window. nails due, brows due, botox holding. the cycle of treatments is the spine of your beauty life. the largest single input because the cycle of treatments is the spine of your beauty life.</p>
                </div>
              </div>

              {/* Card 2: Skin Trend */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-[150px] bg-[#FAF7F2] w-full flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="w-full max-w-[200px] z-10 flex flex-col gap-2 relative">
                    <div className="flex justify-between items-center px-1">
                      <span className="text-[10px] font-bold text-grey uppercase tracking-wider">14-Day Trend</span>
                      <span className="text-[11px] font-bold text-[#8F6F3E] flex items-center gap-0.5">+12 <ArrowUpRight size={12} /></span>
                    </div>
                    <div className="h-16 w-full flex items-end justify-between gap-1 group-hover:px-1 transition-all duration-500">
                      {[40, 45, 42, 50, 55, 60, 58, 65, 70, 68, 75, 80, 82, 85].map((h, i) => (
                        <div key={i} className="w-full bg-[#DEC68B] rounded-t-sm opacity-50 group-hover:opacity-100 transition-all duration-300" style={{ height: `${h}%`, transitionDelay: `${i * 30}ms` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-3 flex-grow">
                  <h4 className="font-sans font-[600] text-[18px] text-espresso">Skin trend.</h4>
                  <p className="text-[14px] text-grey font-sans leading-relaxed">the direction of your daily skin check-in responses over the last fourteen days. moving up, holding steady, slipping. the second largest input because your skin is the result that everything else feeds.</p>
                </div>
              </div>

              {/* Card 3: Check-in Streak */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-[150px] bg-[#FAF7F2] w-full flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="w-full max-w-[220px] bg-white p-3 rounded-2xl shadow-sm border border-[#E8E5DC] z-10 group-hover:-translate-y-1 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarCheck size={14} className="text-[#8F6F3E]" />
                      <span className="text-[11px] font-bold text-espresso">Activity Grid</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 14 }).map((_, i) => (
                        <div key={i} className={`h-4 rounded-sm ${i === 4 || i === 10 ? 'bg-[#E8E5DC]' : 'bg-[#DEC68B] group-hover:bg-[#8F6F3E] transition-colors duration-500'} `} style={{ transitionDelay: `${i * 40}ms` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-3 flex-grow">
                  <h4 className="font-sans font-[600] text-[18px] text-espresso">Check-in streak.</h4>
                  <p className="text-[14px] text-grey font-sans leading-relaxed">how consistently you have done your daily skin check-in over the last 14 days. not the absolute streak, the percentage. the input that rewards consistency without punishing a bad week.</p>
                </div>
              </div>

              {/* Card 4: Routine Consistency */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-[150px] bg-[#FAF7F2] w-full flex items-center justify-center p-6 relative overflow-hidden">
                  <div className="w-full max-w-[180px] space-y-2 z-10">
                    {['Cleanser', 'Vitamin C', 'Moisturiser', 'SPF 50'].map((item, i) => (
                      <div key={i} className={`flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#E8E5DC] shadow-sm transition-transform duration-500 ${i % 2 === 0 ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}>
                        <div className="w-4 h-4 rounded-full bg-cream border border-[#8F6F3E]/30 flex items-center justify-center shrink-0">
                          <Check size={10} className="text-[#8F6F3E]" />
                        </div>
                        <span className="text-[10px] font-bold text-espresso">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-3 flex-grow">
                  <h4 className="font-sans font-[600] text-[18px] text-espresso">Routine consistency.</h4>
                  <p className="text-[14px] text-grey font-sans leading-relaxed">how many of your scheduled routine steps you've completed in the last fortnight. AM and PM. retinol on the right nights. SPF in the morning. the smallest of the four because consistency without trend is not the whole picture.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-12 mt-12 w-full">
          <h2 className="font-display font-semibold text-[24px] text-espresso">Related.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/what-it-does/insights" className="block p-6 md:p-8 bg-white border border-[#E8E5DC] rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h4 className="font-semibold text-[16px] md:text-[18px] text-espresso mb-2 group-hover:text-[#8F6F3E] transition-colors">Insights</h4>
                <p className="text-[14px] text-grey">the score is one part of the insights picture. see the rest.</p>
              </div>
            </Link>
            <Link href="/what-it-does/routines" className="block p-6 md:p-8 bg-white border border-[#E8E5DC] rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h4 className="font-semibold text-[16px] md:text-[18px] text-espresso mb-2 group-hover:text-[#8F6F3E] transition-colors">Routines</h4>
                <p className="text-[14px] text-grey">routine consistency is one of the four inputs.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <CtaSection
        title="Ready to see your score?"
        subtitle="track your beauty life. watch the number move."
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
