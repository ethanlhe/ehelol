
interface AboutSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
}

export const AboutSection = ({ theme, boxClasses }: AboutSectionProps) => {
  return (
    <div className={boxClasses}>
      <h2 className="font-mono mb-3">about me</h2>
      <p className={`font-mono leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
        passionate software engineer with experience in full-stack development, cloud architecture, and AI/ML applications.
      </p>
      <p className="font-mono mt-2">davis, california based</p>
    </div>
  );
};
