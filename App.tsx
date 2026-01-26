import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { Services } from './components/Services';
import { Mission } from './components/Mission';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Marquee } from './components/Marquee';

const App: React.FC = () => {
  return (
    <div className="bg-premium-black min-h-screen text-premium-white font-sans selection:bg-premium-gold selection:text-premium-black">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Mission />
        <Services />
        <TrustSection />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;