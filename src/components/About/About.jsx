import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Star, Compass, Award } from 'lucide-react';
import officeImage from '../../assets/modern_office.png';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -1 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section 
      id="about" 
      className="relative py-24 md:py-36 bg-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Core Copywriting */}
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="lg:col-span-6 flex flex-col space-y-8"
        >
          <motion.div variants={textVariants} className="inline-flex items-center space-x-2">
            <span className="h-[2px] w-8 bg-primary rounded-full" />
            <span className="font-btn text-xs font-bold tracking-[0.25em] text-primary uppercase">
              WHO WE ARE
            </span>
          </motion.div>

          <motion.h2 
            variants={textVariants}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-heading"
          >
            We Don't Just Market.<br />
            <span className="text-accent italic font-normal">We Make Impact.</span>
          </motion.h2>

          <motion.p 
            variants={textVariants}
            className="font-body text-base text-text/80 leading-relaxed"
          >
            At Ripple Creative, we believe every brand has a story that deserves to be told with prestige. We are a boutique, high-end creative agency specializing in matching elite brands with content creators who don't just post content—they shape culture. 
          </motion.p>

          <motion.p 
            variants={textVariants}
            className="font-body text-base text-text/70 leading-relaxed"
          >
            From conceptualizing high-production video assets to executing hyper-targeted influencer marketing campaigns across India, we treat digital content as high art. We orchestrate collaborations that ripple outwards, driving lasting engagement, true brand equity, and verifiable conversion.
          </motion.p>

          {/* Core Values Bullets */}
          <motion.div 
            variants={textVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
          >
            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-xl bg-secondary text-primary">
                <Star size={16} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-heading text-sm uppercase tracking-wide">Elite Curation</h4>
                <p className="font-body text-xs text-text/60 mt-1">We represent only top-tier creators with real, engaged communities.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-2.5 rounded-xl bg-secondary text-primary">
                <Compass size={16} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-heading text-sm uppercase tracking-wide">Data Driven</h4>
                <p className="font-body text-xs text-text/60 mt-1">Every campaign is optimized for actual reach and ROI metrics.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={textVariants} className="pt-4">
            <a
              href="#services"
              className="group inline-flex items-center space-x-3 text-heading font-btn text-xs font-bold tracking-widest hover:text-primary transition-colors"
            >
              <span>EXPLORE OUR SERVICES</span>
              <div className="w-8 h-8 rounded-full border border-borderCol flex items-center justify-center group-hover:bg-primary group-hover:text-secondary group-hover:border-primary transition-all duration-300">
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Premium Office Visuals and Overlays */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          
          {/* Main Image Container */}
          <motion.div
            variants={imageContainerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="relative rounded-3xl overflow-hidden aspect-[4/5] w-full max-w-[450px] shadow-premium border border-borderCol/60 z-10 bg-cardBg"
          >
            <img 
              src={officeImage} 
              alt="Ripple Creative Agency Studio"
              loading="lazy"
              className="w-full h-full object-cover filter brightness-[0.98] transition-transform duration-700 hover:scale-102"
            />
            {/* Soft gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Floating Card Overlay: Engagement Rate */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -20 }}
            animate={inView ? { opacity: 1, x: 0, y: -20 } : {}}
            transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
            className="absolute top-10 -right-4 md:-right-8 z-20 glass p-5 rounded-2xl shadow-premium border border-borderCol/60 flex items-center space-x-3 max-w-[200px]"
          >
            <div className="p-3 bg-accent/20 rounded-xl text-accent">
              <Award size={20} />
            </div>
            <div>
              <p className="font-heading font-extrabold text-heading text-lg leading-none">+185%</p>
              <p className="font-body text-[10px] tracking-wider text-text/60 mt-1 uppercase">Avg Engagement</p>
            </div>
          </motion.div>

          {/* Floating Card Overlay: Quality Creative */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 30 }}
            animate={inView ? { opacity: 1, x: 0, y: 30 } : {}}
            transition={{ delay: 1, duration: 0.8, type: 'spring' }}
            className="absolute bottom-10 -left-4 md:-left-8 z-20 glass border border-borderCol/60 p-5 rounded-2xl shadow-premium max-w-[220px]"
          >
            <p className="font-heading italic text-heading text-sm">
              "We tell stories that spark ripples."
            </p>
            <div className="flex items-center space-x-2 mt-3">
              <div className="w-5 h-[1px] bg-primary" />
              <span className="font-btn text-[9px] font-bold tracking-widest text-primary uppercase">CREATIVE HUB</span>
            </div>
          </motion.div>

          {/* Decorative Background Blob and Shapes */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          
        </div>

      </div>
    </section>
  );
};

export default About;
