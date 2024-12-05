import { CiSearch } from "react-icons/ci";
import LogoStyle from "@/Common/LogoStyle";
import Cart from "@/assets/svg/cart_featureproduct.svg?react";
import Heart from "@/assets/svg/heart.svg?react";
import Profile from "@/assets/svg/profile.svg?react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import ProfileSidebar from "@/hoc/ProfileSidebar";

//Define types for Redux state
interface RootState {
  cart: {
    items: any[];
  }
}

const CartNavbar: React.FC = () => {
  const [isAllCategoriesMenuOpen, setIsAllCategoriesMenuOpen] = useState<boolean>(false);
  const cartItems = useSelector((state:RootState) => state?.cart?.items);
  const totalCartItems = cartItems?.length;
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate(); 

  const toggleCategoriesSidebar = () => {
    setIsAllCategoriesMenuOpen(!isAllCategoriesMenuOpen);
  };

  const closeCategoriesSidebar = () => {
    setIsAllCategoriesMenuOpen(false);
  };

  const handleSearchTerm = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event?.target?.value);
  };

  const handleSearchSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`); 
    }
  };
  

  const handleProfileClick = () => {
      toggleCategoriesSidebar();
  };

  return (
    <div>
      <section className="bg-secondary-white">
        <div className="flex items-center justify-between max-width py-2 h-[68px] mx-auto gap-4">
          <LogoStyle />
          <form onSubmit={handleSearchSubmit} className="basis-[350px]">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={handleSearchTerm}
                className="w-full p-2 pl-4 pr-10 border border-gray-100 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-3 top-2/4 -translate-y-2/4 text-primary-black text-[24px]"
              >
                <CiSearch />
              </button>
            </div>
          </form>{" "}
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
           
           
            <button onClick={handleProfileClick}>
              <div className="p-2 bg-white rounded-lg cart-bg">
                <Profile />
              </div>
            </button>
           
            <ProfileSidebar
              isOpen={isAllCategoriesMenuOpen}
              onClose={closeCategoriesSidebar}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartNavbar;
