
import { useState } from "react";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <main className="min-h-screen p-8 md:p-16 bg-background text-foreground">
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
              <button className="bg-secondary py-2 px-4 rounded font-mono text-sm">render</button>
              <button className="bg-secondary py-2 px-4 rounded font-mono text-sm">vimbly</button>
              <button className="bg-secondary py-2 px-4 rounded font-mono text-sm">codelab</button>
              <button className="bg-secondary py-2 px-4 rounded font-mono text-sm">castle hill</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground font-mono">2+ years</span>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <span className="font-mono">technical skills</span>
            <div className="flex flex-wrap gap-2">
              <span className="bg-secondary px-2 py-1 rounded text-xs font-mono">typescript</span>
              <span className="bg-secondary px-2 py-1 rounded text-xs font-mono">react</span>
              <span className="bg-secondary px-2 py-1 rounded text-xs font-mono">next.js</span>
              <span className="bg-secondary px-2 py-1 rounded text-xs font-mono">python</span>
              <span className="bg-secondary px-2 py-1 rounded text-xs font-mono">aws</span>
              <span className="bg-secondary px-2 py-1 rounded text-xs font-mono">node.js</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-mono">about me</h2>
            <p className="text-muted-foreground font-mono leading-relaxed">
              passionate software engineer with experience in full-stack development, cloud architecture, and AI/ML applications.
            </p>
            <p className="font-mono">davis, california based</p>
          </div>

          {/* Projects Section */}
          <div className="space-y-4">
            <h2 className="font-mono">featured projects</h2>
            <div className="space-y-4">
              <div className="bg-secondary p-4 rounded">
                <h3 className="font-mono mb-2">BSCI Labs Subway Map</h3>
                <p className="text-sm text-muted-foreground font-mono">
                  git visualization tool built with react.js and d3.js
                </p>
              </div>
              <div className="bg-secondary p-4 rounded">
                <h3 className="font-mono mb-2">Schedule Map</h3>
                <p className="text-sm text-muted-foreground font-mono">
                  chrome extension for UC Davis students
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h2 className="font-mono">contact me</h2>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:ethanhe0716@gmail.com" className="bg-secondary py-2 px-4 rounded font-mono text-sm hover:bg-secondary/80 transition-colors">
                email
              </a>
              <a href="https://linkedin.com/in/ethanlhe" target="_blank" rel="noopener noreferrer" className="bg-secondary py-2 px-4 rounded font-mono text-sm hover:bg-secondary/80 transition-colors">
                linkedin
              </a>
              <a href="https://github.com/ethanlhe" target="_blank" rel="noopener noreferrer" className="bg-secondary py-2 px-4 rounded font-mono text-sm hover:bg-secondary/80 transition-colors">
                github
              </a>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="space-y-4">
            <span className="font-mono">theme</span>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setTheme("light")}
                className={`py-2 px-4 rounded font-mono text-sm ${theme === 'light' ? 'bg-foreground text-background' : 'bg-secondary'}`}
              >
                light
              </button>
              <button 
                onClick={() => setTheme("dark")}
                className={`py-2 px-4 rounded font-mono text-sm ${theme === 'dark' ? 'bg-foreground text-background' : 'bg-secondary'}`}
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
