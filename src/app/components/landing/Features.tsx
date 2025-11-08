"use client";

import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site';

const highlightList = [
  {
    title: 'Contract-first workflow',
    description:
      'Model every method, param, and error in a single schema so product, client, and protocol teams always build from the same contract.',
  },
  {
    title: 'Connected tooling',
    description:
      'Generators, docs, linters, monitors, and dashboards all ingest the same OpenRPC file so nothing drifts between environments.',
  },
  {
    title: 'Confident releases',
    description:
      'JSON Schema validation and automated diffing catch breaking payloads before they reach production.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
            Why OpenRPC
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Powerful features built for JSON-RPC teams
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Build confident, discoverable APIs with a schema that acts as the living agreement between product,
            platform, and protocol teams.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto w-full max-w-3xl rounded-[32px] border border-blue-100/70 bg-gradient-to-b from-white via-slate-50 to-blue-50 p-8 text-left shadow-lg dark:border-blue-500/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
          >
            <div className="flex flex-col divide-y divide-white/60 dark:divide-white/10">
              {highlightList.map((item, index) => (
                <div key={item.title} className="flex flex-col gap-4 py-6 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-base font-semibold text-white shadow-lg shadow-blue-600/40 dark:bg-blue-500">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="pl-14 text-base text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid w-full gap-6 text-left sm:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {siteConfig.features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-200/40 transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl dark:bg-blue-500/10">
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
