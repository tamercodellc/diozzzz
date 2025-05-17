'use client';
import { motion } from 'framer-motion';
import { MountainIcon } from 'lucide-react';
import { IconButton3D, IntercaladeCards } from '@/components/ui';
import { visionItems } from '@/features/about/utils/Vision.const';
import React from "react";

export default function VisionSection() {
  return (
      <section className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='mb-4'
            >
              <IconButton3D icon={MountainIcon} />
            </motion.div>
            <motion.h2
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: 0.4}}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-center text-center pb-4 pt-4'
            >
              Shaping the
              <span className='heading-gradient'>  Digital Future</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="sm:mt-4 mt-4 max-w-3xl mx-auto text-foreground/80"
            >
              Our commitment to excellence drives us to push boundaries and create
              innovative solutions
            </motion.p>
          </div>

          <div className='relative grid grid-cols-1 md:grid-cols-2 gap-6'>
            {visionItems.map((item, index) => (
                <IntercaladeCards item={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>
  );
}