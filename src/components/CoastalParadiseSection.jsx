import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sun, Palmtree, MapPin, Maximize2, X, Compass, Utensils, Music, Waves, ArrowRight } from 'lucide-react';

import imgWeligamaBayWaves from '../assets/real-imges/weligama (1).jpg';
import imgMirissaParrotBay from '../assets/real-imges/miriis2.jpg';
import imgMirissaCoconutCouple from '../assets/real-imges/mirissa.jpg';
import imgMirissaHeadlandCoast from '../assets/real-imges/misirra.jpg';
import imgWeligamaSunsetBoats from '../assets/real-imges/weligma.jpg';
import imgMirissaNightlife from '../assets/real-imges/Mirissas-exciting-nightlife-experiences-are-full-of-colors-and-cheerful-sounds.jpg';
import imgMirissaBeachBar from '../assets/real-imges/crowded-view-of-people-and-tables-of-beach-bar-mirissa-sri-lanka-asia-kknc9b.jpg';
import imgMirissaParrotDrone from '../assets/real-imges/mirissa3.jpg';
import imgSecretBeachSunset from '../assets/real-imges/Things-To-Do-Mirissa-Sri-Lanka-secret-beach-sunset.avif';

const COASTAL_ITEMS = [
  {
    id: "coast-1",
    src: imgMirissaParrotBay,
    title: "Mirissa Crescent & Parrot Rock",
    location: "Mirissa Bay",
    category: "Beach & Lagoon",
    tag: "Whale Watching Hub",
    caption: "Golden sands gently curving around turquoise waters with Parrot Rock standing proud in the ocean.",
    alt: "Aerial perspective of Mirissa bay golden beach with Parrot Rock"
  },
  {
    id: "coast-2",
    src: imgMirissaCoconutCouple,
    title: "Coconut Tree Hill Palm Clustered View",
    location: "Mirissa Promontory",
    category: "Iconic Viewpoint",
    tag: "Photo Hotspot",
    caption: "Travelers gazing out across the vast Indian Ocean under leaning groves of tall coconut palms.",
    alt: "Couple standing on Coconut Tree Hill under tall palm trees overlooking ocean in Mirissa"
  },
  {
    id: "coast-3",
    src: imgMirissaHeadlandCoast,
    title: "Red Cliffs of Coconut Tree Hill",
    location: "Mirissa Peninsula",
    category: "Coastal Ridge",
    tag: "Drone Perspective",
    caption: "The famous reddish-brown earthen hill stretching into the deep blue ocean, creating an unforgettable tropical outline.",
    alt: "Vertical view of Coconut Tree Hill red soil and coconut palms surrounded by azure sea"
  },
  {
    id: "coast-4",
    src: imgWeligamaSunsetBoats,
    title: "Sunset Fishing Catamarans on Wet Sand",
    location: "Weligama Beach",
    category: "Local Heritage",
    tag: "Sunset Glow",
    caption: "Traditional wooden outrigger boats resting on wet sand reflecting the fiery golden hues of the setting sun.",
    alt: "Traditional fishing boats on Weligama beach bathed in glowing orange sunset light"
  },
  {
    id: "coast-5",
    src: imgMirissaParrotDrone,
    title: "Parrot Rock Coral Headland Aerial",
    location: "Parrot Rock, Mirissa",
    category: "Coastal Panorama",
    tag: "Coral Lagoon",
    caption: "High aerial perspective overlooking Parrot Rock and the turquoise reef lagoons of Mirissa Bay.",
    alt: "High drone aerial view of Parrot Rock and turquoise coral waters in Mirissa"
  },
  {
    id: "coast-6",
    src: imgSecretBeachSunset,
    title: "Secret Beach Hidden Lagoon Sunset",
    location: "Secret Beach, Mirissa",
    category: "Hidden Cove",
    tag: "Golden Hour Glow",
    caption: "Secluded coconut beach cove glowing under warm golden hour sunset rays, sheltered from ocean waves.",
    alt: "Golden hour sunset over turquoise tidal pools at Secret Beach Mirissa"
  },
  {
    id: "coast-7",
    src: imgMirissaNightlife,
    title: "Vibrant Beachside Nightlife & Music",
    location: "Mirissa Shoreline Strip",
    category: "Evening Atmosphere",
    tag: "Beach Parties",
    caption: "Lively music, candlelit beach cabanas, and cheerful travelers dancing beneath fairy-lit palm trees.",
    alt: "Crowd of tourists celebrating and dancing at illuminated beachfront night venue in Mirissa"
  },
  {
    id: "coast-8",
    src: imgMirissaBeachBar,
    title: "Seafood Dining Directly on the Sand",
    location: "Mirissa Coastline",
    category: "Culinary",
    tag: "Fresh Seafood",
    caption: "Open-air dining tables placed directly on the soft sand where guests feast on fresh grilled catches of the day.",
    alt: "Open-air dining tables on sand at Mirissa beach bar with tourists enjoying dinner"
  }
];

export default function CoastalParadiseSection() {
  const { openBookingModal } = useApp();
  const [activeCoastal, setActiveCoastal] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 via-amber-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Palmtree className="w-3.5 h-3.5 text-sky-600" />
            <span>Southern Coast Paradise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif-heading tracking-tight">
            Mirissa & Weligama Coastal Sunshine
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            From the coconut-covered promontory of Mirissa to world-famous surf breaks in Weligama, vibrant beachfront dining, and blue whale watching expeditions.
          </p>
        </div>

        {/* Featured Panoramic Image (Weligama 1 - 830x330 Medium Resolution) */}
        <div 
          onClick={() => setActiveCoastal({
            src: imgWeligamaBayWaves,
            title: "Weligama Bay & Taprobane Island Panoramic Coast",
            location: "Weligama Bay",
            category: "Panoramic Coastline",
            caption: "Wide panorama of Weligama's sweeping tropical surf bay with gentle rolling waves breaking along golden sand.",
            alt: "Wide panoramic view of Taprobane Island and ocean waves at Weligama bay"
          })}
          className="mb-8 rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 relative h-60 sm:h-72 cursor-pointer group"
        >
          <img
            src={imgWeligamaBayWaves}
            alt="Wide panoramic view of Taprobane Island and ocean waves at Weligama bay"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-sky-200 w-fit mb-2">
              <Waves className="w-3 h-3" />
              <span>Panoramic Coastal Sweep</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif-heading text-white">
              Weligama Bay & Taprobane Island Coastal Panorama
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl font-light">
              Gentle surf breaks, beginner-friendly waves, and tranquil ocean breezes on the southern tip of Sri Lanka.
            </p>
          </div>
        </div>

        {/* 8-Card Grid for coastal gems (All sized comfortably ~260-320px wide) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COASTAL_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveCoastal(item)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Badge */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-amber-300 text-[10px] font-bold border border-white/10 shadow-sm">
                  <span>{item.tag}</span>
                </div>

                {/* Hover prompt */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end justify-between text-white">
                  <span className="text-xs font-semibold text-amber-300">Click to view photo</span>
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] text-sky-700 font-semibold mb-1">
                    <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm font-serif-heading leading-snug group-hover:text-sky-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2 font-light leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-medium text-slate-600">{item.category}</span>
                  <span className="text-sky-600 font-bold group-hover:underline">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => openBookingModal({ serviceTitle: "Southern Coast & Mirissa Beach Tour", serviceType: "Coastal Tour" })}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-sky-600 text-white font-bold py-3.5 px-7 rounded-2xl text-sm transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <span>Book a Southern Coast & Whale Tour</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeCoastal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in"
          onClick={() => setActiveCoastal(null)}
        >
          <div
            className="relative max-w-xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCoastal(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-rose-600 text-white flex items-center justify-center transition-colors border border-white/10 shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center p-2">
              <img
                src={activeCoastal.src}
                alt={activeCoastal.alt || activeCoastal.title}
                decoding="async"
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white border-t border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {activeCoastal.category || "Southern Coast"}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  • <MapPin className="w-3 h-3 text-emerald-400" /> {activeCoastal.location}
                </span>
              </div>
              <h3 className="text-xl font-bold font-serif-heading">{activeCoastal.title}</h3>
              <p className="text-sm text-slate-300 mt-2 font-light leading-relaxed">{activeCoastal.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
