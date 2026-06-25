import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../common/Container";
import GradientButton from "../common/GradientButton";
import { navLinks, siteInfo } from "../../data/siteInfo";
import logo from "../../assets/logo.png";
import ThemeToggleButton from "../common/ThemeToggleButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const sectionIds = [
      "home",
      ...navLinks.map((link) => link.href.replace("#", "")),
    ];

    const handleScroll = () => {
      let currentSection = "#home";

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const sectionTop = section.offsetTop - 120;

          if (window.scrollY >= sectionTop) {
            currentSection = `#${id}`;
          }
        }
      });

      setActiveLink(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.05] bg-[#111820]/95 backdrop-blur-xl">
      <Container>
        <nav className="flex h-[72px] items-center justify-between gap-3 min-[360px]:h-[78px] sm:h-[82px]">
          <a
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="group flex min-w-0 shrink cursor-pointer items-center gap-2 min-[360px]:gap-3"
          >
            <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-r from-purple-600 to-fuchsia-500 p-1 transition-transform duration-300 group-hover:scale-110 min-[360px]:h-[46px] min-[360px]:w-[46px] min-[360px]:rounded-[13px] sm:h-[52px] sm:w-[52px] sm:rounded-[14px] sm:p-1.5 min-[993px]:h-[55px] min-[993px]:w-[55px]">
              <img
                src={logo}
                alt="Jawad Ahmad logo"
                className="h-full w-full rounded-[8px] object-cover sm:rounded-[10px]"
              />
            </span>

            <span className="truncate text-[16px] font-semibold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#F4E7FF] min-[360px]:text-[20px] sm:text-[23px] min-[993px]:text-[29px]">
              {siteInfo.brandName}
            </span>
          </a>

          <div className="hidden items-center gap-1 overflow-visible rounded-full border border-white/10 bg-[#242B35] px-2 py-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] min-[993px]:flex min-[993px]:gap-0.5 min-[993px]:px-3 min-[993px]:py-2.5 xl:gap-1 xl:px-4">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative rounded-full px-3 py-2 text-[12px] font-semibold transition-all duration-300 hover:-translate-y-0.5 min-[1100px]:px-4 min-[1100px]:text-[13px] xl:px-5 ${
                    isActive
                      ? "bg-[#34243F] text-[#C75BFF]"
                      : "text-[#B7BEC9] hover:bg-[#323B47] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute left-1/2 top-[-12px] h-[4px] w-8 -translate-x-1/2 rounded-full bg-[#9D22F2] shadow-[0_0_14px_rgba(157,34,242,0.8)]" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="hidden shrink-0 items-center gap-4 min-[993px]:flex xl:gap-5">
            <ThemeToggleButton />

            <GradientButton
              href="#contact"
              className="rounded-full px-6 py-3 text-[14px] xl:px-8 xl:py-3.5 xl:text-[15px]"
            >
              Contact me
            </GradientButton>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-[#242B35] text-white min-[360px]:h-11 min-[360px]:w-11 min-[993px]:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {isOpen && (
          <div className="pb-4 min-[993px]:hidden sm:pb-5">
            <div className="max-h-[calc(100dvh-88px)] overflow-y-auto overscroll-contain rounded-2xl border border-white/10 bg-[#1B232D] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.35)] min-[360px]:rounded-3xl min-[360px]:p-4">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative mb-2 block rounded-2xl px-4 py-3.5 text-[15px] font-semibold transition-all duration-300 min-[360px]:px-5 min-[360px]:py-4 min-[360px]:text-base ${
                      isActive
                        ? "bg-[#34243F] text-[#C75BFF]"
                        : "text-[#C4CBD4] hover:bg-[#242B35] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-4 top-2 h-[3px] w-8 rounded-full bg-[#9D22F2] shadow-[0_0_14px_rgba(157,34,242,0.8)] min-[360px]:left-5" />
                    )}
                    {link.label}
                  </a>
                );
              })}

              <ThemeToggleButton showLabel className="mt-2" />

              <GradientButton
                href="#contact"
                className="px-6 py-3 text-[14px] xl:px-8 xl:py-3.5 xl:text-[15px]"
              >
                Contact me
              </GradientButton>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
