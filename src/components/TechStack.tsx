import React, { useState } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const technologies = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
];

export default function TechStack() {
  const { language } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'normal' | 'reverse'>('normal');

  // Duplicate for seamless infinite loop
  const marqueeTech = [...technologies, ...technologies];

  return (
    <section className="relative py-20 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden">
      <div className="relative w-full">
        {/* Section Title */}
        <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading">
            {language === 'de' ? 'Technologie-Stack' : 'Our Technology Stack'}
          </h2>
        </div>

        {/* Dynamic Continuous Moving Tech Track */}
        <div className="relative overflow-hidden w-full py-2">
          {/* Subtle Left/Right Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-nordible-section-bg dark:from-gray-800 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-nordible-section-bg dark:from-gray-800 to-transparent z-20 pointer-events-none"></div>

          <div
            className={`animate-marquee flex items-center space-x-4 sm:space-x-5 py-2 ${isPaused ? 'paused' : ''}`}
            style={{ animationDuration: '28s', animationDirection: direction }}
          >
            {marqueeTech.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center space-x-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-700 shadow-sm shrink-0 group hover:border-nordible-blue/40 transition-all hover:scale-105"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="h-5 w-5 sm:h-6 sm:w-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 group-hover:text-nordible-blue dark:group-hover:text-blue-400 transition-colors font-heading">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Accessible UX Motion Controls (Subtle Left, Pause/Play, Right) */}
        <div className="mt-8 flex justify-center items-center">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-gray-900 border border-nordible-border dark:border-gray-700 shadow-sm">
            <button
              onClick={() => {
                setDirection('reverse');
                setIsPaused(false);
              }}
              aria-label="Move left"
              title="Move left"
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                direction === 'reverse' && !isPaused
                  ? 'text-nordible-blue dark:text-blue-400 bg-blue-50 dark:bg-gray-800'
                  : 'text-gray-500 hover:text-nordible-blue dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>

            <button
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? "Resume movement" : "Pause movement"}
              title={isPaused ? "Resume movement" : "Pause movement"}
              className="p-1.5 rounded-full text-gray-500 hover:text-nordible-blue dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
            >
              {isPaused ? (
                <Play className="h-3.5 w-3.5 text-nordible-blue dark:text-blue-400" />
              ) : (
                <Pause className="h-3.5 w-3.5" />
              )}
            </button>

            <button
              onClick={() => {
                setDirection('normal');
                setIsPaused(false);
              }}
              aria-label="Move right"
              title="Move right"
              className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                direction === 'normal' && !isPaused
                  ? 'text-nordible-blue dark:text-blue-400 bg-blue-50 dark:bg-gray-800'
                  : 'text-gray-500 hover:text-nordible-blue dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
