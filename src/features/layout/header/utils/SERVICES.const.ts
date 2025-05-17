import {
  Search,
  Target,
  FileText,
  BarChart2,
  Globe2,
  Building2,
  LineChart,
  TrendingUp,
  Share2,
  Mail,
  LucideIcon,
  Link as LinkIcon,
  PenTool,
  DollarSign,
  Code,
  Users,
  Video,
} from 'lucide-react';
import { IconType } from 'react-icons';

export interface SERVICE {
  name: string;
  icon: LucideIcon | IconType;
  href: string;
  status?: 'ready';
}

export const services: SERVICE[] = [
  // SEO Services
  {
    name: 'Technical SEO',
    icon: Search,
    href: '/services/technical-seo',
    status: 'ready',
  },
  {
    name: 'Content Marketing',
    icon: Target,
    href: '/services/content-marketing',
    status: 'ready',
  },
  {
    name: 'Keywords Research',
    icon: Target,
    href: '/services/keywords-research',
    status: 'ready',
  },
  {
    name: 'SEO On-Page',
    icon: FileText,
    href: '/services/on-page-seo',
    status: 'ready',
  },
  {
    name: 'SEO Audit ',
    icon: BarChart2,
    href: '/services/seo-audit',
    status: 'ready',
  },
  {
    name: 'SEO Off-Page',
    icon: Globe2,
    href: '/services/off-page-seo',
    status: 'ready',
  },
  {
    name: 'Local SEO',
    icon: Building2,
    href: '/services/local-seo',
    status: 'ready',
  },
  {
    name: 'E-commerce SEO',
    icon: LineChart,
    href: '/services/ecommerce-seo',
    status: 'ready',
  },
  {
    name: 'SEO Consulting',
    icon: TrendingUp,
    href: '/services/consulting-seo',
  },
  {
    name: 'Link Building',
    icon: LinkIcon,
    href: '/services/link-building',
    status: 'ready',
  },
  {
    name: 'SEO Writing',
    icon: PenTool,
    href: '#',
    //'/services/seo-copywriting'
  },

  // Digital Marketing Services
  {
    name: 'Google Ads',
    icon: Target,
    href: '/services/google-ads',
    status: 'ready',
  },
  {
    name: 'Social Media',
    icon: Share2,
    href: '/services/social-media-marketing',
    status: 'ready',
  },
  {
    name: 'Social Media Advertising',
    icon: DollarSign,
    href: '#',
    //'/services/social-media-advertising'
  },
  {
    name: 'Email Marketing',
    icon: Mail,
    href: '/services/email-marketing',
  },
  {
    name: 'Sales Funnel',
    icon: BarChart2,
    href: '#',
    //'/services/sales-funnel'
  },
  {
    name: 'Website Design',
    icon: Code,
    href: '#',
    //'/services/website-design'
  },
  {
    name: 'Consultant',
    icon: Users,
    href: '#',
    //'/services/marketing-consultant'
  },
  {
    name: 'Video Marketing',
    icon: Video,
    href: '#',
    //'/services/video-marketing'
  },
];
