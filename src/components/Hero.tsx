
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Cursor follower */}
      <div
        className="pointer-events-none fixed opacity-50 blur-[100px] animate-fade-in"
        style={{
          background: "radial-gradient(circle, rgba(155, 135, 245, 0.3) 0%, transparent 70%)",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
          transition: "transform 0.15s ease-out",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="text-center space-y-6 animate-fade-up relative z-10">
        <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
          Welcome to my portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Crafting Digital
          <span className="text-primary block mt-2">Experiences</span>
        </h1>
        <p className="max-w-lg mx-auto text-accent-foreground/80 text-lg">
          A passionate developer focused on creating intuitive and engaging web experiences
        </p>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};
