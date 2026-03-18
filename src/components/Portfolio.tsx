import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Users, TrendingUp, CheckCircle, Pause, Play, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const { isDark } = useTheme();

  const projects = [
    {
      id: 'habitualist',
      title: 'Habitualist',
      client: 'Direct-to-Consumer Product',
      logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0iIzQzMzhjYSIvPjxwYXRoIGQ9Ik0zNSA1MGwxMCAxMCAyMC0yMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjgiIGZpbGw9Im5vbmUiLz48L3N2Zz4=',
      link: 'https://habitualist.app',
      description: 'A science-backed habit tracker using the Elastic Habits method to help users build sustainable consistency without the guilt of streaks. Built as a cross-platform solution from the ground up.',
      technologies: ['React Native', 'React.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      outcome: 'Successfully launched cross-platform (Web & Android) with a privacy-first, science-backed approach to habit formation.',
      image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        platform: 'Web & Android',
        method: 'Elastic Habits',
        privacy: '100% Private'
      },
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'instarem',
      title: 'Instarem.com',
      client: 'NIUM',
      logo: '/images/logos/InstaRem_logo.svg',
      link: 'https://www.instarem.com',
      description: 'Flagship fintech product for cost-effective foreign remittances serving millions of users globally.',

      technologies: ['Node.js', 'React.js', 'PostgreSQL', 'Mocha', 'AWS'],
      outcome: 'Successfully delivered a platform processing millions in remittances with 99.9% uptime',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        users: '1M+',
        transactions: '$100M+',
        uptime: '99.9%'
      },

      gradient: 'from-purple-600 to-blue-600'
    },
    {
      id: 'oncocare',
      title: 'OncoCare Platform',
      client: 'General Electric',
      logo: '/images/logos/GeneralElectric_logo.svg',
      link: 'https://www.gehealthcare.com/specialties/oncology-solutions/oncocare',
      description: 'Comprehensive oncology care assistant platform for clinicians to manage patient data and enable confident cancer care decision-making.',

      technologies: ['Node.js', 'PostgreSQL', 'React.js', 'AWS', 'Leadership'],
      outcome: 'Improved patient care coordination by 40% and reduced data processing time by 60%',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        users: '10K+',
        improvement: '40%',
        uptime: '99.8%'
      },

      gradient: 'from-blue-600 to-teal-600'
    },
    {
      id: 'parents-vip',
      title: 'Parents.VIP',
      client: 'The Parent Inc / TickleMedia',
      logo: '/images/logos/TheParentInc-logo.webp',
      link: 'https://www.parents.vip',
      description: 'End-to-end influencer social media promotions, market surveys, and content creation process management platform.',

      technologies: ['Node.js', 'MySQL', 'Mocha', 'Microservices', 'AWS', 'Redis', 'Python'],
      outcome: 'Streamlined influencer campaigns resulting in 200% increase in campaign efficiency',
      image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        campaigns: '5K+',
        efficiency: '200%',
        uptime: '99.7%'
      },

      gradient: 'from-pink-600 to-purple-600'
    },
    {
      id: 'rst-baxter',
      title: 'RST - Remote Service Tool',
      client: 'Vantive Healthcare',
      logo: '/images/logos/vantive_logo.jpg',
      link: 'https://www.vantive.com',
      description: 'Medical device support platform for remote diagnosis and troubleshooting of medical devices in healthcare facilities.',

      technologies: ['Node.js', 'PostgreSQL', 'AWS IoT', 'Jest', 'TDD', 'AWS'],
      outcome: 'Reduced device downtime by 50% and improved remote diagnostic accuracy by 75%',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        devices: '15K+',
        downtime: '-50%',
        accuracy: '95%'
      },

      gradient: 'from-green-600 to-blue-600'
    },
    {
      id: 'smartbothub',
      title: 'SmartbotHub',
      client: 'Smartek21',
      logo: '/images/logos/smartek21_logo.png',
      link: 'https://smartek21.com',
      description: 'Chatbot-building platform with Natural Language Processing for creating conversational AI chatbots.',

      technologies: ['AngularJS', 'Node.js', 'MySQL', 'AWS', 'NLP'],
      outcome: 'Enabled 500+ businesses to deploy chatbots, reducing customer service costs by 60%',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        bots: '500+',
        cost_reduction: '60%',
        accuracy: '90%'
      },

      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 'daily-planner',
      title: 'Daily Planner',
      logo: '/images/logos/daily-planner-logo.svg',
      link: 'https://planmydaily.com/',
      description: 'A clean, intuitive daily task management application with date navigation and local storage persistence.',

      technologies: ['HTML5', 'JavaScript', 'Tailwind CSS', 'Local Storage'],
      outcome: 'Created a fully functional daily planner with offline capabilities and cross-date task management',
      image: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        features: '5+',
        storage: 'Offline',
        responsive: '100%'
      },

      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'zerodha-sandbox',
      title: 'Zerodha Sandbox',
      logo: '/images/logos/zerodha-logo.png',
      link: 'https://skbr1234.github.io/zerodha-sandbox/',
      description: 'Interactive trading API sandbox demonstrating Zerodha Kite Connect integration with comprehensive endpoints for orders, portfolio, quotes, and market data.',

      technologies: ['TypeScript', 'HTML5', 'CSS3', 'REST API', 'Trading APIs'],
      outcome: 'Built comprehensive trading API demonstration with real-time dummy data simulation and interactive documentation',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        endpoints: '25+',
        coverage: '100%',
        interactive: 'Yes'
      },

      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'ai-markdown-editor',
      title: 'AI Markdown Editor',
      logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZ0dyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojOGI1Y2Y2O3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2E4NTVmNztzdG9wLW9wYWNpdHk6MSIgLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0idGV4dEdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZmZmZjtzdG9wLW9wYWNpdHk6MSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmM2U4ZmY7c3RvcC1vcGFjaXR5OjEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDUiIGZpbGw9InVybCgjYmdHcmFkaWVudCkiIHN0cm9rZT0iIzdjM2FlZCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGcgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIj48Y2lyY2xlIGN4PSIzNSIgY3k9IjMwIiByPSIzIi8+PGNpcmNsZSBjeD0iNjUiIGN5PSIzMCIgcj0iMyIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNDUiIHI9IjMiLz48bGluZSB4MT0iMzUiIHkxPSIzMCIgeDI9IjUwIiB5Mj0iNDUiLz48bGluZSB4MT0iNjUiIHkxPSIzMCIgeDI9IjUwIiB5Mj0iNDUiLz48bGluZSB4MT0iMzUiIHkxPSIzMCIgeDI9IjY1IiB5Mj0iMzAiLz48L2c+PHRleHQgeD0iNTAiIHk9IjY1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzIiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ1cmwoI3RleHRHcmFkaWVudCkiPk08L3RleHQ+PGcgZmlsbD0iI2ZiYmYyNCIgb3BhY2l0eT0iMC44Ij48cG9seWdvbiBwb2ludHM9Ijc1LDI1IDc3LDMwIDgyLDMwIDc4LDMzIDgwLDM4IDc1LDM1IDcwLDM4IDcyLDMzIDY4LDMwIDczLDMwIi8+PC9nPjwvc3ZnPg==',
      link: 'https://ai-markdown-editor.planmydaily.com/',
      description: 'AI-powered markdown editor with writing assistance tools powered by Google Gemini API for tone changes, grammar fixes, and content refinement.',
      problem: 'Writers and developers need intelligent assistance for creating and refining markdown content with proper grammar, tone, and flow.',
      solution: 'Built a React-based markdown editor with integrated AI tools for real-time writing assistance, tone adjustment, and content optimization.',
      technologies: ['React.js', 'Google Gemini API', 'Marked.js', 'Tailwind CSS', 'AI/ML'],
      outcome: 'Created a comprehensive writing assistant that improves content quality with AI-powered editing tools',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        features: '6+',
        ai_tools: '5',
        realtime: 'Yes'
      },
      features: [
        'Live markdown preview',
        'AI tone adjustment (5 styles)',
        'Grammar and flow correction',
        'Content summarization',
        'Text refinement tools',
        'Real-time rendering'
      ],
      gradient: 'from-violet-600 to-purple-600'
    },
    {
      id: 'feedbackbox',
      title: 'FeedbackBox',
      client: 'Developer Tool',
      logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiZ0dyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojNjY3ZWVhO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6Izc2NGJhMjtzdG9wLW9wYWNpdHk6MSIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0idXJsKCNiZ0dyYWRpZW50KSIgc3Ryb2tlPSIjNTU2Y2Q2IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNMzAgMzVoNDBhNSA1IDAgMCAxIDUgNXYyMGE1IDUgMCAwIDEtNSA1SDQwbC04IDhWNjVIMzBhNSA1IDAgMCAxLTUtNVY0MGE1IDUgMCAwIDEgNS01eiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC45Ii8+PGNpcmNsZSBjeD0iNDAiIGN5PSI0OCIgcj0iMiIgZmlsbD0iIzY2N2VlYSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNDgiIHI9IjIiIGZpbGw9IiM2NjdlZWEiLz48Y2lyY2xlIGN4PSI2MCIgY3k9IjQ4IiByPSIyIiBmaWxsPSIjNjY3ZWVhIi8+PC9zdmc+',
      link: 'https://feedback-box.planmydaily.com/',
      description: 'Embeddable feedback widget that connects to Google Forms for easy user feedback collection on any website.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Google Forms API', 'Responsive Design'],
      outcome: 'Created a lightweight, mobile-ready widget that simplifies feedback collection with zero backend requirements',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        setup: '1 Script',
        backend: 'Zero',
        mobile: '100%'
      },
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 'nerdspal',
      title: 'NerdsPal.com',
      client: 'Community Platform',
      logo: '/images/logos/nerdspal-logo.svg',
      link: 'https://www.producthunt.com/products/nersdpal-com',
      description: 'Platform connecting nerds and geeks with like-minded individuals for meaningful conversations and collaborations.',
      technologies: ['React.js', 'Node.js', 'AI/ML', 'WebSocket', 'MongoDB'],
      outcome: 'Built a community platform that brings together tech enthusiasts and facilitates meaningful connections',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        users: '700',
        connections: '4',
        engagement: 'inactive'
      },
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      id: 'nextauto',
      title: 'NextAuto',
      client: 'NextServices HSS Pvt Ltd',
      logo: '/images/logos/nextservices_logo.png',
      link: 'https://nextservices.com/',
      description: 'Internal process automation software for automating web scraping, data processing, reporting, and email workflows.',

      technologies: ['C#', 'JavaScript', 'SQL Server', '.NET Framework', 'ASP.NET MVC'],
      outcome: 'Automated 80% of manual processes, saving 40+ hours per week and reducing errors by 90%',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        automation: '80%',
        time_saved: '40h/week',
        error_reduction: '90%'
      },

      gradient: 'from-emerald-600 to-teal-600'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 8000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
            <Award className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Software Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We build and scale high-impact software products across diverse industries—from cross-platform consumer apps to enterprise healthcare solutions.
          </p>
        </div>



        {/* Project Showcase Card */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 group -translate-x-4 md:-translate-x-16"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden flex-1 mx-8 md:mx-20">
            {/* Project Header with Background Image */}
            <div className="relative p-6 text-white overflow-hidden" style={{ backgroundImage: `url(${currentProject.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center p-3 shadow-lg">
                      {imageErrors.has(currentProject.id) ? (
                        <div className="w-full h-full bg-white/30 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                          {currentProject.client.charAt(0)}
                        </div>
                      ) : (
                        <img
                          key={currentProject.id}
                          src={currentProject.logo}
                          alt={currentProject.client}
                          className="max-w-full max-h-full object-contain"
                          onError={() => {
                            setImageErrors(prev => new Set(prev).add(currentProject.id));
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{currentProject.title}</h3>
                      <p className="text-lg opacity-90">{currentProject.client}</p>
                    </div>
                  </div>
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 mt-4 lg:mt-0 w-fit group shadow-lg"
                  >
                    <span className="font-semibold">View Project</span>
                    <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Project Overview and Image */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Project Overview</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{currentProject.description}</p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Results and Impact */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        Results
                      </h5>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{currentProject.outcome}</p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                      <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                        <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                        Impact
                      </h5>
                      <div className="space-y-2">
                        {Object.entries(currentProject.metrics).map(([key, value], index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-xs text-gray-600 dark:text-gray-300 capitalize">
                              {key.replace('_', ' ')}
                            </span>
                            <span className="font-bold text-sm text-gray-900 dark:text-white">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 group translate-x-4 md:translate-x-16"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
          </button>

          {/* Play/Pause Control */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <button
              onClick={togglePause}
              className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group backdrop-blur-sm"
            >
              {isPaused ? (
                <>
                  <Play className="h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 font-medium group-hover:text-purple-600">Play</span>
                </>
              ) : (
                <>
                  <Pause className="h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 font-medium group-hover:text-purple-600">Pause</span>
                </>
              )}
            </button>
          </div>

          {/* Carousel Indicators */}
          
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Partner with Nordible Solutions for Your Next Project</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              We love working on interesting projects and solving complex problems. Let's chat about your ideas!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('consultation');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}