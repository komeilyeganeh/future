"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ContactModal from "../contact/ContactModal";
import Button from "../ui/Button";

export default function CTA() {
  const t = useTranslations("Home.cta");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="contact" className="bg-[#f6f7fb] px-4 pb-20 pt-4 sm:pb-28">
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
        className="relative mx-auto max-w-310 overflow-hidden rounded-[38px] bg-[#11131a] px-7 py-20 text-center sm:px-12"
      >
        {/* Ambient */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(112,76,255,.3),rgba(54,200,232,.08)_38%,transparent_70%)] blur-3xl" />

        <motion.div
          animate={{
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-[#ad9eff] backdrop-blur-xl"
        >
          <Sparkles size={22} strokeWidth={1.5} />
        </motion.div>

        <div className="relative mx-auto mt-7 max-w-190">
          <span className="text-[9px] font-bold uppercase tracking-[.2em] text-white/30">
            RoshaSoft
          </span>

          <h2 className="mt-4 text-[43px] font-extrabold leading-[.96] tracking-[-.07em] text-white sm:text-[64px]">
            {t("title")}
          </h2>

          <p className="mx-auto mt-6 max-w-147.5 text-[13px] leading-[1.9] text-white/45">
            {t("description")}
          </p>

          <Button
            type="button"
            onClick={() => setIsOpen(true)}
            variant="secondary"
            icon={ArrowUpRight}
            className="mt-9 bg-white px-6 py-4 text-[10px] font-black hover:bg-accent hover:shadow-[0_15px_40px_rgba(212,175,55,.18)]"
          >
            {t("button")}
          </Button>
        </div>
      </motion.div>
      {/* Same contact modal */}
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
