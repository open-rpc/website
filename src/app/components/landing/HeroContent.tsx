"use client";

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTheme } from 'next-themes';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import { Button } from '../ui/Button';

interface HeroContentProps {
  schemaMarkdown: string;
  tagline: string;
  description: string;
  docsUrl: string;
  playgroundUrl: string;
  githubUrl: string;
}

export function HeroContent({
  schemaMarkdown,
  tagline,
  description,
  docsUrl,
  playgroundUrl,
  githubUrl,
}: HeroContentProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const codeTheme = atomDark;
  const headingTextClass = isDark ? 'text-white' : 'text-slate-900';
  const bodyTextClass = isDark ? 'text-gray-300' : 'text-slate-600';

  return (
    <section className={`bg-gradient-to-b ${isDark ? 'from-slate-950 via-slate-900 to-black' : 'from-white via-slate-50 to-blue-50'} px-4 py-20 sm:px-6 lg:py-28`}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          <h1 className={`text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${headingTextClass}`}>
            {tagline}
          </h1>
          <p className={`mx-auto max-w-3xl text-lg leading-relaxed ${bodyTextClass}`}>
            {description}
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={docsUrl} size="lg" variant="primary">
              Get Started
            </Button>
            <Button href={playgroundUrl} size="lg" variant="outline" className="btn-contrast">
              Open Playground
            </Button>
            <Button
              href={githubUrl}
              size="lg"
              variant="ghost"
              external
              className="btn-contrast"
            >
              View on GitHub
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="w-full max-w-4xl text-left"
        >
          <div className="relative rounded-[34px] bg-gradient-to-br from-[#0d162c] via-[#182746] to-[#0d162c] p-[2px] shadow-[0_35px_90px_rgba(7,10,20,0.75)]">
            <div className="pointer-events-none absolute inset-0 rounded-[34px] bg-white/10 blur-lg" />
            <div className="rounded-[30px] border border-white/15 bg-[#0b1424]/90 px-6 py-6 text-slate-100 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/90">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  pre: ({ children }) => <>{children}</>,
                  code({ inline, className, children, ...codeProps }) {
                    const match = /language-(\w+)/.exec(className || '');
                    if (!inline && match) {
                      return (
                        <SyntaxHighlighter
                          style={codeTheme}
                          language={match[1]}
                          PreTag="div"
                          customStyle={{
                            background: 'transparent',
                            padding: 0,
                            margin: 0,
                            fontSize: '0.95rem',
                          }}
                          codeTagProps={{
                            style: {
                              fontFamily: 'var(--font-geist-mono, Menlo, Consolas, monospace)',
                            },
                          }}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      );
                    }
                    return (
                      <code className={className} {...codeProps}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {schemaMarkdown}
              </ReactMarkdown>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-[34px] border border-white/12" />
            <div className="pointer-events-none absolute inset-[5px] rounded-[30px] border border-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
