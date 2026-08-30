import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { sendContactEmail, ContactFormData } from '../services/emailService';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

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
            {c.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white mb-6 tracking-tight font-heading">
            {c.title} <span className="text-nordible-blue">{c.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            {c.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 text-left">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div className="card-premium p-8">
                <h3 className="text-xs font-bold text-gray-400 mb-8 uppercase tracking-widest flex items-center">
                  <span className="h-px w-8 bg-nordible-border dark:bg-gray-700 mr-3"></span>
                  {c.methodsTitle}
                </h3>
                <div className="space-y-6">
                  <a href="mailto:mail@nordible.co" className="block group">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{c.emailLabel}</div>
                    <div className="flex items-center space-x-3 text-nordible-dark dark:text-white font-extrabold group-hover:text-nordible-blue transition-colors">
                      <div className="p-2 bg-blue-50 dark:bg-gray-700 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-gray-600">
                        <Mail className="h-4 w-4 text-nordible-blue dark:text-blue-400" />
                      </div>
                      <span className="text-base">mail@nordible.co</span>
                    </div>
                  </a>

                  <a href="tel:+4915235850031" className="block group">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{c.phoneLabel}</div>
                    <div className="flex items-center space-x-3 text-nordible-dark dark:text-white font-extrabold group-hover:text-nordible-blue transition-colors">
                      <div className="p-2 bg-blue-50 dark:bg-gray-700 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-gray-600">
                        <Phone className="h-4 w-4 text-nordible-blue dark:text-blue-400" />
                      </div>
                      <span className="text-base">+4915235850031</span>
                    </div>
                  </a>

                  <div className="block group">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">{c.headquartersLabel}</div>
                    <div className="flex items-start space-x-3 text-nordible-dark dark:text-white font-bold">
                      <div className="p-2 bg-blue-50 dark:bg-gray-700 rounded-lg mt-0.5">
                        <MapPin className="h-4 w-4 text-nordible-blue dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-semibold leading-relaxed whitespace-pre-line">
                        {c.headquartersValue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-nordible-dark text-white rounded-3xl p-8 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                <h4 className="text-xs font-bold text-blue-300 mb-3 uppercase tracking-widest">{c.protocolTitle}</h4>
                <p className="text-blue-50 text-sm leading-relaxed font-medium">
                  {c.protocolText}
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
                    {c.fullNameLabel}
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
                    {c.emailAddressLabel}
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
                  {c.phoneLabelForm}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 transition-all font-semibold"
                  placeholder="+49 (XXX) XXXXXXX"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="projectType" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    {c.categoryLabel}
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 transition-all font-semibold appearance-none"
                  >
                    <option value="">{c.categorySelect}</option>
                    <option value="custom-technology-solution">Technology Solution</option>
                    <option value="cloud-architecture">Cloud Architecture &amp; Scale</option>
                    <option value="enterprise-platform">Enterprise Platform</option>
                    <option value="other">Other / Advisory</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label htmlFor="budget" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    {c.budgetLabel}
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 transition-all font-semibold appearance-none"
                  >
                    <option value="">{c.budgetSelect}</option>
                    <option value="5k-15k">€5.000 - €15.000</option>
                    <option value="15k-35k">€15.000 - €35.000</option>
                    <option value="35k-75k">€35.000 - €75.000</option>
                    <option value="75k+">€75.000+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="description" className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  {c.briefLabel}
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl bg-nordible-bg dark:bg-gray-800 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 transition-all font-semibold resize-none"
                  placeholder={c.briefPlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full py-5 shadow-xl shadow-blue-500/20"
              >
                <Send className="h-5 w-5 mr-3" />
                <span>{isSubmitting ? c.submittingButton : c.submitButton}</span>
              </button>

              <p className="text-[10px] font-bold text-gray-400 text-center uppercase tracking-widest">
                {c.privacyNotice}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
