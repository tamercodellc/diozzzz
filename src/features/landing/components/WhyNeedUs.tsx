'use client';

import { motion } from 'framer-motion';
import {
  Layers,
  Target,
  ArrowRight,
  Globe,
  Shield,
  LineChart,
  EyeOff,
  Share2,
  HelpCircle,
  ImageOff,
  DollarSign,
  FileText,
  BarChart2,
  MessageCircle,
  MousePointer,
  Monitor,
  AlertTriangle
} from 'lucide-react';
import Image from 'next/image';
import {IconButton3D, MagicCard} from '@/components/ui';

// Business Challenges cards - Left Column
const leftColumnCards = [
  {
    title: "Your Excellence Remains Invisible",
    description: "You have an exceptional product or service, but potential customers simply can't find you. As many business owners tell us: \"Those who try, repeat... but nobody discovers me\". In a world where attention is on screens, digital invisibility is a silent barrier to growth.",
    icon: EyeOff,
  },
  {
    title: "You Depend Exclusively on Recommendations",
    description: "Living off word-of-mouth is like building a business on fragile foundations. While it occasionally works, it keeps you in a cycle of uncertainty and stagnation. You can't plan, scale, or predict results when your only sales channel depends on the goodwill of others.",
    icon: Share2,
    image: "/fragile_foundation_business.png",
    imagePosition: "top",
    hasImage: true
  },
  {
    title: "You Feel Overwhelmed by Complexity",
    description: "SEO, funnels, leads, retargeting... while you try to decipher this new language, your competition moves forward. Analysis paralysis keeps you stuck while the market evolves without waiting for you.",
    icon: HelpCircle,
  },
  {
    title: "Your Image Doesn't Reflect Your True Value",
    description: "A weak or non-existent digital presence sends the wrong message about your professionalism. Clients judge the quality of your work by how you present yourself online, and a poor first impression can cost you valuable opportunities.",
    icon: ImageOff,
    badge: "Common Problem",
    large: true,
    image: "/true_value.png",
    imagePosition: "bottom",
    hasImage: true
  },
  {
    title: "You Compete on Price Instead of Value",
    description: "Without strategic visibility, you fall into the trap of lowering prices to attract customers. This path only leads to the devaluation of your work and increasingly reduced margins, creating a vicious cycle that is difficult to break.",
    icon: DollarSign,
  },
  {
    title: "Your Content Exists, But Doesn't Impact",
    description: "You post constantly but business results don't appear. Digital burnout is real: you invest time and resources in content that doesn't generate tangible value for your business or resonance with your ideal audience.",
    icon: FileText,
    badge: "Common Frustration",
  },
  {
    title: "You Invest Blindly",
    description: "\"I don't know if what I'm doing is working\" is the most common confession among entrepreneurs. Without clear metrics and strategic interpretation of data, your marketing budget becomes a risky bet instead of a calculated investment.",
    icon: BarChart2,
    image: "/investing_blindly.png",
    imagePosition: "bottom",
    hasImage: true
  }
];

// Business Challenges cards - Right Column
const rightColumnCards = [
  {
    title: "Your Message Doesn't Resonate With Your Target Audience",
    description: "Communicating to everyone is communicating to no one. When your message lacks specificity and doesn't address the precise pain points of your ideal client, it gets lost in the digital noise without generating connection or response.",
    icon: MessageCircle,
    image: "/message_audience.png",
    large: true,
    imagePosition: "top",
    hasImage: true
  },
  {
    title: "Your Ads Generate Impressions, Not Conversions",
    description: "Reaching thousands of people is irrelevant if they're not the right ones or if your message doesn't motivate them to act. Advertising investment without a clear strategy is like shooting arrows blindfolded.",
    icon: MousePointer,
    image: "/generating_impressions.png",
    imagePosition: "bottom",
    hasImage: true
  },
  {
    title: "Your Website Doesn't Work For You",
    description: "Your website should be your best salesperson, working 24/7. However, many entrepreneurs feel embarrassed to share their site because it doesn't effectively communicate the value they offer or facilitate the conversion of visitors into customers.",
    icon: Monitor,
  },
  {
    title: "Navigating Without Compass or Map",
    description: "Technical reports and isolated metrics don't give you a clear vision of progress. The lack of transparency and mutual understanding turns marketing investment into a black box of uncertain results.",
    icon: Globe,
  },
  {
    title: "Receiving Generic Solutions for Unique Problems",
    description: "Standardized strategies don't work in a market where differentiation is crucial. Your business is not like others, and tactics that work for others may not be right for you.",
    icon: Shield,
    badge: "Common Pain",
    image: "/generic_solutions.png",
    imagePosition: "top",
    hasImage: true
  },
  {
    title: "Facing a Misalignment of Objectives",
    description: "While your agency celebrates vanity metrics, you continue to wait for tangible business results. This fundamental misalignment prevents marketing from being a true growth lever for your business.",
    icon: Target,
  },
  {
    title: "Not Seeing Significant Progress",
    description: "Months of investment without clear results generate frustration and distrust. Effective marketing should show progressive and measurable returns, not eternal promises of future results.",
    icon: LineChart,
  },
  {
    title: "Losing Authenticity in Your Communication",
    description: "Your brand has a unique voice and distinctive values. When published content seems generic or disconnected from your essence, the coherence that customers need to trust you is broken.",
    icon: Layers,
  }
];

export function Problems() {
  const renderCard = (card, index) => {
    const Icon = card.icon;

    // Calculate appropriate height class based on whether the card has an image
    const heightClass = card.hasImage
        ? card.large
            ? 'min-h-[650px]'
            : 'min-h-[500px]'
        : '';

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
          <MagicCard
              className={`relative group p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-foreground/10 ${
                  card.large ? 'md:row-span-2' : ''
              } ${heightClass} hover:border-primary/20 transition-all duration-300`}
              gradientColor="rgba(var(--primary-rgb), 0.1)"
          >
            <div className="relative h-full flex flex-col">
              {card.imagePosition === "top" && card.image && (
                  <div className="mb-6 pb-6  rounded-lg overflow-hidden">
                    <Image
                        src={card.image}
                        alt={card.title}
                        width={800}
                        height={400}
                        className="w-full object-cover"
                    />
                  </div>
              )}
              <div className="flex md:items-center md:justify-start items-center justify-center gap-3 mb-6">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center flex-wrap">
                  <h3 className="text-xl font-semibold md:text-left text-center">{card.title}</h3>
                  {card.badge && (
                      <span className="ml-3 text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full hidden md:inline-block">
                        {card.badge}
                      </span>
                  )}
                </div>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed flex-grow md:text-left text-center">
                {card.description}
              </p>
              {card.imagePosition === "bottom" && card.image && (
                  <div className="mt-auto pt-6 rounded-lg overflow-hidden">
                    <Image
                        src={card.image}
                        alt={card.title}
                        width={800}
                        height={400}
                        className="w-full object-cover"
                    />
                  </div>
              )}
            </div>
          </MagicCard>
        </motion.div>
    );
  };

  return (
      <section className="relative overflow-hidden w-full pt-24">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-20 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex md:justify-between justify-center items-center mb-8 flex-wrap">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-2 md:mb-2 flex justify-center md:justify-start"
            >
              <IconButton3D icon={AlertTriangle} />
            </motion.div>
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 text-sm md:flex hidden"
            >
              Tell Me How Fix It
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Obstacles That Slow Down
              <span className='heading-gradient'> Your Business Growth</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 md:text-left text-center"
            >
              Your business deserves a digital strategy that truly works - one that understands your specific challenges and helps you overcome them with clarity, transparency, and measurable results. We identify the most common problems businesses face in their digital presence.
            </motion.p>
          </div>
        </div>
        <div className="w-full overflow-hidden mb-4 py-6">
          <motion.div
              className="flex whitespace-nowrap items-center"
              initial={{ x: "0%" }}
              animate={{ x: "-100%" }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear"
              }}
              style={{ marginTop: '-10px', marginBottom: '-10px' }}
          >
            {Array(10).fill(0).map((_, index) => (
                <span
                    key={index}
                    className="text-6xl md:text-7xl"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '1px var(--blue-stroke, #3b82f6)',
                      textStroke: '1px var(--blue-stroke, #3b82f6)',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                      lineHeight: '0.9'
                    }}
                >
                We understand your challenges <span className="mx-2">•</span>
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cards Grid - Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {leftColumnCards.map(renderCard)}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {rightColumnCards.map(renderCard)}
            </div>
          </div>

          {/* Mobile CTA button - only visible on mobile */}
          <div className="flex justify-center mt-12 md:hidden">
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 text-sm py-3 px-6 rounded-full border border-primary/30"
            >
              Tell Me How Fix It
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </section>
  );
}