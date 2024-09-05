import RightArrow from "../../../assets/svg/arrow-right.svg?react";
import HeroImg1 from "../../../assets/images/heroimg1.png";
import HeroImg2 from "../../../assets/images/heroimg2.png";
import HeroImg3 from "../../../assets/images/heroimg3.png";
import DiscountIcon from "../../../assets/svg/feature1.svg?react";
import DeliveryIcon from "../../../assets/svg/feature2.svg?react";
import TimeIcon from "../../../assets/svg/feature3.svg?react";
import ShieldIcon from "../../../assets/svg/feature4.svg?react";
import Discount from "../../../assets/svg/discount.svg?react";
import Circle from "../../../assets/svg/circle.svg?react";
import "./hero.scss";
import "./feature.scss";
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
    <div className="pb-20 hero-wrapper bg-secondary-white max-w-[1200px] mx-auto h-[100vh]">
      <div className="pb-10 hero-container">
        <Carousel className="pb-30 ">
          {heroData.map((item, index) => (
            <div
              key={index}
              className="w-full gap-3 hero shrink-0 bg-secondary-white "
            >
              <div className="flex flex-col mx-auto max-width md:flex-row md:justify-between mb-[40px]">
                <div className="max-w-[500px] flex flex-col justify-center my-20 md:flex-col md:items-start mb-[25px]">
                  <p className="font-inter font-normal text-[14px] leading-[14px] text-blue">
                    {item.welcomeText}
                  </p>
                  <h1 className="clamp-font-size font-inter mt-[8px] mb-[24px]">
                    {item.title}
                  </h1>
                  <div>
                    <button className="gap-[20px] button">
                      Show Now
                      <RightArrow />
                    </button>
                  </div>
                </div>
                <div className="relative clamp-dimensions">
                  <div className="w-full h-full">
                    <Circle className="md:h-full md:w-full " />
                  </div>
                  <div className="absolute right-[92px] top-[80px]">
                    <img
                      src={item.image}
                      alt={`heroimg${index + 1}`}
                      className=" w-[320px]"
                      // width={475}
                    />
                  </div>
                  <div className="absolute right-16 top-12">
                    <div className="relative">
                      <Discount className="discount md:w-[120px] w-[80px]" />
                      <div className="absolute flex flex-col top-8 left-8">
                        <h2 className="percent font-bold font-inter md:text-[32px] text-[25px] leading-[40px] text-center text-[#F05C52]">
                          54%
                        </h2>
                        <span className="text font-semibold font-inter text-[13px] leading-[15.4px] text-center text-[#272343]">
                          Discount
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="relative mx-10 md:mx-[100px] z-100">
        <div className="feature-container flex items-center w-full justify-between py-[50px] px-10 border-2 border-gray-100 border-solid rounded-xl flex-wrap gap-5">
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
