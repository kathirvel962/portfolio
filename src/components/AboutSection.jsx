import React from "react";

const AboutSection = ({ summary, objective }) => {
  return (
    <section id="about" className="section fade-in">
      <div className="container">
        <h3>About</h3>
        <div className="about-grid">
          <article className="card">
            <h4>Professional Summary</h4>
            <p>{summary}</p>
          </article>
          <article className="card">
            <h4>Career Objective</h4>
            <p>{objective}</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
