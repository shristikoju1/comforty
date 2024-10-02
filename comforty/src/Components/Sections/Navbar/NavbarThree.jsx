import Menu from "../../../assets/svg/menu.svg?react";
import { NavLink, useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { menuOutline, closeOutline } from "ionicons/icons";
import { Link, scroller } from "react-scroll";
import { RxCross2 } from "react-icons/rx";
import { FaCircleUser } from "react-icons/fa6";
import { useEffect, useState } from "react";


const scrollToSection = (section, offset = -40) => {
    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: offset,
    });
  };
  
const NavbarThree = () => {

    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAllCategoriesMenuOpen, setIsAllCategoriesMenuOpen] = useState(false);
  
    useEffect(() => {
      // Check for pathname change and scroll to section
      if (location.pathname === "/") {
        const section = location.hash.replace("#", "");
        if (section) {
          scrollToSection(section, -40);
        }
      }
    }, [location]);
  
    const isHomePage = location.pathname === "/";
  
    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
  
    const toggleCategoriesSidebar = () => {
      setIsAllCategoriesMenuOpen(!isAllCategoriesMenuOpen);
    };
  
  return (
    <nav className="p-4 transition-all duration-300 bg-white shadow lg:flex lg:items-center lg:justify-between max-width">
    <div className="flex items-center justify-between">
      <span className="text-xl cursor-pointer">

        <button
          className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-lg"
          onClick={toggleCategoriesSidebar}
        >
          <Menu />
          All Categories
        </button>
      </span>

      {/* All Categories sidebar */}
      <div>
        {isAllCategoriesMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        )}
        <div
          className={`sidebar-container transform ${
            isAllCategoriesMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar Header */}
          <div className="sidebar-header">
            <div className="flex-center">
              <NavLink to={'/signup'}>
              <FaCircleUser className="w-8 h-8" />

              </NavLink>
              <h3 className="text-lg font-semibold">Hello, Sign in</h3>
            </div>
          </div>

          {/* Categories Section */}
          <div className="sidebar-content">
            <NavLink to={'/categories'}className="sidebar-title">Categories</NavLink>
            <ul className="space-y-2">
              <li className="sidebar-list-item"><a href="/categories">Sofas</a></li>
              <li className="sidebar-list-item"><a href="/categories">Chairs</a></li>
              <li className="sidebar-list-item"><a href="/categories">Tables</a></li>
              <li className="sidebar-list-item"><a href="/categories">Beds</a></li>
            </ul>
          </div>

          {/* Close Icon */}
          <RxCross2
            className="close-icon"
            onClick={toggleCategoriesSidebar}
          />
        </div>
      </div>

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
            to={"/map"}
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
        {isHomePage ? (
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
        ) : (
          <NavLink
            to="/#home"
            className="text-lg duration-500 hover:text-cyan-500"
          >
            Home
          </NavLink>
        )}
      </li>
      <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
        {isHomePage ? (
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
        ) : (
          <NavLink
            to="/#shop"
            className="text-lg duration-500 hover:text-cyan-500"
          >
            Shop
          </NavLink>
        )}
      </li>
      <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
        {isHomePage ? (
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
        ) : (
          <NavLink
            to="/#product"
            className="text-lg duration-500 hover:text-cyan-500"
          >
            Product
          </NavLink>
        )}
      </li>
      <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
        {isHomePage ? (
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
        ) : (
          <NavLink
            to="/#pages"
            className="text-lg duration-500 hover:text-cyan-500"
          >
            Pages
          </NavLink>
        )}
      </li>
      <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
        <NavLink
          to={"/map"}
          className="text-lg duration-500 hover:text-cyan-500"
        >
          About
        </NavLink>
      </li>
    </ul>

    <div className="mt-4 cursor-pointer lg:mt-0">
      <p className="text-lg li-style">
        Contact:{" "}
        <span className="font-semibold ext-lg font-inter text-blue">
          (+977) 9788765433
        </span>
      </p>
    </div>
  </nav>
)
}

export default NavbarThree