import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

type ThemeToggleButtonProps = {
  className?: string;
  showLabel?: boolean;
};

export default function ThemeToggleButton({
  className = "",
  showLabel = false,
}: ThemeToggleButtonProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex items-center justify-center rounded-full border border-white/10 bg-[#151D26] text-[#AAB3BE] shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-all duration-300 hover:border-[#9D22F2]/50 hover:bg-[#202A35] hover:text-white ${
        showLabel ? "h-auto w-full justify-between rounded-2xl px-4 py-3.5 text-[15px] font-semibold min-[360px]:px-5 min-[360px]:py-4 min-[360px]:text-base" : "h-11 w-11"
      } ${className}`}
    >
      {showLabel && (
        <span>{isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
      )}

      {isDark ? <Sun size={showLabel ? 20 : 19} /> : <Moon size={showLabel ? 20 : 19} />}
    </button>
  );
}
