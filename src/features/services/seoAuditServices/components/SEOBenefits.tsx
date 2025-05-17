'use client';
import React from 'react';
import { benefits } from '../utils/Benefits.const';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { CardHoverTopBorder, GridCardSet, InfoCard, IconButton3D } from '@/components/ui';

export function SEOBenefits() {
    return (
        <div className='w-full py-24'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Heading Section with styled text */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <IconButton3D icon={Heart} />
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                    >
                        Benefits of <span className='heading-gradient'>Professional SEO Audits</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/80 max-w-2xl mx-auto text-center mb-10"
                    >
                        Discover hidden opportunities and unlock your website's full potential with our comprehensive SEO audit service.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <GridCardSet row={3}>
                        {benefits.map(({ icon: IconElement, description, title }, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                            >
                                <CardHoverTopBorder
                                    index={index}
                                    className='bg-transparent'
                                >
                                    <InfoCard
                                        icon={IconElement}
                                        title={title}
                                        description={description}
                                        color='blue'
                                        className='h-96 md:h-64'
                                    />
                                </CardHoverTopBorder>
                            </motion.div>
                        ))}
                    </GridCardSet>
                </motion.div>
            </div>
        </div>
    );
}