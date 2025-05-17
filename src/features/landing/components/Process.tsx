'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings } from 'lucide-react';
import {
  Search,
  Lightbulb,
  Rocket,
  Target,
  TrendingUp,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { IconButton3D } from '@/components/ui';

const steps = [
  {
    id: 1,
    title: 'Discovery',
    description: 'Deep analysis of your business and market landscape',
    focus: 'Understanding your digital ecosystem',
    importance:
        'This foundational phase reveals opportunities, threats, and untapped potential in your market. We analyze your competitors, identify keyword gaps, and evaluate your current digital performance to create a data-driven roadmap for success.',
    icon: Search,
    timeline: 'Weeks 1-2',
    details: [
      'Complete SEO Audit',
      'Competitor Analysis',
      'Keyword Research',
      'Performance Evaluation',
    ],
  },
  {
    id: 2,
    title: 'Strategy',
    description: 'Developing your unique action plan',
    focus: 'Creating your competitive advantage',
    importance:
        'A well-crafted strategy sets you apart from competitors. We combine market insights with your business goals to develop a customized plan that maximizes your ROI and ensures sustainable growth in your digital presence.',
    icon: Lightbulb,
    timeline: 'Weeks 3-4',
    details: [
      'SEO Content Planning',
      'Keyword Strategy',
      'Technical Planning',
      'KPI Definition',
    ],
  },
  {
    id: 3,
    title: 'Implementation',
    description: 'Executing optimized strategies',
    focus: 'Bringing strategies to life',
    importance:
        'This is where plans transform into action. Our systematic implementation ensures every aspect of your digital presence is optimized for maximum impact, from technical SEO to content creation and user experience enhancement.',
    icon: Rocket,
    timeline: 'Weeks 5-8',
    details: [
      'On-page Optimization',
      'Content Creation',
      'Technical Improvements',
      'Analytics Setup',
    ],
  },
  {
    id: 4,
    title: 'Optimization',
    description: 'Refining based on real data',
    focus: 'Maximizing performance',
    importance:
        'Continuous improvement is key to digital success. We analyze performance metrics, user behavior, and market trends to fine-tune strategies and enhance your ROI through data-driven optimization.',
    icon: Target,
    timeline: 'Weeks 9-12',
    details: [
      'Metrics Analysis',
      'Strategy Adjustments',
      'Conversion Optimization',
      'A/B Testing',
    ],
  },
  {
    id: 5,
    title: 'Scaling',
    description: 'Amplifying your digital success',
    focus: 'Expanding your digital footprint',
    importance:
        "Once we've established a strong foundation and proven success, we focus on scaling your digital presence. This involves exploring new markets, channels, and opportunities while maintaining the effectiveness of existing strategies.",
    icon: TrendingUp,
    timeline: 'Ongoing',
    details: [
      'Market Expansion',
      'Strategy Scaling',
      'Continuous Innovation',
      'New Opportunities',
    ],
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
      <div className="relative w-full overflow-hidden">
        <div className="relative bg-gradient-to-r from-transparent via-primary/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(19,137,253,0.03)]">
          {/* Top Borders */}
          <div className="absolute top-0 left-0 right-0 h-0 border-t border-primary/20" />
          <div className="absolute top-[16px] left-0 right-0 h-0 border-t border-primary/20" />
          {/* Bottom Borders */}
          <div className="absolute bottom-0 left-0 right-0 h-0 border-b border-primary/20" />
          <div className="absolute bottom-[16px] left-0 right-0 h-0 border-b border-primary/20" />

          <div className="py-16 md:py-24 relative bg-gradient-to-r from-transparent via-primary/5 to-transparent">
            {/* Header Section */}
            <div className="relative max-w-3xl mx-auto text-center mb-24 px-4">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
              >
                <IconButton3D icon={Settings} />
              </motion.div>
              <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-4 md:mb-6 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Transforming
                <span className='heading-gradient'> Your Online Presence</span>
              </motion.h2>
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-foreground/80 text-center"
              >
                We focus on understanding your business and market to create tailored
                strategies. With a detailed and transparent process, we’ll
                transform your digital presence into measurable results.
              </motion.p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Steps Navigation */}
              <div className="flex md:justify-between justify-center items-center mb-24 max-w-5xl mx-auto">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                      <button
                          key={step.id}
                          onClick={() => {
                            setActiveStep(index);
                            setIsPaused(true);
                          }}
                          onMouseEnter={() => setIsPaused(true)}
                          onMouseLeave={() => setIsPaused(false)}
                          className={`relative group ${
                              activeStep !== index && 'hidden md:block'
                          }`}
                      >
                        <div className="flex flex-col items-center gap-6 relative">
                          {/* Step Number */}
                          <div
                              className={`text-sm font-medium ${
                                  activeStep === index
                                      ? 'text-ring'
                                      : 'text-foreground/50'
                              }`}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          {/* Timeline */}
                          <div
                              className={`flex items-center gap-1 text-xs ${
                                  activeStep === index
                                      ? 'text-ring/80'
                                      : 'text-foreground/50'
                              }`}
                          >
                            <Clock className="w-3 h-3" />
                            <span>{step.timeline}</span>
                          </div>

                          {/* Icon Container */}
                          <div
                              className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 transform backdrop-filter backdrop-blur-3xl ${
                                  activeStep === index
                                      ? 'bg-gradient-to-br from-primary via-ring to-secondary scale-110'
                                      : 'bg-foreground/20 hover:bg-ring/50'
                              }`}
                          >
                            <Icon
                                className={`w-8 h-8 transition-all duration-500 ${
                                    activeStep === index
                                        ? 'text-primary-foreground scale-110'
                                        : 'text-foreground/50'
                                }`}
                            />
                          </div>

                          {/* Title */}
                          <span
                              className={`text-sm font-medium transition-all duration-500 ${
                                  activeStep === index
                                      ? 'scale-110'
                                      : 'text-foreground/50'
                              }`}
                          >
                        {step.title}
                      </span>

                          {/* Active Indicator */}
                          {activeStep === index && (
                              <motion.div
                                  className="absolute -bottom-1 w-full h-1 bg-gradient-to-r from-transparent via-ring to-transparent hidden md:block"
                                  layoutId="activeIndicator"
                              />
                          )}
                        </div>

                        {/* Connector Line */}
                        {index < steps.length - 1 && (
                            <div className="absolute top-28 left-20 -z-10 w-48 h-px bg-gradient-to-r from-transparent via-ring/50 to-transparent hidden md:block" />
                        )}
                      </button>
                  );
                })}
              </div>

              {/* Content Section */}
              <div className="relative max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                      {/* Left Column */}
                      <div className="space-y-12">
                        <div>
                          <h3 className="text-2xl mb-6">{steps[activeStep].title}</h3>
                          <p className="text-foreground/80 leading-relaxed">
                            {steps[activeStep].description}
                          </p>
                        </div>

                        {/* Focus and Importance */}
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-ring font-medium mb-3">
                              {steps[activeStep].focus}
                            </h4>
                            <p className="text-foreground leading-relaxed">
                              {steps[activeStep].importance}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {steps[activeStep].details.map((detail, idx) => (
                            <motion.div
                                key={detail}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                className="flex items-center gap-4 group"
                            >
                              <div className="w-10 h-10 rounded-xl bg-ring/10 flex items-center justify-center group-hover:bg-ring/20 transition-all duration-500">
                                <ArrowRight className="w-5 h-5 text-ring" />
                              </div>
                              <span className="text-lg text-foreground/80 transition-colors duration-500">
                            {detail}
                          </span>
                            </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
