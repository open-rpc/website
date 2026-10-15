import Link from 'next/link';
import type { BlogPost } from '../lib';
import { formatDate, readingTime } from '../lib';
import { BlogMarkdown } from './BlogMarkdown';

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <article id={post.slug} className="blog-article">
      <header className="mb-10 text-center">
        <p className="blog-kicker">{post.author}</p>
        <h1 className="blog-title">{post.title}</h1>
        {post.description ? (
          <p className="blog-dek">{post.description}</p>
        ) : null}
        <div className="blog-byline">
          <span>{post.author}</span>
          <span aria-hidden="true">·</span>
          {post.date ? <time>{formatDate(post.date)}</time> : null}
          <span aria-hidden="true">·</span>
          <span>{readingTime(post.content)} min read</span>
        </div>
      </header>
      <div className="blog-body">
        <BlogMarkdown content={post.content} />
      </div>
      <footer className="blog-article-footer">
        <Link href="/blog" className="blog-permalink">
          Engineering thoughts
        </Link>
      </footer>
    </article>
  );
}
