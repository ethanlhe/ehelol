
const skills = [
  { name: "Frontend Development", level: "Advanced" },
  { name: "UI/UX Design", level: "Intermediate" },
  { name: "Backend Development", level: "Advanced" },
  { name: "React", level: "Expert" },
];

export const Skills = () => {
  return (
    <section className="py-20 bg-accent/30" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-6">
          Skills
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="p-6 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-accent-foreground/60">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
