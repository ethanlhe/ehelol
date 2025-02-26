
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

  return (
    <div className={boxClasses}>
      <h2 className="font-mono mb-3">contact me</h2>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleEmailClick}
          className={`py-2 px-4 rounded font-mono text-sm ${
            theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"
          } transition-colors`}
        >
          email
        </button>
        <a
          href="https://www.linkedin.com/in/ethanlhe/"
          target="_blank"
          rel="noopener noreferrer"
          className={`py-2 px-4 rounded font-mono text-sm ${
            theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"
          } transition-colors`}
        >
          linkedin
        </a>
        <a
          href="https://github.com/ethanlhe"
          target="_blank"
          rel="noopener noreferrer"
          className={`py-2 px-4 rounded font-mono text-sm ${
            theme === "dark" ? "bg-[#333333] hover:bg-[#444444]" : "bg-white hover:bg-gray-100"
          } transition-colors`}
        >
          github
        </a>
      </div>
    </div>
  );
};
