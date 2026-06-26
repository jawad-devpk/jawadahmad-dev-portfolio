import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../cards/ProjectCard";
import Container from "../common/Container";
import { projects } from "../../data/projects";

function buildMarqueeGroup<T>(items: T[], minItems = 8) {
  if (items.length === 0) return [];

  const result: T[] = [];

  while (result.length < minItems) {
    result.push(...items);
  }

  return result;
}

export default function ProjectsSection() {
  const visibleProjects = projects.slice(0, 5);

  const marqueeGroup = buildMarqueeGroup(visibleProjects, 8);

  return (
    <section
      id="work"
      className="relative scroll-mt-[82px] overflow-hidden bg-[#18212A] pt-16 pb-20 text-white sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
    >
      <div className="pointer-events-none absolute right-[-18%] top-[250px] h-[720px] w-[58%] rounded-full bg-[#B6FFF4]/18 blur-[105px]" />

      <div className="pointer-events-none absolute right-[-6%] bottom-[60px] h-[560px] w-[46%] bg-[radial-gradient(ellipse_at_center,rgba(182,255,244,0.20)_0%,rgba(111,150,143,0.18)_42%,rgba(24,33,42,0)_74%)] blur-[18px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[38px] font-extrabold tracking-[-0.04em] text-white sm:text-[52px] lg:text-[60px]">
            Portfolio
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[13px] font-semibold leading-7 text-[#AAB3BE] sm:mt-5 sm:text-[16px] sm:leading-8">
            Explore my latest projects, showcasing modern design, practical
            solutions, and real-world development experience.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden pb-10 pt-3 sm:mt-14">
          <div className="portfolio-marquee-track flex w-max items-start">
            <div className="portfolio-marquee-group flex shrink-0 items-start gap-5 pr-5 min-[380px]:gap-6 min-[380px]:pr-6 sm:gap-7 sm:pr-7 lg:gap-8 lg:pr-8">
              {marqueeGroup.map((project, index) => (
                <ProjectCard
                  key={`first-${project.id}-${index}`}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            <div
              className="portfolio-marquee-group flex shrink-0 items-start gap-5 pr-5 min-[380px]:gap-6 min-[380px]:pr-6 sm:gap-7 sm:pr-7 lg:gap-8 lg:pr-8"
              aria-hidden="true"
            >
              {marqueeGroup.map((project, index) => (
                <ProjectCard
                  key={`second-${project.id}-${index}`}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
          <Link
            to="/projects"
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-[#9D22F2] px-6 py-3 text-[13px] font-bold text-white shadow-[0_18px_45px_rgba(157,34,242,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8B18E8]"
          >
            View All Projects <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
