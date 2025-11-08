import { siteConfig } from '../../config/site';
import { HeroContent } from './HeroContent';

const metricsSchema = {
  openrpc: '1.2.6',
  info: {
    title: 'Metrics RPC',
    version: '0.1.0',
    description: 'Fetch service health metrics from any node.',
  },
  servers: [
    { name: 'primary', url: 'https://metrics.example.com/rpc' },
  ],
  methods: [
    {
      name: 'metrics_getSnapshot',
      summary: 'Return current CPU, memory, and latency stats.',
      params: [
        {
          name: 'service',
          required: true,
          schema: { type: 'string', description: 'Service identifier.' },
        },
      ],
      result: {
        name: 'snapshot',
        schema: {
          type: 'object',
          properties: {
            cpu: { type: 'number' },
            memoryMb: { type: 'integer' },
            p95LatencyMs: { type: 'number' },
          },
        },
      },
    },
    {
      name: 'metrics_stream',
      summary: 'Open a stream of metric deltas.',
      params: [
        {
          name: 'service',
          required: true,
          schema: { type: 'string' },
        },
        {
          name: 'intervalSeconds',
          schema: { type: 'integer', minimum: 5, default: 15 },
        },
      ],
      result: {
        name: 'subscriptionId',
        schema: { type: 'string' },
      },
    },
  ],
};

const schemaMarkdown = ['```json', JSON.stringify(metricsSchema, null, 2), '```'].join('\n');

export async function Hero() {
  return (
    <HeroContent
      schemaMarkdown={schemaMarkdown}
      tagline={siteConfig.tagline}
      description={siteConfig.description}
      docsUrl={siteConfig.links.docs}
      playgroundUrl={siteConfig.links.playground}
      githubUrl={siteConfig.links.github}
    />
  );
}
