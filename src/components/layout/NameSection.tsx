
interface NameSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
}

export const NameSection = ({ boxClasses }: NameSectionProps) => {
  return (
    <div className={boxClasses}>
      <h1 className="text-xl font-mono">ethan he</h1>
      <p className="text-muted-foreground font-mono">software engineer</p>
    </div>
  );
};
