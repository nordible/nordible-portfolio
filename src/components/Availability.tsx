import { Clock, Calendar, MessageCircle, Globe } from 'lucide-react';

export default function Availability() {
  return (
    <section className="relative py-16 bg-nordible-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-white text-center">
          {[
            { icon: Clock, label: 'Available Now', sub: 'Ready for Projects', color: 'text-blue-400' },
            { icon: MessageCircle, label: '24h Response', sub: 'Rapid Communication', color: 'text-blue-400' },
            { icon: Globe, label: 'Global Ops', sub: 'Worldwide Reach', color: 'text-blue-400' },
            { icon: Calendar, label: 'Consultation', sub: 'Start Your Journey', color: 'text-blue-400' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center group cursor-default">
              <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl mb-4 border border-white/10 group-hover:border-nordible-blue transition-all duration-500 transform group-hover:-translate-y-1">
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <h3 className="font-extrabold mb-1 uppercase tracking-[0.2em] text-[10px] font-heading">{item.label}</h3>
              <p className="text-[10px] font-bold text-blue-100/40 uppercase tracking-widest">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
