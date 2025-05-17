'use client';
import { FAQComponent2 } from '@/components/ui';
import { FAQItem } from '@/lib';
import { FaBezierCurve, FaQuestion } from 'react-icons/fa';
import { DollarSign, FastForward, School, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

const faqs: FAQItem[] = [
  {
    icon: FastForward,
    title: 'How quickly will I see results from Local SEO?',
    content:
        "Most clients see initial improvements within 30-60 days, with significant results in 3-4 months. Some of our clients have reported doubling their Google Maps views within the first 90 days. However, the exact timeline depends on your current online presence, competition, and market. We focus on sustainable, long-term growth rather than quick fixes that don't last.",
  },
  {
    icon: DollarSign,
    title: "What's the investment for Local SEO services?",
    content:
        'Our Local SEO packages start at $1,500 per month, with most clients investing between $1,500-$3,000 monthly depending on their goals and market competition. Consider this: many of our clients see a return of 3-5x their investment within the first 6 months through increased leads and sales. We also offer flexible payment plans to help you get started without a heavy upfront cost.',
  },
  {
    icon: FaBezierCurve,
    title: "What if I'm already working with another SEO company?",
    content:
        "We'll perform a free audit of your current Local SEO status and show you exactly where improvements can be made. Many of our most successful clients came to us after unsuccessful experiences elsewhere. We'll handle the transition smoothly and build upon any existing positive work while fixing issues that may be holding you back.",
  },
  {
    icon: School,
    title: 'Do I need technical knowledge to implement Local SEO?',
    content:
        'Not at all. We handle all technical aspects of Local SEO implementation. You focus on running your business while we manage your online presence. We provide regular, easy-to-understand reports showing your progress, and our team is always available to explain any aspect of our work.',
  },
  {
    icon: Sparkles,
    title: 'What makes your Local SEO services different?',
    content:
        "Unlike generic SEO services, we specialize exclusively in Local SEO with proven results across various industries. Our approach combines technical expertise with local market understanding. We've helped businesses achieve top 3 rankings in Google Maps across competitive markets, and our client retention rate is over 90% because our strategies actually work.",
  },
];

export function FAQ() {
  return (
      <div className='relative overflow-hidden min-h-[500px] mb-32'>
        {/* Background gradient */}
        <div className='absolute inset-0'>
          <div className='absolute right-64 top-14 w-[200px] md:w-[500px] h-[200px] md:h-[500px] bg-gradient-to-r from-ring/10 to-transparent rounded-full blur-3xl'></div>
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start justify-start py-12'>
          {/* Two Column Layout */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column - FAQ Accordion */}
            <div>
              {/* Section Header with IconButton3D */}
              <div className="mb-16">
                <div className="flex justify-center lg:justify-start mb-4">
                  <IconButton3D icon={FaQuestion} variant="blue" />
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6 text-center lg:text-left'
                >
                  Everything You Need <br/>
                  <span className='heading-gradient'>to Know</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-foreground/80 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left mb-8"
                >
                  Get answers to the most common questions about our Local SEO services
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                  <FAQComponent2 items={faqs} />
                </motion.div>
              </div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                  src='/jorgeR.webp'
                  alt='SEO Expert'
                  className='h-[34rem] object-scale-down object-center'
                  width={1200}
                  height={800}
                  style={{
                    maskImage: 'linear-gradient(black 80%, transparent)',
                  }}
              />
            </motion.div>
          </div>
        </div>
      </div>
  );
}