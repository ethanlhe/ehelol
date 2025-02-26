
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
      <main className={`min-h-screen p-4 md:p-8 lg:p-16 transition-colors duration-300 ${theme === "dark" ? "bg-[#111111] text-white" : "bg-white text-black"}`}>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
            {/* Projects Section - Left Column on Desktop */}
            <div className="lg:col-span-2 order-3 lg:order-1">
              <div className="h-[135px]">
                <ProjectsSection theme={theme} boxClasses={`${boxClasses} h-full`} />
              </div>
            </div>

            {/* Main Content - Center Column */}
            <div className="lg:col-span-8 space-y-2 order-1 lg:order-2">
              {/* Top Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl mx-auto">
                <div className="h-[275px] w-[275px] justify-self-end md:justify-self-end">
                  <NameSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
                <div className="h-[275px] w-[275px] justify-self-start md:justify-self-start">
                  <AboutSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
              </div>

              {/* Middle Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="h-[135px]">
                  <BlogSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
                <div className="col-span-2 h-[135px]">
                  <ContactSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="col-span-2 h-[135px]">
                  <ExperienceSection theme={theme} boxClasses={`${boxClasses} h-full`} />
                </div>
                <div className="h-[135px]">
                  <ThemeSection theme={theme} boxClasses={`${boxClasses} h-full`} setTheme={setTheme} />
                </div>
              </div>
            </div>

            {/* Empty Right Column for Balance */}
            <div className="lg:col-span-2 order-2 lg:order-3"></div>
          </div>
        </div>
      </main>
    </TooltipProvider>
  );
};

export default Index;
