import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Phone, MessageCircle, Globe, Shield, Menu, X, Calendar, Search, UserCheck } from 'lucide-react';

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

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'tours', label: 'Tour Packages' },
    { id: 'vehicles', label: 'Vehicle Hire and Airport Drop' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'reviews', label: 'Guest Reviews' },
    { id: 'contact', label: 'Contact Us' }
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
      {/* Top Banner Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Shield className="w-3.5 h-3.5" /> 24/7 BIA Airport Pick and Drop
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="hidden sm:inline text-slate-300">Owner and Driver: <strong>{branding.owner}</strong></span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`https://wa.me/${branding.phoneFormattedWhatsapp}`} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp: {branding.phoneWhatsapp}
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={`tel:${branding.phoneFormattedPrimary}`} 
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5" /> Call: {branding.phonePrimary}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200' 
          : 'bg-white py-3.5 border-b border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo and Brand Title */}
          <div 
            className="flex items-center gap-3.5 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className="relative overflow-hidden rounded-xl border border-amber-300/60 shadow-sm p-1.5 bg-white group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img 
                src={branding.logoUrl} 
                alt="BP Tours and Travels" 
                className="h-10 w-auto object-contain rounded-lg"
              />
            </div>
            <div className="leading-tight">
              <h1 className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                BP Tours and Travels
              </h1>
              <p className="text-[11px] font-bold tracking-wider uppercase text-amber-600 mt-0.5">
                Bandara Premathilaka • Sri Lanka
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs xl:text-sm font-semibold transition-all relative py-1 ${
                  activeTab === link.id 
                    ? 'text-emerald-600 font-bold' 
                    : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Currency Selector */}
            <div className="relative flex items-center bg-slate-100 rounded-xl px-2 py-1.5 border border-slate-200">
              <Globe className="w-3.5 h-3.5 text-slate-500 mr-1" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-800 outline-none cursor-pointer pr-1"
              >
                <option value="USD">USD ($)</option>
                <option value="LKR">LKR (Rs)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>

            {/* Track Booking Button */}
            <button
              onClick={() => setTrackerModal({ isOpen: true, bookingId: '' })}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3.5 py-2.5 rounded-xl transition-all border border-slate-200"
            >
              <Search className="w-3.5 h-3.5 text-emerald-600" /> Track Booking
            </button>

            {/* Book Now Button */}
            <button
              onClick={() => openBookingModal()}
              className="flex items-center gap-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" /> Book Now
            </button>

            {/* Admin Switcher */}
            {isAdminLoggedIn ? (
              <button
                onClick={() => setCurrentRole(currentRole === 'admin' ? 'user' : 'admin')}
                className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-100 hover:bg-amber-200 px-3 py-2 rounded-xl transition-all border border-amber-300"
              >
                <UserCheck className="w-3.5 h-3.5" /> {currentRole === 'admin' ? 'Admin Panel' : 'Switch to Admin'}
              </button>
            ) : (
              <button
                onClick={() => setAdminAuthModal({ isOpen: true })}
                className="text-[11px] font-semibold text-slate-400 hover:text-slate-700 px-2 py-1"
                title="Admin Control Panel"
              >
                Admin
              </button>
            )}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-slide-down">
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-sm font-semibold py-2.5 px-3 rounded-xl transition-colors ${
                    activeTab === link.id 
                      ? 'bg-emerald-50 text-emerald-700 font-bold' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl">
                  <span className="text-xs font-semibold text-slate-600">Select Currency</span>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-white border border-slate-300 text-xs font-bold text-slate-800 px-2 py-1 rounded-lg"
                  >
                    <option value="USD">USD ($)</option>
                    <option value="LKR">LKR (Rs)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => { setMobileMenuOpen(false); setTrackerModal({ isOpen: true, bookingId: '' }); }}
                    className="w-full text-center text-xs font-bold text-slate-700 bg-slate-100 py-3 rounded-xl border border-slate-200"
                  >
                    Track Booking
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
                    className="w-full text-center text-xs font-bold text-white bg-emerald-600 py-3 rounded-xl shadow-md"
                  >
                    Book Now
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
