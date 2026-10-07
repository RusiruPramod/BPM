import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Phone, MessageCircle, Globe, Menu, X, 
  Calendar, Search, UserCheck, Lock, ChevronDown 
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const { 
    branding, 
    currency, 
    setCurrency, 
    activeTab, 
    setActiveTab, 
    setTrackerModal, 
    openBookingModal,
    setAdminAuthModal,
    isAdminLoggedIn,
    currentRole,
    setCurrentRole
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified single-word labels for maximum scannability and clean layout
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'tours', label: 'Tours' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80' 
          : 'bg-white py-3.5 border-b border-slate-200/80'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-4">
          
          {/* 1. LEFT CORNER: Brand Identity */}
          <div 
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            onClick={() => handleNavClick('home')}
          >
            <BrandLogo size="md" variant="dark" />
            
            <div className="leading-tight shrink-0">
              <h1 className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                BP Tours and Travels
              </h1>
              <p className="text-[11px] font-semibold tracking-wide text-slate-500 mt-0.5 flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-amber-600 font-bold uppercase tracking-wider text-[10px]">Sri Lanka</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-600 font-medium">Bandara Premathilaka</span>
              </p>
            </div>
          </div>

          {/* 2. CENTER: Clean Navigation Links with intentional breathing room */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 mx-auto px-2 xl:px-6">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-xl text-xs xl:text-sm font-semibold transition-all relative whitespace-nowrap shrink-0 ${
                  activeTab === link.id 
                    ? 'text-emerald-700 font-bold bg-emerald-50/90 shadow-2xs' 
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* 3. RIGHT CORNER: Grouped Buttons according to Design Principles */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0 ml-auto lg:ml-0">
            {/* Group A: Utilities (Currency + Track Booking) */}
            <div className="flex items-center gap-2">
              {/* Currency Selector */}
              <div className="relative flex items-center bg-slate-50 hover:bg-slate-100 rounded-xl px-2.5 py-2 border border-slate-200/80 transition-colors shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-slate-500 mr-1.5 shrink-0" />
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-transparent text-xs font-bold text-slate-800 outline-none cursor-pointer pr-4 appearance-none"
                  aria-label="Select Currency"
                >
                  <option value="USD">USD ($)</option>
                  <option value="LKR">LKR (Rs)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
                <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 pointer-events-none" />
              </div>

              {/* Track Booking Button */}
              <button
                onClick={() => setTrackerModal({ isOpen: true, bookingId: '' })}
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 px-3 py-2 rounded-xl transition-all border border-slate-200/80 shadow-2xs whitespace-nowrap"
                title="Track your existing reservation"
              >
                <Search className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Track Booking</span>
              </button>
            </div>

            {/* Semantic Divider Break */}
            <div className="h-5 w-px bg-slate-200 mx-0.5 shrink-0" aria-hidden="true" />

            {/* Group B: Primary High-Emphasis CTA */}
            <button
              onClick={() => openBookingModal()}
              className="flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 px-4 py-2 rounded-xl shadow-xs hover:shadow-md hover:shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Book Now</span>
            </button>

            {/* Semantic Divider Break */}
            <div className="h-5 w-px bg-slate-200 mx-0.5 shrink-0" aria-hidden="true" />

            {/* Group C: Admin / Management Portal */}
            <button
              onClick={() => {
                if (isAdminLoggedIn) {
                  setCurrentRole(currentRole === 'admin' ? 'user' : 'admin');
                } else {
                  setAdminAuthModal({ isOpen: true });
                }
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-xl border border-amber-200 transition-all whitespace-nowrap shadow-2xs"
              title={isAdminLoggedIn ? "Switch between User & Admin views" : "Admin Login Portal"}
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{isAdminLoggedIn && currentRole === 'admin' ? 'Exit Admin' : 'Admin'}</span>
            </button>
          </div>

          {/* Mobile / Tablet Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openBookingModal()}
              className="sm:hidden text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-slide-down">
            <div className="flex flex-col gap-1.5">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-sm font-semibold py-2.5 px-3.5 rounded-xl transition-colors flex items-center justify-between ${
                    activeTab === link.id 
                      ? 'bg-emerald-50 text-emerald-800 font-bold' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {activeTab === link.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  )}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-3 mt-1">
                {/* Currency selector in mobile */}
                <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-slate-500" />
                    <span className="text-xs font-bold text-slate-700">Display Currency</span>
                  </div>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-white border border-slate-300 text-xs font-bold text-slate-800 px-2.5 py-1 rounded-lg"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="LKR">LKR (Rs)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>

                {/* Primary CTA Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => { setMobileMenuOpen(false); setTrackerModal({ isOpen: true, bookingId: '' }); }}
                    className="w-full text-center text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 py-3 rounded-xl border border-slate-200 flex items-center justify-center gap-1.5"
                  >
                    <Search className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Track Booking</span>
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
                    className="w-full text-center text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 py-3 rounded-xl shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Now</span>
                  </button>
                </div>

                {/* Direct Connect in Mobile Drawer */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a 
                    href={`https://wa.me/${branding.phoneFormattedWhatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 py-2.5 rounded-xl border border-emerald-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                  <a 
                    href={`tel:${branding.phoneFormattedPrimary}`}
                    className="flex items-center justify-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 py-2.5 rounded-xl border border-amber-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" />
                    <span>Call Bandara</span>
                  </a>
                </div>

                {/* Discreet Admin Login Link in mobile */}
                <div className="pt-2 text-center">
                  <button
                    onClick={() => { setMobileMenuOpen(false); setAdminAuthModal({ isOpen: true }); }}
                    className="text-[11px] font-medium text-slate-400 hover:text-slate-700 flex items-center justify-center gap-1 mx-auto"
                  >
                    <Lock className="w-3 h-3" /> Admin Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
