import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Star, Mail, Github, Twitter, Linkedin } from 'lucide-react';
import { SectionHeader, Card, Button } from '../ui';
import { Testimonial, FAQItem } from '../../types';

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Coach Sportif",
    content: "Grâce à Arkio, j'ai eu 23 leads qualifiés dès la première semaine. Mon site est magnifique et les campagnes pub ont cartonné !",
    result: "+23 Leads en 7 jours",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Thomas L.",
    role: "Fondateur E-commerce",
    content: "En 2 semaines, j'avais un site e-commerce complet et mes premières ventes. Impossible avec une agence classique.",
    result: "ROI positif à J+15",
    image: "https://picsum.photos/seed/thomas/100/100"
  },
  {
    name: "Marie D.",
    role: "Consultante RH",
    content: "Je redoutais la partie technique, mais Arkio a tout géré. Le site + la pub = 5 nouveaux clients le premier mois.",
    result: "5 Clients Closés",
    image: "https://picsum.photos/seed/marie/100/100"
  }
];

const faqs: FAQItem[] = [
  { question: "Comment pouvez-vous livrer en 14 jours ?", answer: "Nous utilisons des outils d'IA avancés pour générer la structure du code et le contenu initial, ce qui accélère le développement de 70%. Nos développeurs seniors affinent ensuite le tout pour un résultat sur-mesure." },
  { question: "Qu'est-ce qui est inclus dans les 300€ de pub ?", answer: "Ce budget est directement investi dans les plateformes publicitaires (Google Ads ou Facebook Ads). Nous ne prenons pas de commission dessus. Cela permet de générer environ 1000-2000 vues qualifiées pour lancer la machine." },
  { question: "Puis-je modifier mon site après ?", answer: "Oui, absolument. Nous développons le site de manière modulaire. Nous vous formons pendant 1h à la fin du projet pour que vous puissiez changer textes et images en autonomie." },
  { question: "Mon business est complexe, est-ce compatible ?", answer: "Oui. Nous ne faisons pas que des sites vitrines simples. Nous pouvons intégrer des systèmes de réservation, des catalogues complexes ou des animations spécifiques." }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <SectionHeader title="Ils ont lancé avec Arkio" subtitle="Résultats réels, clients réels." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-yellow-500 fill-current" />)}
                  </div>
                  <p className="text-gray-300 italic mb-6">"{t.content}"</p>
                </div>
                <div>
                   <div className="inline-block bg-green-500/10 text-green-400 text-xs font-bold px-2 py-1 rounded mb-4">
                      🚀 {t.result}
                   </div>
                   <div className="flex items-center gap-3">
                     <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full border border-white/20" />
                     <div>
                       <div className="font-bold text-white">{t.name}</div>
                       <div className="text-sm text-gray-500">{t.role}</div>
                     </div>
                   </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeader title="Questions Fréquentes" />
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="w-5 h-5 text-arkio-cyan" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTAFinal = () => {
    return (
        <section className="py-32 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-arkio-violet/20 opacity-50"></div>
             <div className="container mx-auto px-4 relative z-10 text-center">
                 <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                     Prêt à décoller ? 🚀
                 </h2>
                 <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                     Ne perdez plus de temps à créer un site qui ne convertit pas. 
                     Laissez Arkio gérer la tech et le trafic.
                 </p>
                 <Button variant="secondary" className="px-12 py-5 text-xl mb-4" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
                     Réserver mon appel gratuit
                 </Button>
                 <div className="text-sm text-arkio-pink animate-pulse mt-4">
                     ⚡ Plus que 3 places pour le batch de ce mois
                 </div>
             </div>
        </section>
    )
}

const Footer = () => {
  return (
    <footer className="bg-[#05080f] border-t border-white/5 py-12 text-sm text-gray-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <img 
               src="/logo.jpeg" 
               alt="Arkio - Sites web + lancement pub en 14 jours" 
               className="h-8 md:h-9 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-2 filter group-hover:drop-shadow-[0_0_10px_rgba(0,245,255,0.4)] group-hover:brightness-110" 
             />
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">À propos</a>
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="mailto:contact@arkio.com" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex gap-4">
            <Twitter className="w-5 h-5 cursor-pointer hover:text-white" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-white" />
            <Github className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-white/5">
          &copy; {new Date().getFullYear()} Arkio Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export const Info = () => {
  return (
    <>
      <Testimonials />
      <FAQ />
      <CTAFinal />
      <Footer />
    </>
  );
};