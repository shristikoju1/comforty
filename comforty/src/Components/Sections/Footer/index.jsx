import LogoStyle from "../../Common/LogoStyle";
import Facebook from "../../../assets/svg/facebook.svg?react";
import Twitter from "../../../assets/svg/twitter.svg?react";
import Instagram from "../../../assets/svg/instagram.svg?react";
import Pinterest from "../../../assets/svg/pinterest.svg?react";
import Youtube from "../../../assets/svg/youtube.svg?react";
import PaymentPartner from "../../../assets/svg/payment_partner.svg?react";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="mt-[80px]">
        <div className="flex flex-wrap justify-between gap-2 px-4 mx-auto max-width py-8 border-t border-b border-gray-100 h-[345px]">
          <div className="flex flex-col gap-[24px] max-w-[240px]">
            <LogoStyle />
            <p className="text-base font-normal text-blue">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus{" "}
            </p>
            <div className="flex gap-[18px]">
              <div className="social-media-wrapper">
              <Facebook className="social-media" />
              </div>
              <div className="social-media-wrapper">
              <Twitter className="social-media" />
              </div>
              <div className="social-media-wrapper">
              <Instagram className="social-media" />
              </div>
              <div className="social-media-wrapper">
              <Pinterest className="social-media" />
              </div>
              <div className="social-media-wrapper">
                
              <Youtube className="social-media" />
              </div>
       
      
         
       
            </div>
          </div>

          <div className="w-full sm:w-auto">
            <ul className="space-y-2">
              <h4>CATEGORY</h4>
              <li>
                <a href="#">Sofa</a>
              </li>
              <li>
                <a href="#">Armchair</a>
              </li>
              <li>
                <a href="#">Wing Chair</a>
              </li>
              <li>
                <a href="#">Desk Chair</a>
              </li>
              <li>
                <a href="#">Wooden Chair</a>
              </li>
              <li>
                <a href="#">Park Bench</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <ul className="space-y-2">
              <h4>SUPPORT</h4>
              <li>
                <a href="#">Help & Support</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>

          <div className="">
            <h4>NEWSLETTER</h4>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="button">Subscribe</button>
            </form>
            <p className="mt-4 max-w-[250px] text-[#272343]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 max-width">
        <p className="footer-text">@ 2021 - Blogy - Designed & Develop by <span>Zakirsoft</span></p>
        <PaymentPartner/>
      </div>
    </div>
  );
};

export default Footer;
