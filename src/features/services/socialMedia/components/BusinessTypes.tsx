'use client';

import React, { useState } from 'react';
import {
  businessCategories,
  businessTypes,
} from '@/features/services/socialMedia/utils';
import { FaFacebookF } from 'react-icons/fa';
import { ShimmerButton, IconButton3D } from '@/components/ui';
import {
  BusinessTypesHeading,
  IndustriesCard,
} from '@/features/services/components';
import { AppWindow, ChartLine, Save, TrendingUp, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function SocialMediaBusinessTypes() {
  const [activeCategory, setActiveCategory] = useState(
      Object.keys(businessCategories)[0]
  );

  // Obtener negocios de la categoría activa
  const getBusinessesForCategory = (category: string) => {
    if (!category || !businessCategories[category]) return [];
    return businessTypes.filter((business) =>
        businessCategories[category].includes(business.businessName)
    );
  };

  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-blue-500/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(59,130,246,0.03)]">
          <div className="border-t border-b border-blue-500/20 py-[16px] w-full">
            <div className="border-t border-b border-blue-500/20 py-[16px] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                {/* Section Header */}
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-4">
                    <IconButton3D icon={FaFacebookF} variant="blue" />
                  </div>

                  <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                  >
                    Tailored Strategies for <br/>
                    <span className='heading-gradient'>Every Business Type</span>
                  </motion.h2>

                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-foreground/80 max-w-2xl mx-auto text-center"
                  >
                    We transform your digital presence with industry-specific social
                    media strategies. Our approach has generated engagement and
                    conversions for businesses across all sectors, effectively
                    connecting them with both local and international audiences.
                  </motion.p>
                </div>

                {/* Tabs para categorías */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className='mb-10 overflow-x-auto flex justify-center'
                >
                  <div className='inline-flex space-x-3 py-3'>
                    {Object.keys(businessCategories).map((category) => (
                        <ShimmerButton
                            variant='outline'
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={` ${
                                activeCategory === category ? 'bg-ring text-foreground' : ''
                            }`}
                        >
                          {category}
                        </ShimmerButton>
                    ))}
                  </div>
                </motion.div>

                {/* Negocios en forma de tarjetas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className='flex flex-wrap justify-center items-center gap-3'
                >
                  {getBusinessesForCategory(activeCategory).map((business, index) => (
                      <motion.div
                          key={business.businessName + index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <IndustriesCard
                            isSecondaryCard
                            icon={business.icon}
                            name={business.businessName}
                            index={index}
                            variant="blue"
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
                  <p className='text-foreground/80 max-w-2xl mx-auto mb-8 pt-12'>
                    Don&apos;t see your business type or industry listed? No worries! We
                    work with businesses of all types and sizes. Let&apos;s discuss how
                    we can help grow your specific business.
                  </p>
                  <ShimmerButton>
                    Check if We Work With Your Business Type
                  </ShimmerButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}