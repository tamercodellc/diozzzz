'use client';

import { Plus } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../utils';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export const ContentMarketingFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
      <section className='relative py-16 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row gap-16'>
            {/* Left side - Title */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='lg:w-1/3'
            >
              <div className='sticky top-8'>
                <div className="flex mb-4">
                  <IconButton3D icon={() => <Plus size={18} />} variant="blue" />
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                >
                  Frequently Asked <br/>
                  <span className='heading-gradient'>Questions</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className='text-foreground/80 mb-8'
                >
                  Everything you need to know about our content marketing services
                  and process.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className='bg-primary px-6 py-3 rounded-lg hover:bg-ring transition-colors duration-300 flex items-center gap-2 text-white'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <span>I Have More Questions</span>
                  <Plus className='w-4 h-4' />
                </motion.button>
              </div>
            </motion.div>

            {/* Right side - FAQs */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='lg:w-2/3'
            >
              <div className='space-y-4'>
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className='border-b border-foreground/20 last:border-0'
                    >
                      <button
                          className='flex w-full items-center justify-between py-6 text-left group'
                          onClick={() =>
                              setOpenIndex(openIndex === index ? null : index)
                          }
                      >
                        <span className='text-lg font-medium group-hover:text-primary transition-colors duration-300'>{faq.question}</span>
                        <Plus
                            className={`h-5 w-5 text-primary transition-transform duration-300 ${
                                openIndex === index ? 'rotate-45' : ''
                            }`}
                        />
                      </button>
                      {openIndex === index && (
                          <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className='pb-6 text-foreground/80'
                          >
                            {faq.answer}
                          </motion.div>
                      )}
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};