export const siteConfig = {
  name: 'OpenRPC',
  description:
    'A standard, programming language-agnostic interface description for JSON-RPC 2.0 APIs',
  tagline: 'The OpenAPI for JSON-RPC',
  url: 'https://open-rpc.org',
  links: {
    github: 'https://github.com/open-rpc',
    twitter: 'https://twitter.com/open_rpc',
    discord: 'https://discord.gg/gREUKnkT7C',
    docs: '/docs',
    playground: '/playground',
  },
  features: [
    {
      icon: '🔧',
      title: 'Developer Friendly',
      description:
        'Easy to understand and implement across any language. Write once, use everywhere.',
    },
    {
      icon: '📝',
      title: 'Well Documented',
      description:
        'Comprehensive documentation, interactive examples, and a thriving community to help you.',
    },
    {
      icon: '🚀',
      title: 'Production Ready',
      description:
        'Battle tested in production environments. Used by companies worldwide.',
    },
    {
      icon: '🔄',
      title: 'Code Generation',
      description:
        'Automatically generate client libraries, server boilerplate, and documentation.',
    },
    {
      icon: '🔍',
      title: 'Type Safe',
      description:
        'Full type safety with JSON Schema validation for requests and responses.',
    },
    {
      icon: '⚡',
      title: 'Tooling Ecosystem',
      description:
        'Rich ecosystem of tools including playground, generators, validators, and more.',
    },
  ],
  usedBy: [
    // Placeholder data - replace with actual companies
    { name: 'Company 1', logo: '/assets/logos/placeholder-logo.svg', url: '#' },
    { name: 'Company 2', logo: '/assets/logos/placeholder-logo.svg', url: '#' },
    { name: 'Company 3', logo: '/assets/logos/placeholder-logo.svg', url: '#' },
    { name: 'Company 4', logo: '/assets/logos/placeholder-logo.svg', url: '#' },
    { name: 'Company 5', logo: '/assets/logos/placeholder-logo.svg', url: '#' },
    { name: 'Company 6', logo: '/assets/logos/placeholder-logo.svg', url: '#' },
  ],
  sponsors: [
    // Placeholder data - replace with actual sponsors
    {
      name: 'Sponsor 1',
      logo: '/assets/sponsors/placeholder-sponsor.svg',
      url: '#',
      tier: 'gold' as const,
    },
    {
      name: 'Sponsor 2',
      logo: '/assets/sponsors/placeholder-sponsor.svg',
      url: '#',
      tier: 'silver' as const,
    },
    {
      name: 'Sponsor 3',
      logo: '/assets/sponsors/placeholder-sponsor.svg',
      url: '#',
      tier: 'silver' as const,
    },
    {
      name: 'Sponsor 4',
      logo: '/assets/sponsors/placeholder-sponsor.svg',
      url: '#',
      tier: 'bronze' as const,
    },
    {
      name: 'Sponsor 5',
      logo: '/assets/sponsors/placeholder-sponsor.svg',
      url: '#',
      tier: 'bronze' as const,
    },
    {
      name: 'Sponsor 6',
      logo: '/assets/sponsors/placeholder-sponsor.svg',
      url: '#',
      tier: 'bronze' as const,
    },
  ],
};

export type SiteConfig = typeof siteConfig;

