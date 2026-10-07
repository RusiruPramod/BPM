import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import ScrollReveal from './common/ScrollReveal';

// Custom Animated Counter Hook with smooth ease-out curve
function useCountUp(endValue, isVisible, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrameId;

    const easeOutExpo = (t) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentVal = easedProgress * endValue;

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, endValue, duration]);

  if (decimals > 0) {
    return count.toFixed(decimals);
  }
  return Math.floor(count);
}

function StatCard({ stat, isVisible, index }) {
  const Icon = stat.icon;
  const animatedValue = useCountUp(stat.numericValue, isVisible, 2000, stat.decimals || 0);

  return (
    <ScrollReveal delay={index * 120} duration={650} direction="up">
      <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50/90 border border-slate-200/80 hover:border-emerald-400 hover:bg-white hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1">
        <div className="w-13 h-13 rounded-2xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-heading tracking-tight flex items-baseline">
            <span>{animatedValue}</span>
            <span className="text-emerald-600 ml-0.5">{stat.suffix}</span>
          </div>
          <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mt-0.5 group-hover:text-emerald-700 transition-colors">
            {stat.label}
          </div>
          <div className="text-[11px] text-slate-500 font-medium mt-0.5">
            {stat.detail}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function StatsCounter() {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Users,
      numericValue: 500,
      suffix: "+",
      label: "Happy Tourists",
      detail: "From UK, Germany, Italy & Australia"
    },
    {
      icon: ShieldCheck,
      numericValue: 100,
      suffix: "%",
      label: "Private & Safe Hires",
      detail: "Clean AC Sedans, Vans & SUVs"
    },
    {
      icon: Award,
      numericValue: 4.9,
      decimals: 1,
      suffix: " ★",
      label: "Verified Rating",
      detail: "Google Reviews & Tripadvisor"
    },
    {
      icon: MapPin,
      numericValue: 50,
      suffix: "+",
      label: "Island Destinations",
      detail: "Custom itineraries across Sri Lanka"
    }
  ];

  return (
    <section ref={containerRef} className="bg-white border-y border-slate-200/80 py-10 sm:py-12 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              stat={stat}
              isVisible={isInView}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
