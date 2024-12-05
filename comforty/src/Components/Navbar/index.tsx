import "@/styles/navbar.scss";
import LanguageNavbar from "./LanguageNavbar";
import CartNavbar from "./CartNavbar";
import NavigationNavbar from "./NavigationNavbar";

const Navbar: React.FC = () => {
  return (
    <div id="home" className="scroll-smooth">
      <LanguageNavbar />
      <CartNavbar />
      <NavigationNavbar />
    </div>
  );
};

export default Navbar;
