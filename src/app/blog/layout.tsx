import type { Metadata } from 'next';
import { BlogHeader } from './components/BlogHeader';
import './blog.css';

export const metadata: Metadata = {
  title: 'Engineering thoughts | OpenRPC Blog',
  description:
    'Engineering thoughts from the OpenRPC team — JSON-RPC, tooling, and distributed systems.',
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BlogHeader />
      {children}
      <footer className="blog-footer">
        Apache License 2.0 {new Date().getFullYear()} © OpenRPC.
      </footer>
    </>
  );
}
