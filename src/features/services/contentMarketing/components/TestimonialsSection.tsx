'use client';

import React, { useRef } from 'react';
import { AnimatedTestimonials } from '@/features/services/contentMarketing/ui';
import { testimonials } from '../utils';
import { FaSpeakerDeck } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export const ContentMarketingTestimonialsSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section className="relative overflow-hidden w-full">
            <div className="relative bg-gradient-to-r from-transparent via-blue-500/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(59,130,246,0.03)]">
                <div className="border-t border-b border-blue-500/20 py-[16px] w-full">
                    <div className="border-t border-b border-blue-500/20 py-[16px] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
                        <div ref={sectionRef} className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                            {/* Heading Section with IconButton3D */}
                            <div className="text-center mb-16">
                                <div className="flex justify-center mb-4">
                                    <IconButton3D icon={FaSpeakerDeck} variant="blue" />
                                </div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                                >
                                    Real Results from <br/>
                                    <span className='heading-gradient'>Real Clients</span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
                                    className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
                                >
                                    See how our content marketing strategies have transformed businesses
                                    and delivered measurable results across different industries.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
                            >
                                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};