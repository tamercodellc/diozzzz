'use client';

import React from 'react';
import { benefits } from '@/features/services/socialMedia/utils';
import { Sparkle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, InfoCard, IconButton3D } from '@/components/ui';

export function Benefits() {
    return (
        <section className='relative w-full overflow-hidden py-12'>
            <div className='container mx-auto px-4'>
                {/* Heading Section with Blue Theme */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <IconButton3D icon={Sparkle} variant="blue" />
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                    >
                        Real Results, <br/>
                        <span className='heading-gradient'>Not Just Promises</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/80 max-w-2xl mx-auto text-center"
                    >
                        Experience tangible improvements in your business with our
                        comprehensive social media management. Here's what you'll
                        achieve:
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className='grid lg:grid-cols-4 sm:grid-cols-2 gap-5 py-6'
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index + benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                        >
                            <Card>
                                <InfoCard
                                    icon={benefit.icon}
                                    title={benefit.title}
                                    description={benefit.description}
                                    index={index}
                                    color='blue'
                                    className='w-full h-full'
                                />
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}