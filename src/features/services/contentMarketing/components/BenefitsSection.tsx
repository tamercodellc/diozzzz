
'use client';
import Image from 'next/image';
import {
    benefits,
    integrations,
} from '@/features/services/contentMarketing/utils';
import { HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export const ContentMarketingBenefitsSection = () => {
    return (
        <section className='relative py-12 overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
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
                        Elevate Your Brand Through <br/>
                        <span className='heading-gradient'>Strategic Content Marketing</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
                    >
                        Transform your marketing strategy with comprehensive content solutions
                        that drive engagement, build authority, and generate measurable
                        business results. Our integrated approach ensures your content works
                        harder at every stage of the customer journey.
                    </motion.p>

                    {/* Integration Section moved up */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className='flex justify-center gap-4 mt-6'
                    >
                        {integrations.map((integration, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                            >
                                <div className='flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl p-3 hover:bg-primary/20 transition-colors duration-300'>
                                    {integration.icon}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Benefits Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-32'
                >
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className='bg-card rounded-xl overflow-hidden border border-foreground/5 hover:border-foreground/10 transition-colors duration-300 shadow-sm'
                        >
                            {/* Image Container */}
                            <div className='relative h-48 w-full'>
                                <Image
                                    src={benefit.image}
                                    alt={benefit.title}
                                    fill
                                    className='w-full h-full object-cover'
                                />
                            </div>

                            {/* Content */}
                            <div className='p-6'>
                                <h3 className='text-xl font-semibold mb-4'>{benefit.title}</h3>
                                <p className='text-foreground/80'>{benefit.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Conclusion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className='text-center max-w-3xl mx-auto'
                >
                    <p className='text-foreground/90 text-lg leading-relaxed'>
                        Partner with our expert content marketing team to create impactful
                        content that resonates with your audience, builds lasting
                        relationships, and delivers measurable business results across all
                        channels.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};