import type { Service } from "../../data/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-md border border-white/[0.04] bg-[#1B242E] px-6 py-6 shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#9D22F2]/35 hover:bg-[#202A35] sm:px-7 sm:py-7">
      <h3 className="text-[20px] font-extrabold leading-tight text-white sm:text-[22px]">
        {service.title}
      </h3>

      <p className="mt-4 text-[14px] font-medium leading-7 text-[#C6D0DD] sm:text-[15px]">
        {service.description}
      </p>
    </article>
  );
}
