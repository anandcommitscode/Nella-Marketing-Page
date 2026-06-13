import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, Activity, Bell, Clock, RefreshCw, Scissors, Sparkles, Syringe } from 'lucide-react';
import CtaSection from '../../../components/CtaSection';

export const metadata: Metadata = {
  title: 'treatment cycles: why your reminders fit you, not a generic schedule',
  description: 'every treatment has its own cycle. nails every three weeks. botox every twelve to sixteen. nella knows the cycles, so your reminders actually make sense.',
  keywords: ['beauty treatment cycles', 'how often botox', 'how often microneedling', 'treatment schedule app'],
  alternates: {
    canonical: 'https://mynella.app/intelligence/treatment-cycles'
  }
};

export default function TreatmentCyclesPage() {
  return (
    <div className="space-y-0">
      <div className="text-left max-w-5xl mx-auto px-6 py-12 space-y-12">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-grey">
          <Link href="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="text-grey font-normal">&gt;</span>
          <Link href="/intelligence" className="hover:text-espresso transition-colors">Intelligence</Link>
          <span className="text-grey font-normal">&gt;</span>
          <span className="text-espresso">Treatment Cycles</span>
        </div>

        <div className="pt-4 space-y-6 text-center border-b border-[#E8E5DC] pb-16">
          <div className="inline-flex items-center gap-1.5 justify-center">
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
            <span className="font-display italic text-[13px] text-[#8F6F3E]">system logic</span>
            <span className="w-4 h-[1.5px] bg-[#8F6F3E]"></span>
          </div>

          <h1 className="font-display font-[600] text-[36px] sm:text-[48px] tracking-tight text-espresso leading-none">
            Why your reminders fit you.
          </h1>

          <p className="text-[14px] sm:text-[15px] text-grey max-w-xl mx-auto font-sans leading-relaxed">
            every treatment has its own rhythm. nella knows each one, so you get a heads-up that actually lands.
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h2 className="font-display font-semibold text-[24px] text-espresso">How nella thinks about cycles.</h2>
            <div className="space-y-4 text-[14px] text-grey font-sans leading-relaxed">
              <p>every treatment has its own cycle length. nails grow in three weeks. brows in six. botox holds for twelve to sixteen. dermal filler lasts six to twelve months depending on the product and the area. these aren't arbitrary. they're biological.</p>
              <p>nella holds the cycle for every treatment you log. so the reminder you get is based on when this one is actually due.</p>
            </div>
          </div>

          <div className="space-y-6 pt-2">
            <h2 className="font-display font-semibold text-[24px] text-espresso mb-4">Your beauty rotation.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-stretch">
              {/* Card 1: Nails */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group lg:col-span-2 h-full">
                <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                  <div className="flex flex-col items-center gap-2 z-10 w-full">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#E8E5DC] group-hover:-translate-y-1 transition-transform duration-300">
                      <Scissors size={20} className="text-[#8F6F3E]" />
                    </div>
                    <div className="w-full max-w-[120px] h-1.5 bg-[#E8E5DC] rounded-full overflow-hidden">
                      <div className="h-full bg-[#8F6F3E] w-[80%] rounded-full group-hover:w-full transition-all duration-1000 ease-out"></div>
                    </div>
                    <span className="text-[10px] font-bold text-espresso uppercase tracking-wider">Due in 3 days</span>
                  </div>
                </div>
                <div className="p-5 md:p-6 space-y-1">
                  <div className="text-[16px] font-display font-semibold text-espresso">Nails</div>
                  <div className="text-[13.5px] text-[#8F6F3E] font-medium leading-relaxed">sit at 2-3 weeks</div>
                </div>
              </div>

              {/* Card 2: Brows */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group lg:col-span-2 h-full">
                <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                  <div className="relative w-16 h-16 flex items-center justify-center z-10">
                    <div className="absolute inset-0 border-2 border-dashed border-[#DEC68B] rounded-full group-hover:rotate-180 transition-transform duration-[2000ms] ease-linear"></div>
                    <RefreshCw size={24} className="text-[#8F6F3E]" />
                  </div>
                </div>
                <div className="p-5 md:p-6 space-y-1">
                  <div className="text-[16px] font-display font-semibold text-espresso">Brows</div>
                  <div className="text-[13.5px] text-[#8F6F3E] font-medium leading-relaxed">sit at 4-6 weeks</div>
                </div>
              </div>

              {/* Card 3: Hydrafacial */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group lg:col-span-2 h-full">
                <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#E8E5DC] flex items-center gap-3 z-10 group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-10 h-10 bg-[#FAF7F2] border border-[#E8E5DC] rounded-xl flex items-center justify-center">
                      <Sparkles size={16} className="text-[#8F6F3E]" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-bold text-espresso">Cycle Reset</span>
                      <span className="text-[9px] font-bold text-grey">Every month</span>
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6 space-y-1">
                  <div className="text-[16px] font-display font-semibold text-espresso">Hydrafacial</div>
                  <div className="text-[13.5px] text-[#8F6F3E] font-medium leading-relaxed">sits at 4-6 weeks</div>
                </div>
              </div>

              {/* Card 4: Botox */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group lg:col-span-3 h-full">
                <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                  <div className="flex items-center gap-2 z-10">
                    {[1, 2, 3].map((month, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5 group-hover:-translate-y-1 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                        <div className={`w-10 h-12 rounded-xl flex items-center justify-center text-[10px] font-bold ${i < 2 ? 'bg-[#1F1410] text-white shadow-sm' : 'bg-white border border-[#E8E5DC] text-grey'}`}>
                          M{month}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-5 md:p-6 space-y-1">
                  <div className="text-[16px] font-display font-semibold text-espresso">Botox</div>
                  <div className="text-[13.5px] text-[#8F6F3E] font-medium leading-relaxed">sits at 12-16 weeks</div>
                </div>
              </div>

              {/* Card 5: Dermal filler */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group md:col-span-2 lg:col-span-3 h-full">
                <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] w-full flex-1 flex items-center justify-center p-8 border-b border-[#E8E5DC]/60 relative overflow-hidden">
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 w-32 h-32 bg-[#DEC68B]/10 rounded-full blur-2xl"></div>
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-[#E8E5DC] flex items-center gap-4 z-10 group-hover:scale-105 transition-transform duration-500">
                    <div className="w-12 h-12 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0">
                      <Syringe size={20} className="text-[#8F6F3E]" />
                    </div>
                    <div className="space-y-1.5 min-w-[160px]">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-grey">
                        <span>Month 1</span>
                        <span>Month 12</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#E8E5DC] rounded-full overflow-hidden relative">
                        <div className="absolute top-0 left-0 bottom-0 bg-[#8F6F3E] w-[50%] rounded-full group-hover:w-[100%] transition-all duration-1000 ease-in-out"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5 md:p-6 space-y-1">
                  <div className="text-[16px] font-display font-semibold text-espresso">Dermal filler</div>
                  <div className="text-[13.5px] text-[#8F6F3E] font-medium leading-relaxed">sits at 6-12 months, depending on product and area</div>
                </div>
              </div>
            </div>
            <div className="text-[14px] text-grey font-sans leading-relaxed mt-4">
              <p>a treatment that needs three weeks gets a three-week cycle. one that needs three months gets three months. nella holds the right one for each.</p>
              <p className="font-medium text-espresso mt-2">the full list of treatments and their cycles lives inside the app.</p>
            </div>
          </div>

          <div className="space-y-4 pt-8">
            <h2 className="font-display font-semibold text-[24px] text-espresso">The reminder logic.</h2>
            <p className="text-[14px] text-grey font-sans leading-relaxed mb-6">
              for every treatment, nella sends four nudges across roughly a month.
            </p>

            <div className="space-y-3">
              <div className="flex gap-4 items-start p-4 bg-white border border-[#E8E5DC] rounded-xl">
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[12px] font-bold text-[#8F6F3E]">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-espresso text-[14px]">seven days before due.</h4>
                  <p className="text-[13.5px] text-grey mt-0.5">a heads-up. plenty of time to book.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white border border-[#E8E5DC] rounded-xl">
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[12px] font-bold text-[#8F6F3E]">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-espresso text-[14px]">on the day.</h4>
                  <p className="text-[13.5px] text-grey mt-0.5">if you have not booked yet, this is the nudge.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white border border-[#E8E5DC] rounded-xl">
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[12px] font-bold text-[#8F6F3E]">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-espresso text-[14px]">three days overdue.</h4>
                  <p className="text-[13.5px] text-grey mt-0.5">it is slipping. one more chance to catch it.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white border border-[#E8E5DC] rounded-xl">
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[12px] font-bold text-[#8F6F3E]">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-espresso text-[14px]">fourteen days overdue.</h4>
                  <p className="text-[13.5px] text-grey mt-0.5">the cycle has broken. nella tells you, then stops nagging.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-12 border-t border-[#E8E5DC] mt-12">
            <h2 className="font-display font-semibold text-[24px] text-espresso">Related.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/what-it-does/tracking" className="block p-6 md:p-8 bg-white border border-[#E8E5DC] rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <h4 className="font-semibold text-[16px] md:text-[18px] text-espresso mb-2 group-hover:text-[#8F6F3E] transition-colors">tracking</h4>
                  <p className="text-[14px] text-grey">see how the cycle data fits inside the treatment log.</p>
                </div>
              </Link>
              <Link href="/stories/treatments" className="block p-6 md:p-8 bg-white border border-[#E8E5DC] rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <h4 className="font-semibold text-[16px] md:text-[18px] text-espresso mb-2 group-hover:text-[#8F6F3E] transition-colors">stories on treatments</h4>
                  <p className="text-[14px] text-grey">honest guides to what treatments cost, last, and feel like.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaSection
        title="Reminders that actually fit you."
        subtitle=""
        backgroundClass="bg-transparent"
      />
    </div>
  );
}
