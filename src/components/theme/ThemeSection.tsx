
interface ThemeSectionProps {
  theme: "light" | "dark" | { primary: string; secondary: string; text: string };
  boxClasses: string;
  setTheme: (theme: "light" | "dark" | { primary: string; secondary: string; text: string }) => void;
}

// Predefined harmonious color schemes
const colorSchemes = [
  {
    primary: "#F8F9FA",
    secondary: "#E9ECEF",
    text: "#212529"
  },
  {
    primary: "#E9D8FD",
    secondary: "#D6BCFA",
    text: "#44337A"
  },
  {
    primary: "#E6FCF5",
    secondary: "#C3FAE8",
    text: "#087F5B"
  },
  {
    primary: "#FFF3BF",
    secondary: "#FFE066",
    text: "#744210"
  },
  {
    primary: "#EBF4FF",
    secondary: "#C3DAFE",
    text: "#3C366B"
  },
  {
    primary: "#FEEBC8",
    secondary: "#FBD38D",
    text: "#7B341E"
  }
];

export const ThemeSection = ({ theme, boxClasses, setTheme }: ThemeSectionProps) => {
  const handleRandomTheme = () => {
    const randomScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
    setTheme(randomScheme);
  };

  return (
    <div className={`${boxClasses} flex flex-col justify-between`}>
      <span className="font-mono mb-4">theme</span>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setTheme("light")}
            className={`py-3 px-6 rounded-lg font-mono text-base transition-colors text-center flex-1 ${
              theme === "light"
                ? "bg-black text-white" 
                : "bg-[#333333] text-white hover:bg-[#444444]"
            }`}
          >
            light
          </button>
          <button 
            onClick={() => setTheme("dark")}
            className={`py-3 px-6 rounded-lg font-mono text-base transition-colors text-center flex-1 ${
              theme === "dark"
                ? "bg-white text-black" 
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            dark
          </button>
        </div>
        <button
          onClick={handleRandomTheme}
          className={`py-3 px-6 rounded-lg font-mono text-base transition-colors text-center w-full ${
            typeof theme === 'object'
              ? 'bg-[var(--text-color)] text-[var(--primary-color)]'
              : 'bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:opacity-90'
          }`}
        >
          random
        </button>
      </div>
    </div>
  );
};
