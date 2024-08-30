import SliderLeft from "../../assets/svg/slider-left.svg?react";
import SliderRight from "../../assets/svg/slider-right.svg?react";

const SectionHeader = ({ title, showSliders = true, backward, forward }) => {
  return (
    <div className="flex justify-between mt-20 mb-12">
      <h2 className="font-semibold text-[32px] leading-[35.2px]">
        {title}
      </h2>
      {showSliders && (
        <div className="flex items-center space-x-4">
          <div
            className="slider bg-secondary-white"
            onClick={backward} 
          >
            <SliderLeft />
          </div>
          <div
            className="slider bg-secondary-white"
            onClick={forward} 
          >
            <SliderRight />
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
