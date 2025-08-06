"use client";

import { useState } from "react";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { Project } from "@/types/projects";
import { CometCard } from "./ui/comet-card";

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="py-20">
      <h1 className="heading">
        My Developer Arc{" - "}
        <span className="text-purple">Projects So Far</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item:Project) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] cursor-pointer"
            key={item.id}
            onClick={() => setSelectedProject(item)}
          >
            <CometCard
              rotateDepth={20}
              translateDepth={30}
            >
              <div className="group cursor-pointer p-4 pb-6">
    {/* Elegant Image Container */}
    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[25vh] lg:h-[35vh] mb-4">
      <div
        className="relative w-full h-full overflow-hidden lg:rounded-3xl rounded-2xl"
        style={{ backgroundColor: "#13162D" }}
      >
        <img 
          src="/bg.png" 
          alt="bgimg" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <img
        src={item.thumbnail}
        alt="cover"
        className="z-10 absolute bottom-0 w-full h-full object-cover lg:rounded-3xl rounded-2xl"
      />
    </div>

    {/* Elegant Title */}
    <h1 className="font-semibold lg:text-xl md:text-lg text-base line-clamp-1 mb-2 text-white tracking-tight">
      {item.name.toUpperCase()}
    </h1>

    {/* Clean Description */}
    <p
      className="lg:text-base md:text-sm text-xs font-light line-clamp-2 leading-relaxed mb-4 opacity-80"
      style={{
        color: "#BEC1DD",
      }}
    >
      {item.description}
    </p>

    {/* Refined Footer */}
    <div className="flex items-center justify-between mt-4 mb-2">
      {/* Elegant Tech Stack */}
      <div className="flex flex-wrap gap-1.5">
        {item.techStack.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="bg-purple/90 text-white px-2.5 py-1 rounded-full text-xs font-medium"
          >
            {tech}
          </span>
        ))}
        
        {item.techStack.length > 3 && (
          <span className="px-2.5 py-1 rounded-full text-xs bg-gray-700/30 text-gray-400 font-medium">
            +{item.techStack.length - 3}
          </span>
        )}
      </div>

      {/* Subtle Details Button */}
      <div className="flex items-center gap-2">
        <p className="text-sm text-purple font-medium">
          Details
        </p>
        <FaLocationArrow className="text-xs" color="#CBACF9" />
      </div>
    </div>
  </div>
            </CometCard>
          </div>
        ))}
      </div>

      {/* ENHANCED MODAL */}
{selectedProject && (
  <div 
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 animate-fadeIn"
    onClick={() => setSelectedProject(null)}
  >
    <div 
      className="bg-gradient-to-br from-[#0a0a0f] via-[#111222] to-[#1a1a2e] text-white p-8 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden shadow-2xl border border-purple/20 transform transition-all duration-300 ease-out animate-scaleIn custom-scrollbar"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header with gradient border */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gradient">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            {selectedProject.name}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2"></div>
        </div>
        <button
          className="group relative w-10 h-10 rounded-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-red-500 hover:to-red-600 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25"
          onClick={() => setSelectedProject(null)}
        >
          <span className="text-gray-300 group-hover:text-white text-xl font-semibold transition-colors">×</span>
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto max-h-[calc(85vh-140px)] pr-2 custom-scrollbar">
        {/* Project Image with enhanced styling */}
        <div className="relative mb-6 group">
          <img
            src={selectedProject.thumbnail}
            alt="project cover"
            className="w-full rounded-xl h-80 object-cover shadow-2xl ring-1 ring-purple/20 transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-xl"></div>
        </div>

        {/* Description with enhanced styling */}
        <div className="mb-6 p-6 bg-gradient-to-r from-gray-900/50 to-purple-900/20 rounded-xl border border-purple/10">
          <p className="text-gray-300 leading-relaxed text-lg">{selectedProject.description}</p>
        </div>

        {/* Features Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-white">Features</h3>
          </div>
          <div className="grid gap-3">
            {selectedProject.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-800/30 to-purple-800/10 rounded-lg border border-gray-700/30 hover:border-purple/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple/10"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-white">Challenges</h3>
          </div>
          <div className="grid gap-3">
            {selectedProject.challenges.map((challenge, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-800/30 to-orange-800/10 rounded-lg border border-gray-700/30 hover:border-orange/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange/10"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300 leading-relaxed">{challenge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {selectedProject.techStack.map((tech, i) => (
              <span
                key={i}
                className="group relative px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-purple/30 transition-all duration-300 hover:scale-105 cursor-default"
              >
                <span className="relative z-10">{tech}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-6 border-t border-gray-700/50">
          {selectedProject.codeLink && (
            <a
              href={selectedProject.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-purple-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple/30 hover:scale-105"
            >
              <FaGithub className="transition-transform duration-300 group-hover:rotate-12" />
              <span className="font-semibold">View Code</span>
            </a>
          )}
          {selectedProject.liveLink && selectedProject.liveLink !== "#" && (
            <a
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue/30 hover:scale-105"
            >
              <FaLocationArrow className="transition-transform duration-300 group-hover:translate-x-1" />
              <span className="font-semibold">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
)}

<style jsx>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }

  .animate-scaleIn {
    animation: scaleIn 0.3s ease-out;
  }

  .border-gradient {
    background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.3), transparent);
    height: 1px;
    border: none;
  }

  /* Custom Scrollbar */
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(147, 51, 234, 0.5) rgba(30, 30, 50, 0.3);
  }

  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(30, 30, 50, 0.3);
    border-radius: 10px;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, rgba(147, 51, 234, 0.8), rgba(59, 130, 246, 0.8));
    border-radius: 10px;
    border: 2px solid rgba(30, 30, 50, 0.3);
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, rgba(147, 51, 234, 1), rgba(59, 130, 246, 1));
  }
`}</style>
    </div>
  );
};

export default RecentProjects;
