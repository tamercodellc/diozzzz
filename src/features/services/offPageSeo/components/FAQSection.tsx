'use client';

import { useState } from 'react';
import { ChevronDown, ListIcon } from 'lucide-react';
import { cn } from '@/lib';
import { faqs } from '@/features/services/offPageSeo/utils';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className='relative w-full overflow-hidden'>
            <div className='max-w-4xl mx-auto px-4'>
                {/* Heading Section with IconButton3D */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <IconButton3D icon={ListIcon} variant="blue" />
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                    >
                        Common Concerns About <br/>
                        <span className='heading-gradient'>Off-Page SEO</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/80 max-w-2xl mx-auto text-center"
                    >
                        Let's address the key questions you might have about investing in off-page SEO and building your site's authority.
                    </motion.p>
                </div>

                <div className='space-y-4'>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className='bg-card border border-ring/10 rounded-lg overflow-hidden'
                        >
                            <button
                                className='w-full px-6 py-4 text-left flex items-center justify-between'
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                <span className='text-foreground font-medium'>
                  {faq.question}
                </span>
                                <ChevronDown
                                    className={cn(
                                        'w-5 h-5 text-primary transition-transform duration-200',
                                        openIndex === index ? 'rotate-180' : ''
                                    )}
                                />
                            </button>
                            <div
                                className={cn(
                                    'px-6 transition-all duration-200 ease-in-out',
                                    openIndex === index
                                        ? 'py-4 border-t border-ring/10'
                                        : 'max-h-0 overflow-hidden'
                                )}
                            >
                                <p className='text-foreground/80'>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}