import logo from "../../assets/logo.png";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111820] text-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-8 px-5 py-14 sm:px-8 md:flex-row md:gap-6 lg:px-12 xl:px-16">
        <a
          href="#home"
          className="flex items-center gap-4 transition-opacity duration-300 hover:opacity-90"
        >
          <span className="flex h-[56px] w-[56px] items-center justify-center rounded-xl bg-gradient-to-br from-[#7C1FE8] to-[#9D22F2] shadow-[0_16px_40px_rgba(157,34,242,0.35)] sm:h-[60px] sm:w-[60px]">
            <img
              src={logo}
              alt="Dev. Jawad Logo"
              className="h-[42px] w-[42px] object-contain sm:h-[45px] sm:w-[45px]"
            />
          </span>

          <span className="text-[26px] font-extrabold tracking-[-0.04em] text-white sm:text-[30px]">
            Dev. Jawad
          </span>
        </a>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-center lg:gap-x-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-semibold text-white transition-colors duration-300 hover:text-[#9D22F2] sm:text-[16px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-center text-[15px] font-semibold text-white sm:text-[16px] md:text-right">
          Copyright © {currentYear} Dev. Jawad
        </p>
      </div>
    </footer>
  );
}
