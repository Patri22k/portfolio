import temporaryCover from '../assets/temporary-project-cover.svg';

const ProjectSection = () => {
    return (
        <div className="projects-container">
            <div className="projects-padding-container px-[5%]">
                <div className="projects-width-container w-full max-w-[1280px] mx-auto">
                    <div className="projects-wrapper py-16">
                        <div className="projects-flex-container flex flex-col items-center ">
                            <div className="heading-wrapper mb-16 w-full max-w-[768px]">
                                <h2 className="mx-0 mb-5 font-bold text-4xl text-center h-[120%]">My projects</h2>
                                <p className="text-center">Larger scale projects and my endeavour need
                                    to be presented. Some of them are from school,
                                    some from ideas or boredom.</p>
                            </div>
                            <div className="gallery-grid-wrapper grid grid-cols-1 grid-rows-2 gap-6 justify-stretch items-stretch w-full">
                                <div className="gallery-box-container w-full">
                                    <div className='gallery-box-wrapper w-full h-full'>
                                        <img className='w-full h-full max-w-full' src={temporaryCover} alt="Github Projects"></img>
                                    </div>
                                </div>
                                <div className="gallery-box-container w-full">
                                    <div className='gallery-box-wrapper w-full h-full'>
                                        <img className="w-full h-full max-w-full" src={temporaryCover} alt="School Projects"></img>
                                    </div>
                                </div>
                                <div className="gallery-box-container w-full">
                                    <div className='gallery-box-wrapper w-full h-full'>
                                        <img className="w-full h-full max-w-full" src={temporaryCover} alt="On-going Projects"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;