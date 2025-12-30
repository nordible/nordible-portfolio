import React from 'react';
import { Code, Mail, Phone, MessageSquare, Github, MapPin } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export default function Footer({ onPrivacyClick, onTermsClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold">Nordible Solutions</span>
            </div>
            <p className="text-gray-300 mb-4">
              Software Development Consultant specializing in scalable web solutions 
              for businesses of all sizes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-sm">nordiblesolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-sm">+91-9773207706</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 text-purple-400" />
                <span className="text-sm">WhatsApp Available</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-purple-400 mt-1" />
                <span className="text-sm">002, Simply Move In, 17 Maruthi Layout, AECS Layout, Marathalli, Bangalore 560037</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/skbr1234" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://stackoverflow.com/u/2404470" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092L6.785 12.743zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.155z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">E-Commerce Solutions</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Custom Web Applications</a></li>
              <li><a href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              <li>
                <button 
                  onClick={onPrivacyClick}
                  className="hover:text-purple-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={onTermsClick}
                  className="hover:text-purple-400 transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nordible Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}