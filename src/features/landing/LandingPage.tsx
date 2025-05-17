'use client';

import {
    Results,
    FAQ,
    Tools,
    ResultsStats,
    Hero,
    Locations,
    Process,
    WhoWeAre,
    Reviews,
    Services,
    Problems,
} from '@/features/landing/components';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const LandingPage = () => {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const backgroundImage =
        currentTheme === 'dark'
            ? "url('/testtt.webp')"
            : "url('/test2.webp')";

    return (
        <div
            className="min-h-screen min-w-full"
            style={{
                position: 'relative',
            }}
        >
            <div
                className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage,
                }}
            />

            <main className="relative z-10">
                <section>
                    <Hero />
                </section>
                <section>
                    <Problems />
                </section>
                <section>
                    <WhoWeAre />
                </section>
                <section>
                    <Results />
                </section>
                <section>
                    <Reviews />
                </section>
                <section>
                    <Tools />
                </section>
                <section>
                    <Locations />
                </section>
                <section>
                    <ResultsStats />
                </section>
                <section>
                    <Process />
                </section>
                <section>
                    <Services />
                </section>
                <section>
                    <FAQ />
                </section>
            </main>
        </div>
    );
};

export default LandingPage;