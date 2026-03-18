import React, { useState } from 'react';
import { Menu, X, Terminal, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  onDashboard: () => void;
}

export default function Header({ onDashboard }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Free Consultation Banner
      <div className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 text-center">
        <div className="flex items-center justify-center space-x-2 text-sm font-semibold">
          <span className="animate-bounce">📞</span>
          <span>FREE 30-Minute Consultation Call Available!</span>
          <button 
            onClick={() => scrollToSection('consultation')}
            className="ml-2 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
       */}
      <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Nordible Solutions</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Capabilities
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('consultation')} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Contact
            </button>
            {/* <button
              onClick={() => scrollToSection('consultation')}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
            >
              📞 FREE 30-min Call
            </button> */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            {/* <button 
              onClick={onDashboard}
              className="text-xs bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full transition-colors"
            >
              Dashboard
            </button> */}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-gray-900 dark:text-white" /> : <Menu className="h-6 w-6 text-gray-900 dark:text-white" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Capabilities
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('consultation')} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                Contact
              </button>
              <button onClick={() => scrollToSection('consultation')} className="block mx-3 my-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 text-center">
                📞 FREE 30-min Call
              </button>
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}