import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-premium-black text-white pt-32 pb-12 border-t border-premium-white/5">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">
        
        {/* Massive Footer CTA */}
        <div className="mb-20 sm:mb-24">
          <h2 className="font-serif text-[12vw] sm:text-[10vw] leading-[0.8] text-premium-white/90">
            Let's Shape <br />
            <span className="text-premium-gold italic">The Future.</span>
          </h2>
          <div className="mt-12">
             <a href="mailto:YES@AllCompliances.com" className="inline-block border border-premium-white/20 rounded-full px-8 py-4 text-xl hover:bg-premium-white hover:text-premium-black transition-all duration-300">
               YES@AllCompliances.com
             </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-premium-white/10 pt-12">
          <div className="md:col-span-2">
             <h3 className="text-2xl font-serif font-bold mb-4">GovConnect</h3>
             <p className="text-premium-silver/80 text-sm mb-2 italic">
               An initiative of All Compliances Solutions
             </p>
             <p className="max-w-md text-premium-silver/60 leading-relaxed mb-6">
               Strategic consultancy bridging the gap between corporate ambition and government regulation. We build the frameworks for sustainable success in India.
             </p>
             <div className="space-y-2">
               <p className="text-premium-silver/50 text-sm font-mono">
                 GST: 09ACKPV7887L1ZA
               </p>
             </div>
          </div>

          <div>
            <h4 className="text-premium-gold text-xs uppercase tracking-widest mb-6">Locations</h4>
            <ul className="space-y-4 text-premium-silver/80">
              <li>Delhi (HQ)</li>
              <li>Bangalore</li>
              <li>Lucknow</li>
              <li>Gwalior</li>
            </ul>
          </div>

          <div>
             <h4 className="text-premium-gold text-xs uppercase tracking-widest mb-6">Connect</h4>
             <ul className="space-y-4 text-premium-silver/80">
               <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
               <li><a href="#trust" className="hover:text-white transition-colors">Why Us</a></li>
               <li><a href="#testimonials" className="hover:text-white transition-colors">Clients</a></li>
               <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
               <li><a href="mailto:YES@AllCompliances.com" className="hover:text-white transition-colors">Email us</a></li>
             </ul>
          </div>
        </div>

        <div className="mt-20 flex justify-between items-end text-xs text-premium-white/20 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} GovConnect</span>
          <span>Designed for Impact</span>
        </div>
      </div>
    </footer>
  );
};