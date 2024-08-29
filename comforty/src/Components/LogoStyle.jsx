import Logo from "./../assets/svg/logo.svg?react";

const LogoStyle = () => {
  return (

          <div className="flex items-center gap-[6px]">
            <Logo />
            <p className="font-inter font-medium text-[26px] leading-[31.2px]">
              Comforty
            </p>
          </div>

  )
}

export default LogoStyle