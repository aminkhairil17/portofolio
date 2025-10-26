import React from 'react';

const Skills: React.FC = () => {
  const skills = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Boostrap', level: 88 },
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Laravel', level: 75 },
      { name: 'Express', level: 82 },
      { name: 'MongoDB', level: 78 },
      { name: 'Mysql', level: 78 },
      { name: 'PostgreSql', level: 78 },

    ],
    tools: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'proxmox', level: 85 },
      { name: 'Aapanel', level: 75 },
      { name: 'Cloudflare', level: 75 },
    ]
  };

  return (
    <section id="skills" className="min-h-screen bg-white dark:bg-gray-800 section-padding">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
              Frontend
            </h3>
            <div className="space-y-4">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-level"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
              Backend
            </h3>
            <div className="space-y-4">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-level"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
              Tools
            </h3>
            <div className="space-y-4">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-level"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;