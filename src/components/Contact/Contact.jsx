import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const YoutubeIcon = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);


const Contact = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Contact form data submitted:', data);
    setIsSubmitSuccess(true);
    reset();
    setTimeout(() => {
      setIsSubmitSuccess(false);
    }, 5000);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 md:py-36 bg-cardBg/10 border-t border-borderCol overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(211,150,140,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Side: Contact Information & Socials */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2">
              <span className="h-[2px] w-8 bg-primary rounded-full" />
              <span className="font-btn text-xs font-bold tracking-[0.25em] text-primary uppercase">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-heading">
              Let's Co-create<br />Something Iconic.
            </h2>

            <p className="font-body text-base text-text/70 leading-relaxed max-w-sm">
              Ready to create ripples across the digital space? Drop us a line, and our partnerships team will reach out within 24 hours.
            </p>
          </div>

          {/* Details Lists */}
          <div className="space-y-6">
            <a 
              href="mailto:hello@ripplecreative.com" 
              className="flex items-center space-x-4 p-4 rounded-2xl bg-cardBg/40 border border-borderCol/60 hover:border-primary shadow-sm hover:shadow-premium transition-all duration-300 w-fit"
            >
              <div className="p-3 bg-secondary text-primary rounded-xl">
                <Mail size={18} />
              </div>
              <div>
                <p className="font-body text-[9px] tracking-wider text-text/40 uppercase">Email Us</p>
                <p className="font-heading font-bold text-heading text-sm">hello@ripplecreative.com</p>
              </div>
            </a>

            <a 
              href="tel:+919876543210" 
              className="flex items-center space-x-4 p-4 rounded-2xl bg-cardBg/40 border border-borderCol/60 hover:border-primary shadow-sm hover:shadow-premium transition-all duration-300 w-fit"
            >
              <div className="p-3 bg-secondary text-primary rounded-xl">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-body text-[9px] tracking-wider text-text/40 uppercase">Call Us</p>
                <p className="font-heading font-bold text-heading text-sm">+91 98765 43210</p>
              </div>
            </a>

            <a 
              href="https://maps.google.com/?q=Mehrauli+Creative+District,+New+Delhi,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-2xl bg-cardBg/40 border border-borderCol/60 hover:border-primary shadow-sm hover:shadow-premium transition-all duration-300 w-fit group/card"
            >
              <div className="p-3 bg-secondary text-primary rounded-xl group-hover/card:bg-primary group-hover/card:text-secondary transition-colors">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-body text-[9px] tracking-wider text-text/40 uppercase">HQ Studio (View Map)</p>
                <p className="font-heading font-bold text-heading text-sm">Mehrauli Creative District, New Delhi, India</p>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-btn text-[10px] font-bold tracking-[0.2em] text-text/50 uppercase">FOLLOW OUR JOURNEY</h4>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-borderCol flex items-center justify-center text-heading hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300">
                <InstagramIcon size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-borderCol flex items-center justify-center text-heading hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300">
                <LinkedinIcon size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-borderCol flex items-center justify-center text-heading hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300">
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-cardBg/50 glass p-8 md:p-12 rounded-3xl border border-borderCol/60 shadow-premium relative">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name Input */}
              <div className="flex flex-col space-y-2">
                <label className="font-btn text-xs font-bold text-heading tracking-wider uppercase" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Minimum 2 characters' } })}
                  className="px-5 py-4 rounded-xl border border-borderCol bg-bg/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 font-body text-sm transition-all"
                />
                {errors.name && (
                  <span className="text-accent font-body text-xs mt-1">{errors.name.message}</span>
                )}
              </div>

              {/* Email Input */}
              <div className="flex flex-col space-y-2">
                <label className="font-btn text-xs font-bold text-heading tracking-wider uppercase" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register('email', { 
                    required: 'Email is required', 
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } 
                  })}
                  className="px-5 py-4 rounded-xl border border-borderCol bg-bg/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 font-body text-sm transition-all"
                />
                {errors.email && (
                  <span className="text-accent font-body text-xs mt-1">{errors.email.message}</span>
                )}
              </div>

              {/* Brand/Company Input */}
              <div className="flex flex-col space-y-2">
                <label className="font-btn text-xs font-bold text-heading tracking-wider uppercase" htmlFor="company">
                  Company / Brand
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Enter your company name (Optional)"
                  {...register('company')}
                  className="px-5 py-4 rounded-xl border border-borderCol bg-bg/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 font-body text-sm transition-all"
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col space-y-2">
                <label className="font-btn text-xs font-bold text-heading tracking-wider uppercase" htmlFor="message">
                  Message Details
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us about your project, goals, or budget..."
                  {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Minimum 10 characters required' } })}
                  className="px-5 py-4 rounded-xl border border-borderCol bg-bg/50 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 font-body text-sm transition-all resize-none"
                />
                {errors.message && (
                  <span className="text-accent font-body text-xs mt-1">{errors.message.message}</span>
                )}
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full group py-4 bg-primary text-secondary rounded-xl font-btn text-xs font-bold tracking-widest flex items-center justify-center space-x-2 transition-all duration-300 hover:bg-primary/95 shadow-lg shadow-primary/10 hover:shadow-primary/20"
              >
                <span>SEND INQUIRY</span>
                <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

            </form>

            {/* Success Toast Overlays */}
            <AnimatePresence>
              {isSubmitSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-cardBg/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-8 text-center border border-borderCol z-20"
                >
                  <div className="p-4 bg-primary/20 text-primary rounded-full mb-4">
                    <CheckCircle size={40} className="stroke-[2.5]" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-heading">Message Dispatched!</h3>
                  <p className="font-body text-sm text-text/75 mt-2 max-w-sm leading-relaxed">
                    Thank you for reaching out. A Ripple partnerships executive has been assigned to your brand and will contact you within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
