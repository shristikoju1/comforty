import "./navbar.scss";
import NavbarOne from "./NavbarOne";
import NavbarTwo from "./NavbarTwo";
import NavbarThree from "./NavbarThree";


const Navbar = () => {


  return (
    <div id="home" className="scroll-smooth">
      <NavbarOne/>
      <NavbarTwo/>
      <NavbarThree/>

      {/* Second Navbar with Scroll Effect */}
    </div>
  );
};

export default Navbar;
