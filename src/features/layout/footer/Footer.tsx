'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, MailIcon } from 'lucide-react';
import { FaTiktok as TiktokIcon } from 'react-icons/fa';
import { Input, Logo, ShimmerButton } from '@/components/ui';

import { NAVCONFIG, services, tools } from '../header/utils';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Suscribiendo:', email);
    setEmail('');
  };

  return (
      <footer
          role="contentinfo"
          className="relative z-10 pointer-events-auto bg-card border-t border-card/50"
      >

      {/* Top border shadow */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Center the footer content on desktop */}
        <div className="flex justify-center">
          <div className="w-full lg:max-w-6xl mx-auto py-12 px-4 lg:px-8">
            {/* Logo and Description */}
            <div className="border-b border-foreground/10 pb-8 flex flex-col lg:flex-row justify-start items-start text-center lg:text-left">
              <div className="lg:max-w-lg w-full">
                <Logo />
                <p className="mb-4 text-sm text-foreground/90">
                  Transform your digital presence with data-driven strategies that
                  deliver measurable results. Our proven approach combines SEO,
                  content marketing, and social media to help you dominate your
                  market.
                </p>
                <address className="text-sm text-foreground/90 not-italic">
                  Contact us at{' '}
                  <Link
                      href="mailto:office@tamerdigital.com"
                      className="font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    office@tamerdigital.com
                  </Link>
                </address>
              </div>

              {/* Newsletter Subscription */}
              <form onSubmit={handleSubmit} className="w-full lg:ml-20 mt-8 lg:mt-0">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-sm text-foreground/90 mb-4">
                  Get the latest digital marketing insights and strategies delivered
                  to your inbox.
                </p>
                <div className="flex gap-2 items-center justify-center lg:justify-start w-full">
                  <Input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="lg:w-96 md:w-64 w-48"
                  />
                  <ShimmerButton
                      type="submit"
                      variant="solid"
                      className="py-2.5 gap-2 flex items-center"
                  >
                    Subscribe
                    <MailIcon className="w-4 h-4" />
                  </ShimmerButton>
                </div>
              </form>
            </div>

            {/* Navigation Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-12 px-2">
              {/* Services */}
              <div className="col-span-2">
                <h3 className="mb-4">Services</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {services.map(
                      ({ name, icon: IconElement, href, status }, idx) =>
                          status === 'ready' && (
                              <li key={idx}>
                                <Link
                                    href={href}
                                    className="text-foreground hover:text-primary transition-colors duration-300 ease-in-out"
                                >
                          <span className="flex items-center gap-2">
                            <IconElement className="w-4 h-4" />
                            {name}
                          </span>
                                </Link>
                              </li>
                          )
                  )}
                </ul>
              </div>

              {/* Tools */}
              <div>
                <h3 className="mb-4">Free Tools</h3>
                <ul className="flex flex-col gap-2">
                  {tools.map(({ name, icon: IconElement, href }, idx) => (
                      <li key={idx}>
                        <Link
                            href={href}
                            className="flex items-center gap-2 hover:text-primary transition-colors duration-300 ease-in-out"
                        >
                          <IconElement className="w-4 h-4" />
                          {name}
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>

              {/* Pages */}
              <div>
                <h3 className="mb-4">Pages</h3>
                <ul className="flex flex-col gap-2">
                  {NAVCONFIG.map(({ name, url, icon: IconElement }, idx) => (
                      <li key={idx}>
                        <Link
                            href={url}
                            className="flex items-center gap-2 hover:text-primary transition-colors duration-300 ease-in-out capitalize"
                        >
                          <IconElement className="w-4 h-4" />
                          {name}
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-foreground/90">
                &copy; {new Date().getFullYear()} TAMERDigital. All Rights Reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="social-container social-instagram">
                  <Instagram />
                </a>
                <a href="#" className="social-container social-facebook">
                  <Facebook />
                </a>
                <a href="#" className="social-container social-tiktok">
                  <TiktokIcon />
                </a>
                <a href="#" className="social-container social-youtube">
                  <Youtube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}
