
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "AI Chat Application",
      description: "A real-time chat application powered by OpenAI's GPT-3, built with React and Node.js",
      tech: ["React", "Node.js", "OpenAI", "WebSocket"],
      link: "https://github.com/ethanlhe",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with product management and payment integration",
      tech: ["React", "TypeScript", "Stripe", "MongoDB"],
      link: "https://github.com/ethanlhe",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates and team features",
      tech: ["React", "Firebase", "Material-UI", "Redux"],
      link: "https://github.com/ethanlhe",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  return (
    <main className="min-h-screen p-8 md:p-16 bg-white dark:bg-[#111111] text-black dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-mono">projects</h1>
          <button 
            onClick={() => navigate('/')}
            className="py-2 px-4 rounded font-mono text-sm bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            back
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-[#f4f4f4] dark:bg-[#222222] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-mono mb-3">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs px-2 py-1 rounded bg-white dark:bg-[#333333] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 rounded font-mono text-sm bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                view project
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
