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
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#71838a]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.045em] text-[#082f3a] md:text-5xl">
              {t("title")}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#71838a]">
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
                  className="group rounded-[26px] border border-[#082f3a]/[0.07] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#f8faf9]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#082f3a]/[0.05] text-[#082f3a] transition-colors group-hover:bg-[#082f3a] group-hover:text-white">
                      <Icon size={17} strokeWidth={1.7} />
                    </div>

                    <span className="text-[9px] font-semibold tracking-[0.2em] text-[#082f3a]/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-lg font-semibold text-[#082f3a]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#71838a]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}