import Link from 'next/link';

export function BlogHeader() {
  return (
    <header className="blog-masthead">
      <div className="blog-masthead-inner">
        <Link href="/blog" className="blog-brand">
          <img
            src="/assets/icons/open-rpc-icon-256x256.png"
            alt="OpenRPC"
            className="blog-brand-mark"
          />
          <span className="blog-brand-divider" aria-hidden="true" />
          <span className="blog-brand-name">Engineering thoughts</span>
        </Link>
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
