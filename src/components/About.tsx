import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1547153760-18fc21fca248?q=80&w=1000&auto=format&fit=crop" 
                alt="Xina SoulZouk" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Background artistic element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-linear-to-br from-soul-pink to-soul-orange rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-linear-to-br from-soul-blue to-soul-pink rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2"
          >
            <h2 className="font-script text-6xl text-soul-dark mb-4 title-shadow">Meet Xina SoulZouk</h2>
            <div className="h-1.5 w-24 bg-linear-to-r from-soul-orange via-soul-blue to-soul-purple mb-8 rounded-full shadow-soul-blue/20 shadow-lg" />
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              “Xina SoulZouk is a teacher and creator of SoulZouk Methodology. With 30 years of experience in dance and teaching, he combines technique, musicality, and expression to form complete dancers.”
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 hover:border-soul-blue/30 hover:shadow-xl hover:shadow-soul-blue/10 transition-all cursor-default group">
                <h3 className="font-bold text-soul-dark mb-2 group-hover:text-soul-blue transition-colors">Teaching Philosophy</h3>
                <p className="text-sm text-gray-600">Focusing on the essence of connection and the natural flow of the body.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 hover:border-soul-pink/30 hover:shadow-xl hover:shadow-soul-pink/10 transition-all cursor-default group">
                <h3 className="font-bold text-soul-dark mb-2 group-hover:text-soul-pink transition-colors">Artistic Vision</h3>
                <p className="text-sm text-gray-600">Transforming technical movements into emotional stories through fusion.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Meet DJ Laura Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 mt-32">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1574680077505-ef74a5fe28d1?q=80&w=1000&auto=format&fit=crop" 
                alt="DJ Laura FusionDance" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Background artistic element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-linear-to-bl from-soul-purple to-soul-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-300" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-linear-to-bl from-soul-orange to-soul-pink rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-1/2"
          >
            <h2 className="font-script text-6xl text-soul-dark mb-4 title-shadow">Meet DJ Laura</h2>
            <div className="h-1.5 w-24 bg-linear-to-r from-soul-purple via-soul-pink to-soul-orange mb-8 rounded-full shadow-soul-pink/20 shadow-lg" />
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              “DJ Laura is the heartbeat of FusionDance. Specializing in Zouk and Urban Fusion beats, she crafts immersive soundscapes that guide dancers into deep states of flow and connection.”
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 hover:border-soul-purple/30 hover:shadow-xl hover:shadow-soul-purple/10 transition-all cursor-default group">
                <h3 className="font-bold text-soul-dark mb-2 group-hover:text-soul-purple transition-colors">Musical Selection</h3>
                <p className="text-sm text-gray-600">Curating tracks that challenge conventions and inspire movement evolution.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/20 hover:border-soul-orange/30 hover:shadow-xl hover:shadow-soul-orange/10 transition-all cursor-default group">
                <h3 className="font-bold text-soul-dark mb-2 group-hover:text-soul-orange transition-colors">Atmosphere Tech</h3>
                <p className="text-sm text-gray-600">Mastering the energy of the floor to create unforgettable dance experiences.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
