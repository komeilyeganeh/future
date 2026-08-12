"use client";

import { Boxes, GitBranch, Settings2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const items = [
  {
    key: "independent",
    icon: Boxes,
  },
  {
    key: "flexible",
    icon: Settings2,
  },
  {
    key: "scalable",
    icon: GitBranch,
  },
];

export default function ModularDesignOverview() {
  const t = useTranslations("MODULAR.overview");

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#082f3a] md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#71838a]">
              {t("description")}
            </p>

            <div className="mt-8 border-l-2 border-[#082f3a] pl-5">
              <p className="text-sm font-semibold leading-6 text-[#082f3a]">
                {t("highlight")}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="rounded-[28px] border border-[#082f3a]/[0.07] bg-[#f8faf9] p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#082f3a]/5 text-[#082f3a]">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-9 text-lg font-semibold tracking-tight text-[#082f3a]">
                    {t(`items.${item.key}.title`)}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#71838a]">
                    {t(`items.${item.key}.description`)}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}