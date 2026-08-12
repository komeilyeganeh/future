"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  Cloud,
  Database,
  FileCode2,
  HeartPulse,
  Network,
  ScanLine,
  Server,
  Workflow,
} from "lucide-react";
import { useTranslations } from "next-intl";

const products = [
  {
    key: "his",
    icon: HeartPulse,
    position:
      "left-0 top-[17%] lg:left-[2%] lg:top-[18%]",
    size: "large",
  },
  {
    key: "cms",
    icon: FileCode2,
    position:
      "right-0 top-[10%] lg:right-[3%] lg:top-[12%]",
    size: "normal",
  },
  {
    key: "rfid",
    icon: ScanLine,
    position:
      "left-[3%] bottom-[10%] lg:left-[8%] lg:bottom-[11%]",
    size: "normal",
  },
  {
    key: "erp",
    icon: Building2,
    position:
      "right-[3%] bottom-[8%] lg:right-[8%] lg:bottom-[10%]",
    size: "large",
  },
  {
    key: "bpms",
    icon: Workflow,
    position:
      "left-[20%] top-[5%] lg:left-[22%] lg:top-[4%]",
    size: "small",
  },
  {
    key: "crm",
    icon: BrainCircuit,
    position:
      "right-[19%] top-[2%] lg:right-[21%] lg:top-[3%]",
    size: "small",
  },
  {
    key: "mms",
    icon: Database,
    position:
      "left-[16%] bottom-[2%] lg:left-[21%] lg:bottom-[2%]",
    size: "small",
  },
];

export default function ProductsPreview() {
  const t = useTranslations("Home.products");

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#f7f8fc] py-28 sm:py-36"
    >
      {/* Background */}

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(17,19,26,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(17,19,26,.025) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Ambient glows */}

      <div className="pointer-events-none absolute left-1/2 top-[45%] h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(112,76,255,.12),rgba(54,200,232,.045)_38%,transparent_70%)] blur-3xl" />

      <div className="pointer-events-none absolute -right-[200px] top-[30%] h-125 w-125 rounded-full bg-[#36c8e8]/4 blur-3xl" />

      <div className="relative z-10 mx-auto w-[calc(100%-30px)] max-w-310 md:w-[calc(100%-48px)]">
        {/* Header */}

        <div className="mx-auto max-w-[760px] text-center">
          <motion.span
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
            className="inline-flex items-center gap-2 rounded-full border border-black/6 bg-white/80 px-3 py-2 text-[9px] font-bold uppercase tracking-[.18em] text-[#704cff] shadow-[0_10px_30px_rgba(27,31,55,.04)] backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#704cff]" />

            {t("kicker")}
          </motion.span>

          <motion.h2
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
              delay: 0.08,
            }}
            className="mt-6 text-[45px] font-extrabold leading-[.94] tracking-[-.075em] sm:text-[64px]"
          >
            {t("title")}
          </motion.h2>

          <motion.p
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
              delay: 0.16,
            }}
            className="mx-auto mt-6 max-w-155 text-[13px] leading-[1.9] text-[#747b88]"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* Ecosystem */}

        <div className="relative mx-auto mt-20 h-[670px] max-w-[1050px] sm:h-[760px]">
          {/* Connection Lines */}

          <div className="pointer-events-none absolute inset-0">
            <svg
              viewBox="0 0 1000 760"
              className="h-full w-full overflow-visible"
              fill="none"
            >
              {/* Left top */}

              <motion.path
                d="M170 205 C290 205 330 310 500 380"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="4 8"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.4,
                }}
              />

              {/* Right top */}

              <motion.path
                d="M830 160 C700 170 670 300 500 380"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="4 8"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.15,
                }}
              />

              {/* Left bottom */}

              <motion.path
                d="M190 590 C300 570 355 475 500 380"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="4 8"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.25,
                }}
              />

              {/* Right bottom */}

              <motion.path
                d="M815 600 C700 580 650 475 500 380"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="4 8"
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                whileInView={{
                  pathLength: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.35,
                }}
              />

              {/* Small connections */}

              <path
                d="M335 120 C400 180 450 240 500 380"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="3 8"
                opacity=".55"
              />

              <path
                d="M680 120 C610 180 560 240 500 380"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="3 8"
                opacity=".55"
              />

              <path
                d="M350 650 C410 580 450 490 500 380"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="3 8"
                opacity=".55"
              />

              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0"
                    stopColor="#704cff"
                    stopOpacity=".08"
                  />
                  <stop
                    offset=".5"
                    stopColor="#704cff"
                    stopOpacity=".5"
                  />
                  <stop
                    offset="1"
                    stopColor="#36c8e8"
                    stopOpacity=".08"
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Central Orb */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 sm:h-[370px] sm:w-[370px]"
          >
            {/* Outer glow */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.5, 0.35],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-[-60px] rounded-full bg-[#704cff]/15 blur-[70px]"
            />

            {/* Orbit */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[-30px] rounded-full border border-[#704cff]/10"
            >
              <span className="absolute left-[14%] top-[11%] h-2 w-2 rounded-full bg-[#704cff] shadow-[0_0_20px_rgba(112,76,255,.7)]" />

              <span className="absolute bottom-[13%] right-[10%] h-1.5 w-1.5 rounded-full bg-[#36c8e8] shadow-[0_0_15px_rgba(54,200,232,.7)]" />
            </motion.div>

            {/* Orb */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-full w-full overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.9),transparent_17%),linear-gradient(135deg,#7757ff,#6081ff_50%,#36c8e8)] shadow-[0_60px_120px_rgba(82,72,190,.22),inset_-35px_-40px_70px_rgba(20,30,100,.16),inset_20px_20px_60px_rgba(255,255,255,.25)]"
            >
              {/* Rings */}

              <div className="absolute inset-[12%] rounded-full border border-white/20" />

              <div className="absolute inset-[25%] rounded-full border border-white/10" />

              <div className="absolute inset-[38%] rounded-full border border-white/10" />

              {/* Data nodes */}

              <motion.span
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute left-[25%] top-[30%] h-2 w-2 rounded-full bg-white shadow-[0_0_18px_white]"
              />

              <motion.span
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute right-[24%] top-[38%] h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_15px_white]"
              />

              <motion.span
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                className="absolute bottom-[28%] left-[38%] h-1.5 w-1.5 rounded-full bg-cyan-100 shadow-[0_0_15px_#b7f5ff]"
              />

              {/* Center */}

              <div className="absolute left-1/2 top-1/2 flex h-[105px] w-[105px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-4xl border border-white/30 bg-white/[0.1] shadow-[0_30px_60px_rgba(20,30,100,.18)] backdrop-blur-xl sm:h-[130px] sm:w-[130px]">
                <Server
                  size={28}
                  strokeWidth={1.2}
                  className="text-white"
                />

                <span className="mt-3 text-[8px] font-bold uppercase tracking-[.2em] text-white/65">
                  RoshaSoft
                </span>

                <span className="mt-1 text-[9px] font-semibold text-white/45">
                  Ecosystem
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Cards */}

          {products.map((product, index) => {
            const Icon = product.icon;

            const isLarge = product.size === "large";
            const isSmall = product.size === "small";

            return (
              <motion.div
                key={product.key}
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -7,
                  scale: 1.025,
                }}
                className={`absolute ${product.position} z-20 ${
                  isSmall
                    ? "hidden sm:block"
                    : ""
                }`}
              >
                <div
                  className={`
                    group relative overflow-hidden rounded-[22px]
                    border border-white/80
                    bg-white/80
                    shadow-[0_20px_55px_rgba(27,31,55,.09)]
                    backdrop-blur-2xl
                    transition-shadow duration-500
                    hover:shadow-[0_30px_80px_rgba(80,70,180,.16)]
                    ${
                      isLarge
                        ? "w-[185px] p-5 sm:w-[210px]"
                        : isSmall
                          ? "w-[135px] p-4"
                          : "w-[155px] p-4 sm:w-[175px]"
                    }
                  `}
                >
                  {/* Hover glow */}

                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#704cff]/8 blur-2xl transition-transform duration-700 group-hover:scale-[2]" />

                  {/* Number */}

                  <span className="absolute right-4 top-4 text-[8px] font-bold text-[#c4c8d1]">
                    0{index + 1}
                  </span>

                  {/* Icon */}

                  <div
                    className={`
                      relative flex items-center justify-center rounded-[14px]
                      bg-linear-to-br from-[#704cff]/[0.1] to-[#36c8e8]/8
                      text-[#704cff]
                      ${
                        isSmall
                          ? "h-9 w-9"
                          : "h-11 w-11"
                      }
                    `}
                  >
                    <Icon
                      size={isSmall ? 16 : 19}
                      strokeWidth={1.6}
                    />
                  </div>

                  {/* Content */}

                  <div className="relative mt-5">
                    <h3
                      className={`font-bold tracking-[-.04em] ${
                        isSmall
                          ? "text-[14px]"
                          : "text-[17px]"
                      }`}
                    >
                      {t(`${product.key}.title`)}
                    </h3>

                    <p
                      className={`mt-2 leading-[1.7] text-[#818793] ${
                        isSmall
                          ? "text-[8px]"
                          : "text-[9px]"
                      }`}
                    >
                      {t(
                        `${product.key}.description`
                      )}
                    </p>

                    {!isSmall && (
                      <div className="mt-4 flex items-center gap-1 text-[8px] font-bold uppercase tracking-[.1em] text-[#704cff] opacity-60 transition-opacity group-hover:opacity-100">
                        {t("explore")}

                        <ArrowUpRight size={11} />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Floating particles */}

          <motion.span
            animate={{
              y: [0, -12, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute left-[43%] top-[17%] h-1.5 w-1.5 rounded-full bg-[#704cff]"
          />

          <motion.span
            animate={{
              y: [0, 9, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: 1,
            }}
            className="absolute right-[41%] top-[27%] h-1 w-1 rounded-full bg-[#36c8e8]"
          />

          <motion.span
            animate={{
              y: [0, -7, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: 0.5,
            }}
            className="absolute bottom-[27%] left-[48%] h-1.5 w-1.5 rounded-full bg-[#704cff]"
          />
        </div>

        {/* Bottom text */}

        <motion.div
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
          className="mx-auto max-w-150 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-[#a2a7b1]">
            {t("bottomLabel")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
