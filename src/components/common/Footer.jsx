import React from 'react';
import { useApp } from '../../context/AppContext';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Heart, Star, ExternalLink, Globe } from 'lucide-react';

export default function Footer() {
  const { branding, setActiveTab, setAdminAuthModal } = useApp();

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-white border border-amber-200 shrink-0">
                <img src={branding.logoUrl} alt="BP Tours and Travels" className="h-10 w-auto object-contain rounded-lg" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg font-serif-heading">BP Tours and Travels</h3>
                <p className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">Bandara Premathilaka</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Sri Lanka's premier private tour driver operator. Providing 24/7 BIA Airport drops, luxury KDH van hires, custom round island tours, and safari expeditions.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 p-2.5 rounded-xl">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Certified Private Driver Operator</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm font-serif-heading uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {['home', 'destinations', 'tours', 'vehicles', 'gallery', 'reviews', 'contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-slate-400 hover:text-emerald-400 capitalize transition-colors"
                  >
                    • {link === 'vehicles' ? 'Vehicle Hire and Airport Drop' : link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm font-serif-heading uppercase tracking-wider">Popular Experiences</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• 7-Day Ultimate Sri Lanka Island Tour</li>
              <li>• Sigiriya Rock Fortress and Dambulla Day Tour</li>
              <li>• Ella Nine Arch Bridge Scenic Train Tour</li>
              <li>• Yala National Park 4x4 Leopard Safari</li>
              <li>• Galle Dutch Fort and Mirissa Whale Watching</li>
              <li>• 24/7 BIA Katunayake Airport Transfer</li>
            </ul>
          </div>

          {/* Contact and Support */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm font-serif-heading uppercase tracking-wider">24/7 Direct Contact</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{branding.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${branding.phoneFormattedPrimary}`} className="hover:text-amber-400">
                  {branding.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${branding.phoneFormattedWhatsapp}`} target="_blank" rel="noreferrer" className="hover:text-emerald-400">
                  {branding.phoneWhatsapp} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{branding.email}</span>
              </div>
            </div>

            {/* Rating Badges */}
            <div className="pt-2 flex items-center gap-2 text-[11px] text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-amber-400" /> 4.9 / 5.0 Rating on Google and Tripadvisor
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>BP Tours and Travels</strong> (Bandara Premathilaka). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setAdminAuthModal({ isOpen: true })}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Admin Control Panel
            </button>
            <span>|</span>
            <span className="text-slate-400">Powered by React, Firebase, Cloudflare R2 and Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
