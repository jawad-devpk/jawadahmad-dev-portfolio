// import { Code2, ShieldCheck, SmilePlus, Sparkles, Zap } from "lucide-react";
// import { type ReactNode } from "react";
// import { motion } from "framer-motion";
// import Container from "../common/Container";
// import GradientButton from "../common/GradientButton";
// import TechMarquee from "./TechMarquee";
// import { siteInfo } from "../../data/siteInfo";
// import heroImage from "../../assets/my.png";

// type BadgeCardProps = {
//   type: "experience" | "code";
//   title: string;
//   subtitle: string;
// };

// function BadgeCard({ type, title, subtitle }: BadgeCardProps) {
//   const Icon = type === "experience" ? ShieldCheck : Zap;

//   return (
//     <div className="flex w-fit max-w-max items-center gap-1 rounded-lg border border-white/10 bg-[#111820]/95 px-2 py-1.5 shadow-[0_14px_35px_rgba(0,0,0,0.42)] backdrop-blur-md sm:gap-1.5 sm:px-2.5 sm:py-1.5 min-[993px]:w-full min-[993px]:max-w-none min-[993px]:gap-3 min-[993px]:rounded-xl min-[993px]:px-4 min-[993px]:py-3">
//       <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3A1C59] text-[#B63BFF] sm:h-7 sm:w-7 min-[993px]:h-9 min-[993px]:w-9">
//         <Icon
//           size={13}
//           className="min-[993px]:h-4 min-[993px]:w-4"
//           fill={type === "code" ? "currentColor" : "none"}
//         />
//       </span>

//       <div className="text-left min-[993px]:min-w-0">
//         <p className="whitespace-nowrap text-[8.5px] font-bold leading-tight text-white min-[360px]:text-[9px] sm:text-[10px] min-[993px]:truncate min-[993px]:text-[12px]">
//           {title}
//         </p>

//         <p className="mt-0.5 whitespace-nowrap text-[7px] font-medium leading-tight text-[#AAB3BE] min-[360px]:text-[7.5px] sm:text-[8px] min-[993px]:truncate min-[993px]:text-[10px]">
//           {subtitle}
//         </p>
//       </div>
//     </div>
//   );
// }

// function StatsCard({
//   icon,
//   value,
//   label,
//   showBorder = true,
// }: {
//   icon: ReactNode;
//   value: string;
//   label: string;
//   showBorder?: boolean;
// }) {
//   return (
//     <div
//       className={`flex min-w-0 items-center justify-center gap-1 px-1 py-4 min-[401px]:gap-2 min-[401px]:px-2 sm:gap-3 sm:px-3 sm:py-5 min-[993px]:justify-start min-[993px]:px-5 ${
//         showBorder ? "border-r border-white/[0.05]" : ""
//       }`}
//     >
//       <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#202A35] text-[#9D22F2] min-[401px]:flex sm:h-10 sm:w-10">
//         {icon}
//       </span>

//       <div className="min-w-0 text-center min-[993px]:text-left">
//         <h3 className="text-[18px] font-extrabold leading-none text-white min-[360px]:text-[22px] sm:text-[26px]">
//           {value}
//         </h3>

//         <p className="mt-1 text-[9px] font-medium leading-tight text-[#AAB3BE] min-[360px]:mt-2 min-[360px]:text-[10px] sm:text-[12px]">
//           {label}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen w-full overflow-hidden bg-[#111820] pt-[92px] text-white sm:pt-[105px] min-[993px]:pt-[125px]"
//     >
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(157,34,242,0.3),transparent_32%),radial-gradient(circle_at_34%_32%,rgba(89,45,132,0.28),transparent_42%)]" />

//       <div className="absolute left-0 top-[82px] h-[calc(100%-82px)] w-full bg-[linear-gradient(90deg,#111820_0%,rgba(17,24,32,0.96)_28%,rgba(39,27,53,0.7)_58%,rgba(86,32,106,0.46)_100%)]" />

//       <Container className="relative z-10 overflow-hidden">
//         {/* <div className="grid min-h-[calc(100vh-82px)] w-full min-w-0 items-center gap-9 py-7 min-[993px]:grid-cols-[minmax(0,1fr)_500px] min-[993px]:gap-12 xl:grid-cols-[minmax(0,1fr)_510px]"> */}
//         <div className="grid min-h-[calc(100vh-82px)] w-full min-w-0 translate-y-10 items-center gap-9 py-7 min-[640px]:translate-y-12 min-[993px]:translate-y-16 min-[993px]:grid-cols-[minmax(0,1fr)_500px] min-[993px]:gap-12 xl:translate-y-20 xl:grid-cols-[minmax(0,1fr)_510px]">
//           <motion.div
//             initial={{ opacity: 0, y: 28 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="order-2 mx-auto w-full min-w-0 max-w-[620px] text-center min-[993px]:order-1 min-[993px]:mx-0 min-[993px]:text-left"
//           >
//             <h1 className="whitespace-pre-line text-[28px] font-semibold leading-[1.1] tracking-[-0.04em] text-white min-[360px]:text-[32px] sm:text-[44px] md:text-[52px] min-[993px]:text-[56px] xl:text-[60px]">
//               {siteInfo.heroTitle}
//             </h1>

//             <p className="mx-auto text-justify mt-5 max-w-[570px] text-[13px] font-normal leading-[1.7] tracking-[0.01em] text-[#E7ECF2] min-[360px]:text-[14px] sm:text-[15px] md:text-[16px] min-[993px]:mx-0">
//               {siteInfo.description}
//             </p>

//             <div className="mt-6 flex justify-center min-[993px]:justify-start">
//               <GradientButton
//                 href="#contact"
//                 className="px-6 py-2.5 text-[14px] min-[360px]:px-7 min-[360px]:py-3 min-[360px]:text-[16px]"
//               >
//                 Say Hello!
//               </GradientButton>
//             </div>

//             <div className="flex w-full min-w-0 justify-center overflow-hidden min-[993px]:justify-start">
//               <TechMarquee />
//             </div>

//             <div className="mx-auto mt-8 grid w-full min-w-0 max-w-[650px] grid-cols-3 overflow-hidden rounded-sm bg-[#151D26]/92 min-[993px]:mx-0">
//               <StatsCard
//                 icon={<Sparkles size={18} />}
//                 value="1 Y."
//                 label="Experience"
//               />

//               <StatsCard
//                 icon={<Code2 size={18} />}
//                 value="05+"
//                 label="Projects Completed"
//               />

//               <StatsCard
//                 icon={<ShieldCheck size={18} />}
//                 value="0"
//                 label="Happy Clients"
//                 showBorder={false}
//               />
//             </div>
//           </motion.div>

//           <div className="order-1 mx-auto flex w-full min-w-0 justify-center min-[993px]:order-2 min-[993px]:justify-end">
//             <div className="relative w-full max-w-[300px] min-[360px]:max-w-[340px] sm:max-w-[400px] md:max-w-[455px] min-[993px]:max-w-[470px] xl:max-w-[485px]">
//               <div className="pointer-events-none absolute -inset-3 rounded-[22px] bg-[#9D22F2]/14 blur-[35px] min-[360px]:-inset-4 min-[360px]:rounded-[26px] min-[360px]:blur-[45px] sm:-inset-6 sm:rounded-[30px] sm:blur-[55px]" />

//               <div className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-[#18212A] shadow-[0_32px_100px_rgba(0,0,0,0.38)] transition-all duration-500 hover:border-[#9D22F2]/35 hover:shadow-[0_32px_110px_rgba(157,34,242,0.14)] min-[360px]:rounded-[22px] sm:rounded-[28px]">
//                 <button
//                   type="button"
//                   className="absolute right-3 top-3 z-30 flex h-[36px] w-[36px] items-center justify-center rounded-full border border-white/10 bg-[#101720] text-[#9D22F2] shadow-[0_0_25px_rgba(0,0,0,0.35)] min-[360px]:right-4 min-[360px]:top-4 min-[360px]:h-[42px] min-[360px]:w-[42px] sm:right-5 sm:top-5 sm:h-[50px] sm:w-[50px]"
//                   aria-label="Profile mood"
//                 >
//                   <SmilePlus size={18} className="min-[360px]:hidden" />
//                   <SmilePlus size={22} className="hidden min-[360px]:block" />
//                   <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#9D22F2] min-[360px]:h-3 min-[360px]:w-3 sm:h-3.5 sm:w-3.5" />
//                 </button>

//                 <div className="relative bg-[#18212A]">
//                   <img
//                     src={heroImage}
//                     alt="Jawad Ahmad"
//                     className="h-[345px] w-full object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105 max-[340px]:h-[315px] min-[360px]:h-[370px] sm:h-[455px] md:h-[505px] min-[993px]:h-[500px] xl:h-[520px]"
//                   />

//                   <div className="absolute bottom-3 left-1/2 z-20 flex w-auto -translate-x-1/2 flex-col items-center gap-1.5 sm:bottom-5 sm:gap-2 min-[993px]:hidden">
//                     <BadgeCard
//                       type="experience"
//                       title="1+ Years Experience"
//                       subtitle="Creative Web Development"
//                     />

//                     <BadgeCard
//                       type="code"
//                       title="Production-Ready Code"
//                       subtitle="Clean • Scalable • Secure"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="pointer-events-none absolute bottom-0 left-[-125px] z-30 hidden w-[225px] flex-col gap-3 min-[993px]:flex xl:left-[-140px]">
//                 <BadgeCard
//                   type="experience"
//                   title="1+ Years Experience"
//                   subtitle="Creative Web Development"
//                 />

//                 <BadgeCard
//                   type="code"
//                   title="Production-Ready Code"
//                   subtitle="Clean • Scalable • Secure"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>

//       <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-[#18212A] to-transparent" />
//     </section>
//   );
// }
import { Code2, ShieldCheck, SmilePlus, Sparkles, Zap } from "lucide-react";
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import GradientButton from "../common/GradientButton";
import TechMarquee from "./TechMarquee";
import { siteInfo } from "../../data/siteInfo";
import heroImage from "../../assets/my.png";

type BadgeCardProps = {
  type: "experience" | "code";
  title: string;
  subtitle: string;
};

function BadgeCard({ type, title, subtitle }: BadgeCardProps) {
  const Icon = type === "experience" ? ShieldCheck : Zap;

  return (
    <div className="flex w-fit max-w-max items-center gap-1 rounded-lg border border-white/10 bg-[#111820]/95 px-2 py-1.5 shadow-[0_14px_35px_rgba(0,0,0,0.42)] backdrop-blur-md sm:gap-1.5 sm:px-2.5 sm:py-1.5 min-[993px]:w-full min-[993px]:max-w-none min-[993px]:gap-3 min-[993px]:rounded-xl min-[993px]:px-4 min-[993px]:py-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3A1C59] text-[#B63BFF] sm:h-7 sm:w-7 min-[993px]:h-9 min-[993px]:w-9">
        <Icon
          size={13}
          className="min-[993px]:h-4 min-[993px]:w-4"
          fill={type === "code" ? "currentColor" : "none"}
        />
      </span>

      <div className="text-left min-[993px]:min-w-0">
        <p className="whitespace-nowrap text-[8.5px] font-bold leading-tight text-white min-[360px]:text-[9px] sm:text-[10px] min-[993px]:truncate min-[993px]:text-[12px]">
          {title}
        </p>

        <p className="mt-0.5 whitespace-nowrap text-[7px] font-medium leading-tight text-[#AAB3BE] min-[360px]:text-[7.5px] sm:text-[8px] min-[993px]:truncate min-[993px]:text-[10px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function StatsCard({
  icon,
  value,
  label,
  showBorder = true,
}: {
  icon: ReactNode;
  value: string;
  label: string;
  showBorder?: boolean;
}) {
  return (
    <div
      className={`flex min-w-0 items-center justify-center gap-1 px-1 py-4 min-[401px]:gap-2 min-[401px]:px-2 sm:gap-3 sm:px-3 sm:py-5 min-[993px]:justify-start min-[993px]:px-5 ${
        showBorder ? "border-r border-white/[0.05]" : ""
      }`}
    >
      <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#202A35] text-[#9D22F2] min-[401px]:flex sm:h-10 sm:w-10">
        {icon}
      </span>

      <div className="min-w-0 text-center min-[993px]:text-left">
        <h3 className="text-[18px] font-extrabold leading-none text-white min-[360px]:text-[22px] sm:text-[26px]">
          {value}
        </h3>

        <p className="mt-1 text-[9px] font-medium leading-tight text-[#AAB3BE] min-[360px]:mt-2 min-[360px]:text-[10px] sm:text-[12px]">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#111820] pt-[92px] text-white sm:pt-[105px] min-[993px]:min-h-[108vh] min-[993px]:pt-[125px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_16%,rgba(157,34,242,0.3),transparent_32%),radial-gradient(circle_at_34%_32%,rgba(89,45,132,0.28),transparent_42%)]" />

      <div className="absolute left-0 top-[82px] h-[calc(100%-82px)] w-full bg-[linear-gradient(90deg,#111820_0%,rgba(17,24,32,0.96)_28%,rgba(39,27,53,0.7)_58%,rgba(86,32,106,0.46)_100%)]" />

      <Container className="relative z-10 overflow-hidden">
        <div className="grid min-h-[calc(100vh-82px)] w-full min-w-0 items-center gap-9 pt-12 pb-24 min-[640px]:pt-14 min-[640px]:pb-28 min-[993px]:min-h-[calc(108vh-125px)] min-[993px]:grid-cols-[minmax(0,1fr)_500px] min-[993px]:gap-12 min-[993px]:pt-16 min-[993px]:pb-32 xl:grid-cols-[minmax(0,1fr)_510px] xl:pt-20 xl:pb-36">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 mx-auto w-full min-w-0 max-w-[620px] pt-4 text-center min-[993px]:order-1 min-[993px]:mx-0 min-[993px]:pt-10 min-[993px]:text-left xl:pt-12"
          >
            <h1 className="whitespace-pre-line text-[28px] font-semibold leading-[1.1] tracking-[-0.04em] text-white min-[360px]:text-[32px] sm:text-[44px] md:text-[52px] min-[993px]:text-[56px] xl:text-[60px]">
              {siteInfo.heroTitle}
            </h1>

            <p className="mx-auto mt-5 max-w-[570px] text-justify text-[13px] font-normal leading-[1.7] tracking-[0.01em] text-[#E7ECF2] min-[360px]:text-[14px] sm:text-[15px] md:text-[16px] min-[993px]:mx-0">
              {siteInfo.description}
            </p>

            <div className="mt-6 flex justify-center min-[993px]:justify-start">
              <GradientButton
                href="#contact"
                className="px-6 py-2.5 text-[14px] min-[360px]:px-7 min-[360px]:py-3 min-[360px]:text-[16px]"
              >
                Say Hello!
              </GradientButton>
            </div>

            <div className="flex w-full min-w-0 justify-center overflow-hidden min-[993px]:justify-start">
              <TechMarquee />
            </div>

            <div className="mx-auto mt-8 grid w-full min-w-0 max-w-[650px] grid-cols-3 overflow-hidden rounded-sm bg-[#151D26]/92 min-[993px]:mx-0">
              <StatsCard
                icon={<Sparkles size={18} />}
                value="1 Y."
                label="Experience"
              />

              <StatsCard
                icon={<Code2 size={18} />}
                value="05+"
                label="Projects Completed"
              />

              <StatsCard
                icon={<ShieldCheck size={18} />}
                value="0"
                label="Happy Clients"
                showBorder={false}
              />
            </div>
          </motion.div>

          <div className="order-1 mx-auto flex w-full min-w-0 justify-center pt-3 min-[993px]:order-2 min-[993px]:justify-end min-[993px]:pt-10 xl:pt-12">
            <div className="relative w-full max-w-[300px] min-[360px]:max-w-[340px] sm:max-w-[400px] md:max-w-[455px] min-[993px]:max-w-[470px] xl:max-w-[485px]">
              <div className="pointer-events-none absolute -inset-3 rounded-[22px] bg-[#9D22F2]/14 blur-[35px] min-[360px]:-inset-4 min-[360px]:rounded-[26px] min-[360px]:blur-[45px] sm:-inset-6 sm:rounded-[30px] sm:blur-[55px]" />

              <div className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-[#18212A] shadow-[0_32px_100px_rgba(0,0,0,0.38)] transition-all duration-500 hover:border-[#9D22F2]/35 hover:shadow-[0_32px_110px_rgba(157,34,242,0.14)] min-[360px]:rounded-[22px] sm:rounded-[28px]">
                <button
                  type="button"
                  className="absolute right-3 top-3 z-30 flex h-[36px] w-[36px] items-center justify-center rounded-full border border-white/10 bg-[#101720] text-[#9D22F2] shadow-[0_0_25px_rgba(0,0,0,0.35)] min-[360px]:right-4 min-[360px]:top-4 min-[360px]:h-[42px] min-[360px]:w-[42px] sm:right-5 sm:top-5 sm:h-[50px] sm:w-[50px]"
                  aria-label="Profile mood"
                >
                  <SmilePlus size={18} className="min-[360px]:hidden" />
                  <SmilePlus size={22} className="hidden min-[360px]:block" />
                  <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#9D22F2] min-[360px]:h-3 min-[360px]:w-3 sm:h-3.5 sm:w-3.5" />
                </button>

                <div className="relative bg-[#18212A]">
                  <img
                    src={heroImage}
                    alt="Jawad Ahmad"
                    className="h-[345px] w-full object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105 max-[340px]:h-[315px] min-[360px]:h-[370px] sm:h-[455px] md:h-[505px] min-[993px]:h-[500px] xl:h-[520px]"
                  />

                  <div className="absolute bottom-3 left-1/2 z-20 flex w-auto -translate-x-1/2 flex-col items-center gap-1.5 sm:bottom-5 sm:gap-2 min-[993px]:hidden">
                    <BadgeCard
                      type="experience"
                      title="1+ Years Experience"
                      subtitle="Creative Web Development"
                    />

                    <BadgeCard
                      type="code"
                      title="Production-Ready Code"
                      subtitle="Clean • Scalable • Secure"
                    />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-0 left-[-125px] z-30 hidden w-[225px] flex-col gap-3 min-[993px]:flex xl:left-[-140px]">
                <BadgeCard
                  type="experience"
                  title="1+ Years Experience"
                  subtitle="Creative Web Development"
                />

                <BadgeCard
                  type="code"
                  title="Production-Ready Code"
                  subtitle="Clean • Scalable • Secure"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-[#18212A] to-transparent" />
    </section>
  );
}
