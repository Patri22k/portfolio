import { useState } from "react"
import { Link } from "react-router-dom"
import { DownOutlined } from '@ant-design/icons'

const Menu = () => {
    const [style, setStyle] = useState({ display: 'none' });

    return (
        <div className="menu-container">
            <div className="link-container pb-2 w-auto h-auto">
                <div className="link-wrapper flex gap-x-1 pt-5 pb-3">
                    <DownOutlined className="py-auto" />
                    <Link to="/" className="font-semibold text-base xs:text-xl">Home</Link>
                </div>
            </div>
            <div
                className="link-container pb-2 w-auto h-auto"
                onMouseEnter={() => {
                    setStyle({ display: "block" });
                }}
                onMouseLeave={() => {
                    setStyle({ display: "none" })
                }}>
                <div className="link-wrapper flex gap-x-1 pt-5 pb-3">
                    <Link to="/projects" className="font-semibold text-base xs:text-xl">Projects</Link>
                    <DownOutlined className="py-auto" />
                </div>

                {/* Pop-up window on hover for tablets and below */}
                <div className="menu-projects-container" style={style}>
                    <div className="menu-projects-wrapper flex flex-col ml-[3%] min-[480px]:grid min-[480px]:grid-cols-2 min-[480px]:grid-rows-1 min-[480px]:gap-x-16 sm:gap-x-20 md:gap-x-56">
                        <div className="subproject-container flex gap-x-2 border-b-2 border-b-black py-4">
                            <Link to="/projects">
                                <h3 className="text-black/50">/01</h3>
                                <h1 className="text-2xl font-medium">GitHub Projects</h1>
                                <div className="arrow-container flex justify-center items-center w-8 h-8">
                                    <img src="https://cdn.prod.website-files.com/66bf407255e2bbac50fde356/66bf9e7b27401f68266d92b9_Arrow%20-%20Right.svg" alt="Arrow"></img>
                                </div>
                            </Link>
                        </div>
                        <div className="subproject-container flex gap-x-2 border-b-2 border-b-black py-4">
                            <Link to="/projects">
                                <h3 className="text-black/50">/02</h3>
                                <h1 className="text-2xl font-medium">School Projects</h1>
                                <div className="arrow-container flex justify-center items-center w-8 h-8">
                                    <img src="https://cdn.prod.website-files.com/66bf407255e2bbac50fde356/66bf9e7b27401f68266d92b9_Arrow%20-%20Right.svg" alt="Arrow"></img>
                                </div>
                            </Link>
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