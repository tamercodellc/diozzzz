'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { HeroButtonsSet } from '@/components/ui';
import { IconButton3D } from '@/components/ui';

const messages = [
  {
    text: 'Our organic traffic increased by 312% in 6 months!',
    delay: 0.7,
    avatar: '/avatar2.webp',
    position: 'right',
  },
  {
    text: 'How did you handle the product variations?',
    delay: 1.1,
    avatar: '/avatar3.webp',
    position: 'left',
  },
  {
    text: "Their technical SEO audit found issues we didn't even know existed",
    delay: 1.5,
    avatar: '/avatar4.webp',
    position: 'right',
  },
  {
    text: 'Our conversion rate doubled after implementing their suggestions',
    delay: 1.9,
    avatar: '/avatar1.webp',
    position: 'left',
  },
  {
    text: "Best ROI we've seen from any marketing investment",
    delay: 2.3,
    avatar: '/avatar2.webp',
    position: 'right',
  },
];

export const EcomerceFinalCTA = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <div ref={sectionRef} className="w-full py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Heading Section with IconButton3D */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={MessageCircle} variant="blue" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Ready to Dominate <br/>
              <span className='heading-gradient'>E-commerce Search Rankings?</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
            >
              Join hundreds of e-commerce stores already dominating their markets
            </motion.p>
          </div>

          <div className="absolute inset-0">
            <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
          </div>

          <motion.div
              className="bg-foreground/5 backdrop-blur-sm rounded-lg p-8 border border-foreground/10 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-44">
              {/* Left side - Animated Chat Messages */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground/80">Live Chat</span>
                </div>
                {messages.map((message, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: message.delay, duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`flex items-start gap-3 ${message.position === 'right' ? 'justify-end' : ''}`}
                    >
                      {message.position === 'left' && (
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={message.avatar}
                                alt="User Avatar"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                            />
                          </div>
                      )}
                      <div
                          className={`px-4 py-2 rounded-lg backdrop-blur-sm ${
                              message.position === 'right'
                                  ? 'bg-primary/20'
                                  : 'bg-foreground/10'
                          }`}
                      >
                        <p className="text-pretty">{message.text}</p>
                      </div>
                      {message.position === 'right' && (
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                                src={message.avatar}
                                alt="User Avatar"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                            />
                          </div>
                      )}
                    </motion.div>
                ))}
              </div>

              {/* Right side - CTA Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold"
                >
                  Take The Next Step <span className="text-primary">Today</span>
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-xl text-foreground/90"
                >
                  Get your free custom SEO strategy and discover how we can help
                  your store reach its full potential
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    viewport={{ once: true }}
                >
                  <HeroButtonsSet
                      firstBtnText="Get My Free SEO Strategy"
                      secondBtnText="Schedule a Call"
                  />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                    viewport={{ once: true }}
                    className="text-sm text-foreground/80"
                >
                  Join hundreds of e-commerce stores already dominating their
                  markets
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  );
};