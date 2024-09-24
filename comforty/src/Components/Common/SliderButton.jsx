import SliderLeft from "../../assets/svg/slider-left.svg?react";
import SliderRight from "../../assets/svg/slider-right.svg?react";

const SliderButton = ({ direction, onClick }) => {
  return (
    <button
      className={`slider bg-secondary-white p-2 rounded-full shadow-md hover:bg-primary transition-all ${direction === 'left' ? 'mr-2' : 'ml-2'}`}
      onClick={onClick}
    >
      {direction === 'left' ? <SliderLeft /> : <SliderRight />}
    </button>
  );
};

export default SliderButton;
