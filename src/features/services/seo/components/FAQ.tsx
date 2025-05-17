'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { faqs } from '@/features/services/seo/utils';
import { BsQuestion } from 'react-icons/bs';
import { IconButton3D } from '@/components/ui';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number>(0);

  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-primary/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(19,137,253,0.03)]">
          <div className="border-t border-b border-primary/20 py-[16px] w-full">
            <div className="border-t border-b border-primary/20 py-[16px] bg-gradient-to-r from-transparent via-primary/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              <div className='max-w-7xl mx-auto px-4 py-12'>
                <div className='text-center mb-16'>
                  <div className='flex justify-center mb-4'>
                    <IconButton3D icon={BsQuestion} />
                  </div>

                  <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                  >
                    Everything You Need
                    <span className='heading-gradient'> to Know</span>
                  </motion.h2>

                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-foreground/80 max-w-2xl mx-auto text-center"
                  >
                    Get answers to the most common questions about our technical SEO
                    services
                  </motion.p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                  {/* FAQ Column */}
                  <div className='space-y-4'>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <button
                              className='w-full text-left p-6 rounded-xl bg-card border border-ring/50 hover:border-primary/50 transition-colors duration-300'
                              onClick={() =>
                                  setOpenIndex(openIndex === index ? index : index)
                              }
                          >
                            <div className='flex justify-between items-center'>
                              <h3>{faq.question}</h3>
                              <div className='ml-4'>
                                {openIndex === index ? (
                                    <Minus className='w-5 h-5 text-primary' />
                                ) : (
                                    <Plus className='w-5 h-5 text-primary' />
                                )}
                              </div>
                            </div>

                            <div
                                className={`mt-4 text-foreground/90 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
                                    openIndex === index
                                        ? 'max-h-96 opacity-100'
                                        : 'max-h-0 opacity-0'
                                }`}
                            >
                              {faq.answer}
                            </div>
                          </button>
                        </motion.div>
                    ))}
                  </div>

                  {/* Image Column */}
                  <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className='relative aspect-square lg:sticky lg:top-24'
                  >
                    <Image
                        src='/features/services/seo/seosolutione.png'
                        alt='Technical SEO Solutions'
                        width={600}
                        height={600}
                        className='relative transform hover:scale-[1.02] transition-transform duration-300'
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}