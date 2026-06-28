import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import fashionImg from '../../assets/campaign_fashion.png';
import techImg from '../../assets/campaign_tech.png';

const caseStudies = [
  {
    brand: 'AURORA BEAUTY',
    campaign: 'The Silk Radiance Launch',
    image: fashionImg,
    description: 'An aesthetic-first launch targeting luxury cosmetics shoppers. We activated 25 elite beauty and fashion creators to construct a high-production video storytelling campaign on Instagram Reels and YouTube.',
    metrics: [
      { label: 'REACH', value: '4.2M+' },
      { label: 'TOTAL VIEWS', value: '12.8M' },
      { label: 'CLICKS', value: '380K+' },
      { label: 'CONVERSION', value: '+44% Sales' }
    ],
    color: '#D3968C'
  },
  {
    brand: 'SONIC LIFESTYLE',
    campaign: 'Pure Sound, No Noise',
    image: techImg,
    description: 'An immersive lifestyle and tech integration celebrating premium noise-canceling headphones. We partnered with 15 electronic music producers, vloggers, and sound engineers to demonstrate ANC capabilities through audio-first content.',
    metrics: [
      { label: 'REACH', value: '6.8M+' },
      { label: 'TOTAL VIEWS', value: '18.5M' },
      { label: 'CLICKS', value: '620K+' },
      { label: 'CAMPAIGN ROI', value: '3.2x' }
    ],
    color: '#839958'
  }
];

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="case-studies" 
      className="py-24 md:py-36 bg-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div className="mb-20 max-w-xl">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="h-[2px] w-8 bg-primary rounded-full" />
            <span className="font-btn text-xs font-bold tracking-[0.25em] text-primary uppercase">
              SELECTED WORK
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-heading">
            Our Case Studies
          </h2>
        </div>

        {/* Case Studies List */}
        <div ref={ref} className="space-y-24 md:space-y-36">
          {caseStudies.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={project.campaign}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className={`lg:col-span-5 flex flex-col space-y-6 ${!isEven ? 'lg:order-2' : ''}`}
                >
                  <div>
                    <span className="font-btn text-xs font-extrabold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                      {project.brand}
                    </span>
                    <h3 className="font-heading text-3xl md:text-4xl font-bold text-heading mt-4">
                      {project.campaign}
                    </h3>
                  </div>

                  <p className="font-body text-sm md:text-base text-text/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Campaign Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 py-5 border-y border-borderCol/60 bg-secondary/30 rounded-2xl px-5">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="font-heading text-xl md:text-2xl font-bold text-heading">
                          {metric.value}
                        </p>
                        <p className="font-body text-[10px] tracking-wider text-text/50 uppercase mt-0.5">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Project CTA Link */}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="group inline-flex items-center space-x-2 text-heading font-btn text-xs font-bold tracking-widest hover:text-primary transition-colors"
                    >
                      <span>VIEW CAMPAIGN SUMMARY</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>

                {/* Case Study Image Container */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className={`lg:col-span-7 ${!isEven ? 'lg:order-1' : ''}`}
                >
                  <a
                    href="#contact"
                    data-cursor="view"
                    className="block relative rounded-3xl overflow-hidden shadow-premium border border-borderCol/60 aspect-[16/10] bg-cardBg group"
                  >
                    <img 
                      src={project.image} 
                      alt={project.campaign}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Hover Tint Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
