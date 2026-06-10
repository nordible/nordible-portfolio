import React, { useState } from 'react';
import { Send, Phone, Mail, MessageSquare } from 'lucide-react';
import { sendContactEmail, ContactFormData } from '../services/emailService';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const success = await sendContactEmail(formData as ContactFormData);
    
    if (success) {
      alert('Thank you for your inquiry! We will get back to you within 24 hours.');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        description: ''
      });
    } else {
      alert('Failed to send message. Please try again or contact me directly at mail@nordible.co');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="consultation" className="relative py-24 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
            Initialize Project Request
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white mb-6 tracking-tight font-heading">
            Let's Engineer <span className="text-nordible-blue">Something Amazing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Ready to transform your vision into a high-performance system? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="card-premium p-8">
                <h3 className="text-xs font-bold text-gray-400 mb-8 uppercase tracking-widest flex items-center">
                  <span className="h-px w-8 bg-nordible-border dark:bg-gray-700 mr-3"></span>
                  Contact Methods
                </h3>
                <div className="space-y-8">
                  {[
                    { icon: Mail, label: 'Email Address', value: 'mail@nordible.co' },
                    { icon: Phone, label: 'Phone Number', value: '+91-9773207706' },
                    { icon: MessageSquare, label: 'Instant Comms', value: 'WhatsApp Available' }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{item.label}</div>
                      <div className="flex items-center space-x-4 text-nordible-dark dark:text-white font-extrabold group-hover:text-nordible-blue transition-colors">
                        <div className="p-2 bg-blue-50 dark:bg-gray-700 rounded-lg">
                          <item.icon className="h-5 w-5 text-nordible-blue dark:text-blue-400" />
                        </div>
                        <span className="text-lg">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-nordible-dark text-white rounded-3xl p-10 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 opacity-20 pointer-events-none">
                  <img src="/images/mascot/celebrate.webp" alt="" className="w-full h-full object-contain rotate-12" />
                </div>
                <h4 className="text-xs font-bold text-blue-300 mb-4 uppercase tracking-widest">Global Protocol</h4>
                <p className="text-blue-50 text-base leading-relaxed font-medium">
                  Average response time is under 24 hours. We prioritize high-impact innovative products.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="card-premium p-10 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="fullName" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 transition-all font-semibold"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 transition-all font-semibold"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="phone" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 transition-all font-semibold"
                  placeholder="+X (XXX) XXX-XXXX"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="projectType" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Project Category
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 transition-all font-semibold appearance-none"
                  >
                    <option value="">-- Select Type --</option>
                    <option value="e-commerce">E-Commerce</option>
                    <option value="business-website">Business Platform</option>
                    <option value="custom-application">Custom Software</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label htmlFor="budget" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 transition-all font-semibold appearance-none"
                  >
                    <option value="">-- Select Scale --</option>
                    <option value="1k-5k">$1k - $5k</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k+">$25k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="description" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Project Brief
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 transition-all font-semibold resize-none"
                  placeholder="Tell us about your goals and requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-5 shadow-xl shadow-blue-500/20"
              >
                <Send className="h-5 w-5 mr-3" />
                <span>{isSubmitting ? 'Sending Request...' : 'Send Message'}</span>
              </button>

              <p className="text-[10px] font-bold text-gray-400 text-center uppercase tracking-widest">
                We value your privacy. Your data is never shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
