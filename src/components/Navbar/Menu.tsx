import {Link, useLocation} from "react-router-dom"
import {DownOutlined} from '@ant-design/icons'


const Menu = () => {
  const currentPage = useLocation();

  const isHomeActive = currentPage.pathname === '/' ? 'text-red-500' : '';
  const isProjectsActive = currentPage.pathname === '/projects' ? 'text-red-500' : '';
  const isContactActive = currentPage.pathname === '/contact' ? 'text-red-500' : '';

  return (
    <div className="menu-container">
      <div className="link-container pb-2 w-auto h-auto xs:ml-3 sm:ml-7">
        <div className={`link-wrapper flex gap-x-1 pt-5 ${isHomeActive}`}>
          <Link to="/" className="font-semibold text-base xs:text-xl">Home</Link>
          <DownOutlined className="py-auto"/>
        </div>
      </div>
      <div className="link-container pb-2 w-auto h-auto xs:ml-3 sm:ml-7">
        <div className={`link-wrapper flex gap-x-1 pt-5 pb-3 ${isProjectsActive}`}>
          <Link to="/projects" className="font-semibold text-base xs:text-xl">Projects</Link>
          <DownOutlined className="py-auto"/>
        </div>
      </div>
      <div className="link-container pb-2 w-auto h-auto xs:ml-3 sm:ml-7">
        <div className={`link-wrapper flex gap-x-1 pt-5 pb-3 ${isContactActive}`}>
          <Link to="/contact" className="font-semibold text-base xs:text-xl">Contact</Link>
          <DownOutlined className="py-auto"/>
        </div>
      </div>
    </div>
  );
};

export default Menu;