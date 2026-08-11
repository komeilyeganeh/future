"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe2,
  Layers3,
} from "lucide-react";
import { useTranslations } from "next-intl";

const services = [
  {
    key: "mobile",
    icon: Code2,
  },
  {
    key: "web",
    icon: Globe2,
  },
  {
    key: "design",
    icon: Layers3,
  },
];

export default function ServicesPreview() {
  const t = useTranslations("Home.servicesPreview");

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f6f7fb] py-28 sm:py-36"
    >
      <div className="mx-auto w-[calc(100%-30px)] max-w-310 md:w-[calc(100%-48px)]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-[680px]">
            <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#704cff]">
              {t("kicker")}
            </span>

            <h2 className="mt-4 text-[44px] font-extrabold leading-[.97] tracking-[-.07em] sm:text-[62px]">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-150 text-[14px] leading-[1.9] text-[#747b88]">
              {t("description")}
            </p>
          </div>

          <span className="hidden text-[9px] font-bold uppercase tracking-[.18em] text-[#b0b5bf] md:block">
            01 — 03
          </span>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.key}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-4xl border border-black/5 bg-white p-7 shadow-[0_10px_40px_rgba(27,31,55,.04)] transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(27,31,55,.1)]"
              >
                {/* Glow */}

                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#704cff]/[0.055] blur-3xl transition-transform duration-700 group-hover:scale-150" />

                {/* Number */}

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#704cff]/8 text-[#704cff]">
                    <Icon
                      size={21}
                      strokeWidth={1.6}
                    />
                  </div>

                  <span className="text-[10px] font-bold text-[#c4c8d0]">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative mt-16">
                  <h3 className="text-[24px] font-bold tracking-[-.045em]">
                    {t(`${service.key}.title`)}
                  </h3>

                  <p className="mt-4 min-h-[72px] text-[12px] leading-[1.85] text-[#777e8b]">
                    {t(`${service.key}.description`)}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.1em] text-[#704cff]">
                    {t("learnMore")}

                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
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
