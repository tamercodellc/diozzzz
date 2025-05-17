'use client';

import React, { useRef } from 'react';
import { Store, CheckCircle2 } from 'lucide-react';
import { FeaturedImages } from './Reviews';
import { Badge, ShimmerButton } from '@/components/ui';
import { SignupFormDemo } from './ecommerceForm';
import { motion, useInView } from 'framer-motion';

export const EcomerceHero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <div
          ref={sectionRef}
          className="relative overflow-hidden sm:py-8 lg:py-12 flex flex-col mt-28"
      >
        {/* Background Elements */}
        {/* <div className="absolute inset-0">
        <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      </div> */}

        {/* Grid Pattern */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.1)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            {/* Left Column with Form */}
            <motion.div
                className="relative w-full lg:w-1/2 h-full flex items-center overflow-visible bg-transparent justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
            >
              <SignupFormDemo />
            </motion.div>

            {/* Right Column */}
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
              {/* Reviews */}
              <motion.div
                  className="flex justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
              >
                <FeaturedImages
                    textClassName="text-center lg:text-left"
                    className="justify-center lg:justify-start items-center"
                    showStars
                />
              </motion.div>

              {/* Badge */}
              <motion.div
                  className="relative z-10 flex justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
              >
                <Badge
                    text="Boost Your E-commerce Sales With Our SEO Services"
                    icon={Store}
                />
              </motion.div>

              {/* Heading */}
              <motion.h1
                  className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ddtext-foreground'
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.7 }}
              >
                Drive More Sales To Your <span className='heading-gradient'>Online Store</span> With E-commerce SEO
              </motion.h1>

              {/* Subheading */}
              <motion.p
                  className="text-base md:text-lg text-foreground/80 mx-auto lg:mx-0 max-w-2xl lg:max-w-none backdrop-filter backdrop-blur-md p-1 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
              >
                Transform your online store into a sales powerhouse. Our
                E-commerce SEO services help you rank higher, drive more qualified
                traffic, and increase conversions. We optimize product pages,
                enhance site structure, and implement proven strategies to make
                your store stand out in the competitive e-commerce landscape.
              </motion.p>

              {/* CTA and Reviews Section */}
              <motion.div
                  className="flex flex-col gap-6 items-center justify-center lg:items-start max-w-xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
              >
                <ShimmerButton size="big" variant="solid">
                  Claim My 1st Position
                </ShimmerButton>

                <motion.ul
                    className="space-y-3 text-foreground/90 mt-8 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
                >
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>
                    93% of online experiences begin with a search engine
                  </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>
                    E-commerce sites with strong SEO see 2.6x higher conversion
                    rates
                  </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>
                    43% of e-commerce traffic comes from organic Google search
                  </span>
                  </li>
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  );
};