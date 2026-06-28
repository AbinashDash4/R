import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Aisha Sharma',
    role: 'VP Marketing, Aurora Beauty',
    brand: 'AURORA BEAUTY',
    quote: "Ripple Creative exceeded every single performance metric we set. Their creators produced visual assets that felt like high-end fashion editorials, which helped elevate our brand positioning across Instagram.",
    rating: 5,
  },
  {
    name: 'Vikram Malhotra',
    role: 'Brand Director, Sonic Lifestyle',
    brand: 'SONIC LIFESTYLE',
    quote: "Collaborating with Ripple was absolute magic. Their performance-first mindset coupled with high-caliber talent management secured a 3.2x ROI on our ANC product launch within 30 days.",
    rating: 5,
  },
  {
    name: 'Nandini Sen',
    role: 'Head of Growth, Mamaearth',
    brand: 'MAMAEARTH',
    quote: "Their hyper-local influencer scaling campaign was executed flawlessly. Ripple provided complete transparency in metric reporting, enabling us to acquire new customers efficiently in Tier 2 cities.",
    rating: 5,
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-36 bg-bg overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header with custom arrow navigations */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="h-[2px] w-8 bg-primary rounded-full" />
              <span className="font-btn text-xs font-bold tracking-[0.25em] text-primary uppercase">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-heading">
              Client Appreciations
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4">
            <button className="swiper-prev-btn w-12 h-12 rounded-full border border-borderCol flex items-center justify-center text-heading hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300">
              <ArrowLeft size={16} />
            </button>
            <button className="swiper-next-btn w-12 h-12 rounded-full border border-borderCol flex items-center justify-center text-heading hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div 
          ref={ref}
          data-cursor="drag"
          className="w-full relative overflow-visible cursor-grab active:cursor-grabbing"
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-next-btn',
              prevEl: '.swiper-prev-btn',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet bg-text opacity-25 w-2 h-2 mx-1 rounded-full inline-block transition-all',
              bulletActiveClass: 'swiper-pagination-bullet-active bg-primary opacity-100 w-6 rounded-md'
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              }
            }}
            className="w-full overflow-visible pb-16"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-cardBg/40 glass p-8 md:p-12 rounded-3xl border border-borderCol/60 h-full flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-premium transition-all duration-300">
                  {/* Quote decoration */}
                  <Quote className="absolute right-8 top-8 text-primary/10 w-24 h-24 stroke-[1] select-none transition-transform duration-700 group-hover:scale-105 group-hover:text-primary/15" />

                  <div className="space-y-6">
                    {/* Stars */}
                    <div className="flex items-center space-x-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="font-body text-sm md:text-base text-text/80 leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Profile Block */}
                  <div className="flex items-center space-x-4 pt-6 border-t border-borderCol/60 mt-8">
                    {/* Initials Avatar */}
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-secondary to-primary/20 text-primary font-heading font-bold flex items-center justify-center text-sm border border-primary/20 shadow-inner">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-heading text-sm">{t.name}</h4>
                      <p className="font-body text-[10px] tracking-wider text-text/50 uppercase mt-0.5">{t.role}</p>
                    </div>
                    <div className="ml-auto hidden sm:block">
                      <span className="font-btn text-[9px] font-extrabold tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {t.brand}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
