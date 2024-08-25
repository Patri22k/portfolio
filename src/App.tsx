import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import HeroSection from './components/HeroSection.tsx';
import ContentSection from './components/ContentSection.tsx';
import SkillsSection from './components/SkillsSection.tsx';
import ProjectSection from './components/ProjectsSection.tsx';
import Footer from './components/Footer.tsx';

// TODO: style every component for responsivity, mobile devices are pretty much done
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
