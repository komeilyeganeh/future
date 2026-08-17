"use client";

import { motion } from "framer-motion";
import {
  Braces,
  CloudCog,
  Cpu,
  Database,
  GitBranch,
  Shield,
} from "lucide-react";
import { useTranslations } from "next-intl";

const technologies = [
  {
    icon: Braces,
    name: "Software",
    items: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    icon: CloudCog,
    name: "Cloud",
    items: ["Cloud Native", "DevOps", "Containers", "CI/CD"],
  },
  {
    icon: Cpu,
    name: "AI",
    items: ["Machine Learning", "LLM", "Automation", "Data"],
  },
  {
    icon: Database,
    name: "Data",
    items: ["SQL", "NoSQL", "Analytics", "Integration"],
  },
  {
    icon: Shield,
    name: "Security",
    items: ["Zero Trust", "IAM", "Monitoring", "Compliance"],
  },
  {
    icon: GitBranch,
    name: "Architecture",
    items: ["APIs", "Microservices", "Scalability", "Integration"],
  },
];

export default function Technology() {
  const t = useTranslations("Home.technology");

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-white py-28 sm:py-36"
    >
      <div className="mx-auto w-[calc(100%-30px)] max-w-310 md:w-[calc(100%-48px)]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[760px] text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[.18em] text-purple-accent">
            {t("kicker")}
          </span>

          <h2 className="mt-4 text-[43px] font-extrabold leading-[.98] tracking-[-.065em] text-[#11131a] sm:text-[60px]">
            {t("title")}
          </h2>

          <p className="mx-auto mt-6 max-w-155 text-[14px] leading-[1.9] text-[#737a88]">
            {t("description")}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .55,
                  delay: index * .06,
                }}
                whileHover={{ y: -5 }}
                className="group rounded-[25px] border border-black/6 bg-[#f8f9fc] p-6 transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(27,31,55,.08)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-purple-accent shadow-[0_10px_25px_rgba(27,31,55,.05)]">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <span className="text-[9px] font-bold text-[#c2c6cf]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-[17px] font-bold tracking-[-.03em] text-[#20232c]">
                  {tech.name}
                </h3>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/5 bg-white px-2.5 py-1.5 text-[8px] font-semibold text-[#7d8490]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
