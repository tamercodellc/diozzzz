'use client';
import React, {useRef, useEffect, useState} from 'react';
import {
    GoogleCard,
    RevenueDashboard,
    WorkflowStatus,
    Compare,
    PulseBeamsSecond,
} from '@/features/landing/components/card-grid';
import {
    motion,
    useInView,
    useAnimation,
    AnimatePresence,
} from 'framer-motion';
import Image from 'next/image';
import {IconButton3D} from '@/components/ui';
import {HourglassIcon} from 'lucide-react';

const AnimatedCard = ({
                          children,
                          delay = 0,
                      }: {
    children: React.ReactNode;
    delay?: number;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, amount: 0.3});
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            exit="exit"
            variants={{
                hidden: {opacity: 0, y: 50},
                visible: {opacity: 1, y: 0},
                exit: {opacity: 0, y: -50},
            }}
            transition={{duration: 0.5, delay}}
            className="h-full w-full flex justify-center items-center"
        >
            {children}
        </motion.div>
    );
};

export const Results = () => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, {once: true, amount: 0.3});

    useEffect(() => {
        // Simula la carga de la página
        const timer = setTimeout(() => {
            setHasLoaded(true);
        }, 1000); // Ajusta el tiempo según sea necesario

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative overflow-hidden w-full">
            <div className="absolute inset-0">
                <div
                    className="absolute right-0 top-20 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
                <div
                    className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-12 max-w-[45rem] mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={isHeaderInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.5}}
                        className="mb-4 sm:flex hidden justify-center relative z-10"
                    >
                        <IconButton3D icon={HourglassIcon}/>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={isHeaderInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                        transition={{duration: 0.5}}
                        className="mb-4 sm:hidden flex justify-center relative z-10"
                    >
                        <IconButton3D icon={HourglassIcon}/>
                    </motion.div>
                    <motion.h2
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.4}}
                        className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-center text-center pb-4 pt-4'
                    >
                        Digital Marketing Results
                        <span className='heading-gradient'> That Matter</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="sm:mt-4 mt-4 max-w-3xl mx-auto text-foreground/80"
                    >
                        Strategic digital marketing delivers business growth through increased visibility, expanded
                        customer reach, and improved conversion rates. When implemented effectively, these strategies
                        transform online presence into measurable business success, driving revenue while building
                        lasting customer relationships and competitive market advantage.
                    </motion.p>
                </div>
                <div className="flex items-center justify-center p-4">
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] w-full justify-center items-center">
                        <AnimatePresence>
                            {hasLoaded && (
                                <>
                                    <AnimatedCard delay={0}>
                                        <div
                                            className="p-4 h-[520px] w-full bg-card/30 backdrop-blur-sm border border-foreground/10 rounded-lg hover:border-primary/20 transition-all duration-300">
                                            <div className="mb-2 h-[380px]">
                                                <GoogleCard/>
                                            </div>
                                        </div>
                                    </AnimatedCard>

                                    <AnimatedCard delay={0.2}>
                                        <div
                                            className="p-4 h-[520px] w-full bg-card/30 backdrop-blur-sm border border-foreground/10 rounded-lg hover:border-primary/20 transition-all duration-300">
                                            <div className="mb-4">
                                                <h2 className="text-xl font-bold text-foreground/80">
                                                    Performance
                                                </h2>
                                            </div>
                                            <div className="mt-4">
                                                <RevenueDashboard/>
                                                <WorkflowStatus/>
                                            </div>
                                        </div>
                                    </AnimatedCard>

                                    <AnimatedCard delay={0.4}>
                                        <div
                                            className="h-[520px] w-full hidden lg:flex justify-center items-center rounded-sm overflow-hidden">
                                            <Image
                                                src="/take-action.png"
                                                alt="Watch"
                                                className="h-[590px] object-contain"
                                                width={3100}
                                                height={3100}
                                            />
                                        </div>
                                        <div
                                            className="h-[520px] w-full flex lg:hidden justify-center items-center bg-card/30 backdrop-blur-sm border border-foreground/10 rounded-sm overflow-hidden">
                                            <Image
                                                src="/take-action.png"
                                                alt="Watch"
                                                className="h-[590px] object-contain"
                                                width={3100}
                                                height={3100}
                                            />
                                        </div>
                                    </AnimatedCard>

                                    {/* Segunda fila: 2 cards horizontales */}
                                    <div
                                        className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center items-center w-full">
                                        <AnimatedCard delay={0.6}>
                                            <div
                                                className="p-4 h-[280px] w-full bg-card/30 backdrop-blur-sm border border-foreground/10 rounded-lg hover:border-primary/20 transition-all duration-300">
                                                <Compare/>
                                            </div>
                                        </AnimatedCard>

                                        <AnimatedCard delay={0.8}>
                                            <div
                                                className="p-4 h-[280px] w-full bg-card/30 backdrop-blur-sm border border-foreground/10 rounded-lg hover:border-primary/20 transition-all duration-300">
                                                <div className="h-full">
                                                    <PulseBeamsSecond/>
                                                </div>
                                            </div>
                                        </AnimatedCard>
                                    </div>
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
};