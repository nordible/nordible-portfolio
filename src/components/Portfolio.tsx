import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp, Pause, Play } from 'lucide-react';

const projects = [
  {
    id: 'nordible-email',
    title: 'Nordible Professional Email',
    client: 'Nordible Product',
    logo: '/images/logo-email.webp',
    link: 'https://email.nordible.co/',
    description: 'A premium SaaS email hosting platform designed for businesses that need security, custom domains, and reliable infrastructure without complexity.',
    technologies: ['Shell', 'Docker', 'PHP', 'Javascript', 'Cloud Infrastructure', 'Security'],
    outcome: 'Successfully launched a high-performance email hosting service with 99.9% uptime guarantee and enterprise-grade security.',
    image: 'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: {
      uptime: '99.9%',
      security: 'SSL/TLS',
      support: '24/7'
    },
    gradient: 'from-nordible-blue to-blue-800'
  },
  {
    id: 'linkedin-catchup',
    title: 'LinkedIn Catch-up Assistant',
    client: 'Nordible Product',
    logo: '/images/logos/Linkedin-Catchup-assistant-icon.png',
    link: 'https://chromewebstore.google.com/detail/linkedin-catch-up-assista/npfnjcgcajdmcihppmihlnnjefkniaip',
    description: 'A safety-first automation suite for LinkedIn that helps maintain authentic relationships by managing birthdays, anniversaries, and new job notifications.',
    technologies: ['Chrome Extension', 'Node.js', 'JavaScript', 'Automation'],
    outcome: 'Automated relationship management with human-emulation delays and privacy-first local storage.',
    image: 'https://images.pexels.com/photos/60504/pexels-photo-60504.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: {
      reach: '50 Iterations',
      safety: 'Human-Emulation',
      privacy: 'Local Storage'
    },
    gradient: 'from-blue-600 to-nordible-blue'
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
    id: 'nextauto',
    title: 'NextAuto',
    client: 'NextServices HSS Pvt Ltd',
    logo: '/images/logos/nextservices_logo.png',
    link: 'https://nextservices.com/',
    description: 'Internal process automation technology solution for automating web scraping, data processing, reporting, and email workflows.',

    technologies: ['C#', 'JavaScript', 'SQL Server', '.NET Framework', 'ASP.NET MVC'],
    outcome: 'Automated 80% of manual processes, saving 40+ hours per week and reducing errors by 90%',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    metrics: {
      automation: '80%',
      time_saved: '40h/week',
      error_reduction: '90%'
    },

    gradient: 'from-emerald-600 to-teal-600'
  },  
  {
    id: 'habitualist',
    title: 'Habitualist',
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
    link: 'https://nordible.github.io/zerodha-sandbox/',
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
  }
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  }, []);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 8000);
      return () => clearInterval(interval);
    }
  }, [isPaused, nextSlide]);

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
  }, [nextSlide, prevSlide]);

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="relative py-20 bg-nordible-bg dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white mb-4 tracking-tight">
            Our Technology Solutions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            We build and scale high-impact technology solutions across diverse industries—from cross-platform consumer apps to enterprise healthcare platforms.
          </p>
        </div>

        <div className="relative flex items-center mb-10">
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-nordible-border dark:border-gray-700 group -translate-x-4 md:-translate-x-10"
          >
            <ChevronLeft className="h-5 w-5 text-nordible-dark dark:text-gray-300 group-hover:text-nordible-blue dark:group-hover:text-blue-400" />
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-blue-500/5 overflow-hidden flex-1 mx-4 md:mx-10 relative group/card border border-nordible-border dark:border-gray-700">
            <div className="relative p-6 text-white overflow-hidden min-h-[300px] flex items-end" style={{ backgroundImage: `url(${currentProject.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
              <div className="relative z-10 w-full">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center p-3 border border-white/30 shadow-2xl">
                      {imageErrors.has(currentProject.id) ? (
                        <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl font-heading">
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
                      <div className="text-[10px] text-blue-200 font-bold uppercase tracking-widest mb-1.5 drop-shadow-md">{currentProject.client}</div>
                      <h3 className="text-2xl md:text-3xl font-extrabold mb-1 tracking-tight font-heading text-white drop-shadow-lg">{currentProject.title}</h3>
                    </div>
                  </div>
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-2.5 px-6 text-[11px] uppercase tracking-widest"
                  >
                    <span>View Project</span>
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center">
                    <span className="h-px w-6 bg-nordible-border dark:bg-gray-700 mr-2"></span>
                    Description
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-medium">{currentProject.description}</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                  <div className="lg:col-span-2 space-y-8">
                    <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl p-6 border-l-4 border-nordible-blue">
                      <h5 className="text-[10px] font-bold text-nordible-dark dark:text-white mb-3 uppercase tracking-widest">
                        Objective Outcome
                      </h5>
                      <p className="text-nordible-dark dark:text-gray-200 font-bold text-lg leading-snug">{currentProject.outcome}</p>
                    </div>

                    <div>
                      <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Technology Stack</h5>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-white dark:bg-gray-700 border border-nordible-border dark:border-gray-600 text-gray-700 dark:text-gray-200 px-3 py-1.5 text-[11px] font-bold uppercase tracking-tight rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-nordible-dark text-white rounded-2xl p-6 shadow-2xl shadow-blue-900/20">
                      <h5 className="text-[10px] font-bold text-blue-300 mb-6 uppercase tracking-widest flex items-center">
                        <TrendingUp className="h-3.5 w-3.5 mr-2" />
                        Key Metrics
                      </h5>
                      <div className="space-y-6">
                        {Object.entries(currentProject.metrics).map(([key, value], index) => (
                          <div key={index} className="flex flex-col">
                            <span className="text-[9px] text-blue-200/60 uppercase tracking-[0.2em] mb-1.5 font-bold">
                              {key.replace('_', ' ')}
                            </span>
                            <span className="text-2xl font-extrabold tracking-tight font-heading">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 z-20 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-nordible-border dark:border-gray-700 group translate-x-4 md:translate-x-10"
          >
            <ChevronRight className="h-5 w-5 text-nordible-dark dark:text-gray-300 group-hover:text-nordible-blue dark:group-hover:text-blue-400" />
          </button>
        </div>

        <div className="flex flex-col items-center space-y-10">
          <button
            onClick={togglePause}
            className="flex items-center space-x-3 bg-white dark:bg-gray-800 px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-nordible-border dark:border-gray-700 group text-[10px] font-bold uppercase tracking-widest text-nordible-dark dark:text-gray-200"
          >
            {isPaused ? (
              <>
                <Play className="h-3.5 w-3.5 text-nordible-blue" />
                <span>Resume Slideshow</span>
              </>
            ) : (
              <>
                <Pause className="h-3.5 w-3.5 text-nordible-blue" />
                <span>Pause Slideshow</span>
              </>
            )}
          </button>

          <div className="text-center w-full">
            <div className="rounded-3xl p-10 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800 border border-blue-100 dark:border-gray-700 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-nordible-dark dark:text-white mb-3 font-heading">Partner with Nordible Solutions</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto font-medium">
                  We love engineering complex products and solving high-impact problems. Let's build your next system.
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById('consultation');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-primary py-3.5 px-8 text-[11px] uppercase tracking-widest shadow-xl shadow-blue-500/20"
                >
                  Start a Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
