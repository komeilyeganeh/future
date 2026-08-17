"use client";

import { ArrowUpRight, Code2, Layers3, Settings2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const icons = [Code2, Layers3, Settings2];

export default function WebDesignTypes() {
  const t = useTranslations("WebDesign.types");

  const items = [
    {
      key: "static",
      icon: icons[0],
    },
    {
      key: "dynamic",
      icon: icons[1],
    },
    {
      key: "cms",
      icon: icons[2],
    },
  ];

  return (
    <section id="types" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-primary md:text-5xl">
            {t("title")}
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-secondary">
            {t("description")}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[30px] border border-primary/7 bg-background-soft p-7 transition-all duration-500 hover:border-[#c9a227]/25 hover:bg-white hover:shadow-[0_30px_90px_rgba(8,47,58,0.08)] md:p-8"
              >
                {/* Subtle gold glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#c9a227]/[0.035] blur-2xl transition-transform duration-700 group-hover:scale-125" />

                <div className="relative z-10">
                  {/* Number */}
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-secondary transition-colors duration-300 group-hover:text-[#a88416]">
                      0{index + 1}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#c9a227] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-2xl font-semibold tracking-tight text-primary transition-colors duration-300 group-hover:text-[#a88416]">
                      {t(`${item.key}.title`)}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-secondary">
                      {t(`${item.key}.description`)}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-8 space-y-3">
                    {(t.raw(`${item.key}.features`) as string[]).map(
                      (feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 border-b border-primary/6 pb-3 last:border-0"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#c9a227]/55 transition-transform duration-300 group-hover:scale-125" />

                          <span className="text-[11px] font-medium text-primary/65">
                            {feature}
                          </span>
                        </div>
                      ),
                    )}
                  </div>

                  {/* Bottom */}
                  <div className="mt-9 flex items-center justify-between border-t border-primary/7 pt-6 transition-colors duration-300 group-hover:border-[#c9a227]/15">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-secondary">
                      {t("explore")}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#c9a227]">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}