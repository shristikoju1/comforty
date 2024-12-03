import { Link } from "react-router-dom";
import withSidebar from '../hoc/withSidebar';

const NavSidebarContent = ({onClose}) => {
  return (
    <div className="sidebar-content">
      <ul className="p-5">
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link onClick={onClose}
            to="/#home"
            className="text-lg duration-500 hover:text-cyan-500"
          >
            Home
          </Link>
        </li>
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link onClick={onClose}
            to="/#shop"
            className="text-lg duration-500 hover:text-cyan-500"
          >
            Shop
          </Link>
        </li>
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link onClick={onClose}
            to="/#product"
            className="text-lg duration-500 hover:text-cyan-500"
          >
            Product
          </Link>
        </li>
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link onClick={onClose}
            to="/#pages"
            className="text-lg duration-500 hover:text-cyan-500"
          >
            Pages
          </Link>
        </li>
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link onClick={onClose}
            to="/map"
            className="text-lg duration-500 hover:text-cyan-500"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

const NavSidebar = withSidebar(NavSidebarContent);

export default NavSidebar;
