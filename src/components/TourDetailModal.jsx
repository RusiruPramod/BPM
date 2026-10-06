import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Clock, CheckCircle, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function TourDetailModal() {
  const { selectedTourModal, setSelectedTourModal, openBookingModal, formatPrice } = useApp();

  if (!selectedTourModal) return null;

  const tour = selectedTourModal;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md p-4 sm:p-6 overflow-y-auto flex items-center justify-center animate-fade-in">
      <div className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 my-auto max-h-[90vh] flex flex-col">
        {/* Header Image */}
        <div className="relative h-64 shrink-0">
          <img
            src={tour.heroImage}
            alt={tour.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          <button
            onClick={() => setSelectedTourModal(null)}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-rose-600 text-white flex items-center justify-center transition-colors border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {tour.duration} • {tour.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading mt-2 leading-tight">{tour.title}</h2>
          </div>
        </div>

        {/* Scrollable Itinerary Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <div className="flex items-center justify-between bg-emerald-50 p-4 rounded-2xl border border-emerald-200">
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">All-Inclusive Private Tour</span>
              <div className="text-2xl font-extrabold text-emerald-700 font-serif-heading">
                {formatPrice(tour.priceUSD, tour.priceLKR)}
              </div>
            </div>
            <button
              onClick={() => {
                const title = tour.title;
                setSelectedTourModal(null);
                openBookingModal({ serviceTitle: title, totalPriceUSD: tour.priceUSD, totalPriceLKR: tour.priceLKR });
              }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-md transition-colors flex items-center gap-1.5"
            >
              <span>Book Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-base font-serif-heading mb-2">Tour Overview</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{tour.description}</p>
          </div>

          {/* Day-by-Day Accordion / Timeline */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Day-by-Day Itinerary</h4>
            <div className="space-y-4">
              {tour.itinerary?.map((item) => (
                <div key={item.day} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-400 font-bold flex items-center justify-center shrink-0 text-sm">
                    D{item.day}
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-slate-900 text-sm">{item.title}</h5>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">Package Inclusions</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tour.inclusions?.map((inc, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
