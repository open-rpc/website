import type { CSSProperties } from 'react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { siteConfig } from '../../config/site';
import type { Sponsor } from './types';

const tierLogoSize = {
  platinum: { box: 'w-80 h-40', sizes: '320px' },
  gold: { box: 'w-80 h-40', sizes: '320px' },
  silver: { box: 'w-70 h-35', sizes: '280px' },
  bronze: { box: 'w-56 h-28', sizes: '224px' },
} as const;

type TierLogoSize = (typeof tierLogoSize)[keyof typeof tierLogoSize];

function SponsorLogo({ sponsor, box, sizes }: { sponsor: Sponsor } & TierLogoSize) {
  return (
    <div
      className={`relative flex items-center justify-center ${box} md:scale-(--logo-scale,1)`}
      style={sponsor.scale ? ({ '--logo-scale': sponsor.scale } as CSSProperties) : undefined}
    >
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        fill
        sizes={sizes}
        className={`object-contain ${sponsor.darkLogo ? 'dark:hidden' : ''}`}
      />
      {sponsor.darkLogo && (
        <Image
          src={sponsor.darkLogo}
          alt=""
          aria-hidden
          fill
          sizes={sizes}
          className="object-contain hidden dark:block"
        />
      )}
    </div>
  );
}

function SponsorLink({ sponsor, logoSize }: { sponsor: Sponsor; logoSize: TierLogoSize }) {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
    >
      <SponsorLogo sponsor={sponsor} {...logoSize} />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/8 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none dark:bg-gray-100 dark:text-gray-900"
      >
        {sponsor.caption}
      </span>
    </a>
  );
}

export function Sponsors() {
  const platinumSponsors = siteConfig.sponsors.filter((s) => s.tier === 'platinum');
  const goldSponsors = siteConfig.sponsors.filter((s) => s.tier === 'gold');
  const silverSponsors = siteConfig.sponsors.filter((s) => s.tier === 'silver');
  const bronzeSponsors = siteConfig.sponsors.filter((s) => s.tier === 'bronze');

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Sponsors
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            OpenRPC is made possible by these amazing sponsors
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Interested in corporate sponsorship?{' '}
            <a
              href="https://opencollective.com/openrpc#category-ABOUT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Contact us ❤️
            </a>
          </p>
        </div>

        {/* Platinum Sponsors */}
        {platinumSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-3xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Platinum Corporate Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {platinumSponsors.map((sponsor) => (
                <SponsorLink
                  key={sponsor.name}
                  sponsor={sponsor}
                  logoSize={tierLogoSize.platinum}
                />
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {goldSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-3xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Gold Corporate Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {goldSponsors.map((sponsor) => (
                <SponsorLink key={sponsor.name} sponsor={sponsor} logoSize={tierLogoSize.gold} />
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Silver Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {silverSponsors.map((sponsor) => (
                <SponsorLink key={sponsor.name} sponsor={sponsor} logoSize={tierLogoSize.silver} />
              ))}
            </div>
          </div>
        )}

        {/* Bronze Sponsors */}
        {bronzeSponsors.length >= 0 && (
          <div>
            <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Github Community Sponsors
            </h3>
            <div className="flex justify-center mb-6">
              <Button
                href="https://github.com/sponsors/open-rpc"
                variant="outline"
                size="lg"
                external
                className="btn-contrast"
              >
                ❤️ Become a Github Community Sponsor
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {bronzeSponsors.map((sponsor) => (
                <SponsorLink key={sponsor.name} sponsor={sponsor} logoSize={tierLogoSize.bronze} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
