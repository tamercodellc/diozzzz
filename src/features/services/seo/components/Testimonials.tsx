'use client';
import Image from 'next/image';
import {
  Card,
  Quote,
  QuoteDescription,
} from '@/features/services/seo/components/ui';
import { testimonials } from '@/features/services/seo/utils';
import { IconSpeakerphone } from '@tabler/icons-react';
import { IconButton3D } from '@/components/ui';
import { motion } from 'framer-motion';

export function TestimonialsMasonryGrid() {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
      <div className='bg-gradient-to-b from-transparent via-card to-transparent'>
        <div className='text-center mb-12'>
          <div className='flex justify-center mb-4'>
            <IconButton3D icon={IconSpeakerphone} />
          </div>

          <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
          >
            Real Results,
            <span className='heading-gradient'> Real Transformations</span>
          </motion.h2>

          <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-foreground/80 max-w-2xl mx-auto text-center"
          >
            Don't just take our word for it - see how we've helped
            businesses like yours achieve remarkable growth through technical SEO
            excellence
          </motion.p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto items-start px-4 md:px-8 mt-10'>
            {grid.map((testimonialsCol, index) => (
                <div
                    key={`testimonials-col-${index}`}
                    className='grid gap-4 items-start'
                >
                  {testimonialsCol.map((testimonial) => (
                      <Card key={`testimonial-${testimonial.src}-${index}`}>
                        <Quote>{testimonial.quote}</Quote>
                        <div className='flex gap-2 items-center mt-8'>
                          <Image
                              src={testimonial.src}
                              alt='Manu Arora'
                              width={40}
                              height={40}
                              className='rounded-full'
                          />
                          <div className='flex flex-col'>
                            <QuoteDescription>{testimonial.name}</QuoteDescription>
                            <QuoteDescription className='text-[10px]'>
                              {testimonial.designation}
                            </QuoteDescription>
                          </div>
                        </div>
                      </Card>
                  ))}
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}