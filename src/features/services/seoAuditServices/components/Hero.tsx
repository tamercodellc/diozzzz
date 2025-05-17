'use client';

import { Badge } from '@/components/ui';
import {
  ShootingStars,
  Circles,
  FeaturedImages,
} from '@/features/services/seoAuditServices/components/ui';
import {
  SEOAuditForm,
  SEOMetricsComparison,
} from '@/features/services/seoAuditServices/components';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap } from 'lucide-react';

export function Hero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <div
          ref={sectionRef}
          className='relative overflow-hidden ease-in-out flex flex-col items-center justify-center w-full'
      >
        <ShootingStars
            minSpeed={10}
            maxSpeed={30}
            minDelay={300}
            maxDelay={1000}
            starColor='#3b82f6'
            trailColor='#60a5fa'
            starWidth={10}
            starHeight={1}
        />
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10'>
          <div className='text-center pt-44'>
            <div className='relative mb-6'>
              <div className='absolute left-1/2 -translate-x-1/2 -top-36 w-full'>
                <Circles />
              </div>
              <div className='relative z-20'>
                <motion.div
                    className="relative z-10 mb-2 flex justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
                >
                  <Badge text="Free SEO Audit Report - Discover Your Site's True Potential" promo="New" icon={Zap} />
                </motion.div>
              </div>
            </div>

            <motion.h1
                className='font-bold mb-6 max-w-4xl mx-auto'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
            >
              Your Website Is{' '}
              <span className='heading-gradient'>
              Losing Clients{' '}
            </span>
              <br />
              Without You Knowing Why
            </motion.h1>

            <motion.p
                className="relative z-10 mx-auto mt-2 max-w-4xl text-center text-sm md:text-lg text-gray-700 dark:text-white backdrop-filter backdrop-blur-md p-1 rounded-lg mb-6 text-pretty"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
            >
              Don&apos;t let hidden website issues silently drive away potential
              customers. Our comprehensive SEO audit services not only reveal the
              exact problems affecting your site but also provide clear,
              actionable solutions for each issue - helping your business capture
              more leads, maximize sales opportunities, and outperform competitors
              online.
            </motion.p>

            <motion.div
                className='flex flex-col md:flex-row gap-8 max-w-[1400px] mx-auto'
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
            >
              <div className='w-full md:w-[400px] mb-8 md:mb-0'>
                <SEOAuditForm />
              </div>
              <div className='w-full md:flex-1'>
                <SEOMetricsComparison />
                <motion.div
                    className='mt-4 bg-card rounded-lg overflow-hidden'
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
                >
                  <Image
                      src='/features/services/seo-audit-services/sad.jpg'
                      alt='SEO Dashboard Analytics'
                      className='w-full h-[500px] object-cover object-top opacity-90'
                      width={1200}
                      height={800}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
              className='mt-8'
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.9 }}
          >
            {/* Double Border Container for Featured Images */}
            <div className="relative rounded-lg overflow-hidden">
              <div className="relative bg-gradient-to-r from-transparent via-primary/5 to-transparent backdrop-blur-lg shadow-[inset_0_2px_25px_rgba(19,137,253,0.03)]">
                <div className="border-t border-b border-primary/20 py-[16px]">
                  <div className="border-t border-b border-primary/20 py-[16px] bg-gradient-to-r from-transparent via-primary/5 to-transparent shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
                    {/* Non-clickable links */}
                    <div className="flex flex-wrap justify-center gap-4 py-4 px-6">
                      {[
                        "Backlink Analysis",
                        "Authority Building",
                        "Citation Management",
                        "Content Outreach",
                        "Link Monitoring",
                        "Competitor Analysis",
                        "Performance Reports"
                      ].map((item, index) => (
                          <div
                              key={index}
                              className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm md:text-base "
                          >
                            {item}
                          </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FeaturedImages
                textClassName='text-center'
                className='justify-center'
                containerClassName='items-center'
                showStars
            />
          </motion.div>
        </div>
      </div>
  );
}