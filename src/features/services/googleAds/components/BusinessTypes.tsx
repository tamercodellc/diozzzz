'use client';

import React from 'react';
import {
  BusinessTypesHeading,
  IndustriesCard,
} from '@/features/services/components';
import { FaIndustry } from 'react-icons/fa';
import { ShimmerButton, IconButton3D } from '@/components/ui';
import { businessTypes } from '@/features/services/utils';
import { MapPin, Users2 } from 'lucide-react';
import {
  IconBrandGoogle,
  IconMapSearch,
  IconWorldWww,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function GoogleAdsBusinessTypes() {
  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-blue-500/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(59,130,246,0.03)]">
          <div className="border-t border-b border-blue-500/20 py-[16px] w-full">
            <div className="border-t border-b border-blue-500/20 py-[16px] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              <div className='max-w-7xl mx-auto px-4 py-12'>
                {/* Background gradient */}
                <div className='absolute inset-0'>
                  <div className='absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-ring/10 to-transparent rounded-full blur-3xl'></div>
                  <div className='absolute left-0 bottom-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-ring/10 to-transparent rounded-full blur-3xl'></div>
                </div>

                {/* Section Header */}
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
                    We Cover All Industries and <br/>
                    <span className='heading-gradient'>Boost Your Local Visibility</span>
                  </motion.h2>

                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-foreground/80 max-w-2xl mx-auto text-center"
                  >
                    We elevate local businesses to the top of Google Search results in
                    their specific markets. Our proven local SEO strategies have helped
                    businesses across multiple countries and languages achieve prime
                    visibility where it matters most - in their local community's
                    searches.
                  </motion.p>
                </div>

                {/* Key Benefits */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className='flex flex-wrap gap-2 items-start justify-center mb-12'
                >
                  {[
                    { text: 'Rank #1 in Google Maps', icon: MapPin },
                    { text: "Capture 'Near Me' Searches", icon: IconMapSearch },
                    { text: 'Multilingual SEO', icon: IconWorldWww },
                    { text: 'Google Business Profile', icon: IconBrandGoogle },
                    { text: 'Customer Conversion', icon: Users2 },
                  ].map(({ text, icon }, index) => (
                      <motion.div
                          key={text + index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <BusinessTypesHeading
                            text={text}
                            icon={icon}
                            index={index}
                        />
                      </motion.div>
                  ))}
                </motion.div>

                {/* Business Types Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className='flex items-center justify-center flex-wrap gap-4'
                >
                  {businessTypes.map((business, index) => (
                      <motion.div
                          key={business.name + index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                      >
                        <IndustriesCard
                            icon={business.icon}
                            index={index}
                            name={business.name}
                            variant='blue'
                            isSecondaryCard
                        />
                      </motion.div>
                  ))}
                </motion.div>

                {/* Bottom Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className='text-center mt-12'
                >
                  <p className='text-foreground max-w-2xl mx-auto mb-6'>
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
          </div>
        </div>
      </section>
  );
}