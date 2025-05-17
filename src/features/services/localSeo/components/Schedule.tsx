'use client';
import React from 'react';
import Script from 'next/script';
import { Calendar, Clock, Target, ArrowRight, StepForward } from 'lucide-react';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

const benefits = [
  {
    icon: Calendar,
    title: 'Complete Analysis',
    description: 'Get a detailed review of your current local SEO performance',
  },
  {
    icon: Clock,
    title: 'Competition Insights',
    description: "Understand what's working for your successful competitors",
  },
  {
    icon: Target,
    title: 'Strategy Outline',
    description: 'Receive a customized action plan for your business',
  },
];

export function Schedule() {
  return (
      <div className='relative overflow-hidden'>
        {/* Background gradient */}
        <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          {/* Section Header with IconButton3D */}
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
              Let's Make Your Business <br/>
              <span className='heading-gradient'>Shine in Your City!</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
            >
              We only work with 5 new businesses each month to ensure exceptional results for each one. Will yours be one of them?
            </motion.p>
          </div>

          {/* Benefits */}
          <motion.div
              className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className='flex flex-col items-center text-center p-8 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm
                         transition-all duration-500 hover:border-primary/40 hover:bgring/10 group'
                  >
                    <div className='w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-6'>
                      <Icon className='w-8 h-8 text-primary' />
                    </div>
                    <div>
                      <h3 className='text-xl font-semibold mb-3'>
                        {benefit.title}
                      </h3>
                      <p className='text-foreground text-sm'>
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
              );
            })}
          </motion.div>

          {/* Calendly Widget */}
          <motion.div
              className='max-w-3xl mx-auto mb-12'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
          >
            <div
                className='calendly-inline-widget rounded-xl overflow-hidden'
                data-url='https://calendly.com/tamercodellc/15min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=171717&text_color=ffffff&primary_color=2563eb'
                style={{ minWidth: '320px', height: '700px' }}
            ></div>
            <Script
                src='https://assets.calendly.com/assets/external/widget.js'
                strategy='lazyOnload'
            />
          </motion.div>

          {/* CTA */}
          <motion.div
              className='max-w-3xl mx-auto text-center'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
          >
            <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/20 bgring/10 backdrop-blur-sm'>
              <p className='text-foreground/90 text-sm'>
                No credit card required
              </p>
              <span className='w-1 h-1 bg-primary rounded-full'></span>
              <p className='text-foreground/90 text-sm'>30-minute consultation</p>
              <ArrowRight className='w-4 h-4 text-primary ml-2' />
            </div>
          </motion.div>
        </div>
      </div>
  );
}