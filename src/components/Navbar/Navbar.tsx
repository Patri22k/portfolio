import { Link } from "react-router-dom"
import profilePicture from "../../assets/Profile-picture-without-me.jpg"
import MenuIcon from "./MenuIcon.tsx"
import { DownOutlined } from '@ant-design/icons'
import { useState } from "react"
import Menu from "./Menu.tsx"

// Z-index not working for Laptops Menu Display
// The hero section overrides the pop-up menu

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [style, setStyle] = useState({ display: 'none' });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navigation-container">
            <nav className="navigation-inner-container block  relative">
                <div className="navigation-wrapper flex justify-between items-center py-3 mx-auto w-[90%] max-w-[1340px] lg:w-[95%]">

                    {/* Logo Section */}
                    <div className="navigation-logo flex justify-start items-center h-10 w-10">
                        <img className="rounded-sm" src={profilePicture} alt="Profile picture"></img>
                    </div>

                    {/* NavLinks for Desktop */}
                    <div className="navbar-links-container hidden lg:block">
                        <div className="navigation-links-wrapper flex gap-x-8 w-auto h-auto">

                            {/* Home */}
                            <div className="link-container pb-2 w-auto h-auto">
                                <div className="link-wrapper flex justify-center gap-x-1 pt-5 pb-3">
                                    <DownOutlined className="py-auto" />
                                    <Link to="/" className="font-semibold text-xl">Home</Link>
                                </div>
                            </div>

                            {/* Projects */}
                            <div className="link-container pb-2 w-auto h-auto">
                                <div
                                    className="link-wrapper flex justify-center gap-x-1 pt-5 pb-3"
                                    onMouseEnter={() => {
                                        setStyle({ display: "block" });
                                    }}
                                    onMouseLeave={() => {
                                        setStyle({ display: "none" });
                                    }}>
                                    <Link to="/projects" className="font-semibold text-xl">Projects</Link>
                                    <DownOutlined className="py-auto" />
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="link-container pb-2 w-auto h-auto">
                                <div className="link-wrapper flex justify-center gap-x-1 pt-5 pb-3">
                                    <Link to="/contact" className="font-semibold text-xl">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Menu Button for Mobile */}
                    <div className="menu-button lg:hidden flex justify-end items-center">
                        <button onClick={toggleMenu}>
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Display */}
            {isOpen && (
                <div className="mobile-menu flex flex-col items-start bg-white shadow-md p-4 absolute top-16 left-0 w-full z-50 lg:hidden">
                    <Menu />
                </div>
            )}

            {/* Laptops Menu Display */}
            <div className="menu-projects-container relative" style={style}>
                <div className="menu-inner-container absolute h-full w-full">
                    <div className="menu-projects-wrapper flex justify-evenly shadow-2xl pb-20">
                        <div className="subproject-container flex gap-x-2 border-b-2 border-b-black py-4">
                            <h3 className="text-black/50">/01</h3>
                            <h1 className="text-2xl font-medium">GitHub Projects</h1>
                            <div className="arrow-container flex justify-center items-center w-8 h-8">
                                <img src="https://cdn.prod.website-files.com/66bf407255e2bbac50fde356/66bf9e7b27401f68266d92b9_Arrow%20-%20Right.svg" alt="Arrow"></img>
                            </div>
                        </div>
                        <div className="subproject-container flex gap-x-2 border-b-2 border-b-black py-4">
                            <h3 className="text-black/50">/02</h3>
                            <h1 className="text-2xl font-medium">School Projects</h1>
                            <div className="arrow-container flex justify-center items-center w-8 h-8">
                                <img src="https://cdn.prod.website-files.com/66bf407255e2bbac50fde356/66bf9e7b27401f68266d92b9_Arrow%20-%20Right.svg" alt="Arrow"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;