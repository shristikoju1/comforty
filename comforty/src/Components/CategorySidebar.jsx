import { RxCross2 } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { useState } from "react";

const CategorySidebar = ({isOpen, onClose}) => {
    const [isAllCategoriesMenuOpen, setIsAllCategoriesMenuOpen] = useState(false);
    const toggleCategoriesSidebar = () => {
        setIsAllCategoriesMenuOpen(!isAllCategoriesMenuOpen);
      };
  
  return (
      <div>
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm" onClick={toggleCategoriesSidebar}></div>
        )}
        <div
          className={`sidebar-container transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
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
              <li className="sidebar-list-item"><NavLink to={"/categories/1"}>Clothes</NavLink></li>
              <li className="sidebar-list-item"><NavLink to={"/categories/2"}>Electronics</NavLink></li>
              <li className="sidebar-list-item"><NavLink to={"/categories/3"}>Furniture</NavLink></li>
              <li className="sidebar-list-item"><NavLink to={"/categories/4"}>Shoes</NavLink></li>
              <li className="sidebar-list-item"><NavLink to={"/categories/5"}>Miscellaneous</NavLink></li>
            </ul>
          </div>

          {/* Close Icon */}
          <RxCross2
            className="close-icon"
            onClick={onClose}
          />
        </div>
      </div>
  )
}

export default CategorySidebar