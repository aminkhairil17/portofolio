import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 section-padding"
    >
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQECJC5TjLPwAA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713083156972?e=1762992000&v=beta&t=a6x31zseaMaesbM4uLw8irNAgYgSLIdQLGLH5jDC8cM"
                alt="Profile"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m a Fullstack Developer & Data Enthusiast with 5+ years of
              experience building efficient and impactful digital solutions,
              especially in the healthcare industry. I focus on transforming
              manual workflows into automated systems that improve productivity
              and decision-making.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I enjoy solving real-world operational problems through technology
              — from creating user-friendly applications to designing
              data-driven features that deliver strong business value with
              minimal effort.
            </p>
            <div className="pt-4">
              <a 
              href="/CV.pdf" 
              download
              className="btn-secondary inline-block"
              onClick={(e) => {
                e.preventDefault();
                window.open('/CV.pdf', '_blank');
              }}
              >
              Download Resume
              </a>
            </div>
            </div>
          </div>
          </div>
        </section>
        );
      };

      export default About;
