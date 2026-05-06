import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Heart, Sparkles, Quote, Brain, Waves, Music4, Route } from 'lucide-react';

const carouselImages = [
  'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1545118788-348bd6724a91?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1514525253344-93339031f0eb?auto=format&fit=crop&q=80&w=1200'
];

const tapeImages = [
  'https://images.unsplash.com/photo-1504609773096-104ae294e5e7?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1545118788-348bd6724a91?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1514525253344-93339031f0eb?auto=format&fit=crop&q=80&w=800',
];

const corePrinciples = [
  { icon: <Heart className="w-6 h-6" />, text: "Building genuine connection between partners" },
  { icon: <Brain className="w-6 h-6" />, text: "Enhancing motor coordination and body awareness" },
  { icon: <Waves className="w-6 h-6" />, text: "Learning to move naturally, not just count steps" },
  { icon: <Sparkles className="w-6 h-6" />, text: "Developing improvisation and creative expression" },
  { icon: <Music4 className="w-6 h-6" />, text: "Applying techniques to improve the rhythm you love most" },
  { icon: <Route className="w-6 h-6" />, text: "Understanding how movement and connection flow together" }
];

export default function Introduction() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-transparent" id="introduction">
      {/* Animated SVG Waves Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <svg
          className="absolute bottom-0 w-[200%] h-full animate-wave-slow"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M0,1000 C300,800 400,950 700,850 C1000,750 1200,900 1500,800 L1500,1000 L0,1000 Z"
            fill="url(#wave-gradient-1)"
            className="opacity-20"
          />
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00abf1" />
              <stop offset="100%" stopColor="#f4009a" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute bottom-10 w-[200%] h-full animate-wave"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M0,1000 C400,900 600,700 800,900 C1000,1100 1200,800 1500,950 L1500,1000 L0,1000 Z"
            fill="url(#wave-gradient-2)"
            className="opacity-15"
          />
          <defs>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff7c00" />
              <stop offset="100%" stopColor="#8a33ff" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute -bottom-20 w-[200%] h-full animate-wave-fast"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <path
            d="M0,1000 C200,950 500,850 800,950 C1100,1050 1300,900 1500,950 L1500,1000 L0,1000 Z"
            fill="url(#wave-gradient-3)"
            className="opacity-10"
          />
          <defs>
            <linearGradient id="wave-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8a33ff" />
              <stop offset="100%" stopColor="#00abf1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl md:text-7xl font-black text-soul-dark mb-6 leading-tight">
                <span className="soul-logo-gradient">FusionDance</span>
                <span className="block text-2xl md:text-3xl font-light text-gray-400 mt-2 italic">Learning Through Connection</span>
              </h2>
              <div className="h-1.5 w-32 bg-linear-to-r from-soul-orange to-soul-blue mb-8 rounded-full" />
              
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
                <p>
                  Our curriculum serves as a specialized movement laboratory, providing the "universal key" to partner dancing across rhythms like <span className="text-soul-blue font-bold">Zouk, Bachata, Salsa, and West Coast Swing.</span>
                </p>
                <p>
                  We focus on <span className="soul-logo-gradient font-bold underline decoration-soul-blue/30 underline-offset-8">authentic expression</span> — moving beyond counting steps to reach a state of intuitive, shared harmony.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {corePrinciples.map((principle, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1 
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="flex items-center gap-5 p-6 rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.1)] hover:border-soul-blue/30 transition-all cursor-default group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 shadow-inner flex items-center justify-center text-soul-blue group-hover:bg-soul-blue group-hover:text-white transition-all duration-500">
                    {principle.icon}
                  </div>
                  <span className="text-base font-bold text-gray-700 leading-tight group-hover:text-soul-dark transition-colors">{principle.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Modern Visual Carousel */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              {/* Decorative behind image */}
              <div className="absolute -inset-10 bg-linear-to-br from-soul-orange/10 via-soul-blue/10 to-soul-purple/10 blur-3xl animate-pulse" />
              
              <div className="relative h-full w-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(30,58,138,0.2)] bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={carouselImages[currentImageIndex]} 
                      alt="FusionDance Movement" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                
                <div className="absolute inset-0 bg-linear-to-t from-soul-dark/60 via-transparent to-transparent flex flex-col justify-end p-12 pointer-events-none">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-8 glassmorphism rounded-3xl"
                  >
                    <Quote className="w-8 h-8 text-soul-blue mb-4 opacity-50" />
                    <p className="text-soul-dark text-lg md:text-xl italic font-medium leading-relaxed">
                      "Everything you learn transforms into a dance that is unique to you and your partner."
                    </p>
                  </motion.div>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-6 glass-card rounded-3xl shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-soul-blue flex items-center justify-center text-white shadow-soul-blue/40 shadow-lg">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-soul-dark font-black text-lg">30+ Years</span>
                    <span className="block text-xs text-gray-500 uppercase tracking-widest font-bold">Experience</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Clean Typography Empowerment Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center space-y-12 relative py-12"
        >
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden opacity-5 blur-xl pointer-events-none">
             <img src="https://images.unsplash.com/photo-1514525253344-93339031f0eb?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover rotate-12 scale-150" alt="Dance background" />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl md:text-5xl font-light italic text-soul-dark leading-tight max-w-5xl mx-auto">
              “<span className="soul-logo-gradient font-black">FusionDance</span> empowers you to build a shared language that <span className="soul-logo-gradient italic">transcends</span> the dance floor.”
            </h3>
            <div className="h-1.5 w-40 bg-linear-to-r from-soul-orange via-soul-blue to-soul-pink mx-auto rounded-full opacity-30" />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
            <div className="max-w-sm">
              <h4 className="text-soul-blue font-black uppercase tracking-widest text-sm mb-4">Mastery</h4>
              <p className="text-xl text-gray-600 font-medium">Master the <span className="soul-logo-gradient font-bold underline decoration-soul-blue/20 underline-offset-8">SoulZouk Methodology</span> for health, safety and flow.</p>
            </div>
            <div className="w-px h-16 bg-gray-200 hidden md:block" />
            <div className="max-w-sm">
              <h4 className="text-soul-pink font-black uppercase tracking-widest text-sm mb-4">Evolution</h4>
              <p className="text-xl text-gray-600 font-medium">Prioritize <span className="soul-logo-gradient font-bold underline decoration-soul-pink/20 underline-offset-8">Optimized Learning</span> to accelerate your evolution.</p>
            </div>
          </div>

          {/* Horizontal Scrolling Tape */}
          <div className="pt-16 pb-8 relative overflow-hidden">
             <motion.div 
               animate={{ x: [0, -1920] }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="flex gap-8 px-4"
             >
                {[...tapeImages, ...tapeImages, ...tapeImages].map((img, i) => (
                  <div key={i} className="flex-shrink-0 w-80 md:w-[450px] h-64 rounded-[3rem] overflow-hidden shadow-2xl relative group">
                    <img 
                      src={img} 
                      alt={`Community movement ${i}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-soul-dark/40 to-transparent" />
                  </div>
                ))}
             </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative splashes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-soul-pink/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-soul-blue/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
    </section>
  );
}
