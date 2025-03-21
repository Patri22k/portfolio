import taskTracker from "../../../assets/task-tracker-cover-width.png";
import valentineCover from "../../../assets/valentinka-2024-cover.png";
import socialAppCover from "../../../assets/social-app-cover.png";
import { LinkOutlined } from "@ant-design/icons";

const ProjectsContent = () => {
    return (
        <div className="projects-content-container">
            <div className="projects-content-wrapper px-[5%] w-auto h-auto">
                <div className="margin-content-container mx-auto w-full max-w-[80rem] h-auto">
                    <div className="padding-content-container py-16 w-auto h-auto md:py-24">
                        <div className="grid-content-container grid grid-cols-1 grid-rows-1 justify-stretch items-center gap-12 w-auto h-auto
                        md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                            <div className="content-wrapper w-auto h-auto">
                                <h4 className="text-base font-semibold mb-3 lg:text-lg 2xl:text-xl">
                                    Project 1
                                </h4>
                                <h2 className="text-4xl font-bold mb-5 2xl:text-6xl">
                                    Task-tracker
                                </h2>
                                <p className="mb-5 text-black/80 2xl:text-lg">
                                    This project is a simple Task Tracker CLI application built with Go (Golang).
                                    It is designed to help you manage tasks through a command-line interface,
                                    ideal for backend-first project tutorials like those found on
                                    <a
                                        href="https://roadmap.sh/projects/task-tracker"
                                        target="_blank"
                                        className="group transition-all duration-300 ease-in-out break-all 2xl:text-lg ml-2"
                                    >
                                        <span className="hover:transitions-color text-sky-500 bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                            roadmap.sh.
                                        </span>
                                    </a>
                                </p>
                                <a className="group transition-all duration-300 ease-in-out break-all 2xl:text-lg" href="https://github.com/Patri22k/task-tracker" target="_blank">
                                    <span className="hover:transitions-color hover:text-sky-500 bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                        <LinkOutlined /> https://github.com/Patri22k/task-tracker
                                    </span>
                                </a>
                            </div>
                            <div className="image-wrapper w-auto h-auto border-4 shadow">
                                <img className="w-auto max-w-full h-auto" src={taskTracker} alt="Project 1 cover"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-content-wrapper px-[5%] w-auto h-auto">
                <div className="margin-content-container mx-auto w-full max-w-[80rem] h-auto">
                    <div className="padding-content-container py-16 w-auto h-auto md:py-24">
                        <div className="grid-content-container grid grid-cols-1 grid-rows-1 justify-stretch items-center gap-12 w-auto h-auto
                        md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                            <div className="image-wrapper w-auto h-auto">
                                <img className="w-auto max-w-full h-auto" src={valentineCover} alt="Project 2 cover"></img>
                            </div>
                            <div className="content-wrapper w-auto h-auto">
                                <h4 className="text-base font-semibold mb-3 lg:text-lg 2xl:text-xl">
                                    Project 2
                                </h4>
                                <h2 className="text-4xl font-bold mb-5 2xl:text-6xl">
                                    Valentine's Gift Interactive App
                                </h2>
                                <p className="mb-5 text-black/80 2xl:text-lg">
                                    This project is a web application built using React, TypeScript
                                    and Vite, marking my first experience combining TypeScript with
                                    Vite in a single project. The app is a playful and interactive
                                    Valentine's Day gift designed for my girlfriend.
                                </p>
                                <a className="group transition-all duration-300 ease-in-out break-all 2xl:text-lg" href="https://github.com/Patri22k/valentin-2024" target="_blank">
                                    <span className="hover:transitions-color hover:text-sky-500 bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                        <LinkOutlined /> https://github.com/Patri22k/valentin-2024
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projects-content-wrapper px-[5%] w-auto h-auto">
                <div className="margin-content-container mx-auto w-full max-w-[80rem] h-auto">
                    <div className="padding-content-container py-16 w-auto h-auto md:py-24">
                        <div className="grid-content-container grid grid-cols-1 grid-rows-1 justify-stretch items-center gap-12 w-auto h-auto
                        md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                            <div className="content-wrapper w-auto h-auto">
                                <h4 className="text-base font-semibold mb-3 lg:text-lg 2xl:text-xl">
                                    Project 3
                                </h4>
                                <h2 className="text-4xl font-bold mb-5 2xl:text-6xl">
                                    Social App
                                </h2>
                                <p className="mb-5 text-black/80 2xl:text-lg">
                                    This project is a social networking application similar to Instagram, 
                                    built using a combination of modern web technologies. It features a monorepo 
                                    setup that integrates both frontend and backend components within a single 
                                    repository on GitHub.
                                </p>
                                <h3 className="text-lg font-semibold mb-3 lg:text-xl 2xl:text-2xl">
                                    Development Status
                                    </h3>
                                <p className="mb-5 text-black/80 2xl:text-lg">
                                    <b>Current State:</b> The project is functional and includes a substantial 
                                    amount of implemented features. However, development has been paused due 
                                    to an unresolved error that proved challenging to diagnose. Despite this, 
                                    the core functionalities of the app are intact, and the existing codebase 
                                    serves as a solid foundation for further development.
                                </p>
                                <a className="group transition-all duration-300 ease-in-out break-all 2xl:text-lg" href="https://github.com/Patri22k/social-app" target="_blank">
                                    <span className="hover:transitions-color hover:text-sky-500 bg-left-bottom bg-gradient-to-r from-sky-500 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                        <LinkOutlined /> https://github.com/Patri22k/social-app
                                    </span>
                                </a>
                            </div>
                            <div className="image-wrapper w-auto h-auto border-4 shadow">
                                <img className="w-auto max-w-full h-auto" src={socialAppCover} alt="Project 3 cover"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsContent;