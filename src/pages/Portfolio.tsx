
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "BlockScience Labs Subway Map",
      description: "Led the development of a Git visualization tool that helps users understand repository changes through an intuitive subway-map interface. Built with React, Redux, and the GitHub API, this tool simplifies version control visualization for users with varying levels of Git experience.",
      tech: ["React", "Redux", "PostgreSQL", "GitHub API", "Octokit"],
      link: "https://codelabdavis.medium.com/blockscience-labs-subway-map-7b58e3b6b485",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Schedule Map",
      description: "Developed a Google Chrome extension that helps UC Davis students visualize their class locations on an interactive map, displaying travel times between classes using various transportation modes. Features include dynamic markers, real-time distance calculations, and course time conflict warnings.",
      tech: ["React", "Google Maps API", "Chrome Extension", "Distance Matrix API", "Geolocation API"],
      link: "https://codelabdavis.medium.com/schedule-map-5b59eb7ef4a1",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
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
