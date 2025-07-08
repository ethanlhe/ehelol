
import { useEffect } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useTheme } from "@/context/ThemeContext";
import { NameSection } from "@/components/layout/NameSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { BlogSection } from "@/components/blog/BlogSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { ThemeSection } from "@/components/theme/ThemeSection";

const Index = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const images = [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ];
    
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const boxClasses = `p-3 rounded-lg outline outline-0 outline-black/10 dark:outline-white/10 hover:outline-[3px] hover:outline-offset-[-3px] transition-[outline-width,outline-offset] duration-75 ${
    theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"
  }`;

  return (
    <TooltipProvider delayDuration={0}>
      <main className={`min-h-screen p-8 md:p-16 flex items-center transition-colors duration-300 ${theme === "dark" ? "bg-[#111111] text-white" : "bg-white text-black"}`}>
        <div className="relative w-full flex justify-center">
          <div className="w-full md:w-auto space-y-1">
            {/* Mobile Layout - All sections stacked */}
            <div className="block md:hidden space-y-1 max-w-sm mx-auto">
              <div className="h-[17.2rem]">
                <NameSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="h-[17.2rem]">
                <AboutSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="h-[8.5rem]">
                <ProjectsSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="h-[8.5rem]">
                <BlogSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="h-[8.5rem]">
                <ContactSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="h-[8.5rem]">
                <ExperienceSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="h-[8.5rem]">
                <ThemeSection theme={theme} boxClasses={`${boxClasses} h-full`} setTheme={setTheme} />
              </div>
            </div>

            {/* Desktop Layout - Original asymmetric design */}
            <div className="hidden md:block relative w-full max-w-[64rem]" style={{ marginLeft: "17.45rem" }}>
              {/* Top Row */}
              <div className="flex gap-1">
                <div className="h-[17.2rem] w-[17.2rem]">
                  <NameSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
                <div className="h-[17.2rem] w-[17.2rem]">
                  <AboutSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
              </div>

              {/* Middle Row - Projects, Blog and Contact */}
              <div className="mt-1 flex">
                <div className="relative">
                  <div className="h-[8.5rem] w-[17.2rem]">
                    <BlogSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                  </div>
                  <div className="absolute left-0 top-0 -translate-x-[calc(100%+0.25rem)] w-[17.2rem] h-[8.5rem]">
                    <ProjectsSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                  </div>
                </div>
                <div className="ml-1 w-[34.4rem] h-[8.5rem]">
                  <ContactSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
              </div>

              {/* Bottom Row - Experience and Theme */}
              <div className="mt-1 flex gap-1">
                <div className="w-[34.4rem] h-[8.5rem]">
                  <ExperienceSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
                <div className="h-[8.5rem] w-[17.2rem]">
                  <ThemeSection theme={theme} boxClasses={`${boxClasses} h-full`} setTheme={setTheme} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </TooltipProvider>
  );
};

export default Index;
