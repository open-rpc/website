import type { ComponentPropsWithoutRef } from 'react';
import ReactMarkdown from 'react-markdown';
import type { ExtraProps } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

type CodeProps = ComponentPropsWithoutRef<'code'> &
  ExtraProps & { inline?: boolean };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function headingText(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(headingText).join('');
  return '';
}

export function BlogMarkdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight]}
      components={{
        h1: ({ children }) => {
          const id = slugify(headingText(children));
          return (
            <h1 id={id} className="blog-h1">
              {children}
            </h1>
          );
        },
        h2: ({ children }) => {
          const id = slugify(headingText(children));
          return (
            <h2 id={id} className="blog-h2">
              {children}
            </h2>
          );
        },
        h3: ({ children }) => {
          const id = slugify(headingText(children));
          return (
            <h3 id={id} className="blog-h3">
              {children}
            </h3>
          );
        },
        p: ({ children }) => <p className="blog-p">{children}</p>,
        a: ({ href, children }) => (
          <a
            href={href}
            className="blog-a"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {children}
          </a>
        ),
        ul: ({ children }) => <ul className="blog-ul">{children}</ul>,
        ol: ({ children }) => <ol className="blog-ol">{children}</ol>,
        li: ({ children }) => <li className="blog-li">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="blog-quote">{children}</blockquote>
        ),
        img: ({ src, alt }) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt ?? ''} className="blog-img" loading="lazy" />
        ),
        hr: () => <hr className="blog-hr" />,
        strong: ({ children }) => (
          <strong className="font-semibold text-inherit">{children}</strong>
        ),
        pre: ({ children }) => <pre className="blog-pre">{children}</pre>,
        code(codeProps) {
          const { inline, className, children, ...rest } =
            codeProps as CodeProps;
          // `node` is injected by react-markdown; strip it from host props.
          delete (rest as Record<string, unknown>).node;
          if (inline) {
            return (
              <code className="blog-code-inline" {...rest}>
                {children}
              </code>
            );
          }
          return (
            <code className={className ?? 'blog-code-block'} {...rest}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
