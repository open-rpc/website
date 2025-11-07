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
            OpenRPC is used by companies worldwide
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {siteConfig.usedBy.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              {/* Placeholder for company logo */}
              <div className="w-full h-16 bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">
                <span className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                  {company.name}
                </span>
              </div>
              {/* When you have actual logos, replace the above div with:
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={60}
                className="object-contain"
              />
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

