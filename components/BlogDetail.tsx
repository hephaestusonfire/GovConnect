import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { BlogPost, BlogContent } from '../types';

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ post, onBack }) => {
  const renderContent = (item: BlogContent, index: number) => {
    switch (item.type) {
      case 'heading':
        const HeadingTag = `h${item.level || 2}` as keyof JSX.IntrinsicElements;
        const headingClasses = item.level === 2 
          ? 'font-serif text-3xl md:text-4xl text-white mt-12 mb-6'
          : 'font-serif text-2xl md:text-3xl text-white mt-8 mb-4';
        return (
          <HeadingTag key={index} className={headingClasses}>
            {item.content as string}
          </HeadingTag>
        );
      
      case 'paragraph':
        return (
          <p key={index} className="text-premium-silver/80 text-lg leading-relaxed mb-6">
            {item.content as string}
          </p>
        );
      
      case 'list':
        return (
          <ul key={index} className="space-y-3 mb-6 ml-6">
            {(item.content as string[]).map((listItem, idx) => (
              <li key={idx} className="text-premium-silver/80 text-lg leading-relaxed list-disc">
                {listItem}
              </li>
            ))}
          </ul>
        );
      
      case 'image':
        return (
          <div key={index} className="my-8">
            <img 
              src={item.imageUrl} 
              alt={item.imageAlt || 'Blog image'} 
              className="w-full h-auto rounded-lg"
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen bg-premium-black py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-premium-gold hover:text-premium-gold/80 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-widest text-sm font-bold">Back to Blog</span>
        </motion.button>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <span className="text-premium-gold text-xs uppercase tracking-widest mb-4 inline-block">
            {post.category}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
            {post.title}
          </h2>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-premium-silver/60 text-sm border-t border-b border-premium-white/10 py-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By {post.author}</span>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          {post.content.map((item, index) => renderContent(item, index))}
        </motion.article>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-premium-charcoal/30 backdrop-blur-sm border border-premium-white/10 p-8 md:p-12"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Need Expert Guidance?
          </h3>
          <p className="text-premium-silver/70 mb-6">
            Our team at GovConnect is ready to help you navigate compliance and regulatory challenges.
          </p>
          <a 
            href="#footer"
            className="inline-block bg-premium-gold text-premium-black px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-premium-gold/90 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
