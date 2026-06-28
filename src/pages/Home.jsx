import React from 'react';
import Hero from '../components/Hero/Hero';
import TrustedBrands from '../components/TrustedBrands/TrustedBrands';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import CaseStudies from '../components/CaseStudies/CaseStudies';
import CreatorNetwork from '../components/CreatorNetwork/CreatorNetwork';
import Blog from '../components/Blog/Blog';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <About />
      <Services />
      <CaseStudies />
      <CreatorNetwork />
      <Blog />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
