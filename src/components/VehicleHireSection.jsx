import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Car, Users, Briefcase, Wifi, ShieldCheck, Check, ArrowRight, Plane, Info } from 'lucide-react';
import ScrollReveal from './common/ScrollReveal';

import imgAirportRunway from '../assets/real-imges/images (1).jpg';
import imgPlaneReflection from '../assets/real-imges/images (2).jpg';

export default function VehicleHireSection() {
  const { vehicles, formatPrice, openBookingModal, branding } = useApp();

  return (
    <section id="vehicles" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={600}>
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
        </ScrollReveal>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((veh, idx) => (
            <ScrollReveal key={veh.id} delay={idx * 120} duration={600} direction="up" className="h-full">
              <div
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full"
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
          </ScrollReveal>
          ))}
        </div>

        {/* Airport Pick/Drop Banner Callout with Real Airport Images */}
        <ScrollReveal direction="up" duration={700} delay={150}>
          <div className="mt-12 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 rounded-3xl p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl border border-emerald-500/20">
            <div className="space-y-3 text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> BIA Airport Punctuality Guarantee
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading">Arriving at BIA Airport Colombo?</h3>
              <p className="text-slate-300 text-sm max-w-xl leading-relaxed font-light">
                Driver Bandara Premathilaka monitors your flight arrival in real-time and awaits you outside arrivals holding a personalized name board. Step straight into an ice-cold, air-conditioned vehicle with chilled bottled water and high-speed Wi-Fi.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => openBookingModal({ serviceTitle: "BIA Airport Transfer Pickup / Drop", serviceType: "Airport Pickup / Drop" })}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-7 rounded-2xl text-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>Reserve BIA Airport Transfer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Dual Airport Image Showcase (Images (1) and (2) at native crisp ~160-180px width) */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-36 sm:w-44 h-48 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative group bg-slate-950">
                <img
                  src={imgAirportRunway}
                  alt="Aerial view approaching Bandaranaike International Airport Colombo runway from airplane window"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-bold text-emerald-300 leading-tight">BIA Runway Approach</span>
                </div>
              </div>

              <div className="w-36 sm:w-44 h-48 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative group bg-slate-950">
                <img
                  src={imgPlaneReflection}
                  alt="SriLankan Airlines commercial aircraft on BIA airport tarmac with passenger boarding"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-bold text-amber-300 leading-tight">24/7 Tarmac Pickup</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
