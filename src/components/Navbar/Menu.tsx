import { Link } from "react-router-dom"
import { DownOutlined } from '@ant-design/icons'

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="link-container pb-2 w-auto h-auto">
                <div className="link-wrapper flex gap-x-1 pt-5 pb-3">
                    <Link to="/" className="font-semibold text-base xs:text-xl">Home</Link>
                    <DownOutlined className="py-auto" />
                </div>
            </div>
            <div className="link-container pb-2 w-auto h-auto">
                <div className="link-wrapper flex gap-x-1 pt-5 pb-3">
                    <Link to="/projects" className="font-semibold text-base xs:text-xl">Projects</Link>
                    <DownOutlined className="py-auto" />
                </div>
            </div>
            <div className="link-container pb-2 w-auto h-auto">
                <div className="link-wrapper flex gap-x-1 pt-5 pb-3">
                    <Link to="/contact" className="font-semibold text-base xs:text-xl">Contact</Link>
                    <DownOutlined className="py-auto" />
                </div>
            </div>
        </div>
    );
};

export default Menu;