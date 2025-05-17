'use client';
import { cn } from '@/lib/utils';
import {
  ComparisonTable,
  FeaturesSection,
  PricingCTA,
  PricingTable,
  PricingFAQ,
  PricingCTABottom,
} from './components';
import { motion } from 'framer-motion';
import { useRef } from "react";

export default function Pricing() {
  const sectionRef = useRef(null);

  return (
      <main className='min-h-screen'>
        <div className='w-full relative overflow-x-hidden'>
          <div className={cn('flex flex-col ')}>
            <section ref={sectionRef} className='relative pt-20 pb-16 flex items-center justify-center'>
              <div className='max-w-7xl mx-auto px-4 relative z-10'>
                <div className='flex flex-col items-center text-center'>
                  <motion.h1
                      className='font-bold mb-6 pt-16'
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.7 }}
                  >
                    Choose Your
                    <span className='heading-gradient'> Digital Growth Plan</span>
                  </motion.h1>
                  <motion.p
                      className="relative z-10 mx-auto mt-2 max-w-2xl text-center text-sm md:text-lg text-gray-700 dark:text-white backdrop-filter backdrop-blur-md p-1 rounded-lg mb-6 text-pretty"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
                  >
                    Get the best value with our all-in-one growth bundles!
                    We&apos;ve packaged our most powerful tools and services
                    together with special discounts built in. Need something
                    specific? Visit individual service pages for flexible,
                    standalone pricing options.
                  </motion.p>
                </div>
              </div>
            </section>
            <PricingTable />
          </div>

          <div className='relative z-0 '>
            <div>
              <ComparisonTable />
            </div>
            <PricingCTA />
            <FeaturesSection />
            <PricingFAQ />
            <PricingCTABottom />
          </div>
        </div>
      </main>
  );
}