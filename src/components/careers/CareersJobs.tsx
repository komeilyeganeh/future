"use client";

import { ArrowUpRight, MapPin, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function CareersJobs() {
  const t = useTranslations("Careers");

  const jobs = [
    {
      key: "frontend",
      number: "01",
    },
    {
      key: "backend",
      number: "02",
    },
    {
      key: "ai",
      number: "03",
    },
    {
      key: "marketing",
      number: "04",
    },
    {
      key: "financial",
      number: "05",
    },
    {
      key: "assistant",
      number: "06",
    },
  ];

  return (
    <section id="jobs" className="bg-background-soft">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
            {t("jobs.eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("jobs.title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("jobs.description")}
          </p>
        </div>

        {/* Job list */}
        <div className="mt-14 overflow-hidden rounded-[30px] border border-primary/7 bg-white">
          {jobs.map((job, index) => (
            <motion.a
              href={`mailto:careers@roshasoft.com?subject=${encodeURIComponent(
                t(`jobs.items.${job.key}.title`)
              )}`}
              key={job.key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group flex flex-col gap-6 border-b border-primary/7 p-6 last:border-b-0 md:flex-row md:items-center md:justify-between md:px-8 md:py-7"
            >
              <div className="flex items-start gap-6">
                <span className="pt-1 text-[10px] font-semibold tracking-[0.2em] text-secondary">
                  {job.number}
                </span>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-primary transition-colors group-hover:text-secondary md:text-xl">
                    {t(`jobs.items.${job.key}.title`)}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-4">
                    <span className="flex items-center gap-1.5 text-[10px] font-medium text-secondary">
                      <MapPin size={12} />
                      {t(`jobs.items.${job.key}.location`)}
                    </span>

                    <span className="flex items-center gap-1.5 text-[10px] font-medium text-secondary">
                      <Clock3 size={12} />
                      {t(`jobs.items.${job.key}.type`)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}