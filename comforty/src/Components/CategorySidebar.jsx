import { NavLink } from 'react-router-dom';
import withSidebar from './withSidebar'; 
import { RxCross2 } from "react-icons/rx";
import { CgMoreVerticalO } from "react-icons/cg";


const CategorySidebarContent = ({ onClose }) => {
  return (
    <div>
      <div className="sidebar-header sidebar-content">
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-lg font-semibold text-center ">Explore More</h3>
          <CgMoreVerticalO  className="w-6 h-6" />

        </div>
      </div>

      <div className="sidebar-content">
        <ul className="space-y-2">
          <li className="sidebar-list-item" onClick={onClose}><NavLink to={"/categories/1"}>Clothes</NavLink></li>
          <li className="sidebar-list-item" onClick={onClose}><NavLink to={"/categories/2"}>Electronics</NavLink></li>
          <li className="sidebar-list-item" onClick={onClose}><NavLink to={"/categories/3"}>Furniture</NavLink></li>
          <li className="sidebar-list-item" onClick={onClose}><NavLink to={"/categories/4"}>Shoes</NavLink></li>
          <li className="sidebar-list-item" onClick={onClose}><NavLink to={"/categories/5"}>Miscellaneous</NavLink></li>
        </ul>
      </div>
      <RxCross2
            className={`absolute close-icon top-4 right-4`}
            onClick={onClose}
          />

    </div>
  );
};

const CategorySidebar = withSidebar(CategorySidebarContent); 
export default CategorySidebar;
