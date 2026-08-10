"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function AboutPreview() {
  const t = useTranslations("Home.about");

  const points = [
    t("pointOne"),
    t("pointTwo"),
    t("pointThree"),
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-28 sm:py-36"
    >
      <div className="mx-auto w-[calc(100%-30px)] max-w-[1240px] md:w-[calc(100%-48px)]">
        <div className="grid items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
          {/* Visual */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative min-h-[500px]"
          >
            <div className="absolute left-0 top-12 h-[390px] w-[390px] rounded-[45px] bg-[#f0f1f7]" />

            <div className="absolute left-[9%] top-0 h-[390px] w-[390px] overflow-hidden rounded-[45px] bg-gradient-to-br from-[#704cff] via-[#6280ff] to-[#35c8e8] shadow-[0_40px_90px_rgba(88,76,220,.2)]">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/20" />

              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/15" />

              <Sparkles
                size={28}
                className="absolute left-10 top-10 text-white/70"
              />

              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/50">
                  RoshaSoft
                </span>

                <div className="mt-3 h-px bg-white/20" />

                <p className="mt-4 max-w-[260px] text-[25px] font-bold leading-tight tracking-[-.045em] text-white">
                  {t("visualTitle")}
                </p>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-3 right-0 rounded-[25px] border border-black/[0.05] bg-white p-5 shadow-[0_25px_70px_rgba(27,31,55,.12)]"
            >
              <span className="text-[8px] font-bold uppercase tracking-[.15em] text-[#9da3ad]">
                {t("cardLabel")}
              </span>

              <strong className="mt-1 block text-[32px] tracking-[-.06em]">
                20+
              </strong>
            </motion.div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[.18em] text-[#704cff]">
              {t("kicker")}
            </span>

            <h2 className="mt-4 max-w-[650px] text-[44px] font-extrabold leading-[.97] tracking-[-.07em] sm:text-[62px]">
              {t("title")}
            </h2>

            <p className="mt-7 max-w-[610px] text-[14px] leading-[1.9] text-[#727986]">
              {t("description")}
            </p>

            <div className="mt-8 space-y-3">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#704cff]/[0.08] text-[#704cff]">
                    <Check size={13} />
                  </span>

                  <span className="text-[11px] font-semibold text-[#4d535f]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/#services"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#11131a] px-5 py-3.5 text-[10px] font-bold text-white transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(17,19,26,.18)]"
            >
              {t("button")}

              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
