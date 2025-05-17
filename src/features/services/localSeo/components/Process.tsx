'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { ShimmerButton } from '@/components/ui';
import { Goal } from 'lucide-react';
import { IconButton3D } from '@/components/ui';

const DEFAULT_OPEN_INDEX = 0;

interface Service {
  title: string;
  description: string;
  bullets: string[];
}

const services: Service[] = [
  {
    title: 'Google Business Profile Optimization',
    description:
        'We claim and optimize your GBP listing with accurate NAP details, updated photos, and engaging business descriptions. Encourage and manage reviews to boost credibility.',
    bullets: [
      'Complete profile optimization with NAP details',
      'Strategic photo and media updates',
      'Review management and response system',
      'Regular content updates and posts',
    ],
  },
  {
    title: 'On-Page SEO & Localized Keywords',
    description:
        'Integrate geo-specific terms like "Local SEO in Miami," "Miami digital marketing," and targeted neighborhood keywords to increase local relevance.',
    bullets: [
      'Miami-specific keyword integration',
      'Technical SEO optimization',
      'Local content structure improvement',
      'Mobile-first optimization',
    ],
  },
  {
    title: 'Citations & Directory Listings',
    description:
        'Ensure consistent information across top-tier directories (Yelp, Bing Places, Yellow Pages) for a powerful local footprint.',
    bullets: [
      'Directory listing optimization',
      'NAP consistency management',
      'Industry-specific citations',
      'Regular listing updates',
    ],
  },
  {
    title: 'Content Creation & Hyperlocal Targeting',
    description:
        'Craft blog posts and service pages that speak directly to Miami audiences. Highlight local events, partnerships, and community involvement.',
    bullets: [
      'Local content strategy',
      'Community engagement content',
      'Area-specific landing pages',
      'Event and news coverage',
    ],
  },
  {
    title: 'Review Management & Reputation Building',
    description:
        'Monitor and respond to online reviews—both positive and negative—to cultivate trust. Implement systematic review-request campaigns.',
    bullets: [
      'Review monitoring system',
      'Response management',
      'Review generation strategy',
      'Reputation monitoring',
    ],
  },
  {
    title: 'Analytics & Continuous Optimization',
    description:
        'Track your rankings on Google Maps and organic results with advanced reporting tools. Adapt and refine strategies monthly.',
    bullets: [
      'Performance tracking',
      'Strategy adjustments',
      'Growth monitoring',
      'ROI analysis',
    ],
  },
  {
    title: 'Sustained Success & Growth',
    description:
        'Watch your business thrive with a steady stream of new customers and growing revenue. Enjoy the benefits of being the go-to choice in your local market.',
    bullets: [
      'Consistent flow of qualified leads',
      'Increased brand recognition',
      'Sustainable market dominance',
      'Long-term business growth',
    ],
  },
];

export function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(DEFAULT_OPEN_INDEX);
  const [lastHoveredIndex, setLastHoveredIndex] = useState(DEFAULT_OPEN_INDEX);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
      <div className='relative -mt-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
          <div className='text-center mb-16 flex flex-col items-center justify-center gap-4'>
            <div className="flex justify-center mb-4">
              <IconButton3D icon={Goal} variant="blue" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Dominate Your <br />
              <span className='heading-gradient'>Local Market with SEO</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
            >
              Turn local searches into customers with our systematic SEO strategy
            </motion.p>
          </div>

          <div className={`flex flex-col md:flex-row gap-4 ${isMobile ? 'h-auto' : 'h-[500px] md:h-[700px]'} overflow-visible justify-center mx-auto max-w-[1400px] px-4 md:px-0 py-8`}>
            {services.map((service, index) => {
              const isActive = hoveredIndex === index || (hoveredIndex === null && lastHoveredIndex === index);

              return (
                  <motion.div
                      key={index}
                      className={`relative group overflow-hidden rounded-2xl transition-all duration-500
                ${isMobile ? 'h-[450px] mb-6 w-full' : `${isActive ? 'h-full md:w-[35%]' : 'h-full md:w-[10%]'}`}
                transform transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                ${!isMobile && 'hover:scale-[1.02]'}`}
                      onMouseEnter={() => {
                        if (!isMobile) {
                          setHoveredIndex(index);
                          setLastHoveredIndex(index);
                        }
                      }}
                      onMouseLeave={() => {
                        if (!isMobile) {
                          setHoveredIndex(null);
                        }
                      }}
                      style={{
                        position: 'relative',
                        transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        background: 'transparent',
                        border: '2px solid rgba(255,255,255,0.05)',
                      }}
                  >
                    <div className='absolute inset-0 rounded-2xl border-2 border-primary/10 group-hover:border-primary/30 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-none z-50' />

                    <div className='absolute top-4 left-4 flex items-center gap-2 z-10'>
                      <span className='text-sm font-medium'>Step</span>
                      <div className='w-8 h-8 rounded-full bg-ring flex items-center justify-center font-bold shadow-lg ring-2 ring-ring/20'>
                        {index + 1}
                      </div>
                    </div>

                    <div className='absolute bottom-0 left-0 right-0 p-4 md:p-6'>
                      <motion.h3
                          className='text-lg md:text-xl font-semibold mb-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] text-shadow-sm'
                          style={
                            !isMobile && !isActive
                                ? {
                                  writingMode: 'vertical-rl',
                                  textOrientation: 'mixed',
                                  transform: 'rotate(180deg)',
                                  position: 'absolute',
                                  top: '20px',
                                  left: '50%',
                                  transformOrigin: 'top',
                                  translate: '-50%',
                                  whiteSpace: 'nowrap',
                                  textAlign: 'center',
                                  fontSize: '20px',
                                }
                                : undefined
                          }
                      >
                        {service.title}
                      </motion.h3>

                      <motion.p
                          className={`text-xs md:text-base transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden mb-4 
                    ${isMobile || isActive ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 hidden md:hidden'}`}
                      >
                        {service.description}
                      </motion.p>

                      <motion.ul
                          className={`space-y-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden 
                    ${isMobile || isActive ? 'opacity-100 max-h-60' : 'opacity-0 max-h-0'}`}
                      >
                        {service.bullets.map((bullet, i) => (
                            <li key={i} className='flex items-center text-xs md:text-sm'>
                              <svg className='w-3 h-3 md:w-4 md:h-4 mr-2 text-primary flex-shrink-0' viewBox='0 0 24 24' fill='none'>
                                <circle cx='12' cy='12' r='9' stroke='currentColor' strokeWidth='2' />
                                <path d='M9 12l2 2 4-4' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                              </svg>
                              {bullet}
                            </li>
                        ))}
                      </motion.ul>
                    </div>
                  </motion.div>
              );
            })}
          </div>

          <div className='container mx-auto mt-8 flex items-center justify-center p-4 flex-col text-center'>
            <h3 className='mb-8'>Conquer the Local Market with Confidence</h3>
            <ShimmerButton variant='solid'>Start Your Journey to Local Dominance</ShimmerButton>
          </div>
        </div>
      </div>
  );
}
