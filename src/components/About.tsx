
export const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
          About Me
        </span>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Turning ideas into reality through code
          </h2>
          <p className="text-accent-foreground/80 leading-relaxed">
            With a keen eye for design and a love for clean code, I specialize in creating modern web applications that not only look beautiful but also perform exceptionally well. My approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
};
