import React from 'react';

const brands = [
  { name: 'Samsung', style: 'font-sans font-bold tracking-tight text-xl md:text-2xl' },
  { name: 'boAt', style: 'font-sans font-black italic text-xl md:text-2xl' },
  { name: 'Zomato', style: 'font-serif font-extrabold italic text-red-500 text-xl md:text-2xl' },
  { name: 'Mamaearth', style: 'font-sans font-semibold text-emerald-600 text-lg md:text-xl' },
  { name: 'Lakmé', style: 'font-serif tracking-widest text-lg md:text-xl uppercase' },
  { name: 'Coca Cola', style: 'font-serif italic font-bold text-red-600 text-xl md:text-2xl' },
  { name: 'Puma', style: 'font-sans font-black tracking-tighter text-xl md:text-2xl uppercase italic' },
  { name: 'Swiggy', style: 'font-sans font-extrabold text-orange-500 text-xl md:text-2xl italic' },
  { name: 'Blinkit', style: 'font-sans font-black text-yellow-500 bg-black px-2 py-0.5 rounded text-base md:text-lg' },
  { name: 'Amazon', style: 'font-sans font-black tracking-tight text-xl md:text-2xl lowercase' },
  { name: 'Myntra', style: 'font-sans font-extrabold text-pink-600 text-xl md:text-2xl' },
  { name: 'Nykaa', style: 'font-serif font-black text-pink-500 text-xl md:text-2xl uppercase' },
  { name: 'Netflix', style: 'font-sans font-black text-red-600 tracking-tighter text-2xl md:text-3xl' },
  { name: 'Spotify', style: 'font-sans font-bold tracking-tight text-green-500 text-xl md:text-2xl' },
  { name: 'Meta', style: 'font-sans font-semibold tracking-tight text-blue-500 text-xl md:text-2xl' },
  { name: 'Google', style: 'font-sans font-medium tracking-tight text-xl md:text-2xl' },
  { name: 'Adobe', style: 'font-sans font-extrabold tracking-widest text-lg md:text-xl uppercase' }
];

const TrustedBrands = () => {
  // Duplicate list to ensure seamless looping
  const doubleBrands = [...brands, ...brands];

  return (
    <section className="w-full py-14 bg-cardBg/20 glass border-y border-borderCol/60 overflow-hidden select-none shadow-premium relative z-30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6 text-center">
        <h2 className="font-btn text-[9px] font-bold tracking-[0.25em] text-text/50 uppercase">
          INDUSTRY LEADERS TRUST US
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full flex items-center overflow-hidden">
        {/* Left & Right fading overlays for premium Awwwards style */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-36 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-36 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />


        <div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-24">
          {doubleBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center min-w-[120px] md:min-w-[150px] transition-all duration-300 filter grayscale opacity-45 hover:grayscale-0 hover:opacity-100 cursor-pointer"
            >
              <span className={`text-text ${brand.style}`}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
