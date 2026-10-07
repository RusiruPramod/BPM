import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Heart, Smile, X, Maximize2, ShieldCheck, MapPin, Star } from 'lucide-react';

export default function GuestSmiles() {
  const { guestSmiles } = useApp();
  const [lightboxSmile, setLightboxSmile] = useState(null);

  // Keep strictly 4 images in this single row as per Step 3 requirements
  const displaySmiles = (guestSmiles || []).slice(0, 4);

  return (
    <section id="guest-smiles" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle decorative background gradient */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Smile className="w-3.5 h-3.5 text-amber-600" />
            <span>Guest Smiles & Real Memories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif-heading tracking-tight">
            Happy Travelers with Driver Bandara
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Unfiltered, authentic snapshots of our international guests exploring Sri Lanka with personal chauffeur Bandara Premathilaka. Experience genuine Sri Lankan warmth from the moment you land.
          </p>
        </div>

        {/* Guest Smiles Grid - Exactly 4 Images in a Single Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displaySmiles.map((smile) => (
            <div
              key={smile.id}
              onClick={() => setLightboxSmile(smile)}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden bg-slate-900">
                <img
                  src={smile.imageUrl}
                  alt={smile.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Country / Guest Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10 shadow-sm">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>{smile.guestName}</span>
                </div>

                {/* Verified Driver Experience Badge */}
                <div className="absolute bottom-3 right-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-bold shadow-md">
                  <ShieldCheck className="w-3 h-3" />
                  <span>With Bandara</span>
                </div>

                {/* Overlay hover prompt */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-end justify-between text-white">
                  <span className="text-xs font-semibold text-amber-300">Click to view photo</span>
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 mb-1.5">
                    <span>{smile.country}</span>
                    <span className="text-emerald-600 font-semibold">{smile.date}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm font-serif-heading leading-snug group-hover:text-emerald-700 transition-colors">
                    {smile.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1.5 font-light leading-relaxed line-clamp-2">
                    {smile.caption}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span className="inline-flex items-center gap-1 text-slate-500 text-[11px]">
                    <MapPin className="w-3 h-3 text-amber-500" /> {smile.tripType}
                  </span>
                  <span className="text-emerald-600 font-bold group-hover:underline">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxSmile && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in"
          onClick={() => setLightboxSmile(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxSmile(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-rose-600 text-white flex items-center justify-center transition-colors border border-white/10 shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[72vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxSmile.imageUrl}
                alt={lightboxSmile.title}
                decoding="async"
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white border-t border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {lightboxSmile.guestName} ({lightboxSmile.country})
                </span>
                <span className="text-xs text-slate-400">• {lightboxSmile.tripType}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-heading">{lightboxSmile.title}</h3>
              <p className="text-sm text-slate-300 mt-2 font-light leading-relaxed">{lightboxSmile.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
