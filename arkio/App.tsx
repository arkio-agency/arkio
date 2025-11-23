import React, { useState, useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { ValueProp } from './components/sections/ValueProp';
import { Process } from './components/sections/Process';
import { Offer } from './components/sections/Offer';
import { Info } from './components/sections/Info';
import { Button } from './components/ui';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-arkio-dark/80 backdrop-blur-md border-b border-white/5 py-3' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <img 
             src="/logo.jpeg" 
             alt="Arkio - Sites web + lancement pub en 14 jours" 
             className="h-9 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-2 filter group-hover:drop-shadow-[0_0_12px_rgba(0,245,255,0.5)] group-hover:brightness-110" 
             loading="eager"
           />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('process')} className="text-gray-300 hover:text-white font-medium transition-colors">Process</button>
          <button onClick={() => scrollTo('pricing')} className="text-gray-300 hover:text-white font-medium transition-colors">Offre</button>
          <Button variant="primary" onClick={() => scrollTo('pricing')}>
            Lancer mon projet
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-arkio-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            <button onClick={() => scrollTo('process')} className="text-left text-lg font-medium text-gray-300 py-2">Process</button>
            <button onClick={() => scrollTo('pricing')} className="text-left text-lg font-medium text-gray-300 py-2">Offre</button>
            <Button fullWidth onClick={() => scrollTo('pricing')}>
              Lancer mon projet
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="bg-arkio-dark text-white min-h-screen selection:bg-arkio-cyan/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Process />
        <Offer />
        <Info />
      </main>
    </div>
  );
}