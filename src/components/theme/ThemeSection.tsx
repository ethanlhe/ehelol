
interface ThemeSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
  setTheme: (theme: "light" | "dark") => void;
}

export const ThemeSection = ({ theme, boxClasses, setTheme }: ThemeSectionProps) => {
  return (
    <div className={boxClasses}>
      <span className="font-mono block mb-3">theme</span>
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setTheme("light")}
          className={`py-2 px-4 rounded font-mono text-sm transition-colors ${
            theme === "light" 
              ? "bg-black text-white" 
              : "bg-[#333333] text-white hover:bg-[#444444]"
          }`}
        >
          light
        </button>
        <button 
          onClick={() => setTheme("dark")}
          className={`py-2 px-4 rounded font-mono text-sm transition-colors ${
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
