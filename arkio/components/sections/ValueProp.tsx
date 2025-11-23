import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, Monitor, Rocket, Layers, BarChart3, TrendingUp, Clock, Frown, Code2 } from 'lucide-react';
import { Card, SectionHeader } from '../ui';

const Problem = () => {
  const painPoints = [
    {
      icon: <Monitor className="w-6 h-6 text-orange-400" />,
      title: "Wix/Wordpress limités",
      desc: "Des templates rigides qui ne reflètent pas la qualité de votre marque."
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: "Délais interminables",
      desc: "Les agences classiques prennent 3 mois. Votre business n'a pas ce temps."
    },
    {
      icon: <Frown className="w-6 h-6 text-orange-400" />,
      title: "DIY = Frustration",
      desc: "Passer vos week-ends à débugger du CSS au lieu de vendre."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-red-500" />,
      title: "Le syndrome du site fantôme",
      desc: "Une fois le site en ligne... personne ne vient. 0 trafic = 0 ROI."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Le problème classique" 
          subtitle="Vous avez un business qui tourne, mais votre présence en ligne est un frein." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-red-500/10 hover:border-red-500/30 bg-red-500/5">
                <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <XCircle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const pillars = [
    {
      icon: <Code2 className="w-8 h-8 text-arkio-cyan" />,
      title: "Dev Custom & Rapide",
      desc: "Développement assisté par IA. Site sur-mesure en code (Next.js), optimisé pour la performance, livré en 7 jours.",
      color: "cyan"
    },
    {
      icon: <Layers className="w-8 h-8 text-arkio-violet" />,
      title: "Fonctionnalités Avancées",
      desc: "Pas de limitations No-Code. E-commerce, réservations, API, 3D... Si vous pouvez l'imaginer, on peut le coder.",
      color: "violet"
    },
    {
      icon: <Rocket className="w-8 h-8 text-arkio-pink" />,
      title: "Lancement Pub Inclus",
      desc: "300€ de budget pub offert. Google & Meta Ads pilotées par nos experts pour amener vos premiers clients dès J+1.",
      color: "pink"
    }
  ];

  return (
    <section className="py-24 relative bg-white/5">
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader 
          title="L'approche Arkio" 
          subtitle="Site Custom + Lancement Traffic = Résultats Immédiats." 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-arkio-${item.color} to-purple-600 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500 blur-lg`}></div>
              <Card className="h-full relative bg-arkio-dark border-white/5 group-hover:bg-arkio-dark/80">
                <div className={`w-16 h-16 rounded-2xl bg-arkio-${item.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ValueProp = () => {
  return (
    <>
      <Problem />
      <Solution />
    </>
  );
};
