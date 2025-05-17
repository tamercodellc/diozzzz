'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { steps } from '../utils';
import { BarChart3 } from 'lucide-react';
import { IconButton3D } from '@/components/ui';

export function HowItWorks() {
  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-primary/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(19,137,253,0.03)]">
          <div className="border-t border-b border-primary/20 py-[16px] w-full">
            <div className="border-t border-b border-primary/20 py-[16px] bg-gradient-to-r from-transparent via-primary/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              <div className='max-w-7xl mx-auto px-4 sm:px-6 py-12'>
                {/* Heading Section */}
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-4">
                    <IconButton3D icon={BarChart3} />
                  </div>

                  <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                  >
                    How it works -
                    <span className='heading-gradient'>3 easy steps</span>
                  </motion.h2>

                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-foreground/80 max-w-2xl mx-auto text-center"
                  >
                    Our streamlined process takes you from initial consultation to implementing a winning keyword strategy that drives real business results.
                  </motion.p>
                </div>

                {/* Steps */}
                <div className='relative px-4'>
                  {/* Steps Container */}
                  <div className='relative grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {steps.map((step, index) => (
                        <div key={step.number} className='relative'>
                          {/* Connecting Line */}
                          {index < steps.length - 1 && (
                              <div className='absolute hidden md:block top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-primary/20'></div>
                          )}
                          <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 }}
                              className='relative text-center z-10'
                          >
                            {/* Step Number */}
                            <div className='text-4xl font-bold text-primary mb-6'>
                              {step.number}
                            </div>

                            {/* Icon Container */}
                            <div className='relative mx-auto mb-8'>
                              {/* Icon Circle */}
                              <div className='relative w-24 h-24 mx-auto flex items-center justify-center'>
                                <step.icon className='w-12 h-12 text-primary' />
                              </div>
                            </div>

                            {/* Content */}
                            <div className='text-center'>
                              <h3 className='text-2xl font-bold text-foreground mb-3'>
                                {step.title}
                              </h3>
                              <p className='text-foreground/80 max-w-sm mx-auto'>
                                {step.description}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}