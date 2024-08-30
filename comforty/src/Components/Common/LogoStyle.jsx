import Logo from "../../assets/svg/logo.svg?react";
import { NavLink } from "react-router-dom";

const LogoStyle = () => {
  return (
    <NavLink to="/">

    <div className="flex items-center gap-[6px]">
        <Logo />
        <p className="font-inter font-medium text-[26px] leading-[31.2px]">
          Comforty
        </p>
    </div>
    </NavLink>

  );
};

export default LogoStyle;
