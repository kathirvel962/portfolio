import React from "react";

const Navbar = ({ sections, activeSection, isDarkMode, onToggleTheme }) => {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="brand">
          Kathirvel S
        </a>

        <nav className="nav-links">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? "active" : ""}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
