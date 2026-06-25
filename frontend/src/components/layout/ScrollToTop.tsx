import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-30 right-8 z-50 flex h-15 w-15 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white shadow-lg shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1"
      aria-label="Scroll to top"
    >
      <ChevronUp size={26} strokeWidth={2.5} />
    </button>
  );
}
