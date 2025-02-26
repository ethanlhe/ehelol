
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
        href="https://codelabdavis.medium.com/blockscience-labs-subway-map-7b58e3b6b485"
        target="_blank"
        rel="noopener noreferrer" 
        className="group space-y-2 block"
      >
        <div className="overflow-hidden rounded-lg ring-1 ring-white/10">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            alt="BlockScience Labs Subway Map"
            className="w-full h-24 object-cover transform transition-transform group-hover:scale-110"
            loading="eager"
          />
        </div>
        <div>
          <h3 className="text-sm font-mono font-medium group-hover:text-[#4AFF4A] transition-colors">Subway Map</h3>
          <p className="text-xs font-mono text-gray-600 dark:text-gray-400">Git visualization tool</p>
        </div>
      </a>
      <a 
        href="https://codelabdavis.medium.com/schedule-map-5b59eb7ef4a1"
        target="_blank"
        rel="noopener noreferrer"
        className="group space-y-2 block"
      >
        <div className="overflow-hidden rounded-lg ring-1 ring-white/10">
          <img 
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742"
            alt="Schedule Map"
            className="w-full h-24 object-cover transform transition-transform group-hover:scale-110"
            loading="eager"
          />
        </div>
        <div>
          <h3 className="text-sm font-mono font-medium group-hover:text-[#4AFF4A] transition-colors">Schedule Map</h3>
          <p className="text-xs font-mono text-gray-600 dark:text-gray-400">Class location visualizer</p>
        </div>
      </a>
    </div>
    <p className="text-xs font-mono text-center text-gray-500 dark:text-gray-400">click to view projects</p>
  </div>
);

export const ProjectsSection = ({ theme, boxClasses }: ProjectsSectionProps) => {
  const navigate = useNavigate();

  return (
    <div className={`${boxClasses} flex flex-col justify-between`}>
      <div className="flex items-center justify-between">
        <span className="font-mono">projects</span>
        <span className={`font-mono text-xs px-2 py-1 rounded-lg ${theme === "dark" ? "bg-[#333333]" : "bg-white"}`}>new</span>
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <button 
            onClick={() => navigate('/portfolio')}
            className={`w-full py-2 px-4 rounded-lg font-mono text-sm ${
              theme === "dark" 
                ? "bg-black text-white hover:bg-gray-900" 
                : "bg-black text-white hover:bg-gray-800"
            } transition-colors`}
          >
            view
          </button>
        </TooltipTrigger>
        <TooltipContent 
          side="bottom" 
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
