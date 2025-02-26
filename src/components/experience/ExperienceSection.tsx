
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface ExperienceItemProps {
  company: string;
  description: string;
  index: number;
  link: string;
}

const ExperienceItem = ({ company, description, index, link }: ExperienceItemProps) => {
  const isBottomRow = index >= 2;

  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 rounded font-mono text-sm bg-white hover:bg-gray-100 dark:bg-[#333333] dark:hover:bg-[#444444] transition-colors block text-center"
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
    link: "https://www.codelabdavis.com/"
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
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono">experience</span>
        <span className={`text-sm font-mono ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>2+ years</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
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
