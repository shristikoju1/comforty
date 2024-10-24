import { useNavigate } from "react-router-dom";
import withSidebar from "./withSidebar";
import Profile from "@/assets/images/client1.png";
import { IoMdLogOut } from "react-icons/io";
import { useAuth } from "@/hooks/useAuth";
import { useSelector } from "react-redux";

const ProfileSidebarContent = ({ onClose }) => { 
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  const username = useSelector((state) => state.profile.username);
  const email = useSelector((state) => state.profile.email);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);

  const handleAuthAction = () => {
    if (isAuthenticated) {
      handleLogout();  
    } else {
      navigate("/login");  
    }
    onClose(); 
  };

  return (
    <div className="m-8">
      <div className="space-y-8">
        <div className="flex items-center gap-5 px-4 py-2 border border-black rounded-xl hover:bg-green hover:text-white hover:border-hover-color">
          <div>
            <img src={Profile} alt="profile-img" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">
              {isAuthenticated ? `Hello, ${username}` : "Hello, Log In"}
            </h2>
            <p className="">
              {isAuthenticated ? email : ""}
            </p>
          </div>
        </div>

          <button onClick={handleAuthAction} className="flex w-full gap-2 py-2 border-b border-blue hover:bg-green hover:text-white hover:border-hover-color">
            <IoMdLogOut className="w-6 h-6" />
            {isAuthenticated ? "Logout" : "Login"}
          </button>
      </div>
    </div>
  );
};

const ProfileSidebar = withSidebar(ProfileSidebarContent);
export default ProfileSidebar;
