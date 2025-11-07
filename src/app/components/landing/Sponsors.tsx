import Image from 'next/image';
import { siteConfig } from '../../config/site';

export function Sponsors() {
  const platinumSponsors = siteConfig.sponsors.filter((s) => s.tier === 'platinum');
  const goldSponsors = siteConfig.sponsors.filter((s) => s.tier === 'gold');
  const silverSponsors = siteConfig.sponsors.filter((s) => s.tier === 'bronze');
  const bronzeSponsors = siteConfig.sponsors.filter((s) => s.tier === 'bronze');

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Sponsors
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            OpenRPC is made possible by these amazing sponsors
          </p>
          <a
            href="https://github.com/sponsors/open-rpc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            ❤️ Become a Sponsor
          </a>
        </div>

        {/* Gold Sponsors */}
        {platinumSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Platinum Corporate Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {platinumSponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  {/* Placeholder for sponsor logo 
                  <div className="w-48 h-24 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <span className="text-sm text-gray-500 dark:text-gray-500 font-medium">
                      {sponsor.name}
                    </span>
                  </div>
                  */}
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={400}
                    height={200}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {goldSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Gold Corporate Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {goldSponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  {/* Placeholder for sponsor logo 
                  <div className="w-36 h-20 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                      {sponsor.name}
                    </span>
                  </div>
                  */}
                  <div className="relative w-80 h-40 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="320px"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Bronze Sponsors */}
        {silverSponsors.length > 0 && (
          <div>
            <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Community Sponsors 
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {silverSponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  {/* Placeholder for sponsor logo 
                  <div className="w-28 h-16 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded flex items-center justify-center group-hover:shadow transition-shadow">
                    <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                      {sponsor.name}
                    </span>
                  </div>
                  */}
                  <div className="relative w-60 h-30 flex items-center justify-center">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      sizes="240px"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

