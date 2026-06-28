import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, X, ArrowRight, BookOpen } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Creator Commerce in India',
    excerpt: 'How social commerce is shifting from simple brand placements to creator-owned IPs, digital stores, and live shopping models.',
    category: 'CREATOR ECONOMY',
    date: 'June 25, 2026',
    readTime: '5 min read',
    content: `
      <p class="font-heading text-lg italic text-primary mb-6">India's creator economy is undergoing a massive paradigm shift. Creators are transitioning from simple media channels into direct-to-consumer enterprises.</p>
      
      <h3 class="font-heading text-2xl font-bold text-heading mt-8 mb-4">1. The Death of the Static Sponsorship</h3>
      <p class="mb-4">For years, influencer marketing relied on a simple transaction: a brand pays a creator to post a photo or video holding a product. Today's consumer is highly sophisticated and can spot a transactional sponsorship instantly. Creators are moving towards long-term equity deals, co-branded product lines, and independent stores.</p>

      <h3 class="font-heading text-2xl font-bold text-heading mt-8 mb-4">2. The Rise of Live Commerce</h3>
      <p class="mb-4">Following trends in East Asia, live streaming commerce is gaining immense traction in urban hubs across India. Brands are collaborating with creators to host real-time interactive product launches where viewers can buy items with one click, direct from the live broadcast.</p>

      <h3 class="font-heading text-2xl font-bold text-heading mt-8 mb-4">3. Scaling Creator-Owned IPs</h3>
      <p class="mb-4">From cosmetics and apparel to packaged snacks and educational content, creators are building companies around their own personal brands. Our role at Ripple is to provide the infrastructure, financing partnerships, and supply chain connections to help creators scale these ventures.</p>
    `
  },
  {
    id: 2,
    title: 'Why Nano-Influencers Drive 3x Conversions',
    excerpt: 'A detailed performance audit on micro and nano communities showing why tight-knit trust beats massive reach for ROI.',
    category: 'DATA INSIGHTS',
    date: 'June 18, 2026',
    readTime: '4 min read',
    content: `
      <p class="font-heading text-lg italic text-primary mb-6">In the quest for vanity follower metrics, premium brands often ignore the highest converting sector: micro and nano-influencers.</p>
      
      <h3 class="font-heading text-2xl font-bold text-heading mt-8 mb-4">1. High-Density Trust Circles</h3>
      <p class="mb-4">Influencers with 5,000 to 20,000 followers are usually closely connected to their audience. They reply to comments, engage in DMs, and build genuine friendships. This dense network of trust mimics personal peer recommendations. When a nano-influencer endorses a primer or a headset, their community buys it because they trust their taste.</p>

      <h3 class="font-heading text-2xl font-bold text-heading mt-8 mb-4">2. Cost-Efficiency & Funnel Penetration</h3>
      <p class="mb-4">Securing partnerships with mega-celebrities requires massive budgets and carries a high risk of diluted interest. Collaborating with a cluster of 15 nano-influencers in specific cities allows brands to segment audiences and scale funnel conversions at a fraction of the cost, leading to 3x higher direct campaign conversions.</p>
    `
  },
  {
    id: 3,
    title: 'Maximizing Campaign ROI: A Brand Guide',
    excerpt: 'Establishing clear contracts, brief frameworks, and giving creative freedom to optimize digital campaigns.',
    category: 'BRAND STRATEGY',
    date: 'May 29, 2026',
    readTime: '6 min read',
    content: `
      <p class="font-heading text-lg italic text-primary mb-6">Too much brand control ruins creator authenticity. Learn how to structure briefings that protect brand guidelines while letting creator personality shine.</p>
      
      <h3 class="font-heading text-2xl font-bold text-heading mt-8 mb-4">1. The Autonomy Paradigm</h3>
      <p class="mb-4">The single biggest mistake brands make is handing a creator a rigid script. Creators know exactly what content resonates with their audience. Force a script on them, and the engagement tanks. Provide a strong visual mood board, key messaging hooks, and let them craft the narrative.</p>

      <h3 class="font-heading text-2xl font-bold text-heading mt-8 mb-4">2. Smart Funnel Tracking</h3>
      <p class="mb-4">Always align tracking assets before the first post goes live. Implement trackable UTM parameters, custom coupon overlays, and pixel retargeting tags to track clicks, signups, and purchases through the entire user path.</p>
    `
  }
];

const Blog = () => {
  const [activePost, setActivePost] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section 
      id="blog" 
      className="py-24 md:py-36 bg-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="h-[2px] w-8 bg-primary rounded-full" />
              <span className="font-btn text-xs font-bold tracking-[0.25em] text-primary uppercase">
                INSIGHTS & THOUGHTS
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-heading">
              Our Publications
            </h2>
          </div>
          <p className="font-body text-base text-text/70 max-w-sm md:text-right leading-relaxed">
            Discover analysis, reports, and strategy guides outlining the shifts in modern branding.
          </p>
        </div>

        {/* Blog Grid */}
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-cardBg/40 glass p-8 rounded-3xl border border-borderCol cursor-pointer flex flex-col justify-between min-h-[350px] shadow-sm hover:shadow-premium transition-shadow group"
              onClick={() => {
                setActivePost(post);
                document.body.classList.add('overflow-hidden');
              }}
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between font-btn text-[9px] font-bold tracking-widest text-text/50 uppercase mb-6">
                  <span className="text-primary bg-primary/10 px-2.5 py-1 rounded-full">{post.category}</span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1"><Calendar size={10} /> <span>{post.date}</span></span>
                    <span className="flex items-center space-x-1"><Clock size={10} /> <span>{post.readTime}</span></span>
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-heading mb-4 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-text/75 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex items-center space-x-2 text-heading text-xs font-bold tracking-widest font-btn group-hover:text-primary transition-colors pt-6 border-t border-borderCol/40 mt-6">
                <span>READ ARTICLE</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-Screen Glassmorphic Reading Drawer Overlay */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999999] bg-black/60 backdrop-blur-md flex justify-end"
          >
            {/* Click outside to close */}
            <div 
              className="absolute inset-0 z-0 cursor-pointer" 
              onClick={() => {
                setActivePost(null);
                document.body.classList.remove('overflow-hidden');
              }}
            />

            {/* Reading Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 220 }}
              className="w-full max-w-2xl bg-cardBg glass border-l border-borderCol relative z-10 h-full overflow-y-auto p-8 md:p-12 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header controls */}
                <div className="flex justify-between items-center pb-6 border-b border-borderCol/60 mb-8">
                  <span className="font-btn text-[9px] font-extrabold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">
                    {activePost.category}
                  </span>
                  <button
                    onClick={() => {
                      setActivePost(null);
                      document.body.classList.remove('overflow-hidden');
                    }}
                    className="p-2 rounded-full hover:bg-borderCol transition-colors"
                    aria-label="Close article"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Article Metadata */}
                <div className="flex items-center space-x-4 font-btn text-[10px] text-text/50 uppercase mb-4">
                  <span className="flex items-center space-x-1"><Calendar size={12} /> <span>{activePost.date}</span></span>
                  <span className="flex items-center space-x-1"><Clock size={12} /> <span>{activePost.readTime}</span></span>
                </div>

                {/* Article Title */}
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-heading leading-tight mb-8">
                  {activePost.title}
                </h1>

                {/* Article Body */}
                <div 
                  className="font-body text-sm text-text/80 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: activePost.content }}
                />
              </div>

              {/* Close Footer CTA */}
              <div className="pt-12 border-t border-borderCol/60 mt-12 flex justify-between items-center">
                <div className="flex items-center space-x-2 text-text/50 text-[10px] font-btn tracking-wider uppercase">
                  <BookOpen size={14} />
                  <span>RIPPLE INSIGHTS</span>
                </div>
                <button
                  onClick={() => {
                    setActivePost(null);
                    document.body.classList.remove('overflow-hidden');
                  }}
                  className="px-6 py-3 bg-primary text-secondary rounded-xl font-btn text-xs font-bold tracking-widest"
                >
                  CLOSE ARTICLE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
