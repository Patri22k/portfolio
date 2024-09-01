import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProjectsContent from "./components/ProjectsContent";
import { Helmet } from 'react-helmet';

function ProjectsPage() {
    return (
        <div className="projects-page-container">
            <Helmet>
                <title>Projects - My Website</title>
            </Helmet>
            <Navbar />
            <ProjectsContent />
            <Footer />
        </div>
    );
};

export default ProjectsPage;