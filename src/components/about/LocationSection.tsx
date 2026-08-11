"use client";

import { motion } from "framer-motion";
import { Globe2, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LocationSection() {
  const t = useTranslations("About.location");
  return (
    <section className="bg-white px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-310 items-center gap-16 lg:grid-cols-[.8fr_1.2fr]">
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
          }}
        >
          <span className="text-[10px] font-black uppercase tracking-[.2em] text-[#08788c]">
            {t("eyebrow")}
          </span>

          <h2 className="mt-5 text-[46px] font-black leading-[.95] tracking-[-.075em] text-[#082f3a] sm:text-[64px]">
            {t("title")}
          </h2>

          <p className="mt-7 max-w-135 text-[14px] leading-[1.95] text-[#71838a]">
            {t("description")}
          </p>

          <div className="mt-9 rounded-[28px] border border-[#082f3a]/6 bg-[#f5f9fa] p-5">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#08788c] shadow-sm">
                <MapPin size={19} />
              </span>

              <div>
                <strong className="block text-[14px] font-black text-[#082f3a]">
                  {t("london")}
                </strong>

                <span className="mt-1 block text-[10px] text-[#8a9a9f]">
                  {t("uk")}
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[.14em] text-[#08788c]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#38a778]" />

              {t("global")}
            </div>
          </div>
        </motion.div>

        {/* Map visual */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="relative"
        >
          <div className="relative min-h-117.5 overflow-hidden rounded-[42px] border border-white bg-[#082f3a] shadow-[0_40px_110px_rgba(8,47,58,.12)]">
            {/* grid */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(#8de5ed 1px, transparent 1px), linear-gradient(90deg, #8de5ed 1px, transparent 1px)",
                backgroundSize: "55px 55px",
              }}
            />

            {/* circles */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute left-[48%] top-[42%] h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#70dce7]/30"
            />

            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
              }}
              className="absolute left-[48%] top-[42%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#70dce7]/15"
            />

            {/* location */}
            <div className="absolute left-[48%] top-[42%] -translate-x-1/2 -translate-y-1/2">
              <span className="absolute -inset-5 animate-ping rounded-full bg-[#70dce7]/20" />

              <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#70dce7] text-[#082f3a] shadow-[0_0_50px_rgba(112,220,231,.35)]">
                <MapPin size={21} />
              </span>
            </div>

            <div className="absolute bottom-7 left-7 right-7 rounded-[25px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[8px] font-black uppercase tracking-[.18em] text-white/35">
                    MAIN OFFICE
                  </span>

                  <strong className="mt-2 block text-[16px] font-bold text-white">
                    124 City Road
                  </strong>

                  <span className="mt-1 block text-[9px] text-white/40">
                    London, EC1V 2NX
                  </span>
                </div>

                <Globe2 size={22} className="text-[#70dce7]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
