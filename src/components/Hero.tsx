export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4"
    >
      <h2 className="text-5xl font-extrabold text-gray-800">
        Hi, Saya <span className="text-blue-600">Khairil</span>
      </h2>
      <p className="text-lg text-gray-600 mt-4 max-w-xl">
        Fullstack Developer yang berpengalaman membangun sistem rumah sakit,
        integrasi API, dan aplikasi internal dengan teknologi modern.
      </p>

      <div className="mt-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Lihat Project Saya
        </a>
      </div>
    </section>
  );
}