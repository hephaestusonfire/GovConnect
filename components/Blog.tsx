import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { BlogDetail } from './BlogDetail';

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  if (selectedPost) {
    return <BlogDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }
  return (
    <section id="blog" className="py-32 bg-premium-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-premium-gold/5 rounded-full blur-[120px]" />
      
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-premium-gold uppercase tracking-widest text-xs font-bold">
            Insights & Resources
          </span>
          <h2 className="font-serif text-5xl md:text-7xl text-white mt-4 mb-6">
            Latest from <span className="text-premium-gold italic">Our Experts</span>
          </h2>
          <p className="text-premium-silver/70 text-lg max-w-2xl">
            Stay informed with expert insights on compliance, environmental regulations, and government partnerships.
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={() => setSelectedPost(blogPosts[0])}
          className="mb-12 bg-premium-charcoal/30 backdrop-blur-sm border border-premium-white/10 overflow-hidden group hover:border-premium-gold/30 transition-all duration-500 cursor-pointer"
        >
          <div className="grid md:grid-cols-2">
            <div className="aspect-[16/10] bg-premium-dark relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/20 to-premium-charcoal/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-premium-gold/30 font-serif text-9xl">01</span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-premium-gold text-xs uppercase tracking-widest mb-4">
                {blogPosts[0].category} • Featured
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 group-hover:text-premium-gold transition-colors">
                {blogPosts[0].title}
              </h3>
              <p className="text-premium-silver/70 leading-relaxed mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-premium-silver/60 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 ml-auto text-premium-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid of Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => setSelectedPost(post)}
              className="bg-premium-charcoal/30 backdrop-blur-sm border border-premium-white/10 p-8 group hover:border-premium-gold/30 transition-all duration-500 cursor-pointer flex flex-col"
            >
              {/* Category Badge */}
              <span className="text-premium-gold text-xs uppercase tracking-widest mb-3 sm:mb-4 inline-block">
                {post.category}
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl text-white mb-3 sm:mb-4 group-hover:text-premium-gold transition-colors flex-grow leading-tight">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-premium-silver/60 text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between pt-4 border-t border-premium-white/10">
                <div className="flex items-center gap-2 text-premium-silver/50 text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-premium-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/0 to-premium-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a 
            href="#blog" 
            className="inline-flex items-center gap-3 border border-premium-white/20 text-white px-8 py-4 hover:bg-premium-gold hover:text-premium-black hover:border-premium-gold transition-all duration-300 group"
          >
            <span className="uppercase tracking-widest text-sm font-bold">View All Articles</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
