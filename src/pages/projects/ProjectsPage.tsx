import { Link } from "react-router-dom";

// TODO: need designing first

function ProjectsPage() {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <div className="flex flex-col items-center text-center">
                <h2 className="w-full mb-6 font-medium text-4xl">Hello projects</h2>
                <p className="flex justify-center w-full text-lg">
                    This page is still a work in progress,      <br />
                    A canvas blank, a story in process.         <br />
                    Though it's empty now, don't you fret,      <br />
                    One day soon, it'll be the best one yet!    <br />
                    <br />
                    With patience and time, ideas will flow,    <br />
                    Creating a masterpiece row by row.          <br />
                    Stay tuned, keep watch, come back and see,  <br />
                    The art of my journey, where I aim to be!   <br />
                </p>
                <Link to="/" className="mt-6 px-6 py-3 bg-indigo-500 text-white text-xl font-semibold rounded-md hover:bg-indigo-400">Back to Home</Link>
            </div>
        </div>
    );
};

export default ProjectsPage;