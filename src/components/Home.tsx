import React from "react";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center text-white section-padding pt-20"
    >
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="typewriter">Hi, I'm Muhammad Khairil Amin</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-4 opacity-90">
            Full Stack Developer & Data Analyst
          </p>
          <p className="text-lg sm:text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            Building efficient systems that drive productivity and smarter
            decisions.
          </p>
          <a href="#projects" className="btn-primary text-lg inline-block">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
