import React from "react";
import { SectionHeading } from "./AboutSection";

const groupConfig = {
  Languages:   { icon: "⌨️", color: "from-violet-500 to-purple-600" },
  Technologies:{ icon: "🛠️", color: "from-indigo-500 to-blue-600" },
  Tools:       { icon: "🔧", color: "from-cyan-500 to-teal-600" },
  "Core Concepts":{ icon: "🧠", color: "from-emerald-500 to-green-600" },
};

const SkillGroup = ({ title, items }) => {
  const { icon, color } = groupConfig[title] || { icon: "✦", color: "from-violet-500 to-indigo-500" };
  return (
    <article className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className={`px-5 py-3 bg-gradient-to-r ${color} flex items-center gap-2`}>
        <span className="text-lg">{icon}</span>
        <h4 className="font-semibold text-white">{title}</h4>
      </div>
      <div className="p-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
};

const SkillsSection = ({ skills }) => (
  <section id="skills" className="fade-in py-24 bg-white dark:bg-slate-950">
    <div className="max-w-6xl mx-auto px-4">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <SkillGroup title="Languages"     items={skills.languages} />
        <SkillGroup title="Technologies"  items={skills.technologies} />
        <SkillGroup title="Tools"         items={skills.tools} />
        <SkillGroup title="Core Concepts" items={skills.coreConcepts} />
      </div>
    </div>
  </section>
);

export default SkillsSection;
