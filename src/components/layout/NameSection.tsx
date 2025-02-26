
interface NameSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
}

export const NameSection = ({ boxClasses }: NameSectionProps) => {
  return (
    <div className={`${boxClasses} min-h-[200px] flex flex-col justify-between`}>
      <div>
        <h1 className="text-xl font-mono">ethan he</h1>
        <p className="text-muted-foreground font-mono">software engineer</p>
      </div>
      <p className="font-mono text-sm">be best</p>
    </div>
  );
};
