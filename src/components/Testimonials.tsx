import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const tm = t.testimonials;
  const testimonials = tm.items || [];
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'normal' | 'reverse'>('normal');

  const marqueeTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {tm.title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
              {tm.title}
            </h2>
          </div>
        )}

        {/* Dynamic Moving Testimonials Track */}
        <div className="relative overflow-hidden w-full py-4">
          {/* Subtle Left/Right Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-20 pointer-events-none"></div>

          <div
            className={`animate-marquee flex items-stretch space-x-6 py-2 ${isPaused ? 'paused' : ''}`}
            style={{ animationDuration: '38s', animationDirection: direction }}
          >
            {marqueeTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-premium group relative flex flex-col justify-between hover:border-nordible-blue/30 transition-all duration-500 !p-6 sm:!p-7 w-[320px] sm:w-[380px] md:w-[420px] shrink-0 text-left"
              >
                <Quote className="h-8 w-8 text-blue-500/10 absolute top-4 right-4" />
                
                <div>
                  <div className="flex mb-4 space-x-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-nordible-orange fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium italic">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center space-x-3 pt-4 border-t border-nordible-border dark:border-gray-700">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border border-nordible-blue/20 bg-white p-0.5"
                  />
                  <div>
                    <h4 className="text-sm font-extrabold text-nordible-dark dark:text-white font-heading">
                      {testimonial.name}
                    </h4>
                    <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accessible UX Motion Controls */}
        <div className="mt-8 flex justify-center items-center">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-700 shadow-sm">
            <button
              onClick={() => {
                setDirection('reverse');
                setIsPaused(false);
              }}
              aria-label="Move left"
              title="Move left"
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                direction === 'reverse' && !isPaused
                  ? 'text-nordible-blue dark:text-blue-400 bg-blue-50 dark:bg-gray-800'
                  : 'text-gray-500 hover:text-nordible-blue dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Resume movement" : "Pause movement"}
              title={isPaused ? "Resume movement" : "Pause movement"}
              className="p-1.5 rounded-full text-gray-500 hover:text-nordible-blue dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {isPaused ? (
                <Play className="h-3.5 w-3.5 text-nordible-blue dark:text-blue-400" />
              ) : (
                <Pause className="h-3.5 w-3.5" />
              )}
            </button>

            <button
              onClick={() => {
                setDirection('normal');
                setIsPaused(false);
              }}
              aria-label="Move right"
              title="Move right"
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                direction === 'normal' && !isPaused
                  ? 'text-nordible-blue dark:text-blue-400 bg-blue-50 dark:bg-gray-800'
                  : 'text-gray-500 hover:text-nordible-blue dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
