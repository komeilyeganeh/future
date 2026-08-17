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
    <section id="jobs" className="relative overflow-hidden bg-background-soft">
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-100 w-100 rounded-full bg-accent-light/3 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent-light" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
              {t("jobs.eyebrow")}
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("jobs.title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("jobs.description")}
          </p>
        </motion.div>

        {/* Job list */}
        <div className="mt-14 overflow-hidden rounded-[30px] border border-primary/7 bg-white shadow-[0_20px_70px_rgba(8,47,58,.035)]">
          {jobs.map((job, index) => (
            <motion.a
              href={`mailto:careers@roshasoft.com?subject=${encodeURIComponent(
                t(`jobs.items.${job.key}.title`)
              )}`}
              key={job.key}
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col gap-6 border-b border-primary/7 p-6 last:border-b-0 md:flex-row md:items-center md:justify-between md:px-8 md:py-7"
            >
              {/* Subtle hover background */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-accent-light/0 via-accent-light/0 to-accent-light/0 opacity-0 transition-all duration-500 group-hover:from-accent-light/2 group-hover:via-accent-light/1 group-hover:opacity-100" />

              {/* Gold bottom line */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-linear-to-r from-accent-light via-accent-light/50 to-transparent transition-all duration-700 group-hover:w-full" />

              <div className="relative z-10 flex items-start gap-6">
                {/* Number */}
                <span className="pt-1 text-[10px] font-semibold tracking-[0.2em] text-secondary transition-colors duration-300 group-hover:text-accent-light">
                  {job.number}
                </span>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#08788c] md:text-xl">
                    {t(`jobs.items.${job.key}.title`)}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-4">
                    <span className="flex items-center gap-1.5 text-[10px] font-medium text-secondary transition-colors duration-300 group-hover:text-primary">
                      <MapPin
                        size={12}
                        className="transition-colors duration-300 group-hover:text-accent-light"
                      />
                      {t(`jobs.items.${job.key}.location`)}
                    </span>

                    <span className="flex items-center gap-1.5 text-[10px] font-medium text-secondary transition-colors duration-300 group-hover:text-primary">
                      <Clock3
                        size={12}
                        className="transition-colors duration-300 group-hover:text-accent-light"
                      />
                      {t(`jobs.items.${job.key}.type`)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent-light group-hover:text-primary group-hover:shadow-[0_8px_25px_rgba(214,173,85,.22)]">
                <ArrowUpRight size={15} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom meta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 flex items-center gap-3"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-light shadow-[0_0_10px_rgba(214,173,85,.45)]" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-secondary">
            RoshaSoft / Open positions
          </span>
        </motion.div>
      </div>
    </section>
  );
}