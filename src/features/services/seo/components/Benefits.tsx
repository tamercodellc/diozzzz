'use client';

import React from 'react';
import { benefits } from '@/features/services/seo/utils';
import { Ruler } from 'lucide-react';
import { CardHoverTopBorder } from '@/components/ui/CardHoverTopBorder';
import { InfoCard, IconButton3D } from '@/components/ui';
import {motion} from "framer-motion";

export function Benefits() {
  return (
      <div className='relative w-full py-4 overflow-hidden bg-gradient-to-b from-transparent via-card to-transparent'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-12'>
            <div className='flex justify-center mb-4'>
              <IconButton3D icon={Ruler} />
            </div>
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Transform Your Technical SEO Into a
              <span className='heading-gradient'> Growth Engine</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center"
            >
              Don't just fix technical issues - turn them into opportunities
              for exponential growth. Here's what you'll achieve with
              our proven technical SEO framework:
            </motion.p>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-6'>
            {benefits.map(({ icon, title, description }, index) => (
                <CardHoverTopBorder
                    key={index}
                    index={index}
                    className='bg-transparent w-[25rem]'
                >
                  <InfoCard
                      color='blue'
                      description={description}
                      icon={icon}
                      title={title}
                      index={index}
                  />
                </CardHoverTopBorder>
            ))}
          </div>
        </div>
      </div>
  );
}