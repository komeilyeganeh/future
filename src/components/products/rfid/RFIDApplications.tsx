"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  BusFront,
  HeartPulse,
  KeyRound,
  PackageSearch,
  Truck,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function RFIDApplications() {
  const t = useTranslations("RFID.applications");

  const applications = [
    {
      icon: Boxes,
      title: t("inventory.title"),
      description: t("inventory.description"),
    },
    {
      icon: Truck,
      title: t("supplyChain.title"),
      description: t("supplyChain.description"),
    },
    {
      icon: PackageSearch,
      title: t("assets.title"),
      description: t("assets.description"),
    },
    {
      icon: KeyRound,
      title: t("access.title"),
      description: t("access.description"),
    },
    {
      icon: HeartPulse,
      title: t("healthcare.title"),
      description: t("healthcare.description"),
    },
    {
      icon: BusFront,
      title: t("transport.title"),
      description: t("transport.description"),
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c7a45d]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.045em] text-primary md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-secondary">
              {t("description")}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {applications.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group rounded-[26px] border border-primary/7 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8a85a]/30 hover:bg-background-soft hover:shadow-[0_20px_60px_rgba(200,168,90,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-[#c8a85a] group-hover:text-white">
                      <Icon size={17} strokeWidth={1.7} />
                    </div>

                    <span className="text-[9px] font-semibold tracking-[0.2em] text-[#c8a85a]/40 transition-colors duration-300 group-hover:text-[#c8a85a]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-semibold text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-secondary">
                    {item.description}
                  </p>

                  <div className="mt-5 h-px w-0 bg-[#c8a85a] transition-all duration-500 group-hover:w-10" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}