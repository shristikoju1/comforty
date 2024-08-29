import RightArrow from "../../assets/svg/arrow-right.svg?react";
import HeroImg1 from '../../assets/images/heroimg1.png'
import SliderLeft from '../../assets/svg/slider-left.svg?react';
import SliderRight from '../../assets/svg/slider-right.svg?react';
import './styles.scss'

const hero = () => {
  return (
    <div>
    <div className="flex-row gap-3 max-w-[1200px] mx-auto bg-secondary-white h-[580px]">
        <div className="slider">
            <SliderLeft/>
        </div>
      <div className="flex-row mx-auto max-width">
        <div className="w-[500px] ">
        <p className="font-inter font-medium text-[14px] leading-[14px] text-[#272343]">WELCOME TO CHAIRY</p>
        <h1 className="font-inter font-bold text-[68px] leading-[74.8px] mt-[8px] mb-[24px]">Best Furniture Collection for your interior.</h1>
          <button className="gap-[20px] button">
            <a href="#">Show Now</a>
            <RightArrow />
          </button>
        </div>
        <div>
            <div className="circle w-[500px] h-[500px] rounded-full bg-[#E1E3E5]"></div>
            <img src={HeroImg1} alt="heroimg" className="w-[320px]" />
        </div>
      </div>
      <div className="slider">
        <SliderRight/>
      </div>
    </div>
        
    </div>

  );
};

export default hero;
