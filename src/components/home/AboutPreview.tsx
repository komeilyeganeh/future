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
      <div className="mx-auto w-[calc(100%-30px)] max-w-310 md:w-[calc(100%-48px)]">
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
            className="relative min-h-125"
          >
            {/* Soft background shape */}
            <div className="absolute left-0 top-12 h-[390px] w-[390px] rounded-[45px] bg-background-muted" />

            {/* Main visual */}
            <div className="absolute left-[9%] top-0 h-[390px] w-[390px] overflow-hidden rounded-[45px] bg-linear-to-br from-[#063b4a] via-primary to-[#08788c] shadow-[0_40px_90px_rgba(8,47,58,.18)]">

              {/* Decorative rings */}
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-accent/20" />

              <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-accent/15" />

              {/* Ambient gold glow */}
              <div className="pointer-events-none absolute -right-10 top-10 h-44 w-44 rounded-full bg-accent/10 blur-3xl" />

              {/* Icon */}
              <div className="absolute left-9 top-9 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 backdrop-blur-sm">
                <Sparkles
                  size={22}
                  className="text-accent"
                />
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-[9px] font-bold uppercase tracking-[.2em] text-accent/70">
                  RoshaSoft
                </span>

                <div className="mt-3 h-px bg-accent/25" />

                <p className="mt-4 max-w-[260px] text-[25px] font-bold leading-tight tracking-[-.045em] text-white">
                  {t("visualTitle")}
                </p>
              </div>
            </div>

            {/* Experience card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-3 right-0 rounded-[25px] border border-accent/20 bg-white p-5 shadow-[0_25px_70px_rgba(27,31,55,.12)]"
            >
              <span className="text-[8px] font-bold uppercase tracking-[.15em] text-text-muted">
                {t("cardLabel")}
              </span>

              <strong className="mt-1 block text-[32px] tracking-[-.06em] text-primary">
                <span className="text-accent">20+</span>
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
            {/* Kicker */}
            <span className="text-[10px] font-bold uppercase tracking-[.18em] text-accent">
              {t("kicker")}
            </span>

            <h2 className="mt-4 max-w-[650px] text-[44px] font-extrabold leading-[.97] tracking-[-.07em] text-primary sm:text-[62px]">
              {t("title")}
            </h2>

            <p className="mt-7 max-w-152.5 text-[14px] leading-[1.9] text-secondary">
              {t("description")}
            </p>

            {/* Points */}
            <div className="mt-8 space-y-3">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/12 text-accent">
                    <Check size={13} />
                  </span>

                  <span className="text-[11px] font-semibold text-text-secondary">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/#services"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-[10px] font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-[0_18px_40px_rgba(8,47,58,.18)]"
            >
              {t("button")}

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:rotate-45">
                <ArrowUpRight size={13} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}