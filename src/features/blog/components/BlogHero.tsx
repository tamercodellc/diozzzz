'use client';
import type React from 'react'; // Import React
import {Globe as GlobeComponent} from './ui/globe';
import {motion, useInView} from 'framer-motion';
import {BlogNewsletter} from '@/features/blog/components';
import {useRef} from "react";

export function BlogHero() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <motion.section
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
            className='relative overflow-hidden items-center justify-center pt-36 pb-0 flex flex-col'
        >
            {/* Globe Container - Positioned behind content */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1, delay: 0.5}}
                className='absolute inset-x-0 top-1/4 w-full max-w-6xl mx-auto overflow-visible'
            >
                <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]">
                    <div className='absolute top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px]'>
                        <GlobeComponent/>
                    </div>
                </div>
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.2}}
                className='max-w-7xl mx-auto px-4 relative z-10'
            >
                <div className='flex flex-col items-center text-center' ref={sectionRef}>
                    <motion.h1
                        className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 px-4 sm:px-0'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        Worldwide  <span className='heading-gradient'> SEO and Digital</span> Insights
                    </motion.h1>

                    <motion.p
                        className="relative z-10 mx-auto mt-2 max-w-2xl text-center text-sm md:text-lg text-foreground backdrop-filter backdrop-blur-md p-1 rounded-lg mb-6 text-pretty"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
                    >
                        Discover global strategies, tips, and trends in SEO and digital
                        marketing. Our blog covers everything you need to succeed in the
                        ever-evolving digital world, connecting you with insights that work
                        across borders.
                    </motion.p>
                </div>
            </motion.div>
            <BlogNewsletter/>
        </motion.section>
    );
}