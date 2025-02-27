interface AboutSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
}

export const AboutSection = ({ theme, boxClasses }: AboutSectionProps) => {
  return (
    <div className={`${boxClasses} flex flex-col justify-between h-full`}>
      <div className="flex flex-col h-full">
        <h2 className="font-mono box-title">about me</h2>
        <div className="flex-1 flex items-center">
          <p className={`font-mono box-title leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            passionate software engineer with experience in full-stack development, cloud architecture, and AI/ML applications.
          </p>
        </div>
      </div>
      <p className="font-mono box-title">davis, california based</p>
    </div>
  );
};
