import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, AlertTriangle, Activity, Sun, Moon, CalendarDays, BarChart2, CheckCircle2, RefreshCw } from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import PhaseAwareCta from '../../components/PhaseAwareCta';
import SurgicalMobileMockup from '../../components/SurgicalMobileMockup';

export const metadata: Metadata = {
  title: 'the intelligence behind nella: ingredients, cycles, scores',
  description: 'the conflict logic, the cycle logic, the score logic. how nella turns what you track into intelligence you can use.',
  keywords: ['skincare ingredient intelligence', 'skincare conflict logic', 'treatment cycle science', 'glow score explained'],
  alternates: {
    canonical: 'https://mynella.app/intelligence'
  }
};

export default function IntelligenceHubPage() {
  return (
    <div className="space-y-0">
      <div className="px-4 md:px-8 pt-0 md:pt-0 relative z-20">
        <div className="rounded-[28px] md:rounded-[36px] bg-[#E8D5CE] overflow-visible relative group">
          {/* Breadcrumbs inside the hero */}
          <div className="max-w-7xl mx-auto px-6 pt-6 pb-0 relative z-10">
            <div className="flex items-center gap-2 text-[12px] font-semibold text-[#1F1410]/60">
              <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
              <span className="font-normal text-[#1F1410]/30">›</span>
              <span className="text-espresso font-semibold">Intelligence</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-4 pb-0 md:pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-start lg:pt-12">
              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">the intelligence</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                The bit a notes app cannot do.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-espresso/80 max-w-[420px] font-sans leading-relaxed">
                the conflict logic, the cycle logic, the score logic. how nella turns what you track into intelligence you can use.
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
                <SurgicalMobileMockup initialScreen="insights" autoPlay lockedTab />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left max-w-7xl mx-auto px-6 pt-36 md:pt-56 space-y-8 md:space-y-16 relative z-0">

        <section className="space-y-8 pt-6 w-full">
          <h2 className="font-display font-[600] text-[28px] text-espresso tracking-tight text-center mb-8">Three things nella knows.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
            {/* Card 1: Top Left (Conflicts) */}
            <Link
              href="/intelligence/ingredient-conflicts"
              className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full block"
            >
              <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute left-10 top-1/2 -translate-y-1/2 w-48 h-48 bg-[#DEC68B]/10 rounded-full blur-2xl"></div>
                {/* Graphic: Conflict resolution */}
                <div className="flex gap-4 items-center z-10 w-full max-w-[280px]">
                  <div className="flex-1 bg-white p-3 rounded-2xl shadow-sm border border-[#E8E5DC] space-y-2 group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="flex items-center gap-1.5 text-espresso">
                      <Sun size={12} className="text-[#8F6F3E]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">AM</span>
                    </div>
                    <div className="bg-[#FAF7F2] py-1.5 px-2 rounded-lg text-[11px] font-semibold text-espresso border border-[#E8E5DC]">
                      Vitamin C
                    </div>
                  </div>
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white border border-[#E8E5DC] shadow-sm flex items-center justify-center z-20 group-hover:rotate-180 transition-transform duration-700">
                    <RefreshCw size={14} className="text-[#8F6F3E]" />
                  </div>
                  <div className="flex-1 bg-[#1F1410] p-3 rounded-2xl shadow-sm border border-[#3A2418] space-y-2 group-hover:translate-y-2 transition-transform duration-500">
                    <div className="flex items-center gap-1.5 text-[#FAF7F2]">
                      <Moon size={12} className="text-[#DEC68B]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">PM</span>
                    </div>
                    <div className="bg-[#3A2418] py-1.5 px-2 rounded-lg text-[11px] font-semibold text-[#FAF7F2] border border-[#1F1410]">
                      Retinol
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display font-semibold text-[20px] text-espresso mb-3">
                  Ingredient conflicts.
                </h3>
                <p className="text-[14px] text-grey font-sans leading-relaxed max-w-xl mb-4">
                  which actives fight, which pair, which need a pause, and for how long. the science behind why your retinol goes off the menu the day you book microneedling, and why your vitamin C is back on after three.
                </p>
                <div className="text-[#8F6F3E] font-semibold text-[13.5px] flex items-center gap-1 group-hover:gap-2 transition-all">
                  read more <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* Card 3: Right Side Tall (Glow Score) */}
            <Link
              href="/intelligence/glow-score"
              className="md:col-span-2 lg:col-span-1 lg:row-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full block"
            >
              <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] w-full flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden min-h-[280px]">
                <div className="absolute right-[-10%] top-[-10%] w-48 h-48 bg-[#DEC68B]/10 rounded-full blur-3xl"></div>

                <div className="w-[85%] bg-white rounded-2xl shadow-sm border border-[#E8E5DC] p-4 group-hover:-translate-y-2 transition-transform duration-500 z-10 relative overflow-hidden mt-8">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#DEC68B]/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#8F6F3E]">Glow Score</span>
                    <span className="text-[11px] font-bold text-[#8F6F3E] bg-[#FAF7F2] px-2 py-0.5 rounded-full border border-[#E8E5DC]">+8 pts</span>
                  </div>
                  <div className="flex items-end gap-3 mb-2 relative z-10">
                    <span className="text-[48px] font-display font-bold text-espresso leading-none">82</span>
                    <span className="text-[12px] text-grey font-medium pb-2">/ 100</span>
                  </div>
                  {/* Mini Bar Chart */}
                  <div className="flex items-end gap-1.5 h-16 mt-6 relative z-10">
                    {[35, 45, 50, 65, 74, 82].map((val, idx) => (
                      <div key={idx} className="flex-1 bg-[#FAF7F2] rounded-t-sm relative group-hover:bg-[#F5EDE0] transition-colors h-full flex items-end">
                        <div
                          className="w-full rounded-t-sm bg-gradient-to-t from-[#DEC68B] to-[#8F6F3E] opacity-70 group-hover:opacity-100 transition-all duration-700"
                          style={{ height: `${val}%`, transitionDelay: `${idx * 100}ms` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display font-semibold text-[20px] text-espresso mb-3">
                  The glow score.
                </h3>
                <p className="text-[14px] text-grey font-sans leading-relaxed mb-4">
                  what nella measures, why those four things matter, and how the number calibrates to you over your first two weeks. plus what the score is actually telling you as it moves.
                </p>
                <div className="text-[#8F6F3E] font-semibold text-[13.5px] flex items-center gap-1 group-hover:gap-2 transition-all">
                  read more <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* Card 2: Bottom Left (Treatment Cycles) */}
            <Link
              href="/intelligence/treatment-cycles"
              className="md:col-span-2 lg:col-span-2 relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full block"
            >
              <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 relative overflow-hidden">
                {/* Graphic: Cycle logic */}
                <div className="w-full max-w-[300px] flex flex-col gap-3 z-10 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-[#E8E5DC]">
                    <div className="w-10 h-10 rounded-xl bg-warm-ivory flex items-center justify-center shrink-0">
                      <CalendarDays size={16} className="text-[#8F6F3E]" />
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <div className="flex justify-between items-center text-[11px] font-bold uppercase text-espresso">
                        <span>Botox Cycle</span>
                        <span className="text-grey">12 Weeks</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#E8E5DC] rounded-full overflow-hidden">
                        <div className="h-full bg-[#8F6F3E] w-[75%] rounded-full group-hover:w-[100%] transition-all duration-1000 ease-out"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-[#E8E5DC] opacity-70 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="w-10 h-10 rounded-xl bg-warm-ivory flex items-center justify-center shrink-0">
                      <CheckCircle2 size={16} className="text-[#8F6F3E]" />
                    </div>
                    <div className="flex-1 space-y-1.5">
                      <div className="flex justify-between items-center text-[11px] font-bold uppercase text-espresso">
                        <span>Brows Cycle</span>
                        <span className="text-[#8F6F3E]">Due Today</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#E8E5DC] rounded-full overflow-hidden">
                        <div className="h-full bg-[#8F6F3E] w-full rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display font-semibold text-[20px] text-espresso mb-3">
                  Treatment cycles.
                </h3>
                <p className="text-[14px] text-grey font-sans leading-relaxed max-w-xl mb-4">
                  why your nails are due in three weeks and your botox in twelve. how nella knows the cycle for every treatment type, and how the reminder logic escalates from gentle to overdue.
                </p>
                <div className="text-[#8F6F3E] font-semibold text-[13.5px] flex items-center gap-1 group-hover:gap-2 transition-all">
                  read more <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>

        </section>

        <section className="w-full pt-12">
          <div className="relative overflow-hidden bg-white border border-[#E8E5DC] rounded-[32px] p-8 md:p-10 shadow-sm mt-4">
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
            <div className="relative z-10">
              <h2 className="font-display font-[600] text-[28px] text-espresso tracking-tight mb-4">What nella is not.</h2>
              <div className="space-y-4 text-[14px] text-grey font-sans leading-relaxed">
                <p>
                  nella is not a medical product. the score is not a diagnosis. the aftercare is not clinical advice. it's a personal organisation tool for a woman who is already getting treatments and using products, designed to keep the picture whole and the timing right.
                </p>
                <p>
                  every feature is built on the question "what does she need to know now?" the answer is rarely complicated. the value is in the consistency of getting it right.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <CtaSection
        title="Ready to try her?"
        subtitle="free to use. £4.99 a month for Pro. cancel anytime."
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
