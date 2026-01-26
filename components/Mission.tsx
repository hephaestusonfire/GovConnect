import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';

export const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-32 bg-premium-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-premium-gold/5 rounded-full blur-[150px]" />
      
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left: Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-premium-gold uppercase tracking-widest text-xs font-bold">
              Our Mission
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white mt-4 mb-8 leading-tight">
              Empowering Startups Through <span className="text-premium-gold italic">Government Connections</span>
            </h2>
            <p className="text-premium-silver/80 text-lg leading-relaxed mb-6">
              At GovConnect, we specialize in bridging the gap between corporates, startups, and the government in India. By leveraging our extensive network and industry expertise, we facilitate meaningful collaborations that drive innovation and growth.
            </p>
            <p className="text-premium-silver/80 text-lg leading-relaxed">
              Our commitment to excellence ensures that each partnership is tactical, strategic, and aligned with the evolving landscape of public and private sector needs. Through our tailored approach, we empower organizations to navigate regulatory frameworks and unlock new opportunities for development and expansion.
            </p>
          </motion.div>

          {/* Right: Key Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Target,
                title: "Strategic Focus",
                description: "Precision-driven approach to government relations"
              },
              {
                icon: Users,
                title: "Network Access",
                description: "Direct connections with key decision-makers"
              },
              {
                icon: Lightbulb,
                title: "Innovation First",
                description: "Unlocking funding for breakthrough ideas"
              },
              {
                icon: TrendingUp,
                title: "Growth Catalyst",
                description: "Accelerating business expansion"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-premium-black/40 backdrop-blur-sm border border-premium-white/10 p-6 group hover:border-premium-gold/30 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-premium-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-premium-gold/20 transition-colors">
                  <value.icon className="w-6 h-6 text-premium-gold" />
                </div>
                <h3 className="font-serif text-xl text-white mb-2 group-hover:text-premium-gold transition-colors">
                  {value.title}
                </h3>
                <p className="text-premium-silver/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-premium-black/60 backdrop-blur-sm border-y border-premium-white/10 py-12 px-8 md:px-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-2">
                Ready to Bridge the Gap?
              </h3>
              <p className="text-premium-silver/70 text-lg">
                Enhance your business prospects through effective government collaboration
              </p>
            </div>
            <a 
              href="#footer"
              className="bg-premium-gold text-premium-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-premium-gold/90 transition-all duration-300 whitespace-nowrap"
            >
              Discover Solutions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
