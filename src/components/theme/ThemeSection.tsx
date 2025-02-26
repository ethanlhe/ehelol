
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
    // Get current theme index if it exists
    let currentIndex = -1;
    if (typeof theme === 'object') {
      currentIndex = colorSchemes.findIndex(
        scheme => 
          scheme.primary === theme.primary && 
          scheme.secondary === theme.secondary && 
          scheme.text === theme.text
      );
    }

    // Get a new random index that's different from the current one
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * colorSchemes.length);
    } while (newIndex === currentIndex && colorSchemes.length > 1);

    setTheme(colorSchemes[newIndex]);
  };

  const getButtonStyle = (buttonTheme: "light" | "dark") => {
    const isSelected = theme === buttonTheme;
    if (buttonTheme === "light") {
      return isSelected 
        ? "bg-black text-white dark:bg-white dark:text-black"
        : "bg-[#333333] text-white hover:bg-[#444444] transition-colors";
    }
    return isSelected
      ? "bg-white text-black dark:bg-black dark:text-white"
      : "bg-white text-black hover:bg-gray-100 transition-colors";
  };

  return (
    <div className={`${boxClasses} flex flex-col justify-between`}>
      <span className="font-mono mb-4">theme</span>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setTheme("light")}
            className={`py-3 px-6 rounded-lg font-mono text-base text-center flex-1 ${getButtonStyle("light")}`}
          >
            light
          </button>
          <button 
            onClick={() => setTheme("dark")}
            className={`py-3 px-6 rounded-lg font-mono text-base text-center flex-1 ${getButtonStyle("dark")}`}
          >
            dark
          </button>
        </div>
        <button
          onClick={handleRandomTheme}
          className={`py-3 px-6 rounded-lg font-mono text-base transition-all duration-300 text-center w-full 
            ${typeof theme === 'object'
              ? 'bg-[var(--text-color)] text-[var(--primary-color)] hover:opacity-90 scale-100 hover:scale-[1.02]'
              : 'bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:opacity-90'
            }
            transform hover:shadow-lg active:scale-95
          `}
        >
          {typeof theme === 'object' ? 'new colors' : 'random'}
        </button>
      </div>
    </div>
  );
};
