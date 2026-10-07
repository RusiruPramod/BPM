import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Camera, X, Maximize2, MapPin, Sparkles, Compass } from 'lucide-react';

export default function PhotoGallery() {
  const { gallery } = useApp();
  const [lightboxImage, setLightboxImage] = useState(null);

  // Keep strictly 4 images in this single row as per Step 3 requirements
  const displayItems = (gallery || []).slice(0, 4);

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            <span>Sri Lanka Photo Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif-heading tracking-tight">
            Iconic Landscapes & Ancient Wonders
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Marvel at Sri Lanka's breathtaking cultural heritage citadel summits, sacred historical relic houses, and sweeping turquoise coastal bays visited on our private chauffeur journeys.
          </p>
        </div>

        {/* Gallery Grid - Exactly 4 Images in a Single Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative h-80 rounded-3xl overflow-hidden bg-slate-100 cursor-pointer border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Location Tag */}
              {item.location && (
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/65 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10 shadow-sm">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{item.location}</span>
                </div>
              )}

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {item.category || "Sri Lanka Scenery"}
                </span>
                <h4 className="font-bold text-base font-serif-heading leading-tight mt-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1.5 font-light">
                  {item.caption}
                </p>
                <div className="mt-3.5 flex items-center justify-between text-xs font-semibold text-emerald-400 border-t border-white/10 pt-2.5">
                  <span className="flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5" /> Explore Full View
                  </span>
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-rose-600 text-white flex items-center justify-center transition-colors border border-white/10 shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[72vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                decoding="async"
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white border-t border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {lightboxImage.category}
                </span>
                {lightboxImage.location && (
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    • <MapPin className="w-3 h-3 text-emerald-400" /> {lightboxImage.location}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-heading">{lightboxImage.title}</h3>
              <p className="text-sm text-slate-300 mt-2 font-light leading-relaxed">{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
