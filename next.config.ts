import type { NextConfig } from "next";
/*
const nextConfig: NextConfig = {
};

export default nextConfig;
*/

import nextra from 'nextra'

 
// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here

  defaultShowCopyCode: true,
  latex: true,
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],

  // ... Add regular Next.js options here
})