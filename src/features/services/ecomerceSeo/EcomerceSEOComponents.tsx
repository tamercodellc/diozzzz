import React from 'react';
import {
  EcomerceChallenges,
  EcomerceFinalCTA,
  EcomerceHero,
  EcomerceProcess,
  EcomerceSEOBenefits,
  EcomerceSEOFAQ,
  EcomerceSEOSolutions,
} from '@/features/services/ecomerceSeo/components';
import {Locations} from '@/features/landing/components';
import { ContentMarketingTestimonialsSection } from '../contentMarketing/components';
import { Industries } from '../seo/components';

const EcomerceSEOComponents = () => {
  return (
    <main className="space-y-44">
      <EcomerceHero />
      <section>
        <Locations/>
      </section>
      <section>
        <EcomerceChallenges />
      </section>
      <section>
        <EcomerceSEOSolutions />
      </section>
      <section>
        <EcomerceSEOBenefits />
      </section>
      <section>
        <EcomerceProcess />
      </section>
      <section>
        <ContentMarketingTestimonialsSection />
      </section>
      <section>
        <Industries />
      </section>
      <section>
        <EcomerceSEOFAQ />
      </section>

      <EcomerceFinalCTA />
    </main>
  );
};

export default EcomerceSEOComponents;
