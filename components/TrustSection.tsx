import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Scale, ShieldCheck, ArrowUpRight } from 'lucide-react';

const bentoViewport = { once: true, margin: '-80px 0px', amount: 0.2 };

const BentoCard = ({ title, subtitle, icon: Icon, className, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={bentoViewport}
    transition={{ delay, type: 'tween', duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={`bg-premium-charcoal/40 backdrop-blur-sm border border-premium-white/5 p-8 md:p-12 relative group overflow-hidden hover:border-premium-gold/30 transition-all duration-300 ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/0 to-premium-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div className="flex justify-between items-start mb-8">
        <div className="p-3 bg-premium-white/5 rounded-full text-premium-gold">
          <Icon size={24} />
        </div>
        <ArrowUpRight className="text-premium-white/20 group-hover:text-premium-gold transition-colors" />
      </div>
      
      <div>
        <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">{title}</h3>
        <p className="text-premium-silver/70 font-light leading-relaxed max-w-sm">{subtitle}</p>
      </div>
    </div>
  </motion.div>
);

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-32 bg-premium-black relative">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px 0px' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="text-premium-gold uppercase tracking-widest text-xs font-bold"
          >
            Why Partner With Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px 0px' }}
            transition={{ type: 'tween', delay: 0.08, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-serif text-5xl md:text-7xl text-white mt-4"
          >
            Precision. Integrity. <br /> <span className="text-premium-silver/30">Impact.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(300px,auto)]">
          {/* Main Large Card */}
          <BentoCard 
            title="Financial & Risk Analysis"
            subtitle="We integrate complex financial modeling with environmental impact data to provide a holistic view of project viability."
            icon={TrendingUp}
            className="md:col-span-2 md:row-span-1"
            delay={0.1}
          />
          
          {/* Tall Card */}
          <BentoCard 
            title="Policy Advocacy"
            subtitle="Representing your interests at the highest levels of government to shape policy that fosters sustainable growth."
            icon={Scale}
            className="md:col-span-1 md:row-span-2"
            delay={0.2}
          />

          {/* Standard Card */}
          <BentoCard 
            title="Regulatory Precision"
            subtitle="Navigating the labyrinth of Indian bureaucracy with precision, ensuring 100% compliance."
            icon={ShieldCheck}
            className="md:col-span-2 md:row-span-1"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};