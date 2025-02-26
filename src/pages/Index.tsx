import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

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
          <h3 className="text-sm font-mono font-medium group-hover:text-blue-400 transition-colors">AI Chat</h3>
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
          <h3 className="text-sm font-mono font-medium group-hover:text-blue-400 transition-colors">E-commerce</h3>
          <p className="text-xs font-mono text-gray-600 dark:text-gray-400">Modern shopping platform</p>
        </div>
      </a>
    </div>
    <p className="text-xs font-mono text-center text-gray-500 dark:text-gray-400">click to view projects</p>
  </div>
);

const ExperienceItem = ({ company, description, index, link }: { company: string; description: string; index: number; link: string }) => {
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
        className="bg-white dark:bg-[#222222] border-none max-w-[200px]"
        style={{ 
          zIndex: 999999,
          position: 'relative'
        }}
      >
        <p className="text-xs font-mono">{description}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const navigate = useNavigate();

  useEffect(() => {
    const images = [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ];
    
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("ethanhe0716@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  const boxClasses = `p-4 rounded-lg transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${
    theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"
  }`;

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

  return (
    <TooltipProvider delayDuration={0}>
      <main className={`min-h-screen p-8 md:p-16 transition-colors duration-300 relative ${theme === "dark" ? "bg-[#111111] text-white" : "bg-white text-black"}`}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Name Section */}
            <div className={boxClasses}>
              <h1 className="text-xl font-mono">ethan he</h1>
              <p className="text-muted-foreground font-mono">software engineer</p>
            </div>

            {/* Projects Section */}
            <div className={boxClasses}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono">projects</span>
                <span className={`text-xs px-2 py-1 rounded ${theme === "dark" ? "bg-[#333333]" : "bg-white"}`}>new</span>
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
                  style={{ 
                    zIndex: 999999,
                    position: 'relative'
                  }}
                >
                  <ProjectPreview />
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Blog Section */}
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
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* About Section */}
            <div className={boxClasses}>
              <h2 className="font-mono mb-3">about me</h2>
              <p className={`font-mono leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                passionate software engineer with experience in full-stack development, cloud architecture, and AI/ML applications.
              </p>
              <p className="font-mono mt-2">davis, california based</p>
            </div>

            {/* Experience Section */}
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

            {/* Contact Section */}
            <div className={boxClasses}>
              <h2 className="font-mono mb-3">contact me</h2>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleEmailClick}
                  className={`py-2 px-4 rounded font-mono text-sm ${
                    theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"
                  } transition-colors`}
                >
                  email
                </button>
                <a
                  href="https://www.linkedin.com/in/ethanlhe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-2 px-4 rounded font-mono text-sm ${
                    theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"
                  } transition-colors`}
                >
                  linkedin
                </a>
                <a
                  href="https://github.com/ethanlhe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-2 px-4 rounded font-mono text-sm ${
                    theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"
                  } transition-colors`}
                >
                  github
                </a>
              </div>
            </div>

            {/* Theme Toggle */}
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
          </div>
        </div>
      </main>
    </TooltipProvider>
  );
};

export default Index;
