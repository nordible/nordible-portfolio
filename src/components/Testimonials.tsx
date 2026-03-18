import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'Healthcare Tech',
      rating: 5,
      text: 'Nordible delivered an exceptional healthcare platform that exceeded our expectations. His attention to detail and technical expertise made the project a huge success.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Fintech Startup',
      rating: 5,
      text: 'Working with Nordible was fantastic. He built our payment processing system with incredible precision and delivered on time. Highly recommended!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Business Owner',
      company: 'E-commerce Store',
      rating: 5,
      text: 'Our online store has been performing amazingly since Nordible built it. Sales increased by 150% in the first month. Professional and reliable!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 dark:opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 mb-6 text-[10px] font-mono font-bold tracking-[0.3em] text-purple-600 dark:text-purple-400 uppercase bg-purple-100 dark:bg-purple-900/30 rounded-full border border-purple-200 dark:border-purple-800">
            Client_Feedback
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            System <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Verification</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Read objective performance reviews from our global partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="tech-card rounded-xl p-8 transition-all duration-300 hover:shadow-2xl relative notch-tl">
              <Quote className="h-8 w-8 text-purple-500/20 absolute top-6 right-6" />
              
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-orange-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4 border-t border-gray-100 dark:border-gray-800 pt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-sm object-cover border border-gray-200 dark:border-gray-700 notch-tl"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider text-sm">{testimonial.name}</h4>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{testimonial.role} // {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="tech-card rounded-2xl p-10 bg-gradient-to-r from-purple-600/5 to-blue-600/5 border border-purple-500/20 relative overflow-hidden notch-tl">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Start Your Product Journey</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto font-medium">
                Ready to deliver exceptional results for your business? Initialize your protocol today.
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('consultation');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-4 rounded-sm font-bold transition-all duration-200 hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-white tech-glow uppercase tracking-widest text-xs"
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