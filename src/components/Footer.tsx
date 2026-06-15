import React from 'react';
import { Mail, Phone, Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-nordible-dark text-white py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg shadow-blue-500/10 border border-white/10">
                <img src="/images/logo-email.webp" alt="Nordible Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight font-heading">Nordible Solutions</span>
            </div>
            <p className="text-blue-100/60 mb-10 leading-relaxed font-medium max-w-md">
              A specialized software engineering partner dedicated to architecting high-performance digital systems. 
              We build high-impact products for businesses globally.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-nordible-blue transition-colors">
                  <Mail className="h-5 w-5 text-blue-300 group-hover:text-white" />
                </div>
                <span className="text-blue-100/80 font-bold text-sm tracking-widest uppercase">mail@nordible.co</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-nordible-blue transition-colors">
                  <Phone className="h-5 w-5 text-blue-300 group-hover:text-white" />
                </div>
                <span className="text-blue-100/80 font-bold text-sm tracking-widest uppercase">+91-9773207706</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-blue-300 mb-8 uppercase tracking-[0.2em]">Expertise</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><a href="#services" className="text-blue-100/60 hover:text-white transition-colors">Software Engineering</a></li>
              <li><a href="https://email.nordible.co/" className="text-blue-100/60 hover:text-white transition-colors">Business Email</a></li>
              <li><a href="#services" className="text-blue-100/60 hover:text-white transition-colors">Cloud Infrastructure</a></li>
              <li><a href="#portfolio" className="text-blue-100/60 hover:text-white transition-colors">Product Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold text-blue-300 mb-8 uppercase tracking-[0.2em]">Company</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><a href="#about" className="text-blue-100/60 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#consultation" className="text-blue-100/60 hover:text-white transition-colors">Contact Us</a></li>
              <li>
                <Link 
                  to="/privacy"
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block w-full"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms"
                  className="text-blue-100/60 hover:text-white transition-colors text-left inline-block w-full"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] font-bold text-blue-100/40 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Nordible Solutions. Built with Excellence.
          </p>
          <div className="flex space-x-6">
            {[
              { icon: Github, url: 'https://github.com/nordible' },
              { icon: Linkedin, url: 'https://www.linkedin.com/company/nordible-co/' },
              { icon: Instagram, url: 'https://www.instagram.com/nordible/' },
              { icon: Youtube, url: 'https://www.youtube.com/@nordible' }
            ].map((social, i) => (
              <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="text-blue-100/40 hover:text-nordible-blue transition-all transform hover:scale-110">
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
