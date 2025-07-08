import React from 'react';
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

const Codelab = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <main className="min-h-screen p-8 md:p-16 bg-white dark:bg-[#111111] text-black dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-mono">codelab work</h1>
          <button 
            onClick={() => navigate('/')}
            className="py-2 px-4 rounded font-mono text-sm bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            back
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="p-6 rounded-lg bg-[#f4f4f4] dark:bg-[#222222] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <a 
              href="https://codelabdavis.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-mono block mb-2 underline hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              CodeLab Main Website
            </a>
            <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
              Main CodeLab organization website
            </p>
          </div>
          
          <div className="p-6 rounded-lg bg-[#f4f4f4] dark:bg-[#222222] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <a 
              href="https://cody.codelabdavis.com/login?callbackUrl=https%3A%2F%2Fcody.codelabdavis.com%2F" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-mono block mb-2 underline hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              Cody AI
            </a>
            <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
              CodeLab's AI assistant platform
            </p>
          </div>
          
          <div className="p-6 rounded-lg bg-[#f4f4f4] dark:bg-[#222222] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <a 
              href="https://archives.codelabdavis.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-mono block mb-2 underline hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              CodeLab Archives
            </a>
            <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
              Past workshops, files, and resources
            </p>
          </div>
          
          <div className="p-6 rounded-lg bg-[#f4f4f4] dark:bg-[#222222] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            <a 
              href="https://toolkit.codelabdavis.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-mono block mb-2 underline hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              CodeLab Toolkit
            </a>
            <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
              Learning platform for product development
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Codelab; 