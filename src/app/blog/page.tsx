import type { Metadata } from 'next';
import { Fragment } from 'react';
import { BlogArticle } from './components/BlogArticle';
import { getAllPosts } from './lib';

export const metadata: Metadata = {
  title: 'Engineering thoughts | OpenRPC Blog',
  description:
    'Engineering thoughts from the OpenRPC team — JSON-RPC, tooling, and distributed systems.',
};

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
