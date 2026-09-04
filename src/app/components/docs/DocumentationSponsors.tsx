import Image from 'next/image';
import type { CSSProperties } from 'react';
import { siteConfig } from '../../config/site';
import type { Sponsor } from '../landing/types';
import { Button } from '../ui/Button';

type SponsorWithBlurb = Sponsor & { blurb: string };

function SponsorLogo({
  sponsor,
  sizes,
  scale = true,
}: {
  sponsor: Sponsor;
  sizes: string;
  scale?: boolean;
}) {
  const style =
    scale && sponsor.scale
      ? ({ '--logo-scale': sponsor.scale } as CSSProperties)
      : undefined;

  return (
    <div
      className="relative h-full w-full md:scale-(--logo-scale,1)"
      style={style}
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
          className="hidden object-contain dark:block"
        />
      )}
    </div>
  );
}

export function DocumentationSponsors() {
  const sponsorsWithBlurbs = siteConfig.sponsors.filter(
    (sponsor): sponsor is SponsorWithBlurb => Boolean(sponsor.blurb),
  );

  return (
    <div className="not-prose mt-10">
      <section aria-labelledby="our-sponsors">
        <h2
          id="our-sponsors"
          className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-gray-400"
        >
          Our Sponsors
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {siteConfig.sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${sponsor.name}`}
              className="flex min-h-28 items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:border-gray-800 dark:bg-gray-950 dark:hover:border-gray-700 dark:hover:bg-gray-900"
            >
              <div className="h-14 w-full">
                <SponsorLogo
                  sponsor={sponsor}
                  sizes="(min-width: 640px) 160px, 40vw"
                  scale={false}
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      {sponsorsWithBlurbs.length > 0 && (
        <section aria-labelledby="about-sponsors" className="mt-16">
          <h2
            id="about-sponsors"
            className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-gray-400"
          >
            About Our Sponsors
          </h2>
          <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-400">
            Some sponsors have provided additional information about their work and services.
          </p>
          <div className="mt-6 space-y-4">
            {sponsorsWithBlurbs.map((sponsor) => (
              <article
                key={sponsor.name}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <div className="h-14 w-28 shrink-0">
                    <SponsorLogo sponsor={sponsor} sizes="112px" scale={false} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                      {sponsor.name}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
                      {sponsor.blurb}
                    </p>
                    <a
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex font-semibold text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-blue-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="support-openrpc" className="mt-16 border-t border-gray-200 pt-12 dark:border-gray-800">
        <h2
          id="support-openrpc"
          className="text-xs font-semibold tracking-[0.18em] text-gray-500 uppercase dark:text-gray-400"
        >
          Support OpenRPC
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
          Sponsorship helps support development, maintenance, tooling, and documentation.
        </p>
        <div className="mt-6">
          <Button
            href="https://opencollective.com/openrpc#category-ABOUT"
            size="lg"
            external
          >
            Sponsor OpenRPC
          </Button>
        </div>
      </section>
    </div>
  );
}
