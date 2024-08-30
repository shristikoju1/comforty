import "./navbar.scss";
import { CiCircleAlert } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import TickMark from "../../../assets/svg/tickmark.svg?react";
import Cart from "../../../assets/svg/cart_featureproduct.svg?react";
import Heart from "../../../assets/svg/heart.svg?react";
import Profile from "../../../assets/svg/profile.svg?react";
import Menu from "../../../assets/svg/menu.svg?react";
import LogoStyle from "../../Common/LogoStyle";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <section className="nav-one flex items-center text-white bg-blue h-[40px] py-2 mt-1">
  <div className="container flex justify-between items-center mx-auto max-width h-[45px]">
    <div className="flex items-center justify-start gap-[1px]">
      <TickMark className="tick-mark text-xs text-blue-600 mr-[1px] flex-row" />
      <p>Free shipping on all orders over $50</p>
    </div>
    <div className="flex items-center justify-end space-x-0 gap-[22px] right-container">
      <div className="relative group">
        <button className="flex items-center gap-[6px]">
          <a href="#">EN</a>
          <RiArrowDropDownLine />
        </button>
        <div className="absolute left-0 hidden mt-2 text-black bg-white border rounded shadow-lg border-blue group-hover:block">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#">EN</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#">FR</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#">ES</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#">DE</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#">IT</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
              <a href="#">JP</a>
            </li>
          </ul>
        </div>
      </div>
      <a href="#">Faqs</a>
      <div className="flex items-center help gap-[6px]">
        <CiCircleAlert />
        <p>Need help</p>
      </div>
    </div>
  </div>
</section>

      <section className="mx-auto bg-secondary-white">
        <div className="bg-secondary-white flex items-center justify-between max-width py-[5px] h-[68px] mx-auto">
          <LogoStyle />
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full p-2 pl-4 pr-24 border border-gray-100 rounded-md focus:outline-none"
            />
            <CiSearch className="absolute transform right-3 top-2/4 -translate-y-2/4 text-primary-black text-[24px]" />
          </div>
          <div className="flex gap-[10px]">
            <NavLink to='/cart'>
              <div className="flex cart-bg flex-row gap-[8px] bg-white">
                <Cart />
                <p>Cart</p>
                <div className="bg-green w-[20px] h-[20px] rounded-full flex-row text-white hover:bg-white hover:text-black">
                  <span className="text-[12px]">2</span>
                </div>
              </div>
            </NavLink>
            <div className="bg-white cart-bg">
              <Heart />
            </div>
            <NavLink to="/signup">
            <div className="bg-white cart-bg">
           
                <Profile />
         
            </div>
            </NavLink>
          </div>
        </div>
      </section>
      <nav className="py-3 bg-white border-b border-gray-300 border-solid h-[70px]">
        <div className="flex items-center justify-between mx-auto max-width">
          <ul className="flex items-center gap-[30px]">
            <li>
              <button className="px-[24px] py-[12px] flex items-center gap-2 border-2 border-solid rounded-lg border-[#E1E3E5]">
                <Menu />
                All Categories
              </button>
            </li>
            <li className="li-style">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/product">Product</NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/pages">Pages</NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
          <div>
            <p className="li-style">
              Contact:{" "}
              <span className="font-inter text-[14px] leading-[15.4px] font-semibold text-blue">
                (808) 555-0111
              </span>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
