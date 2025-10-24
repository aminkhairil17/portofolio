import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 dark:bg-gray-900 section-padding">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400 text-lg">Your Photo</span>
            </div>
          </div>
          
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with 3+ years of experience creating 
              web applications. I love turning complex problems into simple, beautiful designs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or enjoying outdoor activities.
            </p>
            <div className="pt-4">
              <button className="btn-secondary">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;