import React from 'react';
import { useApp } from '../context/AppContext';
import { X, MapPin, Star, Clock, Check, ArrowRight } from 'lucide-react';

export default function DestinationDetailModal() {
  const { selectedDestinationModal, setSelectedDestinationModal, openBookingModal } = useApp();

  if (!selectedDestinationModal) return null;

  const dest = selectedDestinationModal;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md p-4 sm:p-6 overflow-y-auto flex items-center justify-center animate-fade-in">
      <div className="bg-white max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100 my-auto">
        {/* Image Header */}
        <div className="relative h-72">
          <img
            src={dest.imageUrl}
            alt={dest.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          <button
            onClick={() => setSelectedDestinationModal(null)}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-rose-600 text-white flex items-center justify-center transition-colors border border-white/20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-400 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {dest.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-heading mt-2">{dest.name}</h2>
            <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {dest.location}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-100 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5 text-amber-600">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {dest.rating} Rating ({dest.reviewsCount} Reviews)
            </span>
            <span className="flex items-center gap-1 text-slate-600">
              <Clock className="w-4 h-4 text-emerald-600" /> Recommended: {dest.recommendedDays}
            </span>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-base font-serif-heading mb-2">About {dest.name}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{dest.fullDesc || dest.shortDesc}</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">Key Highlights and Activities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {dest.highlights?.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 bg-emerald-50/50 rounded-xl text-xs font-semibold text-slate-800 border border-emerald-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
            <button
              onClick={() => setSelectedDestinationModal(null)}
              className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-xl text-xs transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                const tourName = dest.name;
                setSelectedDestinationModal(null);
                openBookingModal({ serviceTitle: `Private Tour to ${tourName}` });
              }}
              className="w-2/3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs shadow-md transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Book Tour to {dest.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
