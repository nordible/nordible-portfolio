import React from 'react';
import { Terminal, Mail, Phone, Github } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export default function Footer({ onPrivacyClick, onTermsClick }: FooterProps) {
  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white py-16 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Terminal className="h-8 w-8 text-purple-400 dark:text-green-400" />
              <span className="text-2xl font-bold tracking-tight uppercase">Nordible Solutions</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed font-medium">
              A specialized software engineering partner dedicated to architecting high-performance digital systems. 
              From core design to global scaling.
            </p>
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Mail className="h-4 w-4 text-purple-400 dark:text-green-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-purple-400 dark:group-hover:text-green-400 transition-colors">nordiblesolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer">
                <Phone className="h-4 w-4 text-purple-400 dark:text-green-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-purple-400 dark:group-hover:text-green-400 transition-colors">+91-9773207706</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs font-bold text-gray-500 mb-8 uppercase tracking-[0.3em]">System.Capabilities</h3>
            <ul className="space-y-4 text-sm font-semibold uppercase tracking-widest">
              <li><a href="#services" className="text-gray-400 hover:text-purple-400 dark:hover:text-green-400 transition-colors flex items-center"><span className="text-purple-500 dark:text-green-500 mr-2">{' > '}</span> Software Engineering</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400 dark:hover:text-green-400 transition-colors flex items-center"><span className="text-purple-500 dark:text-green-500 mr-2">{' > '}</span> Enterprise Solutions</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-purple-400 dark:hover:text-green-400 transition-colors flex items-center"><span className="text-purple-500 dark:text-green-500 mr-2">{' > '}</span> Cloud Infrastructure</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-purple-400 dark:hover:text-green-400 transition-colors flex items-center"><span className="text-purple-500 dark:text-green-500 mr-2">{' > '}</span> Portfolios</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-bold text-gray-500 mb-8 uppercase tracking-[0.3em]">Node.Access</h3>
            <ul className="space-y-4 text-sm font-semibold uppercase tracking-widest">
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 dark:hover:text-green-400 transition-colors flex items-center"><span className="text-purple-500 dark:text-green-500 mr-2">{' > '}</span> About_Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 dark:hover:text-green-400 transition-colors flex items-center"><span className="text-purple-500 dark:text-green-500 mr-2">{' > '}</span> Contact_Root</a></li>
              <li>
                <button 
                  onClick={onPrivacyClick}
                  className="text-gray-400 hover:text-purple-400 dark:hover:text-green-400 transition-colors text-left flex items-center"
                >
                  <span className="text-purple-500 dark:text-green-500 mr-2">{' > '}</span> Privacy_Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={onTermsClick}
                  className="text-gray-400 hover:text-purple-400 dark:hover:text-green-400 transition-colors text-left flex items-center"
                >
                  <span className="text-purple-500 dark:text-green-500 mr-2">{' > '}</span> Terms_Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-green-900/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Nordible Solutions // Internal_Access_Only
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/nordible" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400 dark:hover:text-green-400 transition-colors transform hover:scale-110">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://stackoverflow.com/u/2404470" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400 dark:hover:text-green-400 transition-colors transform hover:scale-110">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092L6.785 12.743zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.155z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
