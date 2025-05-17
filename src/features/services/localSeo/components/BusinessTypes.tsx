'use client';

import React from 'react';
import { ShimmerButton } from '@/components/ui';
import { BriefcaseBusiness, Building, MapPin, User } from 'lucide-react';
import { IconMapSearch, IconWorldWww } from '@tabler/icons-react';
import {
  BusinessTypesHeading,
  IndustriesCard,
} from '@/features/services/components';
import { businessTypes } from '@/features/services/utils';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export function BusinessTypes() {
  return (
      <div className='relative overflow-hidden'>
        {/* Background gradient */}
        <div className='absolute inset-0'>
          <div className='absolute right-1/2 top-1/4 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-gradient-to-r from-ring/10 to-transparent rounded-full blur-3xl'></div>
          <div className='absolute left-1/4 bottom-1/2 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-3xl'></div>
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          {/* Section Header with IconButton3D */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={BriefcaseBusiness} variant="blue" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              We Cover All Industries and <br/>
              <span className='heading-gradient'>Boost Your Local Visibility</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
            >
              We elevate local businesses to the top of Google Search results in their specific markets. Our proven local SEO strategies have helped businesses across multiple countries and languages achieve prime visibility where it matters most - in their local community's searches.
            </motion.p>
          </div>

          {/* Key Benefits */}
          <div className='flex flex-wrap gap-4 items-center justify-center mb-10'>
            {[
              { text: 'Rank #1 in Google Maps', icon: MapPin },
              { text: "Capture 'Near Me' Searches", icon: IconMapSearch },
              { text: 'Multilingual SEO', icon: IconWorldWww },
              { text: 'Google Business Profile', icon: Building },
              { text: 'Customer Conversion', icon: User },
            ].map(({ text, icon }, index) => (
                <BusinessTypesHeading
                    key={index + text}
                    icon={icon}
                    text={text}
                    index={0}
                />
            ))}
          </div>

          {/* Business Types Grid */}
          <motion.div
              className='flex flex-wrap items-center justify-center gap-4'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
          >
            {businessTypes.map((business, index) => (
                <motion.div
                    key={index + business.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <IndustriesCard
                      index={index}
                      icon={business.icon}
                      name={business.name}
                      isSecondaryCard
                  />
                </motion.div>
            ))}
          </motion.div>

          {/* Bottom Text */}
          <motion.div
              className='text-center mt-12'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
          >
            <p className='text-foreground/90 max-w-2xl mx-auto mb-6'>
              Every local market is unique. No matter your industry or location,
              our local SEO expertise adapts to your specific market dynamics and
              customer search behavior.
            </p>
            <ShimmerButton variant='solid'>
              Analyze My Local Market Potential
            </ShimmerButton>
          </motion.div>
        </div>
      </div>
  );
}