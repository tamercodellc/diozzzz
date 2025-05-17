import {
  Hero,
  SEOChallenges,
  ImTheSolution,
  ResultsShowcase,
  SEOBenefits,
  SEOProcess,
  ReviewsSection,
  BusinessTypes,
  FAQ,
} from '@/features/services/seoAuditServices/components';
import {Locations} from '@/features/landing/components';

export default function SEOAuditServicesComponents() {
  return (
    <main>
      <Hero />
      <section>
        <Locations/>
      </section>
      <section>
        <SEOChallenges />
      </section>
      <section>
        <ImTheSolution />
      </section>
      <section>
        <ResultsShowcase />
      </section>
      <section>
        <SEOBenefits />
      </section>
      <section>
        <SEOProcess />
      </section>

      <section>
        <ReviewsSection />
      </section>
      <section>
        <BusinessTypes />
      </section>
      <section>
        <FAQ />
      </section>
    </main>
  );
}
