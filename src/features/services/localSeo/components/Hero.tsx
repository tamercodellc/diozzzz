'use client'

import React, { useRef } from 'react'
import { Badge, HeroButtonsSet } from '@/components/ui'
import {
  RankingCard,
  FeaturedImages,
} from '@/features/services/localSeo/components/ui'
import { BookOpen } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

export const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <div
          ref={sectionRef}
          className='relative overflow-hidden flex flex-col pt-32 md:min-h-[1080px]'
          style={{
            backgroundImage:
                'url(/features/services/local-seo/background_att.webp)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
      >
        <div className='absolute z-0 bottom-0 left-0 h-52 w-screen bg-gradient-to-b from-transparent to-background-primary' />

        {/* Background Elements */}
        <div className='absolute inset-0'>
          <div className='absolute right-1/2 translate-x-1/2 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary via-secondary to-ring rounded-full blur-3xl opacity-10'></div>
        </div>

        <div className='max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column */}
            <div className='space-y-6 md:space-y-8 text-center lg:text-left'>
              {/* Badge */}
              <motion.div
                  className='flex justify-center lg:justify-start mt-8'
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
              >
                <Badge
                    icon={BookOpen}
                    text='Free High Value Book Summary Video - Just One Click'
                />
              </motion.div>

              {/* Heading */}
              <motion.h1
                  className='font-bold text-balance mx-auto text-white'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.7 }}
              >
                Why Chase The Customer When They{' '}
                <span className='heading-gradient'> Can Easily </span>Find You On
                Local Pack
              </motion.h1>

              {/* Subheading */}
              <motion.p
                  className='text-sm md:text-lg text-pretty text-foreground/90 mx-auto lg:mx-0 max-w-2xl lg:max-w-none text-white backdrop-filter backdrop-blur-md p-1 rounded-lg'
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
              >
                Local customers are looking for services, shops, and restaurants
                right now. Make sure your business is front and center in
                Miami&apos;s competitive market. Our Local SEO services help you
                rise above the noise—optimizing your Google Business Profile,
                enhancing your on-page content, and ensuring that every local
                citation and review spotlights your brand.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
              >
                <HeroButtonsSet
                    firstBtnText='See Where My Business Rank Right Now'
                    secondBtnText='Claim My 1st Position'
                />
              </motion.div>

              {/* Reviews Section */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
              >
                <FeaturedImages
                    textClassName='text-center lg:text-left'
                    className='justify-center lg:justify-start items-center mt-8'
                    showStars
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  )
}