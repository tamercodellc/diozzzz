'use client';
import Image from 'next/image';
import { CheckCircle2, HeartPulse } from 'lucide-react';
import Link from 'next/link';
import { ShimmerButton } from '@/components/ui';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IconButton3D } from '@/components/ui';

export const EcomerceChallenges = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <div ref={sectionRef} className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading Section with IconButton3D */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={HeartPulse} variant="blue" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Common E-commerce <br/>
              <span className='heading-gradient'>SEO Challenges</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
            >
              We understand the unique challenges that e-commerce businesses face with SEO. Here's how we can help you overcome them.
            </motion.p>
          </div>

          <div className="space-y-24 mt-12">
            {/* Content Duplication Row */}
            <motion.div
                className="flex flex-col lg:flex-row items-center gap-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
              <motion.div
                  className="w-full lg:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-foreground">
                  Content Duplication & Cannibalization
                </h3>
                <p className="text-foreground/90">
                  We understand the frustration of managing thousands of product
                  pages. Duplicate content issues are more common than you think -
                  from similar product descriptions to category pages targeting
                  the same keywords. Our team has helped countless e-commerce
                  stores solve these challenges through:
                </p>
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <span>
                    Unique, AI-assisted product descriptions that maintain your
                    brand voice
                  </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <span>
                    Strategic internal linking to prevent keyword
                    cannibalization
                  </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <span>
                    Proper canonical tag implementation to manage duplicate
                    content
                  </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                    src="/content-duplication.webp"
                    width={600}
                    height={400}
                    alt="Content Duplication Challenge"
                    className="rounded-lg"
                />
              </motion.div>
            </motion.div>

            {/* Technical Issues Row */}
            <motion.div
                className="flex flex-col lg:flex-row items-center gap-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
              <motion.div
                  className="w-full lg:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-foreground">
                  Meta Tags & On-Page SEO
                </h3>
                <p className="text-foreground/90">
                  Poorly optimized meta tags can severely limit your visibility in
                  search results. Our comprehensive approach includes:
                </p>
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <span>
                    Strategic meta title and description optimization for better
                    CTR
                  </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <span>Product schema markup implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <span>Optimized header tags and content structure</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                    src="/meta-tags.webp"
                    width={600}
                    height={400}
                    alt="Meta Tags Optimization"
                    className="rounded-lg"
                />
              </motion.div>
            </motion.div>

            {/* Remaining rows follow the same pattern... */}
            {/* Site Architecture Row */}
            <motion.div
                className="flex flex-col lg:flex-row-reverse items-center gap-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
              <motion.div
                  className="w-full lg:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-foreground">
                  Site Architecture & Navigation
                </h3>
                <p className="text-foreground/90">
                  A poor site structure can confuse both users and search engines.
                  We implement clear, logical architectures through:
                </p>
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <span>Intuitive category and subcategory organization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <span>Strategic internal linking structure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <span>XML sitemap optimization</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                    src="/site-architecture.webp"
                    width={600}
                    height={400}
                    alt="Site Architecture"
                    className="rounded-lg"
                />
              </motion.div>
            </motion.div>

            {/* Continue with similar pattern for remaining rows */}
            {/* Social Proof Row */}
            <motion.div
                className="flex flex-col lg:flex-row items-center gap-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
              <motion.div
                  className="w-full lg:w-1/2 space-y-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-foreground">
                  Social Proof & Reviews
                </h3>
                <p className="text-foreground/90">
                  Not leveraging customer reviews and social proof can cost you
                  valuable trust signals. Our approach includes:
                </p>
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <span>Review schema implementation for rich snippets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <span>Customer review integration strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary/80 flex-shrink-0" />
                    <span>Social proof optimization for product pages</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image
                    src="/social-proof.webp"
                    width={600}
                    height={400}
                    alt="Social Proof"
                    className="rounded-lg"
                />
              </motion.div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                className="mt-24 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 flex flex-col md:flex-row items-center gap-4 border border-primary/10">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                      src="/adam.jpg"
                      width={48}
                      height={48}
                      alt="Adam T"
                      className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-foreground font-medium">
                    Want more traffic for your store?
                  </h4>
                  <p className="text-sm text-foreground/80">
                    Adam T, our Senior Rankings Expert is ready to talk strategy...
                  </p>
                </div>
                <Link href="#">
                  <ShimmerButton variant="solid">
                    Book A Free Strategy Call
                  </ShimmerButton>
                </Link>
              </div>

              <div className="mt-4 text-center">
                <p className="text-foreground/80 text-sm">
                  Not ready for a call?{' '}
                  <a href="#" className="text-primary/80 hover:underline">
                    Send us a message!
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
  );
};