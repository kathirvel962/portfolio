import React from "react";

const ContactSection = ({ contact, codingProfiles }) => {
  return (
    <section id="contact" className="section fade-in">
      <div className="container">
        <h3>Contact</h3>
        <div className="contact-grid">
          <article className="card">
            <h4>Get In Touch</h4>
            <p>
              <strong>Email:</strong> {contact.email}
            </p>
            <p>
              <strong>Phone:</strong> {contact.phone}
            </p>
            <p>
              <strong>LinkedIn:</strong> {contact.linkedin}
            </p>
            <p>
              <strong>GitHub:</strong> {contact.github}
            </p>
            <h4>Coding Profiles</h4>
            <ul>
              {codingProfiles.map((profile) => (
                <li key={profile}>{profile}</li>
              ))}
            </ul>
          </article>

          <form className="card contact-form" onSubmit={(event) => event.preventDefault()}>
            <h4>Send a Message</h4>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" required />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required />

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
