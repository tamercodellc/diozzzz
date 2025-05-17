'use client';

import Link from 'next/link';
import { ShimmerButton } from '@/components/ui';
import { motion } from 'framer-motion';
import { MapPin, Circle } from 'lucide-react';
import { IconButton3D } from '@/components/ui';

const locations: string[] = [
  'Doral',
  'Hialeah Gardens',
  'Hialeah',
  'Kendall',
  'Little Havana',
  'Miami Gardens',
  'Miami',
  'Miramar',
  'North Miami Beach',
  'North Miami',
  'Opa-locka',
  'Pembroke Pines',
  'Pinecrest',
  'Sweetwater',
  'Westchester',
  'Aventura',
  'Brickell',
  'Coral Gables',
  'Downtown Miami',
  'Key Biscayne',
  'Miami Beach',
  'Miami Lakes',
];

export function Locations() {
  return (
      <section className="relative overflow-hidden">
        {/* Main content container */}
        <div className="relative z-10">
          {/* Title */}
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
            >
              <IconButton3D icon={MapPin} />
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
            <span className="text-2xl md:text-3xl block mb-2">
              Digital Marketing and SEO Solutions
            </span>
              <span
                  className="text-2xl md:text-6xl block"
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '1px var(--blue-stroke, #3b82f6)',
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                  }}
              >
              In Your Miami Neighborhood
            </span>
            </motion.h2>
          </div>

          {/* Center content block */}
          <div className="relative py-12">
            {/* Locations grid */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap justify-center items-center gap-y-4"
              >
                {locations.map((location, index) => (
                    <motion.div
                        key={location}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center"
                    >
                      <Link
                          href={`/locations/${location.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <ShimmerButton variant="ghost" className="text-lg">
                          {location}
                        </ShimmerButton>
                      </Link>
                      {index < locations.length - 1 && (
                          <div className="relative px-2">
                            <Circle className="w-1.5 h-1.5 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 fill-ring text-secondary" />
                          </div>
                      )}
                    </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
  );
}