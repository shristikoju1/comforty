import { CiCircleAlert } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import TickMark from "../../../assets/svg/tickmark.svg?react";

const NavbarOne = () => {
  return (
    <section className="items-center text-white bg-blue h-[40px] py-2 lg:flex hidden justify-between">
      <div
        className='flex justify-between items-center max-width w-full h-[45px]'
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
  );
};

export default NavbarOne;
