import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1840px] px-3 min-[360px]:px-4 sm:px-8 lg:px-12 xl:px-16 ${className}`}
    >
      {children}
    </div>
  );
}
