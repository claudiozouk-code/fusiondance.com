import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0.2]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* YouTube Background Video with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y, opacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw]"
        >
          <iframe
            src="https://www.youtube.com/embed/IXLOPXBGcLc?autoplay=1&mute=1&controls=0&loop=1&playlist=IXLOPXBGcLc&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0"
            className="w-full h-full border-none"
            allow="autoplay; encrypted-media"
          />
        </motion.div>
        
        {/* 2026 Dopamine Design Vibrant Tint Overlay */}
        <div className="absolute inset-0 bg-linear-to-tr from-soul-purple/40 via-soul-pink/20 to-soul-orange/30 mix-blend-color-burn" />
        <div className="absolute inset-0 bg-linear-to-b from-white/10 via-white/40 to-white backdrop-blur-md" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 relative floating"
        >
          <img 
            src="artifact_image_0.png" 
            alt="FusionDance Logo" 
            className="w-full max-w-2xl mx-auto drop-shadow-[0_20px_80px_rgba(30,58,138,0.2)] relative z-10"
          />
          <div className="absolute inset-0 bg-linear-to-r from-soul-orange/20 via-soul-blue/20 to-soul-purple/20 opacity-40 blur-[100px] animate-pulse -z-10" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-5xl font-light text-soul-dark max-w-4xl mx-auto mb-10 leading-relaxed italic title-shadow"
        >
          “The art of fusion between <span className="font-bold soul-logo-gradient">technique</span>, <span className="font-bold soul-logo-gradient">emotion</span>, and <span className="font-bold soul-logo-gradient">freedom</span>”
          <br /><span className="text-xl md:text-2xl font-medium text-gray-500 mt-4 block">— by Xina SoulZouk</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="#events" className="px-10 py-5 bg-linear-to-r from-soul-orange via-soul-pink to-soul-purple text-white rounded-full font-bold shadow-2xl hover:shadow-soul-orange/50 neon-hover transition-all flex items-center group text-lg">
            Classes
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#gallery" className="px-10 py-5 bg-white/50 backdrop-blur-md border border-gray-200 text-gray-700 rounded-full font-bold shadow-xl hover:shadow-soul-blue/30 hover:border-soul-blue/30 transition-all text-lg">
            Events
          </a>
          <a href="#contact" className="px-10 py-5 bg-soul-dark text-white rounded-full font-bold shadow-2xl hover:shadow-soul-blue/40 neon-hover transition-all text-lg">
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
