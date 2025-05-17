import {
  ContentMarketingBenefitsSection,
  ContentMarketingCTASection,
  ContentMarketingFAQSection,
  ContentMarketingHero,
  ContentMarketingProcessSection,
  ContentMarketingServicesGrid,
  ContentMarketingTestimonialsSection,
} from '@/features/services/contentMarketing/components';
import {Locations} from '@/features/landing/components';

const ContentMarketingComponents = () => {
  return (
    <>
      <ContentMarketingHero />
        <section>
            <Locations/>
        </section>
      <section>
        <ContentMarketingServicesGrid />
      </section>
      <section>
        <ContentMarketingBenefitsSection />
      </section>
      <section>
        <ContentMarketingProcessSection />
      </section>
      <section>
        <ContentMarketingTestimonialsSection />
      </section>
      <section>
        <ContentMarketingFAQSection />
      </section>
      <section>
        <ContentMarketingCTASection />
      </section>
    </>
  );
};

export default ContentMarketingComponents;
