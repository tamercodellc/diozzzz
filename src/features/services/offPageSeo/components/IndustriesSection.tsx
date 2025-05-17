'use client';

import { ImageGridItems } from '@/features/services/offPageSeo/utils';
import { ImageGridItem } from '@/features/services/offPageSeo/components/ui';
import { FaIndustry } from 'react-icons/fa';
import { IndustriesCard } from '@/features/services/components';
import { businessTypes } from '../../utils';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export function IndustriesSection() {
  return (
      <div className='relative w-full bg-gradient-to-b from-transparent via-card/80 to-transparent overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4'>
          {/* Heading Section with IconButton3D */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={FaIndustry} variant="blue" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Expertise Across <br/>
              <span className='heading-gradient'>Every Industry</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center"
            >
              From local businesses to enterprise organizations, our proven off-page SEO strategies are tailored to work effectively for your specific industry needs.
            </motion.p>
          </div>

          <div className='grid grid-cols-1 xl:grid-cols-2 gap-12 min-h-[1200px]'>
            {/* Left column - Industries grid */}
            <div className='flex flex-wrap items-center justify-center gap-2'>
              {businessTypes.map(({ icon, name }, index) => (
                  <IndustriesCard
                      key={index}
                      index={index}
                      name={name}
                      icon={icon}
                  />
              ))}
            </div>

            {/* Right column - Image and content */}
            <div className='xl:flex hidden flex-col gap-6 h-full '>
              {ImageGridItems.map(({ image, title, subtitle }) => (
                  <ImageGridItem
                      imageSrc={image}
                      title={title}
                      subtitle={subtitle}
                      key={subtitle + title}
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}