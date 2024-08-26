import { Link } from "react-router-dom"
import profilePicture from "../../assets/Profile-picture-without-me.jpg"
import MenuIcon from "./MenuIcon.tsx"
import { DownOutlined } from '@ant-design/icons'
import { useState } from "react"
import Menu from "./Menu.tsx"

// TODO: style navlink component
const NavLinks = () => {
    return (
        <div className="navigation-links-wrapper flex">
            <div className="link flex">
                <Link to="/">Home</Link>
                <DownOutlined />
            </div>
            <div className="link flex">
                <Link to="/projects">Projects</Link>
                <DownOutlined />
            </div>
            <div className="link flex">
                <Link to="/contacts">Contacts</Link>
                <DownOutlined />
            </div>
        </div>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navigation-container block relative">
                <div className="navigation-wrapper flex justify-between items-center py-3 mx-auto w-[90%]">

                    {/* Logo Section */}
                    <div className="navigation-logo flex justify-start items-center h-10 w-10">
                        <img className="rounded-sm" src={profilePicture} alt="Profile picture"></img>
                    </div>

                    {/* NavLinks for Desktop */}
                    <div className="navbar-links-container hidden lg:block">
                        <NavLinks />
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
                <div className="mobile-menu flex flex-col items-start bg-white shadow-md p-4 absolute top-16 left-0 w-full lg:hidden">
                    <Menu />
                </div>
            )}
        </>
    );
};

export default Navbar;