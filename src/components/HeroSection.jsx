import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, MapPin, Users, Car, ArrowRight, Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';

import imgSigiriyaGrand from '../assets/real-imges/sigirya.jpeg';
import imgNineArches from '../assets/real-imges/NineArches.jpg';
import imgYalaLeopard from '../assets/real-imges/wildlife.webp';
import imgTaprobaneIsland from '../assets/real-imges/image.webp';

const HERO_SLIDES = [
  {
    image: imgSigiriyaGrand,
    title: "Climb Ancient Sigiriya Lion Rock Fortress",
    subtitle: "5th-century royal citadel ruins, iconic lion paw entrance, and panoramic 360-degree jungle views.",
    alt: "Sigiriya Lion Rock fortress aerial view rising dramatically above green jungle canopy"
  },
  {
    image: imgNineArches,
    title: "Discover the Magic of Ella & Nine Arch Bridge",
    subtitle: "Misty tea mountains, the iconic blue railway journey, and scenic highland peaks with your private driver.",
    alt: "Nine Arch Bridge in Ella with lush tea plantation hills and mountain railway"
  },
  {
    image: imgYalaLeopard,
    title: "Thrilling Yala Wildlife Leopard Safari",
    subtitle: "World's highest density of leopards, wild elephant herds, and untamed national parks with private 4x4 jeeps.",
    alt: "Sri Lankan leopard roaring atop rocky boulder in Yala National Park"
  },
  {
    image: imgTaprobaneIsland,
    title: "Relax at Weligama & Mirissa Tropical Paradise",
    subtitle: "Famous Taprobane Island, swaying palms at Coconut Tree Hill, turquoise surf breaks, and fresh seafood.",
    alt: "Taprobane Island villa in Weligama Bay surrounded by turquoise Indian ocean"
  }
];

export default function HeroSection() {
  const { openBookingModal, branding } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Interactive Search Form state
  const [serviceType, setServiceType] = useState('Airport Pickup / Drop');
  const [pickup, setPickup] = useState('Bandaranaike International Airport (BIA)');
  const [dropoff, setDropoff] = useState('Kandy / Sigiriya / Galle');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('2');

  // Auto-play slideshow every 5.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentSlide((currentSlide + 1) % HERO_SLIDES.length);
  const handlePrev = () => setCurrentSlide((currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    openBookingModal({
      serviceTitle: `${serviceType}: ${pickup} to ${dropoff}`,
      serviceType,
      pickupLocation: pickup,
      dropoffLocation: dropoff,
      startDate: date,
      passengers: parseInt(passengers) || 2
    });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Slideshow */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          } transition-transform duration-[6000ms]`}
        >
          <img
            src={slide.image}
            alt={slide.alt || slide.title}
            loading={idx === 0 ? "eager" : "lazy"}
            decoding="async"
            className="w-full h-full object-cover object-center filter brightness-[0.65]"
          />
        </div>
      ))}

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/30" />

      {/* Slideshow Controls */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-dark text-white items-center justify-center hover:bg-emerald-600 transition-all border border-white/20"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass-dark text-white items-center justify-center hover:bg-emerald-600 transition-all border border-white/20"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide ? 'w-8 bg-emerald-500' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center md:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Headline */}
        <div className="lg:w-7/12 text-white space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-md text-emerald-300 text-xs font-semibold">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Sri Lanka's #1 Rated Private Tour Driver Service</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] font-serif-heading">
            {HERO_SLIDES[currentSlide].title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-200 font-light max-w-2xl leading-relaxed">
            {HERO_SLIDES[currentSlide].subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <CheckCircle className="w-5 h-5 text-emerald-400" /> 100% Guaranteed Private Vehicles
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <CheckCircle className="w-5 h-5 text-emerald-400" /> Punctual BIA Airport Drops
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-200">
              <CheckCircle className="w-5 h-5 text-emerald-400" /> English-Speaking Expert Driver
            </div>
          </div>
        </div>

        {/* Right Interactive Search & Booking Wizard */}
        <div className="lg:w-5/12 w-full max-w-md">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-slate-900 text-xl font-serif-heading">Book Your Trip</h3>
                <p className="text-xs text-slate-500 font-medium">Instant quote and direct WhatsApp booking</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-bold px-2.5 py-1 rounded-lg">
                4.9 ★ Rating
              </div>
            </div>

            <form onSubmit={handleSearchSubmit} className="space-y-4">
              {/* Service Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Service
                </label>
                <div className="relative">
                  <Car className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl pl-10 pr-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all cursor-pointer"
                  >
                    <option value="Airport Pickup / Drop">Airport Drop and Pickup (BIA)</option>
                    <option value="Round Island Tour">Full Round Island Tour</option>
                    <option value="Custom Private Driver">Custom Private Driver Hire</option>
                    <option value="Day Excursion">1-Day Sigiriya / Kandy Day Tour</option>
                  </select>
                </div>
              </div>

              {/* Pickup Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Pick-up Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-emerald-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="e.g. BIA Airport or Colombo Hotel"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl pl-10 pr-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  />
                </div>
              </div>

              {/* Drop-off Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Destination / Drop-off
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-amber-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    placeholder="e.g. Kandy, Ella, Galle, Sigiriya"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl pl-10 pr-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  />
                </div>
              </div>

              {/* Date and Passengers Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Start Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl pl-9 pr-2 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Passengers
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold rounded-xl pl-9 pr-2 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all cursor-pointer"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="4">3-4 Persons</option>
                      <option value="8">5-8 Persons</option>
                      <option value="12">9+ Group</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>Check Rates and Book Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
