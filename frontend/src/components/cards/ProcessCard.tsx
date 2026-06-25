import type { LucideIcon } from "lucide-react";

type ProcessCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ProcessCard({
  title,
  description,
  icon: Icon,
}: ProcessCardProps) {
  return (
    <article className="group rounded-md border border-white/[0.04] bg-[#1B242E] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-[#9D22F2]/35 hover:bg-[#202A35] sm:p-6">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#9D22F2]/25 text-[#B95CFF] transition-all duration-300 group-hover:bg-[#9D22F2] group-hover:text-white">
        <Icon size={20} />
      </div>

      <h3 className="text-[14px] font-extrabold text-white sm:text-[15px]">
        {title}
      </h3>

      <p className="mt-3 text-[12px] font-medium leading-6 text-[#AAB3BE] sm:text-[13px]">
        {description}
      </p>
    </article>
  );
}
