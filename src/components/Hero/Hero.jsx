import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MessageSquare } from 'lucide-react';
import WorldMap from '../WorldMap/WorldMap';

const CountUpComponent = typeof CountUp === 'function' ? CountUp : CountUp.default;

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headingContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookSession = () => {
    window.dispatchEvent(new Event('open-calendly'));
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 select-none bg-bg"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(131,153,88,0.05),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(211,150,140,0.05),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Aligned Typography and CTAs */}
        <motion.div 
          ref={ref}
          variants={headingContainerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left"
        >
          {/* Tagline */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2"
          >
            <span className="h-[2px] w-8 bg-primary rounded-full" />
            <span className="font-btn text-xs font-bold tracking-[0.25em] text-primary uppercase">
              CREATOR FIRST. ALWAYS.
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            variants={itemVariants}
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] text-heading"
          >
            WE CREATE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-[#b57a70]">WE CONNECT.</span><br />
            WE GROW.
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="font-body text-base md:text-lg text-text/80 max-w-xl leading-relaxed"
          >
            Ripple Creative is a high-end influencer marketing and talent management agency. We bridge the gap between premium brands and India's finest creators to produce award-winning campaigns.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <button
              onClick={handleBookSession}
              className="group flex items-center space-x-2 px-8 py-4 bg-primary text-secondary rounded-full font-btn text-xs font-bold tracking-widest transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              <span>BOOK STRATEGY CALL</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="#case-studies"
              onClick={(e) => handleNavClick(e, '#case-studies')}
              className="group flex items-center space-x-2 px-8 py-4 border border-borderCol bg-cardBg/30 backdrop-blur-sm text-heading rounded-full font-btn text-xs font-bold tracking-widest transition-all duration-300 hover:bg-cardBg hover:-translate-y-0.5"
            >
              <MessageSquare size={14} className="opacity-70 group-hover:scale-110 transition-transform" />
              <span>SEE WHAT WE DO</span>
            </a>
          </motion.div>

          {/* Stats Grid Counters */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 md:gap-12 pt-8 border-t border-borderCol/60 w-full max-w-md"
          >
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-heading">
                {inView ? <CountUpComponent end={5000} duration={3} separator="," /> : '0'}+
              </h3>
              <p className="font-body text-xs tracking-wider text-text/60 mt-1 uppercase">CREATORS</p>
            </div>
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-heading">
                {inView ? <CountUpComponent end={100} duration={3} /> : '0'}+
              </h3>
              <p className="font-body text-xs tracking-wider text-text/60 mt-1 uppercase">BRANDS</p>
            </div>
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-heading">
                {inView ? <CountUpComponent end={8} duration={3} /> : '0'}+
              </h3>
              <p className="font-body text-xs tracking-wider text-text/60 mt-1 uppercase">NICHE SECTORS</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Vector Map Canvas (No Photos) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
          className="lg:col-span-5 h-[350px] md:h-[500px] w-full flex items-center justify-center bg-cardBg/20 glass rounded-3xl border border-borderCol/60 shadow-premium relative overflow-hidden"
        >
          <WorldMap />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
