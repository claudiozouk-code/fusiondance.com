import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Search, X, Globe, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const languages = [
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'zh-TW', label: 'Cantonese', flag: 'ZH' },
    { code: 'fr', label: 'Français', flag: 'FR' },
    { code: 'de', label: 'Deutsch', flag: 'DE' },
    { code: 'ru', label: 'Русский', flag: 'RU' },
    { code: 'pt', label: 'Português', flag: 'PT' },
    { code: 'es', label: 'Español', flag: 'ES' },
  ];

  const handleLanguageChange = (langCode: string, label: string) => {
    setCurrentLang(label);
    setIsLangOpen(false);
    
    if (langCode === 'en') {
      // Clear translation cookies to revert to English
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
    } else {
      // Set cookie for Google Translate
      document.cookie = `googtrans=/en/${langCode}; path=/`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
    }
    
    // Refresh to apply changes if the combo doesn't respond instantly
    // Most reliable method for custom selectors
    window.location.reload();
  };

  useEffect(() => {
    // Try to get current language from cookie on mount
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const googTrans = getCookie('googtrans');
    if (googTrans) {
      const langCode = googTrans.split('/').pop();
      const matched = languages.find(l => l.code === langCode);
      if (matched) setCurrentLang(matched.flag);
    }
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 glassmorphism"
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-soul-orange via-soul-blue to-soul-purple z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <div className="max-w-7xl mx-auto px-4 h-22 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center hover:scale-105 transition-transform">
            <img 
              src="artifact_image_0.png" 
              alt="FusionDance Logo" 
              className="h-14 w-auto drop-shadow-sm" 
            />
          </a>

          <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-soul-dark/70">
            {['About', 'Methodology', 'Events', 'Gallery'].map((item) => (
              <a 
                key={item}
                href={item === 'Methodology' ? '#technique' : `#${item.toLowerCase()}`} 
                className="hover:text-soul-blue hover:drop-shadow-[0_0_8px_rgba(0,171,241,0.5)] transition-all relative group py-2 uppercase tracking-widest text-[10px]"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-soul-orange to-soul-blue transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative group/lang">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              onMouseEnter={() => setIsLangOpen(true)}
              className="flex items-center gap-2 p-2 rounded-full hover:bg-soul-blue/10 text-soul-dark transition-all"
            >
              <Globe className="w-5 h-5 text-soul-blue" />
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">{currentLang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  onMouseLeave={() => setIsLangOpen(false)}
                  className="absolute right-0 mt-2 w-48 bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden py-3 z-50 p-2 space-y-1"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code, lang.flag)}
                      className="w-full flex items-center justify-between px-4 py-2.5 rounded-2xl text-xs font-bold transition-all hover:bg-soul-blue/10 text-soul-dark/70 hover:text-soul-blue"
                    >
                      <span>{lang.label}</span>
                      <span className="text-[9px] opacity-60 font-black">{lang.flag}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative flex items-center">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 240, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  type="text"
                  placeholder="Search FusionDance..."
                  className="bg-white/50 backdrop-blur-md border border-gray-200 rounded-full py-2 px-6 pr-10 text-sm focus:outline-hidden focus:ring-2 focus:ring-soul-blue/30 transition-all font-medium"
                  autoFocus
                />
              )}
            </AnimatePresence>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 rounded-full hover:bg-soul-blue/10 text-soul-dark transition-colors relative z-10"
            >
              {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </button>
          </div>

          <a href="#contact" className="hidden sm:block px-6 py-2.5 text-soul-dark rounded-full font-bold shadow-lg hover:shadow-soul-blue/40 hover:scale-105 transition-all text-xs uppercase tracking-widest animated-border font-sans">
            Join Class
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
