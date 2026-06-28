import React, { useState, useEffect } from 'react';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../../assets/logo.png';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Creator Network', href: '#creator-network' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const scrollDirection = useScrollDirection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple intersection-like detection for active nav item
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveItem(item.name);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setActiveItem(name);
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'glass py-4 shadow-sm border-b' 
            : 'bg-transparent py-6 border-b border-transparent'
        } ${
          scrollDirection === 'down' && isScrolled && !isMobileMenuOpen
            ? '-translate-y-full'
            : 'translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home', 'Home')}
            className="flex items-center space-x-3 select-none"
          >
            <img src={logoImage} alt="Ripple Creative Logo" className="h-10 md:h-12 w-auto object-contain dark:brightness-[1.15]" />
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.name)}
                className={`relative font-body text-sm font-medium tracking-wider transition-colors duration-300 py-1 ${
                  activeItem === item.name ? 'text-primary' : 'text-text hover:text-primary'
                }`}
              >
                {item.name}
                {activeItem === item.name && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center space-x-6">
            <ThemeToggle />
            <button
              onClick={() => window.dispatchEvent(new Event('open-calendly'))}
              className="group relative px-6 py-2.5 bg-primary text-secondary rounded-full overflow-hidden font-btn text-xs font-bold tracking-widest flex items-center space-x-2 transition-all duration-300 shadow-md hover:shadow-primary/20"
            >
              <span className="relative z-10 transition-transform duration-300">BOOK A SESSION</span>
              <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-heading hover:bg-borderCol transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg w-full h-screen pt-28 px-6 flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={(e) => handleNavClick(e, item.href, item.name)}
                  className={`font-heading text-4xl font-semibold tracking-wide ${
                    activeItem === item.name ? 'text-primary' : 'text-text'
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="pb-12 pt-8 border-t border-borderCol">
              <p className="font-body text-xs tracking-widest text-text opacity-40 mb-4 uppercase">CREATOR FIRST. ALWAYS.</p>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.dispatchEvent(new Event('open-calendly'));
                }}
                className="w-full py-4 bg-primary text-secondary rounded-full font-btn text-sm font-bold tracking-widest flex items-center justify-center space-x-2"
              >
                <span>BOOK A SESSION</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
