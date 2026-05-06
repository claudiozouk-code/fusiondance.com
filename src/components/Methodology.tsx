import { motion } from 'motion/react';
import { Share2, Zap, Heart, Music } from 'lucide-react';

export default function Methodology() {
  const Pillars = [
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Connection",
      description: "Deep partner synchronization through subtle body cues."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Technique",
      description: "Optimized motor coordination and natural movement flow."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Creativity",
      description: "Freedom of expression and artistic improvisation."
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Rhythm",
      description: "Feeling the soul of the music before moving."
    }
  ];

  return (
    <section id="technique" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-bold text-soul-dark mb-6 title-shadow"
          >
            SoulZouk Methodology <span className="soul-logo-gradient">Approach</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed"
          >
            SoulZouk is a methodology that puts feeling before thinking. It emphasizes empathetic connection between partners and music. Movements are natural, healthy, and accessible to all bodies. Improvisation is encouraged to create a unique dance. Beyond steps, it’s about expression and creativity. SoulZouk transforms technique into emotion and freedom on the dance floor.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="soul-card p-10 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-soul-orange/10 to-soul-purple/20 blur-2xl group-hover:scale-150 transition-transform duration-700 -z-10" />
              <div className="w-20 h-20 rounded-3xl bg-linear-to-br from-soul-orange/10 to-soul-purple/10 flex items-center justify-center text-soul-orange group-hover:text-soul-blue mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-soul-blue/20">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-soul-dark mb-4 group-hover:soul-logo-gradient transition-all">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{pillar.description}</p>
              <div className="mt-8 flex items-center gap-2 text-soul-blue font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0">
                Learn more <Share2 className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
