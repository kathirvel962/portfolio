import React from "react";

const SectionHeading = ({ children }) => (
  <div className="mb-10 text-center">
    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{children}</h3>
    <div className="mt-2 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500" />
  </div>
);

const AboutSection = ({ summary, objective }) => {
  return (
    <section id="about" className="fade-in py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading>About</SectionHeading>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Professional Summary", text: summary, icon: "👨‍💻" },
            { title: "Career Objective", text: objective, icon: "🎯" },
          ].map(({ title, text, icon }) => (
            <article
              key={title}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{icon}</span>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SectionHeading };
export default AboutSection;
