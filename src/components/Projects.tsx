import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Live Antrian App",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      technologies: ["Node.js", "Mysql", "Express", "bootstrap"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://newantrian.rsusyifamedika.co.id.com",
    },
    {
      id: 2,
      title: "",
      description:
        "A collaborative task management application with real-time updates",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      githubUrl: "https://github.com/yourusername/taskapp",
      liveUrl: "https://yourapp.com",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts",
      technologies: ["React", "API", "Tailwind", "Chart.js"],
      githubUrl: "https://github.com/yourusername/weather",
      liveUrl: "https://yourapp.com",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts",
      technologies: ["React", "API", "Tailwind", "Chart.js"],
      githubUrl: "https://github.com/yourusername/weather",
      liveUrl: "https://yourapp.com",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 section-padding"
    >
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card group hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-xl flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Project Image
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center text-sm"
                  >
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary text-center text-sm py-2"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
