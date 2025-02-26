
interface BlogSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
}

export const BlogSection = ({ theme, boxClasses }: BlogSectionProps) => {
  return (
    <div className={boxClasses}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono">blog</span>
        <span className={`text-xs px-2 py-1 rounded ${theme === "dark" ? "bg-[#333333]" : "bg-white"}`}>soon</span>
      </div>
      <button 
        disabled
        className={`w-full py-2 px-4 rounded font-mono text-sm ${
          theme === "dark" ? "bg-[#333333]" : "bg-white"
        } transition-colors opacity-50 cursor-not-allowed`}
      >
        read
      </button>
    </div>
  );
};
