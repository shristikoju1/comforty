import { CiSearch } from "react-icons/ci";
import LogoStyle from "../../Common/LogoStyle";
import Cart from "../../../assets/svg/cart_featureproduct.svg?react";
import Heart from "../../../assets/svg/heart.svg?react";
import Profile from "../../../assets/svg/profile.svg?react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavbarTwo = () => {

    const cartItems = useSelector((state) => state?.cart?.items);
    const totalCartItems = cartItems?.length;
  

  return (
    <div>
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

    </div>
  )
}

export default NavbarTwo