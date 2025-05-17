'use client';
import { motion, useInView } from 'framer-motion';
import { businessTypes } from '@/features/services/utils';
import { ShimmerButton, IconButton3D } from '@/components/ui';
import { FaIndustry } from 'react-icons/fa';
import { IndustriesCard } from '@/features/services/components';
import { useRef } from 'react';

export function Industries() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <div ref={sectionRef} className='relative w-full py-24 md:py-32 overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <div className='flex justify-center mb-4'>
              <IconButton3D icon={FaIndustry} variant="blue" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Technical SEO Solutions for <br/>
              <span className='heading-gradient'>Every Industry</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
            >
              From healthcare to e-commerce, we deliver industry-specific
              technical SEO solutions that drive real business growth
            </motion.p>
          </div>

          <motion.div
              className='flex flex-wrap gap-4 items-center justify-center'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
          >
            {businessTypes.map(({ icon, name }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <IndustriesCard icon={icon} index={index} name={name} />
                </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <div className='mt-16 text-center'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className='bg-gradient-to-r from-ring/10 via-ring/20 to-ring/10 rounded-2xl p-8 border border-primary/20'
            >
              <h3 className='text-2xl font-bold text-foreground mb-4'>
                Don&apos;t See Your Industry?
              </h3>
              <p className='text-foreground/80 max-w-2xl mx-auto mb-8'>
                Our technical SEO expertise extends to every type of business.
                Let&apos;s discuss how we can help your specific industry dominate
                search rankings.
              </p>
              <ShimmerButton variant='solid'>Contact Us Today</ShimmerButton>
            </motion.div>
          </div>
        </div>
      </div>
  );
}