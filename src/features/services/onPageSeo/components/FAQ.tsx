'use client';

import { ReactNode, useState, useRef, useEffect } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { FaQuestion } from 'react-icons/fa';
import { ShimmerButton, IconButton3D } from '@/components/ui';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: 'What to include on main service page SEO website?',
    answer:
        "Your main service page is often the first impression potential clients have of your business. It should tell a compelling story about your services while being optimized for search engines. Start with a clear, benefit-focused headline that immediately communicates your value proposition. Include detailed service descriptions that naturally incorporate relevant keywords. Build trust by showcasing real results through testimonials and case studies. Don't forget technical elements like optimized meta titles, structured data markup, and ensuring your page loads quickly on all devices. Most importantly, make it easy for visitors to take action with strategically placed CTAs throughout the page.",
  },
  {
    question: 'Why is on-page SEO important?',
    answer:
        "On-page SEO is the foundation of your website's success in search engines. Think of it as speaking the language that both search engines and your users understand. When you optimize your pages correctly, you're essentially creating a bridge between your content and your audience. This not only helps search engines understand and rank your content appropriately but also improves how users experience your site. Unlike paid advertising that stops working when you stop paying, on-page SEO continues to drive organic traffic over time, offering a much better return on investment. It's also crucial for building your site's credibility and authority in your industry, as well-optimized pages tend to perform better and engage users more effectively.",
  },
  {
    question: 'How to use AI for on-page SEO?',
    answer: (
        <>
          <p className="mb-4">
            AI is transforming how we approach on-page SEO, making it more
            efficient and effective than ever before. Modern AI tools can analyze
            your content and provide smart recommendations for optimization, help
            you understand user intent better, and even assist in creating content
            that resonates with both search engines and readers. AI can analyze
            vast amounts of data to identify patterns and opportunities that might
            be missed through manual analysis, helping you make more informed
            decisions about your SEO strategy.
          </p>
          <div className="flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300">
            <a href="/ai-seo-guide" className="flex items-center group">
              Learn more about AI-powered SEO
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </>
    ),
  },
  {
    question: 'What is on-page SEO optimization?',
    answer:
        "On-page SEO optimization is the art and science of making your web pages more attractive to both search engines and users. It encompasses everything that happens on your website to improve its search visibility. This includes crafting compelling titles and descriptions that encourage clicks from search results, creating valuable content that answers your audience's questions, and ensuring your site's technical elements like proper heading structure and image optimization are in place. It also involves making sure your site loads quickly and works well on mobile devices, as these factors significantly impact both rankings and user experience. Think of it as fine-tuning every aspect of your pages to create the best possible experience for both visitors and search engines.",
  },
];

export function OnPageSEOFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const [faqHeight, setFaqHeight] = useState<number>(0);
  const faqsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Update image container height to match FAQ column height
  useEffect(() => {
    if (faqsRef.current && imageContainerRef.current) {
      const updateHeight = () => {
        const faqHeight = faqsRef.current?.offsetHeight || 0;
        setFaqHeight(faqHeight);
        if (imageContainerRef.current) {
          imageContainerRef.current.style.height = `${faqHeight}px`;
        }
      };

      updateHeight();
      // Add resize listener
      window.addEventListener('resize', updateHeight);

      // Cleanup on unmount
      return () => {
        window.removeEventListener('resize', updateHeight);
      };
    }
  }, [openIndex]);

  return (
      <section className="py-24 relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-full max-w-7xl">
            <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute left-0 bottom-20 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={FaQuestion} />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Frequently Asked
              <span className='heading-gradient'> Questions</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center"
            >
              Get answers to your most pressing questions about optimizing your website for search engines
            </motion.p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image Column - Now with two stacked images */}
              <div className="relative h-full" ref={imageContainerRef}>
                <div className="absolute inset-0">
                  <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
                </div>
                <div className="sticky top-24 h-auto flex flex-col space-y-6">
                  {/* Top Image Card */}
                  <div className="relative rounded-xl bg-card/90 border border-foreground/20 backdrop-blur-xl p-8 shadow-xl flex-1">
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <Image
                          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340"
                          alt="SEO Analysis Dashboard"
                          className="object-cover rounded-xl shadow-lg max-w-full"
                          width={800}
                          height={600}
                      />
                    </div>

                    {/* Image overlay with stats */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-8 left-8 right-8 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-foreground/10">
                      <div className="text-center">
                        <h4 className="font-semibold mb-2">On-Page SEO Benefits</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span>Better Rankings</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>More Traffic</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Image Card */}
                  <div className="relative rounded-xl bg-card/90 border border-foreground/20 backdrop-blur-xl p-8 shadow-xl flex-1">
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <Image
                          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2340"
                          alt="SEO Strategy Planning"
                          className="object-cover rounded-xl shadow-lg max-w-full"
                          width={800}
                          height={600}
                      />
                    </div>

                    {/* Connection Lines similar to the Process component */}
                    <div className="absolute left-0 right-0 top-[50%] h-px bg-primary/20"></div>
                    <div className="absolute left-[50%] top-[25%] h-px w-[50%] bg-primary/20 transform rotate-90 origin-left"></div>

                    {/* Image overlay with stats */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-8 left-8 right-8 bg-card/80 backdrop-blur-sm rounded-lg p-4 border border-foreground/10">
                      <div className="text-center">
                        <h4 className="font-semibold mb-2">Conversion Impact</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            <span>Lower Bounce Rate</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span>Higher Conversions</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs Column */}
              <div ref={faqsRef}>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                      <div
                          key={index}
                          className="bg-card/90 border border-foreground/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30 shadow-md hover:shadow-lg"
                      >
                        <ShimmerButton
                            variant="ghost"
                            className="w-full justify-between p-6"
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        >
                          <div className="flex items-center gap-4 text-left">
                            <span className="text-2xl font-bold text-foreground/60">{index + 1}</span>
                            <h3 className="text-lg md:text-xl font-medium">{faq.question}</h3>
                          </div>
                          <ChevronDown
                              className={`${
                                  openIndex === index ? 'rotate-180' : 'rotate-0'
                              } transition-all duration-300 ease-in-out text-primary`}
                          />
                        </ShimmerButton>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${
                                openIndex === index
                                    ? 'max-h-[1000px] opacity-100'
                                    : 'max-h-0 opacity-0'
                            }`}
                        >
                          <div className="p-6 pt-0 text-foreground/80 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                  ))}
                </div>

                {/* Timeline Indicators - Similar to Process component */}
                <div className="mt-8 grid grid-cols-2 gap-8 text-center text-sm text-foreground/50">
                  <div>Common Questions</div>
                  <div>Expert Answers</div>
                </div>

                {/* Impact Quote */}
                <div className="mt-12 mb-8">
                  <blockquote className="text-xl font-medium italic text-foreground/90">
                    &quot;Proper on-page SEO isn&apos;t just about rankings—it&apos;s about
                    <span className="text-primary"> creating exceptional experiences</span> that convert visitors into customers.&quot;
                  </blockquote>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <ShimmerButton className="px-8 py-3 text-base">
                    Optimize Your On-Page SEO Now
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}