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

                    <div className="navbar-links-container hidden lg:block">
                        <div className="navigation-links-wrapper flex gap-x-8 w-auto h-auto">

                            {/* Projects 1 */}
                            <FlyoutLink FlyoutContent={ProjectTypes}>
                                <Link to="/projects" className="font-semibold text-xl">Projects</Link>
                                <DownOutlined className="py-auto" />
                            </FlyoutLink>

                            {/* Projects 2 */}
                            <FlyoutLink FlyoutContent={ProjectTypes}>
                                <Link to="/projects" className="font-semibold text-xl">Projects</Link>
                                <DownOutlined className="py-auto" />
                            </FlyoutLink>
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
                    className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
                />
            </div>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-1/2 top-12 w-[calc(100vw-17px)] !-translate-x-1/2 bg-white z-10"
                    >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45" />
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
    );
};

export default Example;