import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export default function ClientStories() {
  const testimonials = [
    {
      quote: "Nordible's technical expertise and leadership were instrumental in delivering our healthcare platform ahead of schedule. His attention to detail and architectural vision made all the difference.",
      author: "Dr. Sarah Chen",
      role: "Product Manager",
      company: "General Electric Healthcare",
      rating: 5
    },
    {
      quote: "Working with Nordible was a game-changer for our fintech platform. His deep understanding of scalable systems helped us process millions of transactions seamlessly.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "Nium",
      rating: 5
    },
    {
      quote: "Nordible's expertise in healthcare technology integration was invaluable. His solution improved our device monitoring capabilities significantly.",
      author: "Dr. Amanda Foster",
      role: "CEO",
      company: "Baxter International",
      rating: 5
    }
  ];

  return (
    <section id="stories" className="relative py-24 bg-slate-50 dark:bg-black overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 dark:opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 mb-6 text-[10px] font-mono font-bold tracking-[0.3em] text-green-600 dark:text-green-400 uppercase bg-green-100 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-500/30">
            Success_Manifests
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Proven delivery for industry leaders across the global technology landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="tech-card rounded-xl p-8 transition-all duration-300 hover:shadow-2xl relative notch-tl">
              <ShieldCheck className="h-8 w-8 text-green-500/20 absolute top-6 right-6" />
              
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-8 font-medium leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-gray-100 dark:border-green-900/30 pt-6">
                <p className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm">{testimonial.author}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="h-px w-4 bg-green-500"></span>
                  <p className="text-[10px] font-mono text-green-600 dark:text-green-400 uppercase tracking-widest">{testimonial.company}</p>
                </div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}