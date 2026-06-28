import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Share2, Users, Camera, TrendingUp, UserCheck, Briefcase, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Elevate your brand presence across all social platforms. We curate cohesive, high-impact strategies that drive community growth and user interactions.',
    deliverables: ['Organic Strategy', 'Community Management', 'Platform Playbooks', 'Social Commerce'],
    color: 'from-[#839958] to-[#9cb075]'
  },
  {
    icon: Users,
    title: 'Influencer Marketing',
    description: 'We orchestrate hyper-targeted creator collaborations. Our proprietary roster spans India to deliver authentic brand integrations that convert.',
    deliverables: ['ROI Campaign Planning', 'Matchmaking & Outreach', 'Contracts & Compliance', 'Performance Auditing'],
    color: 'from-[#D3968C] to-[#e0aba2]'
  },
  {
    icon: Camera,
    title: 'Content Creation',
    description: 'High-production visual storytelling. Our in-house team produces short-form video assets (Reels, YT Shorts), high-fashion photography, and ad creatives.',
    deliverables: ['Video Pre/Post Production', 'Creative Direction', 'Graphic Design & Motion', '3D Asset Creation'],
    color: 'from-blue-400 to-indigo-400'
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Scale your revenue through highly optimized paid acquisition. We combine analytical rigor with creative testing to lower CAC and maximize ROI.',
    deliverables: ['Paid Social (Meta, Google)', 'LTV Optimization', 'A/B Creative Testing', 'Funnels Audit'],
    color: 'from-amber-400 to-orange-400'
  },
  {
    icon: UserCheck,
    title: 'Talent Management',
    description: 'Bespoke representation for elite digital creators. We shape careers, manage premium brand deals, and build independent creator IPs.',
    deliverables: ['Career Roadmap Strategy', 'Inbound Deal Negotiation', 'Merch & IP Incubation', 'Public Relations'],
    color: 'from-[#839958] to-[#D3968C]'
  },
  {
    icon: Briefcase,
    title: 'Brand Strategy',
    description: 'Position your brand for long-term equity. We define brand voice, architectural messaging, identity development, and go-to-market roadmaps.',
    deliverables: ['Competitive Auditing', 'Identity & Tone Guide', 'Go-To-Market Launches', 'Culture Positioning'],
    color: 'from-[#0A3323] to-[#839958]'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
      },
    },
  };

  return (
    <section 
      id="services" 
      className="relative py-24 md:py-36 bg-cardBg/20 border-y border-borderCol overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="h-[2px] w-8 bg-primary rounded-full" />
              <span className="font-btn text-xs font-bold tracking-[0.25em] text-primary uppercase">
                OUR CAPABILITIES
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-heading">
              Services We Specialize In
            </h2>
          </div>
          <p className="font-body text-base text-text/70 max-w-sm md:text-right leading-relaxed">
            We provide full-funnel marketing solutions that combine premium creative instincts with rigorous performance science.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group relative bg-cardBg/40 glass p-8 md:p-10 rounded-3xl border border-borderCol/60 transition-all duration-300 hover:shadow-premium cursor-pointer overflow-hidden flex flex-col justify-between min-h-[380px] shadow-sm"
              >
                {/* Subtle corner glow blob on card hover */}
                <div className={`absolute -right-16 -top-16 w-36 h-36 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-500`} />

                <div>
                  {/* Icon Block */}
                  <div className="inline-flex p-3 rounded-2xl bg-secondary text-primary mb-6 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary shadow-sm">
                    <IconComponent size={24} className="stroke-[1.8]" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-heading text-xl font-bold text-heading mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-text/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Sublist & Deliverables */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.deliverables.map((item) => (
                      <span
                        key={item}
                        className="font-btn text-[9px] font-semibold tracking-wider text-text/50 border border-borderCol/60 px-2.5 py-1 rounded-full group-hover:border-primary/30 group-hover:text-primary/70 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Expand CTA */}
                  <div className="flex items-center space-x-2 text-heading text-xs font-bold tracking-widest font-btn transition-colors group-hover:text-primary pt-2">
                    <span>DISCOVER MORE</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
