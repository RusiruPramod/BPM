import React, { useState } from 'react';
import { Camera, MapPin, Maximize2, X, Sparkles } from 'lucide-react';

import imgNineArchWomanHat from '../assets/real-imges/ninearch.jpg';
import imgPidurangalaSunrise from '../assets/real-imges/images (5).jpg';
import imgMirissaBayDrone from '../assets/real-imges/images (4).jpg';
import imgElephantSigiriyaLake from '../assets/real-imges/images (3).jpg';
import imgGalleClockTower from '../assets/real-imges/images.jpg';
import imgGalleLighthouseSunset from '../assets/real-imges/istockphoto-1254219156-612x612.jpg';
import imgGalleAerialPeninsula from '../assets/real-imges/49.jpg';

const MARQUEE_MOMENTS = [
  {
    id: "filmstrip-1",
    src: imgNineArchWomanHat,
    title: "Traveler Gazing at Nine Arch Bridge",
    location: "Nine Arch Bridge, Ella",
    tag: "Mountain Viaduct",
    caption: "Female traveler wearing sunhat overlooking the iconic colonial railway bridge tucked into lush green tea valleys.",
    alt: "Traveler in sunhat looking at Nine Arch Bridge viaduct arches in Ella"
  },
  {
    id: "filmstrip-2",
    src: imgPidurangalaSunrise,
    title: "Sunrise Watcher at Pidurangala",
    location: "Pidurangala Rock Summit",
    tag: "Dawn Silhouette",
    caption: "Peaceful morning moments perched on the giant boulder of Pidurangala admiring Sigiriya fortress at first light.",
    alt: "Girl in white dress sitting on Pidurangala rock watching morning sunrise over Sigiriya"
  },
  {
    id: "filmstrip-3",
    src: imgMirissaBayDrone,
    title: "Mirissa Bay Golden Curve",
    location: "Mirissa Ocean Shoreline",
    tag: "Coastal Sweep",
    caption: "High drone perspective of Mirissa’s turquoise crescent beach, where swaying coconut palms meet the ocean swell.",
    alt: "High drone aerial view of Mirissa bay turquoise coastline and town"
  },
  {
    id: "filmstrip-4",
    src: imgElephantSigiriyaLake,
    title: "Elephant Bathing with Sigiriya Horizon",
    location: "Habarana & Sigiriya Lake",
    tag: "Wild Gathering",
    caption: "Wild elephant splashing in tranquil lake waters with the sheer silhouette of Sigiriya Rock Fortress in the background.",
    alt: "Wild elephant bathing in lake with Sigiriya rock fortress in distance"
  },
  {
    id: "filmstrip-5",
    src: imgGalleClockTower,
    title: "Historic Galle Fort Clock Tower",
    location: "Galle Dutch Fort",
    tag: "Colonial Stone",
    caption: "The commanding 19th-century stone clock tower towering above the four-century-old fortified ramparts.",
    alt: "Colonial stone clock tower at Galle Dutch Fort against blue and pastel dusk sky"
  },
  {
    id: "filmstrip-6",
    src: imgGalleLighthouseSunset,
    title: "Galle Lighthouse at Sunset",
    location: "Point Utrecht Bastion",
    tag: "Golden Hour",
    caption: "The elegant white lighthouse tower framed by leaning coconut palms against an amber and violet dusk sky.",
    alt: "Galle lighthouse silhouette framed by palm trees against golden sunset over the sea"
  },
  {
    id: "filmstrip-7",
    src: imgGalleAerialPeninsula,
    title: "Aerial View of Galle Fort Peninsula",
    location: "Galle Heritage Peninsula",
    tag: "UNESCO Ramparts",
    caption: "Aerial bird's eye view of the entire fortified Dutch peninsula jutting into the Indian Ocean coral reef.",
    alt: "Bird's eye view of Galle Fort peninsula and coral reefs surrounded by ocean"
  }
];

export default function TravelFilmstripMarquee() {
  const [activeItem, setActiveItem] = useState(null);

  // Duplicate items for continuous seamless infinite marquee loop
  const duplicatedItems = [...MARQUEE_MOMENTS, ...MARQUEE_MOMENTS];

  return (
    <section className="py-16 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-500/30">
          <Camera className="w-3.5 h-3.5" />
          <span>Island Travel Moments Filmstrip</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-heading tracking-tight text-white">
          Glimpses of Ceylon Across Our Tour Routes
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-2xl mx-auto font-light">
          Snapshots from sunrise over Pidurangala to sacred elephant lakes, colonial clock towers, and secret coastal viewpoints. Hover to pause or click any frame to inspect details.
        </p>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right gradient edge fades */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-5">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => setActiveItem(item)}
              className="w-[230px] sm:w-[260px] h-[310px] shrink-0 rounded-2xl bg-slate-900 border border-slate-800 p-3 shadow-lg hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              {/* Photo Frame (Native compact size ~200-240px preserving 100% sharpness) */}
              <div className="relative h-[220px] rounded-xl overflow-hidden bg-slate-950">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                />

                {/* Tag */}
                <div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950/75 backdrop-blur-md text-amber-300 text-[10px] font-bold border border-white/10">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>{item.tag}</span>
                </div>

                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5" /> View Photo
                  </span>
                </div>
              </div>

              {/* Bottom Details */}
              <div className="pt-2 px-1">
                <div className="flex items-center gap-1 text-[10px] text-slate-400 font-medium truncate">
                  <MapPin className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
                <h4 className="font-bold text-xs text-white truncate mt-0.5 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-lg w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-rose-600 text-white flex items-center justify-center transition-colors border border-white/10 shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center p-2">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                decoding="async"
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            <div className="p-5 bg-slate-900 text-white border-t border-slate-800">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  {activeItem.tag}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  • <MapPin className="w-3 h-3 text-amber-400" /> {activeItem.location}
                </span>
              </div>
              <h3 className="text-lg font-bold font-serif-heading">{activeItem.title}</h3>
              <p className="text-xs text-slate-300 mt-2 font-light leading-relaxed">{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
