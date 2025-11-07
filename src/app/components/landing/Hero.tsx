import { Button } from '../ui/Button';
import { siteConfig } from '../../config/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient - placeholder for potential background image/animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            {siteConfig.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
            {siteConfig.tagline}
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            {siteConfig.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/docs" size="lg" variant="primary">
              Get Started
            </Button>
            <Button href={siteConfig.links.github} size="lg" variant="secondary" external>
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Placeholder for hero image/animation */}
        <div className="mt-16 relative">
          <div className="mx-auto max-w-4xl">
            {/* This is a placeholder for a code example, terminal demo, or product screenshot */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-xl">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="text-gray-600 dark:text-gray-400">
                  <span className="text-purple-600 dark:text-purple-400">// Example OpenRPC Schema</span>
                </div>
                <div className="text-gray-800 dark:text-gray-200">
                  <span className="text-blue-600 dark:text-blue-400">{'"openrpc"'}</span>
                  {': '}
                  <span className="text-green-600 dark:text-green-400">"1.3.2"</span>
                </div>
                <div className="text-gray-800 dark:text-gray-200">
                  <span className="text-blue-600 dark:text-blue-400">{'"info"'}</span>
                  {': { ... }'}
                </div>
                <div className="text-gray-800 dark:text-gray-200">
                  <span className="text-blue-600 dark:text-blue-400">{'"methods"'}</span>
                  {': [ ... ]'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

