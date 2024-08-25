import { Link } from "react-router-dom"
import { DownOutlined } from '@ant-design/icons'

// TODO: style the components

const Menu = () => {
    return (
        <div>
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

export default Menu;