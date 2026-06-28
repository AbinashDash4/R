import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover', 'view', 'drag'
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Apply spring physics for trailing effect
  const springConfig = { damping: 40, stiffness: 400, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show on desktop/pointer devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);
    document.body.classList.add('custom-cursor-enabled');

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // Track hovered elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        setCursorType(type || 'hover');
      } else if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('button') || 
        e.target.closest('a') ||
        e.target.classList.contains('swiper-button-next') ||
        e.target.classList.contains('swiper-button-prev')
      ) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  // Render variant styles based on state
  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: 'transparent',
      borderColor: 'var(--primary)',
      borderWidth: '2px',
    },
    hover: {
      width: 48,
      height: 48,
      backgroundColor: 'var(--primary)',
      borderColor: 'var(--primary)',
      opacity: 0.35,
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: 'var(--accent)',
      borderColor: 'var(--accent)',
      color: '#FFFFFF',
      mixBlendMode: 'normal',
    },
    drag: {
      width: 80,
      height: 80,
      backgroundColor: 'var(--primary)',
      borderColor: 'var(--primary)',
      color: 'var(--secondary)',
      mixBlendMode: 'normal',
    }
  };

  return (
    <>
      {/* Outer follow circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 overflow-hidden border font-btn text-[10px] font-bold tracking-widest text-center"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={variants[cursorType] || variants.default}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
      >
        {cursorType === 'view' && <span className="text-white select-none">VIEW</span>}
        {cursorType === 'drag' && <span className="select-none">DRAG</span>}
      </motion.div>

      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: cursorType !== 'default' ? 0 : 1,
        }}
      />
    </>
  );
};

export default Cursor;
