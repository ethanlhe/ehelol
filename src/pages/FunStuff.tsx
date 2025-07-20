import { useTheme } from "@/context/ThemeContext";
import { ParticleSection } from "@/components/particles/ParticleSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FunStuff = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const boxClasses = `p-3 rounded-lg outline outline-0 outline-black/10 dark:outline-white/10 hover:outline-[3px] hover:outline-offset-[-3px] transition-[outline-width,outline-offset] duration-75 ${
    theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"
  }`;

  return (
    <main className={`min-h-screen p-8 md:p-16 transition-colors duration-300 ${theme === "dark" ? "bg-[#111111] text-white" : "bg-white text-black"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="mb-4"
          >
            ← Back to Home
          </Button>
          <h1 className="text-4xl font-bold mb-4">Fun Stuff</h1>
          <p className="text-lg opacity-70">
            Interactive experiments and simulations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="h-80">
            <ParticleSection theme={theme} boxClasses={`${boxClasses} h-full`} />
          </div>
          
          {/* Placeholder for future fun stuff */}
          <div className={`${boxClasses} h-80 flex items-center justify-center`}>
            <div className="text-center opacity-50">
              <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
              <p className="text-sm">More interactive content</p>
            </div>
          </div>
          
          <div className={`${boxClasses} h-80 flex items-center justify-center`}>
            <div className="text-center opacity-50">
              <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
              <p className="text-sm">More interactive content</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FunStuff;