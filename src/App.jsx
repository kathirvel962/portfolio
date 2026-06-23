import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import TimelineSection from "./components/TimelineSection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";
import ScrollTopButton from "./components/ScrollTopButton";
import portfolioData from "./data/portfolioData";
import useActiveSection from "./hooks/useActiveSection";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const sections = useMemo(
    () => [
      { id: "hero", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "timeline", label: "Timeline" },
      { id: "resume", label: "Resume" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const activeSection = useActiveSection(sections.map((s) => s.id));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("show"); }),
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar
        sections={sections}
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((prev) => !prev)}
      />
      <main>
        <HeroSection data={portfolioData} />
        <AboutSection summary={portfolioData.professionalSummary} objective={portfolioData.careerObjective} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <TimelineSection
          education={portfolioData.education}
          achievements={portfolioData.achievements}
          certifications={portfolioData.certifications}
        />
        <ResumeSection resumeFileName={portfolioData.resumeFileName} />
        <ContactSection contact={portfolioData.contact} codingProfiles={portfolioData.codingProfiles} />
      </main>
      <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        © {new Date().getFullYear()} Kathirvel S — Built with React & Tailwind CSS
      </footer>
      <ScrollTopButton />
    </div>
  );
};

export default App;
