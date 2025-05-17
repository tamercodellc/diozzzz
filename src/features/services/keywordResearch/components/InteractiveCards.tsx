'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const InteractiveCards = () => {
  return (
      <div className="relative h-[550px]">
        {/* Monthly Excerpts Card */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="absolute left-[30px] top-[30px] w-[320px] h-[400px] bg-card/90 backdrop-blur-[10px] rounded-2xl shadow-xl z-10 p-5 border border-ring/20"
        >
          <div className="flex justify-between items-start">
            <span className="text-2xl text-muted-foreground">⋮</span>
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">LIVE</span>
          </div>

          <div className="mt-8">
            <div className="flex items-center">
              <span className="text-6xl font-medium text-foreground">745</span>
              <span className="text-green-500 text-2xl ml-2">▲</span>
            </div>
            <p className="text-muted-foreground mt-2">Keywords Tracked Monthly</p>
          </div>

          <div className="relative mt-8 h-[150px]">
            <svg className="w-full h-full" viewBox="0 0 320 150" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(34, 197, 94, 0.4)" />
                  <stop offset="100%" stopColor="rgba(34, 197, 94, 0.05)" />
                </linearGradient>
              </defs>
              <path
                  d="M0,60 L40,67.5 L80,52.5 L120,63 L160,45 L200,52.5 L240,30 L280,37.5 L320,22.5 L320,150 L0,150 Z"
                  fill="url(#chartGradient)"
              />
              <path
                  d="M0,60 L40,67.5 L80,52.5 L120,63 L160,45 L200,52.5 L240,30 L280,37.5 L320,22.5"
                  stroke="rgb(22, 163, 74)"
                  strokeWidth="2"
                  fill="none"
              />
            </svg>
            <div className="absolute left-[65%] bottom-[41%] w-3 h-3 bg-green-500 rounded-full border-2 border-background shadow-lg"></div>
          </div>

          <div className="absolute bottom-5 left-5">
            <p className="text-sm text-muted-foreground">Monthly Report</p>
            <p className="text-base font-medium text-foreground">Search Performance</p>
            <p className="text-sm text-muted-foreground">Version 2.0</p>
          </div>

          <div className="absolute bottom-5 right-5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
              <path d="M6,2L0,6L6,10L0,14L6,18L12,14L18,18L24,14L18,10L24,6L18,2L12,6L6,2Z" />
            </svg>
          </div>
        </motion.div>

        {/* Volunteer Survey Card */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute right-[-20px] top-0 w-[260px] h-[270px] bg-card/90 backdrop-blur-[10px] rounded-2xl shadow-xl z-30 p-5 border border-ring/20"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-foreground font-medium">Keyword Opportunities</h3>
              <p className="text-xs text-muted-foreground mt-1">334 NEW KEYWORDS</p>
            </div>
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">NEW</span>
          </div>

          <div className="relative mt-6 flex justify-center">
            <svg className="w-[120px] h-[120px] -rotate-90">
              <circle
                  cx="60"
                  cy="60"
                  r="45"
                  stroke="hsl(var(--ring) / 0.2)"
                  strokeWidth="12"
                  fill="transparent"
              />
              <circle
                  cx="60"
                  cy="60"
                  r="45"
                  stroke="hsl(var(--primary))"
                  strokeWidth="12"
                  fill="transparent"
                  strokeDasharray="283"
                  strokeDashoffset="200"
              />
            </svg>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold text-foreground">
            92
          </span>
            <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-[26px] h-[26px] bg-primary rounded-full border-2 border-background text-primary-foreground text-xs font-bold grid place-items-center">
              +5
            </div>
          </div>

          <button className="mt-8 mx-auto flex items-center gap-2 px-4 py-2 bg-background/80 rounded-full text-sm text-primary font-medium hover:bg-background transition-colors">
            <div className="w-4 h-4 bg-primary rounded"></div>
            View Opportunities
          </button>
        </motion.div>

        {/* Strategy PDF Card */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute right-[80px] top-[300px] w-[300px] h-[80px] bg-card/90 backdrop-blur-[10px] rounded-xl shadow-lg z-20 p-4 border border-ring/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-[30px] h-[30px] bg-primary/20 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-primary">
                <path d="M2,1 H10 L14,5 V14 C14,14.6 13.6,15 13,15 H3 C2.4,15 2,14.6 2,14 V1Z" />
                <path d="M10,1 V5 H14" />
              </svg>
            </div>
            <div>
              <p className="text-foreground font-medium">Keyword Strategy Report</p>
              <p className="text-primary text-xs">UPDATED: REAL-TIME</p>
            </div>
          </div>
        </motion.div>
      </div>
  );
};