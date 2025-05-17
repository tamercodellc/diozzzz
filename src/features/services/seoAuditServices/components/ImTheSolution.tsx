'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap } from 'lucide-react';
import { IconButton3D } from '@/components/ui';

export function ImTheSolution() {
  return (
      <div className='w-full py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col gap-12'>
            {/* Heading Section with Blue Theme */}
            <div>
              <div className="text-center mb-16">
                <div className="flex justify-center mb-4">
                  <IconButton3D icon={GraduationCap} />
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                >
                  We don't experiment with your business. <br/>
                  <span className='heading-gradient'>Every solution comes from real battles and proven studies.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-foreground/80 max-w-2xl mx-auto text-center mb-10"
                >
                  After spending a decade buried in technical SEO audits across every industry imaginable, one truth
                  became crystal clear: great SEO isn't about following a cookie-cutter checklist.
                </motion.p>
              </div>

              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className='space-y-6 text-left max-w-4xl mx-auto'
              >
                <div className='space-y-4'>
                  <p className='text-foreground/90 text-lg'>
                    Back in 2018, a failed SEO project taught me the most valuable
                    lesson: textbook solutions don&apos;t always translate to
                    real-world success. That experience transformed how I approach
                    SEO audits.
                  </p>

                  <p className='text-foreground/90 text-lg'>
                    While I&apos;m proud of my certifications from Google,
                    Semrush, and HubSpot, it&apos;s the hands-on experience from
                    helping over 400 businesses recover and grow their online
                    presence that truly matters. I&apos;ve developed a forensic
                    approach that doesn&apos;t just identify what&apos;s wrong
                    with your SEO – it reveals why it&apos;s happening and exactly
                    how to fix it.
                  </p>

                  <p className='text-foreground/90 text-lg'>
                    This combination of certified expertise and battle-tested
                    experience has become our secret weapon in turning SEO
                    disasters into success stories. Whether you&apos;re fighting
                    algorithm updates, technical issues, or mysterious ranking
                    drops, we&apos;ve been there and know the way out.
                  </p>
                </div>
              </motion.div>

              <motion.div
                  className='flex flex-row items-center justify-between w-full max-w-4xl mx-auto mt-8'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
              >
                <div className='flex items-center gap-3'>
                  <div className='h-2 w-2 rounded-full bg-primary'></div>
                  <span className='text-foreground text-sm'>
                  We understand your challenges
                </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='h-2 w-2 rounded-full bg-primary'></div>
                  <span className='text-foreground text-sm'>
                  We&apos;ve done this before
                </span>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='h-2 w-2 rounded-full bg-primary'></div>
                  <span className='text-foreground text-sm'>
                  We can handle any SEO issue
                </span>
                </div>
              </motion.div>
            </div>

            <motion.div
                className='flex-1 relative'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
              <div className='relative'>
                <div className='bg-background-primary rounded-lg overflow-hidden shadow-xl relative'>
                  <Image
                      src='/features/services/seo-audit-services/sad.jpg'
                      alt='SEO Expert at Work'
                      className='w-full h-[600px] object-cover object-center opacity-90'
                      width={1200}
                      height={800}
                  />
                  <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-primary to-transparent'></div>
                </div>
                <div className='absolute -bottom-8 left-0 right-0 flex justify-center gap-4'>
                  <Image
                      src='/features/services/seo-audit-services/100growth4.png'
                      alt='100% Growth Badge'
                      className='h-20 w-auto shadow-lg'
                      width={1200}
                      height={800}
                  />
                  <Image
                      src='/features/services/seo-audit-services/10years3.png'
                      alt='10 Years Experience Badge'
                      className='h-20 w-auto shadow-lg'
                      width={1200}
                      height={800}
                  />
                  <Image
                      src='/features/services/seo-audit-services/certifiedSeod.png'
                      alt='Certified SEO Badge'
                      className='h-20 w-auto shadow-lg'
                      width={1200}
                      height={800}
                  />
                  <Image
                      src='/features/services/seo-audit-services/seosolutione.png'
                      alt='SEO Solution Badge'
                      className='h-20 w-auto shadow-lg'
                      width={1200}
                      height={800}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  );
}