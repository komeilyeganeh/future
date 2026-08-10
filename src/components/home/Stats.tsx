"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const stats = [
  {
    value: "20+",
    key: "experience",
  },
  {
    value: "100+",
    key: "projects",
  },
  {
    value: "03",
    key: "services",
  },
  {
    value: "24/7",
    key: "support",
  },
];

export default function Stats() {
  const t = useTranslations("Home.stats");

  return (
    <section className="relative overflow-hidden bg-[#f6f7fb] py-20">
      <div className="mx-auto w-[calc(100%-30px)] max-w-[1240px] md:w-[calc(100%-48px)]">
        <div className="grid grid-cols-2 overflow-hidden rounded-[30px] border border-black/[0.05] bg-white lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
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
                delay: index * 0.08,
              }}
              className={`relative px-6 py-9 text-center sm:px-10 ${
                index < 3
                  ? "border-b border-black/[0.05] lg:border-b-0 lg:border-r"
                  : ""
              } ${
                index === 0 || index === 2
                  ? "border-r border-black/[0.05]"
                  : ""
              }`}
            >
              <strong className="block bg-gradient-to-r from-[#704cff] to-[#36c8e8] bg-clip-text text-[38px] font-extrabold tracking-[-.07em] text-transparent sm:text-[48px]">
                {stat.value}
              </strong>

              <span className="mt-2 block text-[9px] font-bold uppercase tracking-[.15em] text-[#9aa0aa]">
                {t(stat.key)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
