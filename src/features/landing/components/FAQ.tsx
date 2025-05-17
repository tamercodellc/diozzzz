'use client';

import {HelpCircle} from 'lucide-react';
import { faqItems } from '@/features/landing/utils';
import { FAQSection, IconButton3D } from '@/components/ui';
import {motion} from "framer-motion";

export const FAQ = () => {
  return (
    <div className='max-w-4xl mx-auto w-[90vw] min-h-[1024px] flex flex-col items-center justify-start'>
      <div className='flex justify-center mb-24'>
        <div className="relative mb-8 md:mb-0 mx-auto w-full max-w-lg px-4 order-1 md:order-2">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-8 flex justify-center"
          >
            <IconButton3D icon={HelpCircle} />
          </motion.div>
          <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4 md:mb-6 text-center"
          >
                Frequently Ask Questions
          </motion.h2>
          <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-foreground/80 text-center max-w-3xl mx-auto"
          >
            We believe in transparency. Here are the answers to some questions
            our clients frequently ask about growing their business online.
          </motion.p>
        </div>
      </div>

      <FAQSection items={faqItems} />
    </div>
  );
};
