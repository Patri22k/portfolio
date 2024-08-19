import './App.css';
import Navbar from './components/Navbar.tsx';
import HeroSection from './components/HeroSection.tsx';
import ContentSection from './components/ContentSection.tsx';
import SkillsSection from './components/SkillsSection.tsx';
import ProjectSection from './components/ProjectsSection.tsx';
import Footer from './components/Footer.tsx';

//TODO: style all components

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <SkillsSection />
      <ProjectSection />
      <Footer />
    </>
    
  )
}

export default App;
