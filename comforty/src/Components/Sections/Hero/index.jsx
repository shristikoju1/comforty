import RightArrow from "../../../assets/svg/arrow-right.svg?react";
import HeroImg1 from "../../../assets/images/heroimg1.png";
import HeroImg2 from "../../../assets/images/heroimg2.png";
import HeroImg3 from "../../../assets/images/heroimg3.png";
// import SliderLeft from "../../../assets/svg/slider-left.svg?react";
// import SliderRight from "../../../assets/svg/slider-right.svg?react";
import DiscountIcon from "../../../assets/svg/feature1.svg?react";
import DeliveryIcon from "../../../assets/svg/feature2.svg?react";
import TimeIcon from "../../../assets/svg/feature3.svg?react";
import ShieldIcon from "../../../assets/svg/feature4.svg?react";
import "./hero.scss";
import Carousel from "./Carousel";

const heroData = [
  {
    welcomeText: "WELCOME TO CHAIRY",
    title: "Best Furniture Collection for your interior.",
    image: HeroImg1,
  },
  {
    welcomeText: "WELCOME TO CHAIRY",
    title: "Best Furniture Collection for your interior.",
    image: HeroImg2,
  },
  {
    welcomeText: "WELCOME TO CHAIRY",
    title: "Best Furniture Collection for your interior.",
    image: HeroImg3,
  },
];

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
    <div className="pb-20 hero-wrapper bg-secondary-white max-w-[1200px] mx-auto">
      <div className="pb-10 hero-container">
        <Carousel className='pb-30'>
          {heroData.map((item, index) => (
            <div
              key={index}
              className="w-full gap-3 hero shrink-0 bg-secondary-white "
            >
              {/* <div className="slider">
            <SliderLeft />
          </div> */}
              <div className="flex-row mx-auto max-width">
                <div className="max-w-[500px] ">
                  <p className="font-inter font-normal text-[14px] leading-[14px] text-blue">
                    {item.welcomeText}
                  </p>
                  <h1 className="font-inter font-bold text-[68px] leading-[74.8px] mt-[8px] mb-[24px]">
                    {item.title}
                  </h1>
                  <button className="gap-[20px] button">
                    <a href="#">Show Now</a>
                    <RightArrow />
                  </button>
                </div>
                <div className="relative">
                  <div className="circle w-[500px] h-[500px] rounded-full bg-[#E1E3E5]"></div>
                  <img
                    src={item.image}
                    alt={`heroimg${index + 1}`}
                    className="hero-img w-[320px]"
                  />
                </div>
              </div>
              {/* <div className="slider">
            <SliderRight />
          </div> */}
            </div>
          ))}
        </Carousel>
      </div>

      <div className="relative mx-auto max-width z-100">
        <div className="feature-container flex items-center justify-between max-width py-[50px] border-2 border-gray-100 border-solid rounded-xl max-h-[150px]">
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
