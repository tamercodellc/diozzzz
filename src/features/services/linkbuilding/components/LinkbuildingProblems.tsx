'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BorderBeam, IconButton3D } from '@/components/ui';
import clsx from 'clsx';
import { LinkIcon, Search, BarChart3, Shuffle, ArrowDown, Database } from 'lucide-react';

const linkbuildingProblems = {
    'competition': {
        name: 'Dominance',
        icon: <BarChart3 className="w-5 h-5" />,
        title: 'Competitors Outranking You',
        description: 'Your competitors are building authoritative backlinks while you\'re falling behind in rankings.',
        achievements: [
            'Competitors ranking above you have 2-3x more quality backlinks pointing to their sites',
            'They\'re acquiring new links at a faster rate, widening the authority gap monthly',
            'Your share of voice in organic search is shrinking as competition grows',
            'Without a proper link strategy, you\'ll continue losing market share to competitors who prioritize link building'
        ]
    },
    'penalties': {
        name: 'Toxic Links',
        icon: <Database className="w-5 h-5" />,
        title: 'Harmful Backlink Profile',
        description: 'Your current backlink profile might be hurting your site more than helping it.',
        achievements: [
            'Low-quality or spammy backlinks are triggering Google penalties or algorithmic filters',
            'Your domain authority is suffering from toxic links you may not even know about',
            'Previous SEO efforts may have created unnatural link patterns that need remediation',
            'Without proper backlink monitoring and disavowal, you risk further ranking drops'
        ]
    },
    'invisibility': {
        name: 'Search Invisibility',
        icon: <Search className="w-5 h-5" />,
        title: 'No One Finds Your Content',
        description: 'Great content means nothing if search engines don\'t recognize its value.',
        achievements: [
            'Your best content sits unnoticed because it lacks authoritative links signaling its value',
            'New pages take months to rank because your domain lacks the authority to earn Google\'s trust',
            'Excellent products and services remain undiscovered by potential customers searching online',
            'Without backlinks, even perfectly optimized pages struggle to rank for competitive keywords'
        ]
    },
    'conversion': {
        name: 'Revenue Impact',
        icon: <ArrowDown className="w-5 h-5" />,
        title: 'Lost Traffic Means Lost Revenue',
        description: 'Every day without a link building strategy costs you real money.',
        achievements: [
            'Your traffic plateau or decline directly impacts your bottom line revenue',
            'Customer acquisition costs are higher because you\'re relying on paid traffic instead of organic',
            'Lower domain authority means you need to work harder for every ranking position',
            'Your marketing ROI is suffering while competitors enjoy sustainable organic traffic growth'
        ]
    },
    'volatility': {
        name: 'Ranking Volatility',
        icon: <Shuffle className="w-5 h-5" />,
        title: 'Unstable Search Performance',
        description: 'Without a strong backlink foundation, your rankings are constantly at risk.',
        achievements: [
            'Your rankings fluctuate wildly with every algorithm update due to weak link authority',
            'Traffic is unpredictable, making business forecasting and planning difficult',
            'You\'re vulnerable to new market entrants who invest heavily in link acquisition',
            'The business impact of ranking volatility creates unnecessary stress and uncertainty'
        ]
    }
};

export function LinkBuildingProblems() {
    const [activeTab, setActiveTab] = useState('competition');
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative overflow-hidden w-full -mt-64">
            <div className="relative bg-gradient-to-r from-transparent via-red-500/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(239,68,68,0.03)]">
                <div className="border-t border-b border-red-500/20 py-[16px] w-full">
                    <div className="border-t border-b border-red-500/20 py-[16px] bg-gradient-to-r from-transparent via-red-500/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
                        <div className='max-w-7xl mx-auto px-4 py-12'>
                            {/* Heading Section with styled text */}
                            <div className="text-center mb-16">
                                <div className="flex justify-center mb-4">
                                    <IconButton3D icon={LinkIcon} variant="red" />
                                </div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
                                >
                                    Your Website's
                                    <span className='heading-gradient-red-bright'> Authority Crisis</span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-foreground/80 max-w-2xl mx-auto text-center mb-10"
                                >
                                    Without a strong backlink profile, your website is invisible in today's competitive landscape.
                                    Every day without proper link building is costing you traffic, customers, and revenue.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className='flex lg:flex-row flex-col gap-12 items-center max-w-5xl mx-auto'
                            >
                                <div className='flex lg:flex-col space-y-4 min-w-[200px] relative'>
                                    {/* Vertical line with beam */}
                                    <div className='absolute -left-6 w-px h-full bg-card overflow-hidden'>
                                        <BorderBeam
                                            size={250}
                                            duration={8}
                                            colorFrom='#ef4444'
                                            colorTo='#f87171'
                                            className='-left-0'
                                        />
                                    </div>

                                    {Object.entries(linkbuildingProblems).map(([key, problem], idx) => (
                                        <div
                                            key={key}
                                            className='relative my-2'
                                            onMouseEnter={() => setHoveredIndex(idx)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <AnimatePresence>
                                                {hoveredIndex === idx && (
                                                    <motion.span
                                                        className='absolute inset-0 h-full w-full bg-card rounded-md'
                                                        layoutId='hoverBackground'
                                                        initial={{ opacity: 0 }}
                                                        animate={{
                                                            opacity: 1,
                                                            transition: { duration: 0.15 },
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            transition: { duration: 0.15, delay: 0.2 },
                                                        }}
                                                    />
                                                )}
                                            </AnimatePresence>
                                            <button
                                                onClick={() => setActiveTab(key)}
                                                className={clsx(
                                                    'px-4 py-3 text-foreground/90 relative z-20 w-full text-left rounded-md flex items-center space-x-3 group',
                                                    activeTab === key
                                                        ? 'bg-card text-red-500'
                                                        : 'hover:text-foreground',
                                                    activeTab === key && 'font-semibold'
                                                )}
                                            >
                                                <div
                                                    className={clsx(
                                                        'p-2 rounded-lg transition-colors',
                                                        activeTab === key
                                                            ? 'bg-red-500/10 text-red-500'
                                                            : 'bg-card/90 group-hover:bg-card/70'
                                                    )}
                                                >
                                                    {problem.icon}
                                                </div>
                                                <span className='font-medium'>{problem.name}</span>
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Content area */}
                                <div className=''>
                                    <AnimatePresence mode='wait'>
                                        <motion.div
                                            key={activeTab}
                                            className='flex flex-col space-y-2'
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.15 }}
                                            layoutId={linkbuildingProblems[activeTab].name}
                                        >
                                            <h3 className="text-xl font-bold text-foreground">{linkbuildingProblems[activeTab].title}</h3>

                                            <p className='text-foreground/90 text-sm mb-6'>
                                                {linkbuildingProblems[activeTab].description}
                                            </p>

                                            <div className='space-y-4'>
                                                {linkbuildingProblems[activeTab].achievements.map(
                                                    (achievement, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: index * 0.1 }}
                                                            className={clsx(
                                                                'flex items-start space-x-3 p-3 rounded-lg',
                                                                index === 3 ? 'bg-card border border-red-500/20' : ''
                                                            )}
                                                        >
                                                            {index !== 3 && (
                                                                <div className='h-1.5 w-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0' />
                                                            )}
                                                            <span
                                                                className={clsx(
                                                                    'text-sm',
                                                                    index === 3
                                                                        ? 'text-foreground font-medium'
                                                                        : 'text-foreground/90'
                                                                )}
                                                            >
                                                                {achievement}
                                                            </span>
                                                        </motion.div>
                                                    )
                                                )}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}