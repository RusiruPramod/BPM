import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Star, CheckCircle, MessageSquare, ExternalLink, Plus, Quote } from 'lucide-react';
import ScrollReveal from './common/ScrollReveal';

export default function ReviewSection() {
  const { reviews, addReview, branding } = useApp();
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  
  // New review form
  const [author, setAuthor] = useState('');
  const [country, setCountry] = useState('');
  const [serviceUsed, setServiceUsed] = useState('7-Day Round Island Tour');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!author || !comment) return;
    addReview({
      author: `${author} (${country || 'Guest'})`,
      rating: parseInt(rating),
      serviceUsed,
      comment
    });
    setIsWriteModalOpen(false);
    setAuthor('');
    setComment('');
  };

  return (
    <section id="reviews" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={600}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Verified Guest Testimonials
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif-heading">
                What Travelers Say About Bandara and BP Tours
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                Over 200+ 5-star reviews across Google and Tripadvisor from international tourists.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Tripadvisor Badge Link */}
              <a
                href="https://www.tripadvisor.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors"
              >
                <span>Tripadvisor Reviews (5.0 ★)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Google Reviews Link */}
              <a
                href="https://google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 px-4 py-2.5 rounded-xl text-xs font-bold transition-colors"
              >
                <span>Google Reviews (4.9 ★)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Write Review Button */}
              <button
                onClick={() => setIsWriteModalOpen(true)}
                className="flex items-center gap-1.5 bg-slate-900 hover:bg-emerald-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-md transition-colors"
              >
                <Plus className="w-4 h-4" /> Write a Review
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <ScrollReveal key={rev.id} delay={idx * 100} duration={600} direction="up" className="h-full">
              <div
                className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden h-full"
              >
                <Quote className="absolute right-6 top-6 w-12 h-12 text-slate-100 -z-0 pointer-events-none" />
                
                <div className="relative z-10 space-y-4">
                  {/* Rating and Source */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                          }`}
                        />
                      ))}
                    </div>

                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                      {rev.source}
                    </span>
                  </div>

                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm border border-emerald-300">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1">
                        {rev.author}
                        {rev.verified && <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />}
                      </h4>
                      <span className="text-xs text-slate-400">{rev.serviceUsed} • {rev.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Write Review Modal */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm p-4 flex items-center justify-center animate-fade-in">
          <div className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 font-serif-heading">Write a Review</h3>
              <button
                onClick={() => setIsWriteModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl p-3 outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Country</label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="e.g. Germany, UK, Australia"
                  className="w-full bg-slate-50 border border-slate-200 text-sm font-semibold rounded-xl p-3 outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Star Rating</label>
                <div className="flex gap-2 py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1"
                    >
                      <Star
                        className={`w-7 h-7 ${
                          star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Review</label>
                <textarea
                  rows="4"
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us about your tour experience with Bandara Premathilaka..."
                  className="w-full bg-slate-50 border border-slate-200 text-sm font-medium rounded-xl p-3 outline-none focus:border-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
