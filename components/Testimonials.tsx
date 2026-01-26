import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "GovConnect has been a game-changer for our startup, providing seamless access to government resources and partnerships. Their expertise in navigating the complexities of Indian regulations is unparalleled. A must-have ally for any business looking to thrive in the Indian market.",
    author: "Arjun Mehra",
    role: "Startup Founder",
    company: "Tech Innovators India"
  },
  {
    id: 2,
    quote: "GovConnect has been instrumental in bridging our corporate team with government entities, simplifying processes, and opening doors to new opportunities. Their deep understanding of Indian policies has accelerated our growth substantially.",
    author: "Ravi Kapoor",
    role: "Director of Operations",
    company: "Enterprise Solutions Corp"
  },
  {
    id: 3,
    quote: "GovConnect has transformed our engagement with government agencies, making it easier to secure critical partnerships. Their insight into regulatory frameworks is invaluable, fostering growth and innovation for our company. A vital resource for businesses navigating the Indian market.",
    author: "Priya Sharma",
    role: "Chief Strategy Officer",
    company: "Growth Ventures Ltd"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-premium-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-premium-gold/5 rounded-full blur-[120px]" />
      
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-premium-gold uppercase tracking-widest text-xs font-bold">
            Proven Partnership Results
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-white mt-4">
            Trusted by <span className="text-premium-gold italic">Leaders</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-premium-charcoal/30 backdrop-blur-sm border border-premium-white/10 p-6 sm:p-8 md:p-10 lg:p-12 relative group hover:border-premium-gold/30 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-20 h-20 text-premium-gold" strokeWidth={1} />
              </div>

              <div className="relative z-10">
                {/* Quote Text */}
                <p className="text-premium-silver/80 text-lg leading-relaxed mb-8 font-light">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="border-t border-premium-white/10 pt-6">
                  <h4 className="text-white font-serif text-xl mb-1">
                    {testimonial.author}
                  </h4>
                  <p className="text-premium-gold text-sm uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                  <p className="text-premium-silver/50 text-sm mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/0 to-premium-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-premium-white/10 pt-12"
        >
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "50+", label: "Government Partnerships" },
            { value: "100%", label: "Compliance Rate" },
            { value: "4", label: "Office Locations" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-premium-gold mb-2">
                {stat.value}
              </div>
              <div className="text-premium-silver/60 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
