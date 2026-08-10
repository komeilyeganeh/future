"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Home.hero");

  return (
    <section className="relative min-h-[900px] overflow-hidden bg-[#f7f8fc] pt-[110px]">
      {/* Background Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(rgba(17,19,26,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,19,26,.035) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 88%)",
        }}
      />

      {/* Purple glow */}

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-[250px] -top-[250px] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(108,76,255,.2),rgba(54,200,232,.06)_40%,transparent_70%)] blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-[350px] -left-[250px] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(89,130,255,.1),transparent_65%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto grid min-h-[790px] w-[calc(100%-30px)] max-w-[1240px] items-center gap-10 md:w-[calc(100%-48px)] lg:grid-cols-[.95fr_1.05fr]">
        {/* Text */}

        <div className="text-center lg:text-left">
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/[0.07] bg-white/80 px-3 py-2 shadow-[0_10px_35px_rgba(27,31,55,.05)] backdrop-blur-xl lg:mx-0"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#27ca79] shadow-[0_0_0_5px_rgba(39,202,121,.1)]" />

            <span className="text-[9px] font-bold uppercase tracking-[.13em] text-[#747b87]">
              {t("eyebrow")}
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-7 text-[58px] font-extrabold leading-[.92] tracking-[-.075em] sm:text-[72px] lg:text-[88px]"
          >
            {t("titleLineOne")}

            <br />

            <span className="bg-gradient-to-r from-[#704cff] via-[#6181ff] to-[#35c8e7] bg-clip-text text-transparent">
              {t("titleLineTwo")}
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="mx-auto mt-7 max-w-[560px] text-[14px] leading-[1.9] text-[#656c79] lg:mx-0"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.38,
            }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link
              href="/#contact"
              className="group flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#704cff] to-[#5585ff] px-7 text-[11px] font-bold text-white shadow-[0_18px_45px_rgba(103,76,255,.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(103,76,255,.32)]"
            >
              {t("primaryCta")}

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/#services"
              className="group flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-black/[0.07] bg-white/80 px-7 text-[11px] font-bold text-[#363a43] shadow-[0_10px_30px_rgba(27,31,55,.04)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_45px_rgba(27,31,55,.08)]"
            >
              {t("secondaryCta")}

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Visual */}

        <div className="relative mx-auto flex h-[510px] w-full max-w-[600px] items-center justify-center lg:h-[650px]">
          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[390px] w-[390px] rounded-full bg-[#684cff]/15 blur-[90px] sm:h-[500px] sm:w-[500px]"
          />

          {/* Orbit */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[390px] w-[390px] rounded-full border border-[#684cff]/15 sm:h-[530px] sm:w-[530px]"
          >
            <span className="absolute left-[10%] top-[11%] h-2 w-2 rounded-full bg-white shadow-[0_0_0_7px_rgba(255,255,255,.4),0_0_25px_rgba(108,76,255,.6)]" />

            <span className="absolute bottom-[14%] right-[5%] h-2 w-2 rounded-full bg-[#36c8e8] shadow-[0_0_20px_rgba(54,200,232,.8)]" />
          </motion.div>

          {/* Second orbit */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[300px] w-[300px] rounded-full border border-[#36c8e8]/10 sm:h-[430px] sm:w-[430px]"
          />

          {/* Main Orb */}

          <motion.div
            animate={{
              y: [0, -13, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-[290px] w-[290px] rounded-full bg-[radial-gradient(circle_at_29%_23%,rgba(255,255,255,.95),transparent_18%),linear-gradient(140deg,#795bff,#5d83ff_48%,#35c8e8)] shadow-[0_60px_120px_rgba(80,80,190,.25),inset_-35px_-40px_80px_rgba(25,35,100,.18),inset_25px_20px_70px_rgba(255,255,255,.3)] sm:h-[420px] sm:w-[420px]"
          >
            {/* Glass rings */}

            <div className="absolute inset-[12%] rounded-full border border-white/20" />

            <div className="absolute inset-[24%] rounded-full border border-white/10" />

            {/* Center */}

            <motion.div
              animate={{
                rotate: [0, 7, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 flex h-[105px] w-[105px] -translate-x-1/2 -translate-y-1/2 rotate-12 items-center justify-center rounded-[30px] border border-white/40 bg-white/10 shadow-[0_30px_70px_rgba(20,25,90,.2)] backdrop-blur-xl sm:h-[145px] sm:w-[145px]"
            >
              <Sparkles
                size={38}
                className="text-white/85"
                strokeWidth={1.4}
              />
            </motion.div>
          </motion.div>

          {/* Floating card 1 */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-[55px] rounded-[20px] border border-white/80 bg-white/80 p-4 shadow-[0_25px_65px_rgba(27,31,55,.12)] backdrop-blur-xl"
          >
            <span className="block text-[8px] font-bold uppercase tracking-[.15em] text-[#9aa0ab]">
              {t("floatingLabel")}
            </span>

            <strong className="mt-1 block text-[20px] tracking-[-.05em]">
              +20
            </strong>

            <div className="mt-2 h-1 w-24 overflow-hidden rounded-full bg-[#e8eaf0]">
              <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-[#704cff] to-[#36c8e8]" />
            </div>
          </motion.div>

          {/* Floating card 2 */}

          <motion.div
            animate={{
              y: [0, -11, 0],
            }}
            transition={{
              duration: 5,
              delay: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[55px] left-0 rounded-[20px] border border-white/80 bg-white/80 p-4 shadow-[0_25px_65px_rgba(27,31,55,.12)] backdrop-blur-xl"
          >
            <span className="block text-[8px] font-bold uppercase tracking-[.15em] text-[#9aa0ab]">
              {t("floatingLabelTwo")}
            </span>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#26ca78]" />

              <strong className="text-[12px] tracking-[-.02em]">
                {t("floatingStatus")}
              </strong>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#a3a8b2] md:flex"
      >
        <span className="text-[8px] font-bold uppercase tracking-[.2em]">
          Scroll
        </span>

        <ArrowDown size={13} />
      </motion.div>
    </section>
  );
}
