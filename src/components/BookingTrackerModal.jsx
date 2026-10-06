import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, X, CheckCircle2, Clock, Car, Phone, MapPin, User, AlertCircle } from 'lucide-react';

export default function BookingTrackerModal() {
  const { trackerModal, setTrackerModal, bookings, formatPrice, branding } = useApp();
  const [searchInput, setSearchInput] = useState(trackerModal.bookingId || '');
  const [foundBooking, setFoundBooking] = useState(null);
  const [searched, setSearched] = useState(false);

  if (!trackerModal.isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchInput.trim().toLowerCase();
    const match = bookings.find(b => 
      b.id.toLowerCase() === query || 
      b.phone.toLowerCase().includes(query) || 
      b.customerName.toLowerCase().includes(query)
    );
    setFoundBooking(match || null);
    setSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center animate-fade-in">
      <div className="bg-white max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Live Status Tracker</span>
            <h3 className="text-xl font-bold font-serif-heading">Track Your Booking</h3>
          </div>
          <button
            onClick={() => setTrackerModal({ isOpen: false, bookingId: '' })}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-rose-600 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Search Input Form */}
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter Booking Ref (e.g. BP-92041) or Phone"
                className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl pl-10 pr-3 py-3 outline-none focus:border-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 rounded-xl text-xs transition-colors"
            >
              Track
            </button>
          </form>

          {/* Results Display */}
          {searched && foundBooking && (
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4 animate-slide-up">
              {/* Status Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-slate-500">Ref: {foundBooking.id}</span>
                  <h4 className="font-bold text-slate-900 text-base font-serif-heading">{foundBooking.serviceTitle}</h4>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  foundBooking.bookingStatus === 'Confirmed' ? 'bg-emerald-100 text-emerald-800' :
                  foundBooking.bookingStatus === 'Completed' ? 'bg-blue-100 text-blue-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {foundBooking.bookingStatus}
                </span>
              </div>

              {/* Booking Specs */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Guest Name:</span>
                  <span className="font-bold">{foundBooking.customerName}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Pickup Location:</span>
                  <span className="font-bold">{foundBooking.pickupLocation}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-bold">{foundBooking.dropoffLocation}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Vehicle Assigned:</span>
                  <span className="font-bold text-emerald-700">{foundBooking.vehicleType}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700">
                  <span className="text-slate-500">Driver Assigned:</span>
                  <span className="font-bold text-slate-900">{foundBooking.driverAssigned || branding.owner}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700 border-t border-slate-200 pt-2">
                  <span className="text-slate-500">Payment Status:</span>
                  <span className="font-bold text-amber-700">{foundBooking.paymentStatus}</span>
                </div>
              </div>

              {/* Direct Call Driver Button */}
              <a
                href={`https://wa.me/${branding.phoneFormattedWhatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" /> WhatsApp Driver ({branding.phoneWhatsapp})
              </a>
            </div>
          )}

          {searched && !foundBooking && (
            <div className="p-6 text-center text-slate-500 space-y-2">
              <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
              <p className="text-sm font-semibold">No booking found matching "{searchInput}".</p>
              <p className="text-xs">Please verify your booking reference code or contact support directly on WhatsApp.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
