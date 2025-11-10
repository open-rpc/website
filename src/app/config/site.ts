import type { Company, Sponsor } from '../components/landing/types';

type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze';

export const siteConfig = {
  name: 'OpenRPC',
  description:
    'One spec is all you need to produce tests, docs, and client/server code for your JSON-RPC API.',
  tagline: 'Specify Once. Generate Everything.',
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
      title: 'Generate clients in minutes',
      description: 'Auto-generate idiomatic clients in multiple languages. Less glue code; fewer edge-case bugs.',
    },
    {
      icon: '⚙️',
      title: 'Human-readable, schema-powered',
      description:
        'Our spec is human-readable and json schema-powered. More expressive than most ad-hoc code comments or READMEs.',
    },
    {
      icon: '🧪',
      title: 'Validate behavior as you build',
      description:
        'Turn spec examples into real requests/assertions using our `test-coverage` tool',
    },
    {
      icon: '🌐',
      title: 'Ecosystem ready',
      description:
        'Our playground, debugger, and linter are open-source libraries that empower the spec to accelerate every release.',
    },
  ],
  usedBy: [
    // Placeholder data - replace with actual companies
    { name: 'Metamask', logo: '/assets/logos/metamask.svg', darkLogo: '/assets/logos/metamask-dark.svg', url: 'https://github.com/MetaMask/metamask-extension/blob/eec2e919b99ac09a41183acabc1045368539327a/test/e2e/api-specs/transform.ts#L8' },
    { name: 'Bevy', logo: '/assets/logos/bevy.svg', url: 'https://github.com/bevyengine/bevy/blob/be4114bb9e054578de409d15955c8eb50a990bab/crates/bevy_remote/src/schemas/open_rpc.rs#L16' },
    { name: 'Minecraft', logo: '/assets/logos/minecraft.svg', url: 'https://www.minecraft.net/en-us/article/minecraft-snapshot-25w35a' },
    { name: 'Ethereum Foundation', logo: '/assets/logos/ethereum-wordmark.svg', url: 'https://github.com/ethereum/execution-apis' },
    { name: 'ZCash', logo: '/assets/logos/zcash.svg', darkLogo: '/assets/logos/zcash-dark.svg', url: 'https://github.com/zcash/wallet/blob/eabfb6278453328493ca97e6a99d8d889bb46f42/zallet/src/components/json_rpc/methods/openrpc.rs#L129' },
    { name: 'Filecoin', logo: '/assets/logos/filecoin.svg', url: 'https://github.com/filecoin-project/lotus/blob/5b29aabf24d9063cfcc874e46c770281eb2ba622/build/openrpc.go#L23' },
  ] as Company[],
  sponsors: [
    // Placeholder data - replace with actual sponsors
   /* 
    {
      name: 'Ethereum Foundation',
      logo: '/assets/sponsors/ethereum-ecosystem-support.svg',
      darkLogo: '/assets/sponsors/ethereum-ecosystem-support-dark.svg',
      url: 'https://esp.ethereum.foundation/',
      tier: 'platinum' as const,
    },
    
    {
      name: 'Chainlink',
      logo: '/assets/sponsors/chainlink.svg',
      darkLogo: '/assets/sponsors/chainlink-dark.svg',
      url: 'https://chain.link/',
      tier: 'gold' as const,
    },
    {
      name: 'QuickNode',
      logo: '/assets/sponsors/quick-node-horizontal-color.svg',
      darkLogo: '/assets/sponsors/quick-node-horizontal-dark.svg',
      url: 'https://www.quicknode.com/',
      tier: 'gold' as const,
    },
    */
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
  ] as Sponsor[],
};

export type SiteConfig = typeof siteConfig;
