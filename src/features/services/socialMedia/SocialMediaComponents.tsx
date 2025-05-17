import React from 'react';
import {
  Benefits,
  Faqs,
  ModernHeroWithGradients,
  PainPoints,
  ProcessSteps,
  SocialImportance,
  SocialMediaBusinessTypes,
  Solution,
  SubscriptionForm,
    Testimonials
} from '@/features/services/socialMedia/components';
import {Locations} from '@/features/landing/components';

const SocialMediaComponents = () => {
  return (
    <main>
      <ModernHeroWithGradients />
      <section>
        <Locations />
      </section>
      <section>
        <PainPoints />
      </section>
      <section>
        <SocialImportance />
      </section>
      <section>
        <Solution />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <ProcessSteps />
      </section>
      <section>
        <SocialMediaBusinessTypes />
      </section>
       <Testimonials />
      <Faqs />
      <SubscriptionForm />
    </main>
  );
};

export default SocialMediaComponents;
