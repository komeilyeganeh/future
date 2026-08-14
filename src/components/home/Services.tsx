"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Home");

  const services = [
    {
      key: "software",
      icon: Layers3,
    },
    {
      key: "cloud",
      icon: Cloud,
    },
    {
      key: "ai",
      icon: BrainCircuit,
    },
    {
      key: "security",
      icon: ShieldCheck,
    },
    {
      key: "transformation",
      icon: Workflow,
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#f6fafb] px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="mx-auto max-w-310">
        {/* Kicker */}
        <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#d4af37]">
          {t("services.kicker")}
        </span>

        {/* Title */}
        <h2 className="mt-4 max-w-[760px] text-[44px] font-extrabold leading-[.97] tracking-[-.07em] text-primary sm:text-[62px]">
          {t("services.title")}
        </h2>

        <p className="mt-6 max-w-152.5 text-[14px] leading-[1.9] text-secondary">
          {t("services.description")}
        </p>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.key}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -7,
                }}
                className={`group relative overflow-hidden rounded-[30px] border border-white bg-white p-7 shadow-[0_15px_50px_rgba(7,47,58,.05)] ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Gold accent glow */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#d4af37]/[0.06] blur-3xl transition duration-700 group-hover:scale-150" />

                <div className="relative flex items-start justify-between">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d4af37]/10 text-[#d4af37] transition-colors duration-300 group-hover:bg-[#d4af37]/15">
                    <Icon size={21} />
                  </div>

                  {/* Number */}
                  <span className="text-[9px] font-bold text-[#b0bec2]">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative mt-16">
                  <h3 className="text-[23px] font-bold tracking-[-.045em] text-primary">
                    {t(`services.${service.key}.title`)}
                  </h3>

                  <p className="mt-4 max-w-125 text-[12px] leading-[1.85] text-secondary">
                    {t(`services.${service.key}.description`)}
                  </p>
                </div>

                {/* Small gold bottom accent */}
                <div className="absolute bottom-0 left-7 h-0.5 w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-14" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
