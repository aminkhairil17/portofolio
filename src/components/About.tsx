import React, { useState } from "react";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "about" | "experience" | "education" | "skills"
  >("about");

  const experienceData = [
    {
      id: 1,
      title: "IT Staff - Programmer Corporate",
      company: "PT. SYIFA GLOBAL GROUP - Banjarbaru, Indonesia",
      period: "Oktober 2024 – saat ini",
      description:
        "Mengelola Aplikasi Corporate dan anak perusahaan, merancang Sistem ERP, dan membangun infrastruktur system yang ada di Group dan unit bisnis.",
      technologies: [
        "ERP System",
        "System Architecture",
        "Corporate Applications",
      ],
    },
    {
      id: 2,
      title: "Tenaga Ahli SIMRS",
      company: "RSK BEDAH SIAGA BANJARMASIN - Banjarmasin, Indonesia",
      period: "Agustus 2024 – saat ini",
      description:
        "Mempersiapkan dan migrasi database untuk implementasi SIMGOS 2 RS, mengintegrasikan dengan Satu Sehat dan aplikasi BPJS Kesehatan (vclaim, mobile JKN), serta melakukan backup database.",
      technologies: [
        "SIMGOS 2",
        "Database Migration",
        "BPJS Integration",
        "Satu Sehat",
      ],
    },
    {
      id: 3,
      title: "Tenaga Ahli SIMRS",
      company: "RS IBU & ANAK PARADISE - Tanah Bumbu, Indonesia",
      period: "Agustus 2024 – saat ini",
      description:
        "Mempersiapkan dan migrasi database untuk implementasi SIMGOS 2 RS, mengintegrasikan dengan Satu Sehat dan aplikasi BPJS Kesehatan.",
      technologies: ["SIMGOS 2", "System Integration", "Healthcare Systems"],
    },
    {
      id: 4,
      title: "IT Programmer",
      company: "RSU SYIFA MEDIKA - Banjarbaru, Indonesia",
      period: "Februari 2021 – Oktober 2024",
      description:
        "Mengembangkan dan mengelola sistem kepegawaian, SIMRS, integrasi dengan KEMENKES dan BPJS, membuat live antrian poli klinik dengan Express.js, serta mengelola database dan laporan untuk manajemen rumah sakit.",
      technologies: [
        "SIMRS",
        "Express.js",
        "BPJS Integration",
        "KEMENKES",
        "Database Management",
      ],
    },
    {
      id: 5,
      title: "Tenaga Ahli SIMRS",
      company: "RSUD KH MANSYUR - Tanah Laut, Indonesia",
      period: "Agustus 2022 – Desember 2023",
      description:
        "Mempersiapkan dan mengoperasionalkan Sistem Informasi Manajemen Rumah Sakit, serta melakukan pembinaan kepada TIM IT Rumah Sakit.",
      technologies: ["SIMRS", "IT Training", "System Implementation"],
    },
  ];

  const educationData = [
    {
      id: 1,
      degree: "S1 Teknik Informatika",
      school: "Universitas Muhammadiyah Surakarta",
      period: "2016 - 2020",
      description:
        "Lulus dengan IPK 3.37, fokus pada pengembangan software engineering, sistem informasi, dan teknologi web.",
      achievements: ["IPK: 3.37/4.00", "Lulus tepat waktu"],
    },
  ];

  const skillsData = {
    technical: [
      "Node.js",
      "Express.js",
      "Laravel",
      "CodeIgniter",
      "MySQL",
      "SQL",
      "Proxmox",
      "Linux System Administration",
      "Database Management",
    ],
    professional: [
      "Web Programming",
      "System Integration",
      "Debugging",
      "Problem Solving",
      "Critical Thinking",
      "Teamwork",
      "Project Management",
    ],
    healthcare: [
      "SIMRS Development",
      "BPJS Integration",
      "KEMENKES Integration",
      "Satu Sehat",
      "Healthcare Systems",
      "ERP Systems",
    ],
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 section-padding"
    >
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My Journey
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("about")}
            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
              activeTab === "about"
                ? "bg-blue-600 text-white shadow-lg transform -translate-y-1"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
              activeTab === "experience"
                ? "bg-blue-600 text-white shadow-lg transform -translate-y-1"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
              activeTab === "education"
                ? "bg-blue-600 text-white shadow-lg transform -translate-y-1"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
              activeTab === "skills"
                ? "bg-blue-600 text-white shadow-lg transform -translate-y-1"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            Skills
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* About Tab */}
          {activeTab === "about" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 flex items-center justify-center shadow-2xl">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D5603AQECJC5TjLPwAA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713083156972?e=1762992000&v=beta&t=a6x31zseaMaesbM4uLw8irNAgYgSLIdQLGLH5jDC8cM"
                      alt="Muhammad Khairil Amin"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  {/* Online Indicator */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                </div>
              </div>

              {/* About Text */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  IT Programmer & Data Analyst
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Seorang profesional{" "}
                  <strong>IT Programmer dan Data Analyst</strong> dengan
                  pengalaman
                  <strong> lebih dari 4 tahun</strong> dalam pengembangan dan
                  manajemen sistem informasi di sektor kesehatan, khususnya{" "}
                  <strong>SIMRS</strong>.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Memiliki keahlian dalam integrasi aplikasi dengan berbagai
                  platform pemerintah
                  <strong> (KEMENKES, BPJS)</strong>, pengembangan sistem{" "}
                  <strong>ERP</strong>, dan implementasi teknologi berbasis{" "}
                  <strong>Node.js (Express.js)</strong> untuk kebutuhan
                  operasional rumah sakit.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Menguasai virtualisasi dengan <strong>Proxmox</strong>,
                  memahami sistem operasi berbasis
                  <strong> Linux</strong>, dan mahir dalam menggunakan framework
                  seperti
                  <strong> CodeIgniter dan Laravel</strong> untuk pengembangan
                  aplikasi.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div className="text-2xl font-bold text-blue-600">4+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                    <div className="text-2xl font-bold text-blue-600">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Healthcare Systems
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="/CV.pdf"
                    download
                    className="btn-secondary inline-block"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("/CV.pdf", "_blank");
                    }}
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="space-y-6 animate-fade-in">
              {experienceData.map((exp, index) => (
                <div
                  key={exp.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Timeline Indicator for Desktop */}
                    <div className="hidden lg:flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow"></div>
                      {index < experienceData.length - 1 && (
                        <div className="w-0.5 h-full bg-gray-300 dark:bg-gray-600 mt-2"></div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="animate-fade-in">
              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-green-600 dark:text-green-400 font-semibold text-lg mt-2">
                            {edu.school}
                          </p>
                        </div>
                        <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-medium text-sm">
                          {edu.period}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-6">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      {edu.achievements && (
                        <div className="mt-6">
                          <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4 text-lg">
                            📊 Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {edu.achievements.map(
                              (achievement, achievementIndex) => (
                                <li
                                  key={achievementIndex}
                                  className="flex items-center text-gray-600 dark:text-gray-400"
                                >
                                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                  {achievement}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Technical Skills */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.technical.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-lg border border-blue-200 dark:border-blue-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Healthcare Systems */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    Healthcare Systems
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.healthcare.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-lg border border-green-200 dark:border-green-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Professional Skills */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                    Professional Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillsData.professional.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-lg border border-purple-200 dark:border-purple-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
