import { NavLink } from 'react-router-dom';
import withSidebar from './withSidebar';

const ProfileSidebarContent = ({ onClose }) => {
  return (
    <div className='sidebar-content'>
      <h3 className="mb-4 text-lg font-semibold">User Profile</h3>
      <ul className="space-y-2">
        <li>
          <NavLink to="/profile" onClick={onClose}>My Profile</NavLink>
        </li>
        <li>
          <NavLink to="/orders" onClick={onClose}>My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/settings" onClick={onClose}>Settings</NavLink>
        </li>
      </ul>
    </div>
  );
};

const ProfileSidebar = withSidebar(ProfileSidebarContent);
export default ProfileSidebar;