import React, { useState } from 'react';
import { Send, Phone, Mail, MessageSquare, MapPin } from 'lucide-react';
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
      alert('Failed to send message. Please try again or contact me directly at nordiblesolutions@gmail.com');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your vision into reality? Get in touch for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span>nordiblesolutions@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <span>+91-9773207706</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-blue-400" />
                    <span>WhatsApp Available</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                    <span>002, Simply Move In, 17 Maruthi Layout, AECS Layout, Marathalli, Bangalore 560037</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-lg font-semibold mb-3">Response Time</h4>
                <p className="text-blue-100 text-sm">
                  We typically respond to all inquiries within 2-4 hours during business hours. 
                  For urgent projects, WhatsApp is the fastest way to reach us.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number (WhatsApp preferred)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent [&>option]:text-gray-900 [&>option]:bg-white"
                  >
                    <option value="">Select project type</option>
                    <option value="e-commerce">E-commerce</option>
                    <option value="business-website">Business Website</option>
                    <option value="custom-application">Custom Application</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent [&>option]:text-gray-900 [&>option]:bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="1k-5k">$1k - $5k</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k+">$25k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Brief Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              <p className="text-xs text-blue-100 text-center">
                By submitting this form, you agree to receive follow-up communications about your project inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}