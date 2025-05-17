import {
  Benefits,
  FAQ,
  FinalCTA,
  HeroSectionWithImagesGrid,
  HowItWorks,
  Problems,
  Solution,
  Testimonials,
} from '@/features/services/keywordResearch/components';
import {Locations} from '@/features/landing/components';

export default function KeywordResearchComponents() {
  return (
    <main>
      <section>
        <HeroSectionWithImagesGrid />
      </section>
      <section>
        <Locations />
      </section>
      <section>
        <Problems />
      </section>
      <section>
        <Solution />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <FinalCTA />
      </section>
    </main>
  );
}
