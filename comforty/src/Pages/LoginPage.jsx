import { useState } from "react";
import NextArrow from "../assets/svg/arrow-right.svg?react";
import Eye from "../assets/svg/eye.svg?react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ProfileSidebar from "@/Components/ProfileSidebar";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { displayUsername, displayEmail } from '@/Store/profileSlice'; 
import Arrow from "../assets/svg/arrow_short.svg?react";
import { login } from '@/Store/authSlice'; 
import axiosInstance from "@/utils/http.utils";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isValid = () => {
    let isProceed = true;
    let errMsg = "Please enter the value in";

    if (formData.email === "") {
      isProceed = false;
      errMsg += " Email";
    }

    if (formData.password === "") {
      isProceed = false;
      errMsg += " Password";
    }

    if (!isProceed) {
      toast.warning(errMsg);
    } else {
      // Email validation
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
        isProceed = false;
        toast.warning("Please enter a valid email");
      }
    }

    return isProceed;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      try {
        const res = await axiosInstance.post("api/login",formData )
        // const res = await fetch(
        //   "http://127.0.0.1:9000/api/login",
        //   {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(formData),
        //   }
        // );
  
        if (res.ok) {
          const data = await res.json();
          console.log("API response:", data); // Log the API response
  
          const { accessToken } = data.data;
          console.log("Access Token:", accessToken);
  
          if (!accessToken) {
            throw new Error("No access token received from the server.");
          }
  
          const decodedUserData = jwtDecode(accessToken);
          console.log(decodedUserData);

          // Save accessToken, username, and email in localStorage
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("username", decodedUserData.username);
          localStorage.setItem("email", decodedUserData.email);

          // Dispatch Redux actions to store user data
          dispatch(displayUsername(decodedUserData.username));
          dispatch(displayEmail(decodedUserData.email));

          // Dispatch login action to update authentication state
          dispatch(login(decodedUserData)); 

          setUserData(decodedUserData);
          setIsSidebarOpen(true);
          toast.success("Login Successful!");
        } else {
          const errData = await res.json();
          throw new Error(errData.message);
        }
      } catch (err) {
        toast.error("Login Failed: " + err.message);
      }
    }
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("accessToken");
  //   localStorage.removeItem("username");
  //   localStorage.removeItem("email");

  //   dispatch(logout());
  //   setUserData(null);
  //   setIsSidebarOpen(false);
  //   toast.success("Logout Successful!");
  // };

  return (
    <>
      {isSidebarOpen && userData ? (
        <ProfileSidebar userData={userData} />
      ) : (
        <section className="flex flex-col items-center justify-center mb-20 max-w-[1200px] mx-auto">
                <div className="w-full mb-20 rounded-b-xl bg-secondary-white">
        <div className="mx-auto max-width">
          <div className="flex items-center mt-[50px] gap-4">
            <span className="flex items-center text-[#636270]">Home </span>
            <Arrow className="text-black" />
            <span className="flex items-center text-[#636270]">Account</span>
            <Arrow className="text-black" />
            <span>Log In</span>
          </div>
          <h2 className="text-2xl font-semibold font-inter mt-[14px] mb-[50px]">
            Log In
          </h2>
        </div>
      </div>

          {/* Login form */}
          <div className="shadow-custom w-[600px] h-[auto]">
            <div className="text-center">
              <h4 className="pb-1 mt-8 mb-6 text-3xl font-semibold font-inter text-blue">
                Log In
                <NextArrow />
              </h4>
            </div>

            <form className="px-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full h-[50px] px-3 py-2 text-gray-700 rounded bg-secondary-white font-inter"
                />
              </div>

              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Your password"
                  className="w-full px-3 py-2 text-gray-700 rounded bg-secondary-white font-inter h-[50px]"
                />
                <Eye
                  className="absolute cursor-pointer right-3 top-4"
                  onClick={togglePasswordVisibility}
                />
              </div>

              <div className="pt-1 pb-1 mb-12 text-center">
                <button
                  className="mb-3 w-full rounded px-6 pb-2 pt-2.5 bg-[#029FAE] flex justify-center items-center gap-3 h-[52px]"
                  type="submit"
                >
                  <span className="text-base leading-normal text-white">
                    Sign In
                  </span>
                  <NextArrow />
                </button>

                <div className="flex justify-between">
                  <div className="flex flex-row gap-2">
                    <input type="checkbox" name="rememberMe" id="" />
                    <span className="text-base font-light font-dmSans leading-[15.4px] text-[#636270]">
                      Remember me
                    </span>
                  </div>
                  <a
                    href="#!"
                    className="text-base font-semibold font-dmSans text-[#007580]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center pb-6">
                <p className="mb-0 mr-1 text-blue">Don't Have an Account?</p>
                <Link to={"/signup"}>
                  <button
                    type="button"
                    className="inline-block text-base font-medium leading-normal text-[#007580]"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default LoginPage;
