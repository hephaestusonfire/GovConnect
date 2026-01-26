import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "100%" },
    visible: { 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden bg-premium-black">
      
      {/* Background Ambience */}
      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-premium-gold/5 blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-premium-charcoal/30 blur-[100px]" />

      <motion.div 
        className="w-full max-w-[90rem] mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="overflow-hidden mb-2">
          <motion.p variants={itemVariants} className="text-premium-gold uppercase tracking-[0.2em] text-sm md:text-base font-medium mb-4">
            Consultancy &bull; Compliance &bull; Strategy
          </motion.p>
        </div>

        <div className="overflow-hidden">
           <motion.h1
             variants={itemVariants}
             className="font-serif leading-[0.85] text-premium-white font-medium tracking-tight min-w-0"
             style={{ fontSize: 'clamp(2.25rem, 9vw, 10rem)' }}
           >
             GOVCONNECT
           </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-start justify-between mt-12 md:mt-24 gap-12 border-t border-premium-white/10 pt-8">
          <motion.div style={{ y: y2 }} className="max-w-xl">
             <h2 className="text-2xl md:text-4xl text-premium-silver font-light leading-tight">
               Bridging <span className="text-premium-gold font-serif italic">Governance</span>, Compliance, and Sustainability.
             </h2>
          </motion.div>

          <motion.div style={{ y: y1 }} className="max-w-sm">
            <p className="text-premium-silver/60 text-sm md:text-base leading-relaxed mb-8">
              We facilitate seamless collaboration between Corporates, Startups, and the Indian Government. Accelerate success with strategic alliances and expert regulatory guidance.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=918004567000&text=Hi%20Welcome%20at%20GovConnect.%20GovConnect%20%E2%80%93%20Bridging%20Governance%2C%20Compliance%2C%20and%20Sustainability.%20"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 sm:gap-4 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full border border-premium-white/20 flex items-center justify-center group-hover:bg-premium-gold group-hover:border-premium-gold transition-all duration-300">
                <ArrowDownRight className="text-white w-5 h-5 group-hover:text-premium-black" />
              </div>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-white group-hover:text-premium-gold transition-colors">Get Started</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};