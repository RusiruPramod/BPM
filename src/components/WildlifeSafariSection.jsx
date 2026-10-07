import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Compass, Sparkles, MapPin, Maximize2, X, ShieldCheck, ArrowRight, Eye } from 'lucide-react';

import imgLeopardCrossingRoad from '../assets/real-imges/132.jpg';
import imgLeopardInJungle from '../assets/real-imges/istockphoto-1489566726-612x612.jpg';
import imgWildTusker from '../assets/real-imges/images (12).jpg';
import imgElephantFamily from '../assets/real-imges/images (13).jpg';

const SAFARI_ENCOUNTERS = [
  {
    id: "safari-1",
    src: imgLeopardCrossingRoad,
    title: "Wild Leopard Crossing Safari Jeep Track",
    park: "Yala National Park (Block 1)",
    time: "Early Morning Safari (06:30 AM)",
    badge: "Rare Sighting",
    caption: "Spectacular close-up encounter as a wild Sri Lankan leopard casually strolls across the gravel road right between waiting safari jeeps.",
    alt: "Wild Sri Lankan leopard crossing safari dirt road directly in front of safari jeeps"
  },
  {
    id: "safari-2",
    src: imgLeopardInJungle,
    title: "Leopard Stalking Dense Foliage",
    park: "Wilpattu & Yala Buffer Zones",
    time: "Late Afternoon (04:15 PM)",
    badge: "Apex Predator",
    caption: "Solitary panthera pardus kotiya silently moving through emerald jungle brush in search of spotted deer.",
    alt: "Sri Lankan leopard stalking cautiously through lush green jungle foliage"
  },
  {
    id: "safari-3",
    src: imgWildTusker,
    title: "Magnificent Wild Tusker Elephant",
    park: "Udawalawe & Minneriya",
    time: "Watering Hole Sighting",
    badge: "Majestic Tusker",
    caption: "A rare and revered sight in Sri Lanka—a majestic wild bull elephant bearing prominent ivory tusks grazing peacefully.",
    alt: "Magnificent wild tusker elephant grazing peacefully in Sri Lanka wilderness"
  },
  {
    id: "safari-4",
    src: imgElephantFamily,
    title: "Elephant Herd Nurturing Young Calf",
    park: "Udawalawe National Park",
    time: "Family Gathering",
    badge: "Wild Family",
    caption: "Gentle giants traveling together as adult matriarchs protectively guide and feed their playful baby elephant calf.",
    alt: "Wild elephant family with two adult elephants and baby elephant calf eating leaves"
  }
];

export default function WildlifeSafariSection() {
  const { openBookingModal } = useApp();
  const [activeSafari, setActiveSafari] = useState(null);

  return (
    <section className="py-20 bg-stone-950 text-white relative overflow-hidden">
      {/* Background ambience */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>Sri Lanka Big Five Wildlife</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-white tracking-tight">
            Leopard & Wild Elephant Safari Expeditions
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-3 leading-relaxed font-light">
            Sri Lanka boasts the highest leopard density on Earth and incredible wild elephant gatherings. Bandara coordinates customized 4x4 open-top safari jeeps with trusted local trackers across Yala, Udawalawe, and Minneriya.
          </p>
        </div>

        {/* 4-Card Safari Grid (Sized strictly ~280-340px to keep images 100% sharp and crisp) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAFARI_ENCOUNTERS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveSafari(item)}
              className="group bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-stone-950">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-stone-950/75 backdrop-blur-md text-amber-300 text-[10px] font-bold border border-amber-500/30">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{item.badge}</span>
                </div>

                {/* Hover prompt */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end justify-between text-white">
                  <span className="text-xs font-semibold text-amber-300">Click to view encounter</span>
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-stone-900">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-400/90 font-medium mb-1">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{item.park}</span>
                  </div>
                  <h4 className="font-bold text-white text-sm font-serif-heading leading-snug group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-300 mt-2 line-clamp-2 font-light leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                  <span>{item.time}</span>
                  <span className="text-amber-400 font-bold group-hover:underline">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safari call to action */}
        <div className="mt-12 bg-gradient-to-r from-amber-950/60 via-stone-900 to-amber-950/60 rounded-3xl p-6 sm:p-8 border border-amber-500/20 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Yala & Udawalawe Private Jeeps</span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-white">Ready for a Real Jungle Safari?</h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light">Bandara reserves pre-checked 4x4 jeeps with experienced trackers and park entrance permits.</p>
          </div>
          <button
            onClick={() => openBookingModal({ serviceTitle: "Yala National Park Safari Expedition", serviceType: "Wildlife Tour" })}
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold py-3 px-6 rounded-2xl text-xs transition-all shadow-lg flex items-center gap-1.5"
          >
            <span>Book Safari Tour</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeSafari && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in"
          onClick={() => setActiveSafari(null)}
        >
          <div
            className="relative max-w-xl w-full bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveSafari(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-800/80 hover:bg-rose-600 text-white flex items-center justify-center transition-colors border border-white/10 shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center p-2">
              <img
                src={activeSafari.src}
                alt={activeSafari.alt}
                decoding="async"
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            <div className="p-6 bg-stone-900 text-white border-t border-stone-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {activeSafari.badge}
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  • <MapPin className="w-3 h-3 text-amber-400" /> {activeSafari.park}
                </span>
              </div>
              <h3 className="text-xl font-bold font-serif-heading">{activeSafari.title}</h3>
              <p className="text-sm text-stone-300 mt-2 font-light leading-relaxed">{activeSafari.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
