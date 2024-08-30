import RightArrow from "../../../assets/svg/arrow-right.svg?react";
import HeroImg1 from "../../../assets/images/heroimg1.png";
import SliderLeft from "../../../assets/svg/slider-left.svg?react";
import SliderRight from "../../../assets/svg/slider-right.svg?react";
import DiscountIcon from "../../../assets/svg/feature1.svg?react";
import DeliveryIcon from "../../../assets/svg/feature2.svg?react";
import TimeIcon from "../../../assets/svg/feature3.svg?react";
import ShieldIcon from "../../../assets/svg/feature4.svg?react";
import "./hero.scss";

const featuresData = [
  {
    icon: DiscountIcon,
    title: "Discount",
    description: "Every week new sales",
  },
  {
    icon: DeliveryIcon,
    title: "Free Delivery",
    description: "100% Free for all orders",
  },
  {
    icon: TimeIcon,
    title: "Great Support 24/7",
    description: "We care your experiences",
  },
  {
    icon: ShieldIcon,
    title: "Secure Payment",
    description: "100% Secure Payment Method",
  },
];

const hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero flex-row gap-3 max-w-[1200px] mx-auto bg-secondary-white h-[580px]">
        <div className="slider">
          <SliderLeft />
        </div>
        <div className="flex-row mx-auto max-width">
          <div className="w-[500px] ">
            <p className="font-inter font-normal text-[14px] leading-[14px] text-blue">
              WELCOME TO CHAIRY
            </p>
            <h1 className="font-inter font-bold text-[68px] leading-[74.8px] mt-[8px] mb-[24px]">
              Best Furniture Collection for your interior.
            </h1>
            <button className="gap-[20px] button">
              <a href="#">Show Now</a>
              <RightArrow />
            </button>
          </div>
          <div>
            <div className="circle w-[500px] h-[500px] rounded-full bg-[#E1E3E5]"></div>
            <img src={HeroImg1} alt="heroimg" className="hero-img w-[320px]" />
          </div>
        </div>
        <div className="slider">
          <SliderRight />
        </div>
      </div>
      <div className="mx-auto max-width">
        <div className="feature-container flex items-center justify-center gap-2 space-x-5 px-3 py-[50px] border-2 border-gray-100 border-solid rounded-xl h-[150px]">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <feature.icon className="feature-icon" />
              <div>
                <h4 className="text-base font-medium">{feature.title}</h4>
                <p className="text-xs gray-600 ">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default hero;
