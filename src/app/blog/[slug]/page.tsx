import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogArticle } from '../components/BlogArticle';
import { getAllPosts, getPost } from '../lib';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Engineering thoughts`,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <main className="blog-feed">
      <BlogArticle post={post} />
    </main>
  );
}
