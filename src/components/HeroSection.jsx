import React from "react";

const HeroSection = ({ data }) => {
  return (
    <section
      id="hero"
      className="fade-in relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-500/20 text-violet-300 border border-violet-500/30">
          Portfolio
        </span>

        <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-4 leading-tight">
          {data.name}
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold mb-5 bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
          {data.role}
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {data.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30 hover:-translate-y-1 transition-transform"
          >
            View Projects
          </a>
          <a
            href={`/${data.resumeFileName}`}
            download
            className="px-7 py-3 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:-translate-y-1 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
