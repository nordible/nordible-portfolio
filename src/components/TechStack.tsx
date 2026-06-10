import React, { useState, useEffect, useCallback } from 'react';

const technologies = [
  { 
    name: 'React', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    proficiency: 95
  },
  { 
    name: 'Node.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    proficiency: 90
  },
  { 
    name: 'TypeScript', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    proficiency: 85
  },
  { 
    name: 'Python', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    proficiency: 80
  },
  { 
    name: 'C#', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    proficiency: 75
  },
  { 
    name: 'PostgreSQL', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    proficiency: 85
  },
  { 
    name: 'MongoDB', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    proficiency: 80
  },
  { 
    name: 'AWS', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    proficiency: 85
  },
  { 
    name: 'Docker', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    proficiency: 75
  },
  { 
    name: 'Next.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    proficiency: 90
  },
  { 
    name: 'React Native', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    proficiency: 70
  },
  { 
    name: 'Redis', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    proficiency: 75
  }
];

export default function TechStack() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getVisibleTechnologies = () => {
    const visible = [];
    for (let i = 0; i < 8; i++) {
      const index = (currentIndex + i) % technologies.length;
      visible.push({ ...technologies[index], position: i });
    }
    return visible;
  };

  return (
    <section className="relative py-24 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden">
      <div className="relative w-full">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-white dark:bg-gray-900 rounded-full border border-blue-100 dark:border-gray-700">
            Engineering Arsenal
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white mb-6 tracking-tight font-heading">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Versatile expertise across modern frameworks and scalable infrastructure.
          </p>
        </div>

        {/* Technology Carousel */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between space-x-4 sm:space-x-8 overflow-hidden py-10">
            {getVisibleTechnologies().map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`}
                className="card-premium flex-shrink-0 w-32 h-32 sm:w-44 sm:h-44 flex flex-col items-center justify-center relative overflow-hidden group hover:scale-105 transition-transform duration-500"
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="h-12 w-12 sm:h-20 sm:w-20 group-hover:scale-110 transition-transform duration-300 mb-4 z-10 grayscale group-hover:grayscale-0"
                />
                <span className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest z-10 group-hover:text-nordible-blue transition-colors font-heading">{tech.name}</span>
                
                {/* Proficiency Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  <div 
                    className="h-full bg-nordible-blue transition-all duration-1000"
                    style={{ width: `${tech.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <div className="card-premium p-10 border-l-8 border-nordible-blue relative overflow-hidden bg-white dark:bg-gray-800">
            <h3 className="text-2xl font-extrabold text-nordible-dark dark:text-white mb-4 font-heading tracking-tight">
              Full-Stack Versatility
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-lg">
              Our engineering team maintains robust expertise across frontend frameworks, 
              high-performance backends, and cloud-native infrastructure. We architect 
              systems designed for maximum scalability and optimal resource allocation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
