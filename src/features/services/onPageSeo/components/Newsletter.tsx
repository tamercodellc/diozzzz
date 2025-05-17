'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { Input, ShimmerButton } from '@/components/ui';

export function OnPageSEONewsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
      <section className="relative overflow-hidden w-full">
        <div className="relative bg-gradient-to-r from-transparent via-primary/5 to-transparent backdrop-blur-lg w-full shadow-[inset_0_2px_25px_rgba(19,137,253,0.03)]">
          <div className="border-t border-b border-primary/20 py-[16px] w-full">
            <div className="border-t border-b border-primary/20 py-[16px] bg-gradient-to-r from-transparent via-primary/5 to-transparent w-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)]">
              <div className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center">
                    {/* Background Elements */}
                    <div className="absolute inset-0 z-0">
                      <div className="absolute left-1/4 top-0 w-[500px] h-[500px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
                      <div className="absolute right-1/4 bottom-0 w-[500px] h-[500px] bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10">
                      <h2 className="text-3xl font-bold text-foreground mb-6">Get Your Free SEO Analysis</h2>
                      <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
                        Discover untapped opportunities to increase your organic traffic
                        and outrank your competitors
                      </p>

                      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Input
                              type="email"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                              placeholder="Enter your email"
                              required
                              className="h-12 text-base border-primary/20 focus:border-primary/50 bg-card/60 backdrop-blur-sm"
                          />
                          <ShimmerButton type="submit" variant="solid" className="h-12 px-6">
                            <span className="mr-2">Get Analysis</span>
                            <Send className="w-4 h-4" />
                          </ShimmerButton>
                        </div>
                        <p className="text-sm text-foreground/60 mt-6">
                          Join 500+ businesses that have improved their search rankings
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}