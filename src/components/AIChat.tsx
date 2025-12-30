import React, { useState, useRef } from 'react';
import { Send, Bot, User, Mail, Phone, Calendar, MapPin } from 'lucide-react';
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

      console.log('AI Response:', { answer, canAnswer }); // Debug log

      const assistantMessage: Message = {
        role: 'assistant',
        content: answer,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);

      if (!canAnswer) {
        console.log('Showing contact form because canAnswer is false');
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
    <section id="consultation" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Book Your Free 30-Minute Consulting Call
          </h2>
          <p className="text-xl text-blue-100">
            Chat with my AI assistant first, or book a direct consultation call to discuss your project
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="h-96 overflow-y-auto mb-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`p-2 rounded-full ${message.role === 'user' ? 'bg-purple-600' : 'bg-blue-600'}`}>
                    {message.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div className={`p-3 rounded-lg ${message.role === 'user' ? 'bg-purple-600' : 'bg-blue-600/80'}`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded-full bg-blue-600">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="p-3 rounded-lg bg-blue-600/80">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Nordible's experience, projects, or skills..."
              className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 rounded-lg transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="mt-4">
              <p className="text-sm text-blue-100 mb-2">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(question)}
                    className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Contact Form */}
        {showContactForm && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Let's Connect Directly</h3>
              <p className="text-blue-100">For detailed discussions about your project</p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={contactForm.fullName}
                  onChange={(e) => setContactForm({...contactForm, fullName: e.target.value})}
                  required
                  className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                  className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <textarea
                placeholder="Tell me about your project..."
                value={contactForm.description}
                onChange={(e) => setContactForm({...contactForm, description: e.target.value})}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-blue-100 text-sm mb-4">Or reach out directly:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <a href="mailto:nordiblesolutions@gmail.com" className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
                <a href="tel:+919773207706" className="flex items-center justify-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-3 rounded-lg transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>Call</span>
                </a>
                <a href="https://wa.me/919773207706" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg transition-colors">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a href="https://calendar.app.google/cindJUtEMZNPKBYeA" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-3 rounded-lg transition-colors">
                  <Calendar className="h-4 w-4" />
                  <span>Book Call</span>
                </a>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-sm flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-blue-50 text-left">002, Simply Move In, 17 Maruthi Layout, AECS Layout, Marathalli, Bangalore 560037</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}