import {
  ClipboardCheck,
  Download,
  FileSearch,
  PenTool,
  Rocket,
  SquarePen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import profileImage from "../../assets/my.png";

const processSteps = [
  {
    id: 1,
    title: "1. Research",
    description:
      "I understand the project requirements, target users, business goals, and content structure before starting the work.",
    icon: FileSearch,
  },
  {
    id: 2,
    title: "2. Analyze",
    description:
      "I analyze the layout, user flow, features, and project structure to create a clear development plan.",
    icon: ClipboardCheck,
  },
  {
    id: 3,
    title: "3. Design",
    description:
      "I design clean, modern, and responsive interfaces with proper spacing, typography, and user experience.",
    icon: PenTool,
  },
  {
    id: 4,
    title: "4. Launch",
    description:
      "I test, optimize, polish, and prepare the final project for deployment and real-world usage.",
    icon: Rocket,
  },
];

const socialLinks = [
  {
    id: 1,
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    id: 2,
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    id: 3,
    label: "LinkedIn",
    href: "linkedin.com/in/jawad-ahmad-060459407",
    icon: FaLinkedinIn,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#18212A] pt-16 text-white sm:pt-20 lg:pt-24"
    >
      {/* left golden glow */}
      <div className="pointer-events-none absolute left-[-230px] top-[55px] z-0 h-[560px] w-[540px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,226,166,0.52)_0%,rgba(216,184,126,0.32)_36%,rgba(157,34,242,0.04)_58%,rgba(24,33,42,0)_72%)] blur-[45px]" />

      {/* ABOUT CARD - process bg ke uper overlap karega */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="mx-auto max-w-[1280px] rounded-[14px] border border-white/[0.04] bg-[#1B242E] px-5 pt-10 pb-12 shadow-[0_35px_110px_rgba(0,0,0,0.32)] sm:px-8 sm:pt-12 sm:pb-14 lg:px-12 lg:pt-12 lg:pb-12 xl:px-16">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Image */}
            <div className="mx-auto w-full max-w-[330px] sm:max-w-[370px] lg:mx-0 lg:max-w-[390px]">
              <div className="relative pb-8">
                <div className="overflow-hidden rounded-[8px] bg-[#F3F4F6] shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
                  <img
                    src={profileImage}
                    alt="Jawad Ahmad"
                    className="h-[345px] w-full object-contain object-bottom sm:h-[395px] lg:h-[420px]"
                  />
                </div>

                <div className="absolute left-1/2 bottom-0 flex -translate-x-1/2 items-center gap-4 bg-[#151D26] px-7 py-4 shadow-[0_24px_65px_rgba(0,0,0,0.42)]">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        aria-label={item.label}
                        className="flex h-9 w-9 items-center justify-center rounded-md text-[#9D22F2] transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-fuchsia-500 hover:text-white"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="text-center lg:text-left">
              <h2 className="mx-auto max-w-[720px] text-[30px] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[38px] md:text-[44px] lg:mx-0 lg:text-[46px]">
                I am a Professional Web Developer
              </h2>

              <p className="mx-auto mt-6 max-w-[720px] text-justify text-[15px] font-medium leading-7 text-[#AAB3BE] sm:text-[17px] sm:leading-8 lg:mx-0">
                I am a Full Stack MERN Developer with 1+ year of hands-on
                experience building modern web applications. I specialize in
                React.js, Node.js, Express.js, MongoDB, and TypeScript,
                developing responsive, scalable, and user-focused solutions.
              </p>

              <p className="mx-auto mt-4 max-w-[720px] text-justify text-[15px] font-medium leading-7 text-[#AAB3BE] sm:text-[17px] sm:leading-8 lg:mx-0">
                I enjoy transforming ideas into modern web applications by
                creating intuitive user interfaces, robust backend systems, and
                scalable database solutions. My focus is on clean code,
                performance, and delivering a seamless user experience.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 text-[15px] font-extrabold text-white shadow-[0_18px_45px_rgba(157,34,242,0.35)] transition-all duration-300 hover:shadow-[0_22px_55px_rgba(157,34,242,0.45)]"
                >
                  My Projects
                  <SquarePen size={18} />
                </Link>

                <a
                  href="/jawad-dev-cv.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/12 bg-transparent px-6 py-3 text-[15px] font-extrabold text-white transition-all duration-300 hover:border-purple-500/40 hover:bg-white/5"
                >
                  Download resume
                  <Download size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS SECTION - about card ke neeche se start nahi, balkay uske peeche se uper start */}
      <div className="relative left-1/2 z-10 -mt-20 w-screen -translate-x-1/2 bg-[#111820] pt-32 pb-16 sm:-mt-24 sm:pt-36 sm:pb-20 lg:-mt-28 lg:pt-40 lg:pb-24">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            {/* Process Text */}
            <div className="text-center lg:text-left">
              <h2 className="text-[34px] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[44px] md:text-[50px] lg:text-[54px]">
                Work Process
              </h2>

              <p className="mx-auto mt-6 text-justify max-w-[680px] text-[15px] font-medium leading-7 text-[#AAB3BE] sm:text-[17px] sm:leading-8 lg:mx-0">
                With 1+ year of hands-on development experience, I follow a
                structured workflow from planning and design to development and
                deployment. My focus is on building scalable, responsive, and
                user-friendly web applications that deliver real value.
              </p>

              <p className="mx-auto mt-4 text-justify max-w-[680px] text-[15px] font-medium leading-7 text-[#AAB3BE] sm:text-[17px] sm:leading-8 lg:mx-0">
                By combining modern technologies, clean code, and best
                development practices, I create reliable digital solutions that
                provide a seamless user experience across all devices.
              </p>
            </div>

            {/* Process Cards */}
            {/* <div className="mx-auto grid w-full max-w-[900px] gap-5 sm:grid-cols-2 lg:mx-0"> */}
            <div className="mx-auto mt-10 grid w-full max-w-[900px] gap-5 sm:grid-cols-2 lg:mx-0 lg:mt-14">
              {processSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    className="group min-h-[210px] rounded-xl border border-white/[0.05] bg-[#1B242E] p-6 text-center shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-colors duration-300 hover:border-purple-500/30 hover:bg-[#18212A] sm:text-left"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md bg-[#202A35] text-[#9D22F2] transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-500 group-hover:text-white sm:mx-0">
                      <Icon size={25} />
                    </div>

                    <h3 className="mt-5 text-[19px] font-extrabold text-white sm:text-[21px]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[14px] font-medium leading-7 text-[#AAB3BE] sm:text-[15px]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
