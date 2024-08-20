import Link from "antd/es/typography/Link";
import profilePicture from "../../assets/Profile-picture-without-me.jpg";
import X from "./X.tsx";
import { DownOutlined } from '@ant-design/icons';
// import Menu from "./Menu.tsx";   <----- ADD THIS PANEL FOR MOBILE DEVICES WHICH APPEARS AFTER YOU CLICK ON X (BUTON)

const NavLinks = () => {
    return (
        <>
            <div className="navigation-links-wrapper flex">
                <div className="link flex">
                    <Link>Home</Link>
                    <DownOutlined />
                </div>
                <div className="link flex">
                    <Link>Projects</Link>
                    <DownOutlined />
                </div>
                <div className="link flex">
                    <Link>Contacts</Link>
                    <DownOutlined />
                </div>
            </div>
        </>
    );
};

const Navbar = () => {

    return (
        <nav className="navigation-container block relative">
            <div className="navigation-wrapper flex justify-between items-center py-3 mx-auto w-[90%]">
                <div className="navigation-logo flex justify-start items-center h-10 w-10">
                    <img className="rounded-sm" src={profilePicture} alt="Profile picture"></img>
                </div>
                <div className="navbar-links-container hidden md:block">
                    <NavLinks />
                </div>
                <div className="menu-button flex justify-start md:hidden">
                    <X />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;