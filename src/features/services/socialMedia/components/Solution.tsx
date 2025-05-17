'use client';

import {
  TrendingUp,
  CheckCircle,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Target,
  Contact,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export function Solution() {
  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-blue-500/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(59,130,246,0.03)]">
          <div className="border-t border-b border-blue-500/20 py-[16px] w-full">
            <div className="border-t border-b border-blue-500/20 py-[16px] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              <div className='max-w-5xl mx-auto px-4 py-16'>
                {/* Banner superior */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className='bg-gradient-to-r from-primary/20 to-ring/20 rounded-lg overflow-hidden mb-12'
                >
                  <div className='relative h-64 w-full'>
                    {/* Reserved space for image */}
                  </div>
                </motion.div>

                {/* Contenido principal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className='bg-gradient-to-b from-transparent to-card rounded-lg shadow-sm px-8 py-12'
                >
                  <div className='flex items-center justify-start flex-col gap-y-12'>
                    {/* Heading Section with Blue Theme */}
                    <div className="text-center w-full">
                      <div className="flex justify-center mb-6">
                        <IconButton3D icon={Contact} variant="blue" />
                      </div>

                      <motion.h2
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                      >
                        The Solution <br/>
                        <span className='heading-gradient'>You Need</span>
                      </motion.h2>

                      <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
                      >
                        With over 7 years of experience, we specialize in attracting
                        targeted audiences to build engaged communities that eventually
                        convert into qualified leads. We seamlessly integrate this with
                        proper email marketing management and sales funnels to maximize
                        your ROI. Our certifications and industry awards validate our
                        expertise in delivering measurable results for businesses across
                        multiple sectors.
                      </motion.p>
                    </div>

                    {/* Credentials grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-5 w-full mb-8'
                    >
                      <div className='flex items-center gap-3 bg-ring/10 p-3 rounded-lg border border-ring/10 hover:border-ring/30 transition-colors duration-300'>
                        <div className='bg-primary/20 rounded-full p-2 flex-shrink-0'>
                          <TrendingUp className='text-primary w-5 h-5' />
                        </div>
                        <div className='min-w-0'>
                  <span className='text-foreground font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis block'>
                    +500% Average Growth
                  </span>
                          <p className='text-foreground/80 text-xs'>For our clients</p>
                        </div>
                      </div>

                      <div className='flex items-center gap-3 bg-ring/10 p-3 rounded-lg border border-ring/10 hover:border-ring/30 transition-colors duration-300'>
                        <div className='bg-primary/20 rounded-full p-2 flex-shrink-0'>
                          <Target className='text-primary w-5 h-5' />
                        </div>
                        <div className='min-w-0'>
                  <span className='text-foreground font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis block'>
                    Conversion Specialists
                  </span>
                          <p className='text-foreground/80 text-xs'>
                            Followers to customers
                          </p>
                        </div>
                      </div>

                      <div className='flex items-center gap-3 bg-ring/10 p-3 rounded-lg border border-ring/10 hover:border-ring/30 transition-colors duration-300'>
                        <div className='bg-primary/20 rounded-full p-2 flex-shrink-0'>
                          <CheckCircle className='text-primary w-5 h-5' />
                        </div>
                        <div className='min-w-0'>
                  <span className='text-foreground font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis block'>
                    Official Partner
                  </span>
                          <p className='text-foreground/80 text-xs'>
                            Recognized expertise
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Second Row: Understanding & Platforms */}
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="space-y-10"
                  >
                    {/* Personal Connection Story */}
                    <div className='bg-ring/10 p-6 rounded-lg border-l-4 border-primary shadow-sm'>
                      <h4 className='font-medium text-foreground mb-3 text-lg'>
                        We Understand Your Frustration
                      </h4>
                      <p className='text-foreground/80'>
                        &#34;Many businesses invest time and money in social media
                        without getting results. Constant posting, following trends, but
                        no real growth or conversions. That&apos;s why we developed a
                        system focused not just on numbers, but on attracting people who
                        will actually become customers.&#34;
                      </p>
                    </div>

                    {/* Social Platforms */}
                    <div>
                      <h4 className='font-medium text-foreground mb-4 text-lg text-center'>
                        Platforms We Manage
                      </h4>
                      <div className='flex flex-wrap gap-3 justify-center'>
                        <div className='flex items-center px-4 py-2 bg-ring/10 rounded-full border border-ring/10 hover:border-ring/30 transition-colors duration-300'>
                          <Instagram size={18} className='text-[#E1306C] mr-2' />
                          <span className='text-sm text-foreground'>Instagram</span>
                        </div>
                        <div className='flex items-center px-4 py-2 bg-ring/10 rounded-full border border-ring/10 hover:border-ring/30 transition-colors duration-300'>
                          <Twitter size={18} className='text-blue-400 mr-2' />
                          <span className='text-sm text-foreground'>X</span>
                        </div>
                        <div className='flex items-center px-4 py-2 bg-ring/10 rounded-full border border-ring/10 hover:border-ring/30 transition-colors duration-300'>
                          <Facebook size={18} className='text-[#4267B2] mr-2' />
                          <span className='text-sm text-foreground'>Facebook</span>
                        </div>
                        <div className='flex items-center px-4 py-2 bg-ring/10 rounded-full border border-ring/10 hover:border-ring/30 transition-colors duration-300'>
                          <Linkedin size={18} className='text-[#0077B5] mr-2' />
                          <span className='text-sm text-foreground'>LinkedIn</span>
                        </div>
                        <div className='flex items-center px-4 py-2 bg-ring/10 rounded-full border border-ring/10 hover:border-ring/30 transition-colors duration-300'>
                          <svg
                              width='18'
                              height='18'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              className='text-[#FF0000] mr-2'
                          >
                            <path d='M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z' />
                            <polygon points='9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' />
                          </svg>
                          <span className='text-sm text-foreground'>YouTube</span>
                        </div>
                        <div className='flex items-center px-4 py-2 bg-ring/10 rounded-full border border-ring/10 hover:border-ring/30 transition-colors duration-300'>
                          <svg
                              width='18'
                              height='18'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                              className='text-[#000000] mr-2'
                          >
                            <path d='M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2'></path>
                            <path d='M8 11.5v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2H8z'></path>
                            <path d='M10 9.5v-1a2 2 0 0 1 4 0v1'></path>
                            <path d='M8 11.5v2a4 4 0 0 0 8 0v-2'></path>
                          </svg>
                          <span className='text-sm text-foreground'>TikTok</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Third Row: Our Approach */}
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      className="mt-12"
                  >
                    {/* Solution Explanation */}
                    <h4 className='font-semibold text-foreground mb-4 text-lg'>
                      Our Approach Is Different
                    </h4>
                    <p className='text-foreground/80 mb-6'>
                      Our{' '}
                      <span className='font-medium text-primary'>
                Social Growth & Convert
              </span>{' '}
                      strategy includes:
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                      <div className='flex items-start gap-3 group'>
                        <div className='bg-primary/20 text-primary rounded-full p-1.5 group-hover:bg-primary/30 transition-colors duration-300'>
                          <svg
                              width='16'
                              height='16'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                          >
                            <path d='M5 12l5 5L20 7' />
                          </svg>
                        </div>
                        <span className='text-foreground/80 group-hover:text-foreground transition-colors duration-300'>
                  Audience analysis to create content that really resonates
                </span>
                      </div>

                      <div className='flex items-start gap-3 group'>
                        <div className='bg-primary/20 text-primary rounded-full p-1.5 group-hover:bg-primary/30 transition-colors duration-300'>
                          <svg
                              width='16'
                              height='16'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                          >
                            <path d='M5 12l5 5L20 7' />
                          </svg>
                        </div>
                        <span className='text-foreground/80 group-hover:text-foreground transition-colors duration-300'>
                  Strategic editorial calendar with value and conversion content
                </span>
                      </div>

                      <div className='flex items-start gap-3 group'>
                        <div className='bg-primary/20 text-primary rounded-full p-1.5 group-hover:bg-primary/30 transition-colors duration-300'>
                          <svg
                              width='16'
                              height='16'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                          >
                            <path d='M5 12l5 5L20 7' />
                          </svg>
                        </div>
                        <span className='text-foreground/80 group-hover:text-foreground transition-colors duration-300'>
                  Community management that builds real relationships
                </span>
                      </div>

                      <div className='flex items-start gap-3 group'>
                        <div className='bg-primary/20 text-primary rounded-full p-1.5 group-hover:bg-primary/30 transition-colors duration-300'>
                          <svg
                              width='16'
                              height='16'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='2'
                          >
                            <path d='M5 12l5 5L20 7' />
                          </svg>
                        </div>
                        <span className='text-foreground/80 group-hover:text-foreground transition-colors duration-300'>
                  Email marketing integration to nurture leads into customers
                </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}