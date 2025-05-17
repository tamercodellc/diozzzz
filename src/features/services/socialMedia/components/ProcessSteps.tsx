'use client';

import React from 'react';
import { TracingBeam } from '@/components/ui';
import Image from 'next/image';
import { steps } from '@/features/services/socialMedia/utils';
import { StepForward } from 'lucide-react';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export function ProcessSteps() {
  return (
      <section className='relative w-full overflow-hidden py-12'>
        <div className='container mx-auto px-4'>
          {/* Heading Section with Blue Theme */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={StepForward} variant="blue" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Your Journey to <br/>
              <span className='heading-gradient'>Social Media Success</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-12"
            >
              A proven, systematic approach to transform your social media
              presence and drive real business results
            </motion.p>
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='flex flex-col lg:flex-row gap-8 lg:gap-16'
          >
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className='lg:w-1/3 relative rounded-2xl overflow-hidden'
            >
              <div className='w-full h-full'>
                <Image
                    src='/features/services/social-media/issues.webp'
                    alt='Business process illustration'
                    width={800}
                    height={1000}
                    className='w-full h-full object-cover rounded-2xl'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent' />
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className='lg:w-2/3'
            >
              <TracingBeam className='px-6'>
                <div className='max-w-2xl'>
                  {steps.map((step, index) => (
                      <motion.div
                          key={index}
                          className='relative mb-12'
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className='absolute -left-[42px] top-6 size-2 rounded-full bg-primary' />
                        <div className='bg-card rounded-lg p-6 ml-4 border border-ring/10 hover:border-ring/20 transition-colors duration-300'>
                          <h3 className='text-lg font-semibold text-foreground mb-3'>
                            {step.title}
                          </h3>
                          <p className='text-foreground/80 leading-relaxed'>
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                  ))}
                </div>
              </TracingBeam>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}