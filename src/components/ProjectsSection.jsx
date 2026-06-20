import React from "react";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="section fade-in">
      <div className="container">
        <h3>Projects</h3>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="card project-card">
              <div className="project-header">
                <h4>{project.title}</h4>
                <span>{project.period}</span>
              </div>
              <p>{project.description}</p>
              <div className="badge-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="badge">
                    {tech}
                  </span>
                ))}
              </div>
              {project.github && (
                <p className="project-link">
                  <span>GitHub:</span> {project.github}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
