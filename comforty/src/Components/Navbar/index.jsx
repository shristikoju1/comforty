import "./styles.scss";
import { CiCircleAlert } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import TickMark from "../../assets/svg/tickmark.svg?react";
import Cart from "../../assets/svg/cart.svg?react";
import Heart from "../../assets/svg/heart.svg?react";
import Profile from "../../assets/svg/profile.svg?react";
import Menu from "../../assets/svg/menu.svg?react";
import LogoStyle from "../LogoStyle";

const Navbar = () => {
  return (
    <div>
      <section className="nav-one text-white bg-blue h-[45px] mt-2">
        <div className=" container flex justify-between items-center mx-auto max-width h-[45px]">
          <div className="flex items-center justify-start gap-[1px]">
            <TickMark className=" tick-mark text-xs text-blue-600 mr-[1px] flex-row" />
            <p>Free shipping on all orders over $50</p>
          </div>
          <div className="flex items-center justify-end space-x-0 gap-[22px] right-container">
            <button className="flex items-center gap-[6px]">
              <a href="#">EN</a>
              <RiArrowDropDownLine />
            </button>
            <a>Faqs</a>
            <div className="flex items-center help gap-[6px]">
              <CiCircleAlert />
              <p>Need help</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto items- bg-secondary-white">
        <div className="bg-secondary-white flex items-center justify-between max-width py-[5px] h-[76px] mx-auto">
          <LogoStyle/>
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full py-2 pl-3 pr-10 border border-gray-100 rounded-md focus:outline-none"
            />
            <CiSearch className="absolute transform right-3 top-2/4 -translate-y-2/4 text-primary-black" />
          </div>
          <div className="flex gap-[10px]">
            <div className="flex cart-bg flex-row gap-[8px] bg-white">
              <Cart />
              <p>Cart</p>
              <div className="bg-green w-[20px] h-[20px] rounded-full flex-row text-white">
                2
              </div>
            </div>
            <div className="bg-white cart-bg">
              <Heart />
            </div>
            <div className="bg-white cart-bg">
              <Profile />
            </div>
          </div>
        </div>
      </section>
      <nav className="bg-white border-b border-gray-300 border-solid">
        <div className="flex items-center  h-[75px] justify-between mx-auto max-width py-[14px]">
          <ul className="flex items-center gap-[30px]">
            <button>
              <li className="px-[24px] py-[12px] flex items-center gap-2 border-2 border-solid rounded-lg border-[#E1E3E5]">
                <Menu />
                All Categories
              </li>
            </button>

            <li className="li-style">
              <a href="#">Home</a>
            </li>
            <li className="li-style">
              <a href="#">Shop</a>
            </li>
            <li className="li-style">
              <a href="#">Product</a>
            </li>
            <li className="li-style">
              <a href="#">Pages</a>
            </li>
            <li className="li-style">
              <a href="#">About</a>
            </li>
          </ul>
          <div>
            <p>
              Contact:{" "}
              <span className="font-inter text-[14px] leading-[15.4px] font-medium">
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
