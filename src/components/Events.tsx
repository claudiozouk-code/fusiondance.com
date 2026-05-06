import { motion } from 'motion/react';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Events() {
  const subEvents = [
    {
      title: "Saturday SoulZouk Classes",
      date: "Saturdays, 7:30–9:30 pm",
      location: "20/F, Concord Commercial Bldg, 157 King’s Road, Fortress Hill",
      description: "Deep dive into SoulZouk technique and empathetic connection. Accessible to all levels and bodies.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800",
      color: "#ff4757",
      label: "Training"
    },
    {
      title: "Sunday Fusion Party",
      date: "Sundays, 7:00–11:00 pm",
      location: "Santa Monica Cantina, 9 Shelley St, Central",
      description: "Social dancing with a Taste Class (7:00-7:45pm). Experience the true heartbeat of Zouk in the heart of Hong Kong.",
      image: "https://images.unsplash.com/photo-1514525253344-93339031f0eb?auto=format&fit=crop&q=80&w=800",
      color: "#00abf1",
      label: "Social"
    }
  ];

  return (
    <section id="events" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-soul-dark mb-6 title-shadow tracking-tighter">
              Weekly <span className="soul-logo-gradient">Rhythms</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-xl italic font-medium">
              "Let the feeling guide your steps. No schedules needed, just show up and flow."
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col gap-32">
          {subEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
            >
              <div className="w-full md:w-1/2 relative group">
                {/* Ink Splash Effect Background */}
                <div 
                  className="absolute inset-0 opacity-20 scale-125 blur-3xl animate-pulse mix-blend-multiply transition-all duration-1000 group-hover:scale-150"
                  style={{ backgroundColor: event.color }}
                />
                
                <div className="relative z-10 aspect-square md:aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/50 rotate-shadow">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Ink Splash SVG Overlay */}
                <div className="absolute -top-10 -right-10 w-40 h-40 pointer-events-none opacity-40 animate-spin-slow">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill={event.color} d="M38.1,-65.4C50.4,-58.3,62.2,-49.6,71.1,-38.4C80,-27.2,85.9,-13.6,85.4,-0.3C84.9,13.1,77.9,26.1,68.9,37.3C59.9,48.5,48.9,57.9,36.5,64.2C24.1,70.5,10.2,73.7,-3.1,79C-16.4,84.4,-29.2,91.8,-41.8,89.5C-54.4,87.2,-66.8,75.1,-75.6,61.4C-84.4,47.7,-89.6,32.3,-91.4,16.7C-93.2,1.1,-91.6,-14.7,-85.4,-28.9C-79.2,-43.1,-68.4,-55.7,-55.8,-63.1C-43.2,-70.5,-28.8,-72.7,-14.8,-76.3C-0.8,-79.9,13.2,-84.9,25.8,-82.1C38.4,-79.3,49.6,-68.7,38.1,-65.4Z" transform="translate(100 100)" />
                  </svg>
                </div>
              </div>

              <div className="w-full md:w-1/2 font-sans">
                <div 
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 shadow-lg"
                  style={{ backgroundColor: `${event.color}20`, color: event.color }}
                >
                  {event.label}
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-soul-dark mb-6 leading-tight font-sans">
                  {event.title}
                </h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-white shadow-md border border-gray-100 mt-1">
                      <Calendar className="w-5 h-5 text-soul-blue" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-soul-dark/40 uppercase tracking-widest mb-1">When</p>
                      <p className="text-xl font-bold text-soul-dark">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-white shadow-md border border-gray-100 mt-1">
                      <MapPin className="w-5 h-5 text-soul-pink" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-soul-dark/40 uppercase tracking-widest mb-1">Where</p>
                      <p className="text-xl font-bold text-soul-dark leading-relaxed">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-gray-500 font-medium italic leading-relaxed border-l-4 pl-6" style={{ borderColor: `${event.color}40` }}>
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Highlight Footer (Ink Splash Style) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[4rem] bg-soul-dark text-white relative overflow-hidden text-center"
        >
          {/* Decorative Ink Splashes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-soul-blue opacity-20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-soul-pink opacity-20 blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-soul-blue mx-auto mb-8 animate-pulse" />
            <h4 className="text-3xl md:text-5xl font-black mb-8 italic">"In the SoulZouk community, steps are just the beginning. Connection is the destination."</h4>
            <div className="h-1 w-24 bg-soul-pink mx-auto mb-8 rounded-full" />
            <p className="text-xl text-white/60 font-medium font-sans">See you on the dance floor.</p>
          </div>
        </motion.div>
      </div>

      <style>
        {`
          .rotate-shadow {
            transition: all 0.5s ease;
          }
          .group:hover .rotate-shadow {
            box-shadow: 20px 20px 60px rgba(0,0,0,0.1), -20px -20px 60px rgba(255,255,255,1);
            transform: translateY(-5px);
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .group:hover .animate-spin-slow {
            animation-duration: 5s;
          }
          .animate-spin-slow {
            animation: spin-slow 15s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
