import React from 'react';
import {Locations} from '@/features/landing/components';
import {
  About,
  BusinessTypes,
  CountdownOffer,
  FAQ,
  Features,
  HeroSection,
  Process,
  Schedule,
  ServiceFit,
  ServicesSection,
  TestimonialsMarqueeGrid,
} from './components';

const LocalSeoComponents = () => {
  return (
    <main className='flex flex-col  gap-y-12 '>
      <HeroSection />
      <section>
        <Locations  />
      </section>
      <section>
        <ServicesSection />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Features />
      </section>
      <Process />
      <section>
        <TestimonialsMarqueeGrid />
      </section>
      <section>
        <BusinessTypes />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <Schedule />
      </section>
    </main>
  );
};

export default LocalSeoComponents;
