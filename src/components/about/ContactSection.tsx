"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("About.contact");
  return (
    <section id="contact" className="bg-[#f4f9fa] px-5 py-28 sm:px-8 sm:py-36">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="relative mx-auto max-w-310 overflow-hidden rounded-[45px] bg-[#082f3a] px-7 py-20 sm:px-14 sm:py-24"
      >
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(48,190,207,.24),transparent_65%)] blur-3xl" />

        <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_.55fr]">
          <div>
            <span className="text-[9px] font-black uppercase tracking-[.2em] text-[#70dce7]">
              {t("eyebrow")}
            </span>

            <h2 className="mt-5 max-w-180 text-[48px] font-black leading-[.94] tracking-[-.075em] text-white sm:text-[68px]">
              {t("title")}

              <br />

              <span className="text-[#70dce7]">{t("accent")}</span>
            </h2>

            <p className="mt-7 max-w-140 text-[13px] leading-[1.9] text-white/45">
              {t("description")}
            </p>

            <a
              href="mailto:hello@roshasoft.com"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-black text-[#082f3a] transition hover:-translate-y-1"
            >
              {t("button")}

              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="space-y-3">
            <div className="rounded-[26px] border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#70dce7]">
                  <Mail size={17} />
                </span>

                <div>
                  <span className="block text-[8px] font-black uppercase tracking-[.15em] text-white/30">
                    {t("email")}
                  </span>

                  <a
                    href="mailto:hello@roshasoft.com"
                    className="mt-1 block text-[11px] font-semibold text-white/75"
                  >
                    hello@roshasoft.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[26px] border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#70dce7]">
                  <MapPin size={17} />
                </span>

                <div>
                  <span className="block text-[8px] font-black uppercase tracking-[.15em] text-white/30">
                    {t("address")}
                  </span>

                  <span className="mt-1 block text-[11px] font-semibold text-white/75">
                    124 City Road, London
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[26px] border border-white/10 bg-white/6 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#70dce7]">
                  <Phone size={17} />
                </span>

                <div>
                  <span className="block text-[8px] font-black uppercase tracking-[.15em] text-white/30">
                    {t("phone")}
                  </span>

                  <span className="mt-1 block text-[11px] font-semibold text-white/75">
                    +44 7446 958655
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
