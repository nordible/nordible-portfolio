import React from 'react';
import { Clock, Calendar, MessageCircle, Globe } from 'lucide-react';

export default function Availability() {
  return (
    <section className="relative py-16 bg-gray-900 overflow-hidden border-y border-purple-500/20">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-white text-center">
          {[
            { icon: Clock, label: 'Available Now', sub: 'Ready for Launch', color: 'text-green-400' },
            { icon: MessageCircle, label: '24h Response', sub: 'Protocol Alpha', color: 'text-blue-400' },
            { icon: Globe, label: 'Global Ops', sub: 'Worldwide Sync', color: 'text-purple-400' },
            { icon: Calendar, label: 'Consultation', sub: 'Initialize Discovery', color: 'text-orange-400' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center group cursor-default">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl mb-4 border border-white/10 group-hover:border-purple-500/50 transition-colors duration-500">
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <h3 className="font-bold mb-1 uppercase tracking-widest text-xs font-mono">{item.label}</h3>
              <p className="text-[10px] opacity-50 font-mono uppercase tracking-tighter">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}