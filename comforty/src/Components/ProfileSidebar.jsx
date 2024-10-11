import { NavLink } from 'react-router-dom';
// import withSidebar from './withSidebar';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";


const ProfileSidebar = ({ isOpen, onClose }) => {
    const [isAllCategoriesMenuOpen, setIsAllCategoriesMenuOpen] = useState(false);
    const toggleCategoriesSidebar = () => {
        setIsAllCategoriesMenuOpen(!isAllCategoriesMenuOpen);
    };

    return (
        <div className="p-4">
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm" onClick={toggleCategoriesSidebar}></div>

            )}
                    <div
          className={`sidebar-container transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
            <div className='sidebar-content'>
            <h3 className="mb-4 text-lg font-semibold">User Profile</h3>
            <ul className="space-y-2">
                <li><NavLink to="/profile" onClick={onClose}>My Profile</NavLink></li>
                <li><NavLink to="/orders" onClick={onClose}>My Orders</NavLink></li>
                <li><NavLink to="/settings" onClick={onClose}>Settings</NavLink></li>
            </ul>

            </div>

                      {/* Close Icon */}
          <RxCross2
            className="close-icon"
            onClick={onClose}
          />


        </div>
        </div>
    );
};

export default ProfileSidebar;
