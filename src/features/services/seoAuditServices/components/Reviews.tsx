'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, StarHalfIcon } from 'lucide-react';
import { reviews } from '../utils';
import { Beam } from '@/features/services/seoAuditServices/components/ui';
import { IconButton3D } from '@/components/ui';

export const ReviewsSection = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const starRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);

  return (
      <section className='w-full relative py-12' ref={containerRef}>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <div className="flex justify-center mb-4">
              <IconButton3D icon={StarHalfIcon} />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Real Results from <span className='heading-gradient'>Real Businesses</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-10"
            >
              See how our SEO audit services have helped businesses like yours
              achieve remarkable growth in traffic, rankings, and revenue.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='flex justify-center my-12'
                ref={starRef}
            >
              <Star className='w-24 h-24 fill-primary text-primary' />
            </motion.div>

            {/* Fixed beams */}
            <Beam
                containerRef={containerRef}
                fromRef={starRef}
                toRef={card1Ref}
                pathColor='#3b82f6'
                pathOpacity={0.2}
                gradientStartColor='#3b82f6'
                gradientStopColor='#3b82f6'
                startFromCenter={true}
            />
            <Beam
                containerRef={containerRef}
                fromRef={starRef}
                toRef={card2Ref}
                pathColor='#3b82f6'
                pathOpacity={0.2}
                gradientStartColor='#3b82f6'
                gradientStopColor='#3b82f6'
                startFromCenter={true}
            />
            <Beam
                containerRef={containerRef}
                fromRef={starRef}
                toRef={card3Ref}
                pathColor='#3b82f6'
                pathOpacity={0.2}
                gradientStartColor='#3b82f6'
                gradientStopColor='#3b82f6'
                startFromCenter={true}
            />
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-24'>
            {reviews.map((review, index) => (
                <motion.div
                    key={index}
                    ref={index === 0 ? card1Ref : index === 1 ? card2Ref : card3Ref}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className='bg-card p-6 rounded-xl border border-ring/20 hover:border-primary/50 transition-all duration-300 relative z-10'
                >
                  <div className='flex items-start gap-4'>
                    <Image
                        src={review.image}
                        alt={review.name}
                        width={128}
                        height={128}
                        className='rounded-full size-16 border-1 border-ring object-cover'
                    />
                    <div>
                      <h3 className='font-semibold'>{review.name}</h3>
                      <p className='text-sm text-foreground/70'>{review.company}</p>
                    </div>
                  </div>

                  <div className='flex gap-1 my-4'>
                    {[...Array(review.stars)].map((_, i) => (
                        <Star
                            key={i}
                            className='w-4 h-4 fill-yellow-400 text-yellow-400'
                        />
                    ))}
                  </div>

                  <p className='text-foreground/80'>{review.review}</p>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};