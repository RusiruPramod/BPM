import React from 'react';
import { useApp } from '../context/AppContext';
import { Mountain, Compass, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import imgEllaGuide13 from '../assets/real-imges/Ella Sri Lanka Guide13.jpg';

export default function HighlandSpotlight() {
  const { openBookingModal } = useApp();

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* High-Resolution Spotlight Image (4284x5712 natural size) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={imgEllaGuide13}
                alt="Traveler sitting on the precipice of Diyaluma waterfall cliff edge in Ella Sri Lanka"
                loading="lazy"
                decoding="async"
                className="w-full h-[520px] sm:h-[600px] object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating verified badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-500/30 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Hidden Highland Gems</span>
              </div>

              {/* Floating caption */}
              <div className="absolute bottom-5 inset-x-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                  Diyaluma Falls & Ella Cliff Ridge
                </span>
                <p className="text-sm font-medium text-slate-200 mt-1">
                  "Bandara guided us to the top tier rock pools safely before the crowds arrived. Unbelievable experience!"
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Content & Feature List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
              <Mountain className="w-3.5 h-3.5" />
              <span>Central Highlands Spotlight</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading leading-tight tracking-tight text-white">
              Breathtaking Waterfall Edges & Secret Hill Country Ridges
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Beyond the popular tourist trails lie Sri Lanka's most exhilarating high-altitude wonders. From the sheer cascading drop of Diyaluma Falls to panoramic tea estate switchbacks and secluded mountain infinity pools, our customized private driver tours provide stress-free navigation, local trail insights, and unmatched comfort.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { title: "Secret Natural Infinity Pools", desc: "Bathe in pristine mountain water pools high above the valleys." },
                { title: "Expert Local Trail Guidance", desc: "Bandara guides your route to ensure safe hiking & optimal photography hours." },
                { title: "Scenic Blue Train Integration", desc: "Enjoy the iconic train ride while your private vehicle transports your luggage to Ella." },
                { title: "Flexible Private Itineraries", desc: "Spend as much time as you desire without rushing to catch group buses." }
              ].map((feat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1.5 font-light leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openBookingModal({ serviceTitle: "Central Highlands & Ella Adventure", serviceType: "Hill Country Tour" })}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-3.5 px-7 rounded-2xl text-sm transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center gap-2"
              >
                <span>Plan Your Highland Adventure</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-2 text-xs text-slate-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Tailored for couples, solo travelers & families</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
