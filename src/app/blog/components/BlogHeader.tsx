import Link from 'next/link';

export function BlogHeader() {
  return (
    <header className="blog-masthead">
      <div className="blog-masthead-inner">
        <div className="blog-brand">
          <Link
            href="/"
            aria-label="OpenRPC home"
            className="blog-brand-home"
          >
            <img
              src="/assets/icons/open-rpc-icon-256x256.png"
              alt="OpenRPC"
              className="blog-brand-mark"
            />
          </Link>
          <span className="blog-brand-divider" aria-hidden="true" />
          <Link href="/blog" className="blog-brand-name">
            Engineering thoughts
          </Link>
        </div>
        <nav className="blog-nav">
          <Link href="/" className="blog-nav-link">
            Home
          </Link>
          <a
            href="https://github.com/open-rpc"
            target="_blank"
            rel="noopener noreferrer"
            className="blog-nav-link"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
