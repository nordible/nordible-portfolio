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
      alert('Failed to send message. Please try again or contact me directly at nordiblesolutions@gmail.com');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="consultation" className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 dark:opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 text-[10px] font-mono font-bold tracking-[0.3em] text-orange-600 dark:text-orange-400 uppercase bg-orange-100 dark:bg-orange-900/30 rounded-full border border-orange-200 dark:border-orange-800">
            Initialize Project_Request
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Let's Engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600">Something Amazing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Ready to transform your vision into a high-performance system? Start the protocol.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="tech-card p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                <h3 className="font-mono text-xs font-bold text-gray-400 mb-8 uppercase tracking-widest flex items-center">
                  <span className="h-px w-8 bg-gray-300 dark:bg-gray-700 mr-3"></span>
                  System.Access_Points
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: Mail, label: 'Email_Root', value: 'nordiblesolutions@gmail.com' },
                    { icon: Phone, label: 'Comms_Link', value: '+91-9773207706' },
                    { icon: MessageSquare, label: 'Status_Instant', value: 'WhatsApp Active' }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="flex items-center space-x-3 text-gray-900 dark:text-white font-bold group-hover:text-purple-600 transition-colors">
                        <item.icon className="h-4 w-4 text-purple-500" />
                        <span>{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-2xl p-8 tech-glow relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-[40px] font-bold opacity-10 pointer-events-none">
                  SLA
                </div>
                <h4 className="font-mono text-xs font-bold text-purple-400 mb-4 uppercase tracking-widest">Protocol.Response</h4>
                <p className="text-gray-300 text-sm leading-relaxed font-medium">
                  Average response latency: 2-4 hours. 
                  Protocol Priority: High for complex systems and innovative products.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="tech-card rounded-2xl p-8 md:p-10 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-[10px] font-mono font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Full_Name.Input
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-sm bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all font-medium"
                    placeholder="IDENTIFY YOURSELF"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[10px] font-mono font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Email_Address.Input
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-sm bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all font-medium"
                    placeholder="PROTOCOL@ENDPOINT.COM"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-[10px] font-mono font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Comms_Number.Input
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-sm bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all font-medium"
                  placeholder="+X (XXX) XXX-XXXX"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-[10px] font-mono font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    System_Type.Select
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 rounded-sm bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all font-medium appearance-none"
                  >
                    <option value="">-- SELECT SYSTEM --</option>
                    <option value="e-commerce">E-COMMERCE CORE</option>
                    <option value="business-website">CORPORATE SYSTEM</option>
                    <option value="custom-application">CUSTOM PROTOCOL</option>
                    <option value="other">OTHER ARCHITECTURE</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-[10px] font-mono font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    Resource_Allocation.Select
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-sm bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all font-medium appearance-none"
                  >
                    <option value="">-- SELECT SCALE --</option>
                    <option value="1k-5k">$1k - $5k</option>
                    <option value="5k-10k">$5k - $10k</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k+">$25k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="block text-[10px] font-mono font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Project_Manifest.Detailed
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 rounded-sm bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all font-medium resize-none"
                  placeholder="DESCRIBE THE SYSTEM ARCHITECTURE, GOALS, AND CONSTRAINTS..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold py-5 px-8 rounded-sm transition-all duration-200 hover:bg-purple-600 dark:hover:bg-purple-400 hover:text-white dark:hover:text-white flex items-center justify-center space-x-3 shadow-xl tech-glow disabled:cursor-not-allowed uppercase tracking-widest text-sm"
              >
                <Send className="h-4 w-4" />
                <span>{isSubmitting ? 'EXECUTING...' : 'TRANSMIT REQUEST'}</span>
              </button>

              <p className="text-[10px] font-mono text-gray-400 text-center uppercase tracking-tighter">
                By transmitting, you authorize encrypted follow-up communications regarding this manifest.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}