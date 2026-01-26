import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

const SYNTAXIUM_URL = 'https://syntaxium.tech/';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [initiativesOpen, setInitiativesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setInitiativesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 transition-all duration-500 text-white ${
          isScrolled 
            ? 'bg-premium-black/70 backdrop-blur-xl border-b border-premium-white/10 shadow-2xl shadow-premium-black/50' 
            : 'bg-transparent'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        }}
      >
        <div className="flex items-center gap-4">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="font-serif text-xl md:text-2xl font-bold tracking-tight hover:text-premium-gold transition-colors">
            GovConnect
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="hover:text-premium-gold transition-colors duration-300">Home</a>
          <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-premium-gold transition-colors duration-300">Services</a>
          <a href="#trust" onClick={(e) => handleNavClick(e, '#trust')} className="hover:text-premium-gold transition-colors duration-300">Why Us</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')} className="hover:text-premium-gold transition-colors duration-300">Clients</a>
          <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="hover:text-premium-gold transition-colors duration-300">Blog</a>
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setInitiativesOpen(!initiativesOpen)}
              onBlur={() => setTimeout(() => setInitiativesOpen(false), 150)}
              className="flex items-center gap-1 hover:text-premium-gold transition-colors duration-300"
            >
              Initiatives
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${initiativesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {initiativesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 py-2 min-w-[200px] bg-premium-black/95 backdrop-blur-xl border border-premium-white/10 rounded shadow-xl"
                >
                  <a
                    href={SYNTAXIUM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setInitiativesOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-premium-silver/90 hover:text-premium-gold hover:bg-premium-white/5 transition-colors"
                  >
                    <span>Syntaxium</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                  <p className="px-4 py-1 text-xs text-premium-silver/50 border-t border-premium-white/5 mt-2 pt-2">
                    Software Development · ERP, Web & AI
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#footer" onClick={(e) => handleNavClick(e, '#footer')} className="hover:text-premium-gold transition-colors duration-300">Contact</a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          <Menu />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-premium-black flex flex-col items-center justify-center space-y-8"
          >
             <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X />
            </button>
            <a onClick={(e) => handleNavClick(e, '#')} href="#" className="font-serif text-4xl text-white hover:text-premium-gold transition-colors">Home</a>
            <a onClick={(e) => handleNavClick(e, '#services')} href="#services" className="font-serif text-4xl text-white hover:text-premium-gold transition-colors">Services</a>
            <a onClick={(e) => handleNavClick(e, '#trust')} href="#trust" className="font-serif text-4xl text-white hover:text-premium-gold transition-colors">Why Us</a>
            <a onClick={(e) => handleNavClick(e, '#testimonials')} href="#testimonials" className="font-serif text-4xl text-white hover:text-premium-gold transition-colors">Clients</a>
            <a onClick={(e) => handleNavClick(e, '#blog')} href="#blog" className="font-serif text-4xl text-white hover:text-premium-gold transition-colors">Blog</a>
            <a href={SYNTAXIUM_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="font-serif text-4xl text-white hover:text-premium-gold transition-colors flex items-center gap-2">
              Initiatives · Syntaxium
              <ExternalLink className="w-6 h-6" />
            </a>
            <a onClick={(e) => handleNavClick(e, '#footer')} href="#footer" className="font-serif text-4xl text-white hover:text-premium-gold transition-colors">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};