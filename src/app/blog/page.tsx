import type { Metadata } from 'next';
import { Fragment } from 'react';
import { BlogArticle } from './components/BlogArticle';
import { absoluteUrl, firstImage, getAllPosts } from './lib';

export async function generateMetadata(): Promise<Metadata> {
  const [first] = getAllPosts();
  const src = first ? firstImage(first.content) : null;
  const images = src ? [absoluteUrl(src)] : [];
  return {
    title: 'Engineering thoughts | OpenRPC Blog',
    description:
      'Engineering thoughts from the OpenRPC team — JSON-RPC, tooling, and distributed systems.',
    openGraph: {
      title: 'Engineering thoughts | OpenRPC Blog',
      description:
        'Engineering thoughts from the OpenRPC team — JSON-RPC, tooling, and distributed systems.',
      images,
    },
    twitter: {
      card: images.length > 0 ? 'summary_large_image' : 'summary',
      title: 'Engineering thoughts | OpenRPC Blog',
      description:
        'Engineering thoughts from the OpenRPC team — JSON-RPC, tooling, and distributed systems.',
      images,
    },
  };
}

// /blog renders the full articles stacked (infinite scroll). No link index:
// the first article is the page. Add a new article by dropping a new
// `.mdx` file with frontmatter into `src/app/blog/_posts/`.
export default function BlogFeedPage() {
  const posts = getAllPosts();

  return (
    <main className="blog-feed">
      {posts.map((post, i) => (
        <Fragment key={post.slug}>
          {i > 0 ? <hr className="blog-feed-divider" /> : null}
          <BlogArticle post={post} />
        </Fragment>
      ))}
    </main>
  );
}
