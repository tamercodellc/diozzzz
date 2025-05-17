'use client';
import React from 'react';
import { Award, ArrowRight, RocketIcon, Check } from 'lucide-react';
import Image from 'next/image';
import { InfoCard, ShimmerButton, IconButton3D } from '@/components/ui';
import { motion } from 'framer-motion';
import { steps } from '@/features/services/googleAds/utils';

export function GoogleAdsProcess() {
  return (
      <div className='relative py-32 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={RocketIcon} variant="blue" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Your Path to <br/>
              <span className='heading-gradient'>Google Ads Success</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center"
            >
              A clear, proven process that transforms your advertising investment
              into measurable business growth
            </motion.p>
          </div>

          {/* Process Steps */}
          <div className='relative'>
            <div className='grid gap-8 lg:grid-cols-4'>
              {steps.map((step, index) => (
                  <div key={index} className='relative group'>
                    {/* Arrow connector */}
                    {index < steps.length - 1 && (
                        <div className='hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10'>
                          <ArrowRight className='w-8 h-8 text-ring' />
                        </div>
                    )}
                    <div className='absolute -top-3 -right-3 w-8 h-8 rounded-full bg-ring flex items-center justify-center text-card font-bold z-40'>
                      {index + 1}
                    </div>

                    <div className='relative'>
                      <InfoCard
                          index={index}
                          icon={step.icon}
                          description={step.description}
                          title={step.title}
                          color='blue'
                          className='h-96 flex flex-col'
                      >
                        <div className="mt-4 flex-grow flex flex-col justify-between">
                          <div className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                                <div
                                    key={detailIndex}
                                    className="flex items-start px-2 gap-2"
                                >
                                  <Check className='size-4 text-ring flex-shrink-0 mt-1' />
                                  <span className="text-sm">{detail}</span>
                                </div>
                            ))}
                          </div>
                          <div className="pb-6"></div>
                        </div>
                      </InfoCard>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Process Overview Image */}
          <div className='mt-20 mb-20'>
            <Image
                src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3'
                alt='Marketing Analytics Dashboard'
                className='w-full h-[400px] object-cover rounded-2xl border border-foreground/10'
                width={1800}
                height={1800}
            />
          </div>

          {/* Results Preview */}
          <div className='flex justify-center'>
            <ShimmerButton variant='solid'>
              <Award className='w-5 h-5' />
              <span className='ml-2'>See the results our clients achieve</span>
            </ShimmerButton>
          </div>
        </div>
      </div>
  );
}