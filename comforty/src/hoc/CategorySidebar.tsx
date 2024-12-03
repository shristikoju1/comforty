import { NavLink } from "react-router-dom";
import withSidebar from "../hoc/withSidebar";
import { RxCross2 } from "react-icons/rx";
import { CgMoreVerticalO } from "react-icons/cg";

const categories = [
  { id: 1, name: "Clothes" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Furniture" },
  { id: 4, name: "Shoes" },
  { id: 5, name: "Miscellaneous" },
];

const CategorySidebarContent = ({ onClose }) => {
  return (
    <div>
      <div className="sidebar-header sidebar-content">
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-lg font-semibold text-center">Explore More</h3>
          <CgMoreVerticalO className="w-6 h-6" />
        </div>
      </div>

      <div className="sidebar-content">
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id} className="sidebar-list-item">
              <button onClick={onClose}>
                <NavLink
                  to={`/categories/${category.id}?name=${category.name}`}
                >
                  {category.name}
                </NavLink>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <RxCross2
        className="absolute close-icon top-4 right-4"
        onClick={onClose}
      />
    </div>
  );
};

const CategorySidebar = withSidebar(CategorySidebarContent);
export default CategorySidebar;
