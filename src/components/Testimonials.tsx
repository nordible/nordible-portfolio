import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
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
      text: "The architectural depth Nordible brings to software engineering is rare. They didn't just write code; they built a resilient infrastructure that handles our scale effortlessly.",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Faisal Al-Otaibi',
      role: 'Operations Director',
      company: 'Global Trade Hub',
      rating: 5,
      text: 'Nordible transformed our complex legacy workflows into a streamlined digital system. Their professional approach and engineering rigor are truly world-class.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section id="testimonials" className="relative py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
            Client Success
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white mb-4 tracking-tight font-heading">
            Trusted by Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Objective performance reviews from our global engineering partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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

              <div className="flex items-center space-x-3 border-t border-nordible-border dark:border-gray-800 pt-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-xl object-cover shadow-md"
                />
                <div>
                  <h4 className="font-extrabold text-nordible-dark dark:text-white uppercase tracking-wider text-[11px] font-heading">{testimonial.name}</h4>
                  <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{testimonial.role} • {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="rounded-3xl p-10 bg-gradient-to-br from-nordible-blue to-indigo-700 text-white text-center relative overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="absolute top-0 right-0 w-48 h-48 opacity-20 pointer-events-none -mr-8 -mt-8">
              <img src="/images/mascot/celebrate.webp" alt="" className="w-full h-full object-contain rotate-12" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold mb-3 font-heading">Start Your Product Journey</h3>
              <p className="text-base text-blue-100 mb-8 max-w-2xl mx-auto font-medium">
                Ready to deliver exceptional results for your business? Let's build your next system today.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('consultation');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-nordible-dark px-8 py-3.5 rounded-xl font-bold transition-all duration-200 hover:bg-blue-50 active:scale-95 shadow-xl text-[11px] uppercase tracking-widest"
              >
                Initialize Discovery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
