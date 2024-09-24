import { useState } from "react";
import "./navbar.scss";
import { CiCircleAlert, CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import TickMark from "../../../assets/svg/tickmark.svg?react";
import Cart from "../../../assets/svg/cart_featureproduct.svg?react";
import Heart from "../../../assets/svg/heart.svg?react";
import Profile from "../../../assets/svg/profile.svg?react";
import Menu from "../../../assets/svg/menu.svg?react";
import LogoStyle from "../../Common/LogoStyle";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IonIcon } from "@ionic/react";
import { menuOutline, closeOutline } from "ionicons/icons";
import { Link } from "react-scroll";

const Navbar = ({ container }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const cartItems = useSelector((state) => state?.cart?.items);
  const totalCartItems = cartItems?.length;

  return (
    <div id="home" className="scroll-smooth">
      {/* Top Bar */}
      <section className="nav-one items-center text-white bg-blue h-[40px] py-2 lg:flex hidden">
        <div
          className={`${
            container ? "container" : ""
          } flex justify-between items-center mx-auto max-width h-[45px]`}
        >
          <div className="flex items-center gap-1">
            <TickMark className="flex-row mr-1 text-xs text-blue-600 tick-mark" />
            <p>Free shipping on all orders over $50</p>
          </div>
          <div className="flex items-center gap-6 right-container">
            <div className="relative group">
              <button className="flex items-center gap-1">
                <a href="#">EN</a>
                <RiArrowDropDownLine />
              </button>
              <div className="absolute left-0 z-20 hidden mt-2 text-black bg-white border rounded shadow-lg border-blue group-hover:block">
                <ul className="py-1">
                  {["EN", "FR", "ES", "DE", "IT", "JP"].map((lang, index) => (
                    <li key={index} className="px-4 py-2 hover:bg-gray-100">
                      <a href="#">{lang}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a href="#">Faqs</a>
            <div className="flex items-center gap-1">
              <CiCircleAlert />
              <p>Need help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navbar */}
      <section className="bg-secondary-white">
        <div className="flex items-center justify-between max-width py-2 h-[68px] mx-auto">
          <LogoStyle />
          <div className="relative hidden lg:block w-[300px]">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full p-2 pl-4 pr-10 border border-gray-100 rounded-md focus:outline-none"
            />
            <CiSearch className="absolute transform right-3 top-2/4 -translate-y-2/4 text-primary-black text-[24px]" />
          </div>
          <div className="flex gap-4">
            <NavLink to="/cart">
              <div className="flex items-center gap-2 p-2 bg-white rounded-lg cart-bg">
                <Cart />
                <p>Cart</p>
                <div className="flex items-center justify-center w-5 h-5 text-xs text-white rounded-full bg-green">
                  {totalCartItems}
                </div>
              </div>
            </NavLink>
            <NavLink to="/fav">
              <div className="p-2 bg-white rounded-lg cart-bg">
                <Heart />
              </div>
            </NavLink>
            <NavLink to="/login">
              <div className="p-2 bg-white rounded-lg cart-bg">
                <Profile />
              </div>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Second Navbar with Scroll Effect */}
      <nav className="p-4 transition-all duration-300 bg-white shadow lg:flex lg:items-center lg:justify-between max-width">
        <div className="flex items-center justify-between">
          <span className="text-xl cursor-pointer">
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg">
              <Menu />
              All Categories
            </button>
          </span>

          <button
            className="block mx-2 text-xl cursor-pointer lg:hidden"
            onClick={toggleMenu}
          >
            <IonIcon
              icon={isMenuOpen ? closeOutline : menuOutline}
              className="w-[40px] h-[40px]"
            />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden sidebar absolute z-50 top-[178px] left-0 w-full bg-white shadow-md`}
        >
          <ul className="p-5">
            <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg duration-500 hover:text-cyan-500"
              >
                Home
              </Link>
            </li>
            <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
              <Link
                to="shop"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg duration-500 hover:text-cyan-500"
              >
                Shop
              </Link>
            </li>
            <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
              <Link
                to="product"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg duration-500 hover:text-cyan-500"
              >
                Product
              </Link>
            </li>
            <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
              <Link
                to="pages"
                spy={true}
                smooth={true}
                offset={40}
                duration={500}
                className="text-lg duration-500 hover:text-cyan-500"
              >
                Pages
              </Link>
            </li>
            <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-lg duration-500 hover:text-cyan-500"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:items-center lg:opacity-100">
          <li className="mx-4 my-4 cursor-pointer lg:my-0 li-style">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg duration-500 hover:text-cyan-500"
            >
              Home
            </Link>
          </li>
          <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
            <Link
              to="shop"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg duration-500 hover:text-cyan-500"
            >
              Shop
            </Link>
          </li>
          <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
            <Link
              to="product"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg duration-500 hover:text-cyan-500"
            >
              Product
            </Link>
          </li>
          <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
            <Link
              to="pages"
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
              className="text-lg duration-500 hover:text-cyan-500"
            >
              Pages
            </Link>
          </li>
          <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-lg duration-500 hover:text-cyan-500"
            >
              About
            </Link>
          </li>
        </ul>

        <div className="mt-4 cursor-pointer lg:mt-0">
          <p className="text-lg li-style">
            Contact:{" "}
            <span className="font-semibold ext-lg font-inter text-blue">
              (808) 555-0111
            </span>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
