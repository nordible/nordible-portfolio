import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Mail, Phone, Calendar } from 'lucide-react';
import { askAI } from '../services/aiService';
import { sendContactEmail, ContactFormData } from '../services/emailService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Nordible's AI assistant. Ask me anything about his experience, projects, or skills!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    description: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chatHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const { answer, canAnswer } = await askAI(input, chatHistory);

      const assistantMessage: Message = {
        role: 'assistant',
        content: answer,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);

      if (!canAnswer) {
        setTimeout(() => {
          setShowContactForm(true);
        }, 1000);
      }
    } catch {
      const errorMessage: Message = {
        role: 'assistant',
        content: "I'm having trouble right now. Please use the contact form below to reach Nordible directly.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setShowContactForm(true);
    }

    setIsLoading(false);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await sendContactEmail(contactForm as ContactFormData);
    
    if (success) {
      alert('Message sent! Nordible will get back to you within 24 hours.');
      setContactForm({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        description: ''
      });
      setShowContactForm(false);
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  const suggestedQuestions = [
    "What projects has Nordible worked on?",
    "What technologies does Nordible know?",
    "Tell me about Nordible's experience",
    "What services does Nordible offer?"
  ];

  return (
    <section id="consultation" className="relative py-24 bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 text-[10px] font-mono font-bold tracking-[0.3em] text-blue-400 uppercase bg-blue-900/30 rounded-full border border-blue-800">
            Secure_Channel_V3
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Consultation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Interface</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium">
            Initialize an encrypted session with our product AI or book a direct protocol.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="tech-card rounded-2xl p-6 mb-8 border-blue-500/20 bg-black/40 notch-tl">
          <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-4">
            <div className="flex space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            <div className="flex-1 text-center font-mono text-[10px] text-gray-500 uppercase tracking-[0.2em]">
              AI_ASSISTANT_SESSION_LOG
            </div>
          </div>

          <div className="h-96 overflow-y-auto mb-6 space-y-6 scrollbar-thin scrollbar-thumb-blue-500/20">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2.5 rounded-sm ${message.role === 'user' ? 'bg-purple-600' : 'bg-blue-600'} notch-tl shadow-lg`}>
                    {message.role === 'user' ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-white" />}
                  </div>
                  <div className={`p-4 rounded-sm font-mono text-sm ${message.role === 'user' ? 'bg-purple-900/40 text-purple-100 border border-purple-500/30' : 'bg-blue-900/40 text-blue-100 border border-blue-500/30'} backdrop-blur-md`}>
                    <div className="text-[10px] opacity-40 mb-1 uppercase tracking-tighter">
                      {message.role === 'user' ? 'Local_User' : 'Remote_AI'} // {message.timestamp.toLocaleTimeString()}
                    </div>
                    <p className="leading-relaxed">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-sm bg-blue-600 notch-tl">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="p-4 rounded-sm bg-blue-900/20 border border-blue-500/20">
                    <div className="flex space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex space-x-3">
            <div className="flex-1 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 font-mono text-sm font-bold">{' > '}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="TRANSMIT_COMMAND..."
                className="w-full pl-10 pr-4 py-4 rounded-sm bg-black/40 border border-blue-500/30 text-blue-100 placeholder-blue-900 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                disabled={isLoading}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 text-white rounded-sm transition-all shadow-lg tech-glow notch-tl flex items-center justify-center"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="mt-4 mb-8">
            <p className="text-sm text-blue-400 mb-2 font-mono uppercase tracking-widest text-[10px]">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInput(question)}
                  className="text-[10px] font-mono bg-blue-900/30 hover:bg-blue-800/50 text-blue-300 px-3 py-1 rounded-sm border border-blue-800 transition-colors uppercase tracking-tighter"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Contact Form */}
        {showContactForm && (
          <div className="tech-card rounded-2xl p-8 bg-black/40 border-blue-500/20 notch-tl">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">Initialize Direct_Protocol</h3>
              <p className="text-gray-400 text-sm font-mono uppercase tracking-widest text-[10px]">Manual override required for detailed manifest</p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="USER_NAME"
                  value={contactForm.fullName}
                  onChange={(e) => setContactForm({...contactForm, fullName: e.target.value})}
                  required
                  className="px-4 py-3 rounded-sm bg-black/40 border border-blue-500/30 text-blue-100 placeholder-blue-900 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="USER_ENDPOINT@EMAIL.COM"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                  className="px-4 py-3 rounded-sm bg-black/40 border border-blue-500/30 text-blue-100 placeholder-blue-900 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
              <textarea
                placeholder="ENTER_PROJECT_MANIFEST..."
                value={contactForm.description}
                onChange={(e) => setContactForm({...contactForm, description: e.target.value})}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-sm bg-black/40 border border-blue-500/30 text-blue-100 placeholder-blue-900 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-sm transition-all tech-glow notch-tl flex items-center justify-center space-x-3 uppercase tracking-[0.2em] text-xs"
              >
                <Mail className="h-4 w-4" />
                <span>Transmit_Manifest</span>
              </button>
            </form>

            <div className="mt-8 text-center border-t border-white/5 pt-8">
              <p className="text-gray-500 text-[10px] font-mono mb-6 uppercase tracking-[0.2em]">Redundant_Comms_Available</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href="mailto:nordiblesolutions@gmail.com" className="flex items-center justify-center space-x-2 bg-blue-900/20 hover:bg-blue-800/40 text-blue-300 px-4 py-3 rounded-sm border border-blue-800 transition-colors font-mono text-[10px] uppercase tracking-tighter">
                  <Mail className="h-3 w-3" />
                  <span>Email_Root</span>
                </a>
                <a href="tel:+919773207706" className="flex items-center justify-center space-x-2 bg-blue-900/20 hover:bg-blue-800/40 text-blue-300 px-4 py-3 rounded-sm border border-blue-800 transition-colors font-mono text-[10px] uppercase tracking-tighter">
                  <Phone className="h-3 w-3" />
                  <span>Voice_Link</span>
                </a>
                <a href="https://calendar.app.google/cindJUtEMZNPKBYeA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-sm transition-all shadow-lg notch-tl font-mono text-[10px] uppercase tracking-tighter">
                  <Calendar className="h-3 w-3" />
                  <span>Schedule_Sync</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}