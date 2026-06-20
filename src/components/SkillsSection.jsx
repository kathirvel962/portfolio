import React from "react";

const SkillGroup = ({ title, items }) => (
  <article className="card">
    <h4>{title}</h4>
    <div className="badge-list">
      {items.map((item) => (
        <span key={item} className="badge">
          {item}
        </span>
      ))}
    </div>
  </article>
);

const SkillsSection = ({ skills }) => {
  return (
    <section id="skills" className="section fade-in">
      <div className="container">
        <h3>Skills</h3>
        <div className="skills-grid">
          <SkillGroup title="Languages" items={skills.languages} />
          <SkillGroup title="Technologies" items={skills.technologies} />
          <SkillGroup title="Tools" items={skills.tools} />
          <SkillGroup title="Core Concepts" items={skills.coreConcepts} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
