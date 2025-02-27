
import { toast } from "sonner";

interface ContactSectionProps {
  theme: "light" | "dark";
  boxClasses: string;
}

export const ContactSection = ({ theme, boxClasses }: ContactSectionProps) => {
  const handleEmailClick = () => {
    navigator.clipboard.writeText("ethanhe0716@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  const buttonClasses = `py-2 px-4 rounded-lg font-mono text-sm w-full text-center ${
    theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"
  } transition-colors`;

  return (
    <div className={`${boxClasses} flex flex-col justify-between`}>
      <h2 className="font-mono mb-4">contact me</h2>
      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={handleEmailClick}
          className={buttonClasses}
        >
          email
        </button>
        <a
          href="https://www.linkedin.com/in/ethanlhe/"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          linkedin
        </a>
        <a
          href="https://github.com/ethanlhe"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          github
        </a>
      </div>
    </div>
  );
};
