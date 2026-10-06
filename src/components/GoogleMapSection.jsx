import React from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, MessageCircle, Mail, Clock, ShieldCheck, Navigation } from 'lucide-react';

export default function GoogleMapSection() {
  const { branding, openBookingModal } = useApp();

  const locations = [
    { name: "Bandaranaike Intl Airport (BIA)", role: "Primary 24/7 Pickup Desk", status: "Open 24 Hours" },
    { name: "Colombo Head Office and Fleet Garage", role: "Central Operations", status: "Open 06:00 - 22:00" },
    { name: "Kandy Hill Country Base", role: "Central Region Hub", status: "Open 06:00 - 22:00" },
    { name: "Galle Fort Southern Station", role: "Coastal Tour Hub", status: "Open 06:00 - 22:00" }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Contact Information Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Navigation className="w-3.5 h-3.5" /> Direct Contact and Location
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif-heading leading-tight">
                We Are Available Across Sri Lanka 24/7
              </h2>
              <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                Need an urgent airport pickup, driver rate quotation, or custom itinerary planning? Contact owner <strong>Bandara Premathilaka</strong> directly.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${branding.phoneFormattedWhatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">Fastest Response</span>
                  <h4 className="font-bold text-slate-900 text-base">WhatsApp: {branding.phoneWhatsapp}</h4>
                  <p className="text-xs text-slate-500">Tap to chat with Bandara on WhatsApp</p>
                </div>
              </a>

              {/* Direct Call Card */}
              <a
                href={`tel:${branding.phoneFormattedPrimary}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">Direct Hotline</span>
                  <h4 className="font-bold text-slate-900 text-base">Call: {branding.phonePrimary}</h4>
                  <p className="text-xs text-slate-500">Available 24 hours 7 days a week</p>
                </div>
              </a>
            </div>

            {/* Hub Locations List */}
            <div className="pt-4 space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Service Hubs</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {locations.map((loc, i) => (
                  <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <div className="font-bold text-slate-800 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {loc.name}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{loc.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Stylized Interactive Map Container */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 h-[480px]">
              {/* Embedded Google Map iframe styled nicely */}
              <iframe
                title="BP Tours Sri Lanka Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253459.78912345!2d79.8000000!3d7.1800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c6bf80a2b%3A0x446e50e960309971!2sBandaranaike%20International%20Airport!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                className="w-full h-full border-0 filter brightness-[0.95] contrast-[1.05]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Map Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-xl">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" /> BIA Airport Pickup Ready
                </div>
                <h4 className="font-bold text-slate-900 text-sm mt-1">Bandara Premathilaka Driver Base</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Katunayake / BIA Airport and Islandwide Transfers</p>
                <button
                  onClick={() => openBookingModal({ serviceTitle: "BIA Airport Pickup Transfer" })}
                  className="mt-3 w-full bg-emerald-600 text-white font-bold py-2 rounded-xl text-xs shadow-sm hover:bg-emerald-700 transition-colors"
                >
                  Book Pickup Here
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
