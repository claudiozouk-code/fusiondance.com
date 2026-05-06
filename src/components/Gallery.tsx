import { motion } from 'motion/react';
import { Camera, Users, Heart, Sparkles } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=1200',
    title: 'Connection in Motion',
    category: 'Workshop'
  },
  {
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200',
    title: 'Group Harmony',
    category: 'Class'
  },
  {
    url: 'https://images.unsplash.com/photo-1514525253344-93339031f0eb?auto=format&fit=crop&q=80&w=1200',
    title: 'Creative Flow',
    category: 'Social'
  },
  {
    url: 'https://images.unsplash.com/photo-1504609773096-104ae294e5e7?auto=format&fit=crop&q=80&w=1200',
    title: 'Methodology Practice',
    category: 'Intensive'
  },
  {
    url: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=1200',
    title: 'Global Community',
    category: 'Festival'
  },
  {
    url: 'https://images.unsplash.com/photo-1545118788-348bd6724a91?auto=format&fit=crop&q=80&w=1200',
    title: 'The Art of Lead',
    category: 'Workshop'
  }
];

export default function Gallery() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soul-blue/10 text-soul-blue font-bold text-xs uppercase tracking-widest mb-4">
            <Users className="w-4 h-4" />
            <span>Community in Motion</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-soul-dark mb-6">
            Shared Moments, <span className="soul-logo-gradient">Infinite Connections</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto italic">
            "We don't just dance together; we evolve together."
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer break-inside-avoid rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-soul-dark/80 via-soul-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-soul-blue text-xs font-black uppercase tracking-[0.2em] mb-2">{image.category}</span>
                <h3 className="text-white text-2xl font-bold italic mb-4">{image.title}</h3>
                <div className="flex gap-4">
                   <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Heart className="w-4 h-4" />
                   </div>
                   <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Sparkles className="w-4 h-4" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-4 border-2 border-soul-dark text-soul-dark rounded-full font-black hover:bg-soul-dark hover:text-white transition-all group flex items-center gap-3 mx-auto">
            <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View Full Experience
          </button>
        </motion.div>
      </div>
    </section>
  );
}
