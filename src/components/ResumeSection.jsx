import React from "react";

const ResumeSection = ({ resumeFileName }) => {
  return (
    <section id="resume" className="section fade-in">
      <div className="container">
        <article className="card centered">
          <h3>Resume</h3>
          <p>
            Download the latest resume to review technical expertise, projects, achievements, and certifications.
          </p>
          <a href={`/${resumeFileName}`} className="btn btn-primary" download>
            Download Resume
          </a>
        </article>
      </div>
    </section>
  );
};

export default ResumeSection;
