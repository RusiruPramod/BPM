import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Waves, Sparkles, MapPin, Maximize2, X, Compass, ArrowRight } from 'lucide-react';

import imgDiyalumaInfinityPool from '../assets/real-imges/images (7).jpg';
import imgDiyalumaLandscape from '../assets/real-imges/images (8).jpg';
import imgDiyalumaWaterfallRock from '../assets/real-imges/images (9).jpg';
import imgDiyalumaSwimmerRock from '../assets/real-imges/images (10).jpg';
import imgDiyalumaCouplePool from '../assets/real-imges/images (11).jpg';
import imgEllaRockCliff from '../assets/real-imges/images (6).jpg';

const DIYALUMA_ADVENTURE_ITEMS = [
  {
    id: "diyaluma-1",
    src: imgDiyalumaInfinityPool,
    title: "Cliff-Edge Natural Infinity Pool",
    location: "Upper Diyaluma Falls",
    caption: "Swimmer looking over the breathtaking 220-meter drop into the Koslanda valley from the natural rock pools.",
    badge: "Infinity Pool",
    alt: "Young woman swimming in natural rock pool right at the edge of Diyaluma waterfall precipice"
  },
  {
    id: "diyaluma-2",
    src: imgDiyalumaLandscape,
    title: "Cascading Mountain Rock Terraces",
    location: "Diyaluma Upper Tier",
    caption: "The majestic multi-tiered rock basins and natural waterslide terraces sculpted over millennia by rushing waters.",
    badge: "Rock Basin",
    alt: "Multi-tiered natural rock pools and cascading waterfalls at top of Diyaluma"
  },
  {
    id: "diyaluma-3",
    src: imgDiyalumaWaterfallRock,
    title: "Mountain Stream Cascades",
    location: "Koslanda Forest",
    caption: "Cool freshwater streams and crystal pools surrounded by untamed tropical forest flora and mountain breeze.",
    badge: "Freshwater Fall",
    alt: "Traveler resting on smooth granite boulder beside rushing mountain waterfall stream"
  },
  {
    id: "diyaluma-4",
    src: imgDiyalumaSwimmerRock,
    title: "Secluded Granite Swimming Basin",
    location: "Upper Falls Basin",
    caption: "Natural freshwater swimming pool carved into smooth granite, offering a refreshing mountain dip.",
    badge: "Secret Basin",
    alt: "Traveler swimming in deep clear natural mountain rock basin pool"
  },
  {
    id: "diyaluma-5",
    src: imgDiyalumaCouplePool,
    title: "Couple's Cascading Jungle Oasis",
    location: "Hidden Upper Pools",
    caption: "Peaceful moments between jungle cascades away from crowded tour routes.",
    badge: "Couple's Retreat",
    alt: "Couple relaxing on rock ledge between cascading natural jungle pools at Diyaluma"
  },
  {
    id: "diyaluma-6",
    src: imgEllaRockCliff,
    title: "Ella Rock Sunset Horizon",
    location: "Ella Rock Summit",
    caption: "Standing atop the panoramic mountain ridge as dusk falls over Ella Gap and Little Adam's Peak.",
    badge: "Sunset Ridge",
    alt: "Male traveler standing on rocky cliff overlooking sunset horizon at Ella Rock"
  }
];

export default function DiyalumaAdventureSection() {
  const { openBookingModal } = useApp();
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/30">
            <Waves className="w-3.5 h-3.5" />
            <span>Wild Waterfall Expeditions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-white tracking-tight">
            Diyaluma Falls & Natural Rock Pool Mosaic
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-light">
            Sri Lanka’s 2nd highest waterfall features world-famous cliff-top natural infinity pools. Discover this natural adventure safely with your dedicated local guide Bandara Premathilaka.
          </p>
        </div>

        {/* 6-Card Mosaic Grid (Card sizes strictly sized ~280-360px wide to preserve crisp native resolution) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIYALUMA_ADVENTURE_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden bg-slate-800 border border-slate-700/60 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
              />

              {/* Gradient for caption readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-teal-300 text-[11px] font-bold border border-teal-500/30 shadow-md">
                <Sparkles className="w-3 h-3 text-teal-400" />
                <span>{item.badge}</span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-4 inset-x-4 text-white">
                <div className="flex items-center gap-1 text-[11px] text-slate-300 font-medium mb-1">
                  <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>{item.location}</span>
                </div>
                <h4 className="font-bold text-base font-serif-heading leading-snug group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2 font-light">
                  {item.caption}
                </p>

                <div className="mt-3 flex items-center justify-between text-xs font-semibold text-teal-400 border-t border-white/10 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="flex items-center gap-1">
                    <Compass className="w-3 h-3" /> View Natural Size
                  </span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => openBookingModal({ serviceTitle: "Diyaluma Falls & Ella Adventure Excursion", serviceType: "Day Tour" })}
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold py-3.5 px-7 rounded-2xl text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span>Book a Guided Diyaluma Falls Hike</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lightbox Popup (Constrained to max-w-xl / natural proportions to prevent pixelation) */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-rose-600 text-white flex items-center justify-center transition-colors border border-white/10 shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center p-2">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                decoding="async"
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white border-t border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  {activePhoto.badge}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  • <MapPin className="w-3 h-3 text-amber-400" /> {activePhoto.location}
                </span>
              </div>
              <h3 className="text-xl font-bold font-serif-heading">{activePhoto.title}</h3>
              <p className="text-sm text-slate-300 mt-2 font-light leading-relaxed">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
