"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative h-screen overflow-hidden bg-[#f4f9fa] text-primary">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#d9eef1] blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-128 w-lg rounded-full bg-[#e2f3f4] blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9e3e7]" />
        <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8ecef]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
        <div className="mx-auto w-full max-w-3xl text-center">
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#c8e1e5] bg-white/70 px-4 py-2 text-sm font-medium text-[#37636c] backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Page not found
          </motion.div>

          {/* 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="relative"
          >
            <span
              aria-hidden="true"
              className="select-none text-[clamp(8rem,25vw,18rem)] font-black leading-none tracking-[-0.08em] text-primary/[0.07]"
            >
              404
            </span>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[clamp(5rem,16vw,11rem)] font-black leading-none tracking-[-0.07em] text-primary">
                404
              </span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="-mt-4"
          >
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              We lost this page.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#52747b] sm:text-lg">
              The page you are looking for doesn't exist, has been moved,
              or the address you entered is not available.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/en"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d4654] hover:shadow-xl"
            >
              Back to home

              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              >
                <path
                  d="M19 12H5M12 19L5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>

          {/* Bottom detail */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-[#7a999f]"
          >
            <span className="h-px w-10 bg-[#c8e1e5]" />
            Error 404
            <span className="h-px w-10 bg-[#c8e1e5]" />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
