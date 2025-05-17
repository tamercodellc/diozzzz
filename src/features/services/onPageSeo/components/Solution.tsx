'use client';
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, HeartHandshake } from 'lucide-react';
import { IconButton3D } from '@/components/ui';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function OnPageSEOSolution() {
  const rightColumnRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  // Efecto para medir la altura de la columna derecha y aplicarla a la imagen
  useEffect(() => {
    if (rightColumnRef.current) {
      const updateHeight = () => {
        const height = rightColumnRef.current.offsetHeight;
        setImageHeight(height);
      };

      // Inicialmente medir la altura
      updateHeight();

      // Medir la altura cuando cambie el tamaño de la ventana
      window.addEventListener('resize', updateHeight);

      // Limpiar el evento al desmontar
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, []);

  return (
      <section className="relative overflow-hidden w-full py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="absolute inset-0">
                <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
              </div>
              <div
                  className="relative rounded-xl overflow-hidden shadow-2xl"
                  style={{ height: `${imageHeight}px` }}
              >
                <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3"
                    alt="SEO Analytics Dashboard"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div ref={rightColumnRef} className="space-y-10 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex justify-center lg:justify-start">
                  <IconButton3D icon={HeartHandshake} />
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                >
                  Expert SEO optimization to
                  <span className='heading-gradient'> multiply your visibility</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-foreground/80 lg:text-left text-lg"
                >
                  We've helped hundreds of businesses overcome these exact
                  challenges and achieve top rankings in Google.
                </motion.p>
              </div>

              {/* Enhanced Stats Section with Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                >
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-1"></div>
                  <div className="relative bg-card rounded-2xl p-6 shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
                    <div className="flex flex-col">
                      <div className="mb-4 overflow-hidden rounded-lg h-40 relative">
                        <Image
                            src="/features/services/seo/expertise.jpg"
                            alt="Industry Expertise"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-white font-bold text-xl">Industry Expertise</div>
                      </div>
                      <div className="flex items-baseline space-x-1 mb-2">
                        <span className="text-5xl font-bold text-primary">10</span>
                        <span className="text-2xl text-primary">+</span>
                        <span className="text-lg text-foreground/80 ml-2">years</span>
                      </div>
                      <p className="text-foreground/80">
                        Specializing in advanced SEO optimization techniques and strategies
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="relative"
                >
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl transform -rotate-1"></div>
                  <div className="relative bg-card rounded-2xl p-6 shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
                    <div className="flex flex-col">
                      <div className="mb-4 overflow-hidden rounded-lg h-40 relative">
                        <Image
                            src="/features/services/seo/results.jpg"
                            alt="Proven Results"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 text-white font-bold text-xl">Proven Results</div>
                      </div>
                      <div className="flex items-baseline space-x-1 mb-2">
                        <span className="text-5xl font-bold text-primary">500</span>
                        <span className="text-2xl text-primary">+</span>
                        <span className="text-lg text-foreground/80 ml-2">businesses</span>
                      </div>
                      <p className="text-foreground/80">
                        Ranking on first page of Google with our optimization strategies
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-5 mt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/90 text-lg">
                    We understand the frustration of watching competitors outrank
                    you despite having inferior content. We&apos;ve helped
                    countless businesses overcome this exact challenge.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground/90 text-lg">
                    Our proven methodology has consistently delivered 3-5x
                    increases in organic traffic for our clients within the first
                    6 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}