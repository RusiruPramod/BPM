import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Camera, X, Maximize2, Heart, Sparkles } from 'lucide-react';

export default function PhotoGallery() {
  const { gallery } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Tourists and Drivers', 'Destinations', 'Wildlife', 'Beaches'];

  const filteredGallery = activeCategory === 'All'
    ? gallery
    : gallery.filter(g => g.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" /> Moments and Memories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif-heading">
            Sri Lanka Photo Gallery and Guest Smiles
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Real photos of our happy guests traveling across Sri Lanka with driver Bandara Premathilaka and BP Tours.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative h-72 rounded-3xl overflow-hidden bg-slate-100 cursor-pointer border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {item.category}
                </span>
                <h4 className="font-bold text-base font-serif-heading leading-tight mt-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1 font-light">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs font-semibold text-emerald-400">
                  <span>View Full Photo</span>
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-rose-600 text-white flex items-center justify-center transition-colors border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                {lightboxImage.category}
              </span>
              <h3 className="text-2xl font-bold font-serif-heading mt-1">{lightboxImage.title}</h3>
              <p className="text-sm text-slate-300 mt-2 font-light">{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
