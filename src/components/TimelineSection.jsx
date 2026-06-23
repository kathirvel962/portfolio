import React from "react";
import { SectionHeading } from "./AboutSection";

const TimelineSection = ({ education, achievements, certifications }) => (
  <section id="timeline" className="fade-in py-24 bg-white dark:bg-slate-950">
    <div className="max-w-6xl mx-auto px-4">
      <SectionHeading>Education & Highlights</SectionHeading>

      {/* Education timeline */}
      <div className="relative mb-12">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 to-indigo-500 rounded-full" />
        <div className="space-y-5">
          {education.map((item) => (
            <article key={item.institution} className="relative pl-14">
              <div className="absolute left-3.5 top-4 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-violet-100 dark:ring-violet-900/40" />
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 shrink-0">
                    {item.duration}
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.institution}</p>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">{item.score}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Achievements + Certifications */}
      <div className="grid md:grid-cols-2 gap-6">
        {[
          { title: "🏆 Achievements", items: achievements },
          { title: "📜 Certifications", items: certifications },
        ].map(({ title, items }) => (
          <article
            key={title}
            className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6"
          >
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{title}</h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;
