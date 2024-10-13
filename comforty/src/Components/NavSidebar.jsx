import { Link } from "react-router-dom";
import withSidebar from './withSidebar';

const NavSidebarContent = () => {
  return (
    <div className="sidebar-content">
      <ul className="p-5">
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link
            to="home"
            spy="true"
            smooth="true"
            offset={-70}
            duration={500}
            className="text-lg duration-500 hover:text-cyan-500"
          >
            Home
          </Link>
        </li>
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link
            to="shop"
            spy="true"
            smooth="true"
            offset={-70}
            duration={500}
            className="text-lg duration-500 hover:text-cyan-500"
          >
            Shop
          </Link>
        </li>
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link
            to="product"
            spy="true"
            smooth="true"
            offset={-70}
            duration={500}
            className="text-lg duration-500 hover:text-cyan-500"
          >
            Product
          </Link>
        </li>
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link
            to="pages"
            spy="true"
            smooth="true"
            offset={40}
            duration={500}
            className="text-lg duration-500 hover:text-cyan-500"
          >
            Pages
          </Link>
        </li>
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link
            to={"/map"}
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
