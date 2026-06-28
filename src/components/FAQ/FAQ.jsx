import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does Ripple Creative select influencers for brand campaigns?",
    answer: "We utilize a proprietary evaluation framework that filters creators based on verified audience demographics, historical engagement quality, content aesthetic alignment, and brand safety. We avoid vanity metrics, prioritizing real engagement and qualitative resonance to match your brand's unique ethos."
  },
  {
    question: "What social media platforms does your agency manage?",
    answer: "Our core campaigns run on Instagram (focusing on high-engagement Reels, Stories, and static carousels) and YouTube (including Shorts, dedicated reviews, and mid-roll integrations). We also orchestrate B2B influencer campaigns on LinkedIn for executive and corporate branding."
  },
  {
    question: "How do you track and verify campaign performance?",
    answer: "Every activation is equipped with custom tracking links, unique creator promo codes, and pixel integrations. We provide comprehensive campaign dashboards reporting real-time metrics including actual Reach, Cost-Per-View (CPV), Click-Through-Rates (CTR), and direct conversion ROAS."
  },
  {
    question: "What is the typical timeline to launch a creator campaign?",
    answer: "A standard campaign takes between 3 to 5 weeks from brief to launch. This includes candidate matchmaking, contract negotiations, brief alignment, creator product dispatch, content production, strict visual QA checks, and scheduled publishing."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="py-24 md:py-36 bg-cardBg/10 border-t border-borderCol overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Title */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="h-[2px] w-8 bg-primary rounded-full" />
            <span className="font-btn text-xs font-bold tracking-[0.25em] text-primary uppercase">
              COMMON QUESTIONS
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight text-heading">
            AI Search & Insights FAQ
          </h2>
          <p className="font-body text-xs md:text-sm text-text/60 mt-3">
            Quick, clear answers about our workflows, creator matchmaking, and performance reporting.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-cardBg/40 glass rounded-2xl border border-borderCol/60 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 md:py-6 text-left focus:outline-none group"
                >
                  <span className="font-heading font-bold text-base md:text-lg text-heading group-hover:text-primary transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className="p-1.5 rounded-full bg-secondary/80 text-primary transition-colors group-hover:bg-primary group-hover:text-secondary flex-shrink-0">
                    {isOpen ? <Minus size={14} className="stroke-[2.5]" /> : <Plus size={14} className="stroke-[2.5]" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-borderCol/40 font-body text-sm text-text/75 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
