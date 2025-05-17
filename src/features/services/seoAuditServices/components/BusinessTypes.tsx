'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { businessTypes } from '@/features/services/utils';
import { Briefcase } from 'lucide-react';
import { ShimmerButton, ShineBorder, IconButton3D } from '@/components/ui';
import { IndustriesCard } from '@/features/services/components';
import { ShineColors } from '@/lib';

export function BusinessTypes() {
  return (
      <div className='w-full py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Heading Section with styled text */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={Briefcase} />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Specialized SEO Audits for <span className='heading-gradient'>Every Industry</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-10 text-lg"
            >
              Every industry has unique SEO challenges and opportunities. Our
              comprehensive audits are tailored to your specific market,
              considering industry-specific ranking factors, competitive
              landscapes, and user search behavior patterns.
            </motion.p>
          </div>

          {/* Business Types Grid */}
          <motion.div
              className='flex items-center justify-center flex-wrap gap-2'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
          >
            {businessTypes.map((business, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <IndustriesCard
                      icon={business.icon}
                      name={business.name}
                      index={index}
                      isSecondaryCard
                  />
                </motion.div>
            ))}
          </motion.div>

          <motion.div
              className='flex items-center justify-center flex-col text-center rounded-3xl h-64 mt-12 bg-card relative'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
          >
            <ShineBorder shineColor={ShineColors} />
            <div className='text-foreground mb-6'>
              <h2 className='heading-gradient p-2 text-xl font-bold'> No matter your industry</h2>
              <p className='capitalize text-foreground/80 max-w-2xl mx-auto text-lg'>
                our comprehensive SEO audit will uncover the exact opportunities
                to improve your search visibility and outrank competitors.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <ShimmerButton variant='solid'>
                Get Your Industry-Specific SEO Audit
              </ShimmerButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
  );
}