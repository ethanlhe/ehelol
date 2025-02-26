
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const navigate = useNavigate();

  useEffect(() => {
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

  return (
    <main className={`min-h-screen p-8 md:p-16 transition-colors duration-300 ${theme === "dark" ? "bg-[#111111] text-white" : "bg-white text-black"}`}>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className={`p-6 rounded-lg ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
          <h1 className="text-xl font-mono">ethan he</h1>
          <p className="text-muted-foreground font-mono">software engineer</p>
        </div>

        {/* About Me Section */}
        <div className={`p-6 rounded-lg ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
          <h2 className="font-mono">about me</h2>
          <p className={`font-mono leading-relaxed mt-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            passionate software engineer with experience in full-stack development, cloud architecture, and AI/ML applications.
          </p>
          <p className="font-mono mt-2">davis, california based</p>
        </div>

        {/* Projects Section */}
        <div className={`p-6 rounded-lg ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
          <div className="flex items-center justify-between">
            <span className="font-mono">projects</span>
            <span className={`text-xs px-2 py-1 rounded ${theme === "dark" ? "bg-[#333333]" : "bg-white"}`}>new</span>
          </div>
          <button 
            onClick={() => navigate('/portfolio')}
            className={`w-full py-2 px-4 rounded font-mono text-sm mt-4 ${
              theme === "dark" 
                ? "bg-white text-black hover:bg-gray-200" 
                : "bg-black text-white hover:bg-gray-800"
            } transition-colors`}
          >
            view
          </button>
        </div>

        {/* Grouped Sections */}
        <div className={`p-6 rounded-lg ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
          {/* Blog Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono">blog</span>
              <span className={`text-xs px-2 py-1 rounded ${theme === "dark" ? "bg-[#333333]" : "bg-white"}`}>soon</span>
            </div>
            <button 
              className={`w-full py-2 px-4 rounded font-mono text-sm ${
                theme === "dark" ? "bg-[#333333]" : "bg-white"
              } transition-colors opacity-50 cursor-not-allowed`}
            >
              read
            </button>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h2 className="font-mono mb-4">contact me</h2>
            <div className="flex flex-wrap gap-4">
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

          {/* Experience Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono">experience</span>
              <span className={`text-sm font-mono ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>2+ years</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className={`py-2 px-4 rounded font-mono text-sm ${theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"} transition-colors`}>render</button>
              <button className={`py-2 px-4 rounded font-mono text-sm ${theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"} transition-colors`}>vimbly</button>
              <button className={`py-2 px-4 rounded font-mono text-sm ${theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"} transition-colors`}>codelab</button>
              <button className={`py-2 px-4 rounded font-mono text-sm ${theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"} transition-colors`}>castle hill</button>
            </div>
          </div>

          {/* Theme Toggle */}
          <div>
            <span className="font-mono block mb-4">theme</span>
            <div className="flex items-center gap-4">
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
                    : "bg-[#333333] text-white hover:bg-[#444444]"
                }`}
              >
                dark
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
