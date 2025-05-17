'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

type CardContent =
    | { type: 'image'; content: string }
    | {
  type: 'stat';
  title: string;
  description: string;
  icon: LucideIcon | IconType;
  positive: boolean;
};

interface MarqueeProps {
  items: CardContent[];
  direction?: 'up' | 'down' | 'left' | 'right';
  speed?: number;
  className?: string;
  skewAngle?: number; // New prop for controlling the skew angle
  opacity?: number; // New prop for controlling opacity
}

export function Marquee({
                          items,
                          direction = 'right',
                          speed = 5,
                          className = '',
                          skewAngle = -12, // Default skew angle (negative for leaning right)
                          opacity = 0.85, // Default opacity
                        }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollSpeed, setScrollSpeed] = useState(speed);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll speed based on window scroll position
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollY / maxScroll;

      // Increase speed based on scroll position (max 2x the original speed)
      const newSpeed = speed + speed * scrollPercentage;
      setScrollSpeed(newSpeed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  // Determine animation direction and style
  const getAnimationStyle = () => {
    const baseAnimation = {
      animationDuration: `${100 / scrollSpeed}s`,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      transform: isVertical ? `skewY(${skewAngle}deg)` : `skewX(${skewAngle}deg)`,
      opacity: hover ? Math.min(opacity + 0.1, 1) : opacity,
      transition: 'opacity 0.5s ease',
    };

    switch (direction) {
      case 'up':
        return {
          ...baseAnimation,
          animationName: 'scrollUp',
          flexDirection: 'column' as const,
        };
      case 'down':
        return {
          ...baseAnimation,
          animationName: 'scrollDown',
          flexDirection: 'column' as const,
        };
      case 'left':
        return {
          ...baseAnimation,
          animationName: 'scrollLeft',
          flexDirection: 'row' as const,
        };
      case 'right':
      default:
        return {
          ...baseAnimation,
          animationName: 'scrollRight',
          flexDirection: 'row' as const,
        };
    }
  };

  const isVertical = direction === 'up' || direction === 'down';

  // For offsetting the cards to compensate for skew
  const getCardStyle = () => {
    return {
      transform: isVertical ? `skewY(${-skewAngle}deg)` : `skewX(${-skewAngle}deg)`,
    };
  };

  return (
      <div
          className={`marquee-container overflow-hidden relative ${className}`}
          ref={containerRef}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
      >
        <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(0) skewX(${skewAngle}deg);
          }
          100% {
            transform: translateX(-50%) skewX(${skewAngle}deg);
          }
        }
        @keyframes scrollLeft {
          0% {
            transform: translateX(-50%) skewX(${skewAngle}deg);
          }
          100% {
            transform: translateX(0) skewX(${skewAngle}deg);
          }
        }
        @keyframes scrollUp {
          0% {
            transform: translateY(-50%) skewY(${skewAngle}deg);
          }
          100% {
            transform: translateY(0) skewY(${skewAngle}deg);
          }
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(0) skewY(${skewAngle}deg);
          }
          100% {
            transform: translateY(-50%) skewY(${skewAngle}deg);
          }
        }
      `}</style>

        {/* Gradient overlays for fading edges */}
        {isVertical ? (
            <>
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
            </>
        ) : (
            <>
              <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />
            </>
        )}

        <div className='marquee-content flex' style={getAnimationStyle()}>
          {/* Duplicate items for seamless looping */}
          {[...items, ...items].map((item, index) => (
              <div
                  key={index}
                  className={`marquee-item ${
                      isVertical ? 'w-full' : 'flex-shrink-0'
                  } transition-transform duration-300`}
                  style={getCardStyle()}
              >
                <Card content={item} />
              </div>
          ))}
        </div>
      </div>
  );
}

function Card({ content }: { content: CardContent }) {
  const [hover, setHover] = useState(false);

  return (
      <div
          className={`w-80 m-1 rounded-lg border border-ring/20 p-2 backdrop-blur-3xl backdrop-filter py-6 px-3 transition-all duration-300 ${
              content.type === 'image'
                  ? 'bg-card/70'
                  : content.type === 'stat' && content.positive
                      ? 'bg-gradient-to-br from-card/70 to-secondary-green/10'
                      : 'bg-gradient-to-br from-card/70 to-destructive/10'
          } ${hover ? 'shadow-lg scale-[1.02]' : 'shadow-md'}`}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
      >
        {content.type === 'image' ? (
            <div className="relative overflow-hidden rounded-lg">
              <Image
                  src={content.content}
                  alt='Google Ads Stats'
                  width={400}
                  height={300}
                  layout='responsive'
                  className={`rounded-lg transition-transform duration-500 ${hover ? 'scale-[1.05]' : ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
            </div>
        ) : (
            <div className='flex items-center space-x-2 flex-col gap-4'>
              <div
                  className={`w-full flex gap-2 items-center justify-start
            ${content.positive ? 'text-secondary-green' : 'text-red-500'}`}
              >
            <span
                className={`
              size-12 rounded-lg flex items-center justify-center p-2
              transition-all duration-300
              ${hover ? 'shadow-md scale-105' : ''}
              ${
                    content.positive
                        ? 'text-secondary-green bg-secondary-green/10'
                        : 'text-red-500 bg-red-500/10'
                }
              `}
            >
              <content.icon />
            </span>
                <h3 className="font-medium">{content.title}</h3>
              </div>
              <p
                  className={`transition-all duration-300 ${
                      content.positive ? 'text-secondary-green' : 'text-red-500'
                  } ${hover ? 'font-medium' : ''}`}
              >
                <span>{content.positive ? '+' : '-'}</span>{' '}
                {content.description}
              </p>
            </div>
        )}
      </div>
  );
}