import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Zap, ShieldCheck, BarChart, GraduationCap } from 'lucide-react';
import { Button, Card, SectionHeader, Badge } from '../ui';
import { ComparisonRow } from '../../types';

const comparisonData: ComparisonRow[] = [
  { criteria: "Délai de livraison", classic: "8-12 semaines", freelance: "2-4 semaines", arkio: "14 jours", isArkioBest: true },
  { criteria: "Budget", classic: "5k€ - 15k€", freelance: "500€ - 2k€", arkio: "2000€ tout compris", isArkioBest: true },
  { criteria: "Technologie", classic: "Custom / Wordpress", freelance: "Templates (Wix/Webflow)", arkio: "Code Custom (Next.js)", isArkioBest: true },
  { criteria: "Pub Ads Incluse", classic: "Non (Option +1k€)", freelance: "Non", arkio: "✅ 300€ inclus", isArkioBest: true },
  { criteria: "Support lancement", classic: "Limité", freelance: "Aucun", arkio: "✅ Complet & Piloté", isArkioBest: true },
];

const Comparison = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Pourquoi Arkio ?" subtitle="Comparons ce qui est comparable." />
        
        <div className="overflow-x-auto">
          <div className="min-w-[800px] glass-card rounded-2xl p-8">
            <div className="grid grid-cols-4 gap-4 border-b border-white/10 pb-6 mb-6 font-display font-bold text-lg">
              <div className="text-gray-400">Critère</div>
              <div className="text-center text-gray-400">Agences Classiques</div>
              <div className="text-center text-gray-400">Freelances No-Code</div>
              <div className="text-center text-arkio-cyan text-xl">Arkio</div>
            </div>
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-4 gap-4 py-6 border-b border-white/5 items-center">
                <div className="font-semibold">{row.criteria}</div>
                <div className="text-center text-gray-400">{row.classic}</div>
                <div className="text-center text-gray-400">{row.freelance}</div>
                <div className={`text-center font-bold ${row.isArkioBest ? 'text-arkio-cyan' : ''}`}>
                  {row.arkio}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Package = () => {
  const features = [
    { icon: <Zap className="text-arkio-cyan"/>, text: "Site web développé sur-mesure (Code)" },
    { icon: <Monitor className="text-arkio-cyan"/>, text: "Design Premium & Mobile First" },
    { icon: <BarChart className="text-arkio-violet"/>, text: "300€ de budget Pub (Google/FB) inclus" },
    { icon: <ShieldCheck className="text-arkio-violet"/>, text: "Setup Analytics & Tracking avancé" },
    { icon: <GraduationCap className="text-arkio-pink"/>, text: "Formation gestion autonome" },
    { icon: <Clock className="text-arkio-pink"/>, text: "Livraison garantie en 14 jours" },
  ];
  
  // Icon placeholder helper
  function Monitor(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>}
  function Clock(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}

  return (
    <section id="pricing" className="py-24 relative">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-arkio-violet/20 blur-[100px] -z-10 rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            {/* Gradient Border Wrapper */}
            <div className="absolute -inset-1 bg-gradient-to-r from-arkio-cyan via-arkio-violet to-arkio-pink rounded-3xl blur opacity-40"></div>
            
            <div className="relative bg-[#0F1629] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-3xl font-display font-bold mb-2">Package Lancement</h3>
                  <p className="text-gray-400">Tout ce qu'il faut pour démarrer fort.</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 line-through mb-1">Valeur réelle : 4500€</div>
                  <div className="text-5xl font-bold text-white mb-2">2000€</div>
                  <Badge variant="warning">
                     ⚡ Seulement 3 slots dispos ce mois
                  </Badge>
                </div>
              </div>

              <div className="h-px w-full bg-white/10 mb-8"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-1 bg-white/5 rounded-full">
                      {React.cloneElement(feat.icon as React.ReactElement<{ className?: string }>, {
                         className: `w-4 h-4 ${feat.icon.props.className || ''}`
                      })}
                    </div>
                    <span className="text-lg text-gray-200">{feat.text}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button 
                    fullWidth 
                    variant="secondary" 
                    className="text-lg py-4 shadow-[0_0_30px_rgba(124,58,237,0.3)]"
                    onClick={() => window.open('mailto:contact@arkio.com?subject=Réservation appel', '_blank')}
                >
                  Réserver mon créneau
                </Button>
                <p className="mt-4 text-sm text-gray-500">
                  Option : Gestion pub continue après lancement (sur devis)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Offer = () => {
  return (
    <>
      <Comparison />
      <Package />
    </>
  );
};