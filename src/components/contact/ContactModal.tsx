"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Mail,
  Phone,
  Sparkles,
  User,
  WandSparkles,
  X,
} from "lucide-react";
import { useState } from "react";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({
  isOpen,
  onClose,
}: ContactModalProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [projectDescription, setProjectDescription] = useState("");
  const [aiDescription, setAiDescription] = useState("");

  const handleAiImprove = async () => {
    if (!projectDescription.trim()) return;

    setIsGenerating(true);

    try {
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

    // Submit to your backend here.

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-999 flex items-center justify-center overflow-y-auto bg-primary/60 p-4 backdrop-blur-md sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
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
                      RoshaSoft
                    </span>
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">
                    Start a conversation
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-secondary">
                    Tell us a little about your project. We will review your
                    idea and get back to you with the next steps.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background-soft text-secondary transition hover:bg-background-muted hover:text-primary"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                      Name
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
                        placeholder="Your name"
                        className="h-12 w-full rounded-xl border border-border bg-background-soft pl-11 pr-4 text-sm text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                      Email
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
                        placeholder="you@example.com"
                        className="h-12 w-full rounded-xl border border-border bg-background-soft pl-11 pr-4 text-sm text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                      Phone
                    </label>

                    <div className="relative">
                      <Phone
                        size={15}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                      />

                      <input
                        type="tel"
                        name="phone"
                        placeholder="+90 ..."
                        className="h-12 w-full rounded-xl border border-border bg-background-soft pl-11 pr-4 text-sm text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                      Project type
                    </label>

                    <select
                      name="projectType"
                      className="h-12 w-full appearance-none rounded-xl border border-border bg-background-soft px-4 text-sm text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/10"
                    >
                      <option value="">Select project type</option>
                      <option value="web">Web Development</option>
                      <option value="design">UI / UX Design</option>
                      <option value="mobile">Mobile App</option>
                      <option value="ai">AI / Automation</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                    Estimated budget
                  </label>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {["Under $2k", "$2k – $5k", "$5k – $10k", "$10k+"].map(
                      (budget) => (
                        <label key={budget} className="cursor-pointer">
                          <input
                            type="radio"
                            name="budget"
                            value={budget}
                            className="peer sr-only"
                          />

                          <span className="flex h-11 items-center justify-center rounded-xl border border-border bg-background-soft text-[10px] font-semibold text-secondary transition peer-checked:border-accent peer-checked:bg-accent/10 peer-checked:text-primary hover:border-border-strong">
                            {budget}
                          </span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary">
                      Project description
                    </label>

                    <span className="text-[9px] text-text-muted">
                      Describe it in your own words
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
                    placeholder="For example: I need a website for my company where customers can..."
                    className="w-full resize-none rounded-xl border border-border bg-background-soft p-4 text-sm leading-7 text-primary outline-none transition placeholder:text-text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                  />

                  <div className="mt-3 flex flex-col gap-3 rounded-xl border border-accent/20 bg-accent/[0.045] p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-accent">
                        <WandSparkles size={17} />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold text-primary">
                          Let AI refine your idea
                        </p>

                        <p className="mt-1 text-[10px] leading-5 text-secondary">
                          We can turn your key points into a clear project
                          brief.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={!projectDescription.trim() || isGenerating}
                      onClick={handleAiImprove}
                      className="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-4 text-[9px] font-bold text-primary transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <WandSparkles size={12} />
                      {isGenerating ? "Creating..." : "Improve with AI"}
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
                            AI Project Summary
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-7 text-primary/80">
                          {aiDescription}
                        </p>

                        <button
                          type="button"
                          onClick={() => setProjectDescription(aiDescription)}
                          className="mt-4 text-[9px] font-bold uppercase tracking-[0.15em] text-accent transition hover:text-accent-hover"
                        >
                          Use this description
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-[9px] leading-5 text-text-muted">
                    By submitting this form, you agree that RoshaSoft may
                    contact you regarding your project.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-primary px-6 text-[10px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_15px_40px_rgba(8,47,58,0.18)]"
                  >
                    Send project request

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
  );
}