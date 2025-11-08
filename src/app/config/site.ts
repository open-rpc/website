type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze';

export const siteConfig = {
  name: 'OpenRPC',
  description:
    'OpenRPC keeps every JSON-RPC client, server, and tool aligned with a single contract-first specification.',
  tagline: 'Design, document, and automate JSON-RPC APIs',
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
      icon: '🧭',
      title: 'Contract-first clarity',
      description:
        'Ship method definitions, params, and errors from a single source of truth so every team stays aligned.',
    },
    {
      icon: '⚙️',
      title: 'Generative tooling',
      description:
        'Turn your schema into typed clients, server scaffolding, docs, tests, and monitors automatically.',
    },
    {
      icon: '🧪',
      title: 'Built-in validation',
      description:
        'JSON Schema-powered validation catches breaking changes and bad payloads before they hit production.',
    },
    {
      icon: '🌐',
      title: 'Ecosystem ready',
      description:
        'Playground, debuggers, and open-source libraries plug into the spec to accelerate every release.',
    },
  ],
  usedBy: [
    // Placeholder data - replace with actual companies
    { name: 'Metamask', logo: '/assets/logos/metamask.svg', url: 'https://github.com/MetaMask/metamask-extension/blob/eec2e919b99ac09a41183acabc1045368539327a/test/e2e/api-specs/transform.ts#L8' },
    { name: 'Bevy', logo: '/assets/logos/bevy.svg', url: 'https://github.com/bevyengine/bevy/blob/be4114bb9e054578de409d15955c8eb50a990bab/crates/bevy_remote/src/schemas/open_rpc.rs#L16' },
    { name: 'Minecraft', logo: '/assets/logos/minecraft.svg', url: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w35a' },
    { name: 'Ethereum Foundation', logo: '/assets/logos/ethereum-wordmark.svg', url: 'https://github.com/ethereum/execution-apis' },
    { name: 'ZCash', logo: '/assets/logos/zcash.svg', url: 'https://github.com/zcash/wallet/blob/eabfb6278453328493ca97e6a99d8d889bb46f42/zallet/src/components/json_rpc/methods/openrpc.rs#L129' },
    { name: 'Filecoin', logo: '/assets/logos/filecoin.svg', url: 'https://github.com/filecoin-project/lotus/blob/5b29aabf24d9063cfcc874e46c770281eb2ba622/build/openrpc.go#L23' },
  ],
  sponsors: [
    // Placeholder data - replace with actual sponsors
    /*
    {
      name: 'Ethereum Foundation',
      logo: '/assets/sponsors/ethereum-wordmark.svg',
      url: 'https://ethereum.org/',
      tier: 'platinum' as const,
    },
    {
      name: 'Ethereum Foundation',
      logo: '/assets/sponsors/ethereum-wordmark.svg',
      url: 'https://ethereum.org/',
      tier: 'platinum' as const,
    },
    {
      name: 'Chainlink',
      logo: '/assets/sponsors/chainlink.svg',
      url: 'https://chain.link/',
      tier: 'gold' as const,
    },
    {
      name: 'QuickNode',
      logo: '/assets/sponsors/quick-node-horizontal-color.svg',
      url: 'https://www.quicknode.com/',
      tier: 'gold' as const,
    },*/
    {
      name: 'Sponsor 4',
      logo: '/assets/sponsors/placeholder-sponsor.svg',
      url: '#',
      tier: 'bronze' as SponsorTier,
    },
    {
      name: 'Sponsor 5',
      logo: '/assets/sponsors/placeholder-sponsor.svg',
      url: '#',
      tier: 'bronze' as SponsorTier,
    },
    {
      name: 'Sponsor 6',
      logo: '/assets/sponsors/placeholder-sponsor.svg',
      url: '#',
      tier: 'bronze' as SponsorTier,
    }
  ],
};

export type SiteConfig = typeof siteConfig;
