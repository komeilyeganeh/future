"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("Home");

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 45, -25, 0],
            y: [0, -30, 25, 0],
            scale: [1, 1.08, 0.97, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[260px] -top-[220px] h-[650px] w-[650px] rounded-full bg-[#08788c]/10 blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -35, 25, 0],
            y: [0, 35, -20, 0],
            scale: [1, 0.94, 1.06, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-[240px] top-[80px] h-[560px] w-[560px] rounded-full bg-[#70dce7]/10 blur-[110px]"
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#174d60 1px, transparent 1px), linear-gradient(90deg, #174d60 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <motion.span
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.65, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[11%] top-[27%] h-2 w-2 rounded-full bg-[#d4af37]"
        />

        <motion.span
          animate={{
            y: [0, 15, 0],
            x: [0, 8, 0],
            opacity: [0.15, 0.55, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute right-[19%] top-[24%] h-1.5 w-1.5 rounded-full bg-[#70dce7]"
        />

        <motion.span
          animate={{
            y: [0, -12, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
          className="absolute bottom-[18%] right-[35%] h-2 w-2 rounded-full bg-[#164e63]/50"
        />
      </div>

      <div className="relative mx-auto max-w-310 px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32 lg:px-10 lg:pb-36 lg:pt-36">
        <div className="grid items-center gap-16 lg:grid-cols-[1.04fr_.96fr] lg:gap-20">
          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-white/65 px-3.5 py-2 shadow-[0_10px_35px_rgba(20,70,85,.05)] backdrop-blur-xl"
            >
              <motion.span
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.45, 1, 0.45],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-1.5 w-1.5 rounded-full bg-[#d4af37]"
              />

              <span className="text-[9px] font-bold uppercase tracking-[.2em] text-[#d4af37]">
                {t("floatingLabel")}
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 65 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-[780px] text-[48px] font-extrabold leading-[.96] tracking-[-.07em] text-[#103d4e] sm:text-[64px] lg:text-[78px]"
              >
                {t("titleLineOne")}

                <br />

                <span className="relative inline-block text-[#08788c]">
                  {t("titleLineTwo")}

                  <motion.span
                    initial={{
                      scaleX: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scaleX: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1,
                      delay: 0.85,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute -bottom-2 left-0 h-[3px] w-full origin-left rounded-full bg-linear-to-r from-[#08788c] via-[#d4af37] to-transparent sm:-bottom-3"
                  />
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 max-w-150 text-[14px] leading-[1.9] text-[#6d7f87] sm:text-[15px]"
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
                delay: 0.5,
              }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#103d4e] px-6 py-4 text-[10px] font-bold text-white shadow-[0_20px_50px_rgba(16,61,78,.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(8,120,140,.25)]"
              >
                <span className="absolute inset-y-0 -left-12 w-10 rotate-[20deg] bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]" />

                <span className="relative">
                  {t("primaryButton")}
                </span>

                <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-[#d4af37]/20">
                  <ArrowUpRight
                    size={13}
                    className="text-[#d4af37] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>

              <Link
                href="/#services"
                className="group inline-flex items-center gap-2 rounded-full border border-[#08788c]/15 bg-white/65 px-5 py-4 text-[10px] font-bold text-[#315d6b] shadow-[0_10px_35px_rgba(20,70,85,.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-white"
              >
                {t("secondaryButton")}

                <ArrowDown
                  size={13}
                  className="text-[#d4af37] transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>
            </motion.div>

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
                delay: 0.7,
              }}
              className="mt-10 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#164e63]"
                >
                  <Sparkles size={11} className="text-white" />
                </motion.span>

                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                  className="h-8 w-8 rounded-full border-2 border-white bg-[#08788c]"
                />

                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                  className="h-8 w-8 rounded-full border-2 border-white bg-[#70dce7]"
                />
              </div>

              <div>
                <div className="text-[9px] font-bold text-[#315d6b]">
                  {t("floatingLabelTwo")}
                </div>

                <div className="mt-0.5 flex items-center gap-1.5 text-[8px] text-[#899aa1]">
                  <motion.span
                    animate={{
                      opacity: [0.35, 1, 0.35],
                      scale: [0.9, 1.15, 0.9],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-[#38a778]"
                  />

                  {t("floatingStatus")}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: 45,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.05,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#08788c]/10 blur-[80px]"
            />

            <motion.div className="relative overflow-hidden rounded-[38px] border border-white/70 bg-white/55 p-4 shadow-[0_40px_100px_rgba(24,71,88,.13)] backdrop-blur-2xl sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(112,220,231,.20),transparent_30%),radial-gradient(circle_at_90%_85%,rgba(25,100,125,.13),transparent_35%)]" />

              <div className="relative flex items-center justify-between rounded-3xl border border-white/80 bg-white/65 px-4 py-3 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#08788c]" />
                  <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                  <span className="h-2 w-2 rounded-full bg-[#c0dfe6]" />
                </div>

                <span className="text-[8px] font-bold uppercase tracking-[.18em] text-[#78909a]">
                  RoshaSoft
                </span>
              </div>

              <div className="relative mt-4 overflow-hidden rounded-[30px] bg-[#103d4e] p-7 sm:p-9">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -right-20 -top-20 h-[270px] w-[270px] rounded-full border border-white/10"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-24 -left-20 h-75 w-75 rounded-full border border-[#d4af37]/15"
                />

                <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-[#d4af37]/10 blur-2xl" />

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex h-16 w-16 items-center justify-center rounded-[20px] border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] backdrop-blur-xl"
                >
                  <Sparkles size={25} strokeWidth={1.5} />
                </motion.div>

                <div className="relative mt-20">
                  <span className="text-[8px] font-bold uppercase tracking-[.22em] text-white/35">
                    Digital Intelligence
                  </span>

                  <h3 className="mt-4 max-w-[390px] text-[31px] font-bold leading-[1.05] tracking-[-.055em] text-white sm:text-[38px]">
                    Technology
                    <br />
                    <span className="text-[#d4af37]">
                      built for tomorrow.
                    </span>
                  </h3>

                  <div className="mt-8 h-px bg-white/10" />

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[8px] uppercase tracking-[.18em] text-white/35">
                      Intelligent systems
                    </span>

                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d4af37]/15"
                    >
                      <MoveUpRight
                        size={13}
                        className="text-[#d4af37]"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="relative mt-4 grid grid-cols-2 gap-3">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-[23px] border border-white/70 bg-white/65 p-4 backdrop-blur-xl"
                >
                  <span className="text-[8px] font-bold uppercase tracking-[.16em] text-[#91a1a8]">
                    Innovation
                  </span>

                  <div className="mt-3 flex items-end justify-between">
                    <strong className="text-[23px] tracking-[-.06em] text-[#164e63]">
                      98%
                    </strong>

                    <span className="mb-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-[23px] border border-white/70 bg-white/65 p-4 backdrop-blur-xl"
                >
                  <span className="text-[8px] font-bold uppercase tracking-[.16em] text-[#91a1a8]">
                    Delivery
                  </span>

                  <div className="mt-3 flex items-end justify-between">
                    <strong className="text-[23px] tracking-[-.06em] text-[#164e63]">
                      24/7
                    </strong>

                    <span className="mb-1 h-1.5 w-1.5 rounded-full bg-[#08788c]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                x: [0, 4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 top-[17%] rounded-2xl border border-white/80 bg-white/75 px-4 py-3 shadow-[0_20px_50px_rgba(20,70,85,.12)] backdrop-blur-xl sm:-right-6"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
                  <Sparkles size={13} />
                </span>

                <div>
                  <div className="text-[9px] font-bold text-[#315d6b]">
                    Smart
                  </div>

                  <div className="text-[8px] text-[#9aa8ae]">
                    Solutions
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
              className="absolute -bottom-5 left-4 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-[0_20px_50px_rgba(20,70,85,.12)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="h-2 w-2 rounded-full bg-[#38a778]"
                />

                <span className="text-[8px] font-bold uppercase tracking-[.12em] text-[#56727c]">
                  Always evolving
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
