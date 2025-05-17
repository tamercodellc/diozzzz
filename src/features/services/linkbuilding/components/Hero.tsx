'use client';

import React, { useRef } from 'react';
import { Link, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui';
import {LinkbuildingForm} from './LinkbuildingForm';
import { motion, useInView } from 'framer-motion';

export const LinkbuildingHero = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <div
            ref={sectionRef}
            className="relative overflow-hidden sm:py-8 lg:py-12 flex flex-col mt-28"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute right-0 top-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(59,130,246,0.1)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center pt-36">
                <div className="flex flex-col-reverse lg:flex-row gap-12 items-center max-w-7xl w-full">
                    {/* Left Column with Form - Decreased width */}
                    <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
                        {/* Badge */}
                        <motion.div
                            className="relative z-10 flex justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
                        >
                            <Badge
                                text="Links That Boost Your Authority"
                                icon={Link}
                            />
                        </motion.div>
                        <motion.h1
                            className='text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground'
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                        >
                            Time to Get <span className='heading-gradient'>More Traffic</span> and Visibility
                        </motion.h1>

                        {/* Why Choose Section */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
                        >
                            <h3 className="text-xl font-bold">Why Choose Our Backlink Building Service?</h3>

                            <motion.ul
                                className="space-y-3 text-foreground/90 text-sm"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.7 }}
                            >
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>
                                      We create a customized link-building strategy
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>
                                      We build backlinks from diversed sources
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>
                                      We submit links for indexation
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>
                                      We focus on quality rather than quantity
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>
                                      We research your competition
                                    </span>
                                </li>
                            </motion.ul>
                        </motion.div>

                        {/* Specialist Profile */}
                        <motion.div
                            className="flex flex-col items-center lg:items-start space-y-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
                        >
                            <div className="w-24 h-24 rounded-full overflow-hidden">
                                <img
                                    src="/api/placeholder/100/100"
                                    alt="Kasia Śliwa"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">Kasia Śliwa</h3>
                                <p className="text-sm text-green-500">Senior Off-site SEO Specialist</p>
                            </div>
                            <p className="text-base font-medium">
                                Let's create your SEO link-building strategy together!
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column - Increased width */}
                    <motion.div
                        className="relative w-full lg:w-1/2 h-full flex items-center overflow-visible bg-transparent justify-end pr-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
                    >
                        <LinkbuildingForm />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};