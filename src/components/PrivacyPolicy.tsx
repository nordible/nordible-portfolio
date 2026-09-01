import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-nordible-bg dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-500 hover:text-nordible-blue mb-10 font-bold text-sm uppercase tracking-widest transition-all active:scale-95"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Website</span>
        </Link>

        <div className="card-premium p-10 md:p-16">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
            Legal Document
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-nordible-dark dark:text-white mb-10 font-heading tracking-tight">Privacy Policy</h1>
          
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <p className="text-gray-500 dark:text-gray-400 mb-12 font-bold text-xs uppercase tracking-widest border-b border-nordible-border dark:border-gray-700 pb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-extrabold text-nordible-dark dark:text-white mb-4 font-heading tracking-tight">1. Information We Collect</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed font-medium">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
                  {['Fill out our contact form', 'Request a consultation', 'Communicate via digital channels', 'Provide project specifications'].map((item, i) => (
                    <li key={i} className="bg-nordible-bg dark:bg-gray-800 p-4 rounded-xl border border-nordible-border dark:border-gray-700 text-sm font-bold text-gray-600 dark:text-gray-300 flex items-center">
                       <span className="w-2 h-2 rounded-full bg-nordible-blue mr-3"></span>
                       {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-nordible-dark dark:text-white mb-4 font-heading tracking-tight">2. Use of Information</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                  We use the information we collect to respond to inquiries, schedule consultations, send project updates, and improve our engineering services. All data is processed with maximum security and confidentiality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-extrabold text-nordible-dark dark:text-white mb-4 font-heading tracking-tight">3. Data Security</h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access or disclosure. We use SSL/TLS encryption for all digital transmissions.
                </p>
              </section>

              <section className="bg-nordible-section-bg dark:bg-gray-800/50 p-8 rounded-3xl border border-nordible-border dark:border-gray-700">
                <h2 className="text-2xl font-extrabold text-nordible-dark dark:text-white mb-6 font-heading tracking-tight">Contact Information</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                   <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                         <Mail className="h-5 w-5 text-nordible-blue" />
                      </div>
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest">mail@nordible.co</span>
                   </div>
                   <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm">
                         <Phone className="h-5 w-5 text-nordible-blue" />
                      </div>
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest">+4915235850031</span>
                   </div>
                   <div className="sm:col-span-2 flex items-start space-x-4">
                      <div className="p-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm mt-1">
                         <MapPin className="h-5 w-5 text-nordible-blue" />
                      </div>
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-300 uppercase tracking-widest leading-relaxed">Nordible Technologies, Breitlacherstraße 101, Rödelheim, 60489 Frankfurt, Germany</span>
                   </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
