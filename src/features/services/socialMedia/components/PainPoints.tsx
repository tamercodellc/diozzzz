'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { painPoints } from '@/features/services/socialMedia/utils';
import { HeartPulse } from 'lucide-react';
import { IconButton3D } from '@/components/ui';
import { Card, InfoCard } from '@/components/ui';

export function PainPoints() {
  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-red-500/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(239,68,68,0.03)]">
          <div className="border-t border-b border-red-500/20 py-[16px] w-full">
            <div className="border-t border-b border-red-500/20 py-[16px] bg-gradient-to-r from-transparent via-red-500/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              <div className='max-w-[1600px] mx-auto px-4 py-12 overflow-hidden'>
                <div className='max-w-7xl mx-auto'>
                  {/* Heading Section with Red Theme */}
                  <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                      <IconButton3D icon={HeartPulse} variant="red" />
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                    >
                      Your Business Health is <br/>
                      <span className='heading-gradient-red-bright'>Too Important to Neglect</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/80 max-w-2xl mx-auto text-center"
                    >
                      Do you identify with any of these symptoms? They're clear
                      signs that your social media presence needs urgent professional
                      attention.
                    </motion.p>
                  </div>

                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className='flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12 py-4'
                  >
                    <div className='lg:w-3/4'>
                      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {painPoints.map((point, index) => (
                            <motion.div
                                key={index + point.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                            >
                              <Card>
                                <InfoCard
                                    color='red'
                                    description={point.description}
                                    icon={point.icon}
                                    title={point.title}
                                    index={index}
                                    className='w-full h-full'
                                />
                              </Card>
                            </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className='lg:w-1/4 relative rounded-2xl overflow-hidden'>
                      <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                          className='w-full h-full'
                      >
                        <Image
                            src='/features/services/social-media/issues.webp'
                            alt='Business issues illustration'
                            width={800}
                            height={600}
                            className='w-full h-full object-cover rounded-2xl'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent' />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}