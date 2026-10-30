'use client';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const tm = t.testimonials;
  const testimonials = tm.items || [];

  const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden scroll-mt-20">
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
            className="animate-marquee flex items-stretch space-x-6 py-2 hover:[animation-play-state:paused]"
            style={{ animationDuration: '38s' }}
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

                  <p
                    className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium italic"
                    lang={testimonial.language}
                  >
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-nordible-border dark:border-gray-700">
                  <h3 className="text-sm font-extrabold text-nordible-dark dark:text-white font-heading">
                    {testimonial.name}
                  </h3>
                  <p className="text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mt-0.5">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
