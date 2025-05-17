'use client';
import {
  Search,
  BarChart2,
  Settings,
  FileText,
  Globe,
  Code,
  Rocket,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export function OnPageSEOProcess() {
  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-primary/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(19,137,253,0.03)]">
          <div className="border-t border-b border-primary/20 py-[16px] w-full">
            <div className="border-t border-b border-primary/20 py-[16px] bg-gradient-to-r from-transparent via-primary/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto text-center mb-16">
                  <div className="flex justify-center mb-4">
                    <IconButton3D icon={Rocket} />
                  </div>

                  <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                  >
                    Your Journey to
                    <span className='heading-gradient'> SEO Success</span>
                  </motion.h2>

                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-foreground/80 max-w-2xl mx-auto text-center"
                  >
                    A proven step-by-step process that has helped over 500+ businesses
                    improve their search rankings
                  </motion.p>

                  <div className="flex justify-center gap-6 text-sm text-foreground/90 mt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span>30-day average implementation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>97% client satisfaction</span>
                    </div>
                  </div>
                </div>

                <div className="max-w-5xl mx-auto relative">
                  {/* Steps at Bottom */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-card/90 border border-primary/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/30">1</span>
                      <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">
                        Initial SEO Audit & Strategy
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Search className="w-4 h-4 text-primary mt-1" />
                          <p className="text-sm text-foreground/90">
                            Comprehensive technical SEO analysis
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Globe className="w-4 h-4 text-primary mt-1" />
                          <p className="text-sm text-foreground/90">
                            Competitor research and benchmarking
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <FileText className="w-4 h-4 text-primary mt-1" />
                          <p className="text-sm text-foreground/90">
                            Content gap analysis and planning
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-card/90 border border-primary/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/30">2</span>
                      <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">
                        Implementation & Optimization
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Settings className="w-4 h-4 text-primary mt-1" />
                          <p className="text-sm text-foreground/90">
                            Technical SEO improvements and fixes
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Code className="w-4 h-4 text-primary mt-1" />
                          <p className="text-sm text-foreground/90">
                            On-page optimization implementation
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <FileText className="w-4 h-4 text-primary mt-1" />
                          <p className="text-sm text-foreground/90">
                            Content optimization and creation
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-card/90 border border-primary/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <span className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/30">3</span>
                      <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">
                        Monitor & Scale Results
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <BarChart2 className="w-4 h-4 text-primary mt-1" />
                          <p className="text-sm text-foreground/90">
                            Performance tracking and analytics
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Settings className="w-4 h-4 text-primary mt-1" />
                          <p className="text-sm text-foreground/90">
                            Continuous optimization and updates
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <Search className="w-4 h-4 text-primary mt-1" />
                          <p className="text-sm text-foreground/90">
                            Ranking improvement monitoring
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Indicators */}
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="text-lg font-medium text-foreground">Week 1</div>
                    <div className="text-lg font-medium text-foreground">Weeks 2-3</div>
                    <div className="text-lg font-medium text-foreground">Ongoing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}