import React from "react";

const ResumeSection = ({ resumeFileName }) => (
  <section id="resume" className="fade-in py-24 bg-slate-50 dark:bg-slate-900">
    <div className="max-w-2xl mx-auto px-4 text-center">
      <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl p-10 shadow-xl shadow-violet-500/20">
        <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
          📄
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Resume</h3>
        <p className="text-violet-100 mb-7 leading-relaxed">
          Download the latest resume to review technical expertise, projects, achievements, and certifications.
        </p>
        <a
          href={`/${resumeFileName}`}
          download
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-white text-violet-600 hover:bg-violet-50 hover:-translate-y-1 transition-all shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/>
          </svg>
          Download Resume
        </a>
      </div>
    </div>
  </section>
);

export default ResumeSection;
