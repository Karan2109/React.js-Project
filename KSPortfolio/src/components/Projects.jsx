import React from "react";
import { PROJECTS } from "../index"; // Assumes you have your project data in a separate constants file

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-12 px-4 md:px-12">
      <h2 className="text-4xl my-20 text-center">Projects</h2>

      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row mb-16 gap-6 md:gap-10"
        >
          {/* Image: 30% on medium+ screens */}
          <div className="md:w-[30%] w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Project Details: 70% on medium+ screens */}
          <div className="md:w-[70%] w-full">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-neutral-300 mt-2">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-purple-900 text-purple-200 text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 flex gap-4 flex-wrap">
              <a
                href={project.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm transition"
              >
                View Project
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                // className="border border-purple-500 text-purple-400 hover:bg-purple-800 px-4 py-2 rounded-md text-sm transition"
                className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-md text-sm transition"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
