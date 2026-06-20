import React from "react";

const HeroSection = ({ data }) => {
  return (
    <section id="hero" className="section hero fade-in">
      <div className="container hero-content">
        <p className="eyebrow">Portfolio</p>
        <h1>{data.name}</h1>
        <h2>{data.role}</h2>
        <p className="hero-tagline">{data.tagline}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href={`/${data.resumeFileName}`} className="btn btn-secondary" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
