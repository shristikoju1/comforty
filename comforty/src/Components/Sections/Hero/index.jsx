import DiscountIcon from "../../../assets/svg/feature1.svg?react";
import DeliveryIcon from "../../../assets/svg/feature2.svg?react";
import TimeIcon from "../../../assets/svg/feature3.svg?react";
import ShieldIcon from "../../../assets/svg/feature4.svg?react";
import "./hero.scss";
import "./feature.scss";
import Swiper from "../../carousel";


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
    <>
      <div className='mx-5'>
        <div className='max-w-[1300px] mx-auto md:h-[700px]'>
          <Swiper />
        </div>
      </div>

      <div className='relative z-100 md:mt-[-170px] my-[50px] z-10 max-width'>
        <div className='feature-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full py-[50px] px-10 border-2 border-gray-100 border-solid rounded-xl  gap-5'>
          {featuresData.map((feature, index) => (
            <div key={index} className='flex items-center gap-2'>
              <feature.icon className='feature-icon' />
              <div>
                <h4 className='text-base font-medium'>{feature.title}</h4>
                <p className='text-xs gray-600'>{feature.description}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default hero;
