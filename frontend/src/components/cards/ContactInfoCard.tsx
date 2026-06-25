import type { LucideIcon } from "lucide-react";

type ContactInfoCardProps = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export default function ContactInfoCard({
  label,
  value,
  icon: Icon,
}: ContactInfoCardProps) {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-transparent bg-transparent px-3 py-3 transition-all duration-300 hover:border-white/5 hover:bg-[#151D26] hover:shadow-[0_18px_45px_rgba(0,0,0,0.30)]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#6F4BD8]/35 text-white shadow-[0_12px_28px_rgba(111,75,216,0.20)] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#7C3AED] group-hover:to-[#A855F7] group-hover:shadow-[0_14px_32px_rgba(124,58,237,0.32)] sm:h-12 sm:w-12">
        <Icon size={20} />
      </div>

      <div className="min-w-0">
        <p className="text-[12px] font-semibold text-[#AAB3BE] transition-colors duration-300 group-hover:text-white/80 sm:text-[13px]">
          {label}
        </p>

        <p className="mt-0.5 whitespace-pre-line break-words text-[13px] font-extrabold leading-5 text-white transition-colors duration-300 sm:text-[14px]">
          {value}
        </p>
      </div>
    </div>
  );
}
