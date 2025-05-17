'use client';
import React from 'react';
import { challenges } from '@/features/services/seoAuditServices/utils';
import { IconWorldWww } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { GridCardSet, InfoCard, IconButton3D } from '@/components/ui';

export function SEOChallenges() {
    return (
        <section className="relative overflow-hidden w-full">
            <div className="relative bg-gradient-to-r from-transparent via-red-500/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(239,68,68,0.03)]">
                <div className="border-t border-b border-red-500/20 py-[16px] w-full">
                    <div className="border-t border-b border-red-500/20 py-[16px] bg-gradient-to-r from-transparent via-red-500/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
                        <div className='max-w-7xl mx-auto px-4 py-12'>
                            {/* Heading Section with Red Theme */}
                            <div className="text-center mb-16">
                                <div className="flex justify-center mb-4">
                                    <IconButton3D icon={IconWorldWww} variant="red" />
                                </div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                                >
                                    When SEO Feels Like <br/>
                                    <span className='heading-gradient-red-bright'>an Uphill Battle</span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-foreground/80 max-w-2xl mx-auto text-center"
                                >
                                    The hardest part? Knowing something's wrong with your SEO but not being able to pinpoint exactly what.
                                    These are the challenges we see businesses struggle with every day - and they're all solvable.
                                </motion.p>
                            </div>

                            {/* Challenges Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <GridCardSet row={3}>
                                    {challenges.map((challenge, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + index * 0.1 }}
                                        >
                                            <InfoCard
                                                color='red'
                                                description={challenge.description}
                                                icon={challenge.icon}
                                                title={challenge.title}
                                                index={index}
                                                className='min-w-72 h-72'
                                            />
                                        </motion.div>
                                    ))}
                                </GridCardSet>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}