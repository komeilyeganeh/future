"use client";

import {
  ArrowDown,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "ghost";

type ButtonSize = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  iconRotate?: boolean;
  className?: string;
};

type LinkButtonProps = BaseProps & {
  href: string;
  type?: never;
};

type NativeButtonProps = BaseProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white shadow-sm hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(8,47,58,0.18)]",

  secondary:
    "border border-primary/10 bg-white text-primary hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_14px_35px_rgba(8,47,58,0.08)]",

  accent:
    "bg-[#c7a45d] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#b8944d] hover:shadow-[0_14px_35px_rgba(199,164,93,0.22)]",

  ghost:
    "bg-transparent text-primary hover:bg-primary/5",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 gap-2 px-4 py-2 text-[9px]",
  md: "min-h-11 gap-3 px-6 py-3.5 text-[10px]",
  lg: "min-h-13 gap-4 px-7 py-4 text-[11px]",
};

function ButtonContent({
  children,
  icon: Icon,
  iconPosition,
  iconRotate,
}: Pick<
  BaseProps,
  "children" | "icon" | "iconPosition" | "iconRotate"
>) {
  return (
    <>
      {Icon && iconPosition === "left" && (
        <Icon
          size={14}
          strokeWidth={1.8}
          className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5"
        />
      )}

      <span>{children}</span>

      {Icon && iconPosition !== "left" && (
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-current/10 transition-all duration-300 group-hover:bg-current/15">
          <Icon
            size={14}
            strokeWidth={1.8}
            className={
              iconRotate
                ? "transition-transform duration-300 group-hover:rotate-45"
                : "transition-transform duration-300  "
            }
          />
        </span>
      )}
    </>
  );
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon = ArrowUpRight,
  iconPosition = "right",
  iconRotate = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClassName = [
    "group inline-flex w-fit items-center justify-center",
    "rounded-full font-semibold uppercase tracking-[0.08em]",
    "transition-all duration-300 cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-primary/30 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  if ("href" in props && props.href) {
    const { href } = props;

    return (
      <Link href={href} className={baseClassName}>
        <ButtonContent
          icon={Icon}
          iconPosition={iconPosition}
          iconRotate={iconRotate}
        >
          {children}
        </ButtonContent>
      </Link>
    );
  }

  const { type = "button", disabled, onClick } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={baseClassName}
    >
      <ButtonContent
        icon={Icon}
        iconPosition={iconPosition}
        iconRotate={iconRotate}
      >
        {children}
      </ButtonContent>
    </button>
  );
}