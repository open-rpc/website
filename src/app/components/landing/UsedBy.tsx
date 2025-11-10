import Image from 'next/image';
import { siteConfig } from '../../config/site';

export function UsedBy() {
  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted By
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            OpenRPC is used by companies and foundations worldwide
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {siteConfig.usedBy.map((company, index) => (
            <a
              key={index}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
            >
              <div className="relative w-48 h-24 flex items-center justify-center">
                {company.darkLogo ? (
                  <>
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain dark:hidden"
                      sizes="192px"
                    />
                    <Image
                      src={company.darkLogo}
                      alt={company.name}
                      fill
                      className="object-contain hidden dark:block"
                      sizes="192px"
                    />
                  </>
                ) : (
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                    sizes="192px"
                  />
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

