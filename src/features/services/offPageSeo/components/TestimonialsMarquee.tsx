'use client';

import { ShieldIcon } from 'lucide-react';
import { TestimonialsGrid } from '@/features/services/offPageSeo/components/ui';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export function TestimonialsMarqueeGrid() {
  return (
      <div className='relative overflow-hidden'>
        <div className='relative w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden h-full'>
          <div className='pb-12 md:pb-20'>
            {/* Heading Section with IconButton3D */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <IconButton3D icon={ShieldIcon} variant="blue" />
              </div>

              <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
              >
                Trusted by <br/>
                <span className='heading-gradient'>Local Businesses Worldwide</span>
              </motion.h2>

              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-foreground/80 max-w-2xl mx-auto text-center"
              >
                Real stories from businesses that have transformed their local presence and achieved remarkable growth through our proven strategies.
              </motion.p>
            </div>
          </div>

          <div className='relative'>
            <div className='h-full overflow-hidden w-full'>
              <TestimonialsGrid />
            </div>
          </div>
        </div>
      </div>
  );
}