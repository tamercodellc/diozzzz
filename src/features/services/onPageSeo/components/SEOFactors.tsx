import React from 'react';
import { XCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  PageSpeedComponent,
  ResponsiveDesignComponent,
  SecurityComponent,
  StructuredDataComponent,
  EngagementTimeComponent,
  ClusterStructureComponent,
  ContentQualityComponent,
  KeywordsOptimizationComponent,
  TechnicalSEOComponent,
  SEOErrorsComponent,
  UserExperienceComponent,
  CoreWebVitalsComponent,
} from './SEOComponents';
import { ShimmerButton, IconButton3D } from '@/components/ui';

const SEOFactors = () => {
  return (
      <div>
        <div className="space-y-24 max-w-6xl mx-auto px-4">
          {/* 1. Velocidad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">Poor Loading Speed</h3>
              <p className="text-foreground/90">
                Your website takes over 8 seconds to load, when the industry
                standard is 3 seconds or less. This means:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    53% of your visitors leave your site before it finishes
                    loading
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Google penalizes your ranking due to poor user experience
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:scale-110">
              <PageSpeedComponent />
            </div>
          </div>

          {/* 2. Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">Non-Optimized Mobile Design</h3>
              <p className="text-foreground/90">
                Your site is not adapted for mobile devices, which means:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-lg p-2">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="text-foreground/90">
                    You&apos;re losing 68% of potential traffic from smartphone
                    users
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="rounded-lg p-2">
                    <XCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <p className="text-foreground/90">
                    Google prioritizes mobile-first sites in search results
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:order-1 md:scale-110">
              <ResponsiveDesignComponent />
            </div>
          </div>

          {/* 3. Core Web Vitals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">Critical Core Web Vitals</h3>
              <p className="text-foreground/90">
                Your performance metrics are well below Google&apos;s standards:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    LCP of 5.2s when it should be less than 2.5s
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    CLS of 0.45 exceeding the recommended limit by 5x
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:scale-110">
              <CoreWebVitalsComponent />
            </div>
          </div>

          {/* 4. SEO Técnico */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">Serious Technical Issues</h3>
              <p className="text-foreground/90">
                Your site has fundamental technical problems preventing
                indexation:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Only 22% of your pages are being indexed by Google
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Missing critical files like sitemap.xml and robots.txt
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:order-1 md:scale-110">
              <TechnicalSEOComponent />
            </div>
          </div>

          {/* 5. Seguridad */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">Security Vulnerabilities</h3>
              <p className="text-foreground/90">
                Your site lacks the necessary basic security measures:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    No valid SSL certificate, losing visitor trust
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Google marks your site as &quot;Not secure&quot; in results
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:scale-110">
              <SecurityComponent />
            </div>
          </div>

          {/* 6. Datos Estructurados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">Incorrect Structured Data</h3>
              <p className="text-foreground/90">
                Errors in your structured data are affecting your visibility:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Not appearing in Google&apos;s rich snippets
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Loss of CTR due to lack of visual elements in SERP
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:order-1 md:scale-110">
              <StructuredDataComponent />
            </div>
          </div>

          {/* 7. Tiempo de Permanencia */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">Concerning Engagement</h3>
              <p className="text-foreground/90">
                Users are quickly abandoning your site:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Average time on site of only 24 seconds
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    78% bounce rate, well above average
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:scale-110">
              <EngagementTimeComponent />
            </div>
          </div>

          {/* 8. Estructura de Contenido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">Poor Content Structure</h3>
              <p className="text-foreground/90">
                Your content lacks a clear and effective structure:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    No clear hierarchy of topics and subtopics
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Broken internal links confusing users and bots
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:order-1 md:scale-110">
              <ClusterStructureComponent />
            </div>
          </div>

          {/* 9. Calidad de Contenido */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">Low Quality Content</h3>
              <p className="text-foreground/90">
                Your content doesn&apos;t meet Google&apos;s E-E-A-T standards:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Lack of demonstrable topic expertise
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Low content authority and trustworthiness
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:scale-110">
              <ContentQualityComponent />
            </div>
          </div>

          {/* 10. Optimización de Keywords */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">Poorly Optimized Keywords</h3>
              <p className="text-foreground/90">
                Your keyword strategy is failing:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Keyword density below effective minimum
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    No use of related LSI keywords
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:order-1 md:scale-110">
              <KeywordsOptimizationComponent />
            </div>
          </div>

          {/* 11. Errores SEO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">Critical SEO Errors</h3>
              <p className="text-foreground/90">
                Your site has serious technical issues:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    42 broken internal links damaging the experience
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    13 pages with duplicate content
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:scale-110">
              <SEOErrorsComponent />
            </div>
          </div>

          {/* 12. Experiencia de Usuario */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 space-y-6">
              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground">Poor UX</h3>
              <p className="text-foreground/90">
                The user experience is well below standard:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Confusing navigation that frustrates users
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <p className="text-foreground/90">
                    Accessibility issues limiting your audience
                  </p>
                </li>
              </ul>
            </div>
            <div className="md:order-1 md:scale-110">
              <UserExperienceComponent />
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center max-w-3xl mx-auto py-16">
            <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl font-bold mb-6 leading-tight text-foreground"
            >
              Ready to multiply your online visibility?
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-foreground/80 max-w-2xl mx-auto text-center mb-8"
            >
              We&apos;ve helped hundreds of businesses solve these same issues and
              multiply their organic traffic. Let us show you how.
            </motion.p>
            <ShimmerButton variant="destructive" size="big">
              Get your free SEO audit →
            </ShimmerButton>
          </div>
        </div>
      </div>
  );
};

export default SEOFactors;