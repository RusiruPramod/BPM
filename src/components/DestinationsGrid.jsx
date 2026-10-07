import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Star, Clock, ArrowRight, Eye, Sparkles } from 'lucide-react';
import ScrollReveal from './common/ScrollReveal';

export default function DestinationsGrid() {
  const { destinations, setSelectedDestinationModal, openBookingModal } = useApp();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Heritage', 'Hill Country', 'Culture', 'Wildlife', 'Coastal'];

  const filteredDestinations = activeCategory === 'All' 
    ? destinations 
    : destinations.filter(d => d.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="destinations" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Explore Sri Lanka
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif-heading">
              Popular Destinations and Wonders
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              From ancient UNESCO rock fortresses to misty tea valleys and leopard safaris, experience Sri Lanka's breathtaking beauty with our private driver service.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-emerald-600 text-white shadow-md scale-105'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Destination Cards Grid with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest, idx) => (
            <ScrollReveal key={dest.id} delay={idx * 90} duration={600} direction="up" className="h-full">
              <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full transform hover:-translate-y-1">
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={dest.imageUrl}
                    alt={dest.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                    {dest.category}
                  </span>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/20">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{dest.rating}</span>
                  </div>

                  {/* Location overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-1 text-xs text-emerald-300 font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{dest.location}</span>
                    </div>
                    <h3 className="text-xl font-bold font-serif-heading leading-tight drop-shadow-sm">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {dest.shortDesc}
                  </p>

                  {/* Highlights tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {dest.highlights?.slice(0, 3).map((h, i) => (
                      <span key={i} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                        • {h}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-slate-500 font-semibold">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {dest.recommendedDays}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedDestinationModal(dest)}
                        className="p-2 text-slate-600 hover:text-emerald-600 hover:bg-slate-100 rounded-xl transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => openBookingModal({ serviceTitle: `Custom Tour to ${dest.name}` })}
                        className="inline-flex items-center gap-1 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3.5 py-2 rounded-xl shadow-sm transition-all"
                      >
                        Book Tour <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
