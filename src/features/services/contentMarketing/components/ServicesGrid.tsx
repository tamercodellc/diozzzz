'use client'
import {
  ArticleBeneffits,
  ArticleProblems,
  ContentMarketingGridComponent,
  EBookBenefits,
  EBookProblems,
  InfoBenefits,
  InfoProblems,
  PodcastBenefits,
  PodCastProblems,
  SocialMediaBenefits,
  SocialMediaProblems,
  VideoBenefits,
  VideoProblems,
} from './ServicesGridComponents'
import {
  BookOpen,
  FileText,
  LineChart,
  MailOpen,
  Share,
  Video,
  VideoIcon,
} from 'lucide-react'
import { MicrophoneIcon } from '@heroicons/react/24/outline'
import { NewsLettersBenefits } from './ServicesGridComponents/NewsLetterBenefits'
import { NewsLetterProblems } from './ServicesGridComponents/MewsLetterProblems'
import { motion } from 'framer-motion';
import { IconButton3D } from '@/components/ui';

export const ContentMarketingServicesGrid = () => {
  return (
      <section className='relative py-12 overflow-hidden'>
        <div className='container mx-auto px-4'>
          {/* Heading Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <IconButton3D icon={VideoIcon} variant="red" />
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-6'
            >
              Transform Your Content Challenges <br/>
              <span className='heading-gradient-red-bright'>into Opportunities</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-12"
            >
              We understand the complexities of modern content marketing. From
              inconsistent messaging to low engagement rates, we transform these
              challenges into growth opportunities through strategic, data-driven
              content solutions.
            </motion.p>
          </div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
          >
            <ContentMarketingGridComponent
                icon={FileText}
                benefits={<ArticleBeneffits />}
                description='Rank higher, convert better.'
                problems={<ArticleProblems />}
                title='Articles & Blogs'
            />
            <ContentMarketingGridComponent
                icon={Video}
                benefits={<VideoBenefits />}
                description="Show, don't just tell."
                problems={<VideoProblems />}
                title='Educational Videos'
            />
            <ContentMarketingGridComponent
                icon={LineChart}
                benefits={<InfoBenefits />}
                description='Turn data into visual stories.'
                problems={<InfoProblems />}
                title="Infographic's"
            />
            <ContentMarketingGridComponent
                icon={MicrophoneIcon}
                benefits={<PodcastBenefits />}
                description='Voice your expertise.'
                problems={<PodCastProblems />}
                title='Podcasts'
            />
            <ContentMarketingGridComponent
                icon={BookOpen}
                benefits={<EBookBenefits />}
                description='Lead magnets that convert.'
                problems={<EBookProblems />}
                title='Ebooks & Guides'
            />
            <ContentMarketingGridComponent
                icon={Share}
                benefits={<SocialMediaBenefits />}
                description='Engage and grow.'
                problems={<SocialMediaProblems />}
                title='Social Media Posts'
            />
            <ContentMarketingGridComponent
                icon={MailOpen}
                benefits={<NewsLettersBenefits />}
                description='Nurture and convert.'
                problems={<NewsLetterProblems />}
                title='Newsletters'
            />
          </motion.div>
        </div>
      </section>
  )
}