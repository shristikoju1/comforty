import { Link } from "react-router-dom"


const NavSidebar = ({isMenuOpen, toggleMenu}) => {
  return (
    <div
      className={`${
        isMenuOpen ? "block" : "hidden"
      } lg:hidden sidebar absolute z-50 top-[178px] left-0 w-full bg-white shadow-md`}
    >
      <ul className="p-5">
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link
            to="home"
            spy="true"
            smooth="true"
            offset={-70}
            duration={500}
            className="text-lg duration-500 hover:text-cyan-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link
            to="shop"
            spy="true"
            smooth="true"
            offset={-70}
            duration={500}
            className="text-lg duration-500 hover:text-cyan-500"
            onClick={toggleMenu}
          >
            Shop
          </Link>
        </li>
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link
            to="product"
            spy="true"
            smooth="true"
            offset={-70}
            duration={500}
            className="text-lg duration-500 hover:text-cyan-500"
            onClick={toggleMenu}
          >
            Product
          </Link>
        </li>
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link
            to="pages"
            spy="true"
            smooth="true"
            offset={40}
            duration={500}
            className="text-lg duration-500 hover:text-cyan-500"
            onClick={toggleMenu}
          >
            Pages
          </Link>
        </li>
        <li className="mx-4 my-6 cursor-pointer lg:my-0 li-style">
          <Link
            to={"/map"}
            className="text-lg duration-500 hover:text-cyan-500"
            onClick={toggleMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavSidebar