import { NavLink } from "react-router-dom";
import withSidebar from "./withSidebar";
import Profile from "@/assets/images/client1.png";
import Cart from "@/assets/svg/cart_featureproduct.svg?react";
import Heart from "@/assets/svg/heart.svg?react";
import { IoMdLogOut } from "react-icons/io";

const ProfileSidebarContent = ({ onClose }) => {
  return (
    <div className="m-8 ">
      {/* <h3 className="mb-4 text-lg font-semibold">User Profile</h3> */}
      <ul className="space-y-8">
        <div className="flex items-center gap-5 px-4 py-2 border border-black rounded-xl">
          <div>
            <img src={Profile} alt="profile-img" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold ">John Doe</h2>
            <p className="">email</p>
          </div>
        </div>
        <li className="py-2 border-b border-blue">
          <NavLink to="/cart" onClick={onClose} className="flex gap-2">
            <Cart />
            My Cart
          </NavLink>
        </li>
        <li className="py-2 border-b border-blue">
          <NavLink to="/fav" onClick={onClose} className="flex gap-2">
            <Heart />
            Saved Items
          </NavLink>
        </li>
        <li className="py-2 border-b border-blue">
          <NavLink to="/fav" onClick={onClose} className="flex gap-2">
            <IoMdLogOut className="w-6 h-6"/>
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const ProfileSidebar = withSidebar(ProfileSidebarContent);
export default ProfileSidebar;
