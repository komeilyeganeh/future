"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  Database,
  Network,
  ShieldCheck,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Solutions() {
  const t = useTranslations("Home.solutions");

  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[#f6f7fb] py-28 sm:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-150 w-[800px] -translate-x-1/2 rounded-full bg-purple-accent/4.5 blur-[120px]" />

      <div className="relative mx-auto w-[calc(100%-30px)] max-w-310 md:w-[calc(100%-48px)]">
        <div className="grid items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[.18em] text-purple-accent">
              {t("kicker")}
            </span>

            <h2 className="mt-4 text-[43px] font-extrabold leading-[.98] tracking-[-.065em] text-[#11131a] sm:text-[60px]">
              {t("title")}
            </h2>

            <p className="mt-7 max-w-120 text-[14px] leading-[1.9] text-[#737a88]">
              {t("description")}
            </p>

            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-5 py-3 text-[10px] font-bold text-[#292d36] shadow-[0_10px_30px_rgba(27,31,55,.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(27,31,55,.1)]"
            >
              Explore solutions
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          <div className="relative min-h-125">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-[360px] w-[360px] rounded-full border border-purple-accent/10 sm:h-[460px] sm:w-[460px]"
              >
                <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-purple-accent shadow-[0_0_0_7px_rgba(108,76,255,.08),0_0_30px_rgba(108,76,255,.4)]" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className="absolute left-1/2 top-1/2 flex h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[45px] border border-white bg-white shadow-[0_35px_90px_rgba(27,31,55,.13)]"
            >
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-purple-accent to-[#36c8e8] text-white shadow-[0_15px_35px_rgba(108,76,255,.25)]">
                  <Network size={24} />
                </div>

                <strong className="mt-4 block text-[14px] font-bold text-[#171922]">
                  RoshaSoft
                </strong>

                <span className="mt-1 block text-[8px] uppercase tracking-[.15em] text-[#9aa0ab]">
                  Digital ecosystem
                </span>
              </div>
            </motion.div>

            <SolutionNode
              icon={<Database size={18} />}
              label="Data"
              className="left-0 top-[70px]"
            />

            <SolutionNode
              icon={<ShieldCheck size={18} />}
              label="Security"
              className="right-0 top-[125px]"
            />

            <SolutionNode
              icon={<Boxes size={18} />}
              label="Platforms"
              className="bottom-[55px] left-[10%]"
            />

            <SolutionNode
              icon={<Network size={18} />}
              label="Integration"
              className="bottom-[30px] right-[8%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionNode({
  icon,
  label,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: .8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className={`absolute ${className} flex items-center gap-2 rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-[0_15px_45px_rgba(27,31,55,.09)] backdrop-blur-xl`}
    >
      <span className="text-purple-accent">{icon}</span>

      <span className="text-[9px] font-bold text-[#515764]">
        {label}
      </span>
    </motion.div>
  );
}
