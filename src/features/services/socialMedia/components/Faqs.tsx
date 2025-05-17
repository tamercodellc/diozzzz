'use client';
import { faqs } from '@/features/services/socialMedia/utils';
import { FaQuestion } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export function Faqs() {
    return (
        <section className='relative w-full overflow-hidden py-44'>
            <div className='container mx-auto px-4'>
                {/* Heading Section with Blue Theme */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-4">
                        <IconButton3D icon={FaQuestion} variant="blue" />
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                    >
                        Things 💡 you <br/>
                        <span className='heading-gradient'>probably wonder</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/80 max-w-2xl mx-auto text-center"
                    >
                        Common Questions from the Community
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 p-4'
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                            className='rounded-lg border border-background-primary hover:border-ring/90 transition-all duration-700 hover:bg-ring/5 hover:scale-105 ease-in-out p-6 h-full'
                        >
                            <h3 className='mb-4 text-primary font-medium'>{faq.question}</h3>
                            <p className='text-foreground/80'>{faq.answer}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}