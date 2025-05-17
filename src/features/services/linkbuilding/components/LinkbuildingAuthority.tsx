'use client';

import React from 'react';
import { Play, CheckCircle, CalendarPlus } from 'lucide-react';
import { ShimmerButton, IconButton3D } from '@/components/ui';

export const LinkBuildingAuthority = () => {
    return (
        <div className='relative w-full overflow-hidden '>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    {/* Left Column - Video (previously was right column) */}
                    <div className='relative w-full max-w-[400px] h-[710px] mx-auto flex items-center justify-center'>
                        {/* Outer background */}
                        <div className='absolute left-[-10px] top-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] bg-card/80 backdrop-blur-[10px] rounded-lg shadow-lg border border-blue-500/20 z-0'></div>

                        {/* Inner background */}
                        <div className="absolute inset-0 bg-background-primary/90 backdrop-blur-[10px] rounded-lg shadow-lg border border-blue-500/10 overflow-hidden z-1 after:content-[''] after:absolute after:inset-[1px] after:rounded-[7px] after:border after:border-white/[0.07] after:pointer-events-none">
                            {/* Video thumbnail image (placeholder) */}
                            <div className='absolute inset-0 bg-gradient-to-br from-background-primary to-background-primary/50 z-1'>
                                {/* This would be replaced with an actual image in production */}
                                <div className="w-full h-full opacity-40 bg-[url('/api/placeholder/1000/600')] bg-cover bg-center"></div>
                            </div>

                            {/* Video play button */}
                            <div className='absolute inset-0 flex items-center justify-center z-2'>
                                <div className='group cursor-pointer transform transition-all duration-300 hover:scale-105'>
                                    {/* Outer ring */}
                                    <div className='absolute inset-0 rounded-full animate-ping bg-blue-500/10'></div>

                                    {/* Middle ring */}
                                    <div className='w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-lg flex items-center justify-center'>
                                        {/* Inner play button */}
                                        <div className='w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300'>
                                            <Play
                                                fill='white'
                                                size={28}
                                                className='text-white ml-1'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Video details */}
                            <div className='absolute left-6 bottom-6 right-6 z-3'>
                                <div className='flex items-center justify-between mb-2'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center'>
                                            <span className='text-foreground font-bold'>KS</span>
                                        </div>
                                        <div>
                                            <h4 className='text-foreground font-medium'>
                                                Kasia Śliwa
                                            </h4>
                                            <p className='text-foreground/80 text-sm'>
                                                Senior Off-site SEO Specialist
                                            </p>
                                        </div>
                                    </div>
                                    <span className='text-foreground/80 text-sm'>
                                        4:17 minutes
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Text Content (previously was left column) */}
                    <div className='space-y-8 flex flex-col items-center'>
                        {/* Sección de título con estilos similares al primer código pero en azul */}
                        <div className="text-center mb-16">
                            <div className="flex justify-center mb-4">
                                <IconButton3D icon={Play} variant="blue" />
                            </div>

                            <h2 className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'>
                                Build Authority <br/>
                                <span className='heading-gradient'>That Drives Rankings</span>
                            </h2>

                            <p className="text-foreground/80 max-w-2xl mx-auto text-center">
                                We help businesses overcome their link building challenges and develop powerful backlink profiles that increase rankings, traffic, and revenue.
                            </p>
                        </div>

                        <p className='text-foreground/80 text-lg'>
                            I understand that building quality backlinks can feel like an impossible task in today&apos;s competitive landscape. I&apos;m{' '}
                            <span className='text-primary font-medium'>
                                Kasia Śliwa
                            </span>
                            , and I&apos;ve developed link building strategies that have elevated businesses from page 3 obscurity to page 1 prominence. My specialized approach to authority building focuses on creating genuine relationships that naturally result in powerful backlinks that Google rewards.
                        </p>

                        <div className='space-y-4'>
                            <div className='flex gap-4 items-start'>
                                <CheckCircle
                                    size={22}
                                    className='text-blue-500 mt-1 flex-shrink-0'
                                    style={{ color: '#3b82f6' }}
                                />
                                <div>
                                    <h3 className='text-foreground text-lg font-medium mb-1'>
                                        Authority Building Expert
                                    </h3>
                                    <p className='text-foreground/80'>
                                        With over 8 years specializing exclusively in link building, I&apos;ve developed relationships with hundreds of quality websites across diverse industries. My approach focuses on creating genuine value exchanges that result in editorial backlinks - the kind Google trusts and rewards.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4 items-start'>
                                <CheckCircle
                                    size={22}
                                    className='text-blue-500 mt-1 flex-shrink-0'
                                    style={{ color: '#3b82f6' }}
                                />
                                <div>
                                    <h3 className='text-foreground text-lg font-medium mb-1'>
                                        Transparent Link Strategy
                                    </h3>
                                    <p className='text-foreground/80'>
                                        I&apos;ve seen too many businesses burned by black-hat techniques or vague promises. That&apos;s why I provide complete transparency into our link acquisition process, detailed reports of every backlink built, and clear metrics showing the impact on your site&apos;s authority. You&apos;ll always know exactly what you&apos;re getting.
                                    </p>
                                </div>
                            </div>

                            <div className='flex gap-4 items-start'>
                                <CheckCircle
                                    size={22}
                                    className='text-blue-500 mt-1 flex-shrink-0'
                                    style={{ color: '#3b82f6' }}
                                />
                                <div>
                                    <h3 className='text-foreground text-lg font-medium mb-1'>
                                        Results-Driven Methodology
                                    </h3>
                                    <p className='text-foreground/80'>
                                        My methodology isn&apos;t about vanity metrics or hitting arbitrary link counts. It focuses on acquiring the specific types of authority signals your website needs to outrank your competitors. I analyze your backlink gap, identify high-impact opportunities, and strategically build links that move the needle on rankings for your most valuable keywords.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className='text-foreground'>
                            Let me transform your site&apos;s authority profile and unlock the rankings your business deserves. My tailored link building strategies will create the foundation for sustainable traffic growth that continues delivering results long after our work is done.
                        </p>

                        <ShimmerButton variant='solid' size='big' className='group'>
                            Get Your Free Link Audit
                            <CalendarPlus className='ml-2 size-4 group-hover:scale-110 transition-all duration-300 ease-in-out' />
                        </ShimmerButton>
                    </div>
                </div>
            </div>
        </div>
    );
};