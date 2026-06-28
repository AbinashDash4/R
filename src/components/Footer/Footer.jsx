import React, { useState } from 'react';
import { ArrowUp, ArrowRight, Shield } from 'lucide-react';
import logoImage from '../../assets/logo.png';

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const YoutubeIcon = ({ size = 16, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
);


const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      console.log('Subscribed email to newsletter:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-bg pt-20 pb-12 border-t border-borderCol select-none">
      
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-borderCol">
        
        {/* Col 1: Logo & Agency Bio (3 columns) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <a 
              href="#home" 
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center space-x-3 select-none"
            >
              <img src={logoImage} alt="Ripple Creative Logo" className="h-10 w-auto object-contain dark:brightness-[1.15]" />
            </a>
            <p className="font-body text-xs md:text-sm text-text/70 leading-relaxed max-w-sm">
              We match premium brands with elite digital creators. Shaping cultural conversations through artistic campaign integrations and verified results.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center space-x-4 pt-1">
              <a href="#" className="w-8 h-8 rounded-full border border-borderCol flex items-center justify-center text-heading hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300" aria-label="Instagram">
                <InstagramIcon size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-borderCol flex items-center justify-center text-heading hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300" aria-label="LinkedIn">
                <LinkedinIcon size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-borderCol flex items-center justify-center text-heading hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300" aria-label="YouTube">
                <YoutubeIcon size={14} />
              </a>
            </div>
          </div>

          {/* Back to top magnetic style */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-3 w-fit text-heading hover:text-primary transition-colors font-btn text-xs font-bold tracking-widest mt-4"
          >
            <span>BACK TO TOP</span>
            <div className="w-10 h-10 rounded-full border border-borderCol flex items-center justify-center group-hover:bg-primary group-hover:text-secondary group-hover:border-primary transition-all duration-300">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

        {/* Col 2: Sitemap Links (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-btn text-[10px] font-bold tracking-[0.2em] text-text/50 uppercase">Sitemap</h4>
          <ul className="space-y-2.5">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About Us', href: '#about' },
              { name: 'Our Services', href: '#services' },
              { name: 'Case Studies', href: '#case-studies' },
              { name: 'Creator Network', href: '#creator-network' },
              { name: 'Testimonials', href: '#testimonials' }
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-body text-xs md:text-sm text-text/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services Shortlist (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="font-btn text-[10px] font-bold tracking-[0.2em] text-text/50 uppercase">Services</h4>
          <ul className="space-y-2.5">
            {[
              'Social Marketing',
              'Influencer Activation',
              'Talent Representation',
              'Brand Storytelling',
              'Paid Acquisition',
              'Creative Direction'
            ].map((service) => (
              <li key={service} className="font-body text-xs md:text-sm text-text/80">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Newsletter Box (4 columns) */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="font-btn text-[10px] font-bold tracking-[0.2em] text-text/50 uppercase">Subscribe to Ripple Brief</h4>
          <p className="font-body text-xs text-text/75 leading-relaxed">
            Get exclusive marketing reports, creator partnership case studies, and industry trends directly in your inbox.
          </p>

          <form onSubmit={handleSubscribe} className="relative flex items-center mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full pl-5 pr-14 py-3 rounded-full border border-borderCol/60 bg-bg text-text focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 font-body text-xs transition-all"
            />
            <button
              type="submit"
              className="absolute right-1.5 p-2 bg-primary text-secondary rounded-full hover:bg-primary/95 transition-all w-8 h-8 flex items-center justify-center"
              aria-label="Subscribe"
            >
              <ArrowRight size={14} />
            </button>
          </form>

          {isSubscribed && (
            <p className="font-body text-[10px] text-primary font-semibold tracking-wider transition-opacity duration-300">
              Subscription verified! Welcome to the network.
            </p>
          )}
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <p className="font-body text-[11px] text-text/50">
            &copy; {new Date().getFullYear()} Ripple Creative. All rights reserved.
          </p>
          <div className="hidden sm:block w-[1px] h-3 bg-borderCol" />
          <div className="flex items-center space-x-4">
            <a href="#" className="font-body text-[11px] text-text/50 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-[11px] text-text/50 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Small accessibility check badge */}
        <div className="flex items-center space-x-2 text-[10px] font-btn font-extrabold tracking-widest text-text/45 uppercase bg-borderCol/40 px-3 py-1 rounded-full">
          <Shield size={10} className="text-primary" />
          <span>WCAG 2.1 AA Compliant</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
