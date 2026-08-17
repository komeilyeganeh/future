"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import ContactModal from "@/components/contact/ContactModal";
import Button from "../ui/Button";

export default function ContactSection() {
  const t = useTranslations("About.contact");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="bg-background-subtle px-5 py-28 sm:px-8 sm:py-36"
      >
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
          className="group relative mx-auto max-w-310 overflow-hidden rounded-[45px] bg-primary px-7 py-20 sm:px-14 sm:py-24"
        >
          {/* Main atmosphere */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(48,190,207,.24),transparent_65%)] blur-3xl" />

          {/* Subtle gold glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-100 w-100 rounded-full bg-accent/4.5 blur-[110px]" />

          <div className="relative grid items-center gap-14 lg:grid-cols-[1fr_.55fr]">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[.2em] text-accent">
                {t("eyebrow")}
              </span>

              <h2 className="mt-5 max-w-180 text-[48px] font-black leading-[.94] tracking-[-.075em] text-white sm:text-[68px]">
                {t("title")}

                <br />

                <span className="text-accent">{t("accent")}</span>
              </h2>

              <p className="mt-7 max-w-140 text-[13px] leading-[1.9] text-white/45">
                {t("description")}
              </p>

              {/* Start a conversation */}
              <Button
                type="button"
                onClick={() => setIsOpen(true)}
                variant="accent"
                icon={ArrowUpRight}
                className="mt-9 px-6 py-4 bg-accent text-[10px] font-black hover:bg-accent hover:shadow-[0_15px_40px_rgba(212,175,55,.18)]"
              >
                {t("button")}
              </Button>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <div className="group/card rounded-[26px] border border-white/10 bg-white/6 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:bg-white/[0.08]">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-primary-light transition-colors duration-300 group-hover/card:bg-accent/10 group-hover/card:text-accent">
                    <Mail size={17} />
                  </span>

                  <div>
                    <span className="block text-[8px] font-black uppercase tracking-[.15em] text-white/30">
                      {t("email")}
                    </span>

                    <Link
                      href="mailto:hello@roshasoft.com"
                      className="mt-1 block text-[11px] font-semibold text-white/75 transition-colors duration-300 hover:text-accent"
                    >
                      hello@roshasoft.com
                    </Link>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group/card rounded-[26px] border border-white/10 bg-white/6 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:bg-white/[0.08]">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-primary-light transition-colors duration-300 group-hover/card:bg-accent/10 group-hover/card:text-accent">
                    <MapPin size={17} />
                  </span>

                  <div>
                    <span className="block text-[8px] font-black uppercase tracking-[.15em] text-white/30">
                      {t("address")}
                    </span>

                    <span className="mt-1 block text-[11px] font-semibold text-white/75">
                      Istanbul, Turkey
                    </span>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group/card rounded-[26px] border border-white/10 bg-white/6 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:bg-white/[0.08]">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-primary-light transition-colors duration-300 group-hover/card:bg-accent/10 group-hover/card:text-accent">
                    <Phone size={17} />
                  </span>

                  <div>
                    <span className="block text-[8px] font-black uppercase tracking-[.15em] text-white/30">
                      {t("phone")}
                    </span>

                    <span className="mt-1 block text-[11px] font-semibold text-white/75">
                      +90 531 977 1129
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Very subtle bottom gold accent */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/3 -translate-x-1/2 bg-linear-to-r from-transparent via-accent/45 to-transparent" />
        </motion.div>
      </section>

      {/* Same contact modal */}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
