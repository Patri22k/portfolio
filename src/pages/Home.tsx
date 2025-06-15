import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection.tsx";
import ContentSection from "../components/ContentSection.tsx";
import SkillsSection from "../components/SkillsSection.tsx";
import ProjectSection from "../components/ProjectsSection.tsx";
import Footer from "../components/Footer.tsx";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ContentSection/>
      <SkillsSection/>
      <ProjectSection/>
      <Footer/>
    </div>
  );
};

export default Home;