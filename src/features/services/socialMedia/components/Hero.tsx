'use client';

import { Badge, Input, ShimmerButton } from '@/components/ui';
import { TopLines } from '@/features/services/socialMedia/components/ui';
import {
  AnimatedListDemo,
  EmailInterface,
  SchedulePostUI,
  SocialIconsCarousel,
} from '@/features/services/socialMedia/components';
import {motion, useInView} from 'framer-motion';
import {Zap} from "lucide-react";
import {useRef} from "react";

export function ModernHeroWithGradients() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <div ref={sectionRef} className='relative min-h-screen w-full overflow-visible'>
        <div className='relative z-20 mx-auto max-w-7xl px-4 py-6 md:px-8 lg:px-4'>
          <div className='relative overflow-visible py-32'>
            <div className='lg:block hidden'>
              <TopLines />
            </div>

            <div className='relative z-20 flex flex-col-reverse items-center justify-center overflow-visible'>
              <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-12'>
                <div className='lg:absolute lg:-left-8 xl:-left-12 2xl:-left-16 z-50 lg:mt-96'>
                  <SchedulePostUI />
                </div>
                <div className='lg:absolute lg:-right-8 xl:-right-12 2xl:-right-16 z-50 lg:mt-24'>
                  <EmailInterface />
                </div>
                <div className='flex flex-col items-center mx-auto max-w-3xl px-4'>
                  <motion.div
                      className="relative z-10 mb-2 flex justify-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
                  >
                    <Badge
                        text="Free Social Media Audit"
                        promo="Unlock Your Growth Potential"
                        link="/pricing"
                        icon={Zap}
                    />
                  </motion.div>

                  <motion.h1
                      className='font-bold mb-6 text-center'
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    Transform your social media <br/> into a{' '} <span className='heading-gradient'> Revenue-generating machine</span>
                  </motion.h1>

                  <motion.p
                      className="relative z-10 mx-auto mt-2 max-w-2xl text-center text-sm md:text-lg text-gray-700 dark:text-white backdrop-filter backdrop-blur-md p-1 rounded-lg mb-6 text-pretty"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
                  >
                    Stop struggling with inconsistent content and low engagement.
                    Our expert team creates scroll-stopping content, manages your
                    community, and turns your followers into customers while you
                    focus on running your business.
                  </motion.p>

                  <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
                      className='mx-auto max-w-md w-full mt-8 space-y-12'
                  >
                    <div className='flex items-center justify-center gap-2'>
                      <div className='relative flex-1'>
                        <Input
                            type='email'
                            placeholder='Enter your email'
                            className='rounded-md mr-2'
                        />
                      </div>
                      <ShimmerButton variant='solid' className='py-3'>
                        Get Started
                      </ShimmerButton>
                    </div>
                    <div className='w-full max-w-xl mx-auto'>
                      <AnimatedListDemo />
                    </div>
                    <div className='w-full absolute -bottom-56 left-0'>
                      <SocialIconsCarousel />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}