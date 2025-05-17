'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { faqs } from '@/features/services/seoAuditServices/utils';
import { FAQItem } from '@/features/services/seoAuditServices/components/ui';
import { BsQuestionDiamond } from 'react-icons/bs';
import { ShimmerButton, IconButton3D } from '@/components/ui';
import Image from 'next/image';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
      <div className='w-full py-12 mb-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Heading Section with styled text */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={BsQuestionDiamond} />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Frequently Asked <span className='heading-gradient'>Questions</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-10 text-lg"
            >
              Get answers to common questions about our SEO audit process and how
              it can help your business grow.
            </motion.p>
          </div>

          <motion.div
              className='flex flex-col md:flex-row gap-12'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
          >
            <div className='md:w-1/3'>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className='sticky top-24'
              >
                <div className='space-y-4'>
                  <p className='text-lg font-medium text-foreground'>Still have questions?</p>
                  <ShimmerButton variant='solid'>
                    Chat with our Experts
                  </ShimmerButton>
                  <div className='mt-8'>
                    <p className='text-lg mb-2 text-foreground'>Contact our SEO experts!</p>
                    <p className='text-lg text-foreground/70'>
                      We&apos;re here to help you succeed.
                    </p>
                    <div className='flex -space-x-2 mt-4'>
                      {[1, 2, 3, 4, 5].map((i) => (
                          <div
                              key={i}
                              className='relative inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-ring/20 bg-card'
                          >
                            <Image
                                src={`https://i.pravatar.cc/32?img=${i}`}
                                alt={`Team member ${i}`}
                                className='h-full w-full rounded-full object-cover'
                                width={1200}
                                height={1200}
                            />
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className='md:w-2/3'>
              <motion.div
                  className='rounded-lg bg-card p-6'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
              >
                {faqs.map((faq, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <FAQItem
                          question={faq.question}
                          answer={faq.answer}
                          isOpen={openIndex === index}
                          onClick={() =>
                              setOpenIndex(openIndex === index ? null : index)
                          }
                      />
                    </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
  );
}