import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const tm = t.testimonials;

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Healthcare Tech',
      rating: 5,
      text: 'Nordible delivered an exceptional healthcare platform that exceeded our expectations. Their attention to detail and technical expertise made the project a huge success.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Vrishank Shete',
      role: 'Tech Lead',
      company: 'Baxter Healthcare',
      rating: 5,
      text: "The architectural depth Nordible brings to technology solutions is rare. They didn't just write code; they built a resilient infrastructure that handles our scale effortlessly.",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Faisal Al-Otaibi',
      role: 'Operations Director',
      company: 'Global Trade Hub',
      rating: 5,
      text: 'Nordible transformed our complex legacy workflows into a streamlined technology solution. Their professional approach and engineering rigor are truly world-class.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section id="testimonials" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(tm.badge || tm.title || tm.subtitle) && (
          <div className="text-center mb-12">
            {tm.badge && (
              <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
                {tm.badge}
              </div>
            )}
            {tm.title && (
              <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white mb-4 tracking-tight font-heading">
                {tm.title}
              </h2>
            )}
            {tm.subtitle && (
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
                {tm.subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-premium group relative flex flex-col hover:border-nordible-blue/30 transition-all duration-500 !p-6">
              <Quote className="h-8 w-8 text-blue-500/10 absolute top-4 right-4" />
              
              <div className="flex mb-4 space-x-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-nordible-orange fill-current" />
                ))}
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium italic flex-1">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-3 pt-4 border-t border-nordible-border dark:border-gray-700">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-nordible-blue/20"
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
    </section>
  );
}
