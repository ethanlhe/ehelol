
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

  const boxClasses = `p-3 rounded-lg transition-all duration-200 hover:outline hover:outline-1 hover:outline-black/10 dark:hover:outline-white/10 ${
    theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"
  }`;

  return (
    <TooltipProvider delayDuration={0}>
      <main className={`min-h-screen p-8 md:p-16 transition-colors duration-300 ${theme === "dark" ? "bg-[#111111] text-white" : "bg-white text-black"}`}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Left Column */}
          <div className="space-y-2">
            <NameSection theme={theme} boxClasses={boxClasses} />
            <ProjectsSection theme={theme} boxClasses={boxClasses} />
            <BlogSection theme={theme} boxClasses={boxClasses} />
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            <AboutSection theme={theme} boxClasses={boxClasses} />
            <ExperienceSection theme={theme} boxClasses={boxClasses} />
            <ContactSection theme={theme} boxClasses={boxClasses} />
            <ThemeSection theme={theme} boxClasses={boxClasses} setTheme={setTheme} />
          </div>
        </div>
      </main>
    </TooltipProvider>
  );
};

export default Index;
