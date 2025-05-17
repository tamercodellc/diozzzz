'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { faqs } from '../utils';
import { BsQuestionLg } from 'react-icons/bs';
import { IconButton3D } from '@/components/ui';

export function FAQ() {
  return (
      <div className='relative w-full py-24 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Section Header */}
          <div className='mb-16 flex flex-col items-center justify-center'>
            <div className="flex justify-center mb-4">
              <IconButton3D icon={BsQuestionLg} />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Frequently Asked
              <span className='heading-gradient'> Questions</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center"
            >
              Have a different question and can't find the answer you're looking for? Reach out to our support team by sending us an email and we'll get back to you as soon as we can.
            </motion.p>
          </div>

          {/* FAQ Items */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12 mt-16'>
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className='space-y-4'
                >
                  <h3 className='text-xl font-semibold text-foreground'>
                    {faq.question}
                  </h3>
                  <p className='text-foreground/80'>{faq.answer}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </div>
  );
}