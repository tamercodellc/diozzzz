'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import {
  Search,
  Settings2,
  Globe,
  Megaphone,
  UserCheck,
  FileSpreadsheet,
} from 'lucide-react';
import { BsArrowsExpand } from 'react-icons/bs';
import { motion, useInView } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export const EcomerceProcess = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <div ref={sectionRef} className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Heading Section with IconButton3D */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={BsArrowsExpand} variant="blue" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Strategic E-commerce <br/>
              <span className='heading-gradient'>SEO Implementation Process</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
            >
              Our comprehensive approach to e-commerce SEO follows a proven
              methodology that maximizes visibility, drives qualified traffic, and
              increases conversions.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Text Content */}
            <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="grid grid-cols-1 gap-8 mt-12">
                {/* Step 1 */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Search className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Initial SEO Audit & Keyword Research
                    </h3>
                  </div>
                  <p className="text-foreground/80">
                    Comprehensive site analysis, technical audit, and strategic
                    keyword research focused on commercial intent.
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Settings2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Technical Optimization
                    </h3>
                  </div>
                  <p className="text-foreground/80">
                    Site speed enhancement, mobile optimization, XML sitemap
                    setup, and technical infrastructure improvements.
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      On-Page & Content Optimization
                    </h3>
                  </div>
                  <p className="text-foreground/80">
                    Product page optimization, category structure enhancement, and
                    strategic content development.
                  </p>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <Megaphone className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Link Building & Off-Page SEO
                    </h3>
                  </div>
                  <p className="text-foreground/80">
                    Strategic link acquisition, digital PR, and authority building
                    in your e-commerce niche.
                  </p>
                </motion.div>

                {/* Step 5 */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <UserCheck className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      UX & Conversion Optimization
                    </h3>
                  </div>
                  <p className="text-foreground/80">
                    Enhancing user experience, optimizing checkout process, and
                    improving conversion paths.
                  </p>
                </motion.div>

                {/* Step 6 */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                      <FileSpreadsheet className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Monitoring & Optimization
                    </h3>
                  </div>
                  <p className="text-foreground/80">
                    Continuous performance tracking, analytics review, and
                    strategy refinement.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Progress Chart */}
            <motion.div
                className="w-full lg:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/10">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-semibold text-foreground">
                    Our Workflow
                  </h3>
                  <span className="text-sm text-foreground/80">
                  Overall Progress: 100%
                </span>
                </div>

                {/* Progress Bars */}
                <div className="space-y-6">
                  <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, width: "0%" }}
                      whileInView={{ opacity: 1, width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 }}
                  >
                    <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">
                      Step 1: Initial SEO Audit
                    </span>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground/80">15%</span>
                        <span className="text-xs text-foreground/60">
                        (1-2 weeks)
                      </span>
                      </div>
                    </div>
                    <div className="h-2 bg-ring/5 rounded-full">
                      <motion.div
                          className="h-full bg-destructive rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "15%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7, duration: 0.8 }}
                      ></motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                  >
                    <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">
                      Step 2: Technical Optimization
                    </span>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground/80">35%</span>
                        <span className="text-xs text-foreground/60">
                        (2-3 weeks)
                      </span>
                      </div>
                    </div>
                    <div className="h-2 bg-ring/5 rounded-full">
                      <motion.div
                          className="h-full bg-orange-500 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "35%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8, duration: 0.8 }}
                      ></motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9 }}
                  >
                    <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">
                      Step 3: On-Page & Content
                    </span>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground/80">60%</span>
                        <span className="text-xs text-foreground/60">
                        (3-4 weeks)
                      </span>
                      </div>
                    </div>
                    <div className="h-2 bg-ring/5 rounded-full">
                      <motion.div
                          className="h-full bg-yellow-500 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "60%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.9, duration: 0.8 }}
                      ></motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.0 }}
                  >
                    <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">
                      Step 4: Link Building
                    </span>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground/80">80%</span>
                        <span className="text-xs text-foreground/60">
                        (Ongoing)
                      </span>
                      </div>
                    </div>
                    <div className="h-2 bg-ring/5 rounded-full">
                      <motion.div
                          className="h-full bg-lime-500 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "80%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.0, duration: 0.8 }}
                      ></motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1 }}
                  >
                    <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">
                      Step 5: UX Optimization
                    </span>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground/80">90%</span>
                        <span className="text-xs text-foreground/60">
                        (2-3 weeks)
                      </span>
                      </div>
                    </div>
                    <div className="h-2 bg-ring/5 rounded-full">
                      <motion.div
                          className="h-full bg-emerald-500 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "90%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.1, duration: 0.8 }}
                      ></motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.2 }}
                  >
                    <div className="flex justify-between text-sm">
                    <span className="text-foreground/80">
                      Step 6: Monitoring
                    </span>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground/80">100%</span>
                        <span className="text-xs text-foreground/60">
                        (Continuous)
                      </span>
                      </div>
                    </div>
                    <div className="h-2 bg-ring/5 rounded-full">
                      <motion.div
                          className="h-full bg-secondary-green rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.2, duration: 0.8 }}
                      ></motion.div>
                    </div>
                  </motion.div>

                  <p className="text-sm text-foreground/80 mt-4 italic">
                    * Initial implementation takes 8-12 weeks, with continuous
                    optimization thereafter
                  </p>
                </div>

                {/* Timeline */}
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.3 }}
                >
                  <div className="mt-4 flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-destructive"></div>
                      <span className="text-foreground/80">Starting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-foreground/80">In Progress</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-secondary-green"></div>
                      <span className="text-foreground/80">Complete</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-foreground/80">Continuous</span>
                    </div>
                  </div>
                </motion.div>

                {/* Additional Info Box */}
                <motion.div
                    className="mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-foreground/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                >
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Why Our Process Works
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-foreground/80 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>Data-driven approach with measurable milestones</span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground/80 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>
                      Continuous optimization based on performance metrics
                    </span>
                    </li>
                    <li className="flex items-center gap-3 text-foreground/80 text-sm">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>
                      Adaptable strategy that evolves with your business
                    </span>
                    </li>
                  </ul>
                </motion.div>

                {/* Process Image */}
                <motion.div
                    className="mt-8 relative w-full h-[200px] rounded-lg overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                >
                  <Image
                      src="/process-workflow.webp"
                      alt="SEO Process Workflow"
                      fill
                      className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  );
};