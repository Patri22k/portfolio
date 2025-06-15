import Navbar from "../components/Navbar/Navbar.tsx";
import ProjectsContent from "../components/ProjectsContent.tsx";
import Footer from "../components/Footer.tsx";

const Projects = () => {
  return (
    <div className="projects-page-container">
      <Navbar />
      <ProjectsContent />
      <Footer />
    </div>
  );
};

export default Projects;