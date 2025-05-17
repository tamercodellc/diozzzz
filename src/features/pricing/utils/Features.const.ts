import { PricingFeature } from '@/lib';
import { Calculator, Search } from 'lucide-react';

export const features: PricingFeature[] = [
  {
    icon: Calculator,
    name: 'Web Cost Calculator',
    items: [
      {
        name: 'Access Level',
        starter: 'Full Access',
        growth: 'Full Access',
        enterprise: 'Full Access',
      },
    ],
  },
  {
    icon: Search,
    name: 'SEO Audit',
    items: [
      {
        name: 'On-Page Analysis',
        starter: '5 Pages/day On-Page',
        growth: '50 Pages/day On-Page',
        enterprise: '300 Pages/day On-Page',
      },
      {
        name: 'Off-Page Analysis',
        starter: '5 Pages/day Off-Page',
        growth: '50 Pages/day Off-Page',
        enterprise: '300 Pages/day Off-Page',
      },
      {
        name: 'AI Assistance',
        starter: 'AI Assistance',
        growth: 'AI Assistance',
        enterprise: 'AI Assistance',
      },
      {
        name: 'Custom Reports',
        starter: 'Custom Reports',
        growth: 'Custom Reports',
        enterprise: 'Custom Reports',
      },
      {
        name: 'Keyword Analysis',
        starter: '-',
        growth: 'Keyword Analysis',
        enterprise: 'Keyword Analysis',
      },
      {
        name: 'Backlink Monitoring',
        starter: '-',
        growth: 'Backlink Monitoring',
        enterprise: 'Backlink Monitoring',
      },
    ],
  },
  {
    icon: Calculator,
    name: 'Landing Page Creator',
    items: [
      {
        name: 'Pages',
        starter: '1 Basic Page',
        growth: 'Up to 5 Pages',
        enterprise: 'Unlimited Pages',
      },
      {
        name: 'Templates',
        starter: 'Basic Templates',
        growth: 'Full Template Access',
        enterprise: 'Full Template Access',
      },
      {
        name: 'Domain',
        starter: 'Generic Domain',
        growth: 'Custom Domain',
        enterprise: 'Custom Domain',
      },
      {
        name: 'Integrations',
        starter: 'No External Integrations',
        growth: 'Advanced Integrations',
        enterprise:
            'Advanced Integrations',
      },
      {
        name: 'A/B Testing',
        starter: '-',
        growth: 'Advanced A/B Testing',
        enterprise: 'Advanced A/B Testing',
      },
      {
        name: 'Support',
        starter: '-',
        growth: 'Premium Support',
        enterprise: 'Premium Support',
      },
      {
        name: 'Analytics',
        starter: '-',
        growth: 'Access to Detailed Analytics',
        enterprise: 'Access to Detailed Analytics',
      },
      {
        name: 'Additional Site',
        starter: '-',
        growth: '1 Additional Complete Website',
        enterprise: '1 Additional Complete Website',
      },
    ],
  },
  {
    icon: Calculator,
    name: 'GMB Manager',
    items: [
      {
        name: 'Locations',
        starter: '1 Location',
        growth: '5 Locations',
        enterprise: '10 Locations',
      },
      {
        name: 'Posts',
        starter: '5 Posts/month',
        growth: '20 Posts/month',
        enterprise: 'Unlimited Posts',
      },
      {
        name: 'Reviews Management',
        starter: 'Basic Monitoring',
        growth: 'Advanced Management',
        enterprise: 'Full Management Suite',
      },
      {
        name: 'Analytics',
        starter: 'Basic Reports',
        growth: 'Advanced Analytics',
        enterprise: 'Custom Reports',
      },
      {
        name: 'Insights',
        starter: '-',
        growth: 'Performance Insights',
        enterprise: 'AI-Powered Insights',
      },
      {
        name: 'Competitor Tracking',
        starter: '-',
        growth: '3 Competitors',
        enterprise: '10 Competitors',
      },
    ],
  },
  {
    icon: Calculator,
    name: 'AI Chat',
    items: [
      {
        name: 'Monthly Chats',
        starter: '100 chats/month',
        growth: '1,000 chats/month',
        enterprise: '5,000 chats/month',
      },
      {
        name: 'AI Responses',
        starter: 'Basic response templates',
        growth: 'Customizable AI responses',
        enterprise: 'Fully personalized AI models',
      },
      {
        name: 'Integrations',
        starter: 'No integrations',
        growth: 'CRM integration',
        enterprise: 'Multi-platform integration',
      },
      {
        name: 'Support',
        starter: 'Community support',
        growth: 'Email support',
        enterprise: 'Priority support',
      },
    ],
  },
  {
    icon: Calculator,
    name: 'CRM',
    items: [
      {
        name: 'Contacts',
        starter: '-',
        growth: '1,000 contacts',
        enterprise: '10,000 contacts',
      },
      {
        name: 'Pipelines',
        starter: '-',
        growth: '3 pipelines',
        enterprise: 'Unlimited pipelines',
      },
      {
        name: 'Integrations',
        starter: '-',
        growth: 'Email marketing integration',
        enterprise: 'Advanced CRM integrations',
      },
      {
        name: 'Support',
        starter: '-',
        growth: 'Email support',
        enterprise: 'Priority support',
      },
    ],
  },
  {
    icon: Calculator,
    name: 'Sales Funnels',
    items: [
      {
        name: 'Funnels',
        starter: '-',
        growth: '3 funnels',
        enterprise: 'Unlimited funnels',
      },
      {
        name: 'Templates',
        starter: '-',
        growth: 'Premium templates',
        enterprise: 'Fully customizable templates',
      },
      {
        name: 'A/B Testing',
        starter: '-',
        growth: 'Basic A/B testing',
        enterprise: 'Advanced A/B testing',
      },
      {
        name: 'Analytics',
        starter: '-',
        growth: 'Detailed funnel insights',
        enterprise: 'Advanced funnel analytics',
      },
    ],
  },
  {
    icon: Calculator,
    name: 'AI Writer',
    items: [
      {
        name: 'Monthly Words',
        starter: '-',
        growth: '10,000 words/month',
        enterprise: '50,000 words/month',
      },
      {
        name: 'Templates',
        starter: '-',
        growth: 'Premium templates',
        enterprise: 'Fully customizable templates',
      },
      {
        name: 'SEO Optimization',
        starter: '-',
        growth: 'Basic SEO optimization',
        enterprise: 'Advanced SEO optimization',
      },
      {
        name: 'Support',
        starter: '-',
        growth: 'Email support',
        enterprise: 'Priority support',
      },
    ],
  },
];