import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import 'nextra-theme-docs/style.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'OpenRPC',
  description:
    'A standard, programming language-agnostic interface description for JSON-RPC 2.0 APIs',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
