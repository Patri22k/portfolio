import ReactIcon from '../assets/Logos/react-original-wordmark.svg';
import ViteIcon from '../assets/Logos/vitejsdev-icon.svg';
import TailwindIcon from '../assets/Logos/tailwindcss-icon.svg';
import JavaScriptIcon from '../assets/Logos/javascript-original.svg';
import ExpressIcon from '../assets/Logos/expressjs-icon.svg';
import NpmIcon from '../assets/Logos/Npm-logo.svg';

const SkillsSection = () => {
    return (
        <div className="skills-container py-16">
            <div className="skills-wrapper mx-auto px-4 max-w-[1352px] md:px-6">
                <div className="heading flex flex-col items-center gap-y-4">
                    <h2 className="font-bold text-4xl text-center 2xl:text-5xl">My Go-To Development Tools</h2>
                    <div className="text-container max-w-[510px]">
                        <p className="text-center 2xl:text-lg">
                            Some of them are libraries, utilities or frameworks,
                            which everyone loves and enjoys.
                            For me? They are my live &lt;3</p>
                    </div>
                </div>
                <div className="grid-container grid grid-cols-1 grid-rows-1 gap-x-10 gap-y-6 justify-stretch items-stretch mx-auto mt-20 w-full max-w-[430px]
                    lg:grid-cols-3 lg:w-auto lg:max-w-none lg:h-auto lg:max-h-none">
                    <div className="tile-grid flex flex-col gap-y-4 px-8 py-9 rounded-xl bg-[#3f3f3f]">
                        <div className="icon-container mb-4">
                            <img className='w-[50px] h-[50px] max-w-full' src={ReactIcon} alt="React Icon"></img>
                        </div>
                        <h1 className="text-white font-bold text-2xl">React</h1>
                        <p className='text-white'>I created some of my projects using react.
                            Some of them are on Github.</p>
                    </div>
                    <div className="tile-grid flex flex-col gap-y-4 px-8 py-9 rounded-xl bg-[#3f3f3f]">
                        <div className="icon-container mb-4">
                            <img className='w-[50px] h-[50px] max-w-full' src={ViteIcon} alt="React Icon"></img>
                        </div>
                        <h1 className="text-white font-bold text-2xl">Vite</h1>
                        <p className='text-white'>I tried Vite to learn Typescript.
                            Working with it was fun and easier than you can image.</p>
                    </div>
                    <div className="tile-grid flex flex-col gap-y-4 px-8 py-9 rounded-xl bg-[#3f3f3f]">
                        <div className="icon-container mb-4">
                            <img className='w-[50px] h-[50px] max-w-full' src={TailwindIcon} alt="React Icon"></img>
                        </div>
                        <h1 className="text-white font-bold text-2xl">Tailwind CSS</h1>
                        <p className='text-white'>When you are tired of using CSS, this is the
                            best library for lazy, but efficient people. Love this one.</p>
                    </div>
                    <div className="tile-grid flex flex-col gap-y-4 px-8 py-9 rounded-xl bg-[#3f3f3f]">
                        <div className="icon-container mb-4">
                            <img className='w-[50px] h-[50px] max-w-full' src={JavaScriptIcon} alt="React Icon"></img>
                        </div>
                        <h1 className="text-white font-bold text-2xl">JavaScript</h1>
                        <p className='text-white'>As funky programming language, Javascript
                            offers many crazy and wild things to work with.
                            I have some experience using it.</p>
                    </div>
                    <div className="tile-grid flex flex-col gap-y-4 px-8 py-9 rounded-xl bg-[#3f3f3f]">
                        <div className="icon-container mb-4">
                            <img className='w-[50px] h-[50px] max-w-full' src={ExpressIcon} alt="React Icon"></img>
                        </div>
                        <h1 className="text-white font-bold text-2xl">ExpressJS</h1>
                        <p className='text-white'>When it comes to backend, I chose Express
                            as web application framework. It is very easy to understand and comprehend.</p>
                    </div>
                    <div className="tile-grid flex flex-col gap-y-4 px-8 py-9 rounded-xl bg-[#3f3f3f]">
                        <div className="icon-container mb-4">
                            <img className='w-[50px] h-[50px] max-w-full' src={NpmIcon} alt="React Icon"></img>
                        </div>
                        <h1 className="text-white font-bold text-2xl">Npm</h1>
                        <p className='text-white'>Which stands for Node Package Manager,
                            is amazing, when you want to take a shortcut.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;