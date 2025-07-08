import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";

interface ExperienceItemProps {
  company: string;
  description: string;
  index: number;
  link: string;
}

const ExperienceItem = ({ company, description, index, link }: ExperienceItemProps) => {
  const isBottomRow = index >= 2;
  const navigate = useNavigate();
  const isInternalLink = link.startsWith('/');

  const handleClick = (e: React.MouseEvent) => {
    if (isInternalLink) {
      e.preventDefault();
      navigate(link);
    }
  };

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <a 
          href={link}
          target={isInternalLink ? undefined : "_blank"}
          rel={isInternalLink ? undefined : "noopener noreferrer"}
          onClick={handleClick}
          className="py-1.5 px-4 rounded-lg font-mono text-sm bg-white hover:bg-gray-100 dark:bg-[#333333] dark:hover:bg-[#444444] transition-colors duration-0 block text-center"
        >
          {company}
        </a>
      </TooltipTrigger>
      <TooltipContent 
        side={isBottomRow ? "bottom" : "top"}
        className="bg-white dark:bg-[#222222] border-none max-w-[200px] z-[9999]"
        style={{ zIndex: 9999 }}
      >
        <p className="text-xs font-mono">{description}</p>
      </TooltipContent>
    </Tooltip>
  );
};

interface ExperienceSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
}

const experiences = [
  {
    company: "render",
    description: "Led development of cloud infrastructure monitoring tools and improved system reliability by 40%",
    link: "https://render.com/"
  },
  {
    company: "vimbly",
    description: "Developed booking platform features and integrated payment processing systems",
    link: "https://www.vimblygroup.com/"
  },
  {
    company: "codelab",
    description: "Built educational platform features and mentored junior developers",
    link: "/codelab"
  },
  {
    company: "castle hill",
    description: "Implemented financial data visualization tools and automated reporting systems",
    link: "https://www.castlehilltech.com/"
  }
];

export const ExperienceSection = ({ theme, boxClasses }: ExperienceSectionProps) => {
  return (
    <div className={boxClasses}>
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono box-title">experience</span>
        <span className={`text-sm font-mono ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>4+ years</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {experiences.map((exp, index) => (
          <ExperienceItem 
            key={index}
            company={exp.company}
            description={exp.description}
            link={exp.link}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};
