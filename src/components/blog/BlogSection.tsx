import { useNavigate } from "react-router-dom";

interface BlogSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
}

export const BlogSection = ({ theme, boxClasses }: BlogSectionProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/fun-stuff');
  };

  return (
    <div className={`${boxClasses} flex flex-col justify-between`}>
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono box-title">fun stuff</span>
      </div>
      <button 
        onClick={handleClick}
        className={`w-full py-2 px-4 rounded font-mono text-sm ${
          theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"
        } transition-colors duration-200 cursor-pointer`}
      >
        explore
      </button>
    </div>
  );
};
