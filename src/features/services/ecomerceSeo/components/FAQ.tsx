'use client';

import { FaQuestion } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { IconButton3D } from '@/components/ui';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What makes e-commerce SEO different from regular SEO?',
    answer:
        'E-commerce SEO requires specialized strategies to handle unique challenges like product page optimization, category structure, faceted navigation, and shopping cart indexing. It focuses heavily on commercial intent keywords, product schema markup, and conversion optimization. Unlike regular SEO, e-commerce sites often deal with thousands of pages, seasonal inventory changes, and complex technical requirements for product variants.',
  },
  {
    question: 'How long does it take to see results from e-commerce SEO?',
    answer:
        "Initial improvements can be seen within 3-6 months, with significant results typically appearing in 6-12 months. However, this varies based on factors like your site's current authority, competition level, and technical foundation. Our process includes quick wins in the first 90 days while building long-term sustainable growth through strategic optimization.",
  },
  {
    question: 'How do you handle product pages that go out of stock?',
    answer:
        "We implement strategic solutions for out-of-stock products including: temporarily marking pages as 'out of stock' while maintaining their SEO value, implementing 301 redirects to similar products when items are permanently discontinued, and using schema markup to clearly communicate stock status to search engines. This helps preserve rankings while providing a good user experience.",
  },
  {
    question: 'Can you help with international e-commerce SEO?',
    answer:
        'Yes, we specialize in international e-commerce SEO. Our approach includes proper hreflang implementation, country-specific domain strategies, local keyword research, and cultural adaptation of content. We ensure your store ranks effectively in multiple markets while maintaining a consistent global brand presence.',
  },
  {
    question: 'How do you optimize for mobile shoppers?',
    answer:
        'Mobile optimization is crucial for e-commerce success. We focus on mobile-first design, accelerated page loading through advanced caching and image optimization, simplified checkout processes, and ensuring all product features are fully accessible on mobile devices. We also optimize for mobile-specific ranking factors and local shopping searches.',
  },
  {
    question: 'What about marketplace competition (Amazon, eBay)?',
    answer:
        "We help you compete effectively against marketplaces by focusing on your unique value propositions, building brand authority, and targeting specific niches where independent stores can outperform marketplaces. Our strategy includes optimizing for long-tail keywords, enhancing product descriptions, and building strong brand signals that marketplaces can't match.",
  },
];

export const EcomerceSEOFAQ = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
      <div ref={sectionRef} className="w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading Section with IconButton3D */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={FaQuestion} variant="blue" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Frequently Asked <br/>
              <span className='heading-gradient'>Questions</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
            >
              Get answers to the most common questions about our e-commerce SEO services
            </motion.p>
          </div>

          <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="space-y-4 hover:translate-y-[-5px] transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/80">{faq.answer}</p>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
  );
};