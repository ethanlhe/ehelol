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
      <main className={`min-h-screen p-8 md:p-16 flex items-center transition-colors duration-300 ${theme === "dark" ? "bg-[#111111] text-white" : "bg-white text-black"}`}>
        <div className="relative w-full flex justify-center">
          <div className="w-full md:w-auto space-y-1">
            {/* Mobile Layout - All sections stacked */}
            <div className="block md:hidden space-y-1 max-w-sm mx-auto">
              <div className="h-[275px]">
                <NameSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="h-[275px]">
                <AboutSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="h-[135px]">
                <ProjectsSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="h-[135px]">
                <BlogSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="h-[135px]">
                <ContactSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="h-[135px]">
                <ExperienceSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
              <div className="h-[135px]">
                <ThemeSection theme={theme} boxClasses={`${boxClasses} h-full`} setTheme={setTheme} />
              </div>
            </div>

            {/* Desktop Layout - Original asymmetric design */}
            <div className="hidden md:block relative w-full max-w-4xl" style={{ marginLeft: "160px" }}>
              {/* Top Row */}
              <div className="flex gap-1">
                <div className="h-[275px] w-[275px]">
                  <NameSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
                <div className="h-[275px] w-[275px]">
                  <AboutSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
              </div>

              {/* Middle Row - Projects, Blog and Contact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-1">
                <div className="relative md:col-span-1">
                  <div className="h-[135px] w-[275px]">
                    <BlogSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                  </div>
                  <div className="absolute left-0 top-0 -translate-x-[calc(100%+4px)] w-[275px] h-[135px]">
                    <ProjectsSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                  </div>
                </div>
                <div className="col-span-1 md:col-span-2 h-[135px] ml-1">
                  <ContactSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
              </div>

              {/* Bottom Row - Experience and Theme */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-1">
                <div className="col-span-2 h-[135px]">
                  <ExperienceSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
                <div className="h-[135px] w-[275px]">
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
