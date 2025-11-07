import Image from 'next/image';
import { siteConfig } from '../../config/site';

export function Sponsors() {
  const goldSponsors = siteConfig.sponsors.filter((s) => s.tier === 'gold');
  const silverSponsors = siteConfig.sponsors.filter((s) => s.tier === 'silver');
  const bronzeSponsors = siteConfig.sponsors.filter((s) => s.tier === 'bronze');

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
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
        {goldSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Gold Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {goldSponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  {/* Placeholder for sponsor logo */}
                  <div className="w-48 h-24 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <span className="text-sm text-gray-500 dark:text-gray-500 font-medium">
                      {sponsor.name}
                    </span>
                  </div>
                  {/* When you have actual logos, replace with:
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={192}
                    height={96}
                    className="object-contain"
                  />
                  */}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Silver Sponsors */}
        {silverSponsors.length > 0 && (
          <div className="mb-12">
            <h3 className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Silver Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {silverSponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="w-36 h-20 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
                    <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                      {sponsor.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Bronze Sponsors */}
        {bronzeSponsors.length > 0 && (
          <div>
            <h3 className="text-center text-base font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Bronze Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {bronzeSponsors.map((sponsor, index) => (
                <a
                  key={index}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="w-28 h-16 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded flex items-center justify-center group-hover:shadow transition-shadow">
                    <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                      {sponsor.name}
                    </span>
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

