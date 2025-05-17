'use client';

import Image from 'next/image';
import { GridCardSet, IconButton3D, InfoCard } from '@/components/ui';
import { Wrench } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CardHoverTopBorder } from '@/components/ui/CardHoverTopBorder';
import Link from 'next/link';
import { tools } from '@/features/layout/header/utils';

export const Tools = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });

  return (
      <div className="relative w-full overflow-hidden">
        {/* Contenedor con fondo diagonal y doble borde */}
        <div className="relative bg-gradient-to-r from-transparent via-primary/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(19,137,253,0.03)]">
          <div className="absolute top-0 left-0 right-0 h-0 border-t border-primary/20"></div>
          <div className="absolute top-[16px] left-0 right-0 h-0 border-t border-primary/20"></div>

          {/* Bottom diagonal border */}
          <div className="absolute bottom-0 left-0 right-0 h-0 border-b border-primary/20"></div>
          <div className="absolute bottom-[16px] left-0 right-0 h-0 border-b border-primary/20"></div>

          <div className="py-16 md:py-24 relative bg-gradient-to-r from-transparent via-primary/5 to-transparent">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <motion.div
                    ref={ref1}
                    initial={{ opacity: 0, x: -50, scale: 0.95 }}
                    animate={isInView1 ? { opacity: 1, x: 0, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative order-2 md:order-1 flex justify-center md:justify-end"
                >
                  <Image
                      src="/tools_free.png"
                      width={600}
                      height={400}
                      alt="Section image"
                      className="rounded-2xl h-auto md:ml-44"
                      unoptimized
                  />
                </motion.div>

                <div className="relative mb-8 md:mb-0 mx-auto w-full max-w-lg px-4 order-1 md:order-2">
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="mb-6 md:mb-8 flex justify-center md:justify-start"
                  >
                    <IconButton3D icon={Wrench} />
                  </motion.div>
                  <motion.h2
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="mb-4 md:mb-6 text-center md:text-left text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                  >
                    Start Growing With
                    <span className='heading-gradient'> Our Free Tools</span>
                  </motion.h2>
                  <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-foreground/80 text-center md:text-left max-w-3xl mx-auto"
                  >
                    Before investing a single cent, we give you a pack of digital
                    marketing tools to outperform 80% of your market. Why? Because we
                    want you to see results from day one.
                  </motion.p>
                </div>
              </div>
            </div>

            <div className="container mx-auto px-4 mt-16">
              <motion.div
                  ref={ref2}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={isInView2 ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full"
              >
                <GridCardSet className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {tools.map(({ icon, name, description, href }, index) => (
                      <CardHoverTopBorder
                          key={index}
                          index={index}
                          className="bg-transparent w-full"
                      >
                        <Link href={href} className="block w-full">
                          <InfoCard
                              color="blue"
                              description={description}
                              title={name}
                              icon={icon}
                              className="h-auto min-h-[11rem] w-full"
                          />
                        </Link>
                      </CardHoverTopBorder>
                  ))}
                </GridCardSet>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  );
};