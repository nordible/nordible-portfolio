import React, { useState, useEffect, useCallback } from 'react';

const technologies = [
  { 
    name: 'React', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'bg-blue-50 dark:bg-green-900/10',
    proficiency: 95
  },
  { 
    name: 'Node.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: 'bg-green-50 dark:bg-green-900/10',
    proficiency: 90
  },
  { 
    name: 'TypeScript', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    color: 'bg-blue-50 dark:bg-green-900/10',
    proficiency: 85
  },
  { 
    name: 'Python', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: 'bg-yellow-50 dark:bg-green-900/10',
    proficiency: 80
  },
  { 
    name: 'C#', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    color: 'bg-purple-50 dark:bg-green-900/10',
    proficiency: 75
  },
  { 
    name: 'PostgreSQL', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: 'bg-blue-50 dark:bg-green-900/10',
    proficiency: 85
  },
  { 
    name: 'MongoDB', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: 'bg-green-50 dark:bg-green-900/10',
    proficiency: 80
  },
  { 
    name: 'AWS', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    color: 'bg-orange-50 dark:bg-green-900/10',
    proficiency: 85
  },
  { 
    name: 'Docker', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    color: 'bg-blue-50 dark:bg-green-900/10',
    proficiency: 75
  },
  { 
    name: 'Next.js', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    color: 'bg-gray-50 dark:bg-green-900/10',
    proficiency: 90
  },
  { 
    name: 'React Native', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: 'bg-cyan-50 dark:bg-green-900/10',
    proficiency: 70
  },
  { 
    name: 'Redis', 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    color: 'bg-red-50 dark:bg-green-900/10',
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

  // Create a circular array for smooth infinite scrolling - max 8 items
  const getVisibleTechnologies = () => {
    const visible = [];
    for (let i = 0; i < 8; i++) {
      const index = (currentIndex + i) % technologies.length;
      visible.push({ ...technologies[index], position: i });
    }
    return visible;
  };

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-black overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20 dark:opacity-30"></div>
      
      {/* Floating Binary Code */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] font-mono text-[10px] flex justify-around overflow-hidden select-none">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex flex-col animate-tech-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
            {i % 2 === 0 ? '01010110 10101010 11110000 00001111' : '11001100 00110011 10101010 01010101'}
            <br />
            {i % 3 === 0 ? 'SYSTEM_INITIALIZED' : 'BUFFER_OVERFLOW_PREVENTED'}
            <br />
            {i % 2 === 0 ? '01010110 10101010 11110000 00001111' : '11001100 00110011 10101010 01010101'}
          </div>
        ))}
      </div>
      
      <div className="relative w-full">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-1 mb-6 text-[10px] font-mono font-bold tracking-[0.3em] text-gray-500 dark:text-green-500 uppercase">
            Engineering Arsenal
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Our Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600 dark:from-green-400 dark:to-emerald-600">Stack</span>
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
                className="tech-card rounded-xl p-6 transition-all duration-500 hover:scale-110 border border-gray-100 dark:border-green-900/30 group flex-shrink-0 w-28 h-28 sm:w-40 sm:h-40 flex flex-col items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white dark:bg-green-900/10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="h-10 w-10 sm:h-16 sm:w-16 group-hover:scale-110 transition-transform duration-300 mb-4 z-10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const div = document.createElement('div');
                      div.className = "h-16 w-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-mono font-bold text-2xl mb-4 shadow-xl z-10";
                      div.textContent = tech.name.charAt(0);
                      parent.appendChild(div);
                    }
                  }}
                />
                <span className="font-mono text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest z-10 group-hover:text-green-500 transition-colors">{tech.name}</span>
                
                {/* Proficiency Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100 dark:bg-green-900/30 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                    style={{ width: `${tech.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <div className="tech-card rounded-2xl p-8 border border-purple-500/20 dark:border-green-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500 dark:bg-green-500"></div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center uppercase tracking-wider">
              <span className="font-mono text-purple-500 dark:text-green-500 mr-3">_manifest</span>
              Full-Stack Versatility
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              Our engineering team maintains a robust stack trace across frontend frameworks, 
              high-performance backends, and cloud-native infrastructure. We architect 
              systems designed for maximum scalability and optimal resource allocation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
