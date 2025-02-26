
import { useEffect, useState } from "react";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main className={`min-h-screen p-8 md:p-16 transition-colors duration-300 ${theme === "dark" ? "bg-[#111111] text-white" : "bg-white text-black"}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <h1 className="text-xl font-mono">ethan he</h1>
          <p className="text-muted-foreground font-mono">software engineer</p>
          
          {/* Education Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono">education</span>
            </div>
            <div className="space-y-2">
              <p className="font-mono">UC Davis</p>
              <p className="text-sm text-muted-foreground font-mono">B.S. Computer Science '25</p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <span className="font-mono">experience</span>
            <div className="grid grid-cols-2 gap-4">
              <button className={`py-2 px-4 rounded font-mono text-sm ${theme === "dark" ? "bg-[#222222] hover:bg-[#333333]" : "bg-[#f4f4f4] hover:bg-[#e4e4e4]"} transition-colors`}>render</button>
              <button className={`py-2 px-4 rounded font-mono text-sm ${theme === "dark" ? "bg-[#222222] hover:bg-[#333333]" : "bg-[#f4f4f4] hover:bg-[#e4e4e4]"} transition-colors`}>vimbly</button>
              <button className={`py-2 px-4 rounded font-mono text-sm ${theme === "dark" ? "bg-[#222222] hover:bg-[#333333]" : "bg-[#f4f4f4] hover:bg-[#e4e4e4]"} transition-colors`}>codelab</button>
              <button className={`py-2 px-4 rounded font-mono text-sm ${theme === "dark" ? "bg-[#222222] hover:bg-[#333333]" : "bg-[#f4f4f4] hover:bg-[#e4e4e4]"} transition-colors`}>castle hill</button>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-mono ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>2+ years</span>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <span className="font-mono">technical skills</span>
            <div className="flex flex-wrap gap-2">
              {["typescript", "react", "next.js", "python", "aws", "node.js"].map((skill) => (
                <span key={skill} className={`px-2 py-1 rounded text-xs font-mono ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-mono">about me</h2>
            <p className={`font-mono leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              passionate software engineer with experience in full-stack development, cloud architecture, and AI/ML applications.
            </p>
            <p className="font-mono">davis, california based</p>
          </div>

          {/* Projects Section */}
          <div className="space-y-4">
            <h2 className="font-mono">featured projects</h2>
            <div className="space-y-4">
              <div className={`p-4 rounded ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
                <h3 className="font-mono mb-2">BSCI Labs Subway Map</h3>
                <p className={`text-sm font-mono ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  git visualization tool built with react.js and d3.js
                </p>
              </div>
              <div className={`p-4 rounded ${theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"}`}>
                <h3 className="font-mono mb-2">Schedule Map</h3>
                <p className={`text-sm font-mono ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  chrome extension for UC Davis students
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h2 className="font-mono">contact me</h2>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "email", href: "mailto:ethanhe0716@gmail.com" },
                { label: "linkedin", href: "https://linkedin.com/in/ethanlhe" },
                { label: "github", href: "https://github.com/ethanlhe" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "email" ? "_blank" : undefined}
                  rel={link.label !== "email" ? "noopener noreferrer" : undefined}
                  className={`py-2 px-4 rounded font-mono text-sm ${
                    theme === "dark" ? "bg-[#222222] hover:bg-[#333333]" : "bg-[#f4f4f4] hover:bg-[#e4e4e4]"
                  } transition-colors`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="space-y-4">
            <span className="font-mono">theme</span>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setTheme("light")}
                className={`py-2 px-4 rounded font-mono text-sm transition-colors ${
                  theme === 'light' 
                    ? 'bg-black text-white' 
                    : theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"
                }`}
              >
                light
              </button>
              <button 
                onClick={() => setTheme("dark")}
                className={`py-2 px-4 rounded font-mono text-sm transition-colors ${
                  theme === 'dark' 
                    ? 'bg-white text-black' 
                    : theme === "dark" ? "bg-[#222222]" : "bg-[#f4f4f4]"
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
