import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const CountUpComponent = typeof CountUp === 'function' ? CountUp : CountUp.default;


const creators = [
  { id: 1, name: 'Aarav S.', category: 'Tech & Gaming', x: '15%', y: '25%', size: 'w-12 h-12 md:w-16 md:h-16', delay: 0.1, color: 'bg-emerald-500/20' },
  { id: 2, name: 'Riya K.', category: 'Fashion & Beauty', x: '80%', y: '20%', size: 'w-14 h-14 md:w-20 md:h-20', delay: 0.2, color: 'bg-pink-500/20' },
  { id: 3, name: 'Kabir M.', category: 'Travel & Lifestyle', x: '12%', y: '65%', size: 'w-14 h-14 md:w-20 md:h-20', delay: 0.3, color: 'bg-amber-500/20' },
  { id: 4, name: 'Ananya D.', category: 'Food & Culinary', x: '82%', y: '70%', size: 'w-12 h-12 md:w-16 md:h-16', delay: 0.4, color: 'bg-red-500/20' },
  { id: 5, name: 'Dev R.', category: 'Fitness & Health', x: '45%', y: '15%', size: 'w-10 h-10 md:w-14 md:h-14', delay: 0.5, color: 'bg-blue-500/20' },
  { id: 6, name: 'Meera P.', category: 'Finance & Career', x: '48%', y: '80%', size: 'w-10 h-10 md:w-14 md:h-14', delay: 0.6, color: 'bg-indigo-500/20' },
];

const CreatorNetwork = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section 
      id="creator-network" 
      className="relative py-24 md:py-36 bg-cardBg/20 border-y border-borderCol overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Node Network Graphic */}
        <div className="lg:col-span-6 relative h-[380px] md:h-[450px] bg-cardBg/25 glass rounded-3xl border border-borderCol/60 shadow-premium overflow-hidden flex items-center justify-center">
          
          {/* Animated SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Center-to-Nodes connection lines */}
            <motion.line x1="50%" y1="50%" x2="15%" y2="25%" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }} className="opacity-40" />
            <motion.line x1="50%" y1="50%" x2="80%" y2="20%" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }} className="opacity-40" />
            <motion.line x1="50%" y1="50%" x2="12%" y2="65%" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }} className="opacity-40" />
            <motion.line x1="50%" y1="50%" x2="82%" y2="70%" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }} className="opacity-40" />
            <motion.line x1="50%" y1="50%" x2="45%" y2="15%" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }} className="opacity-40" />
            <motion.line x1="50%" y1="50%" x2="48%" y2="80%" stroke="var(--primary)" strokeWidth="1.5" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }} className="opacity-40" />
          </svg>

          {/* Central Ripple Node */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="absolute z-20 w-24 h-24 rounded-full bg-primary flex flex-col items-center justify-center text-secondary border border-secondary/20 shadow-2xl"
          >
            <span className="font-heading font-black text-3xl">R</span>
            <span className="font-btn text-[8px] font-extrabold tracking-widest leading-none mt-1">RIPPLE</span>
          </motion.div>
          <div className="absolute w-36 h-36 border border-primary/20 rounded-full animate-ping pointer-events-none" />

          {/* Floating Creator Avatar Nodes */}
          {creators.map((c) => (
            <motion.div
              key={c.id}
              style={{ left: c.x, top: c.y }}
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: c.delay, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.1 }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-borderCol/60 flex flex-col items-center justify-center p-1 glass shadow-premium cursor-pointer ${c.size} ${c.color} group/node`}
            >
              {/* Inner Initials */}
              <span className="font-heading font-bold text-xs md:text-sm text-heading select-none relative z-10">
                {c.name.split(' ')[0][0]}
                {c.name.split(' ')[1]?.[0] || ''}
              </span>

              {/* Pulsing ring on hover */}
              <div className="absolute inset-0 rounded-full border border-primary/20 group-hover/node:animate-ping pointer-events-none" />

              {/* Hover Tooltip Overlay */}
              <div className="absolute bottom-full mb-2 bg-heading text-secondary font-body text-[10px] py-1.5 px-3 rounded-lg shadow-xl opacity-0 scale-75 group-hover/node:opacity-100 group-hover/node:scale-100 pointer-events-none transition-all duration-300 whitespace-nowrap z-30">
                <p className="font-bold">{c.name}</p>
                <p className="opacity-75">{c.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Headline and Stats */}
        <div ref={ref} className="lg:col-span-6 flex flex-col space-y-8">
          <div className="inline-flex items-center space-x-2">
            <span className="h-[2px] w-8 bg-primary rounded-full" />
            <span className="font-btn text-xs font-bold tracking-[0.25em] text-primary uppercase">
              CREATOR COMMUNITY
            </span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-heading">
            Our Elite Creator Network
          </h2>

          <p className="font-body text-base text-text/80 leading-relaxed">
            We represent and collaborate with India's most influential creative minds. From luxury lifestyle vloggers to cutting-edge tech reviewers, we nurture authentic, high-impact channels.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 py-6 border-y border-borderCol">
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-heading">
                {inView ? <CountUpComponent end={10000} duration={3} separator="," /> : '0'}+
              </h3>
              <p className="font-body text-[10px] tracking-wider text-text/50 uppercase mt-1">Creators</p>
            </div>
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-heading">
                {inView ? <CountUpComponent end={200} duration={3} /> : '0'}+
              </h3>
              <p className="font-body text-[10px] tracking-wider text-text/50 uppercase mt-1">Cities</p>
            </div>
            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-heading">
                {inView ? <CountUpComponent end={8} duration={3} /> : '0'}+
              </h3>
              <p className="font-body text-[10px] tracking-wider text-text/50 uppercase mt-1">Niche Verticals</p>
            </div>
          </div>

          {/* Verification Badge & CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
            <div className="flex items-center space-x-3 bg-secondary/60 border border-primary/10 px-4 py-2.5 rounded-full select-none">
              <ShieldCheck className="text-primary stroke-[2.5]" size={18} />
              <span className="font-btn text-[10px] font-extrabold tracking-widest text-primary uppercase">
                100% VERIFIED ENGAGEMENT
              </span>
            </div>
            <a
              href="#contact"
              className="group flex items-center space-x-2 px-8 py-4 bg-primary text-secondary rounded-full font-btn text-xs font-bold tracking-widest transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
            >
              <span>JOIN NETWORK</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreatorNetwork;
