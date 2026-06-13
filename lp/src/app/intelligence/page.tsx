import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, AlertTriangle, Activity, Sun, Moon, CalendarDays, BarChart2, CheckCircle2, RefreshCw } from 'lucide-react';
import CtaSection from '../../components/CtaSection';

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
      <div className="text-left max-w-7xl mx-auto px-6 py-16 space-y-16">
      <section className="space-y-6 text-center pb-16">
        <div className="inline-flex items-center gap-1.5 justify-center">
          <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          <span className="font-display italic text-[13px] text-[#8F6F3E]">the intelligence</span>
          <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
        </div>

        <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none text-center">
          The intelligence behind her.
        </h1>

        <p className="text-[14px] sm:text-[15px] text-grey max-w-2xl mx-auto font-sans leading-relaxed text-center">
          nella takes what you track and turns it into what you can use. here's how she does it.
        </p>
      </section>

      <section className="space-y-8 pt-6 max-w-5xl mx-auto px-4 sm:px-0">
        <h2 className="font-display font-[600] text-[28px] text-espresso tracking-tight text-center mb-8">Three things nella knows.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto items-stretch">
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
                  ingredient conflicts.
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
              
              <div className="w-full flex flex-col gap-6 z-10 items-center justify-center pt-8">
                {[
                  { score: '82', label: 'Today', stroke: 'stroke-[#8F6F3E]', offset: '40' },
                  { score: '74', label: 'Yesterday', stroke: 'stroke-[#DEC68B]', offset: '60' },
                  { score: '65', label: '2 days ago', stroke: 'stroke-[#E8E5DC]', offset: '90' }
                ].map((item, i) => (
                  <div key={i} className={`relative w-${i === 0 ? '28' : '20'} h-${i === 0 ? '28' : '20'} bg-white rounded-full flex flex-col items-center justify-center shadow-md border-[4px] border-[#FAF7F2] group-hover:-translate-y-1 transition-transform duration-500`} style={{ transitionDelay: `${i * 100}ms` }}>
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle cx="50%" cy="50%" r="46%" fill="transparent" stroke="currentColor" strokeWidth="4" strokeDasharray="200" strokeDashoffset={item.offset} className={`text-transparent ${item.stroke}`} />
                    </svg>
                    <span className={`font-display font-bold text-espresso leading-none ${i === 0 ? 'text-[28px]' : 'text-[20px]'}`}>{item.score}</span>
                    <span className="text-[9px] font-bold text-grey uppercase tracking-wider mt-0.5">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-display font-semibold text-[20px] text-espresso mb-3">
                  the glow score.
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
                  treatment cycles.
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

      <section className="max-w-4xl mx-auto px-4 sm:px-0 pt-12">
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
        backgroundClass="bg-transparent mt-12"
      />
    </div>
  );
}
