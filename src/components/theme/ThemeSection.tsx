interface ThemeSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
  setTheme: (theme: "light" | "dark") => void;
}

export const ThemeSection = ({ theme, boxClasses, setTheme }: ThemeSectionProps) => {
  return (
    <div className={`${boxClasses} flex flex-col justify-between pb-4`}>
      <span className="font-mono box-title mb-4">theme</span>
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setTheme("light")}
          className={`py-3 px-6 rounded-lg font-mono box-title text-base transition-colors text-center flex-1 ${
            theme === "light" 
              ? "bg-black text-white" 
              : "bg-[#333333] text-white hover:bg-[#444444]"
          }`}
        >
          light
        </button>
        <button 
          onClick={() => setTheme("dark")}
          className={`py-3 px-6 rounded-lg font-mono box-title text-base transition-colors text-center flex-1 ${
            theme === "dark" 
              ? "bg-white text-black" 
              : "bg-white text-black hover:bg-gray-100"
          }`}
        >
          dark
        </button>
      </div>
    </div>
  );
};
