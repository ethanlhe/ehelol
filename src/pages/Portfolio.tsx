
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";
import blockscienceImg from '../../public/images/blockscience.png';
import scheduleMapImg from '../../public/images/schedulemap.png';
import renderImg from '../../public/images/render.png';
import espressoImg from '../../public/images/espresso.png';
import parserPalImg from '../../public/images/parserpal.png';
import redditImg from '../../public/images/reddit.png';

const Portfolio = () => {
  const navigate = useNavigate();
  const { theme } = useTheme(); 
  
  const projects = [
    {
      title: "Reddit MLB Scoreboards",
      description: "Designed and shipped a live MLB scoreboard for Reddit’s r/MLB using Devvit and SportsRadar, enabling real-time scores, stats, and interactive features for millions of fans. Built a drag-and-drop moderator dashboard and tackled real-time data, platform constraints, and community-driven UX.",
      tech: ["TypeScript", "Devvit", "SportsRadar", "Next.js", "Redis", "Websockets"],
      link: "https://codelabdavis.medium.com/reddit-1f13d47def2f", // Replace with actual Medium article link
      image: redditImg
    },
    {
      title: "Render Dev Tools",
      description: "Built a scalable chatbot frontend with Next.js and FastAPI for session management. Developed a VS Code extension with real-time log streaming via WebSockets, enhancing debugging efficiency. Contributed to an AI chatbot using RAG with Postgraphile and PG Vector to streamline user onboarding.",
      tech: ["React", "Next.js", "PostgreSQL", "FastAPI", "WebSockets", "PG Vector"],
      link: "https://codelabdavis.medium.com/render-39a27b197593",
      image: renderImg
    },
    {
      title: "Espresso",
      description: "Mentored the development of an interactive learning platform that blends Quizlet’s simplicity with Anki’s spaced repetition system. Built with Next.js and Express.js, it features customizable study decks, progress tracking, and collaborative sharing to enhance student learning.",
      tech: ["Next.js", "React", "Express.js", "PostgreSQL", "TypeScript"],
      link: "https://codelabdavis.medium.com/espresso-7b58e3b6b485",
      image: espressoImg
    },
    {
      title: "BlockScience Labs Subway Map",
      description: "Led the development of a Git visualization tool that helps users understand repository changes through an intuitive subway-map interface. Built with React, Redux, and the GitHub API, this tool simplifies version control visualization for users with varying levels of Git experience. Still used by 100+ developers.",
      tech: ["React", "Docker", "Redux", "PostgreSQL", "GitHub API", "Octokit"],
      link: "https://codelabdavis.medium.com/blockscience-labs-subway-map-7b58e3b6b485",
      image: blockscienceImg
    },
    {
      title: "ParserPal",
      description: "Guided the team in building a resume parsing tool designed to help students optimize their resumes with AI-generated feedback. Using React and Express.js, the platform extracts key information, evaluates ATS compatibility, and offers content improvement suggestions.",
      tech: ["React", "Express.js", "TypeScript", "MongoDB", "ChatGPT API"],
      link: "https://codelabdavis.medium.com/parserpal-5b59eb7ef4a1",
      image: parserPalImg
    },
    {
      title: "Schedule Map",
      description: "Developed a Google Chrome extension that helps UC Davis students visualize their class locations on an interactive map, displaying travel times between classes using various transportation modes. Features include dynamic markers, real-time distance calculations, and course time conflict warnings.",
      tech: ["React", "Google Maps API", "Chrome Extension", "Distance Matrix API", "Geolocation API"],
      link: "https://codelabdavis.medium.com/schedule-map-5b59eb7ef4a1",
      image: scheduleMapImg
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
