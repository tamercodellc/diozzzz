'use client'

import { motion } from 'framer-motion'
import { HeroDecorativeCards } from '@/lib/Types'

export function FloatingCards({ cards }: { cards: HeroDecorativeCards[] }) {
  return (
      <div className="relative h-[500px]">
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`absolute ${card.position} ${card.width} shadow-[inset_0_2px_25px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)] hover:shadow-[inset_0_2px_35px_rgba(0,0,0,0.06)] dark:hover:shadow-[inset_0_2px_35px_rgba(255,255,255,0.06)] transition-shadow duration-300`}
              >
                <div className="relative rounded-lg border border-ring/20 bg-white/80 dark:bg-primary/10 p-[8px] backdrop-blur-lg">
                  <div className="rounded-lg border border-primary/30 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-primary/20 dark:via-secondary/10 dark:to-primary/5 p-4 flex items-center gap-3 text-gray-800 dark:text-white">
                    <Icon className="w-5 h-5" />
                    <h3 className="font-medium whitespace-nowrap text-sm">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
          )
        })}
      </div>
  )
}
