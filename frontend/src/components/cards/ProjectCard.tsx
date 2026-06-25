import { useState } from "react";
import { ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/project.types";

type ProjectCardProps = {
  project: Project;
  index: number;
  variant?: "dark" | "light";
};

const homeStaggerClasses = [
  "md:mt-0",
  "md:mt-[105px]",
  "md:mt-0",
  "md:mt-[105px]",
  "md:mt-0",
  "md:mt-[105px]",
];

export default function ProjectCard({
  project,
  index,
  variant = "dark",
}: ProjectCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const isLight = variant === "light";
  const staggerClass = isLight
    ? ""
    : homeStaggerClasses[index % homeStaggerClasses.length];

  return (
    <article
      onMouseLeave={() => setIsPreviewOpen(false)}
      className={`group/project relative shrink-0 overflow-visible rounded-md transition-colors duration-300 ${
        isLight
          ? "w-full border border-gray-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
          : `w-[200px] border border-white/10 bg-[#101720] shadow-[0_20px_60px_rgba(0,0,0,0.32)] hover:border-[#9D22F2]/45 min-[380px]:w-[225px] sm:w-[245px] lg:w-[270px] xl:w-[285px] ${staggerClass}`
      }`}
    >
      <div
        className={`relative overflow-hidden rounded-t-md ${
          isLight
            ? "h-[290px] bg-gray-100"
            : "h-[230px] bg-[#202A35] min-[380px]:h-[250px] sm:h-[280px] lg:h-[310px]"
        }`}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          className="h-full w-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover/project:bg-black/45" />

        <div className="absolute left-1/2 top-1/2 z-10 w-[86%] -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition-opacity duration-300 group-hover/project:opacity-100">
          <h3 className="text-[15px] font-extrabold leading-tight text-white sm:text-[18px]">
            {project.title}
          </h3>

          <p className="mt-2 text-[11px] font-bold text-[#C75BFF]">
            {project.categoryLabel}
          </p>
        </div>
      </div>

      <div className="group/eye absolute right-3 top-3 z-[90]">
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsPreviewOpen((prev) => !prev);
          }}
          className="flex h-9 w-9 translate-y-3 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-[#111820]/90 text-white opacity-0 shadow-[0_12px_35px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:bg-[#9D22F2] group-hover/project:translate-y-0 group-hover/project:opacity-100 sm:h-10 sm:w-10"
          aria-label={`Preview ${project.title}`}
        >
          <Eye size={17} />
        </button>

        <div
          className={`absolute right-0 top-11 z-[100] hidden w-[285px] rounded-2xl border border-white/10 bg-[#111820]/95 p-5 text-left shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 md:block ${
            isPreviewOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible translate-y-3 opacity-0 group-hover/eye:visible group-hover/eye:translate-y-0 group-hover/eye:opacity-100"
          }`}
        >
          <h4 className="text-[16px] font-extrabold leading-snug text-white">
            {project.title}
          </h4>

          <p className="mt-3 line-clamp-4 text-[12px] font-medium leading-6 text-[#AAB3BE]">
            {project.description}
          </p>

          <p className="mt-4 text-[11px] font-extrabold uppercase tracking-wide text-[#D5DCE5]">
            Technologies
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#14532D]/70 px-2.5 py-1 text-[10px] font-bold text-[#4ADE80]"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#38D878] transition-colors hover:text-white"
          >
            View Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div
        className={
          isLight
            ? "min-h-[235px] p-6"
            : "min-h-[220px] p-4 sm:min-h-[230px] sm:p-5"
        }
      >
        <h3
          className={`font-extrabold leading-tight ${
            isLight
              ? "text-[21px] text-[#111820]"
              : "text-[15px] text-white sm:text-[17px]"
          }`}
        >
          {project.title}
        </h3>

        <p className="mt-2 text-[11px] font-extrabold text-[#9D22F2] sm:text-[12px]">
          {project.categoryLabel}
        </p>

        <p
          className={`mt-3 line-clamp-3 text-[12px] font-semibold leading-6 sm:text-[13px] ${
            isLight ? "text-gray-600" : "text-[#AAB3BE]"
          }`}
        >
          {project.shortDescription}
        </p>

        <Link
          to={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-[12px] font-extrabold text-[#9D22F2] transition-colors duration-300 hover:text-white sm:mt-5 sm:text-[13px]"
        >
          View project <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}
