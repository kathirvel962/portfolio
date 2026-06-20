import React from "react";

const TimelineSection = ({ education, achievements, certifications }) => {
  return (
    <section id="timeline" className="section fade-in">
      <div className="container">
        <h3>Education & Highlights</h3>

        <div className="timeline">
          {education.map((item) => (
            <article key={item.institution} className="timeline-item card">
              <h4>{item.title}</h4>
              <p>{item.institution}</p>
              <p>{item.score}</p>
              <span>{item.duration}</span>
            </article>
          ))}
        </div>

        <div className="two-col">
          <article className="card">
            <h4>Achievements</h4>
            <ul>
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>
          <article className="card">
            <h4>Certifications</h4>
            <ul>
              {certifications.map((certificate) => (
                <li key={certificate}>{certificate}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
