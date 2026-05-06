import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Sparkles, Activity, Cpu, Heart, Zap, Waves, Target } from 'lucide-react';

const sections = [
  {
    id: 'universal',
    title: 'A Universal Language of Movement',
    icon: <Sparkles className="w-5 h-5" />,
    content: (
      <span>
        <strong className="soul-logo-gradient font-black">FusionDance</strong> is more than a single style—it is a specialized movement laboratory designed to enhance your performance across a spectrum of rhythms, including Zouk, Bachata, Salsa, West Coast Swing, Samba, and Blues. Our curriculum provides the "universal key" to partner dancing, allowing you to apply advanced techniques to the genres you love most.
      </span>
    ),
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=1200',
    color: '#ff7c00'
  },
  {
    id: 'principles',
    title: 'Our Core Principles',
    icon: <Target className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <p className="text-soul-dark font-medium leading-relaxed">
          We move beyond the traditional "step-counting" approach to focus on the biological and intuitive foundations of dance:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Deep Connection', desc: 'The intricate physics of connecting bodies.', icon: <Heart className="w-5 h-5" />, color: 'soul-pink' },
            { label: 'Motor Coordination', desc: 'Ensuring grace, efficiency, and balance.', icon: <Activity className="w-5 h-5" />, color: 'soul-blue' },
            { label: 'Creative Autonomy', desc: 'Moving to authentic improvisation.', icon: <Zap className="w-5 h-5" />, color: 'soul-orange' },
            { label: 'Kinetic Awareness', desc: 'Developing mechanical understanding.', icon: <Waves className="w-5 h-5" />, color: 'soul-purple' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="flex flex-col gap-3 p-5 rounded-[2rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-xl transition-all group/subitem"
            >
              <div className={`w-10 h-10 rounded-xl bg-${item.color}/10 flex items-center justify-center text-${item.color} group-hover/subitem:bg-${item.color} group-hover/subitem:text-white transition-all duration-500`}>
                {item.icon}
              </div>
              <div>
                <span className="font-bold text-soul-dark block text-base group-hover/subitem:text-soul-blue transition-colors">{item.label}</span>
                <span className="text-sm text-gray-600 leading-tight block mt-1">{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="relative h-32 rounded-3xl overflow-hidden mt-6 shadow-2xl group/img">
          <img 
            src="https://images.unsplash.com/photo-1514525253344-93339031f0eb?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover grayscale opacity-40 group-hover/img:grayscale-0 group-hover/img:scale-110 transition-all duration-1000" 
            alt="Core principles background"
          />
          <div className="absolute inset-0 bg-linear-to-br from-soul-blue/30 via-transparent to-soul-purple/30 mix-blend-overlay" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-soul-dark/80 font-black text-xl uppercase tracking-[0.2em] italic opacity-50">Identity & Freedom</span>
          </div>
        </div>
      </div>
    ),
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200',
    color: '#00abf1'
  },
  {
    id: 'tab-methodology',
    title: 'The Soulzouk Methodology',
    icon: <Cpu className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <p className="text-soul-dark font-medium leading-relaxed">
          Our teaching is rooted in a principle-based approach designed to accelerate your evolution. We prioritize the "why" behind the "what":
        </p>
        <div className="grid grid-cols-1 gap-4">
          {[
            { 
              step: '01', 
              label: 'Adaptation', 
              desc: 'Training your body to internalize the "feel" and flow of the dance.', 
              color: 'from-soul-orange to-soul-pink' 
            },
            { 
              step: '02', 
              label: 'Integration', 
              desc: 'Developing the physical coordination to move naturally with a partner.', 
              color: 'from-soul-blue to-soul-purple' 
            },
            { 
              step: '03', 
              label: 'Refinement', 
              desc: 'Polishing technical precision once the foundational connection is established.', 
              color: 'from-soul-purple to-soul-pink' 
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ x: 10 }}
              className="flex gap-5 items-center p-4 rounded-2xl bg-white/50 border border-white/40 shadow-sm hover:shadow-md transition-all group/item"
            >
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center text-white font-black text-lg italic shadow-lg group-hover/item:scale-110 transition-transform`}>
                {item.step}
              </div>
              <div>
                <span className="font-bold text-soul-dark block text-base group-hover/item:text-soul-blue transition-colors">{item.label}</span>
                <span className="text-sm text-gray-600 leading-tight">{item.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="relative h-24 rounded-2xl overflow-hidden mt-4 shadow-inner">
          <img 
            src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800" 
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" 
            alt="Methodology background"
          />
          <div className="absolute inset-0 bg-linear-to-r from-soul-dark/40 to-transparent flex items-center px-6">
            <span className="text-white font-bold italic tracking-wider">Optimized Learning Path</span>
          </div>
        </div>
      </div>
    ),
    image: 'https://images.unsplash.com/photo-1545118788-348bd6724a91?auto=format&fit=crop&q=80&w=1200',
    color: '#8a33ff'
  },
  {
    id: 'reimagined',
    title: 'Your Dance, Reimagined',
    icon: <Sparkles className="w-5 h-5" />,
    content: (
      <span>
        At <strong className="soul-logo-gradient font-black">FusionDance</strong>, we don’t just teach you how to follow a beat; we empower you to build a unique, shared language with your partner. Whether you are looking to improve your social dancing or master the specific art of <strong className="soul-logo-gradient font-black">FusionDance</strong>, our classes provide the tools to transform your movement from the ground up.
      </span>
    ),
    image: 'https://images.unsplash.com/photo-1514525253344-93339031f0eb?auto=format&fit=crop&q=80&w=1200',
    color: '#f4009a'
  }
];

export default function ExperienceAccordion() {
  const [activeTab, setActiveTab] = useState(sections[0].id);

  return (
    <section className="py-24 relative overflow-hidden" id="experience">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-soul-dark mb-4 drop-shadow-sm">
            Master the Art of Connection: <span className="soul-logo-gradient">The FusionDance Experience</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto italic">
            "Learn to move. Learn to feel. Learn to Fusion."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Accordion */}
          <div className="space-y-4">
            {sections.map((section) => (
              <div 
                key={section.id}
                className={`soul-card overflow-hidden transition-all duration-500 ${activeTab === section.id ? 'scale-[1.02]' : 'opacity-80 scale-100 hover:opacity-100'}`}
                style={activeTab === section.id ? { borderColor: `${section.color}50` } : {}}
              >
                <button
                  onClick={() => setActiveTab(section.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="p-3 rounded-xl transition-all duration-500"
                      style={{ 
                        backgroundColor: `${section.color}15`,
                        color: section.color 
                      }}
                    >
                      {section.icon}
                    </div>
                    <span className="text-xl font-bold text-soul-dark">{section.title}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${activeTab === section.id ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {activeTab === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg border-t border-gray-50 pt-6">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right: Dynamic Image */}
          <div className="relative h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-br from-soul-orange/5 via-soul-blue/5 to-soul-purple/5 rounded-[4rem] blur-3xl -z-10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full p-4"
              >
                <div className="w-full h-full rounded-[3.5rem] overflow-hidden shadow-2xl relative group bg-gray-100">
                  <img 
                    src={sections.find(s => s.id === activeTab)?.image} 
                    alt="Experience Visual" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-soul-dark/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-12 left-12 right-12">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="p-6 glass-card rounded-3xl"
                    >
                      <blockquote className="text-white italic text-lg leading-relaxed block">
                        "Most dance classes teach you what to do. We teach you how to be."
                      </blockquote>
                      <span className="text-white/70 block mt-3 font-bold uppercase tracking-widest text-xs">— Xina SoulZouk</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
