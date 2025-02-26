
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
