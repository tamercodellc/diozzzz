'use client';
import React from 'react';
import { AlertCircle } from 'lucide-react';
import { problems } from '@/features/services/googleAds/utils';
import { LeadingSection } from '../../components';
import { motion } from 'framer-motion';
import { GridCardSet, InfoCard, IconButton3D } from '@/components/ui';

export function GoogleAdsProblem() {
    return (
        <section className="relative overflow-hidden w-full">
            <div className="relative bg-gradient-to-r from-transparent via-red-500/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(239,68,68,0.03)]">
                <div className="border-t border-b border-red-500/20 py-[16px] w-full">
                    <div className="border-t border-b border-red-500/20 py-[16px] bg-gradient-to-r from-transparent via-red-500/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
                        <div className='max-w-7xl mx-auto px-4 py-12'>
                            {/* Heading Section with Red Theme */}
                            <div className="text-center mb-16">
                                <div className="flex justify-center mb-4">
                                    <IconButton3D icon={AlertCircle} variant="red" />
                                </div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                                >
                                    Your Money is Burning While <br/>
                                    <span className='heading-gradient-red-bright'>Your Competition Thrives</span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-foreground/80 max-w-2xl mx-auto text-center"
                                >
                                    Most businesses are silently losing money on Google Ads without
                                    realizing it. These issues aren't just affecting your marketing budget
                                    - they're stunting your company's growth and peace of mind. Do any of
                                    these situations sound familiar?
                                </motion.p>
                            </div>

                            {/* Problems Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <GridCardSet row={2}>
                                    {problems.map(({ icon, title, description }, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + index * 0.1 }}
                                        >
                                            <InfoCard
                                                color='red'
                                                description={description}
                                                icon={icon}
                                                title={title}
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