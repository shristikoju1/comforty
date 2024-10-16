import { NavLink, useNavigate } from "react-router-dom";
import withSidebar from "./withSidebar";
import Profile from "@/assets/images/client1.png";
import Cart from "@/assets/svg/cart_featureproduct.svg?react";
import Heart from "@/assets/svg/heart.svg?react";
import { IoMdLogOut } from "react-icons/io";
import { useAuth } from "@/hooks/useAuth";
import { useSelector } from "react-redux";

const ProfileSidebarContent = ({ onClose }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  // Access the username and email from the Redux state
  const username = useSelector((state) => state.profile.username);
  const email = useSelector((state) => state.profile.email);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);

  const handleAuthAction = () => {
    if (isAuthenticated) {
      logout();  
    } else {
      window.location.reload();
      navigate("/login");  
    }
  };

  return (
    <div className="m-8 ">
      <ul className="space-y-8">
        <div className="flex items-center gap-5 px-4 py-2 border border-black rounded-xl hover:bg-green hover:text-white hover:border-hover-color">
          <div>
            <img src={Profile} alt="profile-img" />
          </div>
          <div className="flex flex-col">

            <h2 className="text-lg font-semibold">
              {isAuthenticated ? `Hello,${username}` : "Hello, Sign In"}
            </h2>{" "}

            <p className="">
            {isAuthenticated ? email : ""}

            </p>

          </div>
        </div>

        <li className="py-2 border-b border-blue hover:bg-green hover:text-white hover:border-hover-color hover:py-2">
          <NavLink to="/cart" onClick={onClose} className="flex gap-2">
            <Cart />
            My Cart
          </NavLink>
        </li>

        <li className="py-2 border-b border-blue hover:bg-green hover:text-white hover:border-hover-color">
          <NavLink to="/fav" onClick={onClose} className="flex gap-2">
            <Heart />
            Saved Items
          </NavLink>
        </li>

        <li className="py-2 border-b border-blue hover:bg-green hover:text-white hover:border-hover-color">

          <button onClick={handleAuthAction} className="flex gap-2">
            <IoMdLogOut className="w-6 h-6" />
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </div>
  );
};

const ProfileSidebar = withSidebar(ProfileSidebarContent);
export default ProfileSidebar;
