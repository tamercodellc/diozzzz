import { siteMetadata } from '@/lib';
import AboutHero from '@/features/about/components/AboutHero';
import CoreValues from '@/features/about/components/CoreValues';
import TeamSection from '@/features/about/components/TeamSection';
import { TimelineDemo } from '@/features/about/components/TimelineDemo';
import VisionSection from '@/features/about/components/VisionSection';
import CTASection from '@/features/about/components/CTASection';
import { Breadcrumb } from "@/components";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about who we are, what we do, and our journey.',
    alternates: {
        canonical: `${siteMetadata.siteUrl}/about-us`,
    },
    openGraph: {
        title: 'About Us',
        description: 'Learn about who we are, what we do, and our journey.',
        url: `${siteMetadata.siteUrl}/about-us`,
        siteName: siteMetadata.siteName,
        images: [
            {
                url: `${siteMetadata.siteUrl}/images/about-us-cover.webp`,
                width: 1200,
                height: 630,
                alt: 'About Us Image',
            },
        ],
        locale: siteMetadata.locale,
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        creator: siteMetadata.twitterHandle,
        title: 'About Us',
        description: 'Learn about who we are, what we do, and our journey.',
        images: [`${siteMetadata.siteUrl}/images/about-us-cover.webp`],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function About() {
    return (
        <main>
            <AboutHero />
            <section className="flex items-center justify-center bg-transparent md:-mb-44">
                <Breadcrumb className="bg-transparent relative" />
            </section>
            <section>
                <CoreValues />
            </section>
            <section>
                <TeamSection />
            </section>
            <section>
                <TimelineDemo />
            </section>
            <section>
                <VisionSection />
            </section>
            <section>
                <CTASection />
            </section>
        </main>
    );
}
