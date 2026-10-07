import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Globe, Menu, X, Calendar, Search, 
  UserCheck, ChevronDown 
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const { 
    currency, 
    setCurrency, 
    activeTab, 
    setActiveTab, 
    setTrackerModal, 
    openBookingModal, 
    isAdminLoggedIn,
    currentRole,
    setCurrentRole
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Passive scroll listener for maximum 60fps performance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified navigation links with 1-word clear labels
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
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'h-16 nav-glass-scrolled' 
          : 'h-20 bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      <div className="w-full h-full px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-4">
        
        {/* =========================================================================
            1. LEFT CORNER: Brand Identity (Logo + Title + High-contrast Subtitle)
           ========================================================================= */}
        <div 
          className="flex items-center gap-3.5 cursor-pointer group shrink-0"
          onClick={() => handleNavClick('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
          aria-label="BP Tours and Travels Home"
        >
          <BrandLogo size="md" variant={isScrolled ? 'dark' : 'light'} />
          
          <div className="leading-tight shrink-0">
            <h1 className={`font-extrabold text-base sm:text-lg tracking-tight transition-colors duration-200 whitespace-nowrap ${
              isScrolled 
                ? 'text-slate-900 group-hover:text-emerald-700' 
                : 'text-white group-hover:text-emerald-300'
            }`}>
              BP Tours and Travels
            </h1>
            
            {/* Subtitle with min 12px font size and high contrast WCAG AA */}
            <p className="text-[12px] font-medium tracking-wide mt-0.5 flex items-center gap-1.5 whitespace-nowrap">
              <span className={`font-bold uppercase tracking-wider text-[12px] transition-colors duration-200 ${
                isScrolled ? 'text-amber-600' : 'text-amber-400'
              }`}>
                Sri Lanka
              </span>
              <span className={isScrolled ? 'text-slate-300' : 'text-white/40'}>•</span>
              <span className={`text-[12px] font-medium transition-colors duration-200 ${
                isScrolled ? 'text-slate-700' : 'text-slate-200'
              }`}>
                Bandara Premathilaka
              </span>
            </p>
          </div>
        </div>

        {/* =========================================================================
            2. CENTER: Navigation Links (15px, 500 weight, 28-32px gaps, underline)
           ========================================================================= */}
        <nav 
          aria-label="Main Navigation" 
          className="hidden lg:flex items-center justify-center gap-7 xl:gap-8 mx-auto px-4"
        >
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`nav-link-animated py-1 whitespace-nowrap rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                  isActive 
                    ? isScrolled 
                      ? 'text-emerald-700 font-semibold' 
                      : 'text-emerald-400 font-semibold'
                    : isScrolled
                      ? 'text-slate-800 hover:text-emerald-600'
                      : 'text-white/95 hover:text-emerald-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* =========================================================================
            3. RIGHT CORNER: Grouped Actions (Consistent 40px height, 8px grid)
           ========================================================================= */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0 ml-auto lg:ml-0">
          
          {/* Compact Currency Selector (Code only e.g. "LKR", 40px height) */}
          <div className="relative flex items-center h-10">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              aria-label="Select Currency"
              className={`h-10 pl-3 pr-7 rounded-xl text-xs font-bold tracking-wider uppercase outline-none cursor-pointer appearance-none transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                isScrolled 
                  ? 'text-slate-700 bg-slate-100/70 hover:bg-slate-100 border border-slate-200/60' 
                  : 'text-white bg-white/10 hover:bg-white/15 border border-white/20'
              }`}
            >
              <option value="LKR" className="bg-white text-slate-900 font-bold">LKR</option>
              <option value="USD" className="bg-white text-slate-900 font-bold">USD</option>
              <option value="EUR" className="bg-white text-slate-900 font-bold">EUR</option>
              <option value="GBP" className="bg-white text-slate-900 font-bold">GBP</option>
            </select>
            <ChevronDown className={`w-3.5 h-3.5 absolute right-2 pointer-events-none transition-colors duration-200 ${
              isScrolled ? 'text-slate-500' : 'text-white/70'
            }`} />
          </div>

          {/* Secondary Action: Track Booking (Ghost / Text button, 40px height) */}
          <button
            onClick={() => setTrackerModal({ isOpen: true, bookingId: '' })}
            aria-label="Track Booking Status"
            className={`h-10 px-3.5 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              isScrolled 
                ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/80' 
                : 'text-white/90 hover:text-white hover:bg-white/10'
            }`}
          >
            <Search className={`w-4 h-4 ${isScrolled ? 'text-emerald-600' : 'text-emerald-400'}`} />
            <span>Track Booking</span>
          </button>

          {/* Single Primary CTA: Book Now (Solid green, bold, hover lift, 40px height) */}
          <button
            onClick={() => openBookingModal()}
            aria-label="Book your tour or airport transfer now"
            className="h-10 px-5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs hover:shadow-md hover:shadow-emerald-600/20 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Book Now</span>
          </button>

          {/* Admin Button: Removed from public navbar, only rendered for logged-in admins */}
          {isAdminLoggedIn && (
            <button
              onClick={() => setCurrentRole(currentRole === 'admin' ? 'user' : 'admin')}
              className="h-10 px-3 rounded-xl text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-all flex items-center gap-1.5 whitespace-nowrap shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              title="Toggle between User and Admin Dashboard"
              aria-label="Admin Control Panel"
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{currentRole === 'admin' ? 'Exit Admin' : 'Admin'}</span>
            </button>
          )}
        </div>

        {/* =========================================================================
            4. MOBILE: Hamburger Toggle (<1024px)
           ========================================================================= */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => openBookingModal()}
            className="sm:hidden text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap"
            aria-label="Quick Book Now"
          >
            Book
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              isScrolled 
                ? 'text-slate-800 hover:text-emerald-600 hover:bg-slate-100' 
                : 'text-white hover:text-emerald-300 hover:bg-white/10'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* =========================================================================
          5. MOBILE NAVIGATION DRAWER: 48px tap targets, Book Now pinned at bottom
         ========================================================================= */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-16 z-50 bg-slate-950/60 backdrop-blur-sm animate-fade-in flex flex-col justify-between"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-white w-full max-h-[calc(100vh-4rem)] flex flex-col shadow-2xl animate-slide-down overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Nav links with large 48px tap targets */}
            <div className="p-5 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`min-h-[48px] h-12 w-full text-left px-4 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                      isActive 
                        ? 'bg-emerald-50 text-emerald-700 font-semibold' 
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-emerald-600" />}
                  </button>
                );
              })}

              {/* Utility row: Compact Currency selector & Track Booking */}
              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Globe className="w-4 h-4 text-slate-400" />
                  <span>Currency</span>
                </div>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="h-10 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 outline-none"
                  aria-label="Select Currency in mobile menu"
                >
                  <option value="LKR">LKR (Rs)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>

              <button
                onClick={() => { setMobileMenuOpen(false); setTrackerModal({ isOpen: true, bookingId: '' }); }}
                className="min-h-[48px] h-12 w-full mt-2 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl flex items-center justify-center gap-2 border border-slate-200/80"
              >
                <Search className="w-4 h-4 text-emerald-600" />
                <span>Track Booking</span>
              </button>
            </div>

            {/* Pinned Book Now at Bottom of Drawer */}
            <div className="sticky bottom-0 bg-white p-4 border-t border-slate-100 mt-auto">
              <button
                onClick={() => { setMobileMenuOpen(false); openBookingModal(); }}
                className="min-h-[48px] h-12 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 text-base transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
