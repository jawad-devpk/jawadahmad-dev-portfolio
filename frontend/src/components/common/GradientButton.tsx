import type { AnchorHTMLAttributes, ReactNode } from "react";

type GradientButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export default function GradientButton({
  children,
  className = "",
  ...props
}: GradientButtonProps) {
  return (
    <a
      {...props}
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 text-[14px] font-extrabold text-white shadow-[0_18px_45px_rgba(157,34,242,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(157,34,242,0.45)] ${className}`}
    >
      {children}
    </a>
  );
}
