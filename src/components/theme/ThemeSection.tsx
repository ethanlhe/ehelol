
interface ThemeSectionProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  randomTheme: { primary: string; secondary: string; text: string; } | null;
  setRandomTheme: (theme: { primary: string; secondary: string; text: string; } | null) => void;
  boxClasses: string;
}

// Predefined harmonious color schemes
const colorSchemes = [
  {
    light: {
      primary: "#F8F9FA",
      secondary: "#E9ECEF",
      text: "#212529"
    },
    dark: {
      primary: "#212529",
      secondary: "#343A40",
      text: "#F8F9FA"
    }
  },
  {
    light: {
      primary: "#E9D8FD",
      secondary: "#D6BCFA",
      text: "#44337A"
    },
    dark: {
      primary: "#44337A",
      secondary: "#553C9A",
      text: "#E9D8FD"
    }
  },
  {
    light: {
      primary: "#E6FCF5",
      secondary: "#C3FAE8",
      text: "#087F5B"
    },
    dark: {
      primary: "#087F5B",
      secondary: "#0C9B72",
      text: "#E6FCF5"
    }
  },
  {
    light: {
      primary: "#FFF3BF",
      secondary: "#FFE066",
      text: "#744210"
    },
    dark: {
      primary: "#744210",
      secondary: "#975A16",
      text: "#FFF3BF"
    }
  },
  {
    light: {
      primary: "#EBF4FF",
      secondary: "#C3DAFE",
      text: "#3C366B"
    },
    dark: {
      primary: "#3C366B",
      secondary: "#4C51BF",
      text: "#EBF4FF"
    }
  }
];

export const ThemeSection = ({ isDark, setIsDark, randomTheme, setRandomTheme, boxClasses }: ThemeSectionProps) => {
  const handleRandomTheme = () => {
    // Get current theme index if it exists
    let currentIndex = -1;
    if (randomTheme) {
      currentIndex = colorSchemes.findIndex(scheme => {
        const currentVariant = isDark ? scheme.dark : scheme.light;
        return (
          currentVariant.primary === randomTheme.primary &&
          currentVariant.secondary === randomTheme.secondary &&
          currentVariant.text === randomTheme.text
        );
      });
    }

    // Get a new random index that's different from the current one
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * colorSchemes.length);
    } while (newIndex === currentIndex && colorSchemes.length > 1);

    setRandomTheme(isDark ? colorSchemes[newIndex].dark : colorSchemes[newIndex].light);
  };

  const handleThemeChange = (dark: boolean) => {
    setIsDark(dark);
    if (randomTheme) {
      // Find current color scheme and update to its dark/light variant
      const currentScheme = colorSchemes.find(scheme => {
        const currentVariant = dark ? scheme.light : scheme.dark;
        return (
          currentVariant.primary === randomTheme.primary &&
          currentVariant.secondary === randomTheme.secondary &&
          currentVariant.text === randomTheme.text
        );
      });

      if (currentScheme) {
        setRandomTheme(dark ? currentScheme.dark : currentScheme.light);
      }
    }
  };

  return (
    <div className={`${boxClasses} flex flex-col justify-between`}>
      <span className="font-mono mb-4">theme</span>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => handleThemeChange(false)}
            className={`py-3 px-6 rounded-lg font-mono text-base text-center flex-1 ${
              !isDark
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-[#333333] text-white hover:bg-[#444444] transition-colors"
            }`}
          >
            light
          </button>
          <button 
            onClick={() => handleThemeChange(true)}
            className={`py-3 px-6 rounded-lg font-mono text-base text-center flex-1 ${
              isDark
                ? "bg-white text-black dark:bg-black dark:text-white"
                : "bg-white text-black hover:bg-gray-100 transition-colors"
            }`}
          >
            dark
          </button>
        </div>
        <button
          onClick={handleRandomTheme}
          className={`py-3 px-6 rounded-lg font-mono text-base transition-all duration-300 text-center w-full 
            ${randomTheme
              ? 'bg-[var(--text-color)] text-[var(--primary-color)] hover:opacity-90 scale-100 hover:scale-[1.02]'
              : 'bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:opacity-90'
            }
            transform hover:shadow-lg active:scale-95
          `}
        >
          {randomTheme ? 'new colors' : 'random'}
        </button>
      </div>
    </div>
  );
};
