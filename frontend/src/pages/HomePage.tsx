import FloatingChatButton from "../components/layout/FloatingChatButton";
import Navbar from "../components/layout/Navbar";
import ScrollToTop from "../components/layout/ScrollToTop";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import FooterSection from "../components/sections/FooterSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <FooterSection />
      </main>

      <ScrollToTop />
      <FloatingChatButton />
    </>
  );
}
