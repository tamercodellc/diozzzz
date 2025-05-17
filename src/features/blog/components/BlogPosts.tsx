'use client';

import React, {Suspense} from 'react';

import type {Post, Term} from '@/lib';
import {BlogFilter, BlogPostsList} from '@/features/blog/components/ui';
import {Fallback} from '@/features/layout/suspense';
import {motion} from "framer-motion";

interface BlogPostsProps {
    initialPosts: Post[];
    categories: Term[];
}

export function BlogPosts({initialPosts, categories}: BlogPostsProps) {
    return (
        <section className='mt-12 mb-16'>
            <motion.h2
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: 0.4}}
                className='text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-center text-center pb-4 pt-4'
            >
                More Knowledge About
                <span className='heading-gradient'> Digital Marketing and SEO</span>
            </motion.h2>

            <BlogFilter categories={categories}/>

            <Suspense fallback={<Fallback/>}>
                <BlogPostsList initialPosts={initialPosts}/>
            </Suspense>
        </section>
    );
}
