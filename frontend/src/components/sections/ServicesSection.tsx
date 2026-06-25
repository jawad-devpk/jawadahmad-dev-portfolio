import { ArrowRight, CodeXml, Layers3, MonitorSmartphone } from "lucide-react";

const services = [
  {
    id: 1,
    title: "User Experience (UX)",
    description:
      "I create smooth, clear, and user-friendly digital experiences by focusing on user flow, structure, and usability.",
    icon: Layers3,
  },
  {
    id: 2,
    title: "User Interface (UI)",
    description:
      "I design clean, modern, and responsive interfaces with proper spacing, typography, and professional visual hierarchy.",
    icon: MonitorSmartphone,
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "I build fast, responsive, and scalable websites using React, TypeScript, Tailwind CSS, and modern frontend tools.",
    icon: CodeXml,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#1B242E] py-16 text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        
          <div className="-mt-8 text-center lg:-mt-10 lg:text-left">
            <h2 className="text-[36px] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[48px] md:text-[54px] lg:text-[58px]">
              What I do?
            </h2>

            <p className="mx-auto mt-7 max-w-[650px] text-justify text-[16px] font-medium leading-8 text-[#AAB3BE] sm:text-[18px] sm:leading-9 lg:mx-0">
              I build modern, responsive, and scalable web applications that
              help businesses establish a strong online presence and streamline
              their digital operations. From intuitive user interfaces to robust
              backend systems and database management, I focus on creating fast,
              secure, and user-friendly solutions that deliver real value.
            </p>

          
            <div className="mt-9 flex justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-fuchsia-500 px-7 py-3.5 text-[15px] font-extrabold text-white shadow-[0_18px_45px_rgba(157,34,242,0.35)] transition-all duration-300 hover:shadow-[0_22px_55px_rgba(157,34,242,0.45)]"
              >
                Say Hello!
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right cards */}
          <div className="mx-auto grid w-full max-w-[780px] gap-5 lg:mx-0">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  className="group rounded-2xl border border-white/8 bg-[#151D26] p-6 shadow-[0_20px_55px_rgba(0,0,0,0.24)] transition-all duration-300 hover:border-purple-500/30 hover:bg-[#101820] hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:p-7"
                >
                  <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left lg:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#202A35] text-[#9D22F2] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-fuchsia-500 group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <div>
                      <h3 className="text-[21px] font-extrabold text-white sm:text-[23px]">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-[14px] font-medium leading-7 text-[#AAB3BE] sm:text-[15px]">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
