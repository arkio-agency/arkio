import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui';
import { ProcessStep } from '../../types';

const steps: ProcessStep[] = [
  {
    day: "Jours 1-7",
    title: "Conception & Développement",
    items: ["Atelier de cadrage", "Design UI/UX", "Développement Next.js", "Intégrations CMS/API"]
  },
  {
    day: "Jours 8-10",
    title: "Tests & Optimisations",
    items: ["Tests de performance", "Mobile responsive check", "Optimisation SEO technique", "Configuration Analytics"]
  },
  {
    day: "Jours 11-14",
    title: "Lancement & Publicité",
    items: ["Mise en ligne", "Lancement campagnes Google/Meta", "Setup pixels de tracking", "Premiers visiteurs"]
  },
  {
    day: "Jour 15+",
    title: "Résultats & Scaling",
    items: ["Rapport de performance", "Analyse du ROI", "Formation gestion site", "Proposition suivi long terme"]
  }
];

export const Process = () => {
  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="De zéro à vos premiers clients" 
          subtitle="Un process millimétré pour tenir la promesse des 14 jours."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-arkio-cyan via-arkio-violet to-arkio-pink opacity-30"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1.5 w-4 h-4 rounded-full bg-arkio-cyan shadow-[0_0_10px_rgba(0,245,255,0.8)] z-20 mt-6"></div>

                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0 md:text-right md:pr-12">
                   <div className={`md:text-${idx % 2 === 0 ? 'left' : 'right'} ${idx % 2 === 0 ? 'md:pl-12' : ''}`}>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-arkio-cyan text-sm font-bold mb-3">
                      {step.day}
                    </span>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <ul className={`space-y-2 text-gray-400 ${idx % 2 !== 0 && 'md:items-end flex flex-col'}`}>
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-arkio-violet"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                   </div>
                </div>
                
                {/* Spacer for alternate side */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
