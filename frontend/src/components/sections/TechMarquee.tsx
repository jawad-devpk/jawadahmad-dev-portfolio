import { FaFigma, FaGithub, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const techItems = [
  {
    name: "React.js",
    icon: FaReact,
  },
  {
    name: "JavaScript",
    icon: FaJs,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "Express.js",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    name: "Redux Toolkit",
    icon: SiRedux,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
  },
  {
    name: "Git & GitHub",
    icon: FaGithub,
  },
  {
    name: "REST APIs",
    icon: TbApi,
  },
  {
    name: "MongoDB Atlas",
    icon: SiMongodb,
  },
  {
    name: "WordPress",
    icon: SiWordpress,
  },
  {
    name: "Figma",
    icon: FaFigma,
  },
];

export default function TechMarquee() {
  const items = [...techItems, ...techItems];

  return (
    <div className="mx-auto mt-12 w-full max-w-[620px] overflow-hidden max-[992px]:flex max-[992px]:justify-center min-[993px]:mx-0 min-[993px]:mt-12">
      <div className="flex w-max animate-[techScroll_36s_linear_infinite] items-center gap-6 min-[360px]:gap-8 sm:gap-10">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.name}-${index}`}
              className="flex shrink-0 items-center gap-2 text-[12px] font-medium text-[#AAB3BE] min-[360px]:gap-3 min-[360px]:text-[14px]"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1E2732] text-[#9D22F2] shadow-[0_0_24px_rgba(157,34,242,0.25)] min-[360px]:h-9 min-[360px]:w-9">
                <Icon size={17} />
              </span>

              <span className="whitespace-nowrap">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
