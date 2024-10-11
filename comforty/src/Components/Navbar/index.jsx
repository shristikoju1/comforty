import "@/styles/navbar.scss";
import LangNavbar from "./LangNavbar";
import CartNavbar from "./CartNavbar";
import MainNavbar from "./MainNavbar";


const Navbar = () => {


  return (
    <div id="home" className="scroll-smooth">
      <LangNavbar/>
      <CartNavbar/>
      <MainNavbar/>
    </div>
  );
};

export default Navbar;
