'use client';
import Image from 'next/image';
import { Target, LineChart, Gauge, Brain, HeartHandshake } from 'lucide-react';
import { ShimmerButton } from '@/components/ui';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IconButton3D } from '@/components/ui';

export const EcomerceSEOSolutions = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <div ref={sectionRef} className="container mx-auto relative overflow-visible">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading Section with IconButton3D */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={HeartHandshake} variant="blue" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              We've Been Where <br/>
              <span className='heading-gradient'>You Are</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
            >
              Having worked with hundreds of e-commerce stores, we've witnessed firsthand the frustration of seeing competitors outrank you despite having inferior products.
            </motion.p>
          </div>

          <div className="relative flex flex-col md:flex-row">
            <motion.div
                className="max-w-2xl relative z-10"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="space-y-6">
                <p className="text-foreground/90">
                  What sets us apart isn&apos;t just our patent on isolating Google
                  ranking factors (though we&apos;re the only SEO firm worldwide
                  with one) - it&apos;s our deep understanding of the e-commerce
                  ecosystem. We&apos;ve developed and refined our approach through
                  years of hands-on experience, helping stores like yours not just
                  survive, but thrive in the digital marketplace.
                </p>
                <ShimmerButton variant="solid" size="big">
                  Let&apos;s Solve This Together
                </ShimmerButton>
              </div>
            </motion.div>

            <motion.div
                className="absolute right-0 top-0 -mr-8 lg:-mr-24"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
            >
              <div className="relative">
                <Image
                    src="/adam-full.jpg"
                    width={600}
                    height={700}
                    alt="SEO Expert"
                    className="relative z-20"
                />
                <div className="absolute -right-4 top-8 z-10">
                  <Image
                      src="/lightning.svg"
                      width={180}
                      height={180}
                      alt="Lightning"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
            className="mt-24 w-full bg-card/80 backdrop-blur-sm rounded-lg py-16 relative z-0 border border-foreground/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Feature 1 */}
              <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    Targeted SEO for E-Commerce Success
                  </h3>
                  <p className="text-foreground/90">
                    We don&apos;t just implement generic SEO tactics - we develop
                    strategies specifically tailored to e-commerce, focusing on
                    what drives actual sales, not just rankings.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                    <LineChart className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    Full Transparency, No Surprises
                  </h3>
                  <p className="text-foreground/90">
                    We believe in complete visibility - you&apos;ll see exactly
                    what we&apos;re doing, why we&apos;re doing it, and how
                    it&apos;s impacting your bottom line. No mysteries, no jargon.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                    <Gauge className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    Agile Approach for Ever-Changing Market
                  </h3>
                  <p className="text-foreground/90">
                    E-commerce moves fast, and so do we. Our agile methodology
                    ensures your SEO strategy evolves with market trends and
                    algorithm updates, keeping you ahead of the curve.
                  </p>
                </div>
              </motion.div>

              {/* Feature 4 */}
              <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    Data-Driven Strategies with Proven Results
                  </h3>
                  <p className="text-foreground/90">
                    Our strategies aren&apos;t based on hunches - they&apos;re
                    built on over 400 real-world tests and backed by our patented
                    method for understanding Google&apos;s ranking factors.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
  );
};