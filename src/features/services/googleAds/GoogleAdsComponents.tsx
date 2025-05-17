import {
    GoogleAdsBenefits,
    GoogleAdsBusinessTypes,
    GoogleAdsCTA,
    GoogleAdsFAQ,
    GoogleAdsHero,
    GoogleAdsProblem,
    GoogleAdsProcess,
    GoogleAdsReviews,
    GoogleAdsSolution,
} from '@/features/services/googleAds/components';
import { Locations } from '@/features/landing/components';

export default function GoogleAdsComponents() {
    return (
        <main>
            <GoogleAdsHero />
            <section>
                <Locations />
            </section>
            <section>
                <GoogleAdsProblem />
            </section>
            <section>
                <GoogleAdsSolution />
            </section>
            <section>
                <GoogleAdsBenefits />
            </section>
            <section>
                <GoogleAdsProcess />
            </section>
            <section>
                <GoogleAdsReviews />
            </section>
            <section>
                <GoogleAdsBusinessTypes />
            </section>
            <section>
                <GoogleAdsFAQ />
            </section>
            <section>
                <GoogleAdsCTA />
            </section>
        </main>
    );
}