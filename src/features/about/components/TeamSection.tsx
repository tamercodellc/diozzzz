'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { IconButton3D } from '@/components/ui';
import Image from 'next/image';

const tabs = [
  'Jorge R Sanchez',
  'Thais Same',
  'Juan Pablo Caballero',
  'Yasmany Boffill',
];

const teamImages = {
  'Jorge R Sanchez': '/jorgeR.webp',
  'Thais Same': '/thais.webp',
  'Juan Pablo Caballero': '/juanpi.webp',
  'Yasmany Boffill': '/juanpi.webp', // Nota: misma imagen que Juan Pablo
};

export default function TeamSection() {
  const [activeTab, setActiveTab] = useState('Thais Same');

  return (
      <section className='relative overflow-hidden py-20'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-16'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='mb-4'
            >
              <IconButton3D icon={Users} />
            </motion.div>
            <motion.h2
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: 0.4}}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-center text-center pb-4 pt-4'
            >
              The People Behind
              <span className='heading-gradient'> Our Success</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="sm:mt-4 mt-4 max-w-3xl mx-auto text-foreground/80"
            >
              Meet the innovative minds shaping digital excellence
            </motion.p>
          </div>

          {/* Navigation Tabs */}
          <div className='flex justify-center mb-12'>
            <div className='bg-card rounded-md p-1 overflow-hidden'>
              <div className='flex space-x-2'>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-full transition-all duration-300 ${
                            activeTab === tab
                                ? 'bg-gradient-to-r from-primary to-ring text-foreground rounded-md'
                                : ' hover:text-primary rounded-md'
                        }`}
                    >
                      {tab}
                    </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'
          >
            {/* Left Side - Image - Sin background, bordes ni elementos adicionales */}
            <div className='relative'>
              <Image
                  src={teamImages[activeTab]}
                  alt={activeTab}
                  className='w-full h-auto'
                  width={600}
                  height={600}
                  priority
              />
            </div>

            {/* Right Side - Content */}
            {activeTab === 'Jorge R Sanchez' && (
                <div className='space-y-6'>
                  <div>
                    <h2 className='text-4xl font-bold mb-2'>Jorge R Sanchez</h2>
                    <h3 className='text-xl heading-gradient'>CEO & Founder</h3>
                  </div>

                  <p className='text-foreground/70 leading-relaxed'>
                    With a unique journey from Cuba to digital entrepreneurship,
                    Jorge brings a fresh perspective to digital marketing. His
                    experience in software development and digital strategy has
                    shaped TAMERDigital&apos;s innovative approach to business
                    growth.
                  </p>

                  <blockquote className='border-l-4 border-primary pl-4 italic text-foreground/90'>
                    &quot;Success in digital marketing comes from understanding both
                    technology and human behavior.&quot;
                  </blockquote>

                  <div>
                    <h4 className='font-semibold mb-4'>Expertise</h4>
                    <div className='flex flex-wrap gap-2'>
                      {[
                        'Digital Strategy',
                        'Business Development',
                        'Technical Leadership',
                      ].map((skill) => (
                          <span
                              key={skill}
                              className='px-4 py-2 rounded-full bg-card heading-gradient text-sm'
                          >
                      {skill}
                    </span>
                      ))}
                    </div>
                  </div>
                </div>
            )}

            {activeTab === 'Thais Same' && (
                <div className='space-y-6'>
                  <div>
                    <h2 className='text-4xl font-bold mb-2'>Thais Same</h2>
                    <h3 className='text-xl heading-gradient'>
                      Head of CEO & General Manager
                    </h3>
                  </div>

                  <p className='text-foreground/70 leading-relaxed'>
                    Leading our operational excellence, Thais brings strategic
                    vision and organizational expertise to ensure seamless delivery
                    of our digital solutions. Her leadership drives our team&apos;s
                    efficiency and client success.
                  </p>

                  <blockquote className='border-l-4 border-primary pl-4 italic text-foreground/90'>
                    &quot;Excellence is not just about what we do, but how we do
                    it.&quot;
                  </blockquote>

                  <div>
                    <h4 className='font-semibold mb-4'>Expertise</h4>
                    <div className='flex flex-wrap gap-2'>
                      {[
                        'Operations Management',
                        'Team Leadership',
                        'Client Relations',
                      ].map((skill) => (
                          <span
                              key={skill}
                              className='px-4 py-2 rounded-full bg-card heading-gradient text-sm'
                          >
                      {skill}
                    </span>
                      ))}
                    </div>
                  </div>
                </div>
            )}

            {activeTab === 'Juan Pablo Caballero' && (
                <div className='space-y-6'>
                  <div>
                    <h2 className='text-4xl font-bold mb-2'>
                      Juan Pablo Caballero
                    </h2>
                    <h3 className='text-xl heading-gradient'>Marketing Leader</h3>
                  </div>

                  <p className='text-foreground/70 leading-relaxed'>
                    Spearheading our marketing initiatives, Juan Pablo combines
                    creative strategy with data-driven insights to deliver
                    exceptional results. His expertise in digital marketing drives
                    measurable growth for our clients.
                  </p>

                  <blockquote className='border-l-4 border-primary pl-4 italic text-foreground/90'>
                    &quot;Digital marketing is about creating meaningful connections
                    through data-driven strategies.&quot;
                  </blockquote>

                  <div>
                    <h4 className='font-semibold mb-4'>Expertise</h4>
                    <div className='flex flex-wrap gap-2'>
                      {[
                        'Digital Marketing',
                        'Campaign Strategy',
                        'Performance Analytics',
                      ].map((skill) => (
                          <span
                              key={skill}
                              className='px-4 py-2 rounded-full bg-card heading-gradient text-sm'
                          >
                      {skill}
                    </span>
                      ))}
                    </div>
                  </div>
                </div>
            )}

            {activeTab === 'Yasmany Boffill' && (
                <div className='space-y-6'>
                  <div>
                    <h2 className='text-4xl font-bold mb-2'>Yasmany Boffill</h2>
                    <h3 className='text-xl heading-gradient'>Software Leader</h3>
                  </div>

                  <p className='text-foreground/70 leading-relaxed'>
                    As our Software Leader, Yasmany drives technical innovation and
                    excellence in our development projects. His expertise in modern
                    technologies and architectural design ensures robust and
                    scalable solutions for our clients.
                  </p>

                  <blockquote className='border-l-4 border-primary pl-4 italic text-foreground/90'>
                    &quot;Great software is built on the foundation of clean code
                    and clear communication.&quot;
                  </blockquote>

                  <div>
                    <h4 className='font-semibold mb-4'>Expertise</h4>
                    <div className='flex flex-wrap gap-2'>
                      {[
                        'Software Architecture',
                        'Team Mentoring',
                        'Technical Innovation',
                      ].map((skill) => (
                          <span
                              key={skill}
                              className='px-4 py-2 rounded-full bg-card heading-gradient text-sm'
                          >
                      {skill}
                    </span>
                      ))}
                    </div>
                  </div>
                </div>
            )}
          </motion.div>
        </div>
      </section>
  );
}