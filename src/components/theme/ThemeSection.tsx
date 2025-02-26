
import { Dice1Icon, RotateCcwIcon } from "lucide-react";

interface ThemeSectionProps {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  randomTheme: { primary: string; secondary: string; text: string; } | null;
  setRandomTheme: (theme: { primary: string; secondary: string; text: string; } | null) => void;
  boxClasses: string;
}

// Predefined color schemes using HSL for better color relationships
const colorSchemes = [
  {
    light: {
      primary: "hsl(210, 20%, 98%)",
      secondary: "hsl(210, 20%, 93%)",
      text: "hsl(210, 20%, 15%)"
    },
    dark: {
      primary: "hsl(210, 20%, 15%)",
      secondary: "hsl(210, 20%, 20%)",
      text: "hsl(210, 20%, 98%)"
    }
  },
  {
    light: {
      primary: "hsl(280, 100%, 95%)",
      secondary: "hsl(280, 100%, 90%)",
      text: "hsl(280, 60%, 25%)"
    },
    dark: {
      primary: "hsl(280, 60%, 25%)",
      secondary: "hsl(280, 60%, 30%)",
      text: "hsl(280, 100%, 95%)"
    }
  },
  {
    light: {
      primary: "hsl(160, 80%, 95%)",
      secondary: "hsl(160, 80%, 90%)",
      text: "hsl(160, 80%, 20%)"
    },
    dark: {
      primary: "hsl(160, 80%, 20%)",
      secondary: "hsl(160, 80%, 25%)",
      text: "hsl(160, 80%, 95%)"
    }
  },
  {
    light: {
      primary: "hsl(45, 100%, 95%)",
      secondary: "hsl(45, 100%, 90%)",
      text: "hsl(45, 100%, 20%)"
    },
    dark: {
      primary: "hsl(45, 100%, 20%)",
      secondary: "hsl(45, 100%, 25%)",
      text: "hsl(45, 100%, 95%)"
    }
  },
  {
    light: {
      primary: "hsl(220, 100%, 95%)",
      secondary: "hsl(220, 100%, 90%)",
      text: "hsl(220, 100%, 20%)"
    },
    dark: {
      primary: "hsl(220, 100%, 20%)",
      secondary: "hsl(220, 100%, 25%)",
      text: "hsl(220, 100%, 95%)"
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

  const handleReset = () => {
    setRandomTheme(null);
  };

  return (
    <div className={`${boxClasses} flex flex-col`}>
      <div className="flex flex-col h-full">
        <span className="font-mono">theme</span>
        <div className="flex-grow flex flex-col justify-between mt-2">
          <div className="flex items-center justify-end mb-4">
            <div className="flex items-center gap-2">
              {randomTheme && (
                <button
                  onClick={handleReset}
                  className="p-2 rounded-lg transition-all duration-150
                    bg-[var(--text-color)] text-[var(--primary-color)] hover:opacity-90
                    transform hover:scale-[1.02] active:scale-95"
                  title="Reset to default theme"
                >
                  <RotateCcwIcon className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={handleRandomTheme}
                className={`p-2 rounded-lg transition-all duration-150 transform hover:scale-[1.02] active:scale-95 ${
                  randomTheme
                    ? 'bg-[var(--text-color)] text-[var(--primary-color)] hover:opacity-90'
                    : 'bg-gradient-to-r from-[#9b87f5] to-[#D946EF] text-white hover:opacity-90'
                }`}
                title="Random theme"
              >
                <Dice1Icon className="w-4 h-4" />
              </button>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};
