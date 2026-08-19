import React from 'react';
import { 
  Shield, 
  Zap, 
  Target, 
  Award, 
  CheckCircle2, 
  Linkedin, 
  Github, 
  Layers 
} from 'lucide-react';

const About = () => {
  const qualities = [
    {
      icon: Shield,
      title: "Clean Engineering",
      description: "We write robust, maintainable code that stands the test of time and scale."
    },
    {
      icon: Zap,
      title: "Rapid Execution",
      description: "Speed is our second name. We ship features and systems with unmatched velocity."
    },
    {
      icon: Target,
      title: "Business Focused",
      description: "We don't just build tech; we build tools that solve real business challenges."
    }
  ];

  const milestones = [
    {
      role: "Tech Lead / Engineering Manager",
      company: "Quest Global",
      highlight: "Delivered mission-critical systems for GE Healthcare (OncoCare platform) & Baxter/Vantive (RST AWS IoT diagnostics).",
      tags: ["GE Healthcare", "Vantive (Baxter)", "AWS IoT"]
    },
    {
      role: "Engineering Lead / Interim Head of Engineering",
      company: "Nium Inc. (Instarem)",
      highlight: "Fintech Unicorn: Built & led 18+ engineers, PCI-DSS compliance audits, and high-value API integrations (PhonePe).",
      tags: ["Fintech Unicorn", "PCI-DSS", "18+ Team"]
    },
    {
      role: "Lead Senior Software Engineer (SDE-3)",
      company: "The Parent Inc. (TickledMedia)",
      highlight: "Architected microservices and micro-frontends transition for flagship Parents.VIP marketing platform.",
      tags: ["Microservices", "Micro-frontends", "Sqitch"]
    },
    {
      role: "Senior AI / Full-Stack Engineer & Co-Founder",
      company: "SmarTek21 & NerdsPal",
      highlight: "Engineered SmartbotHub NLP chatbot AI platform (Best Performer Award) and bootstrapped EdTech platform.",
      tags: ["NLP Chatbots", "Cloud Architecture"]
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-nordible-section-bg dark:bg-gray-800 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Profile Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
              Company Profile
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-nordible-dark dark:text-white mb-8 tracking-tight font-heading">
              Software Engineering <span className="text-nordible-blue">Partner</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
              <p>
                Nordible Technologies is a specialized software engineering partner dedicated to architecting high-performance digital systems. 
                We don't just develop; we design and deploy high-impact solutions that solve real-world problems 
                at scale.
              </p>

              <p>
                From building cross-platform consumer apps to architecting complex enterprise systems 
                for global organizations, our expertise spans the entire technology landscape. 
                We believe in science-backed UX, clean engineering, and resilient architectures.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8 py-8 border-y border-nordible-border dark:border-gray-700">
              <div>
                <div className="text-4xl font-extrabold text-nordible-dark dark:text-white font-heading">15+</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-nordible-dark dark:text-white font-heading">50+</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Systems Shipped</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 gap-6 relative z-10">
            {qualities.map((quality, index) => (
              <div key={index} className="card-premium group hover:border-nordible-blue/30 cursor-default">
                <div className="flex items-start space-x-5">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    <quality.icon className="h-6 w-6 text-nordible-blue dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl text-nordible-dark dark:text-white mb-2 font-heading">
                      {quality.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">{quality.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Story Section */}
        <div className="relative border-t border-nordible-border dark:border-gray-700 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-nordible-blue dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
              Leadership &amp; Vision
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-nordible-dark dark:text-white tracking-tight font-heading mb-4">
              Founder Story &amp; <span className="text-nordible-blue">Architectural Legacy</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
              15 years of battle-tested engineering leadership driving product velocity, regulatory compliance, and cloud scalability.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Founder Profile Card */}
            <div className="lg:col-span-5 card-premium p-8 lg:p-10 relative overflow-hidden">
              <div className="flex items-center space-x-5 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-nordible-blue to-blue-400 flex items-center justify-center text-white font-heading font-extrabold text-2xl shadow-xl shadow-blue-500/20 flex-shrink-0">
                  KS
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-nordible-dark dark:text-white font-heading">
                    Kabeer Shah
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-nordible-blue dark:text-blue-400 mt-1">
                    Founder &amp; Principal Architect
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                    15+ Years Engineering Leadership
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm font-medium mb-6">
                Results-oriented Engineering Leader with over 15 years of experience building and scaling high-performance software teams. Proven track record in orchestrating end-to-end product development for global Fintech unicorns and Fortune 500 Healthcare enterprises.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3 text-xs font-semibold text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-nordible-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Architectural Strategy:</strong> Microservices, Event-Driven, Serverless &amp; AWS IoT</span>
                </div>
                <div className="flex items-start space-x-3 text-xs font-semibold text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-nordible-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Compliance:</strong> PCI-DSS (Fintech), HIPAA (Healthtech), GRC &amp; TDD</span>
                </div>
                <div className="flex items-start space-x-3 text-xs font-semibold text-gray-600 dark:text-gray-300">
                  <CheckCircle2 className="h-4 w-4 text-nordible-blue flex-shrink-0 mt-0.5" />
                  <span><strong>Thought Leadership:</strong> Top ~32k Reputation on Stack Overflow</span>
                </div>
              </div>

              <div className="pt-6 border-t border-nordible-border dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-nordible-blue" />
                  <span className="text-xs font-bold text-gray-700 dark:text-gray-300">AWS Certified Practitioner</span>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.linkedin.com/in/meetkabeershah/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-xl bg-blue-50 dark:bg-gray-700 hover:bg-nordible-blue hover:text-white text-nordible-blue dark:text-blue-400 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://github.com/skbr1234" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2.5 rounded-xl bg-blue-50 dark:bg-gray-700 hover:bg-nordible-blue hover:text-white text-nordible-blue dark:text-blue-400 transition-colors"
                    title="GitHub Profile"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Career Milestones & Impact */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 flex items-center">
                  <Layers className="h-4 w-4 mr-2 text-nordible-blue" />
                  Executive Experience &amp; Delivered Platforms
                </h4>
                <span className="text-xs font-bold text-nordible-blue">15+ Yrs Track Record</span>
              </div>

              {milestones.map((m, idx) => (
                <div key={idx} className="card-premium p-6 hover:border-nordible-blue/40 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h5 className="font-extrabold text-base text-nordible-dark dark:text-white font-heading">
                      {m.company}
                    </h5>
                    <span className="text-xs font-bold text-nordible-blue bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-md w-fit">
                      {m.role}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium leading-relaxed mb-4">
                    {m.highlight}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-bold uppercase tracking-wider bg-gray-100 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 px-2.5 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
