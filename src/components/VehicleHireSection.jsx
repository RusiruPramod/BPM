import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Car, Users, Briefcase, Wifi, ShieldCheck, Check, ArrowRight, Plane, Info } from 'lucide-react';

export default function VehicleHireSection() {
  const { vehicles, formatPrice, openBookingModal, branding } = useApp();

  return (
    <section id="vehicles" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Plane className="w-3.5 h-3.5" /> BIA Airport Drop and Private Hires
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif-heading">
            Our Luxury Private Vehicle Fleet
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Travel across Sri Lanka in total air-conditioned comfort. All vehicles are regularly disinfected, fully insured, and operated by professional English-speaking driver <strong>Bandara Premathilaka</strong>.
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((veh) => (
            <div
              key={veh.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image and Header */}
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={veh.imageUrl}
                    alt={veh.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {veh.badge && (
                    <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      {veh.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full">
                    {veh.type}
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg font-serif-heading leading-snug">
                      {veh.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">{veh.model}</p>
                  </div>

                  {/* Specs Pill */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{veh.passengers}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                      <span>{veh.luggage}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1.5 pt-1">
                    {veh.features?.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pricing and CTA */}
              <div className="p-5 pt-0 mt-2">
                <div className="pt-3 border-t border-slate-100 mb-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">BIA Airport Transfer From</span>
                    <span className="text-xl font-extrabold text-slate-900 font-serif-heading">
                      {formatPrice(veh.airportTransferUSD, veh.airportTransferLKR)}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Per Day Hire</span>
                    <span className="text-sm font-extrabold text-emerald-600">
                      {formatPrice(veh.dayRateUSD, veh.dayRateLKR)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => openBookingModal({ serviceTitle: `Hire ${veh.name}`, vehicleType: veh.name })}
                  className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Book This Vehicle</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Airport Pick/Drop Banner Callout */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-500/20">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> BIA Airport Punctuality Guarantee
            </div>
            <h3 className="text-2xl font-bold font-serif-heading">Arriving at BIA Airport Colombo?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Driver Bandara Premathilaka will monitor your flight number and await you at arrivals with a personalized name sign. Zero waiting time!
            </p>
          </div>

          <button
            onClick={() => openBookingModal({ serviceTitle: "BIA Airport Transfer Pickup / Drop", serviceType: "Airport Pickup / Drop" })}
            className="shrink-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-7 rounded-2xl text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            Reserve BIA Airport Transfer
          </button>
        </div>
      </div>
    </section>
  );
}
