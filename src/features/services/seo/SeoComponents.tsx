import {
    Benefits,
    CTA,
    FAQ,
    Hero,
    Industries,
    Problem,
    Process,
    Solution,
} from '@/features/services/seo/components';
import {TestimonialsMasonryGrid} from './components/Testimonials';
import {Locations} from '@/features/landing/components';

export default function SEOComponents() {
    return (
        <>
            <Hero/>
            <section>
                <Locations/>
            </section>
            <section>
                <Problem/>
            </section>
            <section>
                <Solution/>
            </section>
            <section>
                <Benefits/>
            </section>
            <section>
                <Industries/>
            </section>
            <section>
                <Process/>
            </section>
            <section>
                <TestimonialsMasonryGrid/>
            </section>
            <section>
                <FAQ/>
            </section>
            <CTA/>
        </>
    );
}
