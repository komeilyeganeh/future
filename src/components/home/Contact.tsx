"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Mail,
  Phone,
  Sparkles,
  User,
  X,
  WandSparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Contact() {
  const t = useTranslations("Home");

  const [isOpen, setIsOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [projectDescription, setProjectDescription] = useState("");
  const [aiDescription, setAiDescription] = useState("");

  const handleAiImprove = async () => {
    if (!projectDescription.trim()) return;

    setIsGenerating(true);

    try {
      /*
       * Connect this to your AI API.
       */

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setAiDescription(
        `We are looking to develop a professional digital solution based on the requirements outlined, providing an effective user experience while maintaining a high standard of design, performance, and scalability. The project can achieve the desired outcome through a thorough analysis of the requirements, a well-structured design approach, and the implementation of a scalable and reliable solution.`,
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    /*
     * Submit the form to your backend here.
     */

    setIsOpen(false);
  };

  const projectTypes = [
    {
      value: "web",
      label: t("cta.modal.projectTypes.web"),
    },
    {
      value: "design",
      label: t("cta.modal.projectTypes.design"),
    },
    {
      value: "mobile",
      label: t("cta.modal.projectTypes.mobile"),
    },
    {
      value: "ai",
      label: t("cta.modal.projectTypes.ai"),
    },
    {
      value: "marketing",
      label: t("cta.modal.projectTypes.marketing"),
    },
    {
      value: "other",
      label: t("cta.modal.projectTypes.other"),
    },
  ];

  const budgets = [
    {
      value: "under2k",
      label: t("cta.modal.budgets.under2k"),
    },
    {
      value: "2k5k",
      label: t("cta.modal.budgets.2k5k"),
    },
    {
      value: "5k10k",
      label: t("cta.modal.budgets.5k10k"),
    },
    {
      value: "10kPlus",
      label: t("cta.modal.budgets.10kPlus"),
    },
  ];

  return (
    <>
      <section
        id="contact"
        className="bg-background-soft px-5 py-28 sm:px-8 sm:py-36"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-310 overflow-hidden rounded-[40px] bg-primary px-7 py-20 text-center sm:px-12"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-150 w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,.14),rgba(8,47,58,.08)_40%,transparent_70%)] blur-3xl" />

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
              <Sparkles size={22} />
            </div>

            <span className="mt-7 block text-[9px] font-bold uppercase tracking-[.2em] text-accent/70">
              RoshaSoft
            </span>

            <h2 className="mx-auto mt-4 max-w-[760px] text-[43px] font-extrabold leading-[.96] tracking-[-.07em] text-white sm:text-[64px]">
              {t("cta.title")}
            </h2>

            <p className="mx-auto mt-6 max-w-[590px] text-[13px] leading-[1.9] text-white/45">
              {t("cta.description")}
            </p>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-[10px] font-bold text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(212,175,55,0.22)]"
            >
              {t("cta.button")}

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                <ArrowUpRight
                  size={14}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </button>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-999 flex items-center justify-center overflow-y-auto bg-primary/60 p-4 backdrop-blur-md sm:p-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsOpen(false);
              }
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="relative my-auto w-full max-w-3xl overflow-hidden rounded-[30px] border border-primary/10 bg-white shadow-[0_30px_100px_rgba(8,47,58,0.22)]"
            >
              <div className="h-1 w-full bg-accent" />

              <div className="p-6 sm:p-9">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Sparkles size={17} />
                      </div>

                      <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-secondary">
                        {t("cta.modal.eyebrow")}
                      </span>
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">
                      {t("cta.modal.title")}
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-secondary">
                      {t("cta.modal.description")}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background-soft text-secondary transition hover:bg-background-muted hover:text-primary"
                    aria-label={t("cta.modal.close")}
                  >
                    <X size={16} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                        {t("cta.modal.name")}
                      </label>

                      <div className="relative">
                        <User
                          size={15}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                        />

                        <input
                          required
                          type="text"
                          name="name"
                          placeholder={t("cta.modal.namePlaceholder")}
                          className="h-12 w-full rounded-xl border border-border bg-background-soft pl-11 pr-4 text-sm text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                        {t("cta.modal.email")}
                      </label>

                      <div className="relative">
                        <Mail
                          size={15}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                        />

                        <input
                          required
                          type="email"
                          name="email"
                          placeholder={t("cta.modal.emailPlaceholder")}
                          className="h-12 w-full rounded-xl border border-border bg-background-soft pl-11 pr-4 text-sm text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                        {t("cta.modal.phone")}
                      </label>

                      <div className="relative">
                        <Phone
                          size={15}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                        />

                        <input
                          type="tel"
                          name="phone"
                          placeholder={t("cta.modal.phonePlaceholder")}
                          className="h-12 w-full rounded-xl border border-border bg-background-soft pl-11 pr-4 text-sm text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                        {t("cta.modal.projectType")}
                      </label>

                      <select
                        name="projectType"
                        className="h-12 w-full appearance-none rounded-xl border border-border bg-background-soft px-4 text-sm text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/10"
                      >
                        <option value="">
                          {t("cta.modal.projectTypePlaceholder")}
                        </option>

                        {projectTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                      {t("cta.modal.budget")}
                    </label>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {budgets.map((budget) => (
                        <label key={budget.value} className="cursor-pointer">
                          <input
                            type="radio"
                            name="budget"
                            value={budget.value}
                            className="peer sr-only"
                          />

                          <span className="flex h-11 items-center justify-center rounded-xl border border-border bg-background-soft text-[10px] font-semibold text-secondary transition hover:border-border-strong peer-checked:border-accent peer-checked:bg-accent/10 peer-checked:text-primary">
                            {budget.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                        {t("cta.modal.projectDescription")}
                      </label>

                      <span className="text-[9px] text-text-muted">
                        {t("cta.modal.projectDescriptionHint")}
                      </span>
                    </div>

                    <textarea
                      required
                      name="projectDescription"
                      value={projectDescription}
                      onChange={(event) =>
                        setProjectDescription(event.target.value)
                      }
                      rows={5}
                      placeholder={t(
                        "cta.modal.projectDescriptionPlaceholder",
                      )}
                      className="w-full resize-none rounded-xl border border-border bg-background-soft p-4 text-sm leading-7 text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                    />

                    <div className="mt-3 flex flex-col gap-3 rounded-xl border border-accent/20 bg-accent/[0.045] p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 text-accent">
                          <WandSparkles size={17} />
                        </div>

                        <div>
                          <p className="text-[11px] font-semibold text-primary">
                            {t("cta.modal.ai.title")}
                          </p>

                          <p className="mt-1 text-[10px] leading-5 text-secondary">
                            {t("cta.modal.ai.description")}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        disabled={!projectDescription.trim() || isGenerating}
                        onClick={handleAiImprove}
                        className="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-4 text-[9px] font-bold text-primary transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <WandSparkles size={12} />

                        {isGenerating
                          ? t("cta.modal.ai.loading")
                          : t("cta.modal.ai.button")}
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {aiDescription && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="rounded-xl border border-accent/20 bg-accent/[0.045] p-5">
                          <div className="flex items-center gap-2 text-accent">
                            <Check size={14} />

                            <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                              {t("cta.modal.ai.resultTitle")}
                            </span>
                          </div>

                          <p className="mt-3 text-sm leading-7 text-primary/80">
                            {aiDescription}
                          </p>

                          <button
                            type="button"
                            onClick={() => setProjectDescription(aiDescription)}
                            className="mt-4 text-[9px] font-bold uppercase tracking-[0.15em] text-accent transition hover:opacity-80"
                          >
                            {t("cta.modal.ai.useDescription")}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-[9px] leading-5 text-text-muted">
                      {t("cta.modal.consent")}
                    </p>

                    <button
                      type="submit"
                      className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-primary px-6 text-[10px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_15px_40px_rgba(8,47,58,0.18)]"
                    >
                      {t("cta.modal.submit")}

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-primary transition-transform group-hover:rotate-45">
                        <ArrowUpRight size={13} />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}