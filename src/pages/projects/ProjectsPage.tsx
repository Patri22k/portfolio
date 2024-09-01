import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProjectsContent from "./components/ProjectsContent";

function ProjectsPage() {
    return (
        <div className="projects-page-container">
            <Navbar />
            <ProjectsContent />
            <Footer />
        </div>
    );
};

export default ProjectsPage;