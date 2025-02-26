
import { useNavigate } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ProjectsSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
}

const ProjectPreview = () => (
  <div className="w-[300px] p-4 space-y-4 backdrop-blur-sm rounded-lg">
    <div className="grid grid-cols-2 gap-4">
      <a 
        href="https://github.com/ethanlhe/ai-chat"
        target="_blank"
        rel="noopener noreferrer" 
        className="group space-y-2 block"
      >
        <div className="overflow-hidden rounded-lg ring-1 ring-white/10">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="AI Chat Application"
            className="w-full h-24 object-cover transform transition-transform group-hover:scale-110"
            loading="eager"
          />
        </div>
        <div>
          <h3 className="text-sm font-mono font-medium group-hover:text-[#4AFF4A] transition-colors">AI Chat</h3>
          <p className="text-xs font-mono text-gray-600 dark:text-gray-400">Real-time AI conversations</p>
        </div>
      </a>
      <a 
        href="https://github.com/ethanlhe/e-commerce"
        target="_blank"
        rel="noopener noreferrer"
        className="group space-y-2 block"
      >
        <div className="overflow-hidden rounded-lg ring-1 ring-white/10">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="E-commerce Platform"
            className="w-full h-24 object-cover transform transition-transform group-hover:scale-110"
            loading="eager"
          />
        </div>
        <div>
          <h3 className="text-sm font-mono font-medium group-hover:text-[#4AFF4A] transition-colors">E-commerce</h3>
          <p className="text-xs font-mono text-gray-600 dark:text-gray-400">Modern shopping platform</p>
        </div>
      </a>
    </div>
    <p className="text-xs font-mono text-center text-gray-500 dark:text-gray-400">click to view projects</p>
  </div>
);

export const ProjectsSection = ({ theme, boxClasses }: ProjectsSectionProps) => {
  const navigate = useNavigate();

  return (
    <div className={boxClasses}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono">projects</span>
        <span className={`font-mono text-xs px-2 py-1 rounded ${theme === "dark" ? "bg-[#333333]" : "bg-white"}`}>new</span>
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <button 
            onClick={() => navigate('/portfolio')}
            className={`w-full py-2 px-4 rounded font-mono text-sm ${
              theme === "dark" 
                ? "bg-white text-black hover:bg-gray-200" 
                : "bg-black text-white hover:bg-gray-800"
            } transition-colors`}
          >
            view
          </button>
        </TooltipTrigger>
        <TooltipContent 
          side="left" 
          align="center"
          sideOffset={24}
          className="bg-white/80 dark:bg-black/80 backdrop-blur-md border-none shadow-xl animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
          style={{ zIndex: 99999 }}
        >
          <ProjectPreview />
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
