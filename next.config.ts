import type { NextConfig } from 'next';
import nextra from 'nextra';

// Set up Nextra with its configuration
const withNextra = nextra({
  defaultShowCopyCode: true,
  latex: true,
  contentDirBasePath: '/docs',
  
});

// Export the final Next.js config with Nextra included
export default withNextra({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // ... Add regular Next.js options here
});