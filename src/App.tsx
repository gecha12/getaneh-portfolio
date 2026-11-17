import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfiniteSkillsMarquee } from './components/InfiniteSkillsMarquee';
import { About } from './components/About';
import { SkillsMatrix } from './components/SkillsMatrix';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Cybersecurity } from './components/Cybersecurity';
import { MachineLearning } from './components/MachineLearning';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeSection } from './components/ResumeSection';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="portfolio-app-root">
      {/* Sticky Header Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main>
        {/* 1. Hero Section with Signature Orbital Profile */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Signature Infinite Horizontal Skills Animation (Row 1 & Row 2) */}
        <InfiniteSkillsMarquee />

        {/* 3. About Section */}
        <About />

        {/* 4. Categorized Technical Skills Matrix */}
        <SkillsMatrix />

        {/* 5. Featured Projects & Architecture Modal */}
        <FeaturedProjects />

        {/* 6. Dedicated Cybersecurity Engineering Section */}
        <Cybersecurity />

        {/* 7. Artificial Intelligence & Machine Learning Section */}
        <MachineLearning />

        {/* 8. Education & Experience Timeline */}
        <ExperienceTimeline />

        {/* 9. Contact & Collaboration Section */}
        <ContactSection />
      </main>

      {/* 10. Minimal Elegant Footer */}
      <Footer />

      {/* 11. ATS-Friendly Printable/Downloadable Resume Modal */}
      <ResumeSection isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;

