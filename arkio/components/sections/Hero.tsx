import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import { Button, Badge } from '../ui';

export const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProcess = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-arkio-violet/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-arkio-cyan/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-arkio-pink/20 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="cyan">
              <Zap className="w-3 h-3" />
              Livraison garantie en 14 jours
            </Badge>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight mb-8"
          >
            Votre site + vos premiers <br />
            <span className="text-gradient">clients en 14 jours</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed"
          >
            Sites web sur-mesure avec lancement publicitaire inclus. <br className="hidden md:block" />
            Ne payez pas juste pour du code, validez votre ROI dès le premier mois.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button variant="secondary" onClick={scrollToPricing}>
              Réserver un appel gratuit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" onClick={scrollToProcess}>
              Voir comment ça marche
              <Play className="w-4 h-4 fill-current" />
            </Button>
          </motion.div>

          {/* Floating Elements / Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
            className="mt-20 w-full max-w-5xl relative perspective-1000"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-arkio-violet/20 border border-white/10 bg-arkio-dark/50 backdrop-blur-xl group">
               {/* Browser Window UI */}
               <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                 <div className="ml-4 flex-1 max-w-md h-6 rounded bg-white/5 flex items-center px-3 text-xs text-gray-500">
                    arkio.agency
                 </div>
               </div>
               
               {/* Content Mockup */}
               <div className="aspect-[16/9] w-full bg-gradient-to-br from-gray-900 to-black p-8 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                 
                 <div className="relative z-10 text-center">
                    <div className="w-32 h-8 bg-arkio-cyan/20 rounded-full mx-auto mb-4 backdrop-blur-sm animate-pulse"></div>
                    <div className="w-96 h-12 bg-white/10 rounded-lg mx-auto mb-4 backdrop-blur-sm"></div>
                    <div className="w-64 h-4 bg-white/5 rounded mx-auto backdrop-blur-sm"></div>
                    
                    {/* Simulated Stats Popups */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -right-24 -top-12 glass-card p-4 rounded-xl border-l-4 border-l-green-500"
                    >
                      <div className="text-xs text-gray-400">Trafic</div>
                      <div className="text-xl font-bold text-white">+1,420</div>
                    </motion.div>

                     <motion.div 
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute -left-24 top-12 glass-card p-4 rounded-xl border-l-4 border-l-arkio-violet"
                    >
                      <div className="text-xs text-gray-400">Leads</div>
                      <div className="text-xl font-bold text-white">+23</div>
                    </motion.div>
                 </div>
               </div>
            </div>
            {/* Glow under the card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-arkio-cyan via-arkio-violet to-arkio-pink opacity-20 blur-2xl -z-10 rounded-full"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
