import temporaryCover from '../assets/temporary-project-cover.svg';

const ProjectSection = () => {
    return (
        <div className="projects-container">
            <div className="projects-inner-container">
                <div className="projects-section-container">
                    <div className="projects-component-container">
                        <div className="heading-wrapper">
                            <h2>My projects</h2>
                            <p>Larger scale projects and my endeavour need 
                                to be presented. Some of them are from school, 
                                some from ideas or boredom.</p>
                        </div>
                        <div className="gallery-grid-wrapper">
                            <div className="gallery-box-container">
                                <img className='w-[50px] h-[50px]' src={temporaryCover} alt="Github Projects"></img>
                            </div>
                            <div className="gallery-box-container">
                                <img className='w-[50px] h-[50px]' src={temporaryCover} alt="School Projects"></img>
                            </div>
                            <div className="gallery-box-container">
                                <img className='w-[50px] h-[50px]' src={temporaryCover} alt="On-going Projects"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;