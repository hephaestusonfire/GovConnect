import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, Leaf, Gavel, Building2, Shield, ScanSearch } from 'lucide-react';
import { ServiceCategory } from '../types';

const services: ServiceCategory[] = [
  {
    id: 'strategy',
    title: 'Strategic Partnerships',
    items: [
      { 
        title: 'Government Partnerships', 
        description: 'Facilitating high-level alliances between private sector giants and public sector initiatives. We leverage our extensive network to create meaningful collaborations that drive growth and innovation for corporates and startups.', 
        icon: Building2 
      },
      { 
        title: 'Innovation Funding Solutions', 
        description: 'Connecting businesses with government funding opportunities and grants to drive innovation and development. We unlock avenues for technological advancement through strategic funding partnerships.', 
        icon: Building2 
      },
      { 
        title: 'Policy Advocacy Support', 
        description: 'Assisting in shaping policies by presenting corporate and startup interests to relevant government agencies. Data-driven advocacy to create regulatory frameworks favorable to sustainable development.', 
        icon: Building2 
      }
    ]
  },
  {
    id: 'environment',
    title: 'Environmental Intelligence',
    items: [
      { 
        title: 'Environmental & Social Impact Assessment (ESIA)', 
        description: 'Comprehensive ESIA services to help organizations comply with regulatory requirements and ensure sustainable project development. We conduct detailed assessments of environmental and social risks, evaluate potential impacts, and develop mitigation plans aligned with national and international standards.', 
        icon: Leaf 
      },
      { 
        title: 'Project Financial Environmental Risk Analysis', 
        description: 'Integrating environmental impact data with financial modeling to identify potential liabilities, cost overruns, and compliance risks. We assess project exposure to climate, biodiversity, and regulatory factors affecting long-term financial performance and ESG risk management.', 
        icon: Leaf 
      },
      { 
        title: 'Wildlife & Biodiversity Assessment', 
        description: 'Expert evaluation of ecological sensitivity, identification of key species and habitats, and assessment of potential project impacts on biodiversity. We develop actionable management and conservation plans that balance development with ecological integrity.', 
        icon: Leaf 
      },
      { 
        title: 'Biodiversity Assessment & Management', 
        description: 'Comprehensive biodiversity assessments using standard ecological methods and GIS-based mapping. We identify key species, assess potential project impacts, and recommend conservation strategies aligned with the National Biodiversity Action Plan.', 
        icon: Leaf 
      },
      { 
        title: 'Social Surveys & Resettlement Action Plans (RAP)', 
        description: 'Detailed social surveys and preparation of Resettlement Action Plans to support fair and inclusive project implementation. We engage directly with affected communities to assess socio-economic conditions and design equitable compensation measures aligned with World Bank ESS5 standards.', 
        icon: Leaf 
      }
    ]
  },
  {
    id: 'compliance',
    title: 'Regulatory Compliance',
    items: [
      { 
        title: 'Compliance Advisory', 
        description: 'End-to-end guidance on navigating the complex web of Indian statutory requirements. Ensuring seamless operations and 100% compliance with all relevant regulations and government policies.', 
        icon: Gavel 
      },
      { 
        title: 'Forest & Wildlife Clearances', 
        description: 'Complete assistance in preparation of proposals for Wildlife and Forest Clearances with end-to-end support in obtaining final approvals. We handle site assessments, documentation, and liaison with regulatory bodies to ensure compliance with Forest Conservation Act and Wildlife Protection Act.', 
        icon: Gavel 
      },
      { 
        title: 'Forest & Wildlife Regulations Compliance', 
        description: 'Comprehensive support for compliance with Forest and Wildlife Regulations including periodic audits, documentation, and coordination with regulatory authorities. We ensure project activities adhere to legal standards and minimize ecological impact.', 
        icon: Gavel 
      },
      { 
        title: 'Forest Rights Settlement Support', 
        description: 'Specialized support for Forest Rights Settlement under the Forest Rights Act (FRA), 2006. We assist in identifying eligible claimants, verifying land and resource use rights, and preparing necessary documentation for transparent and lawful recognition of forest rights.', 
        icon: Gavel 
      },
      { 
        title: 'Post-Clearance Compliance Monitoring', 
        description: 'End-to-end monitoring for Environmental Clearances. We track implementation of Environmental Management Plans, verify adherence to clearance conditions, conduct site inspections, and prepare periodic compliance reports for regulatory authorities.', 
        icon: Gavel 
      },
      { 
        title: 'Tree Marking, Enumeration & Documentation', 
        description: 'Professional services for tree marking, enumeration, and documentation to support forestry and environmental clearance requirements. Our experts conduct detailed field surveys using GPS-based mapping to prepare scientifically validated reports per forest department guidelines.', 
        icon: Gavel 
      }
    ]
  },
  {
    id: 'cyber',
    title: 'Cybersecurity & Forensics',
    items: [
      { 
        title: 'Cybersecurity', 
        description: 'Protecting your digital assets and critical infrastructure with comprehensive security assessments, vulnerability management, and incident response. We help organizations safeguard data and systems against evolving cyber threats and ensure alignment with government and industry security standards.', 
        icon: Shield 
      },
      { 
        title: 'Cyber Forensics', 
        description: 'Expert digital forensics and investigation services to support legal, regulatory, and compliance needs. We deliver evidence collection, analysis, and reporting for incidents, disputes, and audits—aligned with admissible standards for Indian law enforcement and judicial proceedings.', 
        icon: ScanSearch 
      }
    ]
  }
];

const ServiceCard = ({ category, isActive }: { category: ServiceCategory; isActive: boolean }) => {
  return (
    <motion.div
      initial={false}
      animate={{ 
        opacity: isActive ? 1 : 0.35,
        scale: isActive ? 1 : 0.98,
        x: isActive ? 0 : -12
      }}
      transition={{ type: 'tween', duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`border-b border-premium-white/10 py-12 md:py-20 group cursor-pointer transition-colors duration-300`}
    >
      <div className="flex items-baseline gap-3 sm:gap-4 mb-6">
        <span className="text-premium-gold font-mono text-xs sm:text-sm tracking-widest">0{services.indexOf(category) + 1}</span>
        <h3 className={`font-serif text-2xl sm:text-3xl md:text-5xl transition-colors duration-200 ${isActive ? 'text-white' : 'text-premium-silver/40 group-hover:text-premium-silver/70'}`}>
          {category.title}
        </h3>
      </div>
      
      <motion.div 
        initial={false}
        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
        transition={{ type: 'tween', duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="overflow-hidden"
      >
        <div className="grid gap-6 sm:gap-8 pl-6 sm:pl-10 md:pl-16">
          {category.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 sm:gap-4 bg-premium-black/30 p-4 sm:p-6 border-l-2 border-premium-gold/30 hover:border-premium-gold transition-colors">
              <ArrowRight className="text-premium-gold w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0" />
              <div>
                <h4 className="text-base sm:text-lg md:text-xl text-premium-white font-medium mb-2">{item.title}</h4>
                <p className="text-premium-silver/70 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState(services[0].id);

  // Scroll progress through the section (0 at top, 1 at bottom)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Scrub: numerical smoothing (0.5–1 = slight lag, reduces snap/skip). Higher = smoother, more lag.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001,
  });

  // Staggered trigger thresholds (~15px equivalent per step) so items don't all fire at once
  const SEGMENT_COUNT = services.length;
  const STAGGER = 0.015; // progress offset per step (~10–20px depending on section height)
  const segmentEnds = Array.from({ length: SEGMENT_COUNT }, (_, i) =>
    Math.min(1, (i + 1) / SEGMENT_COUNT + i * STAGGER)
  );

  const smoothSectionIndex = useTransform(smoothProgress, (v) => {
    const progress = Math.max(0, Math.min(1, v));
    if (progress <= segmentEnds[0]) return (progress / segmentEnds[0]) * 1;
    for (let i = 1; i < segmentEnds.length; i++) {
      if (progress <= segmentEnds[i]) {
        const segStart = segmentEnds[i - 1];
        const segLen = segmentEnds[i] - segStart;
        const idx = segLen > 0 ? i + (progress - segStart) / segLen : i;
        return Math.min(SEGMENT_COUNT - 1, idx);
      }
    }
    return SEGMENT_COUNT - 1;
  });

  // Sync to activeId inside requestAnimationFrame so updates align with display refresh (no per-scroll-pixel updates)
  const rafIdRef = useRef<number | null>(null);
  const latestValueRef = useRef(0);

  useMotionValueEvent(smoothSectionIndex, 'change', (latest) => {
    latestValueRef.current = latest;
    if (rafIdRef.current !== null) return;
    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = null;
      const index = Math.round(latestValueRef.current);
      const id = services[index]?.id ?? services[0].id;
      setActiveId(id);
    });
  });

  useEffect(() => () => {
    if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-premium-dark relative"
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
    >
      <div
        className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col lg:flex-row"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        {/* Left Side: Scrollable List */}
        <div
          className="w-full lg:w-1/2 py-20 lg:py-32"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        >
          <div className="mb-20">
            <span className="text-premium-gold uppercase tracking-widest text-xs font-bold">Our Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mt-4 mb-6 leading-tight">
              End-to-End <span className="text-premium-gold italic">Solutions</span>
            </h2>
            <p className="text-premium-silver/80 text-base md:text-lg leading-relaxed max-w-xl">
              Strategic government partnerships, environmental compliance, and regulatory advisory—all under one roof.
            </p>
          </div>

          <div
            className="flex flex-col"
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="min-h-[50vh] flex flex-col justify-center"
                style={{ willChange: 'transform', transform: 'translateZ(0)' }}
              >
                 <ServiceCard 
                   category={service} 
                   isActive={activeId === service.id} 
                 />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Sticky Visuals */}
        <div
          className="hidden lg:block w-1/2 sticky top-0 h-screen flex items-center justify-center p-12"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        >
          <div
            className="relative w-full aspect-[4/5] bg-premium-black border border-premium-white/10 overflow-hidden"
            style={{ willChange: 'transform', transform: 'translateZ(0)' }}
          >
             <div
               className="absolute inset-0 bg-premium-charcoal/50"
               style={{ willChange: 'transform', transform: 'translateZ(0)' }}
             >
               <motion.div 
                 animate={{ 
                   rotate: activeId === 'strategy' ? 0 : activeId === 'environment' ? 90 : activeId === 'compliance' ? 180 : 270,
                   scale: activeId === 'strategy' ? 1 : 1.2
                 }}
                 transition={{ type: 'tween', duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"
                 style={{ willChange: 'transform' }}
               />
               
               <div
                 className="absolute inset-0 flex items-center justify-center"
                 style={{ willChange: 'transform', transform: 'translateZ(0)' }}
               >
                 <motion.div
                   key={activeId}
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ type: 'tween', duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                   className="text-center"
                   style={{ willChange: 'transform' }}
                 >
                    {activeId === 'strategy' && (
                      <Building2 className="w-32 h-32 text-premium-gold opacity-80" strokeWidth={1} />
                    )}
                    {activeId === 'environment' && (
                      <Leaf className="w-32 h-32 text-emerald-500 opacity-80" strokeWidth={1} />
                    )}
                    {activeId === 'compliance' && (
                      <Gavel className="w-32 h-32 text-premium-silver opacity-80" strokeWidth={1} />
                    )}
                    {activeId === 'cyber' && (
                      <Shield className="w-32 h-32 text-premium-gold opacity-80" strokeWidth={1} />
                    )}
                    <h3 className="mt-8 font-serif text-3xl text-white tracking-wide uppercase">
                      {services.find(s => s.id === activeId)?.title}
                    </h3>
                 </motion.div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};