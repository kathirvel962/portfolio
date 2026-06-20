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
      { id: "contact", label: "Contact" }
    ],
    []
  );

  const activeSection = useActiveSection(sections.map((section) => section.id));

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".fade-in");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
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

      <ScrollTopButton />
    </>
  );
};

export default App;
