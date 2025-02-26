
import { useEffect, useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NameSection } from "@/components/layout/NameSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { BlogSection } from "@/components/blog/BlogSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { ThemeSection } from "@/components/theme/ThemeSection";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

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

  const boxClasses = `p-3 rounded-lg outline outline-0 outline-black/10 dark:outline-white/10 hover:outline-[3px] hover:outline-offset-[-3px] transition-[outline-width,outline-offset] duration-75 ${
    theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"
  }`;

  return (
    <TooltipProvider delayDuration={0}>
      <main className={`min-h-screen p-8 md:p-16 flex items-center justify-center transition-colors duration-300 ${theme === "dark" ? "bg-[#111111] text-white" : "bg-white text-black"}`}>
        <div className="w-full max-w-4xl space-y-2">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="h-[200px]">
              <NameSection theme={theme} boxClasses={`${boxClasses} h-full`} />
            </div>
            <div className="h-[200px]">
              <AboutSection theme={theme} boxClasses={`${boxClasses} h-full`} />
            </div>
          </div>

          {/* Middle Row - Projects, Blog and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="relative md:col-span-1">
              <div className="h-[135px]">
                <BlogSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="absolute left-0 top-0 -translate-x-[calc(100%+8px)] w-full h-[135px] hidden md:block">
                <ProjectsSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 h-[135px]">
              <ContactSection theme={theme} boxClasses={`${boxClasses} h-full`} />
            </div>
          </div>

          {/* Bottom Row - Experience and Theme */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="col-span-2 h-[135px]">
              <ExperienceSection theme={theme} boxClasses={`${boxClasses} h-full`} />
            </div>
            <div className="h-[135px]">
              <ThemeSection theme={theme} boxClasses={`${boxClasses} h-full`} setTheme={setTheme} />
            </div>
          </div>
        </div>
      </main>
    </TooltipProvider>
  );
};

export default Index;
