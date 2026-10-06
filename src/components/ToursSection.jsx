import React from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, Clock, MapPin, CheckCircle, Star, ArrowRight, Eye } from 'lucide-react';

export default function ToursSection() {
  const { tours, formatPrice, setSelectedTourModal, openBookingModal } = useApp();

  return (
    <section id="tours" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            Handcrafted Itineraries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif-heading">
            Featured Island Tour Packages
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            All packages are 100% private, fully customizable, and include luxury air-conditioned vehicles with driver Bandara Premathilaka, fuel, tolls, and hotel pick-ups.
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group"
            >
              {/* Left Image Side */}
              <div className="md:w-5/12 relative h-64 md:h-auto overflow-hidden shrink-0">
                <img
                  src={tour.heroImage}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent md:hidden" />
                
                {/* Badge */}
                {tour.badge && (
                  <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {tour.badge}
                  </span>
                )}

                <div className="absolute bottom-4 left-4 right-4 md:hidden text-white">
                  <span className="text-xs text-amber-300 font-semibold">{tour.duration}</span>
                  <h3 className="text-lg font-bold font-serif-heading">{tour.title}</h3>
                </div>
              </div>

              {/* Right Details Side */}
              <div className="md:w-7/12 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div>
                  <div className="hidden md:flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {tour.duration}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{tour.rating} ({tour.reviewsCount} reviews)</span>
                    </div>
                  </div>

                  <h3 className="hidden md:block text-xl font-bold text-slate-900 font-serif-heading leading-snug">
                    {tour.title}
                  </h3>

                  {/* Route Highlights */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {tour.routes?.map((r, idx) => (
                      <span key={idx} className="text-[11px] font-semibold bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-lg flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-600" /> {r}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Top Inclusions */}
                  <div className="mt-4 space-y-1.5">
                    {tour.inclusions?.slice(0, 3).map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and Action Button */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Total All-Inclusive Rate</span>
                    <div className="text-2xl font-extrabold text-emerald-600 font-serif-heading">
                      {formatPrice(tour.priceUSD, tour.priceLKR)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedTourModal(tour)}
                      className="p-2.5 text-slate-700 bg-white hover:bg-slate-200 rounded-xl border border-slate-200 transition-colors"
                      title="View Full Itinerary"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => openBookingModal({ serviceTitle: tour.title, totalPriceUSD: tour.priceUSD, totalPriceLKR: tour.priceLKR })}
                      className="flex items-center gap-1 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <span>Book Package</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
