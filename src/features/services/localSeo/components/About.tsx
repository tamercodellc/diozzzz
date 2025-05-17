'use client';
import Image from 'next/image';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export function About() {
  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-primary/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(19,137,253,0.03)]">
          <div className="border-t border-b border-primary/20 py-[16px] w-full">
            <div className="border-t border-b border-primary/20 py-[16px] bg-gradient-to-r from-transparent via-primary/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              {/* Background gradient */}
              <div className='absolute inset-0'>
                <span className='absolute w-[400px] h-[400px] bg-gradient-to-r from-primary to-ring via-secondary rounded-full blur-3xl opacity-10 top-1/3 left-3/4'></span>
                <span className='absolute w-[400px] h-[400px] bg-gradient-to-r from-primary to-ring via-secondary rounded-full blur-3xl opacity-10 bottom-1/3 right-1/2'></span>
              </div>

              <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                  {/* Left Column - Image with enhanced styling */}
                  <motion.div
                      className='relative'
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <div className='relative overflow-hidden'>
                      <Image
                          src='/jorgeR.webp'
                          alt='Jorge Raydel Sanchez'
                          className='w-full h-[32rem] object-contain'
                          width={1200}
                          height={400}
                          priority
                      />
                    </div>

                    {/* Small thumbnails below main image */}
                    <motion.div
                        className='grid grid-cols-3 gap-4 mt-4'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {[1, 2, 3].map((index) => (
                          <div
                              key={index}
                              className='relative overflow-hidden aspect-square'
                          >
                            <Image
                                src={`/features/services/local-seo/thumbnail-${index}.webp`}
                                alt={`SEO Service Thumbnail ${index}`}
                                className='w-full h-full object-cover'
                                width={150}
                                height={150}
                            />
                          </div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Right Column - Text */}
                  <div>
                    {/* Heading Section with IconButton3D */}
                    <div className="mb-10">
                      <div className="flex justify-start mb-4">
                        <IconButton3D icon={User} variant="blue" />
                      </div>

                      <motion.h2
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                      >
                        Google Business Profile <br/>
                        <span className='heading-gradient'>Expert</span>
                      </motion.h2>

                      <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="text-foreground/80 max-w-2xl mb-8 text-lg"
                      >
                        52% of local businesses haven't even claimed their Google Business Profile.
                      </motion.p>
                    </div>

                    <motion.div
                        className='space-y-6 text-foreground/90'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                      <p className='text-2xl font-bold text-foreground'>
                        I&apos;m Jorge R Sanchez, founder of TAMERDigital, and I&apos;m
                        here to help you grow.
                      </p>

                      <p className='text-base leading-relaxed'>
                        My superpower is making your business stand out in Google&apos;s
                        Local Pack where countless people are desperately searching for
                        services or products just like yours.
                      </p>

                      <p className='text-base leading-relaxed'>
                        As a certified Local SEO specialist with over a decade of
                        experience optimizing businesses for Google Maps, I combine the
                        expertise of working with businesses of all types and sizes,
                        battle tested positioning strategies, and a few tricks up my
                        sleeve that can only be gained by successfully ranking companies
                        that are a real challenge.
                      </p>

                      <h3 className='font-semibold text-xl text-primary'>I GET it.</h3>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}