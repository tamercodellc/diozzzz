'use client';

import React from 'react';
import { TrendingUp, Users, Globe } from 'lucide-react';
import { Icon } from '@iconify/react';
import { OrbitingCircles } from '@/features/services/socialMedia/components/ui';
import { FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export function SocialImportance() {
  return (
      <section className='relative w-full overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4'>
          {/* Heading Section with Blue Theme */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={FaFacebookF} variant="blue" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Why Social Media is <br/>
              <span className='heading-gradient'>Non-Negotiable in 2025</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center"
            >
              In today's digital age, social media isn't just an
              option—it's where your customers live, interact, and make
              buying decisions.
            </motion.p>
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='flex flex-col lg:flex-row gap-12'
          >
            {/* Left Column - Stats */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className='lg:w-1/2'
            >
              <div className='relative flex h-[700px] w-full flex-col items-center justify-center mb-8'>
                <OrbitingCircles iconSize={140}>
                  <Icon
                      icon='mdi:instagram'
                      className='w-20 h-20 text-pink-500'
                  />
                  <Icon icon='mdi:facebook' className='w-20 h-20 text-primary' />
                  <Icon icon='mdi:twitter' className='w-20 h-20 text-sky-500' />
                  <Icon icon='mdi:linkedin' className='w-20 h-20 text-blue-700' />
                  <Icon icon='mdi:youtube' className='w-20 h-20 text-red-500' />
                </OrbitingCircles>
                <OrbitingCircles iconSize={120} radius={240} reverse speed={2}>
                  <Icon icon='mdi:tiktok' className='w-20 h-20 text-foreground' />
                  <Icon icon='mdi:pinterest' className='w-20 h-20 text-red-500' />
                  <Icon
                      icon='mdi:snapchat'
                      className='w-20 h-20 text-yellow-400'
                  />
                  <Icon
                      icon='mdi:whatsapp'
                      className='w-20 h-20 text-green-500'
                  />
                </OrbitingCircles>
              </div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className='lg:w-1/2'
            >
              <div className='space-y-6 text-foreground/80 mt-12 xl:mt-0'>
                <p>
                  The digital landscape has fundamentally transformed how
                  businesses connect with their audience. Social media has become
                  the primary channel for brand discovery, customer engagement,
                  and business growth.
                </p>

                <div className='bg-card p-6 rounded-xl border border-ring'>
                  <h3 className='text-lg font-semibold text-foreground mb-3'>
                    The Modern Consumer Journey
                  </h3>
                  <p className='mb-4'>
                    Today&apos;s consumers don&apos;t just buy products—they buy
                    into brands. Before making a purchase:
                  </p>
                  <ul className='space-y-3'>
                    <li className='flex items-start gap-3'>
                      <div className='bg-primary/20 p-1 rounded mt-1'>
                        <TrendingUp size={16} className='text-primary' />
                      </div>
                      <span>82% research brands on social media</span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <div className='bg-primary/20 p-1 rounded mt-1'>
                        <Users size={16} className='text-primary' />
                      </div>
                      <span>
                      78% are influenced by social media posts when making
                      purchasing decisions
                    </span>
                    </li>
                    <li className='flex items-start gap-3'>
                      <div className='bg-primary/20 p-1 rounded mt-1'>
                        <Globe size={16} className='text-primary' />
                      </div>
                      <span>
                      71% are more likely to purchase from brands they follow on
                      social media
                    </span>
                    </li>
                  </ul>
                </div>

                <p>
                  Without a strong social media presence, businesses are missing
                  out on valuable opportunities to connect with their target
                  audience, build brand loyalty, and drive sustainable growth.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}