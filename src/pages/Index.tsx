
import { useState } from "react";

const Index = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <main className="min-h-screen p-8 md:p-16 bg-background text-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <h1 className="text-xl font-mono">maksim anisimov</h1>
          <p className="text-muted-foreground font-mono">be better than perfect</p>
          
          {/* Portfolio Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono">portfolio</span>
              <span className="text-xs bg-secondary px-2 py-1 rounded">new</span>
            </div>
            <button className="w-full bg-foreground text-background font-mono py-3 px-6 rounded hover:opacity-90 transition-opacity">
              view
            </button>
          </div>

          {/* Blog Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono">blog</span>
              <span className="text-xs text-muted-foreground font-mono">soon</span>
            </div>
            <button className="w-full bg-secondary text-secondary-foreground font-mono py-3 px-6 rounded opacity-50 cursor-not-allowed">
              read
            </button>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <span className="font-mono">experience</span>
            <div className="grid grid-cols-3 gap-4">
              <button className="bg-secondary py-2 px-4 rounded font-mono text-sm">havas</button>
              <button className="bg-secondary py-2 px-4 rounded font-mono text-sm">ida</button>
              <button className="bg-secondary py-2 px-4 rounded font-mono text-sm">fam</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground font-mono">4+ years</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-mono">about me</h2>
            <p className="text-muted-foreground font-mono leading-relaxed">
              future focused designer, specialized in product design, brand identity and workflows.
            </p>
            <p className="font-mono">los angeles based</p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h2 className="font-mono">contact me</h2>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:email@example.com" className="bg-secondary py-2 px-4 rounded font-mono text-sm hover:bg-secondary/80 transition-colors">
                email
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-secondary py-2 px-4 rounded font-mono text-sm hover:bg-secondary/80 transition-colors">
                linkedin
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-secondary py-2 px-4 rounded font-mono text-sm hover:bg-secondary/80 transition-colors">
                inst
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
