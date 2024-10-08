import { useState } from "react";
import NextArrow from "../assets/svg/arrow-right.svg?react";
import Arrow from "../assets/svg/arrow_short.svg?react";
import Eye from "../assets/svg/eye.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const isValid = () => {
    let isProceed = true;
    let errors = {};

    if (formData.username === "") {
      isProceed = false;
      errors.username = "Username is required.";
    }

    if (formData.email === "") {
      isProceed = false;
      errors.email = "Email is required.";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      isProceed = false;
      errors.email = "Please enter a valid email.";
    }

    if (formData.password === "") {
      isProceed = false;
      errors.password = "Password is required.";
    }

    if (formData.confirmPassword === "") {
      isProceed = false;
      errors.confirmPassword = "Confirm Password is required.";
    } else if (formData.password !== formData.confirmPassword) {
      isProceed = false;
      errors.confirmPassword = "Passwords do not match!";
    }

    setFormErrors(errors);
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.ok) {
            toast.success("Registered Successfully!");
            navigate("/login");
          } else {
            return res.json().then((err) => {
              throw new Error(err.message);
            });
          }
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
          console.log(err);
        });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center mb-20 max-w-[1200px] mx-auto">
      <div className="w-full mb-20 rounded-b-xl bg-secondary-white">
        <div className="mx-auto max-width">
          <div className="flex items-center mt-[50px] gap-4">
            <span className="flex items-center text-[#636270]">Home </span>
            <Arrow className="text-black" />
            <span className="flex items-center text-[#636270]">Account</span>
            <Arrow className="text-black" />
            <span>Sign In</span>
          </div>
          <h2 className="text-2xl font-semibold font-inter mt-[14px] mb-[50px]">
            Sign In
          </h2>
        </div>
      </div>
      <div className="shadow-custom w-[600px] h-[auto]">
        <div className="text-center">
          <h4 className="pb-1 mt-8 mb-6 text-3xl font-semibold font-inter text-blue">
            Sign In
            <NextArrow />
          </h4>
        </div>

        <form className="px-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Your username"
              className="w-full h-[50px] px-3 py-2 text-gray-700 rounded bg-secondary-white font-inter"
            />
            {formErrors.username && <p className="text-red-600">{formErrors.username}</p>}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full h-[50px] px-3 py-2 text-gray-700 rounded bg-secondary-white font-inter"
            />
            {formErrors.email && <p className="text-red-600">{formErrors.email}</p>}
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
            {formErrors.password && <p className="text-red-600">{formErrors.password}</p>}
          </div>

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Enter password again"
              className="w-full px-3 py-2 text-gray-700 rounded bg-secondary-white font-inter h-[50px]"
            />
            <Eye
              className="absolute cursor-pointer right-3 top-4"
              onClick={togglePasswordVisibility}
            />
            {formErrors.confirmPassword && <p className="text-red-600">{formErrors.confirmPassword}</p>}
          </div>

          <div className="pt-1 pb-1 mb-12 text-center">
            <button
              className="mb-3 w-full rounded px-6 pb-2 pt-2.5 bg-[#029FAE] flex justify-center items-center gap-3 h-[52px] hover:shadow-lg hover:bg-[#1b5c62] transition-all 0.3s ease-in-out"
              type="submit"
            >
              <span className="text-base leading-normal text-white">
                Sign In
              </span>
              <NextArrow />
            </button>
          </div>

          <div className="flex items-center justify-center pb-6">
            <p className="mb-0 mr-1 text-blue">Already Have an Account?</p>
            <Link to={"/login"}>
              <button
                type="button"
                className="inline-block text-base font-medium leading-normal text-[#007580]"
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
