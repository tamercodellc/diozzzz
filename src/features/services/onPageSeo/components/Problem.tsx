'use client';

import {
  Smartphone,
  Clock,
  Search,
  AlertTriangle,
  HeartCrack,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';
import SEOFactors from './SEOFactors';

export const OnPageSEOProblemSection = () => {
  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-red-500/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(239,68,68,0.03)]">
          <div className="border-t border-b border-red-500/20 py-[16px] w-full">
            <div className="border-t border-b border-red-500/20 py-[16px] bg-gradient-to-r from-transparent via-red-500/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                  <div className="flex justify-center mb-4">
                    <IconButton3D icon={HeartCrack} variant="red" />
                  </div>

                  <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                  >
                    Help you it's
                    <span className='heading-gradient-red-bright'> our business</span>
                  </motion.h2>

                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-foreground/80 max-w-2xl mx-auto text-center"
                  >
                    If your organic traffic is stagnant, you're likely facing
                    serious on-page optimization issues that are affecting your
                    visibility
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-20">
                  {/* Columna izquierda - Imagen */}
                  <div className="relative h-full">
                    <div className="absolute inset-0">
                      <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-red-600/10 to-transparent rounded-full blur-3xl"></div>
                    </div>
                    <div className="relative h-full rounded-lg bg-card/95 border border-red-500/20 backdrop-blur-xl p-8">
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-full h-full rounded-lg bg-gradient-to-tr from-red-600/20 to-card/20 backdrop-blur-xl border border-foreground/10 shadow-2xl"></div>
                      </div>
                    </div>
                  </div>

                  {/* Columna derecha - Contenido */}
                  <div className="space-y-8 relative">
                    <div className="absolute inset-0">
                      <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-red-600/10 to-transparent rounded-full blur-3xl"></div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">
                        Your website is losing thousands of visitors due to on-page SEO issues
                      </h3>
                      <p className="text-lg text-foreground/90">
                        If your organic traffic is stagnant, you&apos;re likely facing
                        serious on-page optimization issues that are affecting your
                        visibility
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-card/95 p-6 rounded-lg border border-red-500/20">
                        <div className="flex items-start mb-4">
                          <div className="bg-card rounded-lg p-3 mr-4">
                            <AlertTriangle size={24} className="text-red-500" />
                          </div>
                          <h4 className="text-xl font-semibold text-red-500/80">
                            Plummeting Traffic
                          </h4>
                        </div>
                        <p className="text-foreground/90">
                          You&apos;re losing Google rankings month after month while your
                          competitors surpass you, despite having good content.
                        </p>
                      </div>

                      <div className="bg-card/95 p-6 rounded-lg border border-red-500/20">
                        <div className="flex items-start mb-4">
                          <div className="bg-card rounded-lg p-3 mr-4">
                            <Clock size={24} className="text-red-500" />
                          </div>
                          <h4 className="text-xl font-semibold text-red-500/80">
                            Alarming Bounce Rates
                          </h4>
                        </div>
                        <p className="text-foreground/90">
                          Visitors leave your site in less than 10 seconds because of
                          poor user experience and slow-loading pages.
                        </p>
                      </div>

                      <div className="bg-card/95 p-6 rounded-lg border border-red-500/20">
                        <div className="flex items-start mb-4">
                          <div className="bg-card rounded-lg p-3 mr-4">
                            <Search size={24} className="text-red-500" />
                          </div>
                          <h4 className="text-xl font-semibold text-red-500/80">
                            Keywords Not Ranking
                          </h4>
                        </div>
                        <p className="text-foreground/90">
                          You invest time creating content for specific keywords but
                          fail to appear in search results, even for low-competition
                          terms.
                        </p>
                      </div>

                      <div className="bg-card/95 p-6 rounded-lg border border-red-500/20">
                        <div className="flex items-start mb-4">
                          <div className="bg-card rounded-lg p-3 mr-4">
                            <Smartphone size={24} className="text-red-500" />
                          </div>
                          <h4 className="text-xl font-semibold text-red-500/80">
                            Mobile Penalty
                          </h4>
                        </div>
                        <p className="text-foreground/90">
                          Google is penalizing your site because it&apos;s not optimized for
                          mobile devices, losing over 60% of potential traffic.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Frase de impacto */}
                <div className="text-center mb-20 max-w-4xl mx-auto">
                  <blockquote className="text-2xl font-medium italic text-foreground/90 max-w-3xl mx-auto">
                    &quot;Every day these problems remain unsolved, you&apos;re{' '}
                    <span className="text-red-500">losing potential customers</span>{' '}
                    who are finding your competition instead of you.&quot;
                  </blockquote>
                </div>

                <SEOFactors />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};