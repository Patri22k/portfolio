import ReactIcon from '../assets/Logos/react-original-wordmark.svg';
import ViteIcon from '../assets/Logos/vitejsdev-icon.svg';
import TailwindIcon from '../assets/Logos/tailwindcss-icon.svg';
import JavaScriptIcon from '../assets/Logos/javascript-original.svg';
import ExpressIcon from '../assets/Logos/expressjs-icon.svg';
import NpmIcon from '../assets/Logos/Npm-logo.svg';

const SkillsSection = () => {
    return (
        <div className="skills-container">
            <div className="heading">
                <h2>My Go-To Development Tools</h2>
                <div className="text-container">
                    <p>Some of them are libraries, utilities or frameworks,
                        which everyone loves and enjoys.
                        For me? They are my live &lt;3</p>
                </div>
            </div>
            <div className="grid-container">
                <div className="tile-grid">
                    <div className="icon-container">
                        <img className='w-[50px] h-[50px]' src={ReactIcon} alt="React Icon"></img>
                    </div>
                    <h1>React</h1>
                    <p>I created some of my projects using react.
                        Some of them are on Github.</p>
                </div>
                <div className="tile-grid">
                    <div className="icon-container">
                        <img className='w-[50px] h-[50px]' src={ViteIcon} alt="React Icon"></img>
                    </div>
                    <h1>Vite</h1>
                    <p>I tried Vite to learn Typescript. 
                        Working with it was fun and easier than you can image.</p>
                </div>
                <div className="tile-grid">
                    <div className="icon-container">
                        <img className='w-[50px] h-[50px]' src={TailwindIcon} alt="React Icon"></img>
                    </div>
                    <h1>Tailwind CSS</h1>
                    <p>When you are tired of using CSS, this is the 
                        best library for lazy, but efficient people. Love this one.</p>
                </div>
                <div className="tile-grid">
                    <div className="icon-container">
                        <img className='w-[50px] h-[50px]' src={JavaScriptIcon} alt="React Icon"></img>
                    </div>
                    <h1>JavaScript</h1>
                    <p>As funky programming language, Javascript 
                        offers many crazy and wild things to work with. 
                        I have some experience using it.</p>
                </div>
                <div className="tile-grid">
                    <div className="icon-container">
                        <img className='w-[50px] h-[50px]' src={ExpressIcon} alt="React Icon"></img>
                    </div>
                    <h1>ExpressJS</h1>
                    <p>When it comes to backend, I chose Express 
                        as web application framework. It is very easy to understand and comprehend.</p>
                </div>
                <div className="tile-grid">
                    <div className="icon-container">
                        <img className='w-[50px] h-[50px]' src={NpmIcon} alt="React Icon"></img>
                    </div>
                    <h1>Npm</h1>
                    <p>Which stands for Node Package Manager, 
                        is amazing, when you want to take a shortcut.</p>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;