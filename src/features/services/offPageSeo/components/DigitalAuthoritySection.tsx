'use client';

import React from 'react';
import {
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
} from 'recharts';
import { Target, Search, Users, ChevronDown, AlertCircle } from 'lucide-react';
import { CardBorderBeam } from '@/components/ui';

// Definición de los problemas (asumiendo que esta es la estructura de los datos)
const problems = [
  {
    title: 'Loss of Organic Traffic',
    description: "Without quality backlinks supporting your site, Google doesn't recognize you as an authority, reducing your business visibility and decreasing organic visits.",
    icon: Search,
    color: '#ef4444',
  },
  {
    title: 'Credibility and Trust at Risk',
    description: "Potential customers tend to trust brands recommended by other sites. The lack of natural, quality backlinks weakens the perception of professionalism and reliability.",
    icon: Users,
    color: '#ef4444',
  },
  {
    title: 'Competitors Gaining Ground',
    description: "While you struggle to appear in top results, competitors who have invested in link building and local SEO gain ground, capturing the attention of customers who could be yours.",
    icon: Search,
    color: '#ef4444',
  },
  {
    title: 'Missed Growth Opportunities',
    description: "Without an effective off-page strategy, your business is missing crucial opportunities to generate referral traffic and strengthen its digital reputation in an increasingly competitive environment.",
    icon: Target,
    color: '#ef4444',
  },
];

export const DigitalAuthoritySection = () => {
  const renderTrafficDecline = () => {
    const data = [
      { month: 'Jan', organic: 85, potential: 90 },
      { month: 'Feb', organic: 79, potential: 95 },
      { month: 'Mar', organic: 70, potential: 100 },
      { month: 'Apr', organic: 58, potential: 105 },
      { month: 'May', organic: 42, potential: 110 },
      { month: 'Jun', organic: 30, potential: 115 },
    ];

    return (
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart
              data={data}
              margin={{ top: 5, right: 20, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorOrganic' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#ef4444' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#ef4444' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorPotential' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#3b82f6' stopOpacity={0.2} />
                <stop offset='95%' stopColor='#3b82f6' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='month' stroke='#606060' />
            <CartesianGrid
                strokeDasharray='3 3'
                stroke='#242424'
                vertical={false}
            />
            <Tooltip
                contentStyle={{
                  backgroundColor: '#242424',
                  border: 'none',
                  borderRadius: '4px',
                }}
                itemStyle={{ color: '#ffffff' }}
                labelStyle={{ color: '#a0a0a0' }}
            />
            <Area
                type='monotone'
                dataKey='organic'
                stroke='#ef4444'
                strokeWidth={2}
                fillOpacity={1}
                fill='url(#colorOrganic)'
            />
            <Area
                type='monotone'
                dataKey='potential'
                stroke='#3b82f6'
                strokeWidth={1}
                strokeDasharray='5 5'
                fillOpacity={1}
                fill='url(#colorPotential)'
            />
          </AreaChart>
        </ResponsiveContainer>
    );
  };

  // Trust and Credibility Visualization
  const renderTrustAndCredibility = () => {
    const data = [
      { name: 'Perception', value: 30 },
      { name: 'Reliability', value: 35 },
      { name: 'Authority', value: 25 },
      { name: 'Engagement', value: 20 },
      { name: 'Influence', value: 15 },
    ];

    return (
        <ResponsiveContainer width='100%' height='100%'>
          <RadarChart
              cx='50%'
              cy='50%'
              outerRadius='70%'
              data={data}
              margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
          >
            <PolarGrid stroke='#242424' />
            <PolarAngleAxis dataKey='name' stroke='#606060' />
            <Radar
                name='Current Levels'
                dataKey='value'
                stroke='#ef4444'
                fill='#ef4444'
                fillOpacity={0.3}
            />
            <Tooltip
                contentStyle={{
                  backgroundColor: '#242424',
                  border: 'none',
                  borderRadius: '4px',
                }}
                itemStyle={{ color: '#ffffff' }}
                labelStyle={{ color: '#a0a0a0' }}
            />
          </RadarChart>
        </ResponsiveContainer>
    );
  };

  // Competition Comparison Visualization
  const renderCompetitionComparison = () => {
    const topSearchPositions = [
      { position: 1, competitor: 'Competitor A', color: '#10b981' },
      { position: 2, competitor: 'Competitor B', color: '#f59e0b' },
      { position: 3, competitor: 'Competitor C', color: '#8b5cf6' },
    ];

    const yourPosition = {
      position: 12,
      competitor: 'Your Business',
      color: '#ef4444',
      isYou: true,
    };

    return (
        <div className='w-full h-full flex flex-col justify-between relative'>
          {/* Top positions */}
          <div className='max-w-[80%] mx-auto space-y-2'>
            {topSearchPositions.map((item, idx) => (
                <div
                    key={idx}
                    className='flex items-center rounded-lg px-2 py-1 bg-[#242424]'
                    style={{
                      opacity: 1 - idx * 0.1,
                    }}
                >
                  <div
                      className='w-6 h-6 flex items-center justify-center rounded-lg mr-2'
                      style={{ backgroundColor: item.color }}
                  >
                    {item.position}
                  </div>
                  <span className='text-sm text-[#a0a0a0]'>{item.competitor}</span>
                </div>
            ))}
          </div>

          {/* Visibility threshold line */}
          <div className='w-full border-t border-dashed border-[#ef4444] opacity-70 my-2'>
            <div className='absolute right-2 top-[50%] transform -translate-y-1/2 text-xs text-[#ef4444]'>
              Visibility threshold
            </div>
          </div>

          {/* Your position - far below */}
          <div className='max-w-[80%] mx-auto pt-2'>
            <div className='flex items-center rounded-lg px-2 py-1 bg-[#242424] border border-[#ef4444]/30'>
              <div
                  className='w-6 h-6 flex items-center justify-center rounded-lg mr-2'
                  style={{ backgroundColor: yourPosition.color }}
              >
                {yourPosition.position}
              </div>
              <span className='text-sm text-foreground font-medium'>
              {yourPosition.competitor}
            </span>
              <span className='ml-auto text-xs text-[#ef4444] flex items-center'>
              <ChevronDown size={14} className='mr-0.5' />
              Out of view
            </span>
            </div>
          </div>
        </div>
    );
  };

  // Missed Opportunities Visualization
  const renderMissedOpportunities = () => {
    const opportunitiesData = [
      { name: 'Referral Traffic', value: 35 },
      { name: 'Brand Mentions', value: 25 },
      { name: 'Direct Inquiries', value: 20 },
      { name: 'Conversions', value: 15 },
      { name: 'Industry Authority', value: 5 },
    ];

    // Cambiando los colores a tonos de rojo
    const COLORS = ['#ef4444', '#ff6b6b', '#ff9999', '#ffb3b3', '#ffcccc'];
    const totalValue = opportunitiesData.reduce(
        (sum, item) => sum + item.value,
        0
    );

    return (
        <div className='w-full h-full flex'>
          <div className='w-1/2 h-full'>
            <ResponsiveContainer width='100%' height='100%'>
              <PieChart margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                <Pie
                    data={opportunitiesData}
                    cx='50%'
                    cy='50%'
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={3}
                    dataKey='value'
                >
                  {opportunitiesData.map((entry, index) => (
                      <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                      />
                  ))}
                </Pie>
                <Tooltip
                    formatter={(value) => [`${value}%`, 'Missed']}
                    contentStyle={{
                      backgroundColor: '#242424',
                      border: 'none',
                      borderRadius: '4px',
                    }}
                    itemStyle={{ color: '#ffffff' }}
                    labelStyle={{ color: '#a0a0a0' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className='w-1/2 h-full flex flex-col justify-center'>
            <div className='space-y-1.5'>
              {opportunitiesData.map((item, idx) => (
                  <div key={idx} className='flex items-center text-xs'>
                    <div
                        className='w-2 h-2 rounded-lg mr-2'
                        style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                    ></div>
                    <span className='text-[#a0a0a0] truncate'>{item.name}</span>
                    <span className='ml-auto text-foreground'>{item.value}%</span>
                  </div>
              ))}
              <div className='pt-1 mt-1 border-t border-[#242424] flex items-center text-xs'>
                <span className='text-[#a0a0a0]'>Total Missed</span>
                <span className='ml-auto text-foreground font-medium'>
                {totalValue}%
              </span>
              </div>
            </div>
          </div>
        </div>
    );
  };

  // Array of rendering functions for each visualization
  const renderVisualizations = [
    renderTrafficDecline,
    renderTrustAndCredibility,
    renderCompetitionComparison,
    renderMissedOpportunities,
  ];

  return (
      <div className='overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
          {/* Header Section - usando el estilo LeadingSection */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
            <span className='bg-destructive rounded-lg size-10 p-2 flex items-center justify-center'>
              <AlertCircle className='size-8 text-destructive-foreground' />
            </span>
            </div>

            <h2 className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'>
              Lack of <br/>
              <span className='heading-gradient-red-bright'>Digital Authority</span>
            </h2>

            <p className="text-foreground/80 max-w-2xl mx-auto text-center">
              Do you feel stuck in search results while watching your competition move forward?
              We know that in the digital world, having an attractive website isn't enough if nobody knows about it.
            </p>
          </div>

          {/* Grid of cards with CardBorderBeam */}
          <div className='grid sm:grid-cols-2 gap-1'>
            {problems.map(({ icon: IconElement, title, description }, index) => (
                <CardBorderBeam
                    key={index}
                    index={index}
                    colorFrom='red'
                    colorTo='red'
                    size={150}
                    className={`group ${
                        (index + 1) % 2 === 0
                            ? 'bg-gradient-to-tl'
                            : 'bg-gradient-to-tr'
                    } from-destructive/10 via-destructive/5 to-background-primary h-auto`}
                >
                  <div className='p-6 w-full h-full'>
                    <header className='flex items-center justify-start mb-6'>
                  <span className='bg-destructive rounded-lg size-10 p-2 mr-4 flex items-center justify-center group-hover:rotate-45 transition-transform duration-700 ease-in-out'>
                    <IconElement className='size-8 text-primary-500 group-hover:-rotate-45 group-hover:scale-150 transition-transform duration-700 ease-in-out text-destructive-foreground' />
                  </span>
                      <h3 className='group-hover:text-destructive transition-colors duration-700 ease-in-out'>
                        {title}
                      </h3>
                    </header>

                    {/* Dynamic visualizations */}
                    <div className='h-48 mb-4'>{renderVisualizations[index]()}</div>

                    <p className='text-sm mt-2 text-foreground/50 group-hover:text-foreground transition-colors duration-700 ease-in-out'>
                      {description}
                    </p>
                  </div>
                </CardBorderBeam>
            ))}
          </div>
        </div>
      </div>
  );
};