import { FaCircleUser } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import withSidebar from './withSidebar'; 

const CategorySidebarContent = ({ onClose }) => {
  return (
    <div>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="flex-center">
          <NavLink to={'/signup'}>
            <FaCircleUser className="w-8 h-8" />
          </NavLink>
          <h3 className="text-lg font-semibold">Hello, Sign in</h3>
        </div>
      </div>

      {/* Categories Section */}
      <div className="sidebar-content">
        <ul className="space-y-2">
          <li className="sidebar-list-item" onClick={onClose}><NavLink to={"/categories/1"}>Clothes</NavLink></li>
          <li className="sidebar-list-item" onClick={onClose}><NavLink to={"/categories/2"}>Electronics</NavLink></li>
          <li className="sidebar-list-item" onClick={onClose}><NavLink to={"/categories/3"}>Furniture</NavLink></li>
          <li className="sidebar-list-item" onClick={onClose}><NavLink to={"/categories/4"}>Shoes</NavLink></li>
          <li className="sidebar-list-item" onClick={onClose}><NavLink to={"/categories/5"}>Miscellaneous</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

const CategorySidebar = withSidebar(CategorySidebarContent); 
export default CategorySidebar;
