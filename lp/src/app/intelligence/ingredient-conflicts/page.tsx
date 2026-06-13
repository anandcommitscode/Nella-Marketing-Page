import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, Sparkles, Activity, Plus, Sun, Moon, PauseCircle, ShieldAlert, Lock } from 'lucide-react';
import CtaSection from '../../../components/CtaSection';

export const metadata: Metadata = {
  title: 'ingredient conflicts: which actives fight, and which to pause',
  description: 'retinol and vitamin C, AHA and BHA, niacinamide and acid. the science behind nella\'s conflict logic, in plain english.',
  keywords: ['skincare ingredient conflicts', 'can you use retinol with vitamin c', 'niacinamide and vitamin c', 'retinol AHA', 'skincare ingredient guide'],
  alternates: {
    canonical: 'https://mynella.app/intelligence/ingredient-conflicts'
  }
};

export default function IngredientConflictsPage() {
  return (
    <div className="space-y-0">
      <div className="text-left max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-grey">
          <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="text-grey font-normal">&gt;</span>
          <Link href="/intelligence" className="hover:text-espresso transition-colors">Intelligence</Link>
          <span className="text-grey font-normal">&gt;</span>
          <span className="text-espresso">Ingredient Conflicts</span>
        </div>

        <div className="pt-4 space-y-6 text-center pb-16">
          <div className="inline-flex items-center gap-1.5 justify-center">
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
            <span className="font-display italic text-[13px] text-[#8F6F3E]">conflict logic</span>
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          </div>

          <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none">
            Which actives fight, and which to pause.
          </h1>

          <p className="text-[14px] sm:text-[15px] text-grey max-w-xl mx-auto font-sans leading-relaxed">
            every product in your routine cross-checked against every other. nella's conflict logic, explained.
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="font-display font-semibold text-[24px] text-espresso">How nella thinks about conflicts.</h2>
            <div className="space-y-4 text-[14px] text-grey font-sans leading-relaxed">
              <p>a conflict is not always a hard stop. some pairs are myths. some pairs are fine if you separate them by twelve hours. some pairs genuinely need a pause for a number of days.</p>
              <p>nella treats them differently because they're different. every product in your routine is tagged for its active ingredients. every treatment you log carries its own rules about which actives go off the menu and for how long. when a conflict appears, nella tells you what's happening and what to do about it.</p>
              <p className="font-medium text-espresso">what follows is the conflict logic for the pairs that come up most. the full library lives inside the app.</p>
            </div>
          </div>

          <div className="space-y-6 pt-2">
            <h2 className="font-display font-semibold text-[24px] text-espresso mb-4">The conflicts that come up most.</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Card 1: Retinol & Vit C */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]">
                <div className="h-[130px] bg-[#FAF7F2] w-full flex items-center justify-center p-5 relative overflow-hidden">
                  <div className="flex gap-4 items-center z-10 w-full max-w-[240px]">
                    <div className="flex-1 bg-white p-3 rounded-2xl shadow-sm border border-[#E8E5DC] space-y-2 group-hover:-translate-y-1 transition-transform duration-500">
                      <div className="flex items-center gap-1.5 text-espresso">
                        <Sun size={12} className="text-[#8F6F3E]" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">AM</span>
                      </div>
                      <div className="bg-[#FAF7F2] py-1.5 px-2 rounded-lg text-[11px] font-semibold text-espresso border border-[#E8E5DC]">
                        Vitamin C
                      </div>
                    </div>
                    <div className="flex-1 bg-[#1F1410] p-3 rounded-2xl shadow-sm border border-[#3A2418] space-y-2 group-hover:translate-y-1 transition-transform duration-500">
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
                <div className="p-5 md:p-6 space-y-2.5 flex-grow">
                  <h4 className="font-sans font-[600] text-[16px] text-espresso">retinol and vitamin C.</h4>
                  <p className="text-[13.5px] text-grey font-sans leading-relaxed">the myth says they cancel each other out. the reality says they work on different pathways and most skin tolerates them on different days. nella keeps them apart in the schedule. vitamin C in the AM, retinol in the PM, on the nights you've set retinol to run.</p>
                </div>
              </div>

              {/* Card 2: Retinol & AHA or BHA */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]">
                <div className="h-[130px] bg-[#FAF7F2] w-full flex items-center justify-center p-5">
                  <div className="flex gap-2 items-end z-10">
                    {[
                      { day: 'Mon', type: 'AHA', active: true, color: 'bg-warm-ivory text-[#8F6F3E]' },
                      { day: 'Tue', type: 'RET', active: true, color: 'bg-[#1F1410] text-[#FAF7F2]' },
                      { day: 'Wed', type: 'AHA', active: true, color: 'bg-warm-ivory text-[#8F6F3E]' },
                      { day: 'Thu', type: 'REST', active: false, color: 'bg-white text-grey' },
                    ].map((item, i) => (
                      <div key={i} className={`flex flex-col items-center gap-1.5 transition-transform duration-500 ${item.active ? 'group-hover:-translate-y-2' : ''}`} style={{ transitionDelay: `${i * 75}ms` }}>
                        <div className={`w-12 h-14 rounded-xl flex items-center justify-center text-[10px] font-bold border ${item.active ? 'border-transparent shadow-sm' : 'border-[#E8E5DC]'} ${item.color}`}>
                          {item.type}
                        </div>
                        <span className="text-[9px] font-bold text-grey uppercase">{item.day}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5 md:p-6 space-y-2.5 flex-grow">
                  <h4 className="font-sans font-[600] text-[16px] text-espresso">retinol and AHA or BHA.</h4>
                  <p className="text-[13.5px] text-grey font-sans leading-relaxed">both are exfoliating. used together they can overwhelm the skin barrier. nella separates them: AHA on one PM, retinol on another, never on the same night.</p>
                </div>
              </div>

              {/* Card 4: Retinol & Microneedling */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.7rem)]">
                <div className="h-[130px] bg-[#FAF7F2] w-full flex items-center justify-center p-5 relative">
                  <div className="w-full max-w-[220px] space-y-3 z-10">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-1.5 text-espresso">
                        <PauseCircle size={14} className="text-[#8C5249]" />
                        <span className="text-[11px] font-bold">Retinol Paused</span>
                      </div>
                      <span className="text-[10px] font-bold text-grey">Day 3 of 7</span>
                    </div>
                    <div className="w-full h-2 bg-white rounded-full border border-[#E8E5DC] overflow-hidden relative">
                      <div className="absolute top-0 left-0 bottom-0 bg-[#8C5249] w-[42%] rounded-full group-hover:w-[100%] transition-all duration-1000 ease-in-out"></div>
                    </div>
                    <div className="flex justify-between text-[9px] font-bold text-grey uppercase tracking-wider">
                      <span>Microneedling</span>
                      <span>Recovery</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6 space-y-2.5 flex-grow">
                  <h4 className="font-sans font-[600] text-[16px] text-espresso">retinol and microneedling.</h4>
                  <p className="text-[13.5px] text-grey font-sans leading-relaxed">retinol pauses for seven days post-microneedling. the skin barrier is recovering. retinol on day three is not how you protect a £180 treatment.</p>
                </div>
              </div>

              {/* Card 5: Vitamin C & Microneedling */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.5rem)]">
                <div className="h-[130px] bg-[#FAF7F2] w-full flex items-center justify-center p-5 relative">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#E8E5DC] flex items-center gap-3 z-10 w-full max-w-[200px] group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center relative overflow-hidden shrink-0">
                      <Lock size={16} className="text-grey z-10" />
                      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[11px] font-bold text-espresso line-through decoration-grey/50">Vitamin C</div>
                      <div className="text-[9px] font-bold text-espresso bg-[#FAF7F2] border border-[#E8E5DC] px-1.5 py-0.5 rounded inline-block">Holds for 3 days</div>
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6 space-y-2.5 flex-grow">
                  <h4 className="font-sans font-[600] text-[16px] text-espresso">vitamin C and microneedling.</h4>
                  <p className="text-[13.5px] text-grey font-sans leading-relaxed">vitamin C pauses for three days post-microneedling. low pH on a recovering barrier is a bad idea. nella holds it back automatically.</p>
                </div>
              </div>

              {/* Card 3: Niacinamide & Vit C (Moved to bottom) */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(50%-0.5rem)]">
                <div className="h-[130px] bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] w-full flex items-center justify-center p-5 relative">
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#DEC68B]/10 rounded-full blur-2xl"></div>
                  <div className="bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgba(31,20,16,0.08)] border border-[#E8E5DC] flex items-start gap-4 z-10 w-full max-w-[400px] group-hover:scale-105 transition-transform duration-500">
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 border border-[#E8E5DC]">
                      <ShieldAlert size={18} className="text-[#8F6F3E]" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <h5 className="text-[13px] font-bold text-espresso">Formulation Check</h5>
                        <span className="text-[10px] font-bold text-espresso bg-[#FAF7F2] border border-[#E8E5DC] px-2 py-0.5 rounded-full">Flagged</span>
                      </div>
                      <p className="text-[11.5px] text-grey leading-tight">Older vitamin C formulation detected. May conflict with Niacinamide. Proceed with caution.</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6 space-y-2.5 flex-grow">
                  <h4 className="font-sans font-[600] text-[16px] text-espresso">niacinamide and vitamin C.</h4>
                  <p className="text-[13.5px] text-grey font-sans leading-relaxed max-w-3xl">the older science said they cancelled out. the newer science says modern formulations are mostly fine. nella allows them together but flags it if your formulation is one of the older versions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <h2 className="font-display font-semibold text-[24px] text-espresso">What happens when you log a treatment.</h2>
            <p className="text-[14px] text-grey font-sans leading-relaxed">
              you log a glycolic peel on saturday. the moment you save the entry, your AHA pauses for five days. your retinol pauses for seven. your routine checklist for tonight updates: gentle cleanser, ceramide moisturiser, SPF tomorrow morning. day five: AHA returns. day seven: retinol returns. nella tells you. your routine resumes itself.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E8E5DC] rounded-2xl text-[13.5px] text-grey font-sans leading-relaxed shadow-sm relative overflow-hidden mt-8">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E]"></div>
            <h2 className="font-semibold text-espresso mb-1 text-[16px]">A note on the science.</h2>
            <p>
              nella's conflict logic was built with input from licenced practioners and published dermatology research. the rules are reviewed quarterly. where the science is unsettled, nella errs on the side of the longer pause. your face is not the place for guesswork.
            </p>
          </div>

          <div className="space-y-4 pt-12 mt-12">
            <h2 className="font-display font-semibold text-[24px] text-espresso">Related.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/what-it-does/routines" className="block p-6 md:p-8 bg-white border border-[#E8E5DC] rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <h4 className="font-semibold text-[16px] md:text-[18px] text-espresso mb-2 group-hover:text-[#8F6F3E] transition-colors">routines</h4>
                  <p className="text-[14px] text-grey">see how the conflict logic lives inside your daily checklist.</p>
                </div>
              </Link>
              <Link href="/what-it-does/aftercare" className="block p-6 md:p-8 bg-white border border-[#E8E5DC] rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <h4 className="font-semibold text-[16px] md:text-[18px] text-espresso mb-2 group-hover:text-[#8F6F3E] transition-colors">aftercare</h4>
                  <p className="text-[14px] text-grey">the treatments that trigger the pauses, day by day.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaSection
        title="The conflict logic that runs itself."
        subtitle=""
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
