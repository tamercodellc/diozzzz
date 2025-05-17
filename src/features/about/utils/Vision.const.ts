import { VISIONITEM } from '@/lib';
import { Eye, Goal, LineChart, Target } from 'lucide-react';

// If needed, update the VISIONITEM type in your lib folder:
/*
export type VISIONITEM = {
  title: string;
  icon: any;
  content: string;
  image?: string;
  align?: 'left' | 'right';
  badge?: string;
  imagePosition?: 'top' | 'bottom';
};
*/

export const visionItems: VISIONITEM[] = [
  {
    title: 'Our Vision',
    icon: Eye,
    content:
        'To revolutionize digital marketing through innovation and data-driven strategies, making advanced digital solutions accessible to businesses of all sizes.',
    image: '/our-vision.webp',
    badge: 'Core Value',
    imagePosition: 'top',
  },
  {
    title: 'Our Mission',
    icon: Target,
    content:
        'To empower businesses with cutting-edge digital solutions that drive measurable growth and sustainable success in the digital landscape.',
    image: '/our-mission.webp',
    badge: 'Goal',
    imagePosition: 'bottom',
  },
  {
    title: 'Our Goals',
    icon: Goal,
    content:
        'To continuously innovate and expand our digital solutions, helping more businesses achieve their full potential in the digital world.',
    image: '/our-goals.webp',
    badge: 'Strategy',
    imagePosition: 'top',
  },
  {
    title: 'Our Impact',
    icon: LineChart,
    content:
        'To create lasting positive change in the digital marketing industry by setting new standards for excellence and client success.',
    image: '/our-impact.webp',
    badge: 'Results',
    imagePosition: 'bottom',
  },
];