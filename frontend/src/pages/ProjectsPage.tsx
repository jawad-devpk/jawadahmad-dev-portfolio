import { useMemo, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/cards/ProjectCard";
import Container from "../components/common/Container";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";
import FloatingChatButton from "../components/layout/FloatingChatButton";
import { projects } from "../data/projects";
import type { ProjectCategory } from "../types/project.types";

type FilterType = "all" | ProjectCategory;

const filters: { label: string; value: FilterType }[] = [
  { label: "ALL", value: "all" },
  { label: "MOBILE APP", value: "mobile-app" },
  { label: "WEB DEVELOPMENT", value: "web-development" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-32 text-[#111820]">
        <section className="pb-20">
          <Container>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Link
                  to="/#work"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#EAF7FF]"
                >
                  <ArrowLeft size={16} /> Home / Portfolio
                </Link>

                <h1 className="mt-8 text-[42px] font-extrabold tracking-[-0.05em] text-[#EAF7FF] sm:text-[64px]">
                  My Portfolio
                </h1>
              </div>

              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter.value;

                  return (
                    <button
                      key={filter.value}
                      type="button"
                      onClick={() => setActiveFilter(filter.value)}
                      className={`rounded-md px-5 py-3 text-[13px] font-extrabold shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 ${
                        isActive
                          ? "bg-[#31D27C] text-white"
                          : "bg-[#111820] text-white hover:bg-[#9D22F2]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  variant="light"
                />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
      <FloatingChatButton />
    </>
  );
}
