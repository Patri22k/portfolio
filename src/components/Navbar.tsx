import profilePicture from "../assets/Profile-picture-without-me.jpg";
import { MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
    return (
        <div className="navigation-wrapper">
            <div className="navigation-logo">
                <img src={profilePicture} alt="Profile picture"></img>
            </div>
            <div className="menu-button">
                <MenuOutlined />
            </div>
        </div>
    );
};

export default Navbar;