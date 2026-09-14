import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Mail, Phone, Calendar } from 'lucide-react';
import { askAI } from '../services/aiService';
import { sendContactEmail, ContactFormData } from '../services/emailService';
import { contactConfig } from '../config/contact';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your Nordible guide. Ask me anything about our technology solutions, enterprise platforms, or how we can help your business grow!",
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
        content: "I'm having a brief connection issue. Please use the contact form below or email us at mail@nordible.co",
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
      alert('Message received! We will get back to you within 24 hours.');
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
      alert('Failed to send message. Please try again or email mail@nordible.co');
    }
  };

  const suggestedQuestions = [
    "What core products has Nordible built?",
    "Tell me about Nordible Professional Email",
    "What is your technology solutions process?",
    "How do you handle enterprise scaling?"
  ];

  return (
    <section id="ai-assistant" className="relative py-24 bg-nordible-bg dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-medium max-w-xl mx-auto">
            Get instant answers about our services, products, and tech solutions.
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl shadow-blue-500/10 border border-nordible-border dark:border-gray-700 overflow-hidden flex flex-col h-[600px]">
          <div className="px-8 py-6 bg-nordible-dark text-white flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center p-1.5 border border-white/15 shadow-sm">
                <img src="/images/logos/nordible-icon.png" alt="Nordible AI" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg font-heading leading-tight text-white">Nordible AI</h3>
                <div className="flex items-center text-[10px] text-blue-300 font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  Active Now
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-nordible-bg/30 dark:bg-gray-900/30 scrollbar-thin">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-3 max-w-[85%] ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 ${message.role === 'user' ? 'bg-nordible-blue text-white rounded-xl shadow-sm' : 'bg-blue-50 dark:bg-gray-700 rounded-xl p-1 shadow-sm'}`}>
                    {message.role === 'user' ? <User className="h-4 w-4" /> : <img src="/images/logos/nordible-icon.png" className="w-full h-full object-contain" alt="Nordible AI" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm font-medium shadow-sm leading-relaxed ${message.role === 'user' ? 'bg-nordible-blue text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200'}`}>
                    <p>{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-nordible-blue rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-nordible-blue rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1 h-1 bg-nordible-blue rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 border-t border-nordible-border dark:border-gray-700">
            <div className="flex space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Nordible AI..."
                className="flex-1 px-6 py-4 rounded-xl bg-nordible-bg dark:bg-gray-900 border border-nordible-border dark:border-gray-700 text-nordible-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-nordible-blue/50 font-semibold transition-all"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="w-14 h-14 bg-nordible-blue hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-xl shadow-lg shadow-blue-500/20 flex items-center justify-center transition-all active:scale-95"
              >
                <Send className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => setInput(question)}
                className="text-xs font-bold bg-white dark:bg-gray-800 hover:bg-nordible-bg dark:hover:bg-gray-700 text-nordible-dark dark:text-gray-300 px-5 py-3 rounded-full border border-nordible-border dark:border-gray-700 shadow-sm transition-all active:scale-95"
              >
                {question}
              </button>
            ))}
          </div>
        )}

        {/* Contact Form Overlay */}
        {showContactForm && (
          <div className="mt-12 card-premium p-10 bg-nordible-dark text-white border-0 shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10"></div>
            
            <div className="text-center mb-10 relative z-10">
              <h3 className="text-2xl font-extrabold mb-2 font-heading">Start a Human Conversation</h3>
              <p className="text-blue-200 text-sm font-bold uppercase tracking-widest">Your inquiry requires specialized tech expertise</p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={contactForm.fullName}
                  onChange={(e) => setContactForm({...contactForm, fullName: e.target.value})}
                  required
                  className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 font-semibold"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                  className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 font-semibold"
                />
              </div>
              <textarea
                placeholder="How can we help you?"
                value={contactForm.description}
                onChange={(e) => setContactForm({...contactForm, description: e.target.value})}
                required
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 font-semibold resize-none"
              />
              <button
                type="submit"
                className="w-full bg-white text-nordible-dark font-extrabold py-5 px-8 rounded-xl shadow-xl transition-all hover:bg-blue-50 active:scale-95 flex items-center justify-center space-x-3 uppercase tracking-widest text-sm"
              >
                <Mail className="h-5 w-5" />
                <span>Submit Inquiry</span>
              </button>
            </form>

            <div className="mt-8 text-center border-t border-white/5 pt-8">
              <p className="text-gray-400 text-[10px] font-bold mb-6 uppercase tracking-widest">Direct Channels</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a href={contactConfig.email.mailToGeneral} className="flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-xl border border-white/10 transition-all font-bold text-xs uppercase tracking-widest">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
                <a href={contactConfig.phone.telHref} className="flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-xl border border-white/10 transition-all font-bold text-xs uppercase tracking-widest">
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </a>
                <a href={contactConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-white text-nordible-dark px-4 py-3 rounded-xl transition-all shadow-lg font-bold text-xs uppercase tracking-widest">
                  <Calendar className="h-4 w-4" />
                  <span>Book Meet</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
