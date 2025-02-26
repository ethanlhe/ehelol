
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="text-center space-y-6 animate-fade-up">
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
