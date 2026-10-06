import React from 'react';
import { Users, Award, ShieldCheck, MapPin } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Happy Tourists",
      detail: "From UK, Germany, Italy & Australia"
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Private & Safe Hires",
      detail: "Clean AC Sedans, Vans & SUVs"
    },
    {
      icon: Award,
      value: "4.9 ★",
      label: "Verified Rating",
      detail: "Google Reviews & Tripadvisor"
    },
    {
      icon: MapPin,
      value: "50+",
      label: "Island Destinations",
      detail: "Custom itineraries across Sri Lanka"
    }
  ];

  return (
    <div className="bg-white border-y border-slate-200 py-10 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {stat.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
