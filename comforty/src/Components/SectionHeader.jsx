import SliderLeft from "./../assets/svg/slider-left.svg?react";
import SliderRight from "./../assets/svg/slider-right.svg?react";

const SectionHeader = ({ title, showSliders=true}) => {
  return (
    <div className="flex justify-between mt-20 mb-10">
      <h2 className="font-semibold font-inter text-[32px] leading-[35.2px]">
        {title}
      </h2>
      {showSliders && (
        <div className="flex items-center space-x-4">
          <div className="slider bg-secondary-white">
            <SliderLeft />
          </div>
          <div className="slider bg-secondary-white">
            <SliderRight />
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
