import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Zouk, Bachata, Salsa & more",
  "Motor coordination & Improvisation",
  "Enhanced connection & Creativity",
  "Feel the dance, then refine"
];

export default function Classes() {
  return (
    <section id="classes" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=600" alt="Dance 1" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
              <img src="https://images.unsplash.com/photo-1545959160-5f2105151528?q=80&w=600" alt="Dance 2" className="rounded-2xl h-48 w-full object-cover shadow-lg" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://images.unsplash.com/photo-1516475429146-362c1665a193?q=80&w=600" alt="Dance 3" className="rounded-2xl h-48 w-full object-cover shadow-lg" />
              <img src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=600" alt="Dance 4" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-soul-dark mb-6 title-shadow">Learn <span className="soul-logo-gradient">FusionDance</span></h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our classes teach movements applicable to Zouk, Bachata, Salsa, West Coast Swing, Samba, Blues, and more. 
              <span className="font-semibold soul-logo-gradient"> FusionDance</span> emphasizes connection, motor coordination, improvisation, and creativity. 
              Guided by <span className="font-semibold soul-logo-gradient">SoulZouk Methodology</span>, we optimize learning by helping your body feel the dance first, then refining technique for evolution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 group px-4 py-2 bg-white/40 backdrop-blur-md rounded-xl hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-soul-blue/10 cursor-default"
                >
                  <CheckCircle2 className="text-soul-pink w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 font-semibold">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <button className="w-full sm:w-auto px-10 py-5 bg-soul-dark text-white rounded-full font-bold shadow-xl hover:shadow-soul-blue/50 neon-hover hover:scale-105 transition-all text-lg uppercase tracking-wider">
              Join a Class
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
