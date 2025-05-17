'use client';
import { Badge, HeroButtonsSet, Marquee } from '@/components/ui';
import { StarIcon } from 'lucide-react';
import { content } from '../utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function GoogleAdsHero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <div
          ref={sectionRef}
          className="relative ease-in-out flex flex-col items-center justify-center w-full pt-28 lg:pt-36 overflow-hidden py-6 sm:py-8 lg:py-12"
      >
        <div className='max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center'>
          <div className='grid lg:grid-cols-2 gap-12 items-center relative'>
            {/* Left Column - Main Content */}
            <div className='space-y-6 md:space-y-8 text-center lg:text-left'>
              {/* Badge */}
              <motion.div
                  className='flex justify-center lg:justify-start'
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
              >
                <Badge text='Free Google Ads Performance Analysis - Worth $500' />
              </motion.div>

              {/* Main Title */}
              <motion.h1
                  className='font-bold mb-6 text-balance'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.7 }}
              >
                Yes, You Can Get More Customers With A Small <br />
                Budget Using Google Ads
                <br />{' '}
                <span className='heading-gradient'>
                Yes, You Can Get More Customers
              </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                  className="relative z-10 text-sm md:text-lg text-gray-700 dark:text-white backdrop-filter backdrop-blur-md p-1 rounded-lg mb-6 text-pretty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
              >
                Stop wasting money on ineffective Google Ads campaigns. Our
                certified experts leverage advanced AI and machine learning to
                optimize your campaigns, targeting high-intent customers ready to
                buy. We focus on maximizing your ROAS (Return on Ad Spend) while
                minimizing wasted ad spend through precise audience targeting and
                continuous optimization.
              </motion.p>

              {/* Key Points */}
              <motion.div
                  className='space-y-4'
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.65 }}
              >
                {[
                  'Average 300% ROAS improvement in 90 days',
                  'Google Ads certified campaign managers',
                  'Performance-based pricing available',
                ].map((point) => (
                    <div key={point} className='flex items-center'>
                      <span className='text-ring text-xl mr-2'>✓</span>
                      <span className='text-foreground/90'>{point}</span>
                    </div>
                ))}
              </motion.div>

              {/* CTA Section */}
              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
              >
                <HeroButtonsSet
                    firstBtnText='Get My Free Ads Performance Audit'
                    secondBtnText='Scale My Google Ads'
                />
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                  className='flex items-center gap-4 pt-6 justify-center lg:justify-start'
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
              >
                <div className='bg-primary flex items-center justify-center'>
                  {new Array(5).fill(null).map((_, index) => (
                      <span
                          className='size-7 p-1 bg-gradient-to-b from-ring to-secondary mx-px inline-flex items-center justify-center relative'
                          key={index}
                      >
                    <StarIcon fill='white' className='text-white' />
                    <span className='h-[2px] w-3 shadow-sm shadow-black rounded-full absolute top-4 rotate-45 right-1 bg-gray-400'>
                      {' '}
                    </span>
                  </span>
                  ))}
                </div>

                <p className='text-foreground/90 font-medium whitespace-nowrap'>
                  TrustScore 4.8 | 347 reviews
                </p>
              </motion.div>
            </div>

            {/* Right Column - Visual Elements */}
            <motion.div
                className='h-screen z-10 lg:flex hidden'
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.9 }}
            >
              <Marquee items={content} direction='up' />
              <Marquee
                  items={content}
                  direction='down'
                  className='xl:block hidden'
              />
            </motion.div>
          </div>
        </div>
      </div>
  );
}