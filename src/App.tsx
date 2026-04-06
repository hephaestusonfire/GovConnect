import { ReactLenis } from 'lenis/react';
import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef, useState } from 'react';
import { cn } from './lib/utils';
import {
  ArrowRight,
  BarChart3,
  Building2,
  ShieldCheck,
  Users,
  Megaphone,
  Target,
  NotebookPen,
  Calculator,
  FileText,
  ExternalLink,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=918004567000&text=Hi%20Welcome%20at%20GovConnect.%20Where%20Power%20Meets%20Your%20Potential.';

export default function App() {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-brand-black text-brand-white selection:bg-brand-accent selection:text-black overflow-hidden">
        <Navbar />
        <main>
          <Hero />
          <LogoMarquee />
          <TheEdge />
          <Services />
          <PowerCorridorsShowcase />
          <SyntaxiumHighlight />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ReactLenis>
  );
}

function Navbar() {
  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 mix-blend-difference"
    >
      <a href="#top" className="text-xl font-bold tracking-tight">
        GovConnect.
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium uppercase tracking-widest hover:text-brand-accent transition-colors"
      >
        Initiate Contact
      </a>
    </motion.nav>
  );
}

function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden bg-brand-black"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Base Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/gallery-1.jpeg"
          alt="High-level government interaction"
          className="w-full h-full object-cover opacity-30 grayscale blur-sm scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Flashlight Reveal Layer */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
        }}
      >
        <img
          src="/images/gallery-1.jpeg"
          alt=""
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12 bg-brand-accent" />
          <span className="text-brand-accent uppercase tracking-widest text-sm font-medium shadow-black drop-shadow-md">
            Power Corridors PR · Government Relations · Funding Consulting
          </span>
          <div className="h-[1px] w-12 bg-brand-accent" />
        </motion.div>

        <div className="overflow-hidden mb-8 py-2">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] text-balance text-white drop-shadow-2xl"
          >
            Where Power <br className="hidden md:block" />
            <span className="text-neutral-400">Meets Your Potential.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg"
        >
          Building bridges to India’s corridors of power through strategic PR, reputation-building coverage,
          government relations, and scheme- and investor-ready financial narratives.
        </motion.p>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pointer-events-auto group relative inline-flex items-center gap-4 px-8 py-4 bg-brand-white text-brand-black rounded-full overflow-hidden"
        >
          <span className="relative z-10 font-medium tracking-wide">Request a Consultation</span>
          <span className="relative z-10 group-hover:translate-x-1 transition-transform">
            <ArrowRight size={18} />
          </span>
          <div className="absolute inset-0 bg-brand-accent transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
        </motion.a>
      </div>
    </section>
  );
}

function LogoMarquee() {
  const logos = ['Almondz', 'Crown Cork', 'Dixon', 'Sansera', 'Skill India Digital', 'Bvokal', 'Recykal', 'Navriti', 'Oman ARC'];

  return (
    <section className="py-24 border-y border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden">
      <div className="px-6 md:px-12 mb-12">
        <p className="text-sm text-neutral-500 uppercase tracking-widest text-center">Trusted by Industry Leaders</p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center justify-center px-12 md:px-24">
              <span className="text-2xl md:text-4xl font-bold text-neutral-700 uppercase tracking-tighter">{logo}</span>
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-black to-transparent z-10" />
      </div>
    </section>
  );
}

function TheEdge() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Direct Lines',
      desc: 'Deep networks across leadership and bureaucracy to accelerate access and outcomes.',
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Analytics-Backed',
      desc: 'Campaigns driven by data with clear tracking and reporting.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'End-to-End Execution',
      desc: 'From ideation and briefs to coordination, interviews, and amplification.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Ethical & Compliant',
      desc: 'Transparent, compliant operations aligned with regulations and best practices.',
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">The GovConnect Edge.</h2>
          <p className="text-xl text-neutral-400 max-w-2xl font-light">
            We don’t just open doors; we build the bridges. Precise strategy, discreet execution, measurable impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-medium mb-4">{feature.title}</h3>
              <p className="text-neutral-400 font-light leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      image: '/images/PR & Media Coverage.png',
      title: 'PR & Media Coverage',
      desc: 'Craft and distribute narratives across high-impact platforms that shape governance and business conversation.',
      points: [
        'Strategic Media Outreach (Print · TV · Digital)',
        'Crisis Management & Reputation Building',
        'Event & Thought Leadership',
        'Government Relations PR',
        'Podcast & Broadcast Visibility',
        'Book & Publishing PR',
        'Press Materials That Convert',
      ],
      icon: Megaphone,
    },
    {
      image: '/images/Brand Building in Power Corridors.png',
      title: 'Brand Building in Power Corridors',
      desc: 'Elevate your brand into leadership and policy circles with credibility, consistency, and a long-view strategy.',
      points: [
        'Personalized Branding Workshops',
        'Digital Brand Amplification (SEO, Social, Influencers)',
        'Networking Mastery (Introductions)',
        'Sustainability & CSR Branding',
      ],
      icon: NotebookPen,
    },
    {
      image: '/images/Funding Consulting (Startups).png',
      title: 'Funding Consulting (Startups)',
      desc: 'Turn your story into funder-ready materials—aligned to government schemes, grants, angels, and VCs.',
      points: [
        'Startup Funding Readiness (Financials & Projections)',
        'Investor & Scheme Documentation',
        'Financial Model Review (Unit Economics, Cash Flow, Risks)',
        'Alignment with Government Programs',
      ],
      icon: Calculator,
    },
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-white text-brand-black rounded-t-[3rem] md:rounded-t-[5rem] relative z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">
            Building Bridges to the <br /> Corridors of Power.
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light">
            End-to-end execution designed for maximum leverage and enduring influence.
          </p>
        </motion.div>

        <div className="space-y-24">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={cn('flex flex-col gap-12 items-center', idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse')}
            >
              <div className="flex-1 w-full">
                <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-neutral-100 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/50 to-neutral-100/10 z-0" />
                  <div className="relative z-10 w-full h-full transform group-hover:scale-110 transition-transform duration-700">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <h3 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight">{service.title}</h3>
                <p className="text-xl text-neutral-600 font-light leading-relaxed mb-8">{service.desc}</p>
                <ul className="space-y-4">
                  {service.points.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-neutral-800 font-medium text-lg">
                      <div className="w-2 h-2 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PowerCorridorsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['10%', '-20%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['5%', '-15%']);

  const images = [
    '/images/gallery-1.jpeg',
    '/images/gallery-2.jpeg',
    '/images/gallery-3.jpeg',
    '/images/gallery-4.jpeg',
    '/images/gallery-5.jpeg',
    '/images/gallery-6.jpeg',
    '/images/gallery-7.jpeg',
    '/images/gallery-8.jpeg',
    '/images/gallery-9.jpeg',
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">Legacy in Action.</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
            Discreet execution, high-level context, and reputation-building visibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div style={{ y: y1 }} className="flex flex-col gap-6 md:gap-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden group aspect-[4/5]">
                <img
                  src={images[i]}
                  alt={`Power corridor gallery image ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </motion.div>

          <motion.div style={{ y: y2 }} className="flex flex-col gap-6 md:gap-8 md:mt-16">
            {[3, 4, 5].map((i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden group aspect-square">
                <img
                  src={images[i]}
                  alt={`Power corridor gallery image ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </motion.div>

          <motion.div style={{ y: y3 }} className="flex flex-col gap-6 md:gap-8 md:mt-8">
            {[6, 7, 8].map((i) => (
              <div key={i} className="relative rounded-3xl overflow-hidden group aspect-[3/4]">
                <img
                  src={images[i]}
                  alt={`Power corridor gallery image ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        'GovConnect transformed our regulatory approach. Their access and strategic guidance helped us navigate complex landscapes, saving years of delay.',
      author: 'A.B.L. Srivastava',
      role: 'Chairman and Director, Almondz Global Infra-Consultant Limited',
    },
    {
      quote:
        'Securing government-backed support and navigating documentation felt insurmountable until we partnered with GovConnect. Their materials and policy insights accelerated initiatives.',
      author: 'Ram Chauhan',
      role: 'Vice President, BVOKAL',
    },
    {
      quote:
        'The brand elevation we experienced within power corridors was unprecedented. GovConnect positioned us as trusted stakeholders and bridged vital channels.',
      author: 'Quds Al Balushi',
      role: 'Oman Aluminium Rolling Company (OARC)',
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-brand-accent" />
            <span className="text-brand-accent uppercase tracking-widest text-sm font-medium">Client Success</span>
            <div className="h-[1px] w-12 bg-brand-accent" />
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">Trusted by the Best.</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
            Hear from leaders who leveraged our network for measurable influence and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="p-8 md:p-10 rounded-3xl bg-brand-black border border-white/5 flex flex-col justify-between"
            >
              <div className="mb-8">
                <svg className="w-8 h-8 text-brand-accent/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-neutral-300 font-light leading-relaxed">"{testimonial.quote}"</p>
              </div>
              <div>
                <p className="text-brand-white font-medium text-lg">{testimonial.author}</p>
                <p className="text-brand-accent text-sm uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-accent/5" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8">From Boardrooms to Parliament.</h2>
          <p className="text-xl md:text-2xl text-neutral-400 font-light mb-12 max-w-2xl mx-auto">
            We get you there. Schedule a confidential briefing to map your narrative, visibility, and access.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-brand-accent text-brand-black rounded-full overflow-hidden text-lg"
          >
            <span className="relative z-10 font-medium tracking-wide">Schedule a Confidential Briefing</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform">
              <ArrowRight size={20} />
            </span>
            <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="py-16 px-6 md:px-12 border-t border-white/10 bg-brand-black relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="text-2xl font-bold tracking-tight mb-2">GovConnect.</div>
          <div className="text-sm text-neutral-400 font-light mb-1">
            An initiative of <span className="text-brand-white font-medium">All Compliances Solutions</span>
          </div>
          <div className="text-sm text-neutral-500 font-light">GST: 09ACKPV7887L1ZA</div>
        </div>

        <div className="flex flex-col md:items-end gap-2 text-sm">
          <a href="mailto:YES@AllCompliances.com" className="text-brand-accent hover:text-white transition-colors font-medium text-base">
            YES@AllCompliances.com
          </a>
          <div className="flex gap-6 font-medium text-neutral-400 mt-4 md:mt-2">
            <a href="#services" className="hover:text-brand-white transition-colors">
              Services
            </a>
            <a href="#footer" className="hover:text-brand-white transition-colors">
              Contact
            </a>
            <a
              href="https://www.linkedin.com/in/dr-rakesh-varmaias/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-xs text-neutral-600 text-center md:text-left">
        © {new Date().getFullYear()} GovConnect Consulting. All rights reserved.
      </div>
    </footer>
  );
}

function SyntaxiumHighlight() {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-black relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-neutral-900 to-black border border-white/10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none" />

          <div className="relative z-10 flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#3b82f6]" />
              <span className="text-[#3b82f6] uppercase tracking-widest text-sm font-medium">Strategic Tech Initiative</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">Syntaxium.</h2>
            <p className="text-xl text-neutral-400 font-light leading-relaxed mb-8 max-w-xl">
              Elite MVP execution for funded startups. Custom-engineered ERP ecosystems for mid-size enterprises.
            </p>
            <a
              href="https://syntaxium.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-brand-white font-medium hover:text-[#3b82f6] transition-colors group"
            >
              Explore Syntaxium
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="relative z-10 w-full md:w-1/3 aspect-square rounded-full bg-[#3b82f6]/5 border border-[#3b82f6]/20 flex items-center justify-center p-8">
            <div className="absolute inset-0 rounded-full bg-[#3b82f6]/10 blur-3xl animate-pulse" />
            <img src="/images/logo.jpeg" alt="Syntaxium Logo" className="w-full h-full object-contain relative z-10 rounded-full" referrerPolicy="no-referrer" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 fill-current stroke-none"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

