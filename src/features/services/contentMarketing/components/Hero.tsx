'use client';

import {
  FileText,
  Video,
  LineChart,
  Mic2,
  BookOpen,
  Share2,
  Mail,
  ChartBarBig,
} from 'lucide-react';
import { Cover } from '@/features/services/contentMarketing/ui';
import { Badge, HeroButtonsSet, IconButton3D } from '@/components/ui';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const ContentMarketingHero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <div ref={sectionRef} className='relative w-full overflow-visible pt-28 lg:pt-36'>
        <div className='relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center'>
          <div className='flex flex-col items-center w-full relative mb-8'>
            <div className='w-full max-w-4xl mx-auto text-center relative'>
              {/* Badge */}
              <motion.div
                  className="relative z-10 mb-2 flex justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
              >
                <Badge
                    text="Free Book Summary"
                    promo="Just One Click"
                    link="/pricing"
                    icon={ChartBarBig}
                />
              </motion.div>

              <motion.h1
                  className='font-bold mb-6 text-center'
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
              >
                Content that <Cover>Converts</Cover>, <br/>
                <span className='heading-gradient'>Stories that Connect</span>
              </motion.h1>

              <motion.p
                  className="relative z-10 mx-auto mt-2 max-w-2xl text-center text-sm md:text-lg text-gray-700 dark:text-white backdrop-filter backdrop-blur-md p-1 rounded-lg mb-6 text-pretty"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
              >
                Let your content speak for itself, whether it&apos;s{' '}
                <span className='inline-flex items-baseline gap-2 mx-2'>
                <FileText className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
                  articles or blogs
              </span>
                ,
                <span className='inline-flex items-baseline gap-2 mx-2'>
                <Video className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
                  educational videos or tutorials
              </span>
                ,
                <span className='inline-flex items-baseline gap-2 mx-2'>
                <LineChart className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
                  infographics
              </span>
                ,
                <span className='inline-flex items-baseline gap-2 mx-2'>
                <Mic2 className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
                  podcasts
              </span>
                ,
                <span className='inline-flex items-baseline gap-2 mx-2'>
                <BookOpen className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
                  ebooks or downloadable guides
              </span>
                ,
                <span className='inline-flex items-baseline gap-2 mx-2'>
                <Share2 className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
                  social media posts
              </span>
                , and
                <span className='inline-flex items-baseline gap-2 mx-2'>
                <Mail className='w-5 h-5 text-secondary' strokeWidth={2.5} />{' '}
                  newsletters
              </span>{' '}
                that foster an organic community around your service/product.
              </motion.p>

              <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
              >
                <HeroButtonsSet
                    firstBtnText='See Where My Business Rank Right Now'
                    secondBtnText='Claim My First Position'
                    isCentered
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  );
};