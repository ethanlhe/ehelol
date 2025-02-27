interface NameSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
}

export const NameSection = ({ boxClasses }: NameSectionProps) => {
  return (
    <div className={`${boxClasses} flex flex-col justify-between h-full`}>
      <div>
        <h1 className="text-xl font-mono">ethan he</h1>
        <p className="text-muted-foreground font-mono box-title">software engineer</p>
      </div>
      <p className="font-mono text-sm">be best</p>
    </div>
  );
};
