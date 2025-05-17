import {
  BlogAuthors,
  BlogCTA,
  BlogGrid,
  BlogHero,
} from '@/features/blog/components';
import { getPosts, getCategories } from '@/services';
import { BlogPosts } from './components/BlogPosts';
import {Breadcrumb} from "@/components";

export default async function Blog() {
  const [initialPosts, categories] = await Promise.all([
    getPosts(),
    getCategories(),
  ]);

  return (
    <main className=''>
      <BlogHero />
        <section className="flex items-center justify-center bg-transparent -mb-44 -mt-32">
            <Breadcrumb className="bg-transparent relative" />
        </section>
      <BlogGrid />
      <BlogPosts initialPosts={initialPosts} categories={categories} />
      <BlogAuthors />
      <BlogCTA />
    </main>
  );
}
