import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const textRef = useRef(null);
  const progressWords = ["INNOVATION", "CREATION", "STRATEGY", "INFLUENCE", "RIPPLE"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loader is active
    document.body.classList.add('overflow-hidden');

    // Word rotation sequence
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev < progressWords.length - 1 ? prev + 1 : prev));
    }, 450);

    // Number count-up sequence
    const counterObj = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        clearInterval(wordInterval);
        
        // Slide out animation
        gsap.to(containerRef.current, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: () => {
            document.body.classList.remove('overflow-hidden');
            onComplete();
          }
        });
      }
    });

    tl.to(counterObj, {
      value: 100,
      duration: 2.2,
      ease: 'power3.inOut',
      onUpdate: () => {
        setCount(Math.floor(counterObj.value));
      }
    });

    // Stagger text entry
    gsap.fromTo(textRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    return () => {
      clearInterval(wordInterval);
      document.body.classList.remove('overflow-hidden');
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#08110D] text-[#F7F4D5] p-10 select-none"
    >
      <div className="w-full flex justify-between items-center text-xs font-btn tracking-[0.2em] opacity-60">
        <span>RIPPLE CREATIVE AGENCY</span>
        <span>EST. 2026</span>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 ref={textRef} className="font-heading text-5xl md:text-8xl tracking-wider select-none mb-4 font-bold">
          {progressWords[currentWordIndex]}
        </h1>
        <div className="h-[1px] w-32 bg-[#F7F4D5] opacity-20 relative overflow-hidden mt-4">
          <div 
            className="absolute left-0 top-0 bottom-0 bg-accent transition-all duration-100 ease-out" 
            style={{ width: `${count}%` }}
          />
        </div>
      </div>

      <div className="w-full flex justify-between items-end">
        <div className="text-left font-btn text-xs tracking-wider opacity-60">
          <span>PORTFOLIO SHOWCASE</span>
          <br />
          <span>IND-DELHI</span>
        </div>
        <div ref={counterRef} className="font-heading text-6xl md:text-9xl leading-none font-bold">
          {count.toString().padStart(3, '0')}%
        </div>
      </div>
    </div>
  );
};

export default Loader;
