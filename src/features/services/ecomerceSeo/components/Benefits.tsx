'use client';
import {
  Globe2,
  Search,
  BarChart,
  Users,
  Settings,
  Target,
  LineChart,
} from 'lucide-react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IconButton3D } from '@/components/ui';

export const EcomerceSEOBenefits = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-primary/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(19,137,253,0.03)]">
          <div className="border-t border-b border-primary/20 py-[16px] w-full">
            <div className="border-t border-b border-primary/20 py-[16px] bg-gradient-to-r from-transparent via-primary/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
                {/* Heading Section with IconButton3D */}
                <div className="text-center mb-16">
                  <div className="flex justify-center mb-4">
                    <IconButton3D icon={Globe2} variant="blue" />
                  </div>

                  <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                  >
                    Transform Your Store into a <br/>
                    <span className='heading-gradient'>Revenue Machine</span>
                  </motion.h2>

                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
                  >
                    Proven SEO Strategies That Drive Real Business Growth
                  </motion.p>
                </div>

                <motion.div
                    className="flex flex-col lg:flex-row gap-12 mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                  <motion.div
                      className="w-full lg:w-1/2 relative"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Image
                        src="/seo-dashboard.webp"
                        width={600}
                        height={400}
                        alt="SEO Dashboard"
                        className="rounded-lg shadow-lg"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
                      <p className="text-sm text-secondary font-medium">Average ROI</p>
                      <p className="text-lg font-bold ">567%</p>
                    </div>
                  </motion.div>
                  <motion.div
                      className="w-full lg:w-1/2 text-left"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-3xl font-bold mb-4 text-left">
                      Stop leaving money on <span className="text-secondary">the table</span>
                    </h3>
                    <p className="text-foreground/90 mb-6">
                      Our specialized e-commerce SEO services help you capture more market share, increase organic
                      traffic, and most importantly - convert that traffic into paying
                      customers. We don&apos;t just promise rankings; we deliver
                      measurable business growth.
                    </p>
                  </motion.div>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                  {/* Enhanced Visibility */}
                  <motion.div
                      className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/20 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                        <Search className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">
                      Enhanced Visibility
                    </h3>
                    <p className="text-foreground/90 text-center">
                      Dominate the first page of search results where your customers are
                      actively looking for your products. Increase your brand&apos;s
                      visibility and authority in your market.
                    </p>
                  </motion.div>

                  {/* Increased Organic Traffic */}
                  <motion.div
                      className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/20 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                        <Users className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">
                      Qualified Traffic
                    </h3>
                    <p className="text-foreground/90 text-center">
                      Attract highly targeted visitors who are actively searching for
                      your products, leading to better conversion rates and lower
                      acquisition costs.
                    </p>
                  </motion.div>

                  {/* Better User Experience */}
                  <motion.div
                      className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/20 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                        <Settings className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">
                      Enhanced User Experience
                    </h3>
                    <p className="text-foreground/90 text-center">
                      Improve site navigation and content quality to keep visitors
                      engaged longer, leading to higher conversion rates and customer
                      satisfaction.
                    </p>
                  </motion.div>

                  {/* Competitive Edge */}
                  <motion.div
                      className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/20 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                        <Target className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">
                      Competitive Advantage
                    </h3>
                    <p className="text-foreground/90 text-center">
                      Stay ahead of your competition with advanced SEO strategies that
                      help you capture market share and establish industry authority.
                    </p>
                  </motion.div>

                  {/* Cost-Effective Growth */}
                  <motion.div
                      className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/20 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.0 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                        <BarChart className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">
                      Sustainable Growth
                    </h3>
                    <p className="text-foreground/90 text-center">
                      Unlike paid advertising, SEO provides long-term benefits with a
                      higher ROI, creating a sustainable source of qualified traffic and
                      sales.
                    </p>
                  </motion.div>

                  {/* Data-Driven Results */}
                  <motion.div
                      className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/20 hover:border-primary/30 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                        <LineChart className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4">
                      Measurable Results
                    </h3>
                    <p className="text-foreground/90 text-center">
                      Track your success with comprehensive analytics that show real
                      business impact - from traffic increases to conversion
                      improvements.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};