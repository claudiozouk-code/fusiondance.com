import { motion } from 'motion/react';
import { Instagram, Youtube, Facebook, Send, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white/40 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/40">
          <div className="p-12 md:w-1/2 bg-soul-dark/90 backdrop-blur-sm text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6 italic">Let's Connect</h2>
              <p className="text-slate-300 mb-8">Have questions about methodologies, classes, or booking a workshop? Send us a message.</p>
              
              <div className="space-y-6">
                <a href="mailto:2indacehk@gmaill.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-soul-blue transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>2indacehk@gmaill.com</span>
                </a>
                <div className="pt-4">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-soul-blue/30 transition-all group/qr">
                    <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 mb-4">Join our WhatsApp Community</p>
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 bg-white p-2 rounded-xl flex-shrink-0">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://chat.whatsapp.com/your-group-link" alt="WhatsApp QR Code" className="w-full h-full object-contain" />
                      </div>
                      <div className="space-y-1">
                        <span className="block font-bold text-white">Scan to Join</span>
                        <span className="block text-sm text-slate-400 leading-tight">Instant access to updates and community chat.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 mb-4">Follow the Movement</p>
              <div className="flex gap-4">
                {[Instagram, Youtube, Facebook, Send].map((Icon, i) => (
                  <motion.a 
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="#" 
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-soul-dark transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              <p className="mt-8 text-sm italic font-script text-slate-400 text-lg">“Live the dance.”</p>
            </div>
          </div>

          <div className="p-12 md:w-1/2">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-soul-blue focus:ring-0 transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-soul-blue focus:ring-0 transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-soul-blue focus:ring-0 transition-all resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full py-5 bg-linear-to-r from-soul-pink to-soul-orange text-white rounded-2xl font-bold shadow-xl shadow-soul-pink/20 hover:opacity-90 transition-opacity uppercase tracking-widest text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
