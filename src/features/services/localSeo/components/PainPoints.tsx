'use client'

import { WorkflowIcon } from 'lucide-react'
import { painPoints } from '@/features/services/localSeo/utils'
import { InfoCard } from '@/components/ui'
import { motion } from 'framer-motion'
import { IconButton3D } from '@/components/ui'

export const ServicesSection = () => {
  return (
      <div className='relative max-w-7xl mx-auto px-2'>
        <div className='flex flex-col md:flex-row gap-y-8'>
          <div className='md:w-1/3 max-w-md mx-auto md:sticky md:top-24 self-start h-fit'>
            {/* Heading Section with IconButton3D - Red Variant */}
            <div className="mb-16">
              <div className="flex justify-center md:justify-start mb-4">
                <IconButton3D icon={WorkflowIcon} variant="red" />
              </div>

              <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6 text-center md:text-left'
              >
                We Understand Exactly <br/>
                <span className='heading-gradient-red-bright'>What You're Going Through</span>
              </motion.h2>

              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-foreground/80 max-w-2xl mx-auto md:mx-0 text-center md:text-left"
              >
                As Local SEO experts, we see these challenges every day. You're not alone in this struggle.
              </motion.p>
            </div>
          </div>

          {/* Right Column - Pain Point Cards */}
          {/* Make this column taller to ensure scrolling happens */}
          <div className='md:w-2/3'>
            <motion.div
                className='flex flex-wrap gap-4 pb-20'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
              {painPoints.map(({ title, description, icon }, index) => (
                  <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <InfoCard
                        index={index}
                        title={title}
                        description={description}
                        icon={icon}
                        color='red'
                    />
                  </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
  )
}