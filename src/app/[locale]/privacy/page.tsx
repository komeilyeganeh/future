"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Cookie,
  Database,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

const sectionIcons = [
  Database,
  ShieldCheck,
  LockKeyhole,
  Cookie,
  UserRound,
  FileText,
];

export default function PrivacyPage() {
  const t = useTranslations("Privacy");

  const sections = [
    {
      key: "information",
      icon: Database,
    },
    {
      key: "usage",
      icon: ShieldCheck,
    },
    {
      key: "protection",
      icon: LockKeyhole,
    },
    {
      key: "cookies",
      icon: Cookie,
    },
    {
      key: "rights",
      icon: UserRound,
    },
    {
      key: "updates",
      icon: FileText,
    },
  ];

  return (
    <main className="overflow-hidden bg-background-soft text-primary">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-[-260px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-primary/2.5 blur-3xl" />

          <div className="absolute right-[-180px] top-[20%] h-[420px] w-[420px] rounded-full border border-accent/10" />

          <div className="absolute -bottom-45 left-[-160px] h-[420px] w-[420px] rounded-full bg-primary/2 blur-3xl" />

          {/* subtle gold glow */}
          <div className="absolute right-[8%] top-[15%] h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-40">
          <div className="grid items-end gap-14 lg:grid-cols-[1fr_360px]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-accent" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary">
                  {t("hero.eyebrow")}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl"
              >
                {t("hero.title")}

                <span className="block text-accent">
                  {t("hero.titleAccent")}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 max-w-2xl text-sm leading-7 text-secondary md:text-base"
              >
                {t("hero.description")}
              </motion.p>
            </div>

            {/* Privacy badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-[30px] border border-primary/7 bg-white p-7 shadow-[0_30px_90px_rgba(8,47,58,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/20 hover:shadow-[0_35px_100px_rgba(8,47,58,0.08)]">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                    <ShieldCheck size={20} strokeWidth={1.6} />
                  </div>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-accent">
                    {t("hero.badge")}
                  </span>
                </div>

                <div className="mt-8">
                  <p className="text-2xl font-semibold tracking-tight">
                    {t("hero.badgeTitle")}
                  </p>

                  <p className="mt-3 text-xs leading-6 text-secondary">
                    {t("hero.badgeDescription")}
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-2 border-t border-primary/7 pt-5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/30" />
                    <span className="relative h-2 w-2 rounded-full bg-accent" />
                  </span>

                  <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-secondary">
                    {t("hero.status")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-primary/7 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
              {t("intro.eyebrow")}
            </span>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              {t("intro.title")}
            </h2>

            <p className="mt-7 max-w-3xl text-sm leading-8 text-secondary">
              {t("intro.description")}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Check size={14} />
              </div>

              <span className="text-xs font-medium text-primary/70">
                {t("intro.commitment")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-background-soft">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-5 md:grid-cols-2">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <motion.article
                  key={section.key}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                  }}
                  className="group rounded-[30px] border border-primary/7 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/15 hover:shadow-[0_25px_80px_rgba(8,47,58,0.06)] md:p-9"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon size={18} strokeWidth={1.6} />
                    </div>

                    <span className="text-[10px] font-semibold tracking-[0.2em] text-accent/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                    {t(`sections.${section.key}.title`)}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-secondary">
                    {t(`sections.${section.key}.description`)}
                  </p>

                  {section.key === "information" && (
                    <ul className="mt-7 space-y-3">
                      {(t.raw("sections.information.items") as string[]).map(
                        (item) => (
                          <li
                            key={item}
                            className="flex items-center gap-3 text-xs text-primary/70"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                              <Check size={11} />
                            </span>

                            {item}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DATA PRINCIPLES */}
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent/70">
                {t("principles.eyebrow")}
              </span>

              <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                {t("principles.title")}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {(
                t.raw("principles.items") as {
                  title: string;
                  description: string;
                }[]
              ).map((item, index) => (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-white/8 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:bg-white/[0.055]"
                >
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-accent/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-7 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/45">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-background-soft px-5 py-20 md:px-8 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[34px] bg-white p-8 shadow-[0_25px_80px_rgba(8,47,58,0.06)] md:p-14"
        >
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
                {t("cta.eyebrow")}
              </span>

              <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                {t("cta.title")}
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-secondary">
                {t("cta.description")}
              </p>
            </div>

            <Button
              type="button"
              onClick={() => {}}
              variant="accent"
              icon={ArrowUpRight}
              iconRotate
              className="mt-9 px-6 py-4 text-[10px] font-black"
            >
              {t("cta.button")}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-primary/7 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Mail size={15} />
            </div>

            <span className="text-xs text-secondary">
              {t("contact.label")}
            </span>
          </div>

          <Link
            href="mailto:info@roshasoft.com"
            className="text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            info@roshasoft.com
          </Link>
        </div>
      </section>
    </main>
  );
}