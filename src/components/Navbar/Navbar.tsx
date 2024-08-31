import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import profilePicture from "../../assets/Profile-picture-without-me.jpg";
import MenuIcon from "./MenuIcon.tsx";
import Menu from "./Menu.tsx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navigation-container">
            <nav className="navigation-inner-container">
                <div className="flex justify-between items-center p-3 mx-auto w-[90%] max-w-[1340px] lg:w-[95%]">

                    {/* Logo Section */}
                    <div className="navigation-logo flex justify-start items-center h-10 w-10">
                        <img className="rounded-sm" src={profilePicture} alt="Profile picture"></img>
                    </div>

                    {/* Navigation Links */}
                    <div className="navbar-links-container hidden lg:block">
                        <div className="navigation-links-wrapper flex gap-x-8 w-auto h-auto">

                            {/* Home */}
                            <div className="link-wrapper flex justify-center gap-x-1 pt-5 pb-3">
                                <Link to="/" className="font-semibold text-xl">Home</Link>
                                <DownOutlined className="py-auto" />
                            </div>

                            {/* Projects */}
                            <div className="link-wrapper pt-5 pb-3">
                                <div className="flex justify-center gap-x-1">
                                    <Link to="/projects" className="font-semibold text-xl">Projects</Link>
                                    <DownOutlined className="py-auto" />
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="link-wrapper flex justify-center gap-x-1 pt-5 pb-3">
                                <Link to="/contact" className="font-semibold text-xl">Contact</Link>
                                <DownOutlined className="py-auto" />
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
            {
                isOpen && (
                    <div className="mobile-menu flex flex-col items-start bg-white shadow-md p-4 absolute top-16 left-0 w-full z-50 lg:hidden">
                        <Menu />
                    </div>
                )
            }
        </div >
    );
};

export default Navbar;
