'use client';

import { Mail } from 'lucide-react';
import { Input, ShimmerButton } from '@/components/ui';
import { motion } from 'framer-motion';

export function SubscriptionForm() {
  return (
      <div className='relative w-full py-24 md:py-32 overflow-hidden'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='relative overflow-hidden'>
            {/* Main container */}
            <div className='relative bg-background-primary rounded-[30px] text-center text-foreground overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-ring/10'>
              {/* Left side shapes */}
              <div className='absolute -left-[150px] top-[5%] w-[400px] h-[500px] bg-[rgba(56,189,248,0.12)] backdrop-blur-xl -rotate-[15deg] border border-primary/20 shadow-2xl z-0 rounded-[40px]' />
              <div className='absolute -left-[100px] top-[35%] w-[300px] h-[400px] bg-[rgba(59,130,246,0.1)] backdrop-blur-xl -rotate-[25deg] border border-primary/20 shadow-2xl z-0 rounded-[30px]' />
              <div className='absolute -left-[80px] bottom-[15%] w-[250px] h-[300px] bg-[rgba(37,99,235,0.08)] backdrop-blur-xl -rotate-[35deg] border border-primary/20 shadow-2xl z-0 rounded-[20px]' />

              {/* Right side shapes */}
              <div className='absolute -right-[150px] top-[10%] w-[400px] h-[450px] bg-[rgba(56,189,248,0.12)] backdrop-blur-xl rotate-[20deg] border border-primary/20 shadow-2xl z-0 rounded-[40px]' />
              <div className='absolute -right-[120px] top-[45%] w-[350px] h-[380px] bg-[rgba(59,130,246,0.1)] backdrop-blur-xl rotate-[30deg] border border-primary/20 shadow-2xl z-0 rounded-[30px]' />
              <div className='absolute -right-[100px] bottom-[5%] w-[300px] h-[320px] bg-[rgba(37,99,235,0.08)] backdrop-blur-xl rotate-[40deg] border border-primary/20 shadow-2xl z-0 rounded-[20px]' />

              <div className='relative z-10 px-4 py-24'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold text-primary ring-1 ring-inset ring-primary/30 gap-x-1.5 mb-8'
                >
                  <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
                  Boost your digital presence
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                >
                  Social Media <br/>
                  <span className='heading-gradient'>Management</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-foreground/80 text-lg mb-12 max-w-2xl mx-auto"
                >
                  Grow your brand on social media with our professional
                  management.
                  <br />
                  Custom strategy, engaging content, and performance analytics.
                </motion.p>

                {/* Email input container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className='flex gap-2 max-w-3xl bg-card rounded-full mx-auto'
                >
                  <div className='flex items-center justify-center px-4 text-primary bg-primary/10 rounded-l-full'>
                    <Mail size={20} />
                  </div>
                  <div className='w-full'>
                    <Input
                        type='email'
                        placeholder='Your email address'
                        className='flex-1 bg-card/90 w-full px-4 py-3 text-base text-foreground placeholder-foreground/80'
                    />
                  </div>
                  <ShimmerButton className='w-64 rounded-e-full' variant='solid'>
                    Free Consultation
                  </ShimmerButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}