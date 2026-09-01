export const knowledgeBase = {
  personal: {
    name: "Nordible Technologies",
    founder: "Kabeer Shah",
    title: "Engineering Leader | Cloud Strategist | Architect",
    company: {
      name: "Nordible Technologies",
      tagline: "Your complete technology partner for every stage of business growth",
      address: "Nordible Technologies, Breitlacherstraße 101, Rödelheim, 60489 Frankfurt, Germany",
      phone: "+49 152 35850031",
      email: "kabeer@nordible.co",
      generalEmail: "mail@nordible.co",
      pitchDeckUrl: "/nordible-pitch-deck.pdf"
    },
    summary: "Nordible Technologies is an elite technology solutions and cloud architecture partner founded by Kabeer Shah. With over 15 years of experience architecting high-performance systems for global fintech unicorns and Fortune 500 healthcare leaders, we engineer resilient technology solutions from strategy to deployment."
  },
  
  founder: {
    name: "Kabeer Shah",
    role: "Founder & Principal Architect",
    experienceYears: "15+",
    bio: "Results-oriented Engineering Leader with 15+ years of experience building and scaling high-performance engineering teams. Proven track record in orchestrating end-to-end technology solutions for Fintech and Healthcare sectors. Expert in driving architectural strategy (Microservices, AWS), ensuring regulatory compliance (PCI-DSS, HIPAA), and optimizing engineering operations.",
    linkedin: "https://www.linkedin.com/in/meetkabeershah/",
    github: "https://github.com/skbr1234",
    certifications: ["AWS Certified Cloud Practitioner (Valid through 2027)", "B.Sc. IT – Mumbai University (Grade A)"],
    thoughtLeadership: [
      "Top Stack Overflow contributor with ~32k reputation, impacting millions of developers worldwide",
      "Published author on Medium, Chatbots Magazine, and HackerNoon",
      "Active technical content creator on YouTube and GitHub contributor since 2014",
      "TechGig Finalist & Best Performer Award"
    ]
  },

  experience: [
    {
      company: "Quest Global",
      role: "Technical Lead / Engineering Manager",
      duration: "May 2023 – June 2026",
      description: "Led engineering delivery for enterprise leaders including GE Healthcare, Vantive (Baxter Healthcare), and Nipro. Architected OncoCare oncology decision-support platform for GE Healthcare; engineered AWS IoT and Lambda backend for Baxter's Remote Service Tool (RST).",
      technologies: ["Node.js", "PostgreSQL", "AWS IoT", "AWS Lambda", "TDD", "HIPAA Compliance"]
    },
    {
      company: "The Parent Inc. (TickledMedia)",
      role: "Lead Senior Software Engineer (SDE-3)",
      duration: "August 2020 – March 2023",
      description: "Led architectural transformation to Microservices and Micro-frontends for flagship Parents.VIP platform. Governed database migrations with Sqitch and established automated CI/CD workflows.",
      technologies: ["Node.js", "Microservices", "Micro-frontends", "Python", "Redis", "AWS", "Sqitch"]
    },
    {
      company: "Nium Inc. (Instarem)",
      role: "Engineering Lead / Interim Head of Engineering",
      duration: "September 2018 – March 2020",
      description: "Fintech unicorn: Built and led cross-functional engineering department of 18+ engineers. Directed PCI-DSS compliance roadmap and high-value API integrations including PhonePe. Awarded Best Team.",
      technologies: ["Node.js", "React.js", "PostgreSQL", "AWS", "PCI-DSS", "Agile Transformation"]
    },
    {
      company: "SmarTek21",
      role: "Senior Full Stack Engineer",
      duration: "March 2017 – August 2018",
      description: "Developed SmartbotHub conversational NLP chatbot platform for enterprise clients. Won Best Performer Award.",
      technologies: ["Node.js", "AngularJS", "NLP / AI", "MySQL", "AWS"]
    },
    {
      company: "NerdsPal.com",
      role: "Co-Founder & CTO",
      duration: "June 2015 – March 2017",
      description: "Bootstrapped Q&A EdTech cloud platform from zero to launch, connecting students with academic mentors.",
      technologies: ["React.js", "Node.js", "Google Cloud", "WebSockets"]
    },
    {
      company: "Next Service HSS Pvt. Ltd.",
      role: "Software Engineer",
      duration: "April 2012 – March 2016",
      description: "Developed NextAuto internal automation suite (C#, .NET, Node.js) eliminating manual operational tasks.",
      technologies: ["C#", ".NET", "Node.js", "Automation"]
    }
  ],

  skills: {
    leadership: ["Engineering Management (18+)", "Agile/Scrum Transformation", "Roadmap Planning", "Vendor Management", "Technical Recruiting"],
    cloudAndArchitecture: ["Microservices", "Event-Driven Architecture", "Serverless", "AWS (Lambda, EC2, IoT)", "Docker", "Kubernetes", "Cost Optimization"],
    complianceAndSecurity: ["PCI-DSS (Fintech)", "GRC", "HIPAA standards (Healthtech)", "Code Quality (TDD)", "CI/CD Pipelines"],
    frontend: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Python", "C#", ".NET", "PostgreSQL", "MySQL", "Redis", "Docker"]
  },

  projects: [
    {
      name: "Habitualist",
      client: "Direct-to-Consumer Product",
      description: "A science-backed habit tracker using the Elastic Habits method to help users build sustainable consistency without the guilt of streaks. Built as a cross-platform solution from the ground up.",
      outcome: "Successfully launched cross-platform (Web & Android) with a privacy-first, science-backed approach to habit formation.",
      technologies: ["React Native", "React.js", "TypeScript", "Node.js", "PostgreSQL"]
    },
    {
      name: "Instarem.com",
      client: "NIUM",
      description: "Flagship fintech product for cost-effective foreign remittances serving millions of users globally.",
      outcome: "Successfully delivered a platform processing millions in remittances with 99.9% uptime",
      technologies: ["Node.js", "React.js", "PostgreSQL", "Mocha", "AWS"]
    },
    {
      name: "OncoCare Platform", 
      client: "General Electric",
      description: "Comprehensive oncology care assistant platform for clinicians to manage patient data.",
      outcome: "Improved patient care coordination by 40% and reduced data processing time by 60%",
      technologies: ["Node.js", "PostgreSQL", "React.js", "AWS", "Leadership"]
    },
    {
      name: "Parents.VIP",
      client: "The Parent Inc / TickleMedia",
      description: "End-to-end influencer social media promotions, market surveys, and content creation process management platform.",
      outcome: "Streamlined influencer campaigns resulting in 200% increase in campaign efficiency",
      technologies: ["Node.js", "MySQL", "Mocha", "Microservices", "AWS", "Redis", "Python"]
    },
    {
      name: "RST - Remote Service Tool",
      client: "Vantive Healthcare",
      description: "Medical device support platform for remote diagnosis and troubleshooting of medical devices in healthcare facilities.",
      outcome: "Reduced device downtime by 50% and improved remote diagnostic accuracy by 75%",
      technologies: ["Node.js", "PostgreSQL", "AWS IoT", "Jest", "TDD", "AWS"]
    },
    {
      name: "SmartbotHub",
      client: "Smartek21",
      description: "Chatbot-building platform with Natural Language Processing for creating conversational AI chatbots.",
      outcome: "Enabled 500+ businesses to deploy chatbots, reducing customer service costs by 60%",
      technologies: ["AngularJS", "Node.js", "MySQL", "AWS", "NLP"]
    },
    {
      name: "Daily Planner",
      client: "Internal Project",
      description: "A clean, intuitive daily task management application with date navigation and local storage persistence.",
      outcome: "Created a fully functional daily planner with offline capabilities and cross-date task management",
      technologies: ["HTML5", "JavaScript", "Tailwind CSS", "Local Storage"]
    },
    {
      name: "Zerodha Sandbox",
      client: "Internal Project",
      description: "Interactive trading API sandbox demonstrating Zerodha Kite Connect integration with comprehensive endpoints for orders, portfolio, quotes, and market data.",
      outcome: "Built comprehensive trading API demonstration with real-time dummy data simulation and interactive documentation",
      technologies: ["TypeScript", "HTML5", "CSS3", "REST API", "Trading APIs"]
    },
    {
      name: "AI Markdown Editor",
      client: "Internal Project",
      description: "AI-powered markdown editor with writing assistance tools powered by Google Gemini API for tone changes, grammar fixes, and content refinement.",
      outcome: "Created a comprehensive writing assistant that improves content quality with AI-powered editing tools",
      technologies: ["React.js", "Google Gemini API", "Marked.js", "Tailwind CSS", "AI/ML"]
    },
    {
      name: "FeedbackBox",
      client: "Developer Tool",
      description: "Embeddable feedback widget that connects to Google Forms for easy user feedback collection on any website.",
      outcome: "Created a lightweight, mobile-ready widget that simplifies feedback collection with zero backend requirements",
      technologies: ["JavaScript", "HTML5", "CSS3", "Google Forms API", "Responsive Design"]
    },
    {
      name: "NerdsPal.com",
      client: "Internal Project",
      description: "Platform connecting enthusiasts with like-minded individuals for meaningful conversations and collaborations.",
      outcome: "Built a community platform that brings together tech enthusiasts and facilitates meaningful connections",
      technologies: ["React.js", "Node.js", "AI/ML", "WebSocket", "MongoDB"]
    }
  ],

  services: [
    "Full-Lifecycle Product Engineering from Strategy to Deployment",
    "Science-Backed UI/UX Design focusing on User Psychology",
    "Cross-Platform Mobile & Web Development (React Native, React.js)",
    "Scalable Cloud Architecture and DevOps (AWS, Azure)",
    "Growth Marketing and Product Analytics Strategy"
  ]
};