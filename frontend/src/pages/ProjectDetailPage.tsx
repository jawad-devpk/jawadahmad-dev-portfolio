import { useMemo, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Grid2X2,
  Layers,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Container from "../components/common/Container";
import FloatingChatButton from "../components/layout/FloatingChatButton";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ScrollToTop from "../components/layout/ScrollToTop";
import { projects } from "../data/projects";

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.59 2 12.253c0 4.52 2.865 8.35 6.839 9.704.5.095.683-.222.683-.494 0-.244-.009-.89-.014-1.747-2.782.62-3.369-1.375-3.369-1.375-.455-1.184-1.11-1.5-1.11-1.5-.908-.637.069-.624.069-.624 1.004.072 1.532 1.057 1.532 1.057.892 1.567 2.341 1.115 2.91.853.091-.662.35-1.115.636-1.371-2.221-.26-4.555-1.138-4.555-5.064 0-1.118.39-2.033 1.03-2.75-.103-.26-.447-1.304.098-2.717 0 0 .84-.276 2.75 1.05A9.373 9.373 0 0 1 12 6.93a9.37 9.37 0 0 1 2.504.345c1.909-1.326 2.747-1.05 2.747-1.05.547 1.413.203 2.457.1 2.717.64.717 1.028 1.632 1.028 2.75 0 3.936-2.337 4.8-4.566 5.055.359.318.678.944.678 1.902 0 1.372-.012 2.48-.012 2.815 0 .274.18.594.688.493C19.138 20.6 22 16.771 22 12.253 22 6.59 17.523 2 12 2Z" />
    </svg>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  const galleryImages = useMemo(() => {
    if (!project) return [];

    const images = [project.coverImage, ...project.images].filter(Boolean);
    return Array.from(new Set(images));
  }, [project]);

  const [activeImage, setActiveImage] = useState("");

  if (!project) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-[#18212A] pt-32 text-white">
          <Container>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#C75BFF]"
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Link>

            <h1 className="mt-10 text-4xl font-extrabold">Project not found</h1>
          </Container>
        </main>
      </>
    );
  }

  const mainImage = activeImage || galleryImages[0];

  const suggestedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  const liveUrl = project.liveUrl || "#";
  const githubUrl = project.githubUrl || "#";

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#18212A] pt-28 text-white sm:pt-32">
        <section className="pb-20">
          <Container>
            <div className="mb-8 text-[12px] font-semibold text-[#8E99A8]">
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/projects" className="transition hover:text-white">
                Portfolio
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{project.title}</span>
            </div>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] xl:gap-12">
              <div className="min-w-0">
                <h1 className="max-w-5xl text-[34px] font-extrabold leading-[1.08] tracking-[-0.045em] text-white sm:text-[48px] lg:text-[54px]">
                  {project.title}
                </h1>

                <p className="mt-4 text-[18px] font-semibold text-[#AAB3BE]">
                  {project.subtitle}
                </p>

                <p className="mt-8 max-w-5xl text-[14px] font-medium leading-8 text-[#C6D0DD] sm:text-[15px]">
                  {project.description}
                </p>

                <div className="mx-auto mt-8 max-w-[760px] overflow-hidden rounded-md border border-white/10 bg-[#F8FAFC] p-2 shadow-[0_25px_100px_rgba(0,0,0,0.35)] sm:p-3">
                  <img
                    src={mainImage}
                    alt={project.title}
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                    className="h-[300px] w-full object-contain object-center sm:h-[460px] lg:h-[560px]"
                  />
                </div>

                {galleryImages.length > 1 && (
                  <div className="mx-auto mt-4 grid max-w-[420px] grid-cols-3 gap-3 sm:gap-4">
                    {galleryImages.slice(0, 3).map((image) => {
                      const isActive = mainImage === image;

                      return (
                        <button
                          key={image}
                          type="button"
                          onClick={() => setActiveImage(image)}
                          className={`overflow-hidden rounded-xl border-4 transition-all duration-300 ${
                            isActive
                              ? "border-[#41D982] shadow-[0_0_30px_rgba(65,217,130,0.25)]"
                              : "border-transparent hover:border-[#9D22F2]/70"
                          }`}
                        >
                          <img
                            src={image}
                            alt={project.title}
                            className="h-[78px] w-full bg-[#F8FAFC] object-contain object-center sm:h-[105px]"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}

                <div className="mt-10">
                  <h2 className="text-[21px] font-extrabold text-white">
                    Technologies Used
                  </h2>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[#111820] px-4 py-2 text-[12px] font-bold text-[#E7ECF2]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-[21px] font-extrabold text-white">
                    Key Features
                  </h2>

                  <div className="mt-5 space-y-3">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2
                          size={19}
                          className="shrink-0 text-[#41D982]"
                        />
                        <p className="text-[14px] font-medium text-[#C6D0DD]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
                <div className="rounded-md border border-white/5 bg-[#151D26] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
                  <h2 className="text-[20px] font-extrabold text-white">
                    Suggested Projects
                  </h2>

                  <div className="mt-6 space-y-5">
                    {suggestedProjects.map((item) => (
                      <Link
                        key={item.id}
                        to={`/projects/${item.slug}`}
                        className="group flex gap-4"
                      >
                        <img
                          src={item.coverImage}
                          alt={item.title}
                          className="h-[58px] w-[70px] shrink-0 rounded-md object-cover object-top"
                        />

                        <div className="min-w-0">
                          <h3 className="line-clamp-2 text-[13px] font-extrabold leading-5 text-white transition group-hover:text-[#C75BFF]">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-[11px] font-semibold text-[#8E99A8]">
                            {item.categoryLabel}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-md border border-white/5 bg-[#151D26] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
                  <h2 className="text-[20px] font-extrabold text-white">
                    Project Information
                  </h2>

                  <div className="mt-6 space-y-5">
                    <div className="flex items-start gap-3">
                      <Grid2X2 className="mt-1 text-[#C75BFF]" size={18} />

                      <div>
                        <p className="text-[11px] font-semibold text-[#7C8794]">
                          Category
                        </p>
                        <p className="mt-1 text-[13px] font-extrabold uppercase text-white">
                          {project.categoryLabel}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Layers className="mt-1 text-[#C75BFF]" size={18} />

                      <div>
                        <p className="text-[11px] font-semibold text-[#7C8794]">
                          Type
                        </p>
                        <p className="mt-1 text-[13px] font-extrabold text-white">
                          {project.categoryLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-[#41D982] px-4 py-3 text-[13px] font-extrabold text-white transition hover:bg-[#31C974]"
                  >
                    View Live Project
                    <ExternalLink className="ml-2" size={16} />
                  </a>

                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-[#EAF7FF] px-4 py-3 text-[13px] font-extrabold text-[#111820] transition hover:bg-white"
                  >
                    <GitHubIcon className="mr-2" />
                    View on GitHub
                  </a>
                </div>
              </aside>
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
