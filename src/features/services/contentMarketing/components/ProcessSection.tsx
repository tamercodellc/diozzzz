'use client';
import { ArrowRight } from 'lucide-react';
import { steps } from '@/features/services/contentMarketing/utils';
import { IconStepInto } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export const ContentMarketingProcessSection = () => {
    return (
        <section className='relative py-12 overflow-hidden'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <IconButton3D icon={IconStepInto} variant="blue" />
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                    >
                        Your Journey to <br/>
                        <span className='heading-gradient'>Content Excellence</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
                    >
                        A comprehensive 15-step process designed to transform your content
                        strategy and deliver measurable results.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-8'
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + index * 0.05 }}
                            className='bg-card rounded-xl p-6 relative group hover:bg-primary/5 transition-colors duration-300 border border-foreground/5 hover:border-foreground/10 shadow-sm'
                        >
                            <div className='flex items-start gap-4'>
                                <div className='flex-shrink-0'>
                                    <div className='w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300'>
                                        {step.icon}
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center gap-2 mb-2'>
                    <span className='text-xs text-secondary font-medium'>
                      Step {index + 1}
                    </span>
                                        <ArrowRight className='w-3 h-3 text-secondary' />
                                    </div>
                                    <h3 className='text-lg font-semibold mb-2'>{step.title}</h3>
                                    <p className='text-foreground/80 text-sm'>{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};