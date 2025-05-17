'use client';
import React from 'react';
import { benefits } from '@/features/services/googleAds/utils';
import { LeadingSection } from '@/features/services/components';
import { HeartPulse } from 'lucide-react';
import { InfoCard } from '@/components/ui';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export function GoogleAdsBenefits() {
    return (
        <section className="relative overflow-hidden w-full">
            <div className="relative bg-gradient-to-r from-transparent via-blue-500/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(59,130,246,0.03)]">
                <div className="border-t border-b border-blue-500/20 py-[16px] w-full">
                    <div className="border-t border-b border-blue-500/20 py-[16px] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
                        <div className='max-w-7xl mx-auto px-4 py-12'>
                            {/* Heading Section with Blue Theme */}
                            <div className="text-center mb-16">
                                <div className="flex justify-center mb-4">
                                    <IconButton3D icon={HeartPulse} variant="blue" />
                                </div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                                >
                                    Benefits That Transform <br/>
                                    <span className='heading-gradient'>Your Google Ads Investment</span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-foreground/80 max-w-2xl mx-auto text-center"
                                >
                                    Experience the difference of professionally managed campaigns that deliver real results
                                </motion.p>
                            </div>

                            {/* Benefits Grid */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-4"
                            >
                                {benefits.map(({ icon, description, title }, index) => (
                                    <motion.div
                                        key={title + index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                    >
                                        <InfoCard
                                            color='blue'
                                            description={description}
                                            icon={icon}
                                            title={title}
                                            index={index}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}