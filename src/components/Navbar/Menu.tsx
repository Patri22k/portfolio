import { Link } from "react-router-dom"
import { DownOutlined } from '@ant-design/icons'
import { useState } from "react";

// Styling almost complete
// TODO: Add to 480px and above 2 cols for pop-up window on hover

const Menu = () => {
    const [style, setStyle] = useState({ display: 'none' });

    return (
        <div className="menu-container z-40">
            <div className="link-container pb-2 w-auto h-auto">
                <div className="link-wrapper flex gap-x-1 pt-5 pb-3">
                    <DownOutlined className="py-auto" />
                    <Link to="/" className="font-semibold text-base xs:text-xl">Home</Link>
                </div>
            </div>
            <div
                className="link-container pb-2 w-auto h-auto"
                onMouseEnter={e => {
                    setStyle({ display: "block" });
                }}
                onMouseLeave={e => {
                    setStyle({ display: "none" })
                }}>
                <div className="link-wrapper flex gap-x-1 pt-5 pb-3">
                    <Link to="/projects" className="font-semibold text-base xs:text-xl">Projects</Link>
                    <DownOutlined className="py-auto" />
                </div>

                {/* Pop-up window on hover */}
                <div className="menu-projects-container" style={style}>
                    <div className="menu-projects-wrapper flex flex-col">
                        <div className="subproject-container flex gap-x-2 border-b-2 border-b-black py-4">
                            <h3 className="text-black/50">/01</h3>
                            <h1 className="text-2xl font-medium">GitHub Projects</h1>
                            <div className="arrow-container flex justify-center items-center w-8 h-8">
                                <img className="w-8 h-8" src="https://cdn.prod.website-files.com/66bf407255e2bbac50fde356/66bf9e7b27401f68266d92b9_Arrow%20-%20Right.svg" alt="Arrow"></img>
                            </div>
                        </div>
                        <div className="subproject-container flex gap-x-2 border-b-2 border-b-black py-4">
                            <h3 className="text-black/50">/02</h3>
                            <h1 className="text-2xl font-medium">School Projects</h1>
                            <div className="arrow-container flex justify-center items-center w-8 h-8">
                                <img className="w-8 h-8" src="https://cdn.prod.website-files.com/66bf407255e2bbac50fde356/66bf9e7b27401f68266d92b9_Arrow%20-%20Right.svg" alt="Arrow"></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="link-container pb-2 w-auto h-auto">
                <div className="link-wrapper flex gap-x-1 pt-5 pb-3">
                    <Link to="/contact" className="font-semibold text-base xs:text-xl">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;