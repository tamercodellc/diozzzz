'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { results } from '@/features/services/seoAuditServices/utils';
import { ShimmerButton, IconButton3D } from '@/components/ui';
import { BsChevronCompactUp } from 'react-icons/bs';
import Image from 'next/image';

export function ResultsShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-primary/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(19,137,253,0.03)]">
          <div className="border-t border-b border-primary/20 py-[16px] w-full">
            <div className="border-t border-b border-primary/20 py-[16px] bg-gradient-to-r from-transparent via-primary/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              <div className='max-w-7xl mx-auto px-4 md:px-8 py-12'>
                {/* Heading Section with Blue Theme */}
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-4">
                    <IconButton3D icon={BsChevronCompactUp} />
                  </div>

                  <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                  >
                    Discover how our SEO audit service <br/>
                    <span className='heading-gradient'>boosted revenue traffic for 200+ businesses</span>
                  </motion.h2>

                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-foreground/80 max-w-2xl mx-auto text-center mb-10"
                  >
                    Real results from real businesses that trusted our comprehensive SEO audit process to transform their online presence.
                  </motion.p>
                </div>

                <motion.div
                    className='flex flex-wrap-reverse justify-center items-center gap-12 px-2 py-4 relative'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                  <div>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.3 }}
                        className='space-y-4 md:max-w-xl w-full h-80'
                    >
                      <h2 className='text-xl font-bold text-foreground'>{results[currentSlide].title}</h2>

                      <p className='text-foreground/80 text-lg'>
                        {results[currentSlide].description}
                      </p>

                      <div className='flex flex-col gap-4 items-start pb-4 mt-4'>
                        <div>
                          <h4 className='text-foreground font-medium mb-1'>Before:</h4>
                          <div className='text-xl font-semibold text-foreground'>
                            {results[currentSlide].before}
                          </div>
                        </div>

                        <div>
                          <h4 className='text-foreground font-medium mb-1'>After SeoProfy:</h4>
                          <div className='text-xl font-semibold text-green-500'>
                            {results[currentSlide].after}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className='flex items-center justify-center'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className='bg-foreground rounded-lg h-80 shadow-xl overflow-hidden'
                    >
                      <Image
                          src={'/features/services/seo-audit-services/analytics.webp'}
                          alt='Analytics Results'
                          className='min-w-5xl lg:w-full h-full rounded-lg object-cover'
                          width={1000}
                          height={1000}
                      />
                    </motion.div>

                    <div className='absolute -bottom-10 pt-1 rounded-lg left-1/2 -translate-x-1/2 flex items-center gap-4'>
                      <ShimmerButton
                          variant='outline'
                          size='sm'
                          onClick={prevSlide}
                          className='rounded-full hover:bg-primary'
                      >
                        <ChevronLeft className='w-5 h-5' />
                      </ShimmerButton>

                      <div className='flex gap-2'>
                        {results.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentSlide(idx)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    idx === currentSlide ? 'bg-primary' : 'bg-foreground/50'
                                }`}
                            />
                        ))}
                      </div>

                      <ShimmerButton
                          variant='outline'
                          size='sm'
                          onClick={nextSlide}
                          className='rounded-full hover:bg-primary'
                      >
                        <ChevronRight className='w-5 h-5' />
                      </ShimmerButton>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button outside of the carousel */}
                <motion.div
                    className="flex justify-center mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                  <ShimmerButton variant='solid' className="px-6 py-2.5 text-base">
                    Get results like that for my business
                  </ShimmerButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}