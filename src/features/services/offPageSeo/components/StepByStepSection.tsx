'use client';

import React, { useState, useEffect } from 'react';
import { steps } from '@/features/services/offPageSeo/utils';
import { StepCard } from '@/features/services/offPageSeo/components/ui';
import { Factory } from 'lucide-react';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export const StepByStepSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  // Progress and auto-advance for active step
  useEffect(() => {
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 100);

    const stepInterval = setInterval(() => {
      setActiveStep((current) => (current % 3) + 1);
      setProgress(0);
    }, 10000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [activeStep]);

  return (
      <section className="relative overflow-hidden w-full">
              <div className='max-w-6xl mx-auto px-4 py-12'>
                {/* Heading Section with Blue Theme */}
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-4">
                    <IconButton3D icon={Factory} variant="blue" />
                  </div>

                  <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                  >
                    Your Path to <br/>
                    <span className='heading-gradient'>Digital Success</span>
                  </motion.h2>

                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-foreground/80 max-w-2xl mx-auto text-center"
                  >
                    A transparent, streamlined process to transform your digital presence without complications.
                    Experience a simple, clear, and proven methodology designed to build your confidence at every stage.
                  </motion.p>
                </div>

                {/* Step cards container with animations */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-8 perspective pb-8 transition-all duration-500 ease-in-out'
                >
                  {steps.map((step, index) => (
                      <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <StepCard
                            number={step.number}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            isActive={parseInt(step.number) === activeStep}
                            progress={progress}
                            className='bg-card hover:bg-blue-500/5 transition-all duration-300 shadow-lg border border-blue-500/10'
                        />
                      </motion.div>
                  ))}
                </motion.div>
              </div>
      </section>
  );
};