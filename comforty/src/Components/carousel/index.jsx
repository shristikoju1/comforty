import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import HeroImg1 from "../../assets/images/heroimg1.png";
import HeroImg2 from "../../assets/images/heroimg2.png";
import HeroImg3 from "../../assets/images/heroimg3.png";
import RightArrow from "../../assets/svg/arrow-right.svg?react";
import Discount from "../../assets/svg/discount.svg?react";
import Circle from "../../assets/svg/circle.svg?react";

import './carousel.css';

export default function Carousel() {
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

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index} className='bg-secondary-white'>
            <div className='flex flex-col mx-auto max-width md:flex-row md:justify-between mb-[50px] md:mb-[100px]'>
              <div className='flex flex-col justify-center mt-20 md:flex-col md:items-start mb-[25px] items-center'>
                <p className='font-inter font-normal text-[14px] leading-[14px] text-blue flex md:items-start items-center text-center'>
                  {item.welcomeText}
                </p>
                <h1 className='clamp-font-size leading-10 md:leading-[50px] lg:leading-[60px] xl:leading-[65px] mt-[8px] mb-[24px] text-[#272343] lg:items-start items-center text-center md:text-left'>
                  {item.title}
                </h1>
                <div>
                  <button className='gap-[20px] button'>
                    Show Now
                    <RightArrow />
                  </button>
                </div>
              </div>
              <div className='relative md:-mt-10'>
                <div className="flex items-center justify-center">
                <Circle className='mx-auto hero-circle' />
                <img src={item.image} alt={`heroimg${index + 1}`} 
            />
                </div>
               
                <div className='absolute md:right-10 top-24 sm:right-20 right-20'>
                  <div className='relative'>
                    <Discount className='discount md:w-[120px] w-[110px]' />
                    <div className='absolute flex flex-col top-8 left-8'>
                      <h2 className='percent font-bold font-inter md:text-[32px] text-[25px] leading-[40px] text-center text-[#F05C52]'>
                        54%
                      </h2>
                      <span className='text font-semibold font-inter text-[13px] leading-[15.4px] text-center text-[#272343]'>
                        Discount
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
