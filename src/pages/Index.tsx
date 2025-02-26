
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
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Name Section */}
          <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
            <h1 className="text-xl font-mono">ethan he</h1>
            <p className="text-muted-foreground font-mono">software engineer</p>
          </div>

          {/* Projects Section */}
          <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono">projects</span>
              <span className={`text-xs px-2 py-1 rounded ${theme === "dark" ? "bg-[#333333]" : "bg-white"}`}>new</span>
            </div>
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
          </div>

          {/* Blog Section */}
          <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
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
          <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
            <h2 className="font-mono mb-3">about me</h2>
            <p className={`font-mono leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              passionate software engineer with experience in full-stack development, cloud architecture, and AI/ML applications.
            </p>
            <p className="font-mono mt-2">davis, california based</p>
          </div>

          {/* Experience Section */}
          <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono">experience</span>
              <span className={`text-sm font-mono ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>2+ years</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button className={`py-2 px-4 rounded font-mono text-sm ${theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"} transition-colors`}>render</button>
              <button className={`py-2 px-4 rounded font-mono text-sm ${theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"} transition-colors`}>vimbly</button>
              <button className={`py-2 px-4 rounded font-mono text-sm ${theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"} transition-colors`}>codelab</button>
              <button className={`py-2 px-4 rounded font-mono text-sm ${theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"} transition-colors`}>castle hill</button>
            </div>
          </div>

          {/* Contact Section */}
          <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
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
          <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
            <span className="font-mono block mb-3">theme</span>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setTheme("light")}
                className={`py-2 px-4 rounded font-mono text-sm transition-colors ${
                  theme === "light" 
                    ? "bg-black text-white" 
                    : "bg-white text-black hover:bg-gray-100"
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
  );
};

export default Index;
