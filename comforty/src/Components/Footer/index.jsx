import Facebook from "@/assets/svg/facebook.svg?react";
import Twitter from "@/assets/svg/twitter.svg?react";
import Instagram from "@/assets/svg/instagram.svg?react";
import Pinterest from "@/assets/svg/pinterest.svg?react";
import Youtube from "@/assets/svg/youtube.svg?react";
import PaymentPartner from "@/assets/svg/payment_partner.svg?react";
import Logo from "@/assets/svg/logo.svg?react";
import "@/styles/footer.scss";

const Footer = () => {
  return (
    <div id="about">
      <div className="mt-[80px] border-t border-b border-gray-500">
        
        <div className="flex flex-wrap justify-between gap-12 px-20 py-20 md:gap-5 max-width">
          <div className="flex flex-col gap-[24px] max-w-[240px]">
          <div className="flex items-center gap-[6px]">
        <Logo />
        <p className="font-inter font-medium text-[26px] leading-[31.2px]">
          Comforty
        </p>
    </div>
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

          <div className="w-full px-4 sm:w-auto footer-list">
            <ul className="space-y-2">
              <h4 className="footer-heading">CATEGORY</h4>
              <li>
                <a href="/sofa">Sofa</a>
              </li>
              <li>
                <a href="/armchair">Armchair</a>
              </li>
              <li>
                <a href="/wing-chair">Wing Chair</a>
              </li>
              <li>
                <a href="/desk-chair">Desk Chair</a>
              </li>
              <li>
                <a href="/wooden-chair">Wooden Chair</a>
              </li>
              <li>
                <a href="/park-bench">Park Bench</a>
              </li>
            </ul>
          </div>

          <div className="w-full px-4 sm:w-auto footer-list">
            <ul className="space-y-2">
              <h4  className="footer-heading">SUPPORT</h4>
              <li>
                <a href="/help-and-support">Help & Support</a>
              </li>
              <li>
                <a href="/terms-and-conditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/help">Help</a>
              </li>
            </ul>
          </div>

          <div className="px-4 ">
            <h4  className="font-inter font-medium text-sm leading-[15.4px] text-[/sofa9A9CAA] mb-5">NEWSLETTER</h4>
            <form className="flex gap-1">
              <input
                type="email"
                placeholder="Your email"
                className="px-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="button">Subscribe</button>
            </form>
            <p className="mt-4 max-w-[320px] text-[/sofa27234394]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>
        
      </div>
      <div className="flex items-center justify-between gap-10 py-5 max-width">
        <p className="footer-text">@ 2021 - Blogy - Designed & Develop by <span>Zakirsoft</span></p>
        <PaymentPartner/>
      </div>
    </div>
  );
};

export default Footer;
