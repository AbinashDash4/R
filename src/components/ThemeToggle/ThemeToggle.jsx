import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-between w-16 h-8 p-1 rounded-full bg-borderCol border border-borderCol cursor-pointer overflow-hidden focus:outline-none"
      aria-label="Toggle Theme"
    >
      {/* Background slide */}
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-primary"
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{
          x: theme === 'dark' ? 32 : 0,
        }}
      />
      
      {/* Sun Icon */}
      <div className={`z-10 flex items-center justify-center w-6 h-6 transition-colors duration-300 ${theme === 'light' ? 'text-secondary' : 'text-text opacity-40'}`}>
        <Sun size={14} className="stroke-[2.5]" />
      </div>

      {/* Moon Icon */}
      <div className={`z-10 flex items-center justify-center w-6 h-6 transition-colors duration-300 ${theme === 'dark' ? 'text-secondary' : 'text-text opacity-40'}`}>
        <Moon size={14} className="stroke-[2.5]" />
      </div>
    </button>
  );
};

export default ThemeToggle;
