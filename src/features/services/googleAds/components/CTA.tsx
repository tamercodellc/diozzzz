'use client';
import React from 'react';
import { Ripple } from '../components/ui/ripple';
import { ShoppingBag, Calendar, TrendingUp, DollarSign } from 'lucide-react';
import { ShimmerButton, IconButton3D } from '@/components/ui';
import { motion } from 'framer-motion';

export function GoogleAdsCTA() {
  return (
      <div className='overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative rounded-2xl bg-card border border-foreground/10 overflow-hidden'>
            <div className='absolute z-10 p-8 lg:p-12 w-full h-full bg-gradient-to-r from-background-primary/40 via-card/80 to-background-primary/40 flex items-center justify-center flex-col'>
              {/* Header Section */}
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <IconButton3D icon={DollarSign} variant="blue" />
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                >
                  Start Selling More With <br/>
                  <span className='heading-gradient'>Google Ads</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
                >
                  Don't let your competitors capture your customers. Our proven
                  strategies have helped businesses increase sales by an average of
                  300% in just 90 days.
                </motion.p>
              </div>

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className='flex items-center gap-4'
              >
                <ShimmerButton variant='outline'>
                  <Calendar className='w-5 h-5' />
                  <span>Schedule Your 30-Min Strategy Session</span>
                </ShimmerButton>
                <ShimmerButton variant='solid' className=''>
                  <ShoppingBag className='w-5 h-5' />
                  <span>Get Your Free Google Ads Audit ($500 Value)</span>
                </ShimmerButton>
              </motion.div>

              {/* Stats */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className='mt-8 flex items-center gap-8'
              >
                <div className='flex items-center gap-2'>
                  <TrendingUp className='w-5 h-5 text-ring' />
                  <span className='text-foreground font-semibold'>300%</span>
                  <span className='text-foreground/80'>Avg. ROAS</span>
                </div>
                <div className='w-px h-8 bg-foreground/10' />
                <div className='text-foreground/80'>
                <span className='text-foreground font-semibold'>
                  Initial Results
                </span>{' '}
                  in 2 Weeks
                </div>
              </motion.div>
            </div>

            {/* Right Column - Ripple Effect */}
            <div className='h-[500px]'>
              <Ripple
                  mainCircleSize={250}
                  mainCircleOpacity={0.3}
                  numCircles={6}
                  className='[mask-image:linear-gradient(to_left,black_90%,transparent)]'
              />
            </div>
          </div>
        </div>
      </div>
  );
}