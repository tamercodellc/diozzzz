'use client';

import Image from 'next/image';
import { benefits } from '@/features/services/offPageSeo/utils';
import { HeartPulse } from 'lucide-react';
import { motion } from 'framer-motion';
import { CardHoverTopBorder, IconButton3D } from '@/components/ui';

export const BenefitsSection = () => {
  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-blue-500/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(59,130,246,0.03)]">
          <div className="border-t border-b border-blue-500/20 py-[16px] w-full">
            <div className="border-t border-b border-blue-500/20 py-[16px] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              <div className='max-w-6xl mx-auto px-4 py-12'>
                {/* Heading Section with Blue Theme */}
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-4">
                    <IconButton3D icon={HeartPulse} variant="blue" />
                  </div>

                  <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                  >
                    Experience the <br/>
                    <span className='heading-gradient'>Transformative Benefits</span>
                  </motion.h2>

                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-foreground/80 max-w-2xl mx-auto text-center"
                  >
                    Discover how my personalized approach to Off-Page SEO will transform your business.
                    Each benefit is designed to deliver tangible results that will drive your growth
                    and help you stand out in the digital world.
                  </motion.p>
                </div>

                {/* Full-width image container with gradient overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className='relative w-full h-[300px] mb-16 rounded-lg overflow-hidden shadow-lg'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-400/20 mix-blend-overlay z-10'></div>
                  <div className='absolute inset-0 shadow-[inset_0_2px_25px_rgba(59,130,246,0.1)] z-20'></div>
                  <Image
                      src='/features/services/off-page-seo/benefits-hero.jpg'
                      alt='SEO Benefits Visualization'
                      fill
                      className='object-cover'
                      priority
                  />
                </motion.div>

                {/* Grid de beneficios con animaciones */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-8 pb-8'
                >
                  {benefits.map(({ title, tagline, description }, index) => (
                      <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <CardHoverTopBorder
                            index={index}
                            className='bg-card flex hover:bg-blue-500/5 p-4 transition-all duration-300 shadow-lg border border-blue-500/10'
                            color="blue"
                        >
                          <div className='w-full h-full flex flex-col gap-4 p-6'>
                            <header className='flex gap-3'>
                          <span className='bg-gradient-to-br from-blue-500 to-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold shadow-md'>
                            {index + 1}
                          </span>
                              <div>
                                <h3 className='text-lg font-bold text-blue-500'>
                                  {title}
                                </h3>
                                <h4 className='font-bold text-sm'>
                                  {tagline}
                                </h4>
                              </div>
                            </header>
                            <p className='text-foreground/80'>{description}</p>
                          </div>
                        </CardHoverTopBorder>
                      </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};