
import { useEffect } from "react";

interface ThemeSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
  setTheme: (theme: "light" | "dark") => void;
  randomTheme: { background: string; foreground: string; accent: string; } | null;
  setRandomTheme: (theme: { background: string; foreground: string; accent: string; } | null) => void;
}

// Predefined color schemes that look good together
const colorSchemes = [
  {
    background: "#F2FCE2",
    foreground: "#222222",
    accent: "#9b87f5"
  },
  {
    background: "#E5DEFF",
    foreground: "#333333",
    accent: "#7E69AB"
  },
  {
    background: "#FEF7CD",
    foreground: "#222222",
    accent: "#F97316"
  },
  {
    background: "#403E43",
    foreground: "#FFFFFF",
    accent: "#1EAEDB"
  }
];

export const ThemeSection = ({ theme, boxClasses, setTheme, randomTheme, setRandomTheme }: ThemeSectionProps) => {
  const applyRandomTheme = () => {
    const randomScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
    setRandomTheme(randomScheme);
  };

  const handleThemeChange = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    setRandomTheme(null);
  };

  useEffect(() => {
    if (randomTheme) {
      document.documentElement.style.setProperty('--random-background', randomTheme.background);
      document.documentElement.style.setProperty('--random-foreground', randomTheme.foreground);
      document.documentElement.style.setProperty('--random-accent', randomTheme.accent);
    } else {
      document.documentElement.style.removeProperty('--random-background');
      document.documentElement.style.removeProperty('--random-foreground');
      document.documentElement.style.removeProperty('--random-accent');
    }
  }, [randomTheme]);

  return (
    <div className={`${boxClasses} flex flex-col justify-between`}>
      <span className="font-mono mb-4">theme</span>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleThemeChange("light")}
            className={`py-3 px-6 rounded-lg font-mono text-base transition-colors text-center flex-1 ${
              theme === "light" && !randomTheme
                ? "bg-black text-white" 
                : "bg-[#333333] text-white hover:bg-[#444444]"
            }`}
          >
            light
          </button>
          <button 
            onClick={() => handleThemeChange("dark")}
            className={`py-3 px-6 rounded-lg font-mono text-base transition-colors text-center flex-1 ${
              theme === "dark" && !randomTheme
                ? "bg-white text-black" 
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            dark
          </button>
        </div>
        <button
          onClick={applyRandomTheme}
          className={`py-3 px-6 rounded-lg font-mono text-base transition-colors text-center w-full ${
            randomTheme 
              ? "bg-[var(--random-accent)] text-[var(--random-background)]" 
              : "bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white"
          }`}
        >
          random
        </button>
      </div>
    </div>
  );
};
