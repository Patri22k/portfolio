import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import profilePicture from "../../assets/Profile-picture-without-me.jpg";
import MenuIcon from "./MenuIcon.tsx";
import Menu from "./Menu.tsx";

/**
 * Error: Positioning of the dropdown menu for laptops and above, where it overflows
 */

type NavbarProps = React.PropsWithChildren & { FlyoutContent?: React.FC };

const Example = () => {
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
                                <DownOutlined className="py-auto" />
                                <Link to="/" className="font-semibold text-xl">Home</Link>
                            </div>

                            {/* Projects */}
                            <div className="link-wrapper pt-5 pb-3">
                                <FlyoutLink FlyoutContent={ProjectTypes}>
                                    <div className="flex justify-center gap-x-1">
                                        <Link to="/projects" className="font-semibold text-xl">Projects</Link>
                                        <DownOutlined className="py-auto" />
                                    </div>
                                </FlyoutLink>
                            </div>

                            {/* Contact */}
                            <div className="link-wrapper flex justify-center gap-x-1 pt-5 pb-3">
                                <Link to="/contact" className="font-semibold text-xl">Contact</Link>
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

const FlyoutLink: React.FC<NavbarProps> = ({ children, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
        >
            <div className="relative">
                {children}
                <span
                    style={{
                        transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-orange-400 transition-transform duration-300 ease-out"
                />
            </div>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-12 w-[calc(100vw-20px)] !-translate-x-[78vw] bg-white z-10 2xl:w-[calc(100vw-8px)] 2xl:!-translate-x-[73vw]"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProjectTypes = () => {
    return (
        <div className="menu-projects-container">
            <div className="menu-projects-wrapper flex justify-evenly shadow-2xl pb-8">
                <Link to="/projects">
                    <div className="subproject-container flex gap-x-2 border-b-2 border-b-black py-4">
                        <h3 className="text-black/50">/01</h3>
                        <h1 className="text-2xl font-medium">GitHub Projects</h1>
                        <div className="arrow-container flex justify-center items-center w-8 h-8">
                            <img src="https://cdn.prod.website-files.com/66bf407255e2bbac50fde356/66bf9e7b27401f68266d92b9_Arrow%20-%20Right.svg" alt="Arrow"></img>
                        </div>
                    </div>
                </Link>
                <Link to="/projects">
                    <div className="subproject-container flex gap-x-2 border-b-2 border-b-black py-4">
                        <h3 className="text-black/50">/02</h3>
                        <h1 className="text-2xl font-medium">School Projects</h1>
                        <div className="arrow-container flex justify-center items-center w-8 h-8">
                            <img src="https://cdn.prod.website-files.com/66bf407255e2bbac50fde356/66bf9e7b27401f68266d92b9_Arrow%20-%20Right.svg" alt="Arrow"></img>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Example;