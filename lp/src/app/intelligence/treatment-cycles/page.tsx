import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, Activity, Bell, Clock, RefreshCw, Scissors, Sparkles, Syringe } from 'lucide-react';
import CtaSection from '../../../components/CtaSection';
import PhaseAwareCta from '../../../components/PhaseAwareCta';
import SurgicalMobileMockup from '../../../components/SurgicalMobileMockup';

export const metadata: Metadata = {
  title: 'aesthetic treatment cycle tracking and reminders',
  description: 'botox wears off. microneedling needs a course. fillers dissolve. nella knows the timeline of your treatment and reminds you when it\'s time to go back.',
  keywords: ['aesthetic treatment cycle tracking', 'botox reminder app', 'microneedling schedule', 'cosmetic maintenance tracker'],
  alternates: {
    canonical: 'https://mynella.app/intelligence/treatment-cycles'
  }
};

export default function TreatmentCyclesPage() {
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
              <span className="text-espresso font-semibold">Treatment Cycles</span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 pt-4 pb-0 md:pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10 pb-0 self-start lg:pt-12">

              <div className="inline-flex items-center gap-1.5 justify-start">
                <span className="font-display italic text-[13px] text-[#8F6F3E]">system logic</span>
              </div>
              <h1 className="font-display font-[600] text-[36px] sm:text-[48px] md:text-[54px] tracking-tight text-espresso leading-none">
                Treatment cycles.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-espresso/80 max-w-[420px] font-sans leading-relaxed">
                botox wears off. microneedling needs a course. fillers dissolve. nella knows the timeline of your treatment and reminds you when it's time to go back.
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
                <SurgicalMobileMockup initialScreen="history" autoPlay lockedTab />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left max-w-7xl mx-auto px-6 pt-36 md:pt-56 space-y-8 md:space-y-12 relative z-0">

        <div className="space-y-10 w-full">
          <div className="space-y-6 pt-2">
            <h2 className="font-display font-semibold text-[24px] text-espresso mb-4 text-center">Your beauty rotation.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-stretch">
              {/* Card 1: Nails */}
              <div className="bg-white border border-[#E8E5DC] rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group lg:col-span-2 h-full">
                <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 relative overflow-hidden">
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
                <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 relative overflow-hidden">
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
                <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 relative overflow-hidden">
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
                <div className="bg-[#FAF7F2] w-full flex-1 flex items-center justify-center p-6 relative overflow-hidden">
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
                <div className="bg-gradient-to-br from-[#FAF7F2] to-[#F5EDE0] w-full flex-1 flex items-center justify-center p-8 relative overflow-hidden">
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

          </div>

          <div className="space-y-4 pt-8 max-w-3xl mx-auto">
            <h2 className="font-display font-semibold text-[24px] text-espresso text-center">The reminder logic.</h2>
            <p className="text-[14px] text-grey font-sans leading-relaxed mb-6 text-center">
              for every treatment, nella sends four nudges across roughly a month.
            </p>

            <div className="space-y-3">
              <div className="flex gap-4 items-start p-4 bg-white border border-[#E8E5DC] rounded-xl">
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[12px] font-bold text-[#8F6F3E]">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-espresso text-[14px]">Seven days before due.</h4>
                  <p className="text-[13.5px] text-grey mt-0.5">a heads-up. plenty of time to book.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white border border-[#E8E5DC] rounded-xl">
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[12px] font-bold text-[#8F6F3E]">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-espresso text-[14px]">On the day.</h4>
                  <p className="text-[13.5px] text-grey mt-0.5">if you have not booked yet, this is the nudge.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white border border-[#E8E5DC] rounded-xl">
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[12px] font-bold text-[#8F6F3E]">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-espresso text-[14px]">Three days overdue.</h4>
                  <p className="text-[13.5px] text-grey mt-0.5">it is slipping. one more chance to catch it.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white border border-[#E8E5DC] rounded-xl">
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[12px] font-bold text-[#8F6F3E]">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-espresso text-[14px]">Fourteen days overdue.</h4>
                  <p className="text-[13.5px] text-grey mt-0.5">the cycle has broken. nella tells you, then stops nagging.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-12 mt-12 w-full">
            <h2 className="font-display font-semibold text-[24px] text-espresso">Related.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/what-it-does/tracking" className="block p-6 md:p-8 bg-white border border-[#E8E5DC] rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <h4 className="font-semibold text-[16px] md:text-[18px] text-espresso mb-2 group-hover:text-[#8F6F3E] transition-colors">Tracking</h4>
                  <p className="text-[14px] text-grey">see how the cycle data fits inside the treatment log.</p>
                </div>
              </Link>
              <Link href="/stories/treatments" className="block p-6 md:p-8 bg-white border border-[#E8E5DC] rounded-3xl relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#DEC68B] to-[#8F6F3E] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <h4 className="font-semibold text-[16px] md:text-[18px] text-espresso mb-2 group-hover:text-[#8F6F3E] transition-colors">Stories on treatments</h4>
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
